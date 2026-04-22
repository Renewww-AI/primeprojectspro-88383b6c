import { useEffect } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import SubPageLayout from "@/components/SubPageLayout";
import { services, locations } from "@/data/content";

const ServicePage = () => {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);
  const location = !service ? locations.find((l) => l.slug === slug) : null;

  // SEO: set document title and meta description
  useEffect(() => {
    if (service) {
      document.title = `${service.title} in San Diego County | Prime Projects`;
      setMeta(
        `${service.title} services across San Diego County. ${service.body}`
      );
    } else if (location) {
      document.title = `Home Improvement in ${location.name} | Prime Projects`;
      setMeta(
        `Premium home improvement services in ${location.name}, CA. Kitchens, bathrooms, ADUs, roofing, landscaping, and whole-home remodels.`
      );
    }
  }, [service, location]);

  if (!service && !location) return <Navigate to="/" replace />;

  // Render city-as-service page
  if (location) {
    return (
      <SubPageLayout
        eyebrow="Service Area"
        title={`Home Improvement in ${location.name}`}
        intro={location.intro}
        heroImg={location.img}
      >
        <div className="grid md:grid-cols-2 gap-10 mb-12">
          <div>
            <h2 className="text-2xl font-medium text-charcoal mb-4">
              Why homeowners in {location.name} choose Prime Projects
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">{location.whyLocal}</p>
            <ul className="space-y-3 mt-4">
              {[
                "Local familiarity with permits and HOA requirements",
                "Senior project oversight on every job",
                "Clear scopes, realistic timelines, no surprises",
                "Quality-driven trades and detail-level finishing",
              ].map((h) => (
                <li key={h} className="flex gap-3 text-muted-foreground">
                  <span className="text-olive">✓</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-medium text-charcoal mb-4">
              Services offered in {location.name}
            </h2>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="flex gap-3 text-muted-foreground hover:text-olive transition-colors"
                  >
                    <span className="text-brass">→</span>
                    <span>{s.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-card rounded-2xl p-8 md:p-10 border border-border text-center">
          <h3 className="text-2xl font-medium text-charcoal mb-3">
            Free consultation for {location.name} homeowners
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Talk through goals, scope, and realistic budget before any commitment.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/#intake"
              className="bg-olive text-primary-foreground rounded-full px-6 py-3 text-sm font-medium hover:bg-olive-dark transition-all"
            >
              Schedule a Free Consultation
            </Link>
            <a
              href="tel:6190000000"
              className="border border-olive text-olive rounded-full px-6 py-3 text-sm font-medium hover:bg-olive hover:text-primary-foreground transition-all"
            >
              Call (619) 000-0000
            </a>
          </div>
        </div>
      </SubPageLayout>
    );
  }

  // Render normal service page
  return (
    <SubPageLayout
      eyebrow="Service"
      title={service!.title}
      intro={service!.intro}
      heroImg={service!.img}
    >
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-medium text-charcoal mb-4">What's included</h2>
          <ul className="space-y-3">
            {service!.highlights.map((h) => (
              <li key={h} className="flex gap-3 text-muted-foreground">
                <span className="text-olive">✓</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-medium text-charcoal mb-4">Project scope</h2>
          <ol className="space-y-3">
            {service!.scope.map((s, i) => (
              <li key={s} className="flex gap-3 text-muted-foreground">
                <span className="text-brass font-medium">0{i + 1}</span>
                <span>{s}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <div className="mt-12 flex flex-wrap gap-4">
        <Link
          to="/#intake"
          className="bg-olive text-primary-foreground rounded-full px-6 py-3 text-sm font-medium hover:bg-olive-dark transition-all"
        >
          Schedule a Free Consultation
        </Link>
        <a
          href="tel:6190000000"
          className="border border-olive text-olive rounded-full px-6 py-3 text-sm font-medium hover:bg-olive hover:text-primary-foreground transition-all"
        >
          Call (619) 000-0000
        </a>
      </div>
    </SubPageLayout>
  );
};

function setMeta(content: string) {
  let tag = document.querySelector('meta[name="description"]');
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", "description");
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

export default ServicePage;
