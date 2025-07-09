
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import GitHubGuidePage from "./pages/GitHubGuidePage";
import LinkedInGuidePage from "./pages/LinkedInGuidePage";
import PortfolioGuidePage from "./pages/PortfolioGuidePage";
import ResumeGuidePage from "./pages/ResumeGuidePage";
import TemplatesPage from "./pages/TemplatesPage";
import ProfilePage from "./pages/ProfilePage";
import SettingsPage from "./pages/SettingsPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/guides/github" element={<GitHubGuidePage />} />
          <Route path="/guides/linkedin" element={<LinkedInGuidePage />} />
          <Route path="/guides/portfolio" element={<PortfolioGuidePage />} />
          <Route path="/guides/resume" element={<ResumeGuidePage />} />
          <Route path="/resources/templates" element={<TemplatesPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/settings" element={<SettingsPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
