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
  children: ReactNode;
};

const SubPageLayout = ({ eyebrow, title, intro, heroImg, children }: Props) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="pt-32 pb-12 px-4 md:px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="text-sm text-olive hover:underline mb-6 inline-block">
            ← Back to home
          </Link>
          {eyebrow && (
            <p className="text-xs uppercase tracking-widest text-brass mb-4">{eyebrow}</p>
          )}
          <h1 className="text-4xl md:text-5xl font-medium text-charcoal mb-6">{title}</h1>
          {intro && (
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">{intro}</p>
          )}
          {heroImg && (
            <img
              src={heroImg}
              alt={title}
              className="w-full h-[420px] object-cover rounded-2xl mt-10"
              loading="lazy"
            />
          )}
        </div>
      </section>
      <section className="py-16 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">{children}</div>
      </section>
      <FinalCta />
      <Footer />
    </div>
  );
};

export default SubPageLayout;
