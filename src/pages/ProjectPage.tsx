import { useParams, Navigate } from "react-router-dom";
import SubPageLayout from "@/components/SubPageLayout";
import { projects } from "@/data/content";

const ProjectPage = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  if (!project) return <Navigate to="/" replace />;

  return (
    <SubPageLayout
      eyebrow={`${project.badge} — ${project.location}`}
      title={project.intro}
      heroImg={project.img}
    >
      <p className="text-muted-foreground leading-relaxed text-lg">{project.overlay}</p>
    </SubPageLayout>
  );
};

export default ProjectPage;
