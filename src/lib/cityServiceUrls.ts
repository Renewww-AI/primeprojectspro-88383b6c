// Centralized helpers for city + service combo URLs.
// Foundation for unique geo landing pages (e.g. /kitchen-remodel-rancho-santa-fe).
//
// Today these URLs render the same ServicePage with city-aware copy, meta,
// and JSON-LD. In the future, each combination can be expanded into fully
// unique long-form content without changing the URL contract.

import { services, locations } from "@/data/content";
import { serviceDetails } from "@/data/serviceDetails";

/** Slugs we want to expose at clean top-level URLs (no /services/ prefix). */
const PRIMARY_SERVICE_SLUGS = [
  "kitchen-remodel",
  "bathroom-remodel",
  "roofing",
  "home-audio",
  "landscaping",
];

/** Cities prioritized for geo landing pages. */
const PRIMARY_CITY_SLUGS = [
  "oceanside",
  "carlsbad",
  "encinitas",
  "rancho-santa-fe",
];

export const buildCityServicePath = (serviceSlug: string, citySlug: string) =>
  `/${serviceSlug}-${citySlug}`;

export const buildNamespacedCityServicePath = (
  serviceSlug: string,
  citySlug: string,
) => `/services/${serviceSlug}/${citySlug}`;

/** Returns all service slugs that have either a rich detail or a basic entry. */
export const allServiceSlugs = () =>
  Array.from(
    new Set([
      ...serviceDetails.map((s) => s.slug),
      ...services.map((s) => s.slug),
    ]),
  );

/** Returns city slugs in priority order for surfacing in UI lists. */
export const orderedCitySlugs = () => {
  const others = locations
    .map((l) => l.slug)
    .filter((s) => !PRIMARY_CITY_SLUGS.includes(s));
  return [...PRIMARY_CITY_SLUGS, ...others];
};

/** Parse a clean URL like "kitchen-remodel-rancho-santa-fe" into parts. */
export const parseCityServiceSlug = (
  combined: string,
): { serviceSlug: string; citySlug: string } | null => {
  const serviceSlugs = allServiceSlugs().sort((a, b) => b.length - a.length);
  const citySlugs = locations.map((l) => l.slug);
  for (const svc of serviceSlugs) {
    if (combined.startsWith(`${svc}-`)) {
      const city = combined.slice(svc.length + 1);
      if (citySlugs.includes(city)) return { serviceSlug: svc, citySlug: city };
    }
  }
  return null;
};

export { PRIMARY_SERVICE_SLUGS, PRIMARY_CITY_SLUGS };
