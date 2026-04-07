import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import AKLogo from "@/components/AKLogo";

export const metadata: Metadata = {
  title: "FAQ | AK Rental Service",
  description: "Frequently asked questions about renting electronics and furniture from AK Rental Service, Pimpri-Chinchwad, Pune.",
  alternates: { canonical: "https://www.akrentalservice.in/faq" },
};

const FAQS = [
  { q: "What items can I rent from AK Rental Service?", a: "You can rent Single Door Fridge, Double Door Fridge, Fully Automatic Washing Machine, Front Load Washing Machine, TV with TV Table, Oven/Microwave, RO Water Purifier, Queen Size Bed, Single Bed, Almirah, Sofa Set, Center Table, Dining Table, Study Table, Office Chair, and Shoe Rack." },
  { q: "What is the minimum rental period?", a: "The minimum rental period is 6 months. One month notice is mandatory after completing 5 months of rental." },
  { q: "Is installation free for rented appliances?", a: "Yes! AK Rental Service provides free delivery and installation for all rented electronics and furniture in Thergaon, Pimpri-Chinchwad and surrounding areas." },
  { q: "Is maintenance included in the rental?", a: "Yes, technical maintenance is completely free throughout your rental period. Charges apply only for physical damage, misuse, or external damage." },
  { q: "How do I pay rent to AK Rental Service?", a: "You can pay rent via any UPI, bank transfer, or online payment. A screenshot of the payment is mandatory — rent is not counted without a screenshot." },
  { q: "How do I register a complaint for a rented appliance?", a: "All complaints must be registered on WhatsApp only. No verbal or phone complaints are accepted." },
  { q: "Does AK Rental Service serve areas outside Thergaon?", a: "Yes! We serve Thergaon, Hanuman Nagar, Sambhaji Nagar, Wakad, Hinjewadi, Pimpri, Chinchwad, Nigdi, Pimple Saudagar, and all areas across Pimpri-Chinchwad and Pune." },
];

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Script id="faq-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {/* Header */}
      <div className="text-white py-3 px-6" style={{ backgroundColor: "#0f2548" }}>
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/"><AKLogo height={40} white /></Link>
          <Link href="/" className="text-sm text-blue-200 hover:text-white transition">← Back to Home</Link>
        </div>
      </div>
      <div className="h-[3px]" style={{ backgroundColor: "#2e7d32" }} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-extrabold mb-2" style={{ color: "#1a3a6b" }}>Frequently Asked <span style={{ color: "#2e7d32" }}>Questions</span></h1>
          <p className="text-gray-500 text-sm">Everything you need to know about renting from AK Rental Service, Pimpri-Chinchwad.</p>
        </div>

        <div className="flex flex-col gap-5">
          {FAQS.map((f, i) => (
            <div key={i} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 flex gap-4">
              <div className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-white font-extrabold text-sm"
                style={{ backgroundColor: "#1a3a6b" }}>{i + 1}</div>
              <div className="flex-1">
                <h2 className="font-bold text-base mb-1" style={{ color: "#1a3a6b" }}>{f.q}</h2>
                <p className="text-gray-600 text-sm leading-relaxed">{f.a}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-lg p-6 border-2 text-center" style={{ borderColor: "#1a3a6b", backgroundColor: "#f0f4ff" }}>
          <p className="font-bold text-base mb-2" style={{ color: "#1a3a6b" }}>Still have questions?</p>
          <p className="text-sm text-gray-600 mb-5">Reach out to us on WhatsApp and we'll get back to you right away.</p>
          <a href="https://wa.me/919876543210?text=Hi, I have a question about renting."
            target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 text-white font-bold px-8 py-3 rounded transition hover:opacity-90"
            style={{ backgroundColor: "#1a3a6b" }}>
            Ask on WhatsApp →
          </a>
        </div>

        <p className="text-center text-xs text-gray-400 mt-8">
          © {new Date().getFullYear()} AK Rental Service, Pimpri-Chinchwad. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
