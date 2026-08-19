import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { createServerClient } from '@/lib/supabaseClient';

const resend = new Resend(process.env.RESEND_API_KEY || 're_dummy_key_for_build');
const HR_ADMIN_EMAIL = 'mehedi.hasan@ensure-bd.com';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    
    const jobPostingId = formData.get('jobPostingId') as string;
    const fullName = formData.get('fullName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const address = formData.get('address') as string;
    const coverLetter = formData.get('coverLetter') as string;
    const expectedSalary = formData.get('expectedSalary') as string;
    const cvFile = formData.get('cv') as File;

    // 1. Server-side validation
    if (!jobPostingId || !fullName || !email || !phone || !address || !expectedSalary || !cvFile) {
      return NextResponse.json(
        { error: 'Missing required fields. Please fill in all fields and upload your CV.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format.' },
        { status: 400 }
      );
    }

    // Validate file size (max 5MB)
    const MAX_FILE_SIZE = 5 * 1024 * 1024;
    if (cvFile.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: 'CV file size exceeds the 5MB limit.' },
        { status: 400 }
      );
    }

    // Validate file type
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];
    if (!allowedTypes.includes(cvFile.type)) {
      return NextResponse.json(
        { error: 'Only PDF, DOC, or DOCX formats are allowed.' },
        { status: 400 }
      );
    }

    const supabaseAdmin = createServerClient();

    // 2. Fetch Job Details
    const { data: jobData, error: jobError } = await supabaseAdmin
      .from('job_postings')
      .select('title')
      .eq('id', jobPostingId)
      .single();

    if (jobError || !jobData) {
      return NextResponse.json(
        { error: 'Invalid Job Posting ID. This position might no longer exist.' },
        { status: 400 }
      );
    }

    const jobTitle = jobData.title;

    // 3. Upload CV to Supabase Storage
    const fileExt = cvFile.name.split('.').pop() || 'pdf';
    const uniqueFileName = `${Date.now()}-${Math.random().toString(36).substring(2, 15)}.${fileExt}`;
    const filePath = `${jobPostingId}/${uniqueFileName}`;
    const cvBuffer = Buffer.from(await cvFile.arrayBuffer());

    const { data: uploadData, error: uploadError } = await supabaseAdmin.storage
      .from('cv-uploads')
      .upload(filePath, cvBuffer, {
        contentType: cvFile.type,
        duplex: 'half'
      });

    if (uploadError) {
      console.error('Storage upload error:', uploadError);
      return NextResponse.json(
        { error: 'Failed to upload CV. Please try again.' },
        { status: 500 }
      );
    }

    // 4. Insert application record into database
    const { data: appData, error: appError } = await supabaseAdmin
      .from('job_applications')
      .insert([
        {
          job_id: jobPostingId,
          job_title: jobTitle,
          full_name: fullName.trim(),
          email: email.trim(),
          phone: phone.trim(),
          address: address.trim(),
          cover_letter: coverLetter ? coverLetter.trim() : '', // Send empty string instead of null to prevent NOT NULL errors
          expected_salary: expectedSalary.trim(),
          cv_url: filePath,
          cv_file_name: cvFile.name
        }
      ])
      .select('id')
      .single();

    if (appError || !appData) {
      console.error('Database insert error:', appError);
      // Clean up uploaded storage file
      await supabaseAdmin.storage.from('cv-uploads').remove([filePath]);
      return NextResponse.json(
        { error: 'Failed to save application details. Please try again.' },
        { status: 500 }
      );
    }

    const applicationId = appData.id;

    // 5. Generate signed download link for the email backup
    const { data: signedData } = await supabaseAdmin.storage
      .from('cv-uploads')
      .createSignedUrl(filePath, 60 * 60 * 24 * 7); // 7 days expiry

    const signedUrl = signedData?.signedUrl || '';

    // 6. Send emails synchronously (await them so the serverless/PM2 function context remains active)
    console.log('>>> REACHED EMAIL SEND BLOCK <<<');
    console.log('[Email] RESEND_API_KEY present?', !!process.env.RESEND_API_KEY);

    try {
      // Send email to HR Admin
      const hrEmail = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: HR_ADMIN_EMAIL,
        replyTo: email,
        subject: `[Job Application] ${fullName} applied for ${jobTitle}`,
        html: `
          <div style="font-family: sans-serif; max-width: 650px; margin: 0 auto; padding: 25px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff; color: #1f2937;">
            <h2 style="color: #146dae; border-bottom: 2px solid #f1f5f9; padding-bottom: 12px; margin-top: 0; font-size: 20px;">
              New Job Application Received
            </h2>
            
            <h3 style="color: #374151; font-size: 14px; text-transform: uppercase; tracking-spacing: 0.05em; margin-top: 25px; margin-bottom: 10px; border-bottom: 1px solid #f1f5f9; padding-bottom: 5px;">
              Application Details
            </h3>
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr>
                <td style="padding: 6px 0; font-weight: 600; width: 180px; color: #4b5563;">Position Applied:</td>
                <td style="padding: 6px 0; font-weight: bold; color: #111827;">${jobTitle}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; font-weight: 600; color: #4b5563;">Applicant Name:</td>
                <td style="padding: 6px 0;">${fullName}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; font-weight: 600; color: #4b5563;">Email Address:</td>
                <td style="padding: 6px 0;"><a href="mailto:${email}" style="color: #146dae; text-decoration: none;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 6px 0; font-weight: 600; color: #4b5563;">Phone Number:</td>
                <td style="padding: 6px 0;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; font-weight: 600; color: #4b5563;">Current Address:</td>
                <td style="padding: 6px 0;">${address}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; font-weight: 600; color: #4b5563;">Expected Salary:</td>
                <td style="padding: 6px 0; font-weight: 500;">${expectedSalary}</td>
              </tr>
            </table>

            ${coverLetter ? `
              <h3 style="color: #374151; font-size: 14px; text-transform: uppercase; tracking-spacing: 0.05em; margin-top: 25px; margin-bottom: 10px; border-bottom: 1px solid #f1f5f9; padding-bottom: 5px;">
                Cover Letter
              </h3>
              <div style="padding: 15px; background-color: #f8fafc; border-left: 4px solid #146dae; border-radius: 4px; font-size: 14px; line-height: 1.6; white-space: pre-wrap; color: #1f2937;">
                ${coverLetter}
              </div>
            ` : ''}

            <h3 style="color: #374151; font-size: 14px; text-transform: uppercase; tracking-spacing: 0.05em; margin-top: 25px; margin-bottom: 10px; border-bottom: 1px solid #f1f5f9; padding-bottom: 5px;">
              Curriculum Vitae (CV)
            </h3>
            <p style="font-size: 14px; margin: 0 0 10px 0;">
              The applicant's CV file (<strong>${cvFile.name}</strong>) is attached to this email.
            </p>
            ${signedUrl ? `
              <p style="font-size: 14px; margin: 0;">
                Alternative Download Link (valid for 7 days):<br />
                <a href="${signedUrl}" style="display: inline-block; margin-top: 6px; padding: 8px 16px; background-color: #146dae; color: #ffffff; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 13px;">
                  Download CV File
                </a>
              </p>
            ` : ''}
          </div>
        `,
        attachments: [
          {
            filename: cvFile.name,
            content: cvBuffer,
          }
        ]
      });
      console.log('>>> HR EMAIL RESULT:', JSON.stringify(hrEmail));
    } catch (err) {
      console.error('>>> HR EMAIL FAILED:', err);
    }

    try {
      // Send confirmation email to Applicant
      const candidateEmail = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: email, // Candidate email
        subject: `Application Received: ${jobTitle} at ESSL`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 25px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff; color: #1f2937;">
            <h2 style="color: #146dae; margin-top: 0; font-size: 20px;">
              Thank you for applying to ESSL!
            </h2>
            <p style="font-size: 14px; line-height: 1.6;">
              Hi ${fullName},
            </p>
            <p style="font-size: 14px; line-height: 1.6;">
              We have successfully received your application for the <strong>${jobTitle}</strong> position. 
            </p>
            <p style="font-size: 14px; line-height: 1.6;">
              Our HR recruiting team will review your application details, qualifications, and CV. If your profile aligns with our requirements for the role, we will reach out to schedule an interview.
            </p>
            <p style="font-size: 14px; line-height: 1.6; margin-bottom: 25px;">
              Thank you for your interest in joining ESSL. We wish you the best of luck in your job search!
            </p>
            <hr style="border: 0; border-top: 1px solid #f1f5f9; margin-bottom: 15px;" />
            <p style="font-size: 12px; color: #9ca3af; margin: 0;">
              Ensure Support Services Limited (ESSL)<br />
              Dhaka, Bangladesh
            </p>
          </div>
        `
      });
      console.log('>>> CANDIDATE EMAIL RESULT:', JSON.stringify(candidateEmail));
    } catch (err) {
      console.error('>>> CANDIDATE EMAIL FAILED:', err);
    }

    return NextResponse.json({ success: true, applicationId });
  } catch (error: any) {
    console.error('API Career Application error:', error);
    return NextResponse.json(
      { error: error.message || 'An internal server error occurred.' },
      { status: 500 }
    );
  }
}
