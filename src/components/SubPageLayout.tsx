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
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 md:px-6 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroImg}
              alt={heroAlt || title}
              className="w-full h-full object-cover"
              width={1600}
              height={900}
            />
            {/* Layered scrims: solid base + left-anchored gradient + bottom darken
                guarantees white text reads on any image (light or dark) */}
            <div className="absolute inset-0 bg-near-black/55" />
            <div className="absolute inset-0 bg-gradient-to-r from-near-black/80 via-near-black/55 to-near-black/30" />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-near-black/80 to-transparent" />
          </div>
          <div className="relative max-w-4xl mx-auto [text-shadow:0_1px_18px_rgba(0,0,0,0.45)]">
            <Link
              to="/"
              className="text-sm text-white/90 hover:text-white hover:underline mb-6 inline-block"
            >
              ← Back to home
            </Link>
            {eyebrow && (
              <p className="text-xs uppercase tracking-widest text-[hsl(36_60%_78%)] mb-4">{eyebrow}</p>
            )}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
              {title}
            </h1>
            {intro && (
              <p className="text-lg text-white/95 leading-relaxed max-w-2xl">
                {intro}
              </p>
            )}
          </div>
        </section>
      ) : (
        <section className="pt-32 pb-12 px-4 md:px-6 bg-card">
          <div className="max-w-4xl mx-auto">
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
