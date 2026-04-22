import { useState, useEffect } from "react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Locations", href: "#locations" },
  { label: "Projects", href: "#projects" },
  { label: "Planning", href: "#planning" },
  { label: "About", href: "#about" },
  { label: "FAQs", href: "#faq" },
  { label: "Contact", href: "#intake" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-card/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="w-3 h-3 bg-olive rounded-sm inline-block" />
          <span className="font-serif text-[22px] text-charcoal">Prime Projects</span>
        </a>

        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) =>
            link.type === "route" ? (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm text-charcoal hover:text-olive transition-colors"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-charcoal hover:text-olive transition-colors"
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        <div className="flex items-center gap-4">
          <a href="tel:6190000000" className="hidden md:block text-sm text-brass">
            (619) 000-0000
          </a>
          <a
            href="#intake"
            className="hidden sm:inline-flex bg-olive text-primary-foreground rounded-full px-5 py-2 text-sm font-medium hover:bg-olive-dark transition-all"
          >
            Schedule a Consultation
          </a>
          <button
            className="lg:hidden flex flex-col gap-1.5"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <span className="w-6 h-0.5 bg-charcoal" />
            <span className="w-6 h-0.5 bg-charcoal" />
            <span className="w-6 h-0.5 bg-charcoal" />
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
                onClick={() => setMobileOpen(false)}
                className="text-lg text-charcoal hover:text-olive transition-colors"
              >
                {link.label}
              </a>
            )
          )}
          <a href="tel:6190000000" className="text-brass text-sm mt-4">(619) 000-0000</a>
          <a
            href="#intake"
            onClick={() => setMobileOpen(false)}
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
