import { useParams, Navigate, Link } from "react-router-dom";
import SubPageLayout from "@/components/SubPageLayout";
import { locations, services } from "@/data/content";

const LocationPage = () => {
  const { slug } = useParams();
  const location = locations.find((l) => l.slug === slug);
  if (!location) return <Navigate to="/" replace />;

  return (
    <SubPageLayout
      eyebrow="Service Area"
      title={`Home Improvement in ${location.name}`}
      intro={location.intro}
    >
      <h2 className="text-2xl font-medium text-charcoal mb-6">Services available in {location.name}</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {services.map((s) => (
          <Link
            key={s.slug}
            to={`/services/${s.slug}`}
            className="bg-card rounded-2xl p-5 border border-border hover:border-olive transition-all"
          >
            <h3 className="text-lg font-medium text-charcoal mb-1">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.body}</p>
          </Link>
        ))}
      </div>
    </SubPageLayout>
  );
};

export default LocationPage;
