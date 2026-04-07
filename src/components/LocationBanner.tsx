"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { LOCATIONS, getNearestLocation, slugify } from "@/lib/locations";

export default function LocationBanner({ locationName }: { locationName?: string }) {
  const router = useRouter();
  const [display, setDisplay] = useState<string | null>(locationName ?? null);
  const [loading, setLoading] = useState(!locationName);

  useEffect(() => {
    if (locationName) return;
    if (!navigator.geolocation) { setLoading(false); return; }

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude: lat, longitude: lng } = pos.coords;
        try {
          // 1. Try coordinate-based match first (spelling-proof, 1500m radius)
          const nearest = getNearestLocation(lat, lng);
          if (nearest) {
            setDisplay(nearest.fullName);
            router.replace(`/${nearest.slug}`);
            setLoading(false);
            return;
          }

          // 2. Fallback: reverse geocode and fuzzy-match by name
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
          );
          const data = await res.json();
          const addr = data.address;
          const area: string =
            addr.suburb || addr.neighbourhood || addr.village ||
            addr.city_district || addr.town || addr.city || "";

          const normalized = area.toLowerCase().replace(/\s+/g, "-");
          const matched = LOCATIONS.find((l) =>
            l.slug === normalized ||
            l.name.toLowerCase() === area.toLowerCase() ||
            normalized.includes(l.slug) ||
            l.slug.includes(normalized.split("-")[0])
          );

          if (matched) {
            setDisplay(matched.fullName);
            router.replace(`/${matched.slug}`);
          } else {
            const slug = slugify(area);
            setDisplay(`${area}, ${addr.city || addr.town || "Pune"}`);
            if (slug) router.replace(`/${slug}`);
          }
        } catch {
          setDisplay("Pune");
        }
        setLoading(false);
      },
      () => setLoading(false)
    );
  }, [locationName, router]);

  if (!loading && !display) return null;

  return (
    <div
      className="w-full text-white text-xs py-2 px-3 flex items-center justify-center gap-1.5 text-center"
      style={{ backgroundColor: "#1a3a6b" }}
    >
      {loading ? (
        <span className="animate-pulse">📍 Detecting your location...</span>
      ) : (
        <>
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 shrink-0">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
          <span className="leading-snug">
            We deliver in <strong>{display}</strong> — Free Installation &amp; Maintenance
          </span>
        </>
      )}
    </div>
  );
}
