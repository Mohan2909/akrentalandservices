"use client";
import { BUSINESS_ADDRESS, PHONE_DEFAULT } from "@/lib/locations";
import { useScrollReveal, useStaggerReveal } from "@/hooks/useScrollReveal";

type Props = { locationName?: string; phone?: string };

export default function Contact({ locationName = "Thergaon, Pimpri-Chinchwad", phone = PHONE_DEFAULT }: Props) {
  const waLink = `https://wa.me/91${phone}`;
  const waMsg = encodeURIComponent(`Hi, I need rental service in ${locationName}`);
  const displayPhone = `+91 ${phone.slice(0, 5)} ${phone.slice(5)}`;

  const headingRef = useScrollReveal("fade-up");
  const cardsRef = useStaggerReveal();

  return (
    <section id="contact" className="py-10 relative overflow-hidden" style={{ backgroundColor: "#f0f4ff" }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-10" style={{ backgroundColor: "#1e3a7a" }} />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full opacity-10" style={{ backgroundColor: "#2d7a3a" }} />
      </div>

      <div className="max-w-5xl mx-auto px-3 sm:px-4 relative">
        <div ref={headingRef} className="fade-up text-center mb-8">
          <span className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-3" style={{ backgroundColor: "#dbeafe", color: "#1e3a7a" }}>
            Get In Touch
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3" style={{ color: "#1e3a7a" }}>
            Contact <span className="shimmer-text">AK Rental Service</span>
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm">
            Serving {locationName} · 7 days a week · 9 AM – 8 PM
          </p>
        </div>

        <div ref={cardsRef} className="stagger grid grid-cols-3 gap-2 sm:gap-3 mb-6">
          <a href={`tel:${phone}`}
            className="group bg-white rounded-xl sm:rounded-2xl p-2 sm:p-4 flex flex-col items-center text-center shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 btn-press">
            <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center mb-1 sm:mb-2 text-white transition-transform duration-300 group-hover:scale-110" style={{ backgroundColor: "#1e3a7a", fontSize: "14px" }}>📞</div>
            <p className="font-bold tracking-widest text-gray-400 uppercase mb-0.5" style={{ fontSize: "8px" }}>Call Us</p>
            <p className="font-bold" style={{ color: "#1e3a7a", fontSize: "9px" }}>{displayPhone}</p>
            <p className="text-gray-400 mt-0.5 hidden sm:block" style={{ fontSize: "9px" }}>Mon–Sun · 9 AM – 8 PM</p>
          </a>

          <a href={`${waLink}?text=${waMsg}`} target="_blank" rel="noreferrer"
            className="group bg-white rounded-xl sm:rounded-2xl p-2 sm:p-4 flex flex-col items-center text-center shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 btn-press">
            <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center mb-1 sm:mb-2 text-white transition-transform duration-300 group-hover:scale-110" style={{ backgroundColor: "#25d366", fontSize: "14px" }}>💬</div>
            <p className="font-bold tracking-widest text-gray-400 uppercase mb-0.5" style={{ fontSize: "8px" }}>WhatsApp</p>
            <p className="font-bold" style={{ color: "#1e3a7a", fontSize: "9px" }}>{displayPhone}</p>
            <p className="text-gray-400 mt-0.5 hidden sm:block" style={{ fontSize: "9px" }}>Complaints here</p>
          </a>

          <div className="bg-white rounded-xl sm:rounded-2xl p-2 sm:p-4 flex flex-col items-center text-center shadow-sm border border-gray-100">
            <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center mb-1 sm:mb-2 text-white" style={{ backgroundColor: "#e53935", fontSize: "14px" }}>📍</div>
            <p className="font-bold tracking-widest text-gray-400 uppercase mb-0.5" style={{ fontSize: "8px" }}>Location</p>
            <p className="font-bold leading-snug hidden sm:block" style={{ color: "#1e3a7a", fontSize: "9px" }}>{BUSINESS_ADDRESS}</p>
            <p className="font-bold leading-snug sm:hidden" style={{ color: "#1e3a7a", fontSize: "9px" }}>Pimpri-Chinchwad</p>
          </div>
        </div>

        <div className="cta-glow rounded-3xl p-5 sm:p-8 md:p-10 text-white relative overflow-hidden" style={{ backgroundColor: "#1e3a7a" }}>
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 -translate-y-1/2 translate-x-1/2" style={{ backgroundColor: "#fff" }} />

          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold mb-2">
                Ready to Rent in {locationName}?
              </h3>
              <p className="text-blue-200 text-xs sm:text-sm leading-relaxed max-w-md">
                Fridge, washing machine, bed, sofa, TV &amp; more — delivered to your door.
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {["✅ Free Installation", "🔧 Free Maintenance", "📅 Monthly Plans", "🚚 Free Delivery"].map((f) => (
                  <span key={f} className="text-xs bg-white/10 text-blue-100 px-2.5 py-1 rounded-full">{f}</span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2.5 shrink-0">
              <a href={`tel:${phone}`}
                className="btn-press flex items-center justify-center gap-2 bg-white font-bold px-4 py-2.5 rounded-xl text-xs sm:text-sm hover:bg-gray-100 transition"
                style={{ color: "#1e3a7a" }}>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                <span>Call Now</span><span className="hidden sm:inline"> — {displayPhone}</span>
              </a>
              <a href={`${waLink}?text=${waMsg}`} target="_blank" rel="noreferrer"
                className="btn-press flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-4 py-2.5 rounded-xl text-xs sm:text-sm transition whitespace-nowrap">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
