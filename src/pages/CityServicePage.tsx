import { useParams } from "react-router-dom";
import { parseCityServiceSlug } from "@/lib/cityServiceUrls";
import ServicePage from "./ServicePage";
import NotFound from "./NotFound";

/**
 * Handles clean geo URLs like /kitchen-remodel-rancho-santa-fe.
 * If the slug doesn't match a known service+city combo, render NotFound
 * so unrelated top-level paths still 404 correctly.
 */
const CityServicePage = () => {
  const { combined } = useParams();
  const parsed = combined ? parseCityServiceSlug(combined) : null;
  if (!parsed) return <NotFound />;
  return <ServicePage forcedServiceSlug={parsed.serviceSlug} forcedCitySlug={parsed.citySlug} />;
};

export default CityServicePage;
