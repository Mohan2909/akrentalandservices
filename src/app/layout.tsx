import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import ScrollUI from "@/components/ScrollUI";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.akrentalservice.in"),
  title: {
    default: "AK Rental Service – Rent Electronics & Furniture in Pimpri-Chinchwad, Pune",
    template: "%s | AK Rental Service",
  },
  description:
    "AK Rental Service offers fridge, washing machine, bed, sofa, TV, RO, oven on rent in Thergaon, Pimpri-Chinchwad & Pune. Monthly basis · Free installation · Maintenance free.",
  keywords: [
    "rent fridge Pimpri-Chinchwad",
    "washing machine on rent Thergaon",
    "furniture on rent Pune",
    "electronics on rent PCMC",
    "bed on rent Pimpri-Chinchwad",
    "sofa on rent Thergaon",
    "TV on rent Pune",
    "RO on rent Pimpri-Chinchwad",
    "appliance rental Pune",
    "monthly furniture rental Pimpri-Chinchwad",
    "AK Rental Service",
    "rent on sale Pune",
  ],
  authors: [{ name: "AK Rental Service" }],
  creator: "AK Rental Service",
  publisher: "AK Rental Service",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "AK Rental Service",
    title: "AK Rental Service – Rent Electronics & Furniture in Pimpri-Chinchwad",
    description:
      "Rent fridge, washing machine, bed, sofa, TV, RO & more in Thergaon, Pimpri-Chinchwad & Pune. Monthly basis, free installation, maintenance free.",
    url: "https://www.akrentalservice.in",
    images: [{ url: "/ak-logo.png", width: 1200, height: 630, alt: "AK Rental Service" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AK Rental Service – Rent Electronics & Furniture in Pimpri-Chinchwad",
    description: "Rent fridge, washing machine, bed, sofa, TV & more. Monthly basis, free installation.",
    images: ["/ak-logo.png"],
  },
  alternates: { canonical: "https://www.akrentalservice.in" },
  verification: { google: "YOUR_GOOGLE_VERIFICATION_CODE" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "AK Rental Service",
  description:
    "Electronics and furniture rental service in Pimpri-Chinchwad and Pune. Rent fridge, washing machine, bed, sofa, TV, RO on monthly basis.",
  url: "https://www.akrentalservice.in",
  telephone: "+919876543210",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Hanuman Nagar, Sambhaji Nagar, Thergaon",
    addressLocality: "Pimpri-Chinchwad",
    addressRegion: "Maharashtra",
    postalCode: "411033",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 18.6298, longitude: 73.7997 },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    opens: "09:00",
    closes: "20:00",
  },
  priceRange: "₹₹",
  servesCuisine: undefined,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Rental Products",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Single Door Fridge on Rent" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Double Door Fridge on Rent" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Washing Machine on Rent" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Bed with Mattress on Rent" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Sofa Set on Rent" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Smart TV on Rent" } },
    ],
  },
  sameAs: ["https://wa.me/919876543210"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-white text-gray-800" style={{ fontFamily: "Inter, Arial, sans-serif" }}>
        <ScrollUI />
        {children}
      </body>
    </html>
  );
}
