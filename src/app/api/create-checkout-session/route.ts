import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

// Check if Stripe secret key is available
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
if (!stripeSecretKey) {
  console.error('STRIPE_SECRET_KEY is not set in environment variables');
}

const stripe = stripeSecretKey ? new Stripe(stripeSecretKey, {
  apiVersion: '2025-05-28.basil',
}) : null;

// eBook data mapping
const ebooks = {
  'complete-collection': {
    title: 'Celestia Scope Complete Collection',
    description: 'All 4 eBooks: Your Complete Spiritual Journey - Save $5 with bundle pricing',
    image: 'https://pmhvmdojpbazijthcskg.supabase.co/storage/v1/object/public/ebook-covers//Celestial%20Rhythms:%20Navigating%20the%20Cosmos%20Through%20Time.png',
    priceId: 'price_ebook_bundle',
    unitAmount: 1499,
  },
  'celestial-rhythms': {
    title: 'Celestial Rhythms: Navigating the Cosmos Through Time',
    description: 'A comprehensive exploration of humanity\'s relationship with the cosmos, covering timekeeping evolution, cultural traditions, navigation history, and modern applications.',
    image: 'https://pmhvmdojpbazijthcskg.supabase.co/storage/v1/object/public/ebook-covers//Celestial%20Rhythms:%20Navigating%20the%20Cosmos%20Through%20Time.png',
    priceId: 'price_ebook_499',
    unitAmount: 499,
  },
  'herbal-healing': {
    title: 'Herbal Healing: A Beginner\'s Journey into Natural Medicine',
    description: 'Discover the ancient art of herbal healing with this comprehensive beginner\'s guide that bridges traditional wisdom with modern wellness practices.',
    image: 'https://pmhvmdojpbazijthcskg.supabase.co/storage/v1/object/public/ebook-covers//Herbal%20Healing:%20A%20Beginner\'s%20Journey%20into%20Natural%20Medicine.png',
    priceId: 'price_ebook_499',
    unitAmount: 499,
  },
  'unlocking-stars': {
    title: 'Unlocking the Stars: A Beginner\'s Guide to Your Birth Chart',
    description: 'Transform the ancient art of astrology into an accessible journey of self-discovery with this comprehensive beginner\'s guide.',
    image: 'https://pmhvmdojpbazijthcskg.supabase.co/storage/v1/object/public/ebook-covers//Unlocking%20the%20Stars:%20A%20Beginner\'s%20Guide%20to%20Your%20Birth%20Chart.png',
    priceId: 'price_ebook_499',
    unitAmount: 499,
  },
  'moons-embrace': {
    title: "The Moon's Embrace: Simple Practices for Emotional Recovery",
    description: 'A gentle, beginner-friendly guide to emotional healing through lunar cycles, journaling, meditation, and self-care rituals.',
    image: 'https://pmhvmdojpbazijthcskg.supabase.co/storage/v1/object/public/ebook-covers//The%20Moon\'s%20Embrace:%20Simple%20Practices%20for%20Emotional%20Recovery.png',
    priceId: 'price_moons_embrace',
    unitAmount: 599,
  },
  'celestial-insights': {
    title: 'Celestial Insights: Unlocking Your Birth Chart',
    description: 'Master the art of reading and interpreting your birth chart to understand your personality, strengths, and life purpose with this comprehensive guide.',
    image: 'https://pmhvmdojpbazijthcskg.supabase.co/storage/v1/object/public/ebook-covers//Celestial%20Insights:%20Unlocking%20Your%20Birth%20Chart%20COVER.png',
    priceId: 'price_ebook_799',
    unitAmount: 799,
  }
};

export async function POST(request: NextRequest) {
  try {
    if (!stripe) {
      return NextResponse.json(
        { error: 'Stripe is not configured. Please check your environment variables.' },
        { status: 500 }
      );
    }

    const { ebookId, successUrl, cancelUrl } = await request.json();

    const ebook = ebooks[ebookId as keyof typeof ebooks];
    if (!ebook) {
      return NextResponse.json(
        { error: 'Invalid eBook ID' },
        { status: 400 }
      );
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: ebook.title,
              description: ebook.description,
              images: [ebook.image],
            },
            unit_amount: ebook.unitAmount, // Use unitAmount from the ebooks object
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${successUrl}?session_id={CHECKOUT_SESSION_ID}&ebook_id=${ebookId}`,
      cancel_url: cancelUrl,
      metadata: {
        ebookId: ebookId,
      },
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    );
  }
} 