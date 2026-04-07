"use client";
import { useEffect, useState } from "react";

export default function ScrollUI() {
  const [pct, setPct] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setPct(total > 0 ? (scrolled / total) * 100 : 0);
      setShowTop(scrolled > 400);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <div id="scroll-progress" style={{ width: `${pct}%` }} />

      {/* Back to top */}
      <button
        id="back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-4 z-50 w-10 h-10 rounded-full text-white flex items-center justify-center shadow-lg transition hover:opacity-90${showTop ? " visible" : ""}`}
        style={{ backgroundColor: "#1e3a7a" }}
        aria-label="Back to top"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M12 19V5M5 12l7-7 7 7"/>
        </svg>
      </button>
    </>
  );
}
