import { useParams, Navigate } from "react-router-dom";
import SubPageLayout from "@/components/SubPageLayout";
import Seo, { breadcrumbJsonLd } from "@/components/Seo";
import { articles } from "@/data/content";

const PlanningPage = () => {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug);
  if (!article) return <Navigate to="/" replace />;

  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Planning", path: "/#planning" },
    { name: article.title, path: `/planning/${article.slug}` },
  ]);
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.intro,
    image: article.img,
    articleSection: article.cat,
    author: { "@type": "Organization", name: "Prime Projects Team" },
    publisher: { "@type": "Organization", name: "Prime Projects" },
    mainEntityOfPage: `https://primeprojects.pro/planning/${article.slug}`,
  };

  return (
    <>
      <Seo
        title={`${article.title} | Prime Projects`}
        description={article.intro}
        path={`/planning/${article.slug}`}
        image={article.img}
        ogType="article"
        jsonLd={[articleJsonLd, breadcrumb]}
      />
      <SubPageLayout
        eyebrow={article.cat}
        title={article.title}
        intro={article.intro}
        heroImg={article.img}
        heroAlt={`${article.cat} — ${article.title}`}
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
    </>
  );
};

export default PlanningPage;
