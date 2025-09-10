import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import VibeCoding from "./pages/VibeCoding";
import SocialContent from "./pages/SocialContent";
import ECommerce from "./pages/ECommerce";
import SalesFunnelAutomation from "./pages/SalesFunnelAutomation";
import Training from "./pages/Training";
import About from "./pages/About";
import AISolutions from "./pages/AISolutions";
import Agents from "./pages/Agents";
import VoiceAI from "./pages/VoiceAI";
import AIAssessment from "./pages/AIAssessment";
import AssessmentQuestions from "./pages/AssessmentQuestions";
import AIConsultation from "./pages/AIConsultation";
import EmailTemplatePreview from "./pages/EmailTemplatePreview";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/vibe-coding" element={<VibeCoding />} />
            <Route path="/e-commerce" element={<ECommerce />} />
            <Route path="/social-content" element={<SocialContent />} />
            <Route path="/sales-funnel-automation" element={<SalesFunnelAutomation />} />
            <Route path="/ai-audit" element={<AISolutions />} />
            <Route path="/ai-assessment" element={<AIAssessment />} />
            <Route path="/assessment-questions" element={<AssessmentQuestions />} />
            
            <Route path="/agents" element={<Agents />} />
            <Route path="/voice-ai" element={<VoiceAI />} />
            <Route path="/training" element={<Training />} />
            <Route path="/about" element={<About />} />
            <Route path="/email-template" element={<EmailTemplatePreview />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
