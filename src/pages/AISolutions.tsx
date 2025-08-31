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

        {/* Discovery Call Section */}
        <section className="container py-12 sm:py-16 md:py-24 px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Let's Start With a Discovery Call</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Before we dive into an AI Audit, we begin with a 60–90 minute discovery call to align on your goals, challenges, and opportunities. This ensures the audit is tailored to your business.
            </p>
          </div>
          
          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-8">
            <Card className="bg-card border">
              <CardContent className="p-6 text-center">
                <Target className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-semibold mb-2">Understand Your Business</h3>
                <p className="text-sm text-muted-foreground">We'll discuss your business model, current priorities, and the challenges you're facing.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border">
              <CardContent className="p-6 text-center">
                <Zap className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-semibold mb-2">Identify AI Opportunities</h3>
                <p className="text-sm text-muted-foreground">Together, we'll explore where AI might add the most value — whether it's growth, efficiency, or customer experience.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border">
              <CardContent className="p-6 text-center">
                <RotateCcw className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-semibold mb-2">Assess Current Readiness</h3>
                <p className="text-sm text-muted-foreground">We'll get a high-level view of your existing systems, data, and any AI initiatives already in motion.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border">
              <CardContent className="p-6 text-center">
                <Share2 className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-semibold mb-2">Define Next Steps</h3>
                <p className="text-sm text-muted-foreground">By the end of the call, you'll have clarity on whether an AI Audit is the right move and how we'd structure it for you.</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center">
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              This isn't a sales pitch — it's a conversation designed to help you see what's possible and decide if moving forward makes sense.
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="container py-12 sm:py-16 md:py-24 px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Building Your AI Brain With Our AI Audit Process</h2>
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