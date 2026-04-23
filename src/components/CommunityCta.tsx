import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CommunityCta = () => (
  <section className="px-4 md:px-6 py-16 md:py-24 bg-stone-alt">
    <div className="max-w-4xl mx-auto text-center">
      <p className="text-xs uppercase tracking-widest text-brass mb-4">Community</p>
      <h2 className="font-serif text-3xl md:text-5xl text-charcoal mb-5 leading-tight">
        Have a Home Story to Share?
      </h2>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
        Whether it's a renovation win, a contractor lesson learned, or a neighborhood project — we want to hear from San Diego homeowners.
      </p>
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
        <Button
          asChild
          size="lg"
          className="rounded-full px-7 bg-olive hover:bg-olive-dark text-primary-foreground"
        >
          <Link to="/blog/submit">Submit Your Story</Link>
        </Button>
        <Button
          asChild
          size="lg"
          variant="outline"
          className="rounded-full px-7 border-charcoal/30 text-charcoal hover:border-olive hover:text-olive bg-transparent"
        >
          <Link to="/blog?filter=community">Read Community Posts</Link>
        </Button>
      </div>
    </div>
  </section>
);

export default CommunityCta;
