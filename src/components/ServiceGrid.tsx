const services = [
  {
    img: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=500",
    alt: "ADU cottage exterior",
    title: "ADUs",
    body: "Add flexible living space with a smarter planning process for detached ADUs, attached units, conversions, and early feasibility guidance.",
    link: "/services/adu/",
    linkText: "Explore ADU Services →",
  },
  {
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500",
    alt: "Kitchen remodel",
    title: "Kitchen Remodels",
    body: "Create a kitchen that functions better, feels more refined, and fits the way your household actually lives.",
    link: "/services/kitchen-remodel/",
    linkText: "Explore Kitchen Services →",
  },
  {
    img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=500",
    alt: "Bathroom remodel",
    title: "Bathroom Remodels",
    body: "Upgrade comfort, layout, finishes, and long-term value with a more thoughtful bathroom remodel plan.",
    link: "/services/bathroom-remodel/",
    linkText: "Explore Bathroom Services →",
  },
  {
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500",
    alt: "Roofing project",
    title: "Roofing",
    body: "Protect the home with roofing guidance centered on condition, options, scope clarity, and quality workmanship.",
    link: "/services/roofing/",
    linkText: "Explore Roofing Services →",
  },
  {
    img: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=500",
    alt: "Outdoor living patio",
    title: "Outdoor Living",
    body: "Transform underused exterior space into a more functional, attractive extension of the home.",
    link: "/services/outdoor-living/",
    linkText: "Explore Outdoor Services →",
  },
  {
    img: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=500",
    alt: "Pool and backyard",
    title: "Pool & Backyard Projects",
    body: "Bring together hardscape, pool updates, landscape features, and layout improvements with a coordinated backyard vision.",
    link: "/services/pool-backyard-projects/",
    linkText: "Explore Pool & Backyard →",
  },
];

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
            <a
              key={s.title}
              href={s.link}
              className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-md hover:-translate-y-1 transition-all text-left group"
            >
              <img src={s.img} alt={s.alt} className="w-full h-48 object-cover" loading="lazy" />
              <div className="p-6">
                <h3 className="text-xl font-medium text-charcoal mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.body}</p>
                <span className="text-sm font-medium text-olive group-hover:underline">{s.linkText}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;
