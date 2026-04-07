import type { Metadata } from "next";
import Link from "next/link";
import AKLogo from "@/components/AKLogo";

export const metadata: Metadata = {
  title: "Terms & Conditions | AK Rental Service",
  description: "Read the terms and conditions for renting electronics and furniture from AK Rental Service, Pimpri-Chinchwad, Pune.",
  alternates: { canonical: "https://www.akrentalservice.in/terms" },
};

const TERMS = [
  { num: "1", title: "Minimum Lock-in Period", body: "Minimum 6 months locking period is mandatory for all rentals." },
  { num: "2", title: "One Month Notice", body: "One month notice is mandatory (after minimum 5 months only). One month rent will be deducted if the customer vacates furniture/appliances without one month prior notice." },
  { num: "3", title: "Electronic Maintenance", body: "Electronic maintenance is free only for technical issues. Physical damage, misuse, or external damage is not covered under free maintenance." },
  { num: "4", title: "Transportation Charges", body: "Charges are applicable for transportation (both sides) — including transportation for relocation, partial return, and change of appliance/furniture." },
  {
    num: "5", title: "Cleaning & Damage Charges",
    body: "Cleaning charges apply if the customer returns furniture/appliance without cleaning. Additional charges apply in the following cases:",
    sub: [
      "Adapter required for washing machine installation.",
      "If a coin is found in the washing machine.",
      "If rat cuts wiring.",
      "Physical damage of furniture or appliance.",
      "If sofa set gets dirty or stained.",
    ],
  },
  { num: "6", title: "Rent Transfer Screenshot", body: "Screenshot of rent transfer is mandatory. Without a screenshot, rent will not be counted or acknowledged." },
  { num: "7", title: "Complaint Registration", body: "Complaints for appliances will be accepted on WhatsApp only. No verbal or phone complaints will be entertained." },
  { num: "8", title: "Customer Change / Transfer", body: "In case of customer change, updating the new customer's ID proof and mobile number is mandatory. The old customer is responsible if the new customer's details are not updated." },
  { num: "9", title: "Rental Basis Only", body: "The furniture and appliances given to the customer are purely on a rental basis. Ownership does not transfer under any circumstances." },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="text-white py-3 px-6" style={{ backgroundColor: "#0f2548" }}>
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/">
            <AKLogo height={40} white />
          </Link>
          <Link href="/" className="text-sm text-blue-200 hover:text-white transition">← Back to Home</Link>
        </div>
      </div>
      <div className="h-[3px]" style={{ backgroundColor: "#2e7d32" }} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-extrabold mb-2" style={{ color: "#1a3a6b" }}>Terms &amp; Conditions</h1>
          <p className="text-gray-500 text-sm">Please read these terms carefully before renting from AK Rental Service, Pimpri-Chinchwad.</p>
        </div>

        <div className="flex flex-col gap-5">
          {TERMS.map((t) => (
            <div key={t.num} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 flex gap-4">
              <div className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-white font-extrabold text-sm"
                style={{ backgroundColor: "#1a3a6b" }}>{t.num}</div>
              <div className="flex-1">
                <h2 className="font-bold text-base mb-1" style={{ color: "#1a3a6b" }}>{t.title}</h2>
                <p className="text-gray-600 text-sm leading-relaxed">{t.body}</p>
                {t.sub && (
                  <ul className="mt-2 space-y-1">
                    {t.sub.map((s, i) => (
                      <li key={i} className="text-sm text-gray-600 flex gap-2">
                        <span style={{ color: "#2e7d32" }}>›</span><span>{s}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-lg p-6 border-2 text-center" style={{ borderColor: "#1a3a6b", backgroundColor: "#f0f4ff" }}>
          <p className="font-bold text-base mb-4" style={{ color: "#1a3a6b" }}>✅ I Accept all the Terms and Conditions</p>
          <p className="text-sm text-gray-600 mb-5">By renting any product from AK Rental Service, you agree to all the above terms and conditions.</p>
          <a href="https://wa.me/919876543210?text=Hi, I have read and accept all Terms %26 Conditions. I want to rent."
            target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 text-white font-bold px-8 py-3 rounded transition hover:opacity-90"
            style={{ backgroundColor: "#1a3a6b" }}>
            Accept &amp; Contact Us on WhatsApp →
          </a>
        </div>

        <p className="text-center text-xs text-gray-400 mt-8">
          © {new Date().getFullYear()} AK Rental Service, Pimpri-Chinchwad. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
