
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
<<<<<<< Updated upstream
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
=======
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import GitHubGuidePage from "./pages/GitHubGuidePage";
import LinkedInGuidePage from "./pages/LinkedInGuidePage";
import PortfolioGuidePage from "./pages/PortfolioGuidePage";
import ResumeGuidePage from "./pages/ResumeGuidePage";
import TemplatesPage from "./pages/TemplatesPage";
import ResumeTemplateDetail from "./pages/ResumeTemplateDetail";
import ProfilePage from "./pages/ProfilePage";
import SettingsPage from "./pages/SettingsPage";
import ComingSoon from './pages/ComingSoon';
<<<<<<< Updated upstream
<<<<<<< Updated upstream
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import ProgressTracker from './components/ProgressTracker';
import FAQBot from './components/FAQBot';
import React from 'react';
=======
import AuthenticationPage from './pages/AuthenticationPage';
>>>>>>> Stashed changes
=======
import AuthenticationPage from './pages/AuthenticationPage';
>>>>>>> Stashed changes

const queryClient = new QueryClient();

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
<<<<<<< Updated upstream
<<<<<<< Updated upstream
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <ProgressTracker />
        <FAQBot />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/guides/github" element={<GitHubGuidePage />} />
          <Route path="/guides/linkedin" element={<LinkedInGuidePage />} />
          <Route path="/guides/portfolio" element={<PortfolioGuidePage />} />
          <Route path="/guides/resume" element={<ResumeGuidePage />} />
          <Route path="/resources/templates" element={<TemplatesPage />} />
          <Route path="/templates/:templateId" element={<ResumeTemplateDetail />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
=======
=======
>>>>>>> Stashed changes
    <AuthProvider>
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
            <Route path="/templates/:templateId" element={<ResumeTemplateDetail />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/coming-soon" element={<ComingSoon />} />
            <Route path="/auth" element={<AuthenticationPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
  </QueryClientProvider>
);

export default App;
