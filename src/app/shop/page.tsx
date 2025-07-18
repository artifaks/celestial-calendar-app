"use client";

import { useState } from 'react';
import Link from 'next/link';
import ShareButton from '@/components/ShareButton';
import React from "react";

export default function ShopPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-b from-[#191970] via-[#232946] to-[#0a0a23] pt-32 pb-16 px-4">
      <h1 className="text-3xl md:text-4xl font-serif text-[#FFD700] font-bold mb-4 drop-shadow-lg">Your Lunar Toolkit</h1>
      <p className="text-lg md:text-xl text-[#C0C0C0] text-center max-w-2xl mb-8">Spiritual tools to support your moon-aligned journey</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {/* Product 1: Celestial Planner */}
        <div className="bg-[#232946]/90 border border-[#FFD700]/20 rounded-2xl shadow-lg flex flex-col items-center p-6 gap-4">
          <span className="text-4xl">📓</span>
          <h3 className="text-lg font-bold text-[#FFD700] text-center">2025 Celestial Planner</h3>
          <p className="text-[#C0C0C0] text-center text-base">Plan your year with the stars</p>
          <div className="text-[#FFD700] font-bold text-lg">$9.99</div>
          <a href="#" className="mt-2 px-6 py-2 rounded-lg bg-gradient-to-r from-[#FFD700] to-[#C0C0C0] text-[#191970] font-bold shadow hover:scale-105 transition-transform">Buy Now</a>
        </div>
        {/* Product 2: Manifestation Guide */}
        <div className="bg-[#232946]/90 border border-[#FFD700]/20 rounded-2xl shadow-lg flex flex-col items-center p-6 gap-4">
          <span className="text-4xl">🔥</span>
          <h3 className="text-lg font-bold text-[#FFD700] text-center">New Moon Manifestation Guide</h3>
          <p className="text-[#C0C0C0] text-center text-base">Printable ritual + journal prompts</p>
          <div className="text-[#FFD700] font-bold text-lg">$4.99</div>
          <a href="#" className="mt-2 px-6 py-2 rounded-lg bg-gradient-to-r from-[#FFD700] to-[#C0C0C0] text-[#191970] font-bold shadow hover:scale-105 transition-transform">Buy Now</a>
        </div>
        {/* Product 3: Astrology Crystal Guide */}
        <div className="bg-[#232946]/90 border border-[#FFD700]/20 rounded-2xl shadow-lg flex flex-col items-center p-6 gap-4">
          <span className="text-4xl">💎</span>
          <h3 className="text-lg font-bold text-[#FFD700] text-center">Astrology Crystal Guide (PDF)</h3>
          <p className="text-[#C0C0C0] text-center text-base">Best crystals by zodiac sign</p>
          <div className="text-[#FFD700] font-bold text-lg">$3.99</div>
          <a href="#" className="mt-2 px-6 py-2 rounded-lg bg-gradient-to-r from-[#FFD700] to-[#C0C0C0] text-[#191970] font-bold shadow hover:scale-105 transition-transform">Buy Now</a>
        </div>
      </div>
    </div>
  );
} 