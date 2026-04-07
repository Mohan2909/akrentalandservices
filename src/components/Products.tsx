"use client";
import { useState } from "react";
import Image from "next/image";
import { useStaggerReveal } from "@/hooks/useScrollReveal";

const WA = "https://wa.me/919876543210";

const ELECTRONICS = [
  { title: "Single Door Fridge",              desc: "165–190 L · Energy Efficient · Starting ₹499/mo",  img: "/SingleDoorFridge.avif" },
  { title: "Double Door Fridge",              desc: "250–310 L · Frost Free · Starting ₹699/mo",        img: "/doubledoorfridge.avif" },
  { title: "Fully Automatic Washing Machine", desc: "6–7 kg · Top Load · Starting ₹599/mo",             img: "/toploadwashingmachine.jpg" },
  { title: "Front Load Washing Machine",      desc: "6–8 kg · Inverter Motor · Starting ₹699/mo",       img: "/FrontLoadWashing Machine.webp" },
  { title: "TV / TV Table",                   desc: "32\"–55\" Smart TV + Table · Starting ₹799/mo",    img: "/TV+TVTable.jpeg" },
  { title: "Oven / Microwave",                desc: "20–30 L · Convection · Starting ₹399/mo",          img: "/oven.webp" },
  { title: "RO Water Purifier",               desc: "7–10 L · UV + UF Filter · Starting ₹349/mo",       img: "/wall-purifier.jpg" },
];

const FURNITURE = [
  { title: "Queen Size Double Wooden Bed",    desc: "Solid Wood · King Finish · Starting ₹599/mo",      img: "/doorbedwithoutstorage.avif" },
  { title: "Queen Size Bed with Storage",     desc: "Hydraulic Storage · Wooden · Starting ₹699/mo",    img: "/doubledoorwithstorage.avif" },
  { title: "Single Wooden Bed",               desc: "Solid Wood · Single Size · Starting ₹399/mo",      img: "/singlebed.jpg" },
  { title: "Single Bed & Mattress",           desc: "Wooden Frame + Mattress · Starting ₹499/mo",       img: "/singlemattress.jpg" },
  { title: "Almirah Double Door (Wooden)",    desc: "2-Door · Full Length Mirror · Starting ₹499/mo",   img: "/almarihdoubledoor.jpg" },
  { title: "Almirah Single Door (Wooden)",    desc: "1-Door · Compact Design · Starting ₹349/mo",       img: "/singledooralmarih.avif" },
  { title: "Sofa Set (3+1+1)",                desc: "5-Seater · Fabric Upholstery · Starting ₹799/mo",  img: "/sofa.jpg" },
  { title: "Center Table",                    desc: "Wooden · Glass Top · Starting ₹199/mo",            img: "/centertable.jpg" },
  { title: "Shoe Rack",                       desc: "4–6 Tier · Metal / Wood · Starting ₹149/mo",       img: "/shoesrack.jpg" },
  { title: "Side Table",                      desc: "Bedside · Wooden · Starting ₹149/mo",              img: "/sidetable.jpeg" },
  { title: "Study Table",                     desc: "With Shelf · Compact · Starting ₹249/mo",          img: "/studytable.webp" },
  { title: "Office Chair",                    desc: "Ergonomic · Adjustable Height · Starting ₹299/mo", img: "/chair.jpg" },
  { title: "Dining Table & Chairs",           desc: "4-Seater · Wooden · Starting ₹699/mo",             img: "/diningtable.jpg" },
];

type Tab = "electronics" | "furniture";
type Props = { locationName?: string; locationSlug?: string };

function ImageModal({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
      onClick={onClose}
    >
      <div className="relative max-w-lg w-full mx-4" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 z-10 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg text-gray-700 hover:text-black font-bold text-lg leading-none"
        >
          ×
        </button>
        <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
          <Image src={src} alt={alt} fill className="object-contain rounded-lg" sizes="(max-width: 640px) 90vw, 500px" />
        </div>
      </div>
    </div>
  );
}

function Card({ title, desc, img, locationName }: { title: string; desc: string; img: string; locationName: string }) {
  const [modalOpen, setModalOpen] = useState(false);
  const msg = `Hi, I want to rent ${title} in ${locationName}`;
  return (
    <>
      {modalOpen && (
        <ImageModal
          src={img}
          alt={`${title} on rent in ${locationName} – AK Rental Service`}
          onClose={() => setModalOpen(false)}
        />
      )}
    <div className="product-card bg-white overflow-hidden flex flex-col group"
      style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.09)", borderRadius: "6px" }}>
      <div
        className="relative overflow-hidden bg-gray-50 cursor-pointer"
        style={{ aspectRatio: "4/3" }}
        onClick={() => setModalOpen(true)}
      >
        <Image
          src={img}
          alt={`${title} on rent in ${locationName} – AK Rental Service`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 25vw, (max-width: 1024px) 33vw, 25vw"
        />
        <span className="absolute top-1 left-1 text-white font-bold px-1 py-0.5 rounded hidden sm:block"
          style={{ backgroundColor: "#2d7a3a", fontSize: "9px" }}>ON RENT</span>
      </div>
      <div className="px-1.5 sm:px-2.5 pt-1.5 sm:pt-2.5 pb-2 sm:pb-3 flex flex-col flex-1">
        <h3 className="font-bold leading-snug mb-0.5" style={{ color: "#1e3a7a", fontSize: "9px" }}>{title}</h3>
        <p className="text-gray-500 mb-1.5 leading-snug hidden sm:block" style={{ fontSize: "9px" }}>{desc}</p>
        <a href={`${WA}?text=${encodeURIComponent(msg)}`}
          target="_blank" rel="noreferrer"
          className="mt-auto w-full text-white font-bold py-1.5 flex items-center justify-center gap-1 transition hover:opacity-90 rounded"
          style={{ backgroundColor: "#1e3a7a", fontSize: "9px" }}>
          Rent ›
        </a>
      </div>
    </div>
    </>
  );
}

export default function Products({ locationName = "Pimpri-Chinchwad", locationSlug }: Props) {
  const [tab, setTab] = useState<Tab>("electronics");
  const gridRef = useStaggerReveal();
  const items = tab === "electronics" ? ELECTRONICS : FURNITURE;

  return (
    <section id="products" className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-center mb-1" style={{ color: "#1e3a7a" }}>
          Rent Electronics &amp; Furniture in <span className="shimmer-text">{locationName}</span>
        </h2>
        <p className="text-center text-gray-500 text-xs sm:text-sm mb-6">
          Affordable monthly rentals · Free installation · Zero deposit · {locationName}
        </p>

        {/* Tabs */}
        <div className="flex justify-center mb-6">
          <div className="flex border-2 overflow-hidden rounded w-full max-w-sm" style={{ borderColor: "#1e3a7a" }}>
            {(["electronics", "furniture"] as Tab[]).map((t) => (
              <button key={t} onClick={() => setTab(t)}
                className="flex-1 px-2 py-2.5 text-xs font-bold transition leading-tight"
                style={tab === t
                  ? { backgroundColor: "#1e3a7a", color: "#fff" }
                  : { backgroundColor: "#fff", color: "#1e3a7a" }}>
                {t === "electronics" ? `⚡ Electronics` : `🛋️ Furniture`}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-1.5 sm:gap-3 stagger" ref={gridRef}>
          {items.map((p) => <Card key={p.title} {...p} locationName={locationName} />)}
        </div>
      </div>
    </section>
  );
}
