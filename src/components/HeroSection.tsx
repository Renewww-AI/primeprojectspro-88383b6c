const HeroSection = () => {
  return (
    <section className="bg-stone-bg pt-28 pb-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 max-w-xl">
          <p className="text-xs uppercase tracking-widest text-brass mb-4">
            San Diego County's Homeowner-First Remodeling Partner
          </p>
          <h1 className="font-serif text-4xl md:text-[56px] md:leading-[1.1] text-charcoal mb-6">
            Premium home improvement, guided from first plan to final result.
          </h1>
          <p className="text-base leading-relaxed text-muted-foreground mb-8 max-w-lg">
            Prime Projects helps homeowners move forward with clarity on ADUs, kitchens, baths,
            roofing, outdoor living, pools, and whole-home upgrades — through organized planning,
            transparent communication, and quality-focused project guidance.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="#intake"
              className="bg-olive text-primary-foreground rounded-full px-8 py-3 text-sm font-medium hover:bg-olive-dark transition-all"
            >
              Schedule a Project Consultation
            </a>
            <a
              href="#services"
              className="border border-olive text-olive rounded-full px-8 py-3 text-sm font-medium hover:bg-olive hover:text-primary-foreground transition-all"
            >
              Explore Services
            </a>
          </div>
          <div className="flex flex-wrap gap-6 mb-6">
            {[
              "Homeowner-first project guidance",
              "Clear scopes and realistic options",
              "Quality-focused execution support",
            ].map((item) => (
              <span key={item} className="flex items-center gap-2 text-sm text-charcoal">
                <svg className="w-4 h-4 text-olive flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {item}
              </span>
            ))}
          </div>
          <p className="text-sm text-muted-foreground max-w-md">
            Serving homeowners seeking high-quality residential improvement projects across San Diego
            County, with focused support for remodels, roofing, backyard living, pool upgrades, and
            ADU planning.
          </p>
        </div>

        <div className="flex-1 relative h-[400px] md:h-[500px] w-full max-w-lg">
          <div className="absolute w-[70%] h-[65%] bg-taupe rounded-[40%_60%_50%_40%] top-[15%] left-[10%] opacity-40" />
          <img
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600"
            alt="Modern kitchen remodel"
            className="absolute top-0 right-0 w-[65%] h-[60%] object-cover rounded-2xl shadow-lg z-10"
          />
          <img
            src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400"
            alt="Luxury backyard pool"
            className="absolute bottom-0 left-0 w-[50%] h-[45%] object-cover rounded-2xl shadow-lg z-20"
          />
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=300"
            alt="Modern ADU exterior"
            className="absolute bottom-[20%] right-[5%] w-[35%] h-[35%] object-cover rounded-2xl shadow-lg z-30"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
