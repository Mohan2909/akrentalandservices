"use client";
import { useEffect, useRef, useState } from "react";

const STATS = [
  { end: 1500, suffix: "+", label: "Successful Orders", icon: "📦" },
  { end: 400,  suffix: "+", label: "Ongoing Rents",     icon: "🏠" },
  { end: 5,    suffix: "★", label: "Average Rating",    icon: "⭐" },
  { end: 100,  suffix: "%", label: "Happy Customers",   icon: "😊" },
];

function Counter({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const steps = 60;
        const increment = end / steps;
        let current = 0;
        const timer = setInterval(() => {
          current += increment;
          if (current >= end) { setCount(end); clearInterval(timer); }
          else setCount(Math.floor(current));
        }, 1800 / steps);
      }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [end]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const cards = cardRefs.current;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        cards.forEach((card, i) => {
          if (!card) return;
          setTimeout(() => card.classList.add("visible"), i * 120);
        });
        obs.disconnect();
      }
    }, { threshold: 0.2 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="py-10" style={{ backgroundColor: "#0f2548" }}>
      <div className="max-w-6xl mx-auto px-3 sm:px-4 text-center" ref={sectionRef}>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-2 text-white">
          Our <span className="shimmer-text">Numbers</span> Speak
        </h2>
        <p className="text-blue-300 text-xs sm:text-sm mb-8">Trusted by thousands of happy customers across Pimpri-Chinchwad &amp; Pune</p>

        <div className="grid grid-cols-4 gap-2 sm:gap-3">
          {STATS.map((s, i) => (
            <div key={s.label}
              ref={el => { cardRefs.current[i] = el; }}
              className="stat-card rounded-xl sm:rounded-2xl p-2 sm:p-6 flex flex-col items-center gap-1 sm:gap-1.5 border border-blue-700 hover:border-green-500 transition-colors duration-300 cursor-default"
              style={{ backgroundColor: "#1a3a6b", animationDelay: `${i * 0.12}s` }}>
              <span className="text-lg sm:text-3xl float-badge">{s.icon}</span>
              <span className="text-xl sm:text-4xl md:text-5xl font-black" style={{ color: "#4caf50" }}>
                <Counter end={s.end} suffix={s.suffix} />
              </span>
              <span className="text-center font-semibold text-blue-200 leading-tight" style={{ fontSize: "9px" }}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
