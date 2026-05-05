import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import ServicePage from "./pages/ServicePage.tsx";
import CityServicePage from "./pages/CityServicePage.tsx";
import LocationPage from "./pages/LocationPage.tsx";
import LocationsIndex from "./pages/LocationsIndex.tsx";
import PlanningPage from "./pages/PlanningPage.tsx";
import ProjectPage from "./pages/ProjectPage.tsx";
import Blog from "./pages/Blog.tsx";
import BlogPost from "./pages/BlogPost.tsx";
import BlogSubmit from "./pages/BlogSubmit.tsx";
import AdminLogin from "./pages/AdminLogin.tsx";
import AdminSubmissions from "./pages/AdminSubmissions.tsx";
import AdminLeads from "./pages/AdminLeads.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import Terms from "./pages/Terms.tsx";
import DebugLogos from "./pages/DebugLogos.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="/services/:slug/:city" element={<ServicePage />} />
          {/* Clean geo URLs e.g. /kitchen-remodel-rancho-santa-fe */}
          <Route path="/:combined" element={<CityServicePage />} />
          <Route path="/locations" element={<LocationsIndex />} />
          <Route path="/locations/:slug" element={<LocationPage />} />
          <Route path="/planning/:slug" element={<PlanningPage />} />
          <Route path="/projects/:slug" element={<ProjectPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/submit" element={<BlogSubmit />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/login" element={<AdminLogin />} />
          <Route path="/admin/blog-submissions" element={<AdminSubmissions />} />
          <Route path="/leads" element={<AdminLeads />} />
          <Route path="/admin/leads" element={<AdminLeads />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/debug/logos" element={<DebugLogos />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
