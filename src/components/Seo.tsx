import { Helmet } from "react-helmet-async";

const SITE = "https://primeprojects.pro";

type Props = {
  title: string;
  description: string;
  /** Path beginning with "/" — canonical will be SITE + path. */
  path: string;
  image?: string;
  /** Optional JSON-LD object(s) to inject as structured data. */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  /** Defaults to "website". Use "article" for blog posts. */
  ogType?: string;
};

const Seo = ({ title, description, path, image, jsonLd, ogType = "website" }: Props) => {
  const canonical = `${SITE}${path}`;
  const blocks = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      {image && <meta property="og:image" content={image} />}
      <meta name="twitter:card" content={image ? "summary_large_image" : "summary"} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
      {blocks.map((b, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(b)}
        </script>
      ))}
    </Helmet>
  );
};

export const breadcrumbJsonLd = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: `${SITE}${item.path}`,
  })),
});

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Prime Projects",
  url: SITE,
  telephone: "(760) 525-5058",
  email: "elevate@renewww.com",
  image: `${SITE}/og-image.jpg`,
  areaServed: [
    "San Diego County",
    "Oceanside",
    "Carlsbad",
    "Encinitas",
    "Rancho Santa Fe",
    "San Marcos",
    "Vista",
    "Del Mar",
  ],
  address: { "@type": "PostalAddress", addressRegion: "CA", addressCountry: "US" },
  priceRange: "$$$",
};

export default Seo;
