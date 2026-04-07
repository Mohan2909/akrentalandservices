"use client";
import { useState } from "react";
import type { ReactElement } from "react";
import Link from "next/link";
import AKLogo from "./AKLogo";

type Props = { locationName?: string; locationSlug?: string; phone?: string };

const NAV_ICONS: Record<string, ReactElement> = {
  "Home": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
      <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/><path d="M9 21V12h6v9"/>
    </svg>
  ),
  "About Us": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
      <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
    </svg>
  ),
  "Products": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
      <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
    </svg>
  ),
  "Contact Us": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
    </svg>
  ),
};

export default function Header({ locationName, locationSlug, phone = "9665150585" }: Props) {
  const PHONE = `+91 ${phone.replace(/^91/, "").replace(/(\d{5})(\d{5})/, "$1 $2")}`;
  const [open, setOpen] = useState(false);
  const base = locationSlug ? `/${locationSlug}` : "/";

  const NAV = [
    { label: "Home",       href: base },
    { label: "About Us",   href: `${base}#about` },
    { label: "Products",   href: `${base}#products` },
    { label: "Contact Us", href: `${base}#contact` },
  ];

  return (
    <header className="bg-white sticky top-0 z-50" style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}>
      <div className="max-w-7xl mx-auto px-3 py-2 flex items-center justify-between gap-2">

        {/* Logo */}
        <Link href={base} className="flex items-center gap-1.5 select-none shrink-0">
          <AKLogo height={36} />
          {locationName && (
            <span className="hidden sm:flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full text-white whitespace-nowrap"
              style={{ backgroundColor: "#1e3a7a" }}>
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 shrink-0">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              {locationName}
            </span>
          )}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {NAV.map((n, i) => (
            <Link key={n.label} href={n.href}
              className="flex items-center gap-1.5 text-sm font-medium text-gray-700 hover:text-[#1e3a7a] transition-colors pb-0.5"
              style={i === 0 ? { borderBottom: "2px solid #1e3a7a", color: "#1e3a7a" } : {}}>
              {NAV_ICONS[n.label]}
              {n.label}
            </Link>
          ))}
        </nav>

        {/* Phone */}
        <div className="hidden md:flex items-center shrink-0">
          <a href={`tel:${phone}`}
            className="flex items-center gap-2 border border-gray-300 rounded-sm px-3 py-1.5 text-sm font-semibold text-gray-700 hover:border-[#1e3a7a] hover:text-[#1e3a7a] transition whitespace-nowrap">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            {PHONE}
          </a>
        </div>

        {/* Hamburger */}
        <button className="md:hidden text-gray-700 p-1" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="w-6 h-6">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="w-6 h-6">
              <path d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          )}
        </button>
      </div>

      {/* Accent bar */}
      <div className="h-[3px] flex">
        <div className="flex-1" style={{ backgroundColor: "#1e3a7a" }} />
        <div className="w-16" style={{ backgroundColor: "#2d7a3a" }} />
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t px-4 pb-4 flex flex-col gap-1">
          {NAV.map((n) => (
            <Link key={n.label} href={n.href} onClick={() => setOpen(false)}
              className="flex items-center gap-2.5 text-sm font-medium text-gray-700 py-2.5 border-b border-gray-50 hover:text-[#1e3a7a]">
              <span style={{ color: "#1e3a7a" }}>{NAV_ICONS[n.label]}</span>
              {n.label}
            </Link>
          ))}
          <a href={`tel:${phone}`} className="flex items-center gap-2.5 text-sm font-semibold mt-1 py-2" style={{ color: "#1e3a7a" }}>
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            {PHONE}
          </a>
        </div>
      )}
    </header>
  );
}
