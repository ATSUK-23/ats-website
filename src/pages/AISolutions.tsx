import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import SplitSection from "@/components/sections/SplitSection";
import HeroSection from "@/components/sections/HeroSection";
const aiBrainBackground = "/lovable-uploads/924a7d77-7fc5-4519-858c-c9f930246863.png";
import aiKnowledgeComparison from "@/assets/ai-knowledge-comparison.jpg";
import aiProcessSteps from "@/assets/ai-process-steps.jpg";
import aiServicesGrid from "@/assets/ai-services-grid.jpg";
import industriesServed from "@/assets/industries-served.jpg";
import martinKeeneProfile from "@/assets/martin-keene-profile.jpeg";
import { Brain, Zap, Users, TrendingUp, Phone, MessageSquare, ShoppingCart, Target, RotateCcw, Share2 } from "lucide-react";
export default function AISolutions() {
  console.log('AI Solutions page rendering', {
    aiBrainBackground,
    aiKnowledgeComparison
  });
  return <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>AI Solutions - Unleash the AI Brain in Your Business | Automate to Sell</title>
        <meta name="description" content="AI solutions that delight customers, boost sales, increase efficiency, slash costs & maximize profits. We help develop your AI strategy and manage implementation." />
      </Helmet>

      <SiteHeader />

      <main>
        {/* Hero Section */}
        <HeroSection title="UNLEASH THE AI BRAIN IN YOUR BUSINESS" subtitle="We help develop your AI strategy, source the best tech solution partners, and even manage implementation letting you focus on looking after clients!" ctaText="Book an Introduction Call" ctaLink="#contact" backgroundImage={aiBrainBackground} className="py-16 md:py-24">
          
        </HeroSection>

        {/* AI Brain Power Section */}
        <SplitSection id="ai-brain-power" title="Building Your AI Brain With Our AI Audit Process" description={
            <p>
              Imagine if all your company's knowledge from your team's expertise to sales decks, onboarding guides, and customer insights was captured in one intelligent system, available 24/7.
              <br /><br />
              That's your AI Brain. It consolidates everything you know so prospects and customers get instant, accurate answers whenever they need them.
            </p>
          } image="/lovable-uploads/d39c706b-cc98-4891-a1c7-7bf1e885d1c0.png" imageAlt="AI Brain technology visualization showing circuit patterns and neural networks" />

        {/* How It Helps Every Part of Your Business */}
        <section className="container py-4 sm:py-6 md:py-8 px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">How It Helps Every Part of Your Business</h2>
          </div>
          
          <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 mb-8 sm:mb-12">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold mb-3 text-foreground">Marketing</h3>
                <h4 className="text-sm font-medium mb-2 text-primary">Centralized Knowledge</h4>
                <p className="text-sm text-muted-foreground">All your messaging, FAQs, and materials in one hub, so prospects find answers instantly.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold mb-3 text-foreground">Sales</h3>
                <h4 className="text-sm font-medium mb-2 text-primary">Smarter Qualification</h4>
                <p className="text-sm text-muted-foreground">AI responds in real time, handles routine questions, and connects hot leads directly to your team.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold mb-3 text-foreground">Customer Support</h3>
                <h4 className="text-sm font-medium mb-2 text-primary">Always On</h4>
                <p className="text-sm text-muted-foreground">Delivers instant, accurate answers 24/7 and routes complex queries to the right person.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold mb-3 text-foreground">Onboarding & Training</h3>
                <h4 className="text-sm font-medium mb-2 text-primary">Scalable Support</h4>
                <p className="text-sm text-muted-foreground">Provides step-by-step guides and training resources, making growth and adoption easier for clients and staff.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold mb-3 text-foreground">Growth</h3>
                <h4 className="text-sm font-medium mb-2 text-primary">Clear Next Steps</h4>
                <p className="text-sm text-muted-foreground">Guides prospects naturally to book calls, explore services, or purchase — like a personal sales assistant for every customer.</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-foreground">The Next Step: Your AI Audit</h3>
            <p className="text-base sm:text-lg text-muted-foreground">
              Before we build your AI Brain, we start with a 6-stage AI Audit. It maps your systems, identifies high-value opportunities, and delivers a clear roadmap with costs and timelines.
            </p>
          </div>
        </section>

        {/* Discovery Call Section */}
        <section className="container py-8 sm:py-12 md:py-16 px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Let's Start With a Discovery Call</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Before we dive into an AI Audit, we begin with a 45 - 60 minute discovery call to align on your goals, challenges, and opportunities. This ensures the audit is tailored to your business.
            </p>
          </div>
          
          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <Target className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-semibold mb-2">Understand Your Business</h3>
                <p className="text-sm text-muted-foreground">We'll discuss your business model, current priorities, and the challenges you're facing.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <Zap className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-semibold mb-2">Identify AI Opportunities</h3>
                <p className="text-sm text-muted-foreground">Together, we'll explore where AI might add the most value, whether it's growth, efficiency, or customer experience.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <RotateCcw className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-semibold mb-2">Assess Current Readiness</h3>
                <p className="text-sm text-muted-foreground">We'll get a high-level view of your existing systems, data, and any AI initiatives already in motion.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <Share2 className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-semibold mb-2">Define Next Steps</h3>
                <p className="text-sm text-muted-foreground">By the end of the call, you'll have clarity on whether an AI Audit is the right move and how we'd structure it for you.</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center">
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              This isn't a sales pitch, it's a conversation designed to help you see what's possible and decide if moving forward makes sense.
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        



        {/* 6-Stage AI Audit Process */}
        <section className="container py-6 sm:py-8 md:py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Our Proven 6-Stage AI Audit Process</h2>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
              {/* Stage 1 */}
              <Card className="bg-green-500/15 backdrop-blur-sm border-white/20 p-6">
                <CardContent className="p-0 space-y-4">
                  <div className="flex items-center gap-3">
                    <Users className="w-8 h-8 text-primary" />
                    <h3 className="text-xl font-semibold">Stage 1 – Initial Alignment</h3>
                  </div>
                  <p className="text-muted-foreground">
                    In our first meetings, we align on your strategic goals, current challenges, and expectations from AI. We identify why you want an AI audit—whether it's efficiency, growth, or compliance—and agree on the scope and desired outcomes. This sets the foundation for a productive engagement.
                  </p>
                  <p className="text-sm font-medium text-primary">Timeframe: Weeks 1–2</p>
                </CardContent>
              </Card>

              {/* Stage 2 */}
              <Card className="bg-green-500/15 backdrop-blur-sm border-white/20 p-6">
                <CardContent className="p-0 space-y-4">
                  <div className="flex items-center gap-3">
                    <Target className="w-8 h-8 text-primary" />
                    <h3 className="text-xl font-semibold">Stage 2 – Current State Assessment</h3>
                  </div>
                  <p className="text-muted-foreground">
                    We conduct structured interviews and data reviews across your teams. This helps us assess your AI readiness in six key areas: strategy, processes, data, technology, people, and governance. The output is a maturity heatmap that highlights gaps, risks, and potential opportunities for AI integration.
                  </p>
                  <p className="text-sm font-medium text-primary">Timeframe: Weeks 1–2</p>
                </CardContent>
              </Card>

              {/* Stage 3 */}
              <Card className="bg-green-500/15 backdrop-blur-sm border-white/20 p-6">
                <CardContent className="p-0 space-y-4">
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-8 h-8 text-primary" />
                    <h3 className="text-xl font-semibold">Stage 3 – Preliminary Findings & Proposal</h3>
                  </div>
                  <p className="text-muted-foreground">
                    We synthesize our findings into a clear picture of your AI opportunities. This includes a short list of critical use cases and quick wins. We then present a tailored proposal outlining the format and objectives of the upcoming face-to-face workshops with your team.
                  </p>
                  <p className="text-sm font-medium text-primary">Timeframe: Weeks 3–4</p>
                </CardContent>
              </Card>

              {/* Stage 4 */}
              <Card className="bg-green-500/15 backdrop-blur-sm border-white/20 p-6">
                <CardContent className="p-0 space-y-4">
                  <div className="flex items-center gap-3">
                    <Users className="w-8 h-8 text-primary" />
                    <h3 className="text-xl font-semibold">Stage 4 – Face-to-Face Workshops</h3>
                  </div>
                  <p className="text-muted-foreground">
                    In a 1–2 day onsite workshop, we bring together leaders and cross-functional teams. Through breakout sessions and interactive exercises, we validate our findings, co-create new use cases, and prioritize them using a value-versus-feasibility lens. These sessions build alignment across departments.
                  </p>
                  <p className="text-sm font-medium text-primary">Timeframe: Week 5</p>
                </CardContent>
              </Card>

              {/* Stage 5 */}
              <Card className="bg-green-500/15 backdrop-blur-sm border-white/20 p-6">
                <CardContent className="p-0 space-y-4">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-8 h-8 text-primary" />
                    <h3 className="text-xl font-semibold">Stage 5 – Roadmap Development & Costing</h3>
                  </div>
                  <p className="text-muted-foreground">
                    We translate workshop outcomes into a detailed 6–24 month roadmap. This includes quick wins (0–3 months), mid-term initiatives (3–12 months), and long-term enterprise projects (12–24+ months). Each initiative is costed, with clear estimates for technology, training, and implementation.
                  </p>
                  <p className="text-sm font-medium text-primary">Timeframe: Weeks 6–8</p>
                </CardContent>
              </Card>

              {/* Stage 6 */}
              <Card className="bg-green-500/15 backdrop-blur-sm border-white/20 p-6">
                <CardContent className="p-0 space-y-4">
                  <div className="flex items-center gap-3">
                    <Target className="w-8 h-8 text-primary" />
                    <h3 className="text-xl font-semibold">Stage 6 – Executive Presentation & Agreement</h3>
                  </div>
                  <p className="text-muted-foreground">
                    We deliver the final AI roadmap and business case to your leadership team. This includes the recommended initiatives, cost breakdown, and KPIs for measuring success. The objective is executive alignment on next steps and agreement to move into pilot or implementation phases.
                  </p>
                  <p className="text-sm font-medium text-primary">Timeframe: Week 9</p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button size="lg" className="text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4">
                Book Your AI Audit Today
              </Button>
            </div>
          </div>
        </section>

        {/* Ongoing Support Section */}
        <section className="container py-6 sm:py-8 md:py-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Ongoing AI Support & Growth</h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
              Your AI Brain evolves over time. We work with solution partners to train and optimise it, ensuring your business always stays ahead.
            </p>
            <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 md:grid-cols-3">
              <div className="bg-card border rounded-lg p-6">
                <Brain className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">AI & Human Monitoring</h3>
                <p className="text-sm text-muted-foreground">Continuous oversight and optimization</p>
              </div>
              <div className="bg-card border rounded-lg p-6">
                <Phone className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Monthly Progress Calls</h3>
                <p className="text-sm text-muted-foreground">Regular check-ins and updates</p>
              </div>
              <div className="bg-card border rounded-lg p-6">
                <TrendingUp className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Strategy Updates</h3>
                <p className="text-sm text-muted-foreground">As tech advances, so does your strategy</p>
              </div>
            </div>
          </div>
        </section>


        {/* Final CTA */}
        <section className="relative py-8 sm:py-10 md:py-16 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <img src={aiBrainBackground} alt="" className="w-full h-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-background/80" />
          </div>
          
          <div className="container text-center relative z-10 px-4">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6">
              Ready to Unlock Your AI Brain?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
              Transform your business with AI solutions that drive real results.
            </p>
            <Button size="lg" className="text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
              Book Your Discovery Call
            </Button>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>;
}