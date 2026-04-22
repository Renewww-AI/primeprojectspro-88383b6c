import { Link } from "react-router-dom";
import SubPageLayout from "@/components/SubPageLayout";
import Seo, { breadcrumbJsonLd } from "@/components/Seo";
import { locations } from "@/data/content";

const LocationsIndex = () => {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Service Areas", path: "/locations" },
  ]);

  return (
    <>
      <Seo
        title="San Diego County Service Areas | Prime Projects"
        description="Prime Projects serves homeowners across San Diego North County — Oceanside, Carlsbad, Encinitas, Rancho Santa Fe, San Marcos, Vista, and more."
        path="/locations"
        jsonLd={breadcrumb}
      />
      <SubPageLayout
        eyebrow="Service Areas"
        title="Serving homeowners across San Diego County"
        intro="Prime Projects works in carefully selected service areas where we can deliver the level of communication, coordination, and quality the brand promises."
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {locations.map((l) => (
            <Link
              key={l.slug}
              to={`/services/${l.slug}`}
              className="bg-card rounded-2xl p-6 border border-border hover:border-olive transition-all"
              aria-label={`Home improvement services in ${l.name}`}
            >
              <h2 className="text-lg font-medium text-charcoal mb-1">{l.name}</h2>
              <p className="text-sm text-muted-foreground">{l.desc}</p>
            </Link>
          ))}
        </div>
      </SubPageLayout>
    </>
  );
};

export default LocationsIndex;
