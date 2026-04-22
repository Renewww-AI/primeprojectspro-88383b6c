import { Star, Check, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-outdoor.jpg";

const HeroSection = () => {
  return (
    <section className="bg-background pt-32 pb-24 md:pt-40 md:pb-32 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left column */}
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-4 py-1.5 mb-8 shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-olive" />
            <span className="text-xs font-medium text-charcoal tracking-wide">
              San Diego County — Serving Local Homeowners
            </span>
          </div>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-near-black mb-8 tracking-tight">
            Premium home improvement, guided from first plan to final result.
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl">
            Prime Projects helps homeowners move forward with clarity on ADUs, kitchens, baths,
            roofing, outdoor living, pools, and whole-home upgrades.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            <a
              href="#intake"
              className="bg-olive text-primary-foreground rounded-full px-7 py-3.5 text-sm font-medium hover:bg-olive-dark transition-all shadow-sm"
            >
              Schedule a Project Consultation
            </a>
            <a
              href="#services"
              className="border border-olive/30 text-olive rounded-full px-7 py-3.5 text-sm font-medium hover:bg-olive hover:text-primary-foreground hover:border-olive transition-all"
            >
              Explore Services
            </a>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-x-8 gap-y-3">
            {[
              "Homeowner-first project guidance",
              "Clear scopes and realistic options",
              "Quality-focused execution support",
            ].map((item) => (
              <span key={item} className="flex items-center gap-2 text-sm text-charcoal">
                <span className="w-5 h-5 rounded-full bg-olive/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-olive" strokeWidth={3} />
                </span>
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Right column - image card */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/5] bg-muted">
            <img
              src={heroImage}
              alt="Premium outdoor living space with fire pit, pool, and covered patio at dusk"
              className="w-full h-full object-cover"
            />

            {/* 5-star review badge */}
            <div className="absolute top-6 left-6 bg-card/95 backdrop-blur-sm rounded-full px-4 py-2.5 shadow-lg flex items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 fill-[hsl(var(--star))] text-[hsl(var(--star))]"
                  />
                ))}
              </div>
              <span className="text-xs font-semibold text-charcoal">5.0 Rated</span>
            </div>

            {/* Floating bottom badge */}
            <div className="absolute bottom-6 left-6 right-6 bg-card/95 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-lg">
              <p className="text-xs uppercase tracking-widest text-brass mb-1">Featured Project</p>
              <p className="text-sm font-medium text-charcoal">
                Outdoor living & pool upgrade — North County
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
