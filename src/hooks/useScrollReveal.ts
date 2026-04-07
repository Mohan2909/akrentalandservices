"use client";
import { useEffect, useRef } from "react";

export function useScrollReveal(className = "fade-up") {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return ref;
}

export function useStaggerReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const children = Array.from(el.children) as HTMLElement[];
    children.forEach((c) => c.classList.add("fade-up"));

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          children.forEach((c) => c.classList.add("visible"));
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return ref;
}
