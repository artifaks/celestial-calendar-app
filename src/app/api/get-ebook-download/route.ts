import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

// eBook file mapping
const ebookFiles = {
  'complete-collection': [
    'https://pmhvmdojpbazijthcskg.supabase.co/storage/v1/object/public/ebooks//Celestial%20Rhythms:%20Navigating%20the%20Cosmos%20Through%20Time.pdf',
    'https://pmhvmdojpbazijthcskg.supabase.co/storage/v1/object/public/ebooks//Herbal%20Healing:%20A%20Beginner\'s%20Journey%20into%20Natural%20Medicine.pdf',
    'https://pmhvmdojpbazijthcskg.supabase.co/storage/v1/object/public/ebooks//Unlocking%20the%20Stars:%20A%20Beginner\'s%20Guide%20to%20Your%20Birth%20Chart.pdf',
    'https://pmhvmdojpbazijthcskg.supabase.co/storage/v1/object/public/ebooks//The%20Moon\'s%20Embrace:%20Simple%20Practices%20for%20Emotional%20Recovery.pdf',
    'https://pmhvmdojpbazijthcskg.supabase.co/storage/v1/object/public/ebooks//Celestial%20Insights:%20Unlocking%20Your%20Birth%20Chart.pdf'
  ],
  'celestial-rhythms': 'https://pmhvmdojpbazijthcskg.supabase.co/storage/v1/object/public/ebooks//Celestial%20Rhythms:%20Navigating%20the%20Cosmos%20Through%20Time.pdf',
  'herbal-healing': 'https://pmhvmdojpbazijthcskg.supabase.co/storage/v1/object/public/ebooks//Herbal%20Healing-%20A%20Beginner\'s%20Journey%20into%20Natural%20Medicine.pdf',
  'unlocking-stars': 'https://pmhvmdojpbazijthcskg.supabase.co/storage/v1/object/public/ebooks//Unlocking%20the%20Stars-%20A%20Beginner\'s%20Guide%20to%20Your%20Birth%20Chart.pdf',
  'moons-embrace': 'https://pmhvmdojpbazijthcskg.supabase.co/storage/v1/object/public/ebooks//The%20Moon\'s%20Embrace:%20Simple%20Practices%20for%20Emotional%20Recovery.pdf',
  'celestial-insights': 'https://pmhvmdojpbazijthcskg.supabase.co/storage/v1/object/public/ebooks//Celestial%20Insights:%20Unlocking%20Your%20Birth%20Chart.pdf'
};

export async function POST(request: NextRequest) {
  try {
    const { sessionId, ebookId } = await request.json();

    if (!sessionId || !ebookId) {
      return NextResponse.json(
        { error: 'Session ID and eBook ID are required' },
        { status: 400 }
      );
    }

    // Verify payment with Stripe
    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== 'paid') {
      return NextResponse.json(
        { error: 'Payment not completed' },
        { status: 400 }
      );
    }

    // Get the eBook file URL
    const ebookFile = ebookFiles[ebookId as keyof typeof ebookFiles];
    if (!ebookFile) {
      return NextResponse.json(
        { error: 'Invalid eBook ID' },
        { status: 400 }
      );
    }

    // Record the purchase in Supabase if available
    if (supabase) {
      try {
        await supabase
          .from('ebook_purchases')
          .insert({
            session_id: sessionId,
            ebook_id: ebookId,
            customer_email: session.customer_details?.email,
            amount: session.amount_total / 100, // Convert from cents
            status: 'completed'
          });
      } catch (error) {
        console.error('Error recording purchase:', error);
        // Don't fail the download if recording fails
      }
    }

    return NextResponse.json({ downloadUrl: ebookFile });
  } catch (error) {
    console.error('Error generating download link:', error);
    return NextResponse.json(
      { error: 'Failed to generate download link' },
      { status: 500 }
    );
  }
} 