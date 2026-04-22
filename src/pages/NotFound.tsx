import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Seo from "@/components/Seo";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <Seo
        title="Page Not Found (404) | Prime Projects"
        description="The page you're looking for doesn't exist. Return to the Prime Projects homepage to explore home improvement services in San Diego County."
        path={location.pathname}
      />
      <div className="text-center px-4">
        <h1 className="mb-4 text-4xl font-bold">404 — Page Not Found</h1>
        <p className="mb-4 text-xl text-muted-foreground">
          The page you're looking for doesn't exist or has moved.
        </p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Return to the Prime Projects homepage
        </a>
      </div>
    </div>
  );
};

export default NotFound;
