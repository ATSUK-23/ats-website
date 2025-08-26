import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import HeroSection from "@/components/sections/HeroSection";
import SplitSection from "@/components/sections/SplitSection";
import { Contact } from "@/components/sections/Contact";
import { Phone, MessageCircle, Calendar, Users, TrendingUp, Clock, Shield, Zap, CheckCircle, Star } from "lucide-react";
const VoiceAI = () => {
  return <>
      <Helmet>
        <title>Voice AI Solutions - Human-Like AI Voice & Chat Assistants | Automate To Sell</title>
        <meta name="description" content="Elevate your business with human-like AI voice and chat assistants. Delight customers, capture leads, and grow revenue 24/7. No coding required." />
      </Helmet>

      <SiteHeader />
      
      <main>
        {/* Hero Section */}
        <HeroSection title="Elevate Your Business With Human-Like AI Voice & Chat Assistants" subtitle="Delight customers, capture more leads, and grow revenue with AI-powered voice and chat that works 24/7. No coding, no complexity—just results." ctaText="Start Free Trial" ctaLink="https://www.automatetosell.com/ats-application" backgroundImage="/lovable-uploads/a0a37eb9-ee13-49f7-b089-029ad1a11537.png" className="min-h-[70vh]">
          <div className="mt-8 flex items-center justify-center gap-4">
            <a href="https://www.automatetosell.com/ats-application" target="_blank" rel="noreferrer">
              <Button variant="outline" size="lg" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                See Pricing
              </Button>
            </a>
          </div>
        </HeroSection>

        {/* Social Proof */}
        <section className="py-16 bg-muted/50">
          <div className="container text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">
              Trusted by businesses worldwide to power millions of conversations
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Millions of calls & messages delivered</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">99.99998% uptime</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Proven at scale in multiple industries</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Thousands of businesses already using AI assistants</span>
              </div>
            </div>
          </div>
        </section>

        {/* Outbound AI Use Cases */}
        <section className="py-16">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Grow Revenue With Smarter Outbound Calls
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <CardContent className="space-y-4">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold">Lead Generation</h3>
                  <p className="text-sm text-muted-foreground">
                    Supercharge your pipeline with AI-driven calls that qualify and convert new leads.
                  </p>
                </CardContent>
              </Card>
              <Card className="p-6 text-center">
                <CardContent className="space-y-4">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold">Lead Revivals</h3>
                  <p className="text-sm text-muted-foreground">
                    Re-engage dormant prospects, turning lost opportunities into new sales.
                  </p>
                </CardContent>
              </Card>
              <Card className="p-6 text-center">
                <CardContent className="space-y-4">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold">Meeting Scheduling & Reminders</h3>
                  <p className="text-sm text-muted-foreground">
                    Never miss a meeting AI handles bookings, confirmations, and reminders automatically.
                  </p>
                </CardContent>
              </Card>
              <Card className="p-6 text-center">
                <CardContent className="space-y-4">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold">Information Collection & Reviews</h3>
                  <p className="text-sm text-muted-foreground">
                    Capture valuable feedback and insights with AI-led surveys and reviews.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Inbound AI Use Cases */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Never Miss Another Opportunity
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <CardContent className="space-y-4">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold">Inbound Lead Generation</h3>
                  <p className="text-sm text-muted-foreground">
                    Instantly capture leads from incoming calls and inquiries.
                  </p>
                </CardContent>
              </Card>
              <Card className="p-6 text-center">
                <CardContent className="space-y-4">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold">Customer Support & Service</h3>
                  <p className="text-sm text-muted-foreground">
                    Deliver round-the-clock assistance with AI that answers FAQs and solves common issues.
                  </p>
                </CardContent>
              </Card>
              <Card className="p-6 text-center">
                <CardContent className="space-y-4">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold">Speed to Lead</h3>
                  <p className="text-sm text-muted-foreground">
                    Respond to new inquiries instantly, boosting conversion rates by engaging prospects at the right moment.
                  </p>
                </CardContent>
              </Card>
              <Card className="p-6 text-center">
                <CardContent className="space-y-4">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold">Appointment Management</h3>
                  <p className="text-sm text-muted-foreground">
                    Let AI handle scheduling, confirmations, and rescheduling seamlessly.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Simplicity & Speed */}
        <section className="py-16">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Launch in Minutes, No Tech Headaches
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="space-y-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">No coding or IT support required</h3>
              </div>
              <div className="space-y-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">AI assistants that feel natural and human</h3>
              </div>
              <div className="space-y-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Set up once, and start saving time and closing more deals immediately</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Enterprise Reliability */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                AI That Scales As You Grow
              </h2>
              <p className="text-lg text-muted-foreground">
                Unlike cheap, consumer-grade tools, Assistable is built for business:
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Handles thousands of conversations without breaking</h3>
              </div>
              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Seamless CRM and system integrations</h3>
              </div>
              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Backed by enterprise-grade uptime and security</h3>
              </div>
            </div>
            
            {/* Testimonial */}
            <Card className="max-w-4xl mx-auto p-8">
              <CardContent className="text-center space-y-4">
                <div className="flex justify-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map(star => <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />)}
                </div>
                <blockquote className="text-lg italic">
                  "After testing multiple providers, Assistable was the only one that handled over 25,000 calls flawlessly. Reliability and features are unmatched."
                </blockquote>
                <cite className="text-muted-foreground font-medium">Maurice M.</cite>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Simple, Scalable Pricing
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Pick the plan that fits your business upgrade as you grow.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="p-6">
                <CardContent className="space-y-4">
                  <h3 className="text-xl font-bold">Starter</h3>
                  <p className="text-sm text-muted-foreground">For businesses just getting started with AI.</p>
                </CardContent>
              </Card>
              <Card className="p-6">
                <CardContent className="space-y-4">
                  <h3 className="text-xl font-bold">Growth</h3>
                  <p className="text-sm text-muted-foreground">For scaling teams ready to expand reach.</p>
                </CardContent>
              </Card>
              <Card className="p-6">
                <CardContent className="space-y-4">
                  <h3 className="text-xl font-bold">Pro</h3>
                  <p className="text-sm text-muted-foreground">For businesses running at high volume.</p>
                </CardContent>
              </Card>
              <Card className="p-6">
                <CardContent className="space-y-4">
                  <h3 className="text-xl font-bold">Enterprise</h3>
                  <p className="text-sm text-muted-foreground">For 100+ sub-accounts and dedicated support.</p>
                </CardContent>
              </Card>
            </div>
            <div className="flex items-center justify-center gap-4">
              <a href="https://www.automatetosell.com/ats-application" target="_blank" rel="noreferrer">
                <Button variant="outline" size="lg">View Pricing Plans</Button>
              </a>
              <a href="https://www.automatetosell.com/ats-application" target="_blank" rel="noreferrer">
                <Button variant="hero" size="lg">Start Free Trial</Button>
              </a>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Your Customers Expect Speed. Your Business Deserves Growth.
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Put AI to work for you capture every lead, delight every customer, and scale without limits.
            </p>
            <a href="https://www.automatetosell.com/ats-application" target="_blank" rel="noreferrer">
              <Button variant="secondary" size="lg">
                Start Your Free Trial Today
              </Button>
            </a>
          </div>
        </section>

        <Contact />
      </main>

      <SiteFooter />
    </>;
};
export default VoiceAI;