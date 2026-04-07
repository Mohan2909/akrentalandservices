export type LocationData = {
  slug: string;
  name: string;
  city: string;
  fullName: string;
  pincode?: string;
  phone: string;
  lat: number;
  lng: number;
};

export const BUSINESS_ADDRESS = "Hanuman Nagar, Sambhaji Nagar, Thergaon, Pimpri-Chinchwad, Maharashtra 411033";
export const BUSINESS_CITY = "Pimpri-Chinchwad";

export const PHONE_ZONE_A = "9665150585";
export const PHONE_ZONE_B = "9839867374";
export const PHONE_ZONE_C = "7666461660";
export const PHONE_DEFAULT = "9665150585";

// Haversine distance in metres
export function distanceM(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const R = 6371000;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

export const LOCATIONS: LocationData[] = [
  // ── Zone A (9665150585) ──
  { slug: "thergaon",          name: "Thergaon",          city: "Pimpri-Chinchwad", fullName: "Thergaon, Pimpri-Chinchwad",          pincode: "411033", phone: PHONE_ZONE_A, lat: 18.6121, lng: 73.7787 },
  { slug: "hanuman-nagar",     name: "Hanuman Nagar",     city: "Pimpri-Chinchwad", fullName: "Hanuman Nagar, Pimpri-Chinchwad",     pincode: "411033", phone: PHONE_ZONE_A, lat: 18.6298, lng: 73.8491 },
  { slug: "sambhaji-nagar",    name: "Sambhaji Nagar",    city: "Pimpri-Chinchwad", fullName: "Sambhaji Nagar, Pimpri-Chinchwad",    pincode: "411033", phone: PHONE_ZONE_A, lat: 18.6618, lng: 73.7953 },
  { slug: "pimpri-chinchwad",  name: "Pimpri-Chinchwad",  city: "Pimpri-Chinchwad", fullName: "Pimpri-Chinchwad, Maharashtra",       pincode: "411033", phone: PHONE_ZONE_A, lat: 18.6279, lng: 73.7997 },
  { slug: "pimpri",            name: "Pimpri",            city: "Pimpri-Chinchwad", fullName: "Pimpri, Pimpri-Chinchwad",            pincode: "411018", phone: PHONE_ZONE_A, lat: 18.6232, lng: 73.8020 },
  { slug: "chinchwad",         name: "Chinchwad",         city: "Pimpri-Chinchwad", fullName: "Chinchwad, Pimpri-Chinchwad",         pincode: "411019", phone: PHONE_ZONE_A, lat: 18.6440, lng: 73.7930 },
  { slug: "nigdi",             name: "Nigdi",             city: "Pimpri-Chinchwad", fullName: "Nigdi, Pimpri-Chinchwad",             pincode: "411044", phone: PHONE_ZONE_A, lat: 18.6600, lng: 73.7700 },
  { slug: "akurdi",            name: "Akurdi",            city: "Pimpri-Chinchwad", fullName: "Akurdi, Pimpri-Chinchwad",            pincode: "411035", phone: PHONE_ZONE_A, lat: 18.6486, lng: 73.7647 },
  { slug: "wakad",             name: "Wakad",             city: "Pimpri-Chinchwad", fullName: "Wakad, Pimpri-Chinchwad",             pincode: "411057", phone: PHONE_ZONE_A, lat: 18.5885, lng: 73.7810 },
  { slug: "hinjewadi",         name: "Hinjewadi",         city: "Pimpri-Chinchwad", fullName: "Hinjewadi, Pimpri-Chinchwad",         pincode: "411057", phone: PHONE_ZONE_A, lat: 18.5924, lng: 73.7603 },
  { slug: "hinjewadi-phase-1", name: "Hinjewadi Phase 1", city: "Pimpri-Chinchwad", fullName: "Hinjewadi Phase 1, Pimpri-Chinchwad", pincode: "411057", phone: PHONE_ZONE_A, lat: 18.5930, lng: 73.7350 },
  { slug: "hinjewadi-phase-2", name: "Hinjewadi Phase 2", city: "Pimpri-Chinchwad", fullName: "Hinjewadi Phase 2, Pimpri-Chinchwad", pincode: "411057", phone: PHONE_ZONE_A, lat: 18.5870, lng: 73.7280 },
  { slug: "hinjewadi-phase-3", name: "Hinjewadi Phase 3", city: "Pimpri-Chinchwad", fullName: "Hinjewadi Phase 3, Pimpri-Chinchwad", pincode: "411057", phone: PHONE_ZONE_A, lat: 18.5810, lng: 73.7200 },
  { slug: "punawale",          name: "Punawale",          city: "Pimpri-Chinchwad", fullName: "Punawale, Pimpri-Chinchwad",          pincode: "411033", phone: PHONE_ZONE_A, lat: 18.6288, lng: 73.7392 },
  { slug: "tathwade",          name: "Tathwade",          city: "Pimpri-Chinchwad", fullName: "Tathwade, Pimpri-Chinchwad",          pincode: "411033", phone: PHONE_ZONE_A, lat: 18.6180, lng: 73.7500 },
  { slug: "ravet",             name: "Ravet",             city: "Pimpri-Chinchwad", fullName: "Ravet, Pimpri-Chinchwad",             pincode: "412101", phone: PHONE_ZONE_A, lat: 18.6490, lng: 73.7280 },
  { slug: "maan",              name: "Maan",              city: "Pimpri-Chinchwad", fullName: "Maan, Pimpri-Chinchwad",              pincode: "412101", phone: PHONE_ZONE_A, lat: 18.5750, lng: 73.7100 },
  { slug: "marunji",           name: "Marunji",           city: "Pimpri-Chinchwad", fullName: "Marunji, Pimpri-Chinchwad",           pincode: "412101", phone: PHONE_ZONE_A, lat: 18.6117, lng: 73.7156 },
  { slug: "bhumkar-chowk",     name: "Bhumkar Chowk",     city: "Pimpri-Chinchwad", fullName: "Bhumkar Chowk, Pimpri-Chinchwad",     pincode: "411057", phone: PHONE_ZONE_A, lat: 18.6053, lng: 73.7520 },
  { slug: "pimple-saudagar",   name: "Pimple Saudagar",   city: "Pimpri-Chinchwad", fullName: "Pimple Saudagar, Pimpri-Chinchwad",   pincode: "411027", phone: PHONE_ZONE_A, lat: 18.5982, lng: 73.7978 },
  { slug: "pimple-gurav",      name: "Pimple Gurav",      city: "Pimpri-Chinchwad", fullName: "Pimple Gurav, Pimpri-Chinchwad",      pincode: "411061", phone: PHONE_ZONE_A, lat: 18.5874, lng: 73.8213 },
  { slug: "old-sanghvi",       name: "Old Sanghvi",       city: "Pimpri-Chinchwad", fullName: "Old Sanghvi, Pimpri-Chinchwad",       pincode: "411027", phone: PHONE_ZONE_A, lat: 18.5960, lng: 73.7960 },
  { slug: "khadki",            name: "Khadki",            city: "Pune",             fullName: "Khadki, Pune",                        pincode: "411003", phone: PHONE_ZONE_A, lat: 18.5740, lng: 73.8380 },
  { slug: "nashik-phata",      name: "Nashik Phata",      city: "Pimpri-Chinchwad", fullName: "Nashik Phata, Pimpri-Chinchwad",      pincode: "411044", phone: PHONE_ZONE_A, lat: 18.6093, lng: 73.8201 },
  { slug: "bhosari",           name: "Bhosari",           city: "Pimpri-Chinchwad", fullName: "Bhosari, Pimpri-Chinchwad",           pincode: "411026", phone: PHONE_ZONE_A, lat: 18.6210, lng: 73.8501 },
  { slug: "moshi",             name: "Moshi",             city: "Pimpri-Chinchwad", fullName: "Moshi, Pimpri-Chinchwad",             pincode: "412105", phone: PHONE_ZONE_A, lat: 18.6523, lng: 73.8442 },
  { slug: "university",        name: "University",        city: "Pune",             fullName: "University Road, Pune",               pincode: "411007", phone: PHONE_ZONE_A, lat: 18.5457, lng: 73.8256 },
  { slug: "warje",             name: "Warje",             city: "Pune",             fullName: "Warje, Pune",                         pincode: "411058", phone: PHONE_ZONE_A, lat: 18.4900, lng: 73.8020 },
  { slug: "kothrud",           name: "Kothrud",           city: "Pune",             fullName: "Kothrud, Pune",                       pincode: "411038", phone: PHONE_ZONE_A, lat: 18.5071, lng: 73.8051 },
  { slug: "karve-nagar",       name: "Karve Nagar",       city: "Pune",             fullName: "Karve Nagar, Pune",                   pincode: "411052", phone: PHONE_ZONE_A, lat: 18.4960, lng: 73.8230 },
  { slug: "sinhagad-road",     name: "Sinhagad Road",     city: "Pune",             fullName: "Sinhagad Road, Pune",                 pincode: "411041", phone: PHONE_ZONE_A, lat: 18.4808, lng: 73.8255 },
  { slug: "shivane",           name: "Shivane",           city: "Pune",             fullName: "Shivane, Pune",                       pincode: "411023", phone: PHONE_ZONE_A, lat: 18.4670, lng: 73.7931 },
  { slug: "ambegaon",          name: "Ambegaon",          city: "Pune",             fullName: "Ambegaon, Pune",                      pincode: "411046", phone: PHONE_ZONE_A, lat: 18.4600, lng: 73.8300 },
  { slug: "navle-bridge",      name: "Navle Bridge",      city: "Pune",             fullName: "Navle Bridge, Pune",                  pincode: "411041", phone: PHONE_ZONE_A, lat: 18.4600, lng: 73.8231 },
  { slug: "narhe",             name: "Narhe",             city: "Pune",             fullName: "Narhe, Pune",                         pincode: "411041", phone: PHONE_ZONE_A, lat: 18.4750, lng: 73.8050 },
  { slug: "katraj",            name: "Katraj",            city: "Pune",             fullName: "Katraj, Pune",                        pincode: "411046", phone: PHONE_ZONE_A, lat: 18.4530, lng: 73.8560 },
  { slug: "swargate",          name: "Swargate",          city: "Pune",             fullName: "Swargate, Pune",                      pincode: "411042", phone: PHONE_ZONE_A, lat: 18.5020, lng: 73.8620 },
  { slug: "shivajinagar",      name: "Shivajinagar",      city: "Pune",             fullName: "Shivajinagar, Pune",                  pincode: "411005", phone: PHONE_ZONE_A, lat: 18.5308, lng: 73.8474 },
  { slug: "aundh",             name: "Aundh",             city: "Pune",             fullName: "Aundh, Pune",                         pincode: "411007", phone: PHONE_ZONE_A, lat: 18.5590, lng: 73.8080 },

  // ── Zone B (9839867374) ──
  { slug: "bavdhan",           name: "Bavdhan",           city: "Pune",             fullName: "Bavdhan, Pune",                       pincode: "411021", phone: PHONE_ZONE_B, lat: 18.5280, lng: 73.7760 },
  { slug: "balewadi",          name: "Balewadi",          city: "Pune",             fullName: "Balewadi, Pune",                      pincode: "411045", phone: PHONE_ZONE_B, lat: 18.5820, lng: 73.7690 },
  { slug: "baner",             name: "Baner",             city: "Pune",             fullName: "Baner, Pune",                         pincode: "411045", phone: PHONE_ZONE_B, lat: 18.5590, lng: 73.7868 },
  { slug: "susgaon",           name: "Susgaon",           city: "Pune",             fullName: "Susgaon, Pune",                       pincode: "411021", phone: PHONE_ZONE_B, lat: 18.5350, lng: 73.7550 },
  { slug: "pashan",            name: "Pashan",            city: "Pune",             fullName: "Pashan, Pune",                        pincode: "411021", phone: PHONE_ZONE_B, lat: 18.5380, lng: 73.8010 },
  { slug: "pimple-nilakh",     name: "Pimple Nilakh",     city: "Pimpri-Chinchwad", fullName: "Pimple Nilakh, Pimpri-Chinchwad",     pincode: "411027", phone: PHONE_ZONE_B, lat: 18.5697, lng: 73.7941 },
  { slug: "pirangut",          name: "Pirangut",          city: "Pune",             fullName: "Pirangut, Pune",                      pincode: "412115", phone: PHONE_ZONE_B, lat: 18.5100, lng: 73.6900 },
  { slug: "nande",             name: "Nande",             city: "Pune",             fullName: "Nande, Pune",                         pincode: "412115", phone: PHONE_ZONE_B, lat: 18.5500, lng: 73.7200 },
  { slug: "chande",            name: "Chande",            city: "Pune",             fullName: "Chande, Pune",                        pincode: "412115", phone: PHONE_ZONE_B, lat: 18.5550, lng: 73.7054 },
  { slug: "bhugaon",           name: "Bhugaon",           city: "Pune",             fullName: "Bhugaon, Pune",                       pincode: "412115", phone: PHONE_ZONE_B, lat: 18.5000, lng: 73.7501 },

  { slug: "kirkatwadi",        name: "Kirkatwadi",        city: "Pune",             fullName: "Kirkatwadi, Pune",                    pincode: "411024", phone: PHONE_ZONE_B, lat: 18.5000, lng: 73.7600 },
  { slug: "nere",              name: "Nere",              city: "Pune",             fullName: "Nere, Pune",                          pincode: "412115", phone: PHONE_ZONE_B, lat: 18.5700, lng: 73.7500 },
  { slug: "dehu-road",         name: "Dehu Road",         city: "Pimpri-Chinchwad", fullName: "Dehu Road, Pimpri-Chinchwad",          pincode: "412101", phone: PHONE_ZONE_A, lat: 18.7100, lng: 73.7600 },

  // ── Zone C (7666461660) ──
  { slug: "viman-nagar",       name: "Viman Nagar",       city: "Pune",             fullName: "Viman Nagar, Pune",                   pincode: "411014", phone: PHONE_ZONE_C, lat: 18.5679, lng: 73.9143 },
  { slug: "wadgaon-sheri",     name: "Wadgaon Sheri",     city: "Pune",             fullName: "Wadgaon Sheri, Pune",                 pincode: "411014", phone: PHONE_ZONE_C, lat: 18.5490, lng: 73.9149 },
  { slug: "kharadi",           name: "Kharadi",           city: "Pune",             fullName: "Kharadi, Pune",                       pincode: "411014", phone: PHONE_ZONE_C, lat: 18.5520, lng: 73.9420 },
  { slug: "kalyani-nagar",     name: "Kalyani Nagar",     city: "Pune",             fullName: "Kalyani Nagar, Pune",                 pincode: "411006", phone: PHONE_ZONE_C, lat: 18.5481, lng: 73.9026 },
  { slug: "hadapsar",          name: "Hadapsar",          city: "Pune",             fullName: "Hadapsar, Pune",                      pincode: "411028", phone: PHONE_ZONE_C, lat: 18.5008, lng: 73.9379 },
  { slug: "keshav-nagar",      name: "Keshav Nagar",      city: "Pune",             fullName: "Keshav Nagar, Pune",                  pincode: "411036", phone: PHONE_ZONE_C, lat: 18.5323, lng: 73.9384 },
  { slug: "magarpatta",        name: "Magarpatta",        city: "Pune",             fullName: "Magarpatta, Pune",                    pincode: "411013", phone: PHONE_ZONE_C, lat: 18.5120, lng: 73.9280 },
  { slug: "magarpatta-city",   name: "Magarpatta City",   city: "Pune",             fullName: "Magarpatta City, Pune",               pincode: "411013", phone: PHONE_ZONE_C, lat: 18.5105, lng: 73.9295 },
  { slug: "mohammad-wadi",     name: "Mohammad Wadi",     city: "Pune",             fullName: "Mohammad Wadi, Pune",                 pincode: "411060", phone: PHONE_ZONE_C, lat: 18.4780, lng: 73.9180 },
  { slug: "undri",             name: "Undri",             city: "Pune",             fullName: "Undri, Pune",                         pincode: "411060", phone: PHONE_ZONE_C, lat: 18.4519, lng: 73.8914 },
  { slug: "uruli-devachi",     name: "Uruli Devachi",     city: "Pune",             fullName: "Uruli Devachi, Pune",                 pincode: "412308", phone: PHONE_ZONE_C, lat: 18.4400, lng: 73.9600 },
  { slug: "sopan-baug",        name: "Sopan Baug",        city: "Pune",             fullName: "Sopan Baug, Pune",                    pincode: "411028", phone: PHONE_ZONE_C, lat: 18.5000, lng: 73.9100 },
  { slug: "lohegaon",          name: "Lohegaon",          city: "Pune",             fullName: "Lohegaon, Pune",                      pincode: "411032", phone: PHONE_ZONE_C, lat: 18.5804, lng: 73.9182 },
  { slug: "dhanori",           name: "Dhanori",           city: "Pune",             fullName: "Dhanori, Pune",                       pincode: "411015", phone: PHONE_ZONE_C, lat: 18.5907, lng: 73.8913 },
  { slug: "vishrantwadi",      name: "Vishrantwadi",      city: "Pune",             fullName: "Vishrantwadi, Pune",                  pincode: "411015", phone: PHONE_ZONE_C, lat: 18.5726, lng: 73.8782 },
  { slug: "wagholi",           name: "Wagholi",           city: "Pune",             fullName: "Wagholi, Pune",                       pincode: "412207", phone: PHONE_ZONE_C, lat: 18.5806, lng: 73.9833 },
  { slug: "manjri-budruk",     name: "Manjri Budruk",     city: "Pune",             fullName: "Manjri Budruk, Pune",                 pincode: "412307", phone: PHONE_ZONE_C, lat: 18.5020, lng: 73.9580 },
  { slug: "manjri-khurd",      name: "Manjri Khurd",      city: "Pune",             fullName: "Manjri Khurd, Pune",                  pincode: "412307", phone: PHONE_ZONE_C, lat: 18.4960, lng: 73.9620 },
  { slug: "koregaon-park",     name: "Koregaon Park",     city: "Pune",             fullName: "Koregaon Park, Pune",                 pincode: "411001", phone: PHONE_ZONE_C, lat: 18.5366, lng: 73.8933 },
  { slug: "sun-city-road",     name: "Sun City Road",     city: "Pune",             fullName: "Sun City Road, Pune",                 pincode: "411014", phone: PHONE_ZONE_C, lat: 18.5600, lng: 73.9300 },
  { slug: "chandan-nagar",     name: "Chandan Nagar",     city: "Pune",             fullName: "Chandan Nagar, Pune",                 pincode: "411014", phone: PHONE_ZONE_C, lat: 18.5571, lng: 73.9281 },

  // ── Default ──
  { slug: "pune",              name: "Pune",              city: "Pune",             fullName: "Pune",                                                   phone: PHONE_DEFAULT, lat: 18.5204, lng: 73.8567 },
  { slug: "deccan",            name: "Deccan",            city: "Pune",             fullName: "Deccan, Pune",                        pincode: "411004", phone: PHONE_DEFAULT, lat: 18.5195, lng: 73.8418 },
  { slug: "kondhwa",           name: "Kondhwa",           city: "Pune",             fullName: "Kondhwa, Pune",                       pincode: "411048", phone: PHONE_DEFAULT, lat: 18.4700, lng: 73.8900 },
  { slug: "wanowrie",          name: "Wanowrie",          city: "Pune",             fullName: "Wanowrie, Pune",                      pincode: "411040", phone: PHONE_DEFAULT, lat: 18.4884, lng: 73.8987 },
  { slug: "bibwewadi",         name: "Bibwewadi",         city: "Pune",             fullName: "Bibwewadi, Pune",                     pincode: "411037", phone: PHONE_DEFAULT, lat: 18.4752, lng: 73.8562 },
];

export const DEFAULT_LOCATION = LOCATIONS[0];

export function getLocation(slug: string): LocationData {
  return LOCATIONS.find((l) => l.slug === slug) ?? DEFAULT_LOCATION;
}

// Returns the nearest location within 1500m, else null
export function getNearestLocation(lat: number, lng: number): LocationData | null {
  let best: LocationData | null = null;
  let bestDist = Infinity;
  for (const loc of LOCATIONS) {
    const d = distanceM(lat, lng, loc.lat, loc.lng);
    if (d < bestDist) { bestDist = d; best = loc; }
  }
  return (best && bestDist <= 5000) ? best : null;
}

export function getPhone(slug?: string): string {
  if (!slug) return PHONE_DEFAULT;
  return getLocation(slug).phone;
}

export function slugify(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}
