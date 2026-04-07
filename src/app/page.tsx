import type { Metadata } from "next";
import LocationBanner from "@/components/LocationBanner";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PromoBanner from "@/components/PromoBanner";
import WhyChooseUs from "@/components/WhyChooseUs";
import Products from "@/components/Products";
import Testimonials from "@/components/Testimonials";
import Stats from "@/components/Stats";
import Contact from "@/components/Contact";
import FloatingButtons from "@/components/FloatingButtons";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Rent Fridge, Washing Machine, Bed & Furniture in Thergaon, Pimpri-Chinchwad | AK Rental Service",
  description:
    "AK Rental Service – Rent fridge, washing machine, bed, sofa, TV, RO, oven in Thergaon, Hanuman Nagar, Sambhaji Nagar, Pimpri-Chinchwad. Monthly basis, free installation, zero deposit.",
  alternates: { canonical: "https://www.akrentalservice.in/" },
  openGraph: {
    title: "Rent Electronics & Furniture in Thergaon, Pimpri-Chinchwad | AK Rental Service",
    description: "Rent fridge, washing machine, bed, sofa, TV & more in Pimpri-Chinchwad. Monthly basis, free installation, maintenance free.",
    url: "https://www.akrentalservice.in/",
    images: [{ url: "/ak-logo.png", width: 1200, height: 630, alt: "AK Rental Service" }],
  },
  keywords: [
    "fridge on rent Thergaon", "washing machine on rent Pimpri-Chinchwad",
    "furniture on rent Thergaon", "bed on rent Hanuman Nagar",
    "sofa on rent Sambhaji Nagar", "TV on rent Pimpri-Chinchwad",
    "RO on rent Thergaon", "electronics on rent PCMC",
    "appliance rental Pimpri-Chinchwad", "monthly rental Thergaon",
    "rent on sale Pune", "AK Rental Service Thergaon",
  ],
};

export default function Home() {
  return (
    <>
      <LocationBanner />
      <Header />
      <main>
        <Hero />
        <PromoBanner />
        <WhyChooseUs />
        <Products />
        <Stats />
        <Testimonials />
        <Contact />
      </main>
      <FloatingButtons />
      <Footer />
    </>
  );
}
