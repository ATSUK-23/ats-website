import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import SplitSection from "@/components/sections/SplitSection";
import HeroSection from "@/components/sections/HeroSection";
import aiBrainHero from "@/assets/ai-brain-hero.jpg";
import aiKnowledgeComparison from "@/assets/ai-knowledge-comparison.jpg";
import aiProcessSteps from "@/assets/ai-process-steps.jpg";
import aiServicesGrid from "@/assets/ai-services-grid.jpg";
import industriesServed from "@/assets/industries-served.jpg";
import martinKeeneProfile from "@/assets/martin-keene-profile.jpeg";
import { Brain, Zap, Users, TrendingUp, Phone, MessageSquare, ShoppingCart, Target, RotateCcw, Share2 } from "lucide-react";

export default function AISolutions() {
  console.log('AI Solutions page rendering', { aiBrainHero, aiKnowledgeComparison });
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>AI Solutions - Unleash the AI Brain in Your Business | Automate to Sell</title>
        <meta name="description" content="AI solutions that delight customers, boost sales, increase efficiency, slash costs & maximize profits. We help develop your AI strategy and manage implementation." />
      </Helmet>

      <SiteHeader />

      <main>
        {/* Hero Section */}
        <HeroSection
          title="UNLEASH THE AI BRAIN IN YOUR BUSINESS"
          subtitle="AI solutions that delight your customers, boost sales, increase efficiency, slash costs & maximise profits."
          ctaText="Book an Introduction Call"
          ctaLink="#contact"
          backgroundImage={aiBrainHero}
          className="py-24 md:py-32"
        />

        {/* Description under hero */}
        <section className="container py-16 text-center">
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            We help develop your AI strategy, source the best tech solution partners, and even manage implementation — letting you focus on looking after clients!
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Button variant="outline" size="lg">How It Works</Button>
          </div>
        </section>

        {/* AI Brain Power Section */}
        <SplitSection
          id="ai-brain-power"
          title="Unlock the Power of Your Company's AI Brain"
          description={
            <p>
              Imagine having all your company's best knowledge — from marketing materials to sales proposals, onboarding guides, training resources, and service insights — in one intelligent system, available 24/7.
              <br /><br />
              Your AI Brain consolidates your business's expertise into a central hub, enabling prospects and customers to get instant, natural, real-time answers — without waiting for a reply or sifting through endless content.
            </p>
          }
          image={aiKnowledgeComparison}
          imageAlt="AI knowledge comparison showing scattered documents vs organized AI system"
        />

        {/* How It Works Section */}
        <SplitSection
          id="how-it-works"
          title="How It Works"
          description={
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">1</div>
                <div>
                  <h3 className="font-semibold text-lg">Centralise Your Knowledge</h3>
                  <p className="text-muted-foreground">Load your key business information into your AI Brain, making it the smartest "team member" in your organisation.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">2</div>
                <div>
                  <h3 className="font-semibold text-lg">Instant Discovery</h3>
                  <p className="text-muted-foreground">24/7 access via text or voice, on any device, delivering the right answers immediately.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">3</div>
                <div>
                  <h3 className="font-semibold text-lg">Maximise Team Efficiency</h3>
                  <p className="text-muted-foreground">AI qualifies needs, routes complex cases to the right team member, and leaves your people free for high-value work.</p>
                </div>
              </div>
            </div>
          }
          image={aiProcessSteps}
          imageAlt="Three-step AI implementation process"
          reverse
        >
          <Button size="lg" className="mt-6">See AI Brain in Action</Button>
        </SplitSection>

        {/* Benefits Section */}
        <section className="container py-16 md:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Why Your Business Needs an AI Brain</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="bg-card border">
              <CardContent className="p-6 text-center">
                <TrendingUp className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Accelerate Sales</h3>
                <p className="text-muted-foreground">Faster decisions, faster cash flow.</p>
              </CardContent>
            </Card>
            <Card className="bg-card border">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Enhance Customer Experience</h3>
                <p className="text-muted-foreground">Instant, accurate answers build trust and loyalty.</p>
              </CardContent>
            </Card>
            <Card className="bg-card border">
              <CardContent className="p-6 text-center">
                <Zap className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Unlock New Opportunities</h3>
                <p className="text-muted-foreground">Analyse interaction data to find new product and service gaps.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* AI Solutions Grid */}
        <SplitSection
          id="ai-solutions-grid"
          title="What AI Solutions Can We Create For You?"
          description={
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-3">
                <MessageSquare className="w-6 h-6 text-primary" />
                <span>Talking Websites – Enable voice-based customer interactions</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-6 h-6 text-primary" />
                <span>24/7 Multi-Tasking Receptionist – Handle enquiries around the clock</span>
              </div>
              <div className="flex items-center gap-3">
                <ShoppingCart className="w-6 h-6 text-primary" />
                <span>Intelligent Digital Store Assistant – Guide customers pre- and post-purchase</span>
              </div>
              <div className="flex items-center gap-3">
                <Target className="w-6 h-6 text-primary" />
                <span>Speed To Lead Forms – Capture leads before they disappear</span>
              </div>
              <div className="flex items-center gap-3">
                <RotateCcw className="w-6 h-6 text-primary" />
                <span>Maximise Conversions – Re-engage old leads automatically</span>
              </div>
              <div className="flex items-center gap-3">
                <Share2 className="w-6 h-6 text-primary" />
                <span>Social Agents – Automate engagement with social media prospects</span>
              </div>
            </div>
          }
          image={aiServicesGrid}
          imageAlt="Grid of AI automation services"
        />

        {/* Ongoing Support Section */}
        <section className="container py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ongoing AI Support & Growth</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Your AI Brain evolves over time. We work with solution partners to train and optimise it, ensuring your business always stays ahead.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
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

        {/* Launch Process */}
        <SplitSection
          id="launch-process"
          title="The 3-Step Launch Process"
          description={
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-semibold text-lg">Discovery Call</h3>
                  <p className="text-muted-foreground">Identify business processes to improve.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-semibold text-lg">AI Brain Strategy</h3>
                  <p className="text-muted-foreground">Get a high-level report with opportunities, priorities, and a roadmap.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-semibold text-lg">Solution Partner Match</h3>
                  <p className="text-muted-foreground">We source, brief, and connect you with the best providers.</p>
                </div>
              </div>
            </div>
          }
          image={aiProcessSteps}
          imageAlt="Three-step launch process diagram"
          reverse
        />

        {/* Industries Section */}
        <SplitSection
          id="industries"
          title="Industries We Serve"
          description={
            <div>
              <p className="mb-6">We've delivered AI automation solutions for:</p>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 text-sm">
                <div>• HVAC</div>
                <div>• E-commerce sellers</div>
                <div>• Law firms</div>
                <div>• Call centres</div>
                <div>• Accountants</div>
                <div>• Trades</div>
                <div>• Real estate</div>
                <div>• Beauty & wellness</div>
                <div>• Restaurants</div>
                <div>• Automotive services</div>
                <div>• Pet care</div>
                <div>• And more...</div>
              </div>
            </div>
          }
          image={industriesServed}
          imageAlt="Industries we serve icons"
        />

        {/* About Founder */}
        <SplitSection
          id="founder"
          title="Meet Martin Keene"
          description={
            <div>
              <p className="mb-4">
                With 20+ years of digital innovation experience, Martin brings deep expertise in e-commerce and automation to help businesses transform through AI.
              </p>
              <p className="mb-4">
                Having worked with major clients generating $50m–$60m in revenues, Martin combines global experience with practical implementation knowledge.
              </p>
              <p className="mb-6">
                His international background and proven track record make him the ideal partner to guide your AI transformation journey.
              </p>
              <Button variant="outline" asChild>
                <a href="https://www.linkedin.com/in/martinkeene/" target="_blank" rel="noopener noreferrer">
                  View LinkedIn Profile
                </a>
              </Button>
            </div>
          }
          image={martinKeeneProfile}
          imageAlt="Martin Keene, Founder"
          reverse
        />

        {/* Final CTA */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <img 
              src={aiBrainHero} 
              alt="" 
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-background/80" />
          </div>
          
          <div className="container text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to Unlock Your AI Brain?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Transform your business with AI solutions that drive real results.
            </p>
            <Button size="lg" className="text-lg px-8 py-4">
              Book an Introduction Call
            </Button>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}