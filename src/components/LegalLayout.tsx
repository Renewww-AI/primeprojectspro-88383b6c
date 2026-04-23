import { useEffect, useState, ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowUp, ChevronDown } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export type TocItem = { id: string; label: string };

interface LegalLayoutProps {
  eyebrow: string;
  title: string;
  intro: string;
  lastUpdated: string;
  toc: TocItem[];
  children: ReactNode;
  otherLinkLabel: string;
  otherLinkHref: string;
}

const LegalLayout = ({
  eyebrow,
  title,
  intro,
  lastUpdated,
  toc,
  children,
  otherLinkLabel,
  otherLinkHref,
}: LegalLayoutProps) => {
  const [activeId, setActiveId] = useState<string>(toc[0]?.id ?? "");
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 300);
      let current = toc[0]?.id ?? "";
      for (const item of toc) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top <= 140) current = item.id;
      }
      setActiveId(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [toc]);

  const jumpTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 100;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-12 md:pt-40 md:pb-16 px-4 md:px-6 bg-stone-alt border-b border-border">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-brass mb-4">{eyebrow}</p>
          <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-5 leading-tight">{title}</h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">{intro}</p>
          <p className="text-xs uppercase tracking-widest text-muted-foreground mt-6">
            Last Updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Mobile TOC */}
      <div className="lg:hidden px-4 md:px-6 py-6 border-b border-border bg-card sticky top-16 z-30">
        <div className="max-w-4xl mx-auto relative">
          <label htmlFor="toc-jump" className="sr-only">Jump to section</label>
          <div className="relative">
            <select
              id="toc-jump"
              value={activeId}
              onChange={(e) => jumpTo(e.target.value)}
              className="w-full appearance-none bg-card border border-border rounded-full px-5 py-3 pr-10 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-olive/30"
            >
              {toc.map((t) => (
                <option key={t.id} value={t.id}>{t.label}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
          </div>
        </div>
      </div>

      <section className="px-4 md:px-6 py-12 md:py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-12">
          {/* Desktop TOC */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">On this page</p>
              <nav className="flex flex-col gap-1 border-l border-border">
                {toc.map((item) => {
                  const active = activeId === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => jumpTo(item.id)}
                      className={`text-left text-sm pl-4 py-2 -ml-px border-l-2 transition-all ${
                        active
                          ? "border-olive text-olive font-medium"
                          : "border-transparent text-muted-foreground hover:text-charcoal"
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>

          <article className="prose-content max-w-none text-charcoal leading-[1.75] text-[17px]">
            {children}

            <div className="mt-16 pt-8 border-t border-border flex flex-wrap items-center justify-between gap-4 text-sm">
              <Link to="/" className="text-olive hover:underline">← Back to Home</Link>
              <span className="text-muted-foreground">
                <Link to={otherLinkHref} className="hover:text-charcoal transition-colors">
                  {otherLinkLabel}
                </Link>
              </span>
            </div>
          </article>
        </div>
      </section>

      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-8 right-8 z-40 bg-olive text-primary-foreground rounded-full p-3 shadow-lg hover:bg-olive-dark transition-all"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      <Footer />
    </div>
  );
};

export default LegalLayout;
