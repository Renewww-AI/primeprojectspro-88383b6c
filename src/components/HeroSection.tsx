import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Star, Check, MapPin } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import heroOriginal from "@/assets/hero-outdoor.jpg";
import logoMark from "@/assets/logo-pp-mark-4k.png";

const slides = [
  {
    src: hero3,
    alt: "Premium outdoor living space with infinity pool and fire pit at dusk",
    eyebrow: "Featured Project",
    label: "Outdoor living & pool upgrade — North County",
  },
  {
    src: hero2,
    alt: "Modern kitchen remodel with white oak cabinetry and marble waterfall island",
    eyebrow: "Featured Project",
    label: "Full kitchen remodel — Carlsbad",
  },
  {
    src: hero4,
    alt: "Luxury bathroom remodel with freestanding tub and brass fixtures",
    eyebrow: "Featured Project",
    label: "Primary bath remodel — Encinitas",
  },
  {
    src: hero1,
    alt: "Modern San Diego home exterior at golden hour",
    eyebrow: "Featured Project",
    label: "Whole-home exterior refresh — Rancho Santa Fe",
  },
  {
    src: heroOriginal,
    alt: "Outdoor living space with fire pit and pool",
    eyebrow: "Featured Project",
    label: "Backyard transformation — San Diego County",
  },
];

const HeroSection = () => {
  const [active, setActive] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, 5500);
    return () => clearInterval(id);
  }, []);

  const goIntake = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === "/") {
      document.getElementById("intake")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/#intake");
    }
  };

  return (
    <section className="relative bg-background pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-40 md:pb-32 px-4 sm:px-6 overflow-hidden">
      {/* Subtle screened-back logo watermark — large, partially cut off */}
      <img
        src={logoMark}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        width={1024}
        height={579}
        style={{ aspectRatio: "1024 / 579" }}
        className="pointer-events-none select-none absolute -left-32 md:-left-48 lg:-left-64 top-1/2 -translate-y-1/2 w-[480px] sm:w-[640px] md:w-[820px] lg:w-[960px] xl:w-[1200px] 2xl:w-[1500px] h-auto opacity-[0.10] sm:opacity-[0.14] mix-blend-multiply"
      />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Right column - rotating image carousel (mobile: appears first) */}
        <div className="lg:col-span-5 lg:order-2 relative">
          <div className="relative rounded-3xl lg:rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/5] bg-muted max-w-md mx-auto lg:max-w-none">
            {slides.map((slide, i) => (
              <img
                key={slide.src}
                src={slide.src}
                alt={slide.alt}
                width={800}
                height={1000}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                  i === active ? "opacity-100" : "opacity-0"
                }`}
                loading={i === 0 ? "eager" : "lazy"}
                fetchPriority={i === 0 ? "high" : "low"}
                decoding="async"
              />
            ))}

            {/* Top + bottom gradients to keep overlay text legible across all images */}
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-near-black/60 to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-near-black/85 via-near-black/40 to-transparent pointer-events-none" />

            {/* 5-star review badge */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-card/95 backdrop-blur-sm rounded-full px-3 py-2 sm:px-4 sm:py-2.5 shadow-lg flex items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-[hsl(var(--star))] text-[hsl(var(--star))]"
                  />
                ))}
              </div>
              <span className="text-xs font-semibold text-charcoal">5.0 Rated</span>
            </div>

            {/* Floating bottom badge — rotates with active slide */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-card/95 backdrop-blur-sm rounded-2xl px-4 py-3 sm:px-5 sm:py-4 shadow-lg">
              <p className="text-[10px] sm:text-xs uppercase tracking-widest text-brass mb-1">
                {slides[active].eyebrow}
              </p>
              <p className="text-xs sm:text-sm font-medium text-charcoal">{slides[active].label}</p>
            </div>

            {/* Dots */}
            <div className="absolute bottom-[6.5rem] sm:bottom-[7.5rem] left-1/2 -translate-x-1/2 flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Show slide ${i + 1}`}
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all min-h-[24px] flex items-center ${
                    i === active ? "w-6 bg-primary-foreground" : "w-1.5 bg-primary-foreground/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Left column */}
        <div className="lg:col-span-7 lg:order-1">
          <div className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-3 py-1.5 sm:px-4 mb-6 sm:mb-8 shadow-sm max-w-full">
            <MapPin className="w-3.5 h-3.5 text-olive shrink-0" />
            <span className="text-[11px] sm:text-xs font-medium text-charcoal tracking-wide truncate">
              San Diego County — Serving Local Homeowners
            </span>
          </div>

          <h1 className="font-serif text-[2.25rem] leading-[1.08] sm:text-5xl md:text-6xl lg:text-7xl sm:leading-[1.05] text-near-black mb-5 sm:mb-6 tracking-tight">
            Premium home improvement, guided from first plan to final result.
          </h1>

          <p className="font-serif italic text-lg sm:text-xl md:text-2xl text-brass mb-5 sm:mb-6 tracking-wide">
            Planned Right. Managed Better.
          </p>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 sm:mb-10 max-w-xl">
            Prime Projects helps homeowners move forward with clarity on ADUs, kitchens, baths,
            roofing, outdoor living, pools, and whole-home upgrades.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-8 sm:mb-10">
            <a
              href="/#intake"
              onClick={goIntake}
              className="bg-olive text-primary-foreground rounded-full px-6 py-3.5 sm:px-7 text-sm font-medium hover:bg-olive-dark transition-all shadow-sm text-center min-h-[48px] flex items-center justify-center"
            >
              Schedule a Project Consultation
            </a>
            <a
              href="/#services"
              onClick={(e) => {
                e.preventDefault();
                if (location.pathname === "/") {
                  document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
                } else {
                  navigate("/#services");
                }
              }}
              className="border border-olive/30 text-olive rounded-full px-6 py-3.5 sm:px-7 text-sm font-medium hover:bg-olive hover:text-primary-foreground hover:border-olive transition-all text-center min-h-[48px] flex items-center justify-center"
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

          <p className="mt-6 text-[11px] sm:text-xs uppercase tracking-widest text-muted-foreground">
            Licensed, bonded &amp; insured · Serving San Diego North County · Free consultations
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
