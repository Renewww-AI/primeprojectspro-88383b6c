const Footer = () => {
  return (
    <footer className="bg-near-black py-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2">
          <span className="font-serif text-2xl text-primary-foreground">Prime Projects</span>
          <p className="text-sm text-primary-foreground/60 mt-3 max-w-xs leading-relaxed">
            Prime Projects is a homeowner-first residential improvement brand focused on clear
            planning, premium service, and quality-driven project outcomes.
          </p>
          <a
            href="#intake"
            className="inline-block mt-5 bg-olive text-primary-foreground rounded-full px-6 py-2.5 text-sm font-medium hover:bg-olive-dark transition-all"
          >
            Schedule a Project Consultation
          </a>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-primary-foreground/40 mb-4">Services</h4>
          <div className="flex flex-col gap-2">
            {[
              ["ADUs", "/services/adu/"],
              ["Kitchen Remodels", "/services/kitchen-remodel/"],
              ["Bathroom Remodels", "/services/bathroom-remodel/"],
              ["Roofing", "/services/roofing/"],
              ["Outdoor Living", "/services/outdoor-living/"],
              ["Pool & Backyard", "/services/pool-backyard-projects/"],
            ].map(([label, href]) => (
              <a key={label} href={href} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                {label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-primary-foreground/40 mb-4">Locations</h4>
          <div className="flex flex-col gap-2">
            {[
              ["San Diego County", "/locations/san-diego-county/"],
              ["Oceanside", "/locations/oceanside/"],
              ["Carlsbad", "/locations/carlsbad/"],
              ["Encinitas", "/locations/encinitas/"],
              ["San Marcos", "/locations/san-marcos/"],
              ["Vista", "/locations/vista/"],
            ].map(([label, href]) => (
              <a key={label} href={href} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                {label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-primary-foreground/40 mb-4">Planning</h4>
          <div className="flex flex-col gap-2">
            {[
              ["ADU Planning", "/planning/adu-cost-san-diego-county/"],
              ["Remodel Timelines", "/planning/kitchen-remodel-timeline/"],
              ["Roofing Guidance", "/planning/roof-replacement-vs-repair/"],
              ["Outdoor Living Ideas", "/planning/outdoor-living-budget-guide/"],
              ["Budgeting Resources", "/planning/"],
            ].map(([label, href]) => (
              <a key={label} href={href} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto border-t border-primary-foreground/10 mt-12 pt-6 flex flex-wrap justify-between gap-4">
        <span className="text-xs text-primary-foreground/30">© 2025 Prime Projects. All rights reserved.</span>
        <span className="text-xs text-primary-foreground/30">Serving San Diego County and surrounding communities</span>
        <span className="text-xs text-primary-foreground/30">
          CA Contractor License #[Placeholder] · <a href="/privacy" className="hover:text-primary-foreground/60">Privacy Policy</a> · <a href="/terms" className="hover:text-primary-foreground/60">Terms</a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
