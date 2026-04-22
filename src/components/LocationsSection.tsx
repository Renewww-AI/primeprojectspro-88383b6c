import { Link } from "react-router-dom";
import { locations } from "@/data/content";

const LocationsSection = () => {
  return (
    <section id="locations" className="bg-card py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-medium text-charcoal mb-4">
          Serving homeowners across San Diego County
        </h2>
        <p className="text-base text-muted-foreground max-w-2xl mx-auto mb-12">
          Prime Projects works with homeowners in carefully selected service areas where we can deliver
          the level of communication, coordination, and quality the brand promises.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {locations.map((c) => (
            <Link
              key={c.slug}
              to={`/services/${c.slug}`}
              className="bg-stone-bg rounded-2xl p-6 border border-border hover:border-olive hover:bg-card transition-all group text-left"
            >
              <h3 className="text-lg font-medium text-charcoal mb-1 group-hover:text-olive transition-colors">
                {c.name}
              </h3>
              <p className="text-xs text-muted-foreground">{c.desc}</p>
              <span className="text-olive text-sm mt-2 inline-block opacity-0 group-hover:opacity-100 transition-opacity">
                →
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-10">
          <Link
            to="/locations"
            className="border border-olive text-olive rounded-full px-8 py-3 text-sm font-medium hover:bg-olive hover:text-primary-foreground transition-all inline-block"
          >
            View All Service Areas
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
