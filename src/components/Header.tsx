import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logoMark from "@/assets/logo-pp-mark-header@1x.png";
import logoMark2x from "@/assets/logo-pp-mark-header@2x.png";

const LogoFallback = ({ className }: { className?: string }) => (
  <span
    className={`inline-flex items-center justify-center rounded-md bg-near-black text-primary-foreground font-serif text-sm font-semibold shrink-0 ${className ?? ""}`}
    style={{ aspectRatio: "1 / 1" }}
    aria-label="Prime Projects"
  >
    ​
  </span>
);

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
  const [logoFailed, setLogoFailed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [mobileOpen]);

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 safe-pl safe-pr ${
        scrolled
          ? "bg-card/95 backdrop-blur-sm shadow-sm"
          : "bg-gradient-to-b from-near-black/45 via-near-black/20 to-transparent"
      }`}
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 grid grid-cols-[auto_1fr_auto] items-center gap-3 sm:gap-6">
        {/* LEFT — logo + wordmark */}
        <Link
          to="/"
          className="flex items-center gap-2 sm:gap-3 min-w-0 shrink-0"
          aria-label="Prime Projects — home"
        >
          {logoFailed ? (
            <LogoFallback className={`h-10 sm:h-10 md:h-11 ${overImage ? "drop-shadow-md" : ""}`} />
          ) : (
            <img
              src={logoMark}
              srcSet={`${logoMark} 1x, ${logoMark2x} 2x`}
              alt="Prime Projects"
              width={167}
              height={96}
              decoding="async"
              fetchPriority="high"
              onError={() => setLogoFailed(true)}
              className={`h-10 sm:h-10 md:h-11 w-auto shrink-0 transition-all ${
                overImage ? "drop-shadow-md" : ""
              }`}
            />
          )}
          <span className="flex items-baseline whitespace-nowrap leading-none">
            <span className={`font-serif text-[14px] sm:text-[16px] md:text-[20px] transition-colors ${wordmarkColor}`}>
              PrimeProjects
            </span>
            <span className="inline-block w-1 h-1 md:w-1.5 md:h-1.5 bg-olive rounded-sm mx-0.5 md:mx-1" />
            <span className={`font-serif text-[14px] sm:text-[16px] md:text-[20px] transition-colors ${wordmarkColor}`}>
              Pro
            </span>
          </span>
        </Link>

        {/* CENTER — nav links, evenly spaced, never interrupted */}
        <nav className="hidden lg:flex items-center justify-center gap-6 xl:gap-7">
          {navLinks.map((link) =>
            link.type === "route" ? (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm whitespace-nowrap transition-colors ${navLinkColor}`}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleAnchor(e, link.href)}
                className={`text-sm whitespace-nowrap transition-colors ${navLinkColor}`}
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        {/* RIGHT — phone stacked above CTA, plus mobile burger */}
        <div className="flex items-center gap-3 justify-end">
          <div className="hidden md:flex flex-col items-end gap-1.5 leading-none">
            <a
              href="tel:6190000000"
              className={`text-xs lg:text-sm whitespace-nowrap transition-colors ${phoneColor}`}
            >
              (619) 000-0000
            </a>
            <a
              href="/#intake"
              onClick={(e) => handleAnchor(e, "/#intake")}
              className="inline-flex bg-olive text-primary-foreground rounded-full px-5 py-2 text-sm font-medium hover:bg-olive-dark transition-all shadow-sm whitespace-nowrap"
            >
              Schedule a Consultation
            </a>
          </div>

          {/* Mobile-only CTA (no room to stack) */}
          <a
            href="/#intake"
            onClick={(e) => handleAnchor(e, "/#intake")}
            className="md:hidden inline-flex items-center bg-olive text-primary-foreground rounded-full px-4 py-2.5 text-xs font-medium hover:bg-olive-dark transition-all shadow-sm whitespace-nowrap min-h-[40px]"
          >
            Schedule
          </a>

          <button
            className="lg:hidden flex flex-col gap-1.5 p-2 -mr-2 min-h-[44px] min-w-[44px] items-center justify-center"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <span className={`w-6 h-0.5 transition-colors ${burgerColor}`} />
            <span className={`w-6 h-0.5 transition-colors ${burgerColor}`} />
            <span className={`w-6 h-0.5 transition-colors ${burgerColor}`} />
          </button>
        </div>
      </div>

      {mobileOpen && createPortal(
        <div
          className="fixed inset-0 z-[100] bg-card flex flex-col items-center justify-center gap-5 overflow-y-auto overscroll-contain"
          style={{
            height: "100dvh",
            width: "100vw",
            paddingTop: "calc(env(safe-area-inset-top) + 1.25rem)",
            paddingBottom: "calc(env(safe-area-inset-bottom) + 1.25rem)",
            paddingLeft: "env(safe-area-inset-left)",
            paddingRight: "env(safe-area-inset-right)",
          }}
        >
          <button
            className="absolute right-4 text-3xl text-charcoal w-12 h-12 flex items-center justify-center"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            style={{ top: "calc(env(safe-area-inset-top) + 0.5rem)" }}
          >
            ✕
          </button>
          {navLinks.map((link) =>
            link.type === "route" ? (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-lg text-charcoal hover:text-olive transition-colors py-2 px-4 min-h-[44px] flex items-center"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleAnchor(e, link.href)}
                className="text-lg text-charcoal hover:text-olive transition-colors py-2 px-4 min-h-[44px] flex items-center"
              >
                {link.label}
              </a>
            )
          )}
          <a href="tel:6190000000" className="text-brass text-base mt-4 py-2 px-4 min-h-[44px] flex items-center">(619) 000-0000</a>
          <a
            href="/#intake"
            onClick={(e) => handleAnchor(e, "/#intake")}
            className="bg-olive text-primary-foreground rounded-full px-8 py-3.5 text-sm font-medium hover:bg-olive-dark transition-all min-h-[48px] flex items-center"
          >
            Schedule a Consultation
          </a>
        </div>,
        document.body
      )}
    </header>
  );
};

export default Header;
