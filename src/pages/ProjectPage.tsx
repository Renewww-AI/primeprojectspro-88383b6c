import { useParams, Navigate, Link } from "react-router-dom";
import SubPageLayout from "@/components/SubPageLayout";
import Seo, { breadcrumbJsonLd } from "@/components/Seo";
import { projects } from "@/data/content";

const ProjectPage = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  if (!project) return <Navigate to="/" replace />;

  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Projects", path: "/#projects" },
    { name: project.badge, path: `/projects/${project.slug}` },
  ]);

  return (
    <>
      <Seo
        title={`${project.badge} in ${project.location} | Prime Projects`}
        description={project.overlay}
        path={`/projects/${project.slug}`}
        image={project.img}
        jsonLd={breadcrumb}
      />
      <SubPageLayout
        eyebrow={`${project.badge} — ${project.location}`}
        title={project.intro}
        heroImg={project.img}
        heroAlt={`${project.badge} project in ${project.location}`}
      >
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-8">
          Licensed, bonded &amp; insured · {project.location} project · Free consultations
        </p>

        <div className="space-y-8">
          <div>
            <h2 className="font-serif text-2xl text-charcoal mb-2">The challenge</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">{project.challenge}</p>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-charcoal mb-2">Our approach</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">{project.approach}</p>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-charcoal mb-2">The outcome</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">{project.outcome}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 pt-4">
            <div className="bg-stone-bg rounded-2xl p-6 border border-border">
              <h3 className="text-xs uppercase tracking-widest text-brass mb-3">Scope highlights</h3>
              <ul className="space-y-2">
                {project.highlights.map((h) => (
                  <li key={h} className="text-charcoal text-sm flex gap-2">
                    <span className="text-olive">·</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-stone-bg rounded-2xl p-6 border border-border">
              <h3 className="text-xs uppercase tracking-widest text-brass mb-3">Materials &amp; finishes</h3>
              <ul className="space-y-2">
                {project.materials.map((m) => (
                  <li key={m} className="text-charcoal text-sm flex gap-2">
                    <span className="text-olive">·</span>
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-l-2 border-olive pl-4">
            <p className="text-xs uppercase tracking-widest text-brass mb-1">Project timeline</p>
            <p className="text-charcoal">{project.timeline}</p>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link
            to="/#intake"
            className="bg-olive text-primary-foreground rounded-full px-6 py-3 text-sm font-medium hover:bg-olive-dark transition-all"
          >
            Start a Similar Project
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

export default ProjectPage;
