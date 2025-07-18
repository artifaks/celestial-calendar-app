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

// Membership plans data
const membershipPlans = {
  'celestial-gold': {
    title: 'Celestial Gold Membership',
    description: 'Premium cosmic insights and personalized guidance',
    priceId: 'price_celestial_gold_monthly',
    unitAmount: 499, // $4.99
    features: [
      'Personalized Birth Chart Forecasts',
      'Moon Phase Ritual Guides',
      'Downloadable Lunar Calendar',
      'Advanced Astrology Insights',
      'Priority Support',
      'Exclusive Content'
    ]
  },
  'cosmic-platinum': {
    title: 'Cosmic Platinum Membership',
    description: 'Advanced astrology with personal consultations',
    priceId: 'price_cosmic_platinum_monthly',
    unitAmount: 999, // $9.99
    features: [
      'Everything in Celestial Gold',
      '1-on-1 Monthly Astrology Consultations',
      'Advanced Birth Chart Analysis',
      'Custom Ritual Creation',
      'Priority Email Support',
      'Exclusive Content Library'
    ]
  },
  'mystic-diamond': {
    title: 'Mystic Diamond Membership',
    description: 'Ultimate spiritual guidance with live sessions',
    priceId: 'price_mystic_diamond_monthly',
    unitAmount: 1999, // $19.99
    features: [
      'Everything in Cosmic Platinum',
      'Weekly Live Group Sessions',
      'Custom Birth Chart Jewelry Recommendations',
      'Personalized Crystal Prescriptions',
      'Advanced Planetary Transit Alerts',
      'VIP Community Access'
    ]
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

    const { planId, successUrl, cancelUrl, customerEmail } = await request.json();

    const plan = membershipPlans[planId as keyof typeof membershipPlans];
    if (!plan) {
      return NextResponse.json(
        { error: 'Invalid membership plan ID' },
        { status: 400 }
      );
    }

    // Create or retrieve customer
    let customer;
    if (customerEmail) {
      const existingCustomers = await stripe.customers.list({
        email: customerEmail,
        limit: 1,
      });
      
      if (existingCustomers.data.length > 0) {
        customer = existingCustomers.data[0];
      } else {
        customer = await stripe.customers.create({
          email: customerEmail,
          metadata: {
            source: 'celestia-scope-membership'
          }
        });
      }
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      customer: customer?.id,
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: plan.title,
              description: plan.description,
              images: ['https://celestia-scope.vercel.app/images/celestia-scope-logo.png'],
            },
            unit_amount: plan.unitAmount,
            recurring: {
              interval: 'month',
            },
          },
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${successUrl}?session_id={CHECKOUT_SESSION_ID}&plan_id=${planId}`,
      cancel_url: cancelUrl,
      metadata: {
        planId: planId,
        planType: plan.title,
      },
      subscription_data: {
        metadata: {
          planId: planId,
          planType: plan.title,
        },
      },
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    console.error('Error creating membership session:', error);
    return NextResponse.json(
      { error: 'Failed to create membership session' },
      { status: 500 }
    );
  }
} 