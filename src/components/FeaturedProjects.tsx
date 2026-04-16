const projects = [
  {
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=700&h=500",
    badge: "Kitchen Remodel",
    location: "Encinitas, CA",
    overlay: "Coastal kitchen remodel featuring custom cabinetry, quartz countertops, and improved natural light.",
    h: "h-[320px]",
  },
  {
    img: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=700&h=600",
    badge: "Outdoor Living",
    location: "Carlsbad, CA",
    overlay: "Backyard living upgrade with covered patio, built-in BBQ, and hardscape redesign.",
    h: "h-[400px]",
  },
  {
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&h=400",
    badge: "Roofing",
    location: "Oceanside, CA",
    overlay: "Full roof replacement and exterior refresh including fascia, gutters, and trim painting.",
    h: "h-[280px]",
  },
  {
    img: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=700&h=500",
    badge: "ADU",
    location: "North County, CA",
    overlay: "ADU planning and feasibility project for a 600 sq ft detached unit with separate entrance.",
    h: "h-[360px]",
  },
];

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
          {projects.map((p) => (
            <div
              key={p.badge + p.location}
              className={`rounded-2xl overflow-hidden relative group cursor-pointer break-inside-avoid ${p.h}`}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
