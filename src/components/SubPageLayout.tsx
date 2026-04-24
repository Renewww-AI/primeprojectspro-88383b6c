import { ReactNode } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import FinalCta from "./FinalCta";
import watermarkMark from "@/assets/logo-pp-mark-header@2x.png";

type Props = {
  eyebrow?: string;
  title: string;
  intro?: string;
  heroImg?: string;
  heroAlt?: string;
  children: ReactNode;
};

const SubPageLayout = ({ eyebrow, title, intro, heroImg, heroAlt, children }: Props) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {heroImg ? (
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 md:px-6 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroImg}
              alt={heroAlt || title}
              className="w-full h-full object-cover"
              width={1600}
              height={900}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-near-black/70 via-near-black/55 to-near-black/75" />
          </div>
          {/* Screened-back logo watermark — large, partially cut off */}
          <img
            src={watermarkMark}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            className="pointer-events-none select-none absolute -right-24 md:-right-40 lg:-right-56 top-1/2 -translate-y-1/2 w-[520px] md:w-[720px] lg:w-[880px] h-auto opacity-[0.10]"
          />
          <div className="relative max-w-4xl mx-auto">
            <Link
              to="/"
              className="text-sm text-primary-foreground/80 hover:text-primary-foreground hover:underline mb-6 inline-block"
            >
              ← Back to home
            </Link>
            {eyebrow && (
              <p className="text-xs uppercase tracking-widest text-[hsl(36_45%_65%)] mb-4">{eyebrow}</p>
            )}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6 leading-tight drop-shadow-sm">
              {title}
            </h1>
            {intro && (
              <p className="text-lg text-primary-foreground/95 leading-relaxed max-w-2xl">
                {intro}
              </p>
            )}
          </div>
        </section>
      ) : (
        <section className="relative pt-32 pb-12 px-4 md:px-6 bg-card overflow-hidden">
          {/* Screened-back logo watermark on plain hero */}
          <img
            src={watermarkMark}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            className="pointer-events-none select-none absolute -right-20 md:-right-32 lg:-right-48 top-1/2 -translate-y-1/2 w-[420px] md:w-[600px] lg:w-[760px] h-auto opacity-[0.08]"
          />
          <div className="relative max-w-4xl mx-auto">
            <Link to="/" className="text-sm text-olive hover:underline mb-6 inline-block">
              ← Back to home
            </Link>
            {eyebrow && (
              <p className="text-xs uppercase tracking-widest text-brass mb-4">{eyebrow}</p>
            )}
            <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-6">{title}</h1>
            {intro && (
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">{intro}</p>
            )}
          </div>
        </section>
      )}

      <section className="py-16 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">{children}</div>
      </section>
      <FinalCta />
      <Footer />
    </div>
  );
};

export default SubPageLayout;
