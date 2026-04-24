import { Link } from "react-router-dom";
import { Phone, Globe } from "lucide-react";
import { FaFacebookF, FaInstagram, FaGoogle } from "react-icons/fa";

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
    <footer className="bg-near-black py-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
        {/* Column 1 — Company info (spans 2 on lg) */}
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
      <div className="max-w-6xl mx-auto border-t border-primary-foreground/10 mt-12 pt-6 flex flex-wrap justify-between gap-4">
        <span className="text-xs text-primary-foreground/30">
          © 2025 Prime Projects. All rights reserved.
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
