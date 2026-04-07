"use client";
import { useState } from "react";

const OFFERS = [
  "🎉 Zero Deposit · Free Installation · Free Maintenance",
  "❄️ Fridge on Rent starting ₹499/month",
  "🫧 Washing Machine on Rent starting ₹599/month",
  "🛋️ Furniture on Rent — Beds, Sofa, Almirah & more",
  "📺 Smart TV on Rent starting ₹799/month",
];

export default function PromoBanner() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div className="relative w-full text-white text-xs py-2 px-8 flex items-center justify-center text-center overflow-hidden"
      style={{ backgroundColor: "#2d7a3a" }}>
      {/* Scrolling marquee */}
      <div className="overflow-hidden w-full">
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {[...OFFERS, ...OFFERS].map((o, i) => (
            <span key={i} className="shrink-0">{o}</span>
          ))}
        </div>
      </div>
      <button onClick={() => setVisible(false)}
        className="absolute right-2 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition"
        aria-label="Close">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="w-4 h-4">
          <path d="M18 6L6 18M6 6l12 12"/>
        </svg>
      </button>

      <style>{`
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .animate-marquee { animation: marquee 22s linear infinite; }
      `}</style>
    </div>
  );
}
