"use client";
import { useScrollReveal, useStaggerReveal } from "@/hooks/useScrollReveal";

const FEATURES = [
  { icon: "🚚", title: "Free Delivery",     desc: "Free delivery & installation at your doorstep in Pimpri-Chinchwad & Pune" },
  { icon: "🔧", title: "Free Maintenance",  desc: "Technical issues resolved at no extra cost throughout your rental period" },
  { icon: "📅", title: "Monthly Rental",    desc: "Flexible monthly plans starting from just ₹499/month — no long-term commitment" },
  { icon: "⚡", title: "Quick Setup",       desc: "Same-day or next-day installation by our trained technicians" },
  { icon: "📞", title: "24/7 Support",      desc: "WhatsApp support available 7 days a week for all complaints & queries" },
  { icon: "🏠", title: "All Areas Covered", desc: "Serving Thergaon, Wakad, Hinjewadi, Pimpri, Chinchwad & all Pune areas" },
];

export default function WhyChooseUs() {
  const headingRef = useScrollReveal("fade-up");
  const gridRef = useStaggerReveal();

  return (
    <section id="about" className="py-10" style={{ backgroundColor: "#f0f4ff" }}>
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        <div ref={headingRef} className="fade-up text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-1" style={{ color: "#1e3a7a" }}>
            Why Choose <span className="shimmer-text">AK Rental Service?</span>
          </h2>
          <p className="text-gray-500 text-sm">
            Trusted by 1500+ happy customers across Pimpri-Chinchwad &amp; Pune
          </p>
        </div>

        <div ref={gridRef} className="stagger grid grid-cols-3 gap-2 sm:gap-4">
          {FEATURES.map((f) => (
            <div key={f.title}
              className="feature-card bg-white rounded-lg sm:rounded-xl p-2 sm:p-4 flex gap-1.5 sm:gap-3 items-start shadow-sm border border-gray-100">
              <div className="text-lg sm:text-2xl shrink-0 feature-icon">{f.icon}</div>
              <div>
                <h3 className="font-bold mb-0.5" style={{ color: "#1e3a7a", fontSize: "10px" }}>{f.title}</h3>
                <p className="text-gray-500 leading-relaxed hidden sm:block" style={{ fontSize: "10px" }}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
