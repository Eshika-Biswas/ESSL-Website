import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      fullName,
      company,
      workEmail,
      phoneCode,
      phoneNumber,
      country,
      city,
      role,
      areaOfInterest, // Array of strings
      message,
      privacyAgreed,
    } = body;

    // Server-side validation for all required fields
    if (!fullName || !company || !workEmail || !phoneNumber || !country || !city || !role || !message || !privacyAgreed) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(workEmail)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    const formattedPhone = `${phoneCode || ''} ${phoneNumber}`;
    const interestsList = areaOfInterest && areaOfInterest.length > 0
      ? areaOfInterest.join(', ')
      : 'None selected';

    // Send email using Resend SDK to the verified sandbox email
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'eshikabiswas801@gmail.com',
      replyTo: workEmail,
      subject: `New Contact Submission from ${fullName} (${company})`,
      html: `
        <div style="font-family: sans-serif; max-width: 650px; margin: 0 auto; padding: 25px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff; color: #1f2937;">
          <h2 style="color: #176ca7; border-bottom: 2px solid #f1f5f9; padding-bottom: 12px; margin-top: 0; font-size: 20px; font-weight: bold;">
            New Contact Submission (ACPL Style Redesign)
          </h2>
          
          <h3 style="color: #374151; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; margin-top: 25px; margin-bottom: 10px; border-bottom: 1px solid #f1f5f9; padding-bottom: 5px;">
            Your Details
          </h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 6px 0; font-weight: 600; width: 180px; font-size: 14px; color: #4b5563;">Full Name:</td>
              <td style="padding: 6px 0; font-size: 14px;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; font-weight: 600; font-size: 14px; color: #4b5563;">Company:</td>
              <td style="padding: 6px 0; font-size: 14px;">${company}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; font-weight: 600; font-size: 14px; color: #4b5563;">Work Email:</td>
              <td style="padding: 6px 0; font-size: 14px;"><a href="mailto:${workEmail}" style="color: #176ca7; text-decoration: none;">${workEmail}</a></td>
            </tr>
            <tr>
              <td style="padding: 6px 0; font-weight: 600; font-size: 14px; color: #4b5563;">Phone:</td>
              <td style="padding: 6px 0; font-size: 14px;">${formattedPhone}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; font-weight: 600; font-size: 14px; color: #4b5563;">Location:</td>
              <td style="padding: 6px 0; font-size: 14px;">${city}, ${country}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; font-weight: 600; font-size: 14px; color: #4b5563;">Role:</td>
              <td style="padding: 6px 0; font-size: 14px;">${role}</td>
            </tr>
          </table>

          <h3 style="color: #374151; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; margin-top: 25px; margin-bottom: 10px; border-bottom: 1px solid #f1f5f9; padding-bottom: 5px;">
            Area of Interest
          </h3>
          <p style="margin: 0; font-size: 14px; line-height: 1.5; color: #111827; font-weight: 500;">
            ${interestsList}
          </p>

          <h3 style="color: #374151; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; margin-top: 25px; margin-bottom: 10px; border-bottom: 1px solid #f1f5f9; padding-bottom: 5px;">
            Message / Requirements
          </h3>
          <div style="padding: 15px; background-color: #f8fafc; border-left: 4px solid #ff6b35; border-radius: 4px; font-size: 14px; line-height: 1.6; white-space: pre-wrap; color: #1f2937;">
            ${message}
          </div>
          
          <div style="margin-top: 30px; font-size: 11px; color: #9ca3af; border-top: 1px solid #f1f5f9; padding-top: 10px;">
            Privacy Policy Agreed: ${privacyAgreed ? 'Yes' : 'No'}
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error('Server error handling contact form:', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
