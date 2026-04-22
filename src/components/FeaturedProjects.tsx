import { Link } from "react-router-dom";
import { projects } from "@/data/content";

const heights = ["h-[320px]", "h-[400px]", "h-[280px]", "h-[360px]"];

const FeaturedProjects = () => {
  return (
    <section id="projects" className="bg-card py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-medium text-charcoal mb-4">
          Recent home projects and transformations
        </h2>
        <p className="text-base text-muted-foreground max-w-2xl mx-auto mb-12">
          See examples of residential improvement work shaped around real homeowner goals, thoughtful
          design choices, and quality-driven execution.
        </p>
        <div className="columns-1 md:columns-2 gap-6 space-y-6">
          {projects.map((p, i) => (
            <Link
              key={p.slug}
              to={`/projects/${p.slug}`}
              className={`block rounded-2xl overflow-hidden relative group cursor-pointer break-inside-avoid ${heights[i % heights.length]}`}
            >
              <img
                src={p.img}
                alt={p.badge}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <span className="absolute top-4 left-4 bg-card text-charcoal text-xs font-medium px-3 py-1 rounded-full">
                {p.badge}
              </span>
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/60 transition-colors flex items-end">
                <div className="p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-primary-foreground text-sm leading-relaxed mb-2">{p.overlay}</p>
                  <p className="text-primary-foreground/70 text-xs">{p.location}</p>
                </div>
              </div>
              <span className="absolute bottom-4 left-4 text-primary-foreground text-xs group-hover:opacity-0 transition-opacity drop-shadow-lg">
                {p.location}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
