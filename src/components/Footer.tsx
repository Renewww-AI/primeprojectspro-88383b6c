import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import logoMark from "@/assets/logo-pp-mark-header@2x.png";

type IconProps = { className?: string };

const FacebookIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M13.5 21v-7.5h2.52l.38-2.93H13.5V8.7c0-.85.24-1.43 1.45-1.43h1.55V4.66c-.27-.04-1.19-.11-2.26-.11-2.24 0-3.77 1.37-3.77 3.88v2.16H8v2.93h2.47V21h3.03Z"/>
  </svg>
);

const InstagramIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const GoogleIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M21.6 12.23c0-.65-.06-1.27-.17-1.86H12v3.52h5.39a4.6 4.6 0 0 1-2 3.02v2.5h3.23c1.89-1.74 2.98-4.3 2.98-7.18Z"/>
    <path d="M12 22c2.7 0 4.96-.9 6.62-2.43l-3.23-2.5c-.9.6-2.04.96-3.39.96-2.6 0-4.81-1.76-5.6-4.13H3.07v2.59A10 10 0 0 0 12 22Z"/>
    <path d="M6.4 13.9a6 6 0 0 1 0-3.8V7.5H3.07a10 10 0 0 0 0 9l3.33-2.6Z"/>
    <path d="M12 6.07c1.47 0 2.78.5 3.82 1.5l2.86-2.86A10 10 0 0 0 3.07 7.5l3.33 2.6c.79-2.37 3-4.13 5.6-4.13Z"/>
  </svg>
);

const services: [string, string][] = [
  ["Kitchen Remodel", "/services/kitchen-remodel"],
  ["Bathroom Remodel", "/services/bathroom-remodel"],
  ["Roofing", "/services/roofing"],
  ["Landscaping", "/services/landscaping"],
  ["Home Audio", "/services/home-audio"],
  ["ADU", "/services/additions-adus"],
  ["General Contractor", "/services/general-contractor"],
  ["Room Additions", "/services/additions-adus"],
];

const locations: [string, string][] = [
  ["Oceanside", "/locations/oceanside"],
  ["Carlsbad", "/locations/carlsbad"],
  ["Encinitas", "/locations/encinitas"],
  ["Rancho Santa Fe", "/locations/rancho-santa-fe"],
  ["San Marcos", "/locations/san-marcos"],
  ["Vista", "/locations/vista"],
  ["San Diego", "/locations/san-diego"],
  ["Del Mar", "/locations/del-mar"],
];

const about: [string, string][] = [
  ["Schedule a Consultation", "/#intake"],
  ["About Us", "/#about"],
  ["FAQ", "/#faq"],
  ["Privacy Policy", "/privacy-policy"],
  ["Terms", "/terms"],
];

const social: { label: string; href: string; Icon: React.ComponentType<{ className?: string }> }[] = [
  { label: "Facebook", href: "https://www.facebook.com/", Icon: FacebookIcon },
  { label: "Google Business Profile", href: "https://www.google.com/business/", Icon: GoogleIcon },
  { label: "Instagram", href: "https://www.instagram.com/", Icon: InstagramIcon },
];

const ColHeader = ({ children }: { children: React.ReactNode }) => (
  <h4 className="text-xs uppercase tracking-widest text-primary-foreground/40 mb-4">
    {children}
  </h4>
);

const linkClass =
  "text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors";

const Footer = () => {
  return (
    <footer className="relative bg-near-black py-12 md:py-16 px-5 md:px-6 overflow-hidden opacity-90 safe-pb">
      {/* Subtle screened-back logo watermark — large, bleeding off the right edge */}
      <img
        src={logoMark}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="pointer-events-none select-none absolute -right-32 md:-right-48 lg:-right-64 top-1/2 -translate-y-1/2 w-[640px] md:w-[820px] lg:w-[960px] h-auto opacity-[0.08]"
      />

      <div className="relative max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-6 gap-x-6 gap-y-10">
        {/* Column 1 — Company info (spans 2 on lg) */}
        <div className="col-span-2 lg:col-span-2">
          <span className="inline-flex items-baseline whitespace-nowrap leading-none">
            <span className="font-serif text-[20px] md:text-[22px] text-primary-foreground">
              PrimeProjects
            </span>
            <span className="inline-block w-2 h-2 bg-olive rounded-sm mx-1" />
            <span className="font-serif text-[20px] md:text-[22px] text-primary-foreground">
              Pro
            </span>
          </span>
          <p className="text-sm text-primary-foreground/60 mt-3 max-w-xs leading-relaxed">
            Prime Projects is a homeowner-first residential improvement brand focused on clear
            planning, premium service, and quality-driven project outcomes.
          </p>
          <a
            href="tel:7605255058"
            className="inline-flex items-center gap-2 mt-5 text-primary-foreground hover:text-brass transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="text-base font-medium">(760) 525-5058</span>
          </a>
          <a
            href="mailto:consult@primeprojects.pro"
            className="block mt-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
          >
            consult@primeprojects.pro
          </a>
          <div className="mt-4">
            <a
              href="/#intake"
              className="inline-block bg-olive text-primary-foreground rounded-full px-6 py-2.5 text-sm font-medium hover:bg-olive-dark transition-all"
            >
              Schedule a Project Consultation
            </a>
          </div>
        </div>

        {/* Column 2 — Services */}
        <div>
          <ColHeader>Services</ColHeader>
          <div className="flex flex-col gap-2">
            {services.map(([label, href]) => (
              <Link key={label} to={href} className={linkClass}>
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Column 3 — Locations */}
        <div>
          <ColHeader>Locations</ColHeader>
          <div className="flex flex-col gap-2">
            {locations.map(([label, href]) => (
              <Link key={label} to={href} className={linkClass}>
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Column 4 — About */}
        <div>
          <ColHeader>About</ColHeader>
          <div className="flex flex-col gap-2">
            {about.map(([label, href]) =>
              href.startsWith("/#") ? (
                <a key={label} href={href} className={linkClass}>
                  {label}
                </a>
              ) : (
                <Link key={label} to={href} className={linkClass}>
                  {label}
                </Link>
              )
            )}
          </div>
        </div>

        {/* Column 5 — Follow Us */}
        <div>
          <ColHeader>Follow Us</ColHeader>
          <div className="flex flex-col gap-3">
            {social.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <Icon className="w-4 h-4" />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Divider + bottom bar */}
      <div className="relative max-w-6xl mx-auto border-t border-primary-foreground/10 mt-12 pt-6 flex flex-wrap justify-between gap-4">
        <span className="text-xs text-primary-foreground/30">
          © 2026 Prime Projects. All rights reserved.
        </span>
        <span className="text-xs text-primary-foreground/30">
          Serving San Diego County and surrounding communities
        </span>
        <span className="text-xs text-primary-foreground/30">
          <Link to="/privacy-policy" className="hover:text-primary-foreground/60">
            Privacy Policy
          </Link>{" "}
          ·{" "}
          <Link to="/terms" className="hover:text-primary-foreground/60">
            Terms
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
