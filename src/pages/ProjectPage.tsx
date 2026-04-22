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

        <div className="space-y-6">
          <div>
            <h2 className="font-serif text-2xl text-charcoal mb-2">The challenge</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">{project.intro}</p>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-charcoal mb-2">Our approach</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">{project.overlay}</p>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-charcoal mb-2">The outcome</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              A coordinated {project.badge.toLowerCase()} delivered in {project.location} with clear
              scope, realistic timelines, and concierge-level oversight from planning through final
              walkthrough.
            </p>
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
            href="tel:6190000000"
            className="border border-olive text-olive rounded-full px-6 py-3 text-sm font-medium hover:bg-olive hover:text-primary-foreground transition-all"
          >
            Call (619) 000-0000
          </a>
        </div>
      </SubPageLayout>
    </>
  );
};

export default ProjectPage;
