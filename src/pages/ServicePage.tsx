import { useParams, Navigate, Link } from "react-router-dom";
import SubPageLayout from "@/components/SubPageLayout";
import Seo, { breadcrumbJsonLd, localBusinessJsonLd } from "@/components/Seo";
import { services, locations } from "@/data/content";
import { getServiceDetail } from "@/data/serviceDetails";
import {
  buildCityServicePath,
  orderedCitySlugs,
} from "@/lib/cityServiceUrls";

type Props = {
  /** Optional override — used by clean URL wrappers (e.g. /kitchen-remodel-carlsbad). */
  forcedServiceSlug?: string;
  forcedCitySlug?: string;
};

const ServicePage = ({ forcedServiceSlug, forcedCitySlug }: Props = {}) => {
  const params = useParams();
  const serviceSlug = forcedServiceSlug ?? params.slug;
  const citySlug = forcedCitySlug ?? params.city;

  const detail = getServiceDetail(serviceSlug);
  const service = !detail ? services.find((s) => s.slug === serviceSlug) : null;
  const location =
    !detail && !service ? locations.find((l) => l.slug === serviceSlug) : null;
  const cityCtx = citySlug ? locations.find((l) => l.slug === citySlug) : null;

  if (!detail && !service && !location) return <Navigate to="/" replace />;
  // If a city slug was passed but doesn't match, drop the city context gracefully.

  const orderedCities = orderedCitySlugs()
    .map((s) => locations.find((l) => l.slug === s))
    .filter((l): l is NonNullable<typeof l> => Boolean(l));

  // ---------- Rich service detail page ----------
  if (detail) {
    const inCity = cityCtx ? ` in ${cityCtx.name}` : "";
    const pagePath = cityCtx
      ? buildCityServicePath(detail.slug, cityCtx.slug)
      : `/services/${detail.slug}`;
    const pageTitle = cityCtx
      ? `${detail.title} in ${cityCtx.name}, CA | Prime Projects`
      : `${detail.title} in San Diego County | Prime Projects`;
    const pageDescription = cityCtx
      ? `${detail.title} for ${cityCtx.name} homeowners. ${detail.metaDescription}`
      : detail.metaDescription;

    const serviceJsonLd = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: cityCtx ? `${detail.title} in ${cityCtx.name}` : detail.title,
      description: pageDescription,
      provider: {
        "@type": "LocalBusiness",
        name: "Prime Projects",
        telephone: "(760) 525-5058",
        areaServed: cityCtx ? `${cityCtx.name}, CA` : "San Diego County, CA",
      },
      areaServed: cityCtx ? `${cityCtx.name}, CA` : "San Diego County, CA",
      serviceType: detail.title,
      url: `https://primeprojects.pro${pagePath}`,
    };
    const breadcrumb = breadcrumbJsonLd(
      cityCtx
        ? [
            { name: "Home", path: "/" },
            { name: "Services", path: "/#services" },
            { name: detail.title, path: `/services/${detail.slug}` },
            { name: cityCtx.name, path: pagePath },
          ]
        : [
            { name: "Home", path: "/" },
            { name: "Services", path: "/#services" },
            { name: detail.title, path: pagePath },
          ],
    );

    const h1 = cityCtx ? `${detail.title} in ${cityCtx.name}` : detail.h1;
    const intro = cityCtx
      ? `${detail.intro} Serving ${cityCtx.name} homeowners with the same concierge oversight we bring to every project across San Diego County. ${cityCtx.whyLocal}`
      : detail.intro;

    return (
      <>
        <Seo
          title={pageTitle}
          description={pageDescription}
          path={pagePath}
          image={detail.heroImg}
          jsonLd={[serviceJsonLd, breadcrumb]}
        />
        <SubPageLayout
          eyebrow={cityCtx ? `Service · ${cityCtx.name}` : "Service"}
          title={h1}
          intro={intro}
          heroImg={detail.heroImg}
          heroAlt={detail.heroAlt}
        >
          {/* Trust strip */}
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-8">
            Licensed, bonded &amp; insured ·{" "}
            {cityCtx
              ? `Serving ${cityCtx.name} & surrounding North County`
              : "Serving San Diego North County"}{" "}
            · Free consultations
          </p>

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

          {/* Common Mistakes / Why Choose Us framing */}
          <section className="mb-16">
            <h2 className="font-serif text-3xl text-charcoal mb-6">
              Why Homeowners Choose Prime Projects
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

          {/* Social proof */}
          <section className="mb-16 bg-card border border-border rounded-2xl p-8 md:p-10">
            <p className="text-xs uppercase tracking-widest text-brass mb-3">Homeowner Feedback</p>
            <blockquote className="font-serif text-xl md:text-2xl text-charcoal leading-snug">
              "Prime Projects gave us a level of clarity we never had with previous contractors —
              honest scope, real timelines, and someone who actually picked up the phone."
            </blockquote>
            <p className="text-sm text-muted-foreground mt-4">
              — Homeowner, {cityCtx ? cityCtx.name : "North County San Diego"}
            </p>
          </section>

          {/* How Prime Projects Guides You */}
          <section className="mb-16 bg-secondary rounded-2xl p-8 md:p-10 border border-border">
            <p className="text-xs uppercase tracking-widest text-brass mb-3">
              The Prime Projects Approach
            </p>
            <h2 className="font-serif text-3xl text-charcoal mb-4">
              How Prime Projects Guides You{inCity}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{detail.guidance}</p>
          </section>

          {/* Timeline */}
          <section className="mb-16">
            <h2 className="font-serif text-3xl text-charcoal mb-6">
              Timeline &amp; What to Expect
            </h2>
            <div className="space-y-4">
              {detail.timeline.map((t, i) => (
                <div
                  key={t.phase}
                  className="grid md:grid-cols-[auto,1fr,auto] gap-4 md:gap-6 items-start bg-card border border-border rounded-2xl p-6"
                >
                  <span className="text-brass font-medium">0{i + 1}</span>
                  <div>
                    <h3 className="text-lg font-medium text-charcoal mb-1">{t.phase}</h3>
                    <p className="text-muted-foreground">{t.detail}</p>
                  </div>
                  <span className="text-sm text-charcoal bg-secondary border border-border rounded-full px-4 py-1.5 whitespace-nowrap">
                    {t.duration}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Locations Served */}
          <section className="mb-16">
            <h2 className="font-serif text-3xl text-charcoal mb-2">Locations Served</h2>
            <p className="text-muted-foreground mb-6">
              {detail.title} for homeowners across San Diego County. Tap a city for area-specific
              planning notes.
            </p>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {orderedCities.map((l) => {
                const isCurrent = cityCtx?.slug === l.slug;
                return (
                  <li key={l.slug}>
                    <Link
                      to={buildCityServicePath(detail.slug, l.slug)}
                      aria-current={isCurrent ? "page" : undefined}
                      className={`block rounded-full border px-4 py-2 text-sm text-center transition-colors ${
                        isCurrent
                          ? "bg-olive text-primary-foreground border-olive"
                          : "border-border text-charcoal hover:border-olive hover:text-olive"
                      }`}
                    >
                      {detail.title} in {l.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>

          {/* Final CTA */}
          <div className="bg-near-black text-primary-foreground rounded-2xl p-8 md:p-12 text-center">
            <h3 className="font-serif text-2xl md:text-3xl mb-3">
              Get Your Free {detail.title} Consultation{inCity}
            </h3>
            <p className="text-primary-foreground/85 mb-6 max-w-xl mx-auto">
              Talk through goals, scope, and realistic budget — no obligation, no sales pressure.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/#intake"
                className="bg-primary-foreground text-near-black rounded-full px-6 py-3 text-sm font-medium hover:opacity-90 transition-all"
              >
                Schedule a Free Consultation
              </Link>
              <a
                href="tel:7605255058"
                className="border border-primary-foreground/40 text-primary-foreground rounded-full px-6 py-3 text-sm font-medium hover:bg-primary-foreground hover:text-near-black transition-all"
              >
                Call (760) 525-5058
              </a>
            </div>
          </div>
        </SubPageLayout>
      </>
    );
  }

  // ---------- Location page ----------
  if (location) {
    const breadcrumb = breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Service Areas", path: "/locations" },
      { name: location.name, path: `/services/${location.slug}` },
    ]);
    const localJsonLd = {
      ...localBusinessJsonLd,
      name: `Prime Projects — ${location.name}`,
      areaServed: location.name,
    };

    return (
      <>
        <Seo
          title={`${location.name} Home Remodeling Contractor | Prime Projects`}
          description={`Premium home improvement in ${location.name}, CA — kitchens, bathrooms, ADUs, roofing, and outdoor living planned and managed with concierge oversight.`}
          path={`/services/${location.slug}`}
          image={location.img}
          jsonLd={[localJsonLd, breadcrumb]}
        />
        <SubPageLayout
          eyebrow="Service Area"
          title={`Home Improvement in ${location.name}`}
          intro={location.intro}
          heroImg={location.img}
          heroAlt={`${location.name} San Diego County neighborhood`}
        >
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-8">
            Licensed, bonded &amp; insured · Serving {location.name} &amp; surrounding areas · Free consultations
          </p>

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
                Home services offered in {location.name}
              </h2>
              <ul className="space-y-3">
                {services.map((s) => {
                  const hasDetail = Boolean(getServiceDetail(s.slug));
                  const to = hasDetail
                    ? buildCityServicePath(s.slug, location.slug)
                    : `/services/${s.slug}`;
                  return (
                    <li key={s.slug}>
                      <Link
                        to={to}
                        className="flex gap-3 text-muted-foreground hover:text-olive transition-colors"
                      >
                        <span className="text-brass">→</span>
                        <span>
                          {s.title} in {location.name}
                        </span>
                      </Link>
                    </li>
                  );
                })}
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
                href="tel:7605255058"
                className="border border-olive text-olive rounded-full px-6 py-3 text-sm font-medium hover:bg-olive hover:text-primary-foreground transition-all"
              >
                Call (760) 525-5058
              </a>
            </div>
          </div>
        </SubPageLayout>
      </>
    );
  }

  // ---------- Lightweight service fallback ----------
  const s = service!;
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Services", path: "/#services" },
    { name: s.title, path: `/services/${s.slug}` },
  ]);
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.title,
    description: s.body,
    provider: { "@type": "LocalBusiness", name: "Prime Projects" },
    areaServed: "San Diego County, CA",
    serviceType: s.title,
    url: `https://primeprojects.pro/services/${s.slug}`,
  };

  return (
    <>
      <Seo
        title={`${s.title} in San Diego County | Prime Projects`}
        description={`${s.title} services across San Diego County. ${s.body}`}
        path={`/services/${s.slug}`}
        image={s.img}
        jsonLd={[serviceJsonLd, breadcrumb]}
      />
      <SubPageLayout
        eyebrow="Service"
        title={s.title}
        intro={s.intro}
        heroImg={s.img}
        heroAlt={s.alt}
      >
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-8">
          Licensed, bonded &amp; insured · Serving San Diego North County · Free consultations
        </p>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-medium text-charcoal mb-4">What's included</h2>
            <ul className="space-y-3">
              {s.highlights.map((h) => (
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
              {s.scope.map((step, i) => (
                <li key={step} className="flex gap-3 text-muted-foreground">
                  <span className="text-brass font-medium">0{i + 1}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Locations Served */}
        <section className="mt-16">
          <h2 className="text-2xl font-medium text-charcoal mb-2">Locations Served</h2>
          <p className="text-muted-foreground mb-6">
            {s.title} across San Diego County.
          </p>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {orderedCities.map((l) => (
              <li key={l.slug}>
                <Link
                  to={`/locations/${l.slug}`}
                  className="block rounded-full border border-border px-4 py-2 text-sm text-center text-charcoal hover:border-olive hover:text-olive transition-colors"
                >
                  {s.title} in {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link
            to="/#intake"
            className="bg-olive text-primary-foreground rounded-full px-6 py-3 text-sm font-medium hover:bg-olive-dark transition-all"
          >
            Get Your Free {s.title} Consultation
          </Link>
          <a
            href="tel:7605255058"
            className="border border-olive text-olive rounded-full px-6 py-3 text-sm font-medium hover:bg-olive hover:text-primary-foreground transition-all"
          >
            Call (760) 525-5058
          </a>
        </div>
      </SubPageLayout>
    </>
  );
};

export default ServicePage;
