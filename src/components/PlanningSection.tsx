import { Link } from "react-router-dom";
import { articles } from "@/data/content";

const PlanningSection = () => {
  return (
    <section id="planning" className="bg-stone-bg py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-xs uppercase tracking-widest text-brass mb-4">Project planning resources</p>
        <h2 className="text-3xl md:text-4xl font-medium text-charcoal mb-4">
          Helpful guidance before you commit to the project
        </h2>
        <p className="text-base text-muted-foreground max-w-2xl mx-auto mb-12">
          Explore planning articles built for homeowners comparing options, timing, scope, and next
          steps for major residential improvements.
        </p>
        <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x">
          {articles.map((a) => (
            <Link
              key={a.slug}
              to={`/planning/${a.slug}`}
              className="min-w-[280px] md:min-w-0 bg-card rounded-2xl overflow-hidden border border-border hover:shadow-md hover:-translate-y-1 transition-all text-left snap-start"
            >
              <img src={a.img} alt={a.title} className="w-full h-40 object-cover" loading="lazy" />
              <div className="p-5">
                <p className="text-xs uppercase tracking-widest text-brass mb-2">{a.cat}</p>
                <h3 className="text-base font-medium text-charcoal">{a.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlanningSection;
