"use client";
import { useState } from "react";
import Script from "next/script";
import { useScrollReveal, useStaggerReveal } from "@/hooks/useScrollReveal";

type Props = { locationName?: string };

const getFAQs = (loc: string) => [
  { q: `What items can I rent from AK Rental Service in ${loc}?`, a: `You can rent Single Door Fridge, Double Door Fridge, Fully Automatic Washing Machine, Front Load Washing Machine, TV with TV Table, Oven/Microwave, RO Water Purifier, Queen Size Bed, Single Bed, Almirah, Sofa Set, Center Table, Dining Table, Study Table, Office Chair, and Shoe Rack.` },
  { q: `What is the minimum rental period?`, a: `The minimum rental period is 6 months. One month notice is mandatory after completing 5 months of rental.` },
  { q: `Is installation free for rented appliances in ${loc}?`, a: `Yes! AK Rental Service provides free delivery and installation for all rented electronics and furniture in ${loc} and surrounding areas.` },
  { q: `Is maintenance included in the rental?`, a: `Yes, technical maintenance is completely free throughout your rental period. Charges apply only for physical damage, misuse, or external damage.` },
  { q: `How do I pay rent to AK Rental Service?`, a: `You can pay rent via any UPI, bank transfer, or online payment. A screenshot of the payment is mandatory — rent is not counted without a screenshot.` },
  { q: `How do I register a complaint for a rented appliance?`, a: `All complaints must be registered on WhatsApp only. No verbal or phone complaints are accepted.` },
  { q: `Does AK Rental Service serve areas outside Thergaon?`, a: `Yes! We serve Thergaon, Hanuman Nagar, Sambhaji Nagar, Wakad, Hinjewadi, Pimpri, Chinchwad, Nigdi, Pimple Saudagar, and all areas across Pimpri-Chinchwad and Pune.` },
];

const TERMS = [
  { num: "1", title: "Minimum Lock-in Period", body: "Minimum 6 months locking period is mandatory for all rentals." },
  { num: "2", title: "One Month Notice", body: "One month notice is mandatory (after minimum 5 months only). One month rent will be deducted if the customer vacates without one month prior notice." },
  { num: "3", title: "Electronic Maintenance", body: "Electronic maintenance is free only for technical issues. Physical damage, misuse, or external damage is not covered under free maintenance." },
  { num: "4", title: "Transportation Charges", body: "Charges are applicable for transportation (both sides) — including relocation, partial return, and change of appliance/furniture." },
  {
    num: "5", title: "Cleaning & Damage Charges",
    body: "Cleaning charges apply if the customer returns furniture/appliance without cleaning. Additional charges apply for:",
    sub: ["Adapter required for washing machine installation.", "If a coin is found in the washing machine.", "If rat cuts wiring.", "Physical damage of furniture or appliance.", "If sofa set gets dirty or stained."],
  },
  { num: "6", title: "Rent Transfer Screenshot", body: "Screenshot of rent transfer is mandatory. Without a screenshot, rent will not be counted or acknowledged." },
  { num: "7", title: "Complaint Registration", body: "Complaints for appliances will be accepted on WhatsApp only. No verbal or phone complaints will be entertained." },
  { num: "8", title: "Customer Change / Transfer", body: "In case of customer change, updating the new customer's ID proof and mobile number is mandatory. The old customer is responsible if new customer's details are not updated." },
  { num: "9", title: "Rental Basis Only", body: "The furniture and appliances given to the customer are purely on a rental basis. Ownership does not transfer under any circumstances." },
];

type Tab = "faq" | "terms";

export default function FAQ({ locationName = "Pimpri-Chinchwad" }: Props) {
  const [tab, setTab] = useState<Tab>("faq");
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const headingRef = useScrollReveal("fade-up");
  const faqs = getFAQs(locationName);

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const items = tab === "faq"
    ? faqs.map((f) => ({ title: f.q, body: f.a, sub: undefined as string[] | undefined }))
    : TERMS.map((t) => ({ title: `${t.num}. ${t.title}`, body: t.body, sub: t.sub }));

  return (
    <section className="py-14 bg-white">
      <Script id="faq-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="max-w-3xl mx-auto px-4">
        {/* Heading */}
        <div ref={headingRef} className="fade-up text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-2" style={{ color: "#1e3a7a" }}>
            {tab === "faq"
              ? <>Frequently Asked <span style={{ color: "#2d7a3a" }}>Questions</span></>
              : <>Terms &amp; <span style={{ color: "#2d7a3a" }}>Conditions</span></>}
          </h2>
          <p className="text-gray-500 text-sm">
            {tab === "faq"
              ? `Everything you need to know about renting in ${locationName}`
              : "Please read before renting from AK Rental Service"}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex border-2 rounded-lg overflow-hidden" style={{ borderColor: "#1e3a7a" }}>
            {(["faq", "terms"] as Tab[]).map((t) => (
              <button key={t} onClick={() => { setTab(t); setOpenIdx(0); }}
                className="px-7 py-2.5 text-sm font-bold transition"
                style={tab === t
                  ? { backgroundColor: "#1e3a7a", color: "#fff" }
                  : { backgroundColor: "#fff", color: "#1e3a7a" }}>
                {t === "faq" ? "❓ FAQ" : "📋 Terms & Conditions"}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {items.map((item, i) => (
            <div key={i}
              className="border rounded-xl overflow-hidden transition-all duration-300"
              style={{ borderColor: openIdx === i ? "#1e3a7a" : "#e5e7eb" }}>
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left font-semibold text-sm transition-colors"
                style={{ backgroundColor: openIdx === i ? "#f0f4ff" : "#fff", color: "#1e3a7a" }}>
                <span>{item.title}</span>
                <span className="text-xl ml-3 shrink-0 transition-transform duration-300 font-bold"
                  style={{ transform: openIdx === i ? "rotate(45deg)" : "rotate(0deg)", color: "#2d7a3a", display: "inline-block" }}>
                  +
                </span>
              </button>

              {openIdx === i && (
                <div className="px-5 pb-4 pt-2 text-sm text-gray-600 leading-relaxed border-t"
                  style={{ borderColor: "#e5e7eb", backgroundColor: "#f8faff" }}>
                  <p>{item.body}</p>
                  {item.sub && (
                    <ul className="mt-2 space-y-1 pl-1">
                      {item.sub.map((s, j) => (
                        <li key={j} className="flex gap-2">
                          <span style={{ color: "#2d7a3a" }} className="shrink-0">›</span>
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Terms CTA */}
        {tab === "terms" && (
          <div className="mt-8 rounded-xl p-5 text-center border-2"
            style={{ borderColor: "#1e3a7a", backgroundColor: "#f0f4ff" }}>
            <p className="font-bold text-sm mb-3" style={{ color: "#1e3a7a" }}>
              ✅ I Accept all the Terms and Conditions
            </p>
            <a href="https://wa.me/919876543210?text=Hi, I have read and accept all Terms %26 Conditions. I want to rent."
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 text-white font-bold px-6 py-2.5 rounded-lg text-sm transition hover:opacity-90"
              style={{ backgroundColor: "#1e3a7a" }}>
              Accept &amp; Contact on WhatsApp →
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
