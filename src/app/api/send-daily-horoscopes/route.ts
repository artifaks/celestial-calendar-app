import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

// Only import Resend if API key is available
let Resend: any = null;
if (process.env.RESEND_API_KEY) {
  try {
    Resend = require('resend').Resend;
  } catch (error) {
    console.log('Resend not available');
  }
}

export async function POST(request: NextRequest) {
  try {
    // Check if Resend is available
    if (!Resend || !process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { email, horoscope } = await request.json();

    if (!email || !horoscope) {
      return NextResponse.json(
        { error: 'Email and horoscope are required' },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
              from: 'Celestia Scope <noreply@yourdomain.com>',
      to: [email],
      subject: 'Your Daily Horoscope 🌟',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #FFD700; text-align: center;">🌟 Your Daily Horoscope 🌟</h1>
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; border-radius: 10px; color: white;">
            <p style="font-size: 18px; line-height: 1.6;">${horoscope}</p>
          </div>
          <p style="text-align: center; margin-top: 20px; color: #666;">
            Thank you for subscribing to daily horoscopes! ✨
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Error sending email:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 