const trustItems = [
  "Clear communication throughout the project",
  "Organized planning and scope alignment",
  "Quality-first mindset across every project type",
  "Service-focused homeowner experience",
  "Local market familiarity across San Diego County",
];

const reviews = [
  {
    quote: "Prime Projects helped us understand exactly what our ADU project would involve before we committed. The planning process alone was worth it.",
    name: "Sarah M. — Encinitas, CA",
  },
  {
    quote: "Finally a remodeling company that actually communicates. Our kitchen remodel stayed on scope and they flagged every decision point early.",
    name: "David & Karen L. — Carlsbad, CA",
  },
];

const Star = () => (
  <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const TrustSection = () => {
  return (
    <section className="bg-stone-alt py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-medium text-charcoal mb-4">
          Built for homeowners who value clarity, quality, and accountability
        </h2>
        <p className="text-base text-muted-foreground max-w-2xl mx-auto mb-12">
          The best projects begin with trust. Homeowners want clear communication, realistic
          expectations, and confidence that details will be handled well. Prime Projects is designed
          around that standard.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="flex flex-col gap-4">
            {trustItems.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-olive flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-charcoal">{item}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="bg-card rounded-2xl p-6 border border-border">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} />)}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3 italic">"{r.quote}"</p>
                <p className="text-sm font-medium text-charcoal">{r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-olive text-primary-foreground py-4 text-center text-sm mt-16">
        Serving homeowners across San Diego County and select nearby communities &nbsp;·&nbsp; License # Placeholder &nbsp;·&nbsp; Bonded & Insured
      </div>
    </section>
  );
};

export default TrustSection;
