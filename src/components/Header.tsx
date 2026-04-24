import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logoMark from "@/assets/logo-pp-mark.png";

const navLinks = [
  { label: "Services", href: "/#services", type: "anchor" as const },
  { label: "Locations", href: "/#locations", type: "anchor" as const },
  { label: "Projects", href: "/#projects", type: "anchor" as const },
  { label: "Planning", href: "/#planning", type: "anchor" as const },
  { label: "Blog", href: "/blog", type: "route" as const },
  { label: "About", href: "/#about", type: "anchor" as const },
  { label: "FAQs", href: "/#faq", type: "anchor" as const },
  { label: "Contact", href: "/#intake", type: "anchor" as const },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Smart anchor handler — works from any page
  const handleAnchor = (e: React.MouseEvent, href: string) => {
    if (!href.startsWith("/#")) return;
    const hash = href.slice(2); // e.g. "intake"
    if (location.pathname === "/") {
      e.preventDefault();
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      else window.location.hash = hash;
    } else {
      e.preventDefault();
      navigate(`/#${hash}`);
    }
    setMobileOpen(false);
  };

  // After navigating to "/" with a hash, scroll to it
  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const id = location.hash.replace("#", "");
      // wait for paint
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, [location.pathname, location.hash]);

  // Light/dark adaptive text — when transparent over a hero image, use white for legibility
  const overImage = !scrolled;
  const wordmarkColor = overImage ? "text-primary-foreground drop-shadow-md" : "text-charcoal";
  const navLinkColor = overImage
    ? "text-primary-foreground/95 hover:text-primary-foreground drop-shadow-md"
    : "text-charcoal hover:text-olive";
  const phoneColor = overImage
    ? "text-primary-foreground/95 hover:text-primary-foreground drop-shadow-md"
    : "text-brass";
  const burgerColor = overImage ? "bg-primary-foreground" : "bg-charcoal";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-sm shadow-sm"
          : "bg-gradient-to-b from-near-black/45 via-near-black/20 to-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3" aria-label="PrimeProjects.Pro — home">
          <img
            src={logoMark}
            alt="Prime Projects"
            className={`h-9 w-auto md:h-10 transition-all ${
              overImage ? "drop-shadow-md" : ""
            }`}
            width={480}
            height={230}
          />
          <span className="flex items-baseline">
            <span className={`font-serif text-[22px] transition-colors ${wordmarkColor}`}>PrimeProjects</span>
            <span className="inline-block w-2 h-2 bg-olive rounded-sm mx-1" />
            <span className={`font-serif text-[22px] transition-colors ${wordmarkColor}`}>Pro</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) =>
            link.type === "route" ? (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm transition-colors ${navLinkColor}`}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleAnchor(e, link.href)}
                className={`text-sm transition-colors ${navLinkColor}`}
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        <div className="flex items-center gap-4">
          <a href="tel:6190000000" className={`hidden md:block text-sm transition-colors ${phoneColor}`}>
            (619) 000-0000
          </a>
          <a
            href="/#intake"
            onClick={(e) => handleAnchor(e, "/#intake")}
            className="hidden sm:inline-flex bg-olive text-primary-foreground rounded-full px-5 py-2 text-sm font-medium hover:bg-olive-dark transition-all shadow-sm"
          >
            Schedule a Consultation
          </a>
          <button
            className="lg:hidden flex flex-col gap-1.5"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <span className={`w-6 h-0.5 transition-colors ${burgerColor}`} />
            <span className={`w-6 h-0.5 transition-colors ${burgerColor}`} />
            <span className={`w-6 h-0.5 transition-colors ${burgerColor}`} />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-card flex flex-col items-center justify-center gap-6">
          <button
            className="absolute top-5 right-6 text-3xl text-charcoal"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
          {navLinks.map((link) =>
            link.type === "route" ? (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-lg text-charcoal hover:text-olive transition-colors"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleAnchor(e, link.href)}
                className="text-lg text-charcoal hover:text-olive transition-colors"
              >
                {link.label}
              </a>
            )
          )}
          <a href="tel:6190000000" className="text-brass text-sm mt-4">(619) 000-0000</a>
          <a
            href="/#intake"
            onClick={(e) => handleAnchor(e, "/#intake")}
            className="bg-olive text-primary-foreground rounded-full px-8 py-3 text-sm font-medium hover:bg-olive-dark transition-all"
          >
            Schedule a Consultation
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
