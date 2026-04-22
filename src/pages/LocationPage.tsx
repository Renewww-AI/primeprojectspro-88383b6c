import { useParams, Navigate } from "react-router-dom";
import { locations } from "@/data/content";
import ServicePage from "./ServicePage";

// Legacy /locations/:slug route — render the same combined page so old links still work.
const LocationPage = () => {
  const { slug } = useParams();
  const location = locations.find((l) => l.slug === slug);
  if (!location) return <Navigate to="/" replace />;
  return <ServicePage />;
};

export default LocationPage;
