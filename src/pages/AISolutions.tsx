import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import SplitSection from "@/components/sections/SplitSection";
import HeroSection from "@/components/sections/HeroSection";
import AILeadForm from "@/components/forms/AILeadForm";
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
        <HeroSection title="UNLEASH THE AI BRAIN IN YOUR BUSINESS" subtitle="We help develop your AI strategy, source the best tech solution partners, and even manage implementation letting you focus on looking after clients!" ctaText="Start AI Assessment" ctaLink="/ai-assessment" backgroundImage={aiBrainBackground} className="py-16 md:py-24" customButtonClasses={{
        primary: "bg-green-700 text-white hover:bg-green-800",
        secondary: "bg-blue-600 text-white border-blue-600 hover:bg-blue-700 hover:border-blue-700"
      }} />

        {/* AI Brain Power Section */}
        <SplitSection id="ai-brain-power" title="Building Your AI Brain With Our AI Audit Process" description={<p>
              Imagine if all your company's knowledge from your team's expertise to sales decks, onboarding guides, and customer insights was captured in one intelligent system, available 24/7.
              <br /><br />
              That's your AI Brain!
              <br /><br />
              It consolidates everything you know so prospects, customers and every person in your company have instant, accurate answers whenever they need them.
            </p>} image="/lovable-uploads/d39c706b-cc98-4891-a1c7-7bf1e885d1c0.png" imageAlt="AI Brain technology visualization showing circuit patterns and neural networks" />

        {/* How It Helps Every Part of Your Business */}
        <section className="container py-4 sm:py-6 md:py-8 px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">How AI Can Help Every Part of Your Business</h2>
          </div>
          
          <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-8 sm:mb-12">
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
                <h3 className="text-lg font-semibold mb-3 text-foreground">Operations</h3>
                <h4 className="text-sm font-medium mb-2 text-primary">Streamlined Efficiency</h4>
                <p className="text-sm text-muted-foreground">Automates routine workflows, monitors performance, and ensures smooth coordination across teams freeing up resources to focus on innovation.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold mb-3 text-foreground">Finance</h3>
                <h4 className="text-sm font-medium mb-2 text-primary">Smarter Insights</h4>
                <p className="text-sm text-muted-foreground">Tracks financial data, surfaces real-time reporting, and supports forecasting, helping leadership make faster, data-driven decisions.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold mb-3 text-foreground">HR</h3>
                <h4 className="text-sm font-medium mb-2 text-primary">Enhanced Employee Experience</h4>
                <p className="text-sm text-muted-foreground">Assists with onboarding, training, and policy questions, while also supporting performance management making HR processes more efficient and employee-friendly.</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center max-w-4xl mx-auto">
            
            
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              
            </Button>
          </div>
        </section>

        {/* Why Choose Our AI Audit Section */}
        <section className="container py-8 sm:py-12 md:py-16 px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Why Choose Our AI Audit?</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Professional assessment that reveals your AI opportunities and creates a clear path forward
            </p>
          </div>
          
          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <Target className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-semibold mb-2">Strategic AI Planning</h3>
                <p className="text-sm text-muted-foreground">Data-driven AI strategies aligned with your business objectives and growth plans.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <Zap className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-semibold mb-2">Risk Assessment</h3>
                <p className="text-sm text-muted-foreground">Identify potential risks and compliance requirements before implementation.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <RotateCcw className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-semibold mb-2">ROI Analysis</h3>
                <p className="text-sm text-muted-foreground">Clear understanding of investment requirements and expected returns.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <Share2 className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-semibold mb-2">Implementation Roadmap</h3>
                <p className="text-sm text-muted-foreground">Detailed step-by-step plan for successful AI adoption in your business.</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-green-400">Start with Our Free AI Assessment</h3>
            <p className="text-base sm:text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
              Take our comprehensive 23-question assessment to evaluate your business across 6 key AI domains and receive a personalised roadmap for AI adoption.
            </p>
            
            <div className="grid gap-6 sm:gap-8 sm:grid-cols-3 max-w-4xl mx-auto mb-8">
              <div className="text-center">
                <h4 className="text-lg font-semibold mb-2 text-green-400">Comprehensive Analysis</h4>
                <p className="text-sm text-muted-foreground">Evaluate readiness across 6 critical business domains</p>
              </div>
              
              <div className="text-center">
                <h4 className="text-lg font-semibold mb-2 text-green-400">Personalised Insights</h4>
                <p className="text-sm text-muted-foreground">Detailed insights tailored to your business needs</p>
              </div>
              
              <div className="text-center">
                <h4 className="text-lg font-semibold mb-2 text-green-400">Expert Consultation</h4>
                <p className="text-sm text-muted-foreground">Free consultation to discuss results and next steps</p>
              </div>
            </div>
            
            <Button size="lg" className="bg-green-700 text-white hover:bg-green-800 mb-8" asChild>
              <a href="/ai-assessment">Start AI Assessment</a>
            </Button>
          </div>
        </section>

        {/* Benefits Section */}
        



        {/* Our Audit Process */}
        <section className="container py-6 sm:py-8 md:py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Our Audit Process</h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
                A proven methodology that delivers actionable insights and clear next steps
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {/* Stage 1 */}
              <Card className="bg-green-500/15 backdrop-blur-sm border-white/20 p-6">
                <CardContent className="p-0 space-y-4">
                  <div className="flex flex-col items-center text-center">
                    <div className="text-3xl font-bold text-primary mb-2">01</div>
                    <h3 className="text-xl font-semibold mb-3">Initial Consultation</h3>
                    <p className="text-muted-foreground text-sm">
                      30-minute discovery call to understand your business goals and current state.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Stage 2 */}
              <Card className="bg-green-500/15 backdrop-blur-sm border-white/20 p-6">
                <CardContent className="p-0 space-y-4">
                  <div className="flex flex-col items-center text-center">
                    <div className="text-3xl font-bold text-primary mb-2">02</div>
                    <h3 className="text-xl font-semibold mb-3">Comprehensive Assessment</h3>
                    <p className="text-muted-foreground text-sm">
                      Detailed evaluation of your systems, data, processes, and team capabilities.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Stage 3 */}
              <Card className="bg-green-500/15 backdrop-blur-sm border-white/20 p-6">
                <CardContent className="p-0 space-y-4">
                  <div className="flex flex-col items-center text-center">
                    <div className="text-3xl font-bold text-primary mb-2">03</div>
                    <h3 className="text-xl font-semibold mb-3">Analysis & Strategy</h3>
                    <p className="text-muted-foreground text-sm">
                      Expert analysis with customised AI roadmap and implementation recommendations.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Stage 4 */}
              <Card className="bg-green-500/15 backdrop-blur-sm border-white/20 p-6">
                <CardContent className="p-0 space-y-4">
                  <div className="flex flex-col items-center text-center">
                    <div className="text-3xl font-bold text-primary mb-2">04</div>
                    <h3 className="text-xl font-semibold mb-3">Report & Follow-up</h3>
                    <p className="text-muted-foreground text-sm">
                      Detailed report delivery with ongoing consultation and support options.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mt-8">
              <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700" onClick={() => {
              const element = document.getElementById('ai-lead-form');
              if (element) {
                element.scrollIntoView({
                  behavior: 'smooth'
                });
              }
            }}>
                Schedule Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* What's Included in Your Audit */}
        <section className="container py-6 sm:py-8 md:py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">What's Included in Your Audit</h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
                Comprehensive evaluation covering all aspects of AI readiness
              </p>
            </div>
            
            <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto">
              <Card className="bg-green-500/15 backdrop-blur-sm border-white/20 p-6">
                <CardContent className="p-0 space-y-4">
                  <div className="flex items-center gap-3">
                    <Target className="w-8 h-8 text-primary" />
                    <h3 className="text-lg font-semibold">Comprehensive business readiness evaluation</h3>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-green-500/15 backdrop-blur-sm border-white/20 p-6">
                <CardContent className="p-0 space-y-4">
                  <div className="flex items-center gap-3">
                    <Zap className="w-8 h-8 text-primary" />
                    <h3 className="text-lg font-semibold">Technology infrastructure assessment</h3>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-green-500/15 backdrop-blur-sm border-white/20 p-6">
                <CardContent className="p-0 space-y-4">
                  <div className="flex items-center gap-3">
                    <Brain className="w-8 h-8 text-primary" />
                    <h3 className="text-lg font-semibold">Data quality and governance review</h3>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-green-500/15 backdrop-blur-sm border-white/20 p-6">
                <CardContent className="p-0 space-y-4">
                  <div className="flex items-center gap-3">
                    <Users className="w-8 h-8 text-primary" />
                    <h3 className="text-lg font-semibold">Team skills and training gap analysis</h3>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-green-500/15 backdrop-blur-sm border-white/20 p-6">
                <CardContent className="p-0 space-y-4">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-8 h-8 text-primary" />
                    <h3 className="text-lg font-semibold">Regulatory compliance evaluation</h3>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-green-500/15 backdrop-blur-sm border-white/20 p-6">
                <CardContent className="p-0 space-y-4">
                  <div className="flex items-center gap-3">
                    <RotateCcw className="w-8 h-8 text-primary" />
                    <h3 className="text-lg font-semibold">ROI projections and budget planning</h3>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-green-500/15 backdrop-blur-sm border-white/20 p-6">
                <CardContent className="p-0 space-y-4">
                  <div className="flex items-center gap-3">
                    <Share2 className="w-8 h-8 text-primary" />
                    <h3 className="text-lg font-semibold">Phased implementation roadmap</h3>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-green-500/15 backdrop-blur-sm border-white/20 p-6">
                <CardContent className="p-0 space-y-4">
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-8 h-8 text-primary" />
                    <h3 className="text-lg font-semibold">Risk mitigation strategies</h3>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>


        {/* Lead Form */}
        <div id="ai-lead-form">
          <AILeadForm formTag="Ai-Audit" title="Ready to Unlock Your AI Brain?" subtitle="Book your AI Audit today and discover how to transform your business with AI solutions that drive real results." />
        </div>

      </main>

      <SiteFooter />
    </div>;
}