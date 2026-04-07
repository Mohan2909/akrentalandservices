"use client";
import { useScrollReveal, useStaggerReveal } from "@/hooks/useScrollReveal";

const REVIEWS = [
  { stars: 5, text: "Excellent quality furniture! Very satisfied with my rental experience. Delivery was on time and installation was done perfectly.", name: "Priya Sharma", area: "Thergaon" },
  { stars: 5, text: "Great service and timely delivery. The fridge was in perfect condition. Highly recommended for anyone in Pimpri-Chinchwad!", name: "Rahul Patil", area: "Wakad" },
  { stars: 5, text: "Beautiful appliances and good quality. Worth every rupee. The team was very professional and helpful.", name: "Sneha Desai", area: "Hinjewadi" },
  { stars: 5, text: "Rented a washing machine and sofa set. Both are in excellent condition. Free maintenance is a great benefit!", name: "Amit Kulkarni", area: "Pimpri" },
  { stars: 5, text: "Very affordable monthly plans. No hidden charges. The WhatsApp support is very responsive and helpful.", name: "Pooja Joshi", area: "Chinchwad" },
  { stars: 4, text: "Good service overall. Quick installation and the appliances work perfectly. Will definitely rent again.", name: "Suresh Nair", area: "Nigdi" },
];

export default function Testimonials() {
  const headingRef = useScrollReveal("fade-up");
  const gridRef = useStaggerReveal();

  return (
    <section className="py-10" style={{ backgroundColor: "#f5f6fa" }}>
      <div className="max-w-7xl mx-auto px-3 sm:px-4">
        <div ref={headingRef} className="fade-up text-center mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-2" style={{ color: "#1e3a7a" }}>
            What Our <span className="shimmer-text">Customers Say</span>
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm">Real reviews from happy renters across Pimpri-Chinchwad &amp; Pune</p>
        </div>

        <div ref={gridRef} className="stagger grid grid-cols-3 gap-2 sm:gap-4">
          {REVIEWS.map((r) => (
            <div key={r.name}
              className="review-card bg-white rounded-lg sm:rounded-xl p-2 sm:p-4 shadow-sm border border-gray-100 flex flex-col gap-1.5 sm:gap-2.5">
              <div className="flex gap-0.5 text-xs sm:text-base">
                {Array.from({ length: r.stars }).map((_, i) => (
                  <span key={i} className="star-animate" style={{ color: "#f59e0b", animationDelay: `${i * 0.08}s` }}>★</span>
                ))}
              </div>
              <p className="text-gray-600 flex-1 leading-relaxed hidden sm:block" style={{ fontSize: "10px" }}>"{r.text}"</p>
              <div className="flex items-center gap-1.5 sm:gap-2.5 sm:pt-2 sm:border-t border-gray-100">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-white font-bold shrink-0"
                  style={{ backgroundColor: "#1e3a7a", fontSize: "9px" }}>
                  {r.name[0]}
                </div>
                <div>
                  <p className="font-bold" style={{ color: "#1e3a7a", fontSize: "9px" }}>{r.name}</p>
                  <p className="text-gray-400 hidden sm:block" style={{ fontSize: "9px" }}>{r.area} · Google review</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
