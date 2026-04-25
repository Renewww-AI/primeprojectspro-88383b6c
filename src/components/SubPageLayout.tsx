import { ReactNode } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import FinalCta from "./FinalCta";


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
        <section className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-40 md:pb-28 px-4 md:px-6 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroImg}
              alt={heroAlt || title}
              className="w-full h-full object-cover"
              width={1600}
              height={900}
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-near-black/70 via-near-black/55 to-near-black/75" />
          </div>
          <div className="relative max-w-4xl mx-auto">
            <Link
              to="/"
              className="text-sm text-primary-foreground/80 hover:text-primary-foreground hover:underline mb-5 sm:mb-6 inline-block py-1"
            >
              ← Back to home
            </Link>
            {eyebrow && (
              <p className="text-[11px] sm:text-xs uppercase tracking-widest text-[hsl(36_45%_65%)] mb-3 sm:mb-4">{eyebrow}</p>
            )}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-5 sm:mb-6 leading-tight drop-shadow-sm">
              {title}
            </h1>
            {intro && (
              <p className="text-base sm:text-lg text-primary-foreground/95 leading-relaxed max-w-2xl">
                {intro}
              </p>
            )}
          </div>
        </section>
      ) : (
        <section className="relative pt-28 sm:pt-32 pb-10 sm:pb-12 px-4 md:px-6 bg-card overflow-hidden">
          <div className="relative max-w-4xl mx-auto">
            <Link to="/" className="text-sm text-olive hover:underline mb-5 sm:mb-6 inline-block py-1">
              ← Back to home
            </Link>
            {eyebrow && (
              <p className="text-[11px] sm:text-xs uppercase tracking-widest text-brass mb-3 sm:mb-4">{eyebrow}</p>
            )}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal mb-5 sm:mb-6">{title}</h1>
            {intro && (
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">{intro}</p>
            )}
          </div>
        </section>
      )}

      <section className="py-12 sm:py-16 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">{children}</div>
      </section>
      <FinalCta />
      <Footer />
    </div>
  );
};

export default SubPageLayout;
