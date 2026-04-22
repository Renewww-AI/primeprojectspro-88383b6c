import { Link } from "react-router-dom";
import { services } from "@/data/content";

const ServiceGrid = () => {
  return (
    <section id="services" className="bg-stone-bg py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-medium text-charcoal mb-4">
          Home improvement services homeowners can plan with confidence
        </h2>
        <p className="text-base text-muted-foreground max-w-2xl mx-auto mb-12">
          Explore our core residential project categories, each supported by dedicated service pages
          with planning details, project considerations, and next-step guidance.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}`}
              className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-md hover:-translate-y-1 transition-all text-left group"
            >
              <img src={s.img} alt={s.alt} className="w-full h-48 object-cover" loading="lazy" />
              <div className="p-6">
                <h3 className="text-xl font-medium text-charcoal mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.body}</p>
                <span className="text-sm font-medium text-olive group-hover:underline">
                  Explore {s.title} →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;
