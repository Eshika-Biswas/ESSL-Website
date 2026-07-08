import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, businessEmail, message, hearAboutUs, agreedToComms } = body;

    // Server-side validation
    if (!firstName || !lastName || !businessEmail || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(businessEmail)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Send email using Resend SDK
    // Default onboarding email can only send to the registered account email (eshika.biswas@ensure-bd.com).
    // Note: Swapping from onboarding@resend.dev to verified domain (e.g. contact@essl.com) requires Resend domain verification.
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'eshika.biswas@ensure-bd.com',
      replyTo: businessEmail,
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
          <h2 style="color: #0f4e7a; border-bottom: 1px solid #e2e8f0; padding-bottom: 10px; margin-top: 0;">New Contact Form Submission</h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 180px;">Name:</td>
              <td style="padding: 8px 0;">${firstName} ${lastName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Business Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${businessEmail}">${businessEmail}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">How they heard:</td>
              <td style="padding: 8px 0;">${hearAboutUs || 'Not specified'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Consent to Comms:</td>
              <td style="padding: 8px 0;">${agreedToComms ? 'Yes' : 'No'}</td>
            </tr>
          </table>

          <div style="margin-top: 30px; padding: 15px; background-color: #f8fafc; border-left: 4px solid #176ca7; border-radius: 4px;">
            <h4 style="margin: 0 0 10px 0; color: #0f4e7a;">Message:</h4>
            <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
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
