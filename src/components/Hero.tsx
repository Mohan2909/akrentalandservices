"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

type Props = { locationName?: string };

const SLIDES = [
  {
    img: "/SingleDoorFridge.avif",
    heading: "Electronics & Furniture on Rent",
    sub: "Monthly Basis · Free Installation · Maintenance Free",
    badge: "🏠 Rent, Don't Buy!",
  },
  {
    img: "/doubledoorfridge.avif",
    heading: "Fridge on Rent – Starting ₹499/month",
    sub: "Single Door & Double Door · Frost Free · Energy Efficient",
    badge: "❄️ Refrigerators",
  },
  {
    img: "/toploadwashingmachine.jpg",
    heading: "Washing Machine on Rent",
    sub: "Fully Automatic · Front Load · Free Delivery & Installation",
    badge: "🫧 Washing Machines",
  },
  {
    img: "/sofa.jpg",
    heading: "Furniture on Rent in",
    sub: "Sofa Set · Beds · Dining Table · Almirah · Monthly Plans",
    badge: "🛋️ Furniture",
  },
  {
    img: "/TV+TVTable.jpeg",
    heading: "Smart TV & Appliances on Rent",
    sub: "TV · Oven · RO Purifier · All Brands Available",
    badge: "📺 Electronics",
  },
];

export default function Hero({ locationName = "Pimpri-Chinchwad" }: Props) {
  const [cur, setCur] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCur((c) => (c + 1) % SLIDES.length), 4500);
    return () => clearInterval(t);
  }, []);

  const s = SLIDES[cur];

  return (
    <section style={{ backgroundColor: "#0f2548" }}>
      {/* ── Mobile layout: image on top, text below ── */}
      <div className="md:hidden flex flex-col">
        {/* Image */}
        <div className="relative w-full" style={{ height: "220px", backgroundColor: "#0f2548" }}>
          {SLIDES.map((slide, i) => (
            <div key={i} className="absolute inset-0 transition-opacity duration-700"
              style={{ opacity: i === cur ? 1 : 0 }}>
              <Image
                src={slide.img}
                alt={slide.heading}
                fill
                className="object-contain object-center"
                priority={i === 0}
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ backgroundColor: "#0f2548" }}
              />
              <div className="absolute inset-0"
                style={{ background: "linear-gradient(to bottom, transparent 70%, #0f2548 100%)" }} />
            </div>
          ))}
        </div>
        {/* Text */}
        <div className="px-4 pb-10 pt-2 relative z-10">
          <span className="hero-text inline-block text-xs font-bold uppercase tracking-widest mb-2 px-3 py-1 rounded-full whitespace-nowrap"
            style={{ backgroundColor: "#2d7a3a", color: "#fff" }}>
            {s.badge}
          </span>
          <h1 className="hero-text-delay text-xl font-extrabold leading-tight mb-1 text-white">
            {s.heading}{s.heading.endsWith("in") ? ` ${locationName}` : ""}
          </h1>
          <p className="hero-text-delay2 text-xs font-medium text-gray-200 mb-1">{s.sub}</p>
          <p className="hero-text-delay2 text-xs text-gray-300 mb-4">
            📍 Serving {locationName} · Free Installation · Maintenance Free
          </p>
          <div className="hero-text-delay3 flex gap-2">
            <a href="#contact"
              className="inline-flex items-center gap-1.5 text-white font-bold px-4 py-2 text-xs uppercase tracking-wide transition hover:opacity-90 rounded"
              style={{ backgroundColor: "#2d7a3a" }}>
              📞 Contact Now
            </a>
            <a href="#products"
              className="inline-flex items-center gap-1.5 font-bold px-4 py-2 text-xs uppercase tracking-wide transition hover:opacity-90 rounded border-2 border-white text-white">
              View Products ›
            </a>
          </div>
        </div>
        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {SLIDES.map((_, i) => (
            <button key={i} onClick={() => setCur(i)}
              className="h-2 rounded-full transition-all duration-300"
              style={{ width: i === cur ? "22px" : "8px", backgroundColor: i === cur ? "#2d7a3a" : "rgba(255,255,255,0.5)" }} />
          ))}
        </div>
      </div>

      {/* ── Desktop layout: side-by-side absolute ── */}
      <div className="hidden md:block relative" style={{ minHeight: "380px" }}>
        {SLIDES.map((slide, i) => (
          <div key={i} className="absolute inset-0 flex transition-opacity duration-700"
            style={{ opacity: i === cur ? 1 : 0 }}>
            <div className="w-1/2 h-full" style={{ backgroundColor: "#0f2548" }} />
            <div className="w-1/2 h-full relative">
              <Image
                src={slide.img}
                alt={slide.heading}
                fill
                className="object-contain object-center"
                priority={i === 0}
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ backgroundColor: "#0f2548" }}
              />
              <div className="absolute inset-0"
                style={{ background: "linear-gradient(to right, #0f2548 0%, transparent 30%)" }} />
            </div>
          </div>
        ))}

        <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 max-w-2xl py-10">
          <span className="hero-text inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full w-fit whitespace-nowrap"
            style={{ backgroundColor: "#2d7a3a", color: "#fff" }}>
            {s.badge}
          </span>
          <h1 className="hero-text-delay text-2xl md:text-4xl font-extrabold leading-tight mb-2 text-white">
            {s.heading}{s.heading.endsWith("in") ? ` ${locationName}` : ""}
          </h1>
          <p className="hero-text-delay2 text-sm md:text-base font-medium text-gray-200 mb-1">{s.sub}</p>
          <p className="hero-text-delay2 text-xs text-gray-300 mb-5">
            📍 Serving {locationName} · Free Installation · Maintenance Free
          </p>
          <div className="hero-text-delay3 flex gap-2">
            <a href="#contact"
              className="inline-flex items-center gap-1.5 text-white font-bold px-4 py-2 text-xs uppercase tracking-wide transition hover:opacity-90 rounded"
              style={{ backgroundColor: "#2d7a3a" }}>
              📞 Contact Now
            </a>
            <a href="#products"
              className="inline-flex items-center gap-1.5 font-bold px-4 py-2 text-xs uppercase tracking-wide transition hover:opacity-90 rounded border-2 border-white text-white hover:bg-white"
              style={{ color: "white" }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#1e3a7a"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "white"; }}>
              View Products ›
            </a>
          </div>
        </div>

        <button onClick={() => setCur((cur - 1 + SLIDES.length) % SLIDES.length)}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl transition">‹</button>
        <button onClick={() => setCur((cur + 1) % SLIDES.length)}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl transition">›</button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {SLIDES.map((_, i) => (
            <button key={i} onClick={() => setCur(i)}
              className="h-2 rounded-full transition-all duration-300"
              style={{ width: i === cur ? "22px" : "8px", backgroundColor: i === cur ? "#2d7a3a" : "rgba(255,255,255,0.5)" }} />
          ))}
        </div>
      </div>
    </section>
  );
}
