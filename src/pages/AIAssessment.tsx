import { Helmet } from "react-helmet-async";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Database, Users, Settings, Shield, Zap, CheckCircle, BarChart3, Users2, Cog, ShieldCheck, Bolt } from "lucide-react";

const AIAssessment = () => {
  const domains = [
    {
      icon: Target,
      title: "Strategic Foundation",
      description: "Leadership commitment & AI strategy alignment"
    },
    {
      icon: Database,
      title: "Data & Infrastructure", 
      description: "Technical readiness & data quality"
    },
    {
      icon: Users,
      title: "Organisational Intelligence",
      description: "Team skills & AI literacy"
    },
    {
      icon: Settings,
      title: "Operational Excellence",
      description: "Process optimisation & automation readiness"
    },
    {
      icon: Shield,
      title: "Risk & Governance",
      description: "AI ethics, compliance & security"
    },
    {
      icon: Zap,
      title: "Innovation Velocity",
      description: "Speed of adoption & experimentation culture"
    }
  ];

  const benefits = [
    {
      icon: BarChart3,
      title: "Get a clear picture of your AI integration gaps"
    },
    {
      icon: Target,
      title: "Receive a personalised roadmap for AI adoption"
    },
    {
      icon: Users2,
      title: "Understand your organisational AI maturity level"
    },
    {
      icon: Cog,
      title: "Identify high-impact opportunities for automation"
    },
    {
      icon: ShieldCheck,
      title: "Access expert recommendations tailored to your business"
    },
    {
      icon: Bolt,
      title: "Schedule a free 30-minute consultation to discuss results"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Integration Assessment | Discover Your AI Potential</title>
        <meta name="description" content="Take our comprehensive AI Integration Assessment to discover where your business stands with AI and get a personalised roadmap for successful integration." />
        <meta name="keywords" content="AI assessment, AI integration, business AI audit, AI readiness, AI maturity" />
      </Helmet>

      <SiteHeader />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-20 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
          
          <div className="container text-center relative z-10 px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              AI Integration Assessment
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
              Discover exactly where your business stands with AI and get a personalised roadmap for successful integration. Take our short curated unique AI Integration Assessment to get started.
            </p>
            
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 mb-8 text-lg px-8 py-4">
              Start Your Assessment
            </Button>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Free assessment</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Instant results</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>No email required</span>
              </div>
            </div>
          </div>
        </section>

        {/* 6 Key Domains Section */}
        <section className="py-16 sm:py-20 bg-muted/30">
          <div className="container px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">
              We'll Assess Your Organisation Across 6 Key Domains
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {domains.map((domain, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <domain.icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{domain.title}</h3>
                    <p className="text-muted-foreground">{domain.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 sm:py-20">
          <div className="container px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">
              What You'll Get From This Assessment
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/30 transition-colors">
                  <div className="flex-shrink-0">
                    <div className="p-2 rounded-full bg-green-100 dark:bg-green-900/30">
                      <benefit.icon className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                  </div>
                  <p className="text-lg text-foreground">{benefit.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-r from-primary to-secondary">
          <div className="container text-center px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
              Ready to Discover Your AI Potential?
            </h2>
            <p className="text-lg sm:text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
              Join hundreds of business leaders who've already taken this assessment
            </p>
            
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-background text-foreground hover:bg-background/90 text-lg px-8 py-4"
            >
              Begin Assessment Now
            </Button>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
};

export default AIAssessment;