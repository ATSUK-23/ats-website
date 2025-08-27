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
        <HeroSection title="UNLEASH THE AI BRAIN IN YOUR BUSINESS" subtitle="Create AI solutions that delight your customers, boost sales, increase efficiency, slash costs & maximise profits" ctaText="Book an Introduction Call" ctaLink="#contact" backgroundImage={aiBrainBackground} className="py-16 md:py-24">
          <p className="text-lg text-white/90 max-w-4xl mx-auto mt-6">We help develop your AI strategy, source the best tech solution partners, and even manage implementation letting you focus on looking after clients!</p>
        </HeroSection>

        {/* AI Brain Power Section */}
        <SplitSection id="ai-brain-power" title="Unlock the Power of Your Company's AI Brain" description={<p>
              Imagine having all your company&apos;s best knowledge, everything in your team&apos;s heads, your marketing materials, sales proposals, onboarding guides, training and your service insights...all in one place and available to prospects 24/7?
              <br /><br />
              Your AI brain does just that.
              <br /><br />
              It pulls together expertise from across your company and consolidates it into an intelligent system.
              <br /><br />
              By building an AI brain for your business, you can unleash the potential of this information, allowing your prospects to quickly and easily discover how your company can solve their unique problems.
              <br /><br />
              Instead of sifting through pages of content or waiting for someone on your team to explain or reply to them, prospects can find the exact answers they need with natural real-time responses on their schedule.
            </p>} image="/lovable-uploads/d39c706b-cc98-4891-a1c7-7bf1e885d1c0.png" imageAlt="AI Brain technology visualization showing circuit patterns and neural networks" />


        {/* How It Works Section */}
        <SplitSection id="how-it-works" title="How It Works" description={<div className="space-y-6">
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
            </div>} image={aiProcessSteps} imageAlt="Three-step AI implementation process" reverse>
          <Button size="lg" className="mt-6">See AI Brain in Action</Button>
        </SplitSection>

        {/* Benefits Section */}
        <section className="container py-12 sm:py-16 md:py-24 px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Why Your Business Needs an AI Brain</h2>
          </div>
          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 md:grid-cols-3">
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


        {/* Ongoing Support Section */}
        <section className="container py-12 sm:py-16 md:py-24 px-4">
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

        {/* Launch Process */}
        <SplitSection id="launch-process" title="The 3-Step Launch Process" description={<div className="space-y-6">
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
            </div>} image={aiProcessSteps} imageAlt="Three-step launch process diagram" reverse />


        {/* Final CTA */}
        <section className="relative py-16 sm:py-20 md:py-32 overflow-hidden">
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
              Book an Introduction Call
            </Button>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>;
}