import { useParams, Navigate } from "react-router-dom";
import { parseCityServiceSlug } from "@/lib/cityServiceUrls";
import ServicePage from "./ServicePage";

/**
 * Handles clean geo URLs like /kitchen-remodel-rancho-santa-fe.
 * Parses the slug, then delegates rendering to ServicePage which
 * already knows how to render service+city combinations.
 */
const CityServicePage = () => {
  const { combined } = useParams();
  const parsed = combined ? parseCityServiceSlug(combined) : null;
  if (!parsed) return <Navigate to="/" replace />;
  // Render ServicePage; it reads service+city from URL params via useParams.
  // We pass them via a wrapper route below.
  return <ServicePage forcedServiceSlug={parsed.serviceSlug} forcedCitySlug={parsed.citySlug} />;
};

export default CityServicePage;
