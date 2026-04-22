import { useParams, Navigate, Link } from "react-router-dom";
import SubPageLayout from "@/components/SubPageLayout";
import { services } from "@/data/content";

const ServicePage = () => {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);
  if (!service) return <Navigate to="/" replace />;

  return (
    <SubPageLayout
      eyebrow="Service"
      title={service.title}
      intro={service.intro}
      heroImg={service.img}
    >
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-medium text-charcoal mb-4">What's included</h2>
          <ul className="space-y-3">
            {service.highlights.map((h) => (
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
            {service.scope.map((s, i) => (
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
          Schedule a Consultation
        </Link>
        <Link
          to="/#services"
          className="border border-olive text-olive rounded-full px-6 py-3 text-sm font-medium hover:bg-olive hover:text-primary-foreground transition-all"
        >
          See All Services
        </Link>
      </div>
    </SubPageLayout>
  );
};

export default ServicePage;
