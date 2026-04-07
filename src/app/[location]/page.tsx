import type { Metadata } from "next";
import { LOCATIONS, getLocation } from "@/lib/locations";
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

type Props = { params: Promise<{ location: string }> };

export async function generateStaticParams() {
  return LOCATIONS.map((l) => ({ location: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { location: slug } = await params;
  const loc = getLocation(slug);
  const title = `Rent Fridge, Washing Machine & Furniture in ${loc.fullName} | AK Rental Service`;
  const description = `AK Rental Service – Rent fridge, washing machine, bed, sofa, TV, RO & more in ${loc.fullName}. Monthly basis, free installation, zero deposit, maintenance free.`;
  const url = `https://www.akrentalservice.in/${loc.slug}`;
  return {
    title, description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: "AK Rental Service", locale: "en_IN", type: "website", images: [{ url: "/ak-logo.png", width: 1200, height: 630, alt: `AK Rental Service ${loc.name}` }] },
    keywords: [`fridge on rent ${loc.name}`, `washing machine on rent ${loc.name}`, `furniture on rent ${loc.name}`, `bed on rent ${loc.name}`, `sofa on rent ${loc.name}`, `TV on rent ${loc.name}`, `RO on rent ${loc.name}`, `electronics on rent ${loc.name}`, `appliance rental ${loc.name}`, `monthly rental ${loc.name}`, `rent on sale ${loc.name}`, `AK Rental Service ${loc.name}`],
  };
}

export default async function LocationPage({ params }: Props) {
  const { location: slug } = await params;
  const loc = getLocation(slug);
  const phone = loc.phone;
  return (
    <>
      <LocationBanner locationName={loc.fullName} />
      <Header locationName={loc.name} locationSlug={loc.slug} phone={phone} />
      <main>
        <Hero locationName={loc.name} />
        <PromoBanner />
        <WhyChooseUs />
        <Products locationName={loc.name} locationSlug={loc.slug} />
        <Stats />
        <Testimonials />
        <Contact locationName={loc.fullName} phone={phone} />
      </main>
      <FloatingButtons phone={phone} />
      <Footer locationName={loc.fullName} phone={phone} />
    </>
  );
}
