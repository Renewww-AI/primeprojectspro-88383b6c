import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

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
            href="tel:6190000000"
            className="inline-flex items-center gap-2 mt-5 text-primary-foreground hover:text-brass transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="text-base font-medium">(619) 000-0000</span>
          </a>
          <div className="mt-4">
            <Link
              to="/#intake"
              className="inline-block bg-olive text-primary-foreground rounded-full px-6 py-2.5 text-sm font-medium hover:bg-olive-dark transition-all"
            >
              Schedule a Project Consultation
            </Link>
          </div>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-primary-foreground/40 mb-4">Services</h4>
          <div className="flex flex-col gap-2">
            {[
              ["Kitchen Remodel", "/services/kitchen-remodel"],
              ["Bathroom Remodel", "/services/bathroom-remodel"],
              ["Roofing", "/services/roofing"],
              ["Landscaping", "/services/landscaping"],
              ["Home Audio", "/services/home-audio"],
              ["General Contractor", "/services/general-contractor"],
            ].map(([label, href]) => (
              <Link key={label} to={href} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-primary-foreground/40 mb-4">Locations</h4>
          <div className="flex flex-col gap-2">
            {[
              ["Oceanside", "/services/oceanside"],
              ["Carlsbad", "/services/carlsbad"],
              ["Encinitas", "/services/encinitas"],
              ["Rancho Santa Fe", "/services/rancho-santa-fe"],
              ["San Marcos", "/services/san-marcos"],
              ["Vista", "/services/vista"],
            ].map(([label, href]) => (
              <Link key={label} to={href} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-primary-foreground/40 mb-4">Planning</h4>
          <div className="flex flex-col gap-2">
            {[
              ["The Homeowner's Guide", "/blog"],
              ["ADU Planning", "/planning/adu-cost-san-diego-county"],
              ["Remodel Timelines", "/planning/kitchen-remodel-timeline"],
              ["Roofing Guidance", "/planning/roof-replacement-vs-repair"],
              ["Outdoor Living Ideas", "/planning/outdoor-living-budget-guide"],
              ["Pool & Backyard", "/planning/pool-backyard-planning"],
            ].map(([label, href]) => (
              <Link key={label} to={href} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto border-t border-primary-foreground/10 mt-12 pt-6 flex flex-wrap justify-between gap-4">
        <span className="text-xs text-primary-foreground/30">© 2025 Prime Projects. All rights reserved.</span>
        <span className="text-xs text-primary-foreground/30">Serving San Diego County and surrounding communities</span>
        <span className="text-xs text-primary-foreground/30">
          CA Contractor License #[Placeholder] · <Link to="/privacy" className="hover:text-primary-foreground/60">Privacy Policy</Link> · <Link to="/terms" className="hover:text-primary-foreground/60">Terms</Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
