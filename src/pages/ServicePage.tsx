import { useEffect } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import SubPageLayout from "@/components/SubPageLayout";
import { services, locations } from "@/data/content";
import { getServiceDetail } from "@/data/serviceDetails";

const ServicePage = () => {
  const { slug } = useParams();
  const detail = getServiceDetail(slug);
  const service = !detail ? services.find((s) => s.slug === slug) : null;
  const location = !detail && !service ? locations.find((l) => l.slug === slug) : null;

  useEffect(() => {
    if (detail) {
      document.title = `${detail.title} | Prime Projects`;
      setMeta(detail.metaDescription);
    } else if (service) {
      document.title = `${service.title} in San Diego County | Prime Projects`;
      setMeta(`${service.title} services across San Diego County. ${service.body}`);
    } else if (location) {
      document.title = `Home Improvement in ${location.name} | Prime Projects`;
      setMeta(
        `Premium home improvement services in ${location.name}, CA. Kitchens, bathrooms, ADUs, roofing, landscaping, and whole-home remodels.`
      );
    }
  }, [detail, service, location]);

  if (!detail && !service && !location) return <Navigate to="/" replace />;

  // Rich service detail page
  if (detail) {
    return (
      <SubPageLayout
        eyebrow="Service"
        title={detail.h1}
        intro={detail.intro}
        heroImg={detail.heroImg}
      >
        {/* Long-form body */}
        <div className="space-y-6 mb-16">
          {detail.body.map((p, i) => (
            <p key={i} className="text-lg text-muted-foreground leading-relaxed">
              {p}
            </p>
          ))}
        </div>

        {/* What's Included */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6">What's Included</h2>
          <ul className="grid md:grid-cols-2 gap-4">
            {detail.included.map((item) => (
              <li
                key={item}
                className="flex gap-3 bg-card border border-border rounded-2xl p-5"
              >
                <span className="text-olive flex-shrink-0">✓</span>
                <span className="text-charcoal">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Common Mistakes */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6">
            Common Mistakes Homeowners Make
          </h2>
          <div className="space-y-5">
            {detail.mistakes.map((m, i) => (
              <div
                key={m.title}
                className="bg-card border border-border rounded-2xl p-6"
              >
                <h3 className="text-lg font-medium text-charcoal mb-2">
                  <span className="text-brass mr-2">0{i + 1}</span>
                  {m.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{m.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How Prime Projects Guides You */}
        <section className="mb-16 bg-secondary rounded-2xl p-8 md:p-10 border border-border">
          <p className="text-xs uppercase tracking-widest text-brass mb-3">
            The Prime Projects Approach
          </p>
          <h2 className="font-serif text-3xl text-charcoal mb-4">
            How Prime Projects Guides You
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {detail.guidance}
          </p>
        </section>

        {/* Timeline */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6">
            Timeline & What to Expect
          </h2>
          <div className="space-y-4">
            {detail.timeline.map((t, i) => (
              <div
                key={t.phase}
                className="grid md:grid-cols-[auto,1fr,auto] gap-4 md:gap-6 items-start bg-card border border-border rounded-2xl p-6"
              >
                <span className="text-brass font-medium">0{i + 1}</span>
                <div>
                  <h3 className="text-lg font-medium text-charcoal mb-1">
                    {t.phase}
                  </h3>
                  <p className="text-muted-foreground">{t.detail}</p>
                </div>
                <span className="text-sm text-charcoal bg-secondary border border-border rounded-full px-4 py-1.5 whitespace-nowrap">
                  {t.duration}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <div className="bg-near-black text-primary-foreground rounded-2xl p-8 md:p-12 text-center">
          <h3 className="font-serif text-2xl md:text-3xl mb-3">
            Ready to plan your {detail.title.toLowerCase()} project?
          </h3>
          <p className="text-primary-foreground/75 mb-6 max-w-xl mx-auto">
            Talk through goals, scope, and realistic budget before any commitment.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/#intake"
              className="bg-primary-foreground text-near-black rounded-full px-6 py-3 text-sm font-medium hover:opacity-90 transition-all"
            >
              Schedule a Free Consultation
            </Link>
            <a
              href="tel:6190000000"
              className="border border-primary-foreground/40 text-primary-foreground rounded-full px-6 py-3 text-sm font-medium hover:bg-primary-foreground hover:text-near-black transition-all"
            >
              Call (619) 000-0000
            </a>
          </div>
        </div>
      </SubPageLayout>
    );
  }

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
