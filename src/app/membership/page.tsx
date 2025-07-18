"use client";

import { useState } from 'react';
import Link from 'next/link';
import ShareButton from '@/components/ShareButton';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function MembershipPage() {
  const [loading, setLoading] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('celestial-gold');

  const handleMembershipSignup = async (planId: string) => {
    setLoading(true);
    
    try {
      const response = await fetch('/api/create-membership-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          planId: planId,
          successUrl: typeof window !== 'undefined' ? `${window.location.origin}/membership/success` : '/membership/success',
          cancelUrl: typeof window !== 'undefined' ? `${window.location.origin}/membership` : '/membership',
          customerEmail: '', // Will be collected in Stripe checkout
        }),
      });

      const { sessionId } = await response.json();
      const stripe = await stripePromise;
      
      if (stripe) {
        const { error } = await stripe.redirectToCheckout({ sessionId });
        if (error) {
          console.error('Error:', error);
          alert('Payment failed. Please try again.');
        }
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const premiumFeatures = [
    {
      title: "🔮 Personalized Birth Chart Forecasts",
      description: "Get daily insights tailored to your unique cosmic blueprint",
      status: "Coming Soon",
      icon: "⭐"
    },
    {
      title: "🌙 Moon Phase Ritual Guides",
      description: "Detailed ceremonies for every lunar phase",
      status: "Coming Soon", 
      icon: "⭐"
    },
    {
      title: "📅 Downloadable Lunar Calendar",
      description: "Beautiful PDF calendars with moon phases and astrology",
      status: "Coming Soon",
      icon: "⭐"
    },
    {
      title: "🎯 Advanced Astrology Insights",
      description: "Professional-level planetary transits and aspects",
      status: "Coming Soon",
      icon: "⭐"
    },
    {
      title: "📱 Priority Support",
      description: "Direct access to our cosmic guidance team",
      status: "Available Now",
      icon: "✅"
    },
    {
      title: "🎨 Exclusive Content",
      description: "Members-only articles, meditations, and resources",
      status: "Available Now",
      icon: "✅"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#191970] via-[#232946] to-[#0a0a23] pt-32 pb-16 px-4">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-serif text-[#FFD700] font-bold mb-6 drop-shadow-lg">
          ✨ Celestial Gold Membership
        </h1>
        <p className="text-xl md:text-2xl text-[#C0C0C0] max-w-4xl mx-auto mb-8">
          Unlock exclusive cosmic insights, personalized rituals, and premium astrological content
        </p>
        <div className="flex justify-center">
          <ShareButton
            url={typeof window !== 'undefined' ? `${window.location.origin}/membership` : '/membership'}
            title="Celestial Gold Membership - Premium Cosmic Insights"
            description="Join the exclusive Celestial Gold membership for premium astrological content and personalized cosmic guidance! ✨"
            imageUrl="/images/crystals.svg"
          />
        </div>
      </div>

      {/* Pricing Section */}
      <div className="max-w-6xl mx-auto mb-12">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Celestial Gold */}
          <div className="bg-[#232946]/80 rounded-2xl shadow-xl p-6 border border-[#FFD700]/30">
            <div className="text-center mb-6">
              <div className="text-4xl mb-2">⭐</div>
              <h3 className="text-xl font-bold text-[#FFD700] mb-2">Celestial Gold</h3>
              <div className="text-3xl font-bold text-white mb-1">$4.99</div>
              <div className="text-sm text-[#C0C0C0]">per month</div>
            </div>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2 text-sm">
                <span className="text-[#FFD700]">✓</span>
                <span className="text-white">Personalized Birth Chart Forecasts</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="text-[#FFD700]">✓</span>
                <span className="text-white">Moon Phase Ritual Guides</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="text-[#FFD700]">✓</span>
                <span className="text-white">Downloadable Lunar Calendar</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="text-[#FFD700]">✓</span>
                <span className="text-white">Advanced Astrology Insights</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="text-[#FFD700]">✓</span>
                <span className="text-white">Priority Support</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="text-[#FFD700]">✓</span>
                <span className="text-white">Exclusive Content</span>
              </li>
            </ul>
            
            <button 
              onClick={() => handleMembershipSignup('celestial-gold')}
              disabled={loading}
              className="w-full bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#191970] font-bold py-3 px-6 rounded-xl shadow-lg hover:scale-105 transition-transform disabled:opacity-50"
            >
              {loading ? 'Processing...' : 'Start Free Trial'}
            </button>
          </div>

          {/* Cosmic Platinum */}
          <div className="bg-[#232946]/80 rounded-2xl shadow-xl p-6 border-2 border-[#FFD700] relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#FFD700] text-[#191970] px-4 py-1 rounded-full text-sm font-bold">
              MOST POPULAR
            </div>
            <div className="text-center mb-6">
              <div className="text-4xl mb-2">💎</div>
              <h3 className="text-xl font-bold text-[#FFD700] mb-2">Cosmic Platinum</h3>
              <div className="text-3xl font-bold text-white mb-1">$9.99</div>
              <div className="text-sm text-[#C0C0C0]">per month</div>
            </div>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2 text-sm">
                <span className="text-[#FFD700]">✓</span>
                <span className="text-white">Everything in Celestial Gold</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="text-[#FFD700]">✓</span>
                <span className="text-white">1-on-1 Monthly Consultations</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="text-[#FFD700]">✓</span>
                <span className="text-white">Advanced Birth Chart Analysis</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="text-[#FFD700]">✓</span>
                <span className="text-white">Custom Ritual Creation</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="text-[#FFD700]">✓</span>
                <span className="text-white">Priority Email Support</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="text-[#FFD700]">✓</span>
                <span className="text-white">Exclusive Content Library</span>
              </li>
            </ul>
            
            <button 
              onClick={() => handleMembershipSignup('cosmic-platinum')}
              disabled={loading}
              className="w-full bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#191970] font-bold py-3 px-6 rounded-xl shadow-lg hover:scale-105 transition-transform disabled:opacity-50"
            >
              {loading ? 'Processing...' : 'Start Free Trial'}
            </button>
          </div>

          {/* Mystic Diamond */}
          <div className="bg-[#232946]/80 rounded-2xl shadow-xl p-6 border border-[#FFD700]/30">
            <div className="text-center mb-6">
              <div className="text-4xl mb-2">👑</div>
              <h3 className="text-xl font-bold text-[#FFD700] mb-2">Mystic Diamond</h3>
              <div className="text-3xl font-bold text-white mb-1">$19.99</div>
              <div className="text-sm text-[#C0C0C0]">per month</div>
            </div>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2 text-sm">
                <span className="text-[#FFD700]">✓</span>
                <span className="text-white">Everything in Cosmic Platinum</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="text-[#FFD700]">✓</span>
                <span className="text-white">Weekly Live Group Sessions</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="text-[#FFD700]">✓</span>
                <span className="text-white">Custom Jewelry Recommendations</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="text-[#FFD700]">✓</span>
                <span className="text-white">Personalized Crystal Prescriptions</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="text-[#FFD700]">✓</span>
                <span className="text-white">Advanced Transit Alerts</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="text-[#FFD700]">✓</span>
                <span className="text-white">VIP Community Access</span>
              </li>
            </ul>
            
            <button 
              onClick={() => handleMembershipSignup('mystic-diamond')}
              disabled={loading}
              className="w-full bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#191970] font-bold py-3 px-6 rounded-xl shadow-lg hover:scale-105 transition-transform disabled:opacity-50"
            >
              {loading ? 'Processing...' : 'Start Free Trial'}
            </button>
          </div>
        </div>
        
        <div className="text-center mt-6">
          <p className="text-sm text-[#C0C0C0]">
            Secure payment via Stripe • Cancel anytime • 7-day free trial
          </p>
        </div>
      </div>

      {/* Feature Details */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-serif text-[#FFD700] font-bold text-center mb-8">
          🌟 Premium Features in Development
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#232946]/80 rounded-xl p-6 border border-[#FFD700]/20">
            <h3 className="text-lg font-bold text-[#FFD700] mb-3">🔮 Personalized Forecasts</h3>
            <p className="text-[#C0C0C0] text-sm mb-4">
              Our AI will analyze your birth chart to provide daily insights that are uniquely tailored to your cosmic signature.
            </p>
            <div className="text-xs text-yellow-400">Expected: Q1 2024</div>
          </div>

          <div className="bg-[#232946]/80 rounded-xl p-6 border border-[#FFD700]/20">
            <h3 className="text-lg font-bold text-[#FFD700] mb-3">🌙 Moon Phase Rituals</h3>
            <p className="text-[#C0C0C0] text-sm mb-4">
              Step-by-step ritual guides for each moon phase, including new moon intentions and full moon releases.
            </p>
            <div className="text-xs text-yellow-400">Expected: Q1 2024</div>
          </div>

          <div className="bg-[#232946]/80 rounded-xl p-6 border border-[#FFD700]/20">
            <h3 className="text-lg font-bold text-[#FFD700] mb-3">📅 Lunar Calendar</h3>
            <p className="text-[#C0C0C0] text-sm mb-4">
              Beautiful downloadable calendars with moon phases, astrological events, and ritual timing.
            </p>
            <div className="text-xs text-yellow-400">Expected: Q2 2024</div>
          </div>

          <div className="bg-[#232946]/80 rounded-xl p-6 border border-[#FFD700]/20">
            <h3 className="text-lg font-bold text-[#FFD700] mb-3">🎯 Advanced Insights</h3>
            <p className="text-[#C0C0C0] text-sm mb-4">
              Professional-level astrology including planetary transits, aspects, and house interpretations.
            </p>
            <div className="text-xs text-yellow-400">Expected: Q2 2024</div>
          </div>
        </div>
      </div>
    </div>
  );
} 