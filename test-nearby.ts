import { getNearestLocation, distanceM, LOCATIONS, PHONE_ZONE_A, PHONE_ZONE_B, PHONE_ZONE_C } from "./src/lib/locations";

const ZONE_LABEL: Record<string, string> = {
  [PHONE_ZONE_A]: "Zone A",
  [PHONE_ZONE_B]: "Zone B",
  [PHONE_ZONE_C]: "Zone C",
};

const testCases = [
  // ── Zone A unlisted nearby areas ──
  { name: "Kasarwadi",        lat: 18.6350, lng: 73.8100, expectedZone: "Zone A" },
  { name: "Dapodi",           lat: 18.6100, lng: 73.8300, expectedZone: "Zone A" },
  { name: "Talawade",         lat: 18.6850, lng: 73.7600, expectedZone: "Zone A" },
  { name: "Chikhali",         lat: 18.6950, lng: 73.8100, expectedZone: "Zone A" },
  { name: "Charoli",          lat: 18.6600, lng: 73.8700, expectedZone: "Zone A" },
  { name: "Dehu Road",        lat: 18.7100, lng: 73.7600, expectedZone: "Zone A" },
  { name: "Kiwale",           lat: 18.6600, lng: 73.7400, expectedZone: "Zone A" },
  { name: "Spine Road",       lat: 18.6200, lng: 73.7650, expectedZone: "Zone A" },
  { name: "Kalewadi",         lat: 18.6230, lng: 73.7900, expectedZone: "Zone A" },
  { name: "Sangvi",           lat: 18.5880, lng: 73.8020, expectedZone: "Zone A" },

  // ── Zone B unlisted nearby areas ──
  { name: "Sus Village",      lat: 18.5450, lng: 73.7650, expectedZone: "Zone B" },
  { name: "Kirkatwadi",       lat: 18.5000, lng: 73.7600, expectedZone: "Zone B" },
  { name: "Nere",             lat: 18.5700, lng: 73.7500, expectedZone: "Zone B" },
  { name: "Mann Village",     lat: 18.5300, lng: 73.7200, expectedZone: "Zone B" },
  { name: "Lavale",           lat: 18.5500, lng: 73.7400, expectedZone: "Zone B" },
  { name: "Shivaji Chowk",    lat: 18.5600, lng: 73.7900, expectedZone: "Zone B" },

  // ── Zone C unlisted nearby areas ──
  { name: "Mundhwa",          lat: 18.5300, lng: 73.9200, expectedZone: "Zone C" },
  { name: "Ramwadi",          lat: 18.5600, lng: 73.9400, expectedZone: "Zone C" },
  { name: "Nagar Road",       lat: 18.5500, lng: 73.9300, expectedZone: "Zone C" },
  { name: "Yerawada",         lat: 18.5600, lng: 73.8900, expectedZone: "Zone C" },
  { name: "Sopan Baug",       lat: 18.5000, lng: 73.9100, expectedZone: "Zone C" },
  { name: "Phursungi",        lat: 18.4700, lng: 73.9400, expectedZone: "Zone C" },
  { name: "Uruli Devachi",    lat: 18.4400, lng: 73.9600, expectedZone: "Zone C" },
];

let pass = 0, fail = 0, noMatch = 0;

console.log("\n📍 Nearby Location Resolution Test (5000m radius)\n");
console.log("Area".padEnd(18), "Expected".padEnd(10), "Got Zone".padEnd(10), "Matched To".padEnd(28), "Dist".padEnd(8), "Status");
console.log("-".repeat(90));

for (const tc of testCases) {
  const result = getNearestLocation(tc.lat, tc.lng);

  if (!result) {
    let best = LOCATIONS[0], bestDist = Infinity;
    for (const loc of LOCATIONS) {
      const d = distanceM(tc.lat, tc.lng, loc.lat, loc.lng);
      if (d < bestDist) { bestDist = d; best = loc; }
    }
    console.log(
      tc.name.padEnd(18), tc.expectedZone.padEnd(10), "—".padEnd(10),
      `(closest: ${best.name} @ ${Math.round(bestDist)}m)`.padEnd(28), "—".padEnd(8), "❌ NO MATCH"
    );
    noMatch++;
    continue;
  }

  const dist = Math.round(distanceM(tc.lat, tc.lng, result.lat, result.lng));
  const gotZone = ZONE_LABEL[result.phone] ?? "Default";
  const status = gotZone === tc.expectedZone ? "✅ PASS" : "❌ FAIL";
  gotZone === tc.expectedZone ? pass++ : fail++;

  console.log(
    tc.name.padEnd(18), tc.expectedZone.padEnd(10), gotZone.padEnd(10),
    result.fullName.padEnd(28), `${dist}m`.padEnd(8), status
  );
}

console.log("-".repeat(90));
console.log(`\n✅ PASS: ${pass}  ❌ FAIL: ${fail}  ⚠️  NO MATCH: ${noMatch}  /  Total: ${testCases.length}\n`);
