import Link from "next/link";
import { LOCATIONS, BUSINESS_ADDRESS, PHONE_DEFAULT } from "@/lib/locations";
import AKLogo from "./AKLogo";

const SERVICES = [
  { label: "Refrigerator Rental",      icon: "❄️" },
  { label: "Washing Machine Rental",   icon: "🫧" },
  { label: "Bed & Mattress Rental",    icon: "🛏️" },
  { label: "Sofa Set Rental",          icon: "🛋️" },
  { label: "Smart TV Rental",          icon: "📺" },
  { label: "RO Purifier Rental",       icon: "💧" },
  { label: "Oven / Microwave Rental",  icon: "🍳" },
  { label: "Office Chair Rental",      icon: "🪑" },
  { label: "Dining Table Rental",      icon: "🍽️" },
];

const QUICK_LINKS = [
  { label: "Terms & Conditions", href: "/terms" },
  { label: "FAQ",                href: "/faq" },
  { label: "Our Products",       href: "/#products" },
  { label: "Contact Us",         href: "/#contact" },
];

const ChevronRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 shrink-0" style={{ color: "#4caf50" }}>
    <path d="M9 18l6-6-6-6"/>
  </svg>
);

const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 shrink-0" style={{ color: "#4caf50" }}>
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-3.5 h-3.5 shrink-0" style={{ color: "#4caf50" }}>
    <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
  </svg>
);

const WAIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const PCMC_AREAS = LOCATIONS.filter((l) => l.city === "Pimpri-Chinchwad");
const PUNE_AREAS = LOCATIONS.filter((l) => l.city === "Pune").slice(0, 10);

type Props = { locationName?: string; phone?: string };

export default function Footer({ locationName = "Pimpri-Chinchwad", phone = PHONE_DEFAULT }: Props) {
  const displayPhone = `+91 ${phone.slice(0, 5)} ${phone.slice(5)}`;
  const waLink = `https://wa.me/91${phone}`;

  return (
    <footer>
      <div style={{ backgroundColor: "#0f2548" }} className="text-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 pt-10 pb-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

            {/* Brand */}
            <div>
              <div className="mb-4 bg-white inline-block px-3 py-2 rounded-lg">
                <AKLogo height={44} />
              </div>
              <p className="text-blue-200 text-xs leading-relaxed mb-3">
                Electronics &amp; Furniture on Rent in {locationName}. Monthly basis, free installation &amp; maintenance included.
              </p>
              <p className="text-xs text-blue-300 leading-relaxed flex gap-1.5 mb-1.5">
                <MapPinIcon />
                <span>{BUSINESS_ADDRESS}</span>
              </p>
              <p className="text-xs text-blue-300 flex items-center gap-1.5">
                <ClockIcon />
                Mon–Sun: 9 AM – 8 PM
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wide border-b border-blue-700 pb-2">
                Our Services
              </h4>
              <ul className="grid grid-cols-2 gap-x-2 gap-y-1.5">
                {SERVICES.map((s) => (
                  <li key={s.label} className="text-blue-200 text-xs flex items-center gap-1.5">
                    <span className="text-sm leading-none">{s.icon}</span>
                    <span className="leading-tight">{s.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Areas */}
            <div>
              <h4 className="font-bold text-white mb-3 text-sm uppercase tracking-wide border-b border-blue-700 pb-2">
                Pimpri-Chinchwad Areas
              </h4>
              <div className="flex flex-wrap gap-x-3 gap-y-1.5 mb-4">
                {PCMC_AREAS.map((l) => (
                  <Link key={l.slug} href={`/${l.slug}`}
                    className="text-blue-200 text-xs hover:text-green-400 transition flex items-center gap-0.5">
                    <ChevronRight />
                    {l.name}
                  </Link>
                ))}
              </div>
              <h4 className="font-bold text-white mb-3 text-sm uppercase tracking-wide border-b border-blue-700 pb-2">
                Pune Areas
              </h4>
              <div className="flex flex-wrap gap-x-3 gap-y-1.5">
                {PUNE_AREAS.map((l) => (
                  <Link key={l.slug} href={`/${l.slug}`}
                    className="text-blue-200 text-xs hover:text-green-400 transition flex items-center gap-0.5">
                    <ChevronRight />
                    {l.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wide border-b border-blue-700 pb-2">
                Contact Us
              </h4>
              <a href={`tel:${phone}`}
                className="flex items-center gap-2 text-blue-200 text-sm mb-3 hover:text-white transition">
                <PhoneIcon />
                {displayPhone}
              </a>
              <a href={waLink} target="_blank" rel="noreferrer"
                className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white text-sm px-4 py-2.5 font-semibold transition mb-5 rounded w-fit">
                <WAIcon />
                WhatsApp Us
              </a>
              <div className="bg-blue-900 rounded-lg p-3 text-xs text-blue-200">
                <p className="font-semibold text-white mb-2 flex items-center gap-1.5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5" style={{ color: "#4caf50" }}>
                    <path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z"/><polyline points="13 2 13 9 20 9"/>
                  </svg>
                  Quick Links
                </p>
                {QUICK_LINKS.map((ql) => (
                  <Link key={ql.href} href={ql.href} className="flex items-center gap-1.5 hover:text-green-400 transition py-0.5">
                    <ChevronRight />
                    {ql.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-blue-800 pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-blue-400">
            <div className="flex items-center gap-2 text-center">
              <AKLogo height={20} white />
              <span>© {new Date().getFullYear()} AK Rental Service. All Rights Reserved.</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Link href="/terms" className="hover:text-green-400 transition whitespace-nowrap">Terms &amp; Conditions</Link>
              <span>|</span>
              <span className="whitespace-nowrap flex items-center gap-1">
                <MapPinIcon />
                Pimpri-Chinchwad, MH 411033
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
