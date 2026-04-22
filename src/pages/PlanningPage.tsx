import { useParams, Navigate } from "react-router-dom";
import SubPageLayout from "@/components/SubPageLayout";
import { articles } from "@/data/content";

const PlanningPage = () => {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug);
  if (!article) return <Navigate to="/" replace />;

  return (
    <SubPageLayout
      eyebrow={article.cat}
      title={article.title}
      intro={article.intro}
      heroImg={article.img}
    >
      <div className="space-y-8">
        {article.sections.map((s) => (
          <div key={s.heading}>
            <h2 className="text-2xl font-medium text-charcoal mb-3">{s.heading}</h2>
            <p className="text-muted-foreground leading-relaxed">{s.body}</p>
          </div>
        ))}
      </div>
    </SubPageLayout>
  );
};

export default PlanningPage;
