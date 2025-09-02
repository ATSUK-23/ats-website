import { Helmet } from "react-helmet-async";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Target, Database, Users, Settings, Shield, Zap, CheckCircle, BarChart3, Users2, Cog, ShieldCheck, Bolt, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

const AIAssessment = () => {
  const [currentView, setCurrentView] = useState<'intro' | 'progress' | 'domains' | 'question'>('intro');
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const totalQuestions = 23;
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
        {currentView === 'intro' && (
        <>
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
            
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 mb-8 text-lg px-8 py-4"
              onClick={() => setCurrentView('progress')}
            >
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
              onClick={() => setCurrentView('progress')}
            >
              Begin Assessment Now
            </Button>
          </div>
        </section>
        </>
        )}

        {/* Assessment Progress View */}
        {currentView === 'progress' && (
          <section className="py-8 bg-background min-h-screen">
            <div className="container px-4 max-w-6xl mx-auto">
              {/* Header */}
              <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold">Assessment Progress</h1>
                <span className="text-muted-foreground">{currentQuestion} of {totalQuestions} questions completed</span>
              </div>

              {/* Overall Progress */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Overall Progress</span>
                  <span className="text-sm text-muted-foreground">{Math.round((currentQuestion / totalQuestions) * 100)}% complete</span>
                </div>
                <Progress value={(currentQuestion / totalQuestions) * 100} className="h-3" />
              </div>

              {/* Domain Progress Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {[
                  { title: "Strategic Foundation", completed: 0, total: 4 },
                  { title: "Data & Infrastructure", completed: 0, total: 5 },
                  { title: "Organisational Intelligence", completed: 0, total: 4 },
                  { title: "Operational Excellence", completed: 0, total: 4 },
                  { title: "Risk & Governance", completed: 0, total: 3 },
                  { title: "Innovation Velocity", completed: 0, total: 3 }
                ].map((domain, index) => (
                  <Card key={index} className="bg-card border-2">
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-2">{domain.title}</h3>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-muted-foreground">{domain.completed}/{domain.total}</span>
                      </div>
                      <Progress value={(domain.completed / domain.total) * 100} className="h-2" />
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex justify-center gap-4">
                <Button 
                  variant="outline" 
                  onClick={() => setCurrentView('domains')}
                  className="px-8"
                >
                  View Assessment Domains
                </Button>
                <Button 
                  onClick={() => setCurrentView('question')}
                  className="px-8"
                >
                  Continue Assessment
                </Button>
              </div>
            </div>
          </section>
        )}

        {/* Assessment Domains View */}
        {currentView === 'domains' && (
          <section className="py-8 bg-background min-h-screen">
            <div className="container px-4 max-w-4xl mx-auto">
              <Card className="bg-card border-2">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Assessment Domains</h2>
                  
                  <div className="space-y-6">
                    {[
                      {
                        title: "Strategic Foundation",
                        description: "Leadership commitment, AI strategy alignment, and business case clarity",
                        questions: 4,
                        weight: 20,
                        active: true
                      },
                      {
                        title: "Data & Infrastructure", 
                        description: "Data quality, accessibility, infrastructure scalability, and technical readiness",
                        questions: 5,
                        weight: 25,
                        active: false
                      },
                      {
                        title: "Organisational Intelligence",
                        description: "Team skills, AI literacy, culture of innovation, and talent development", 
                        questions: 4,
                        weight: 20,
                        active: false
                      },
                      {
                        title: "Operational Excellence",
                        description: "Process optimisation, automation readiness, and workflow integration potential",
                        questions: 4, 
                        weight: 15,
                        active: false
                      },
                      {
                        title: "Risk & Governance",
                        description: "AI ethics, compliance readiness, security frameworks, and risk management",
                        questions: 3,
                        weight: 10,
                        active: false
                      },
                      {
                        title: "Innovation Velocity",
                        description: "Speed of adoption, experimentation culture, and market responsiveness",
                        questions: 3,
                        weight: 10,
                        active: false
                      }
                    ].map((domain, index) => (
                      <div key={index} className={`flex items-start gap-4 p-4 rounded-lg border ${domain.active ? 'bg-primary/5 border-primary/20' : 'bg-muted/30 border-muted'}`}>
                        <div className="flex-shrink-0 mt-1">
                          {domain.active ? (
                            <Clock className="h-5 w-5 text-primary" />
                          ) : (
                            <div className="h-5 w-5 rounded-full border-2 border-muted-foreground" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-lg font-semibold text-primary">{domain.title}</h3>
                            <span className="text-sm text-muted-foreground">{domain.questions} questions • {domain.weight}% weight</span>
                          </div>
                          <p className="text-muted-foreground mb-2">{domain.description}</p>
                          {domain.active && (
                            <p className="text-sm text-primary font-medium">→ Currently answering questions in this domain</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center gap-4 mt-8">
                    <Button 
                      variant="outline" 
                      onClick={() => setCurrentView('progress')}
                      className="px-8"
                    >
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Back to Progress
                    </Button>
                    <Button 
                      onClick={() => setCurrentView('question')}
                      className="px-8"
                    >
                      Start Questions
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        )}

        {/* Question View */}
        {currentView === 'question' && (
          <section className="py-8 bg-background min-h-screen">
            <div className="container px-4 max-w-4xl mx-auto">
              {/* Question Header */}
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-lg font-medium">Question {currentQuestion} of {totalQuestions}</h2>
                <span className="text-lg font-medium text-primary">Strategic Foundation</span>
              </div>

              <Card className="bg-card border-2">
                <CardContent className="p-8">
                  <h1 className="text-2xl font-bold mb-8">
                    How would you describe your organisation's current AI strategy and leadership commitment?
                  </h1>

                  <RadioGroup className="space-y-4">
                    {[
                      "No formal AI strategy exists; leadership shows minimal interest",
                      "Informal discussions about AI, but no clear direction or commitment", 
                      "Basic AI strategy drafted with moderate leadership buy-in",
                      "Comprehensive AI strategy with strong leadership commitment and clear goals"
                    ].map((option, index) => (
                      <div key={index} className="flex items-start space-x-3 p-4 rounded-lg border border-muted hover:bg-muted/30 transition-colors">
                        <RadioGroupItem value={option} id={`option-${index}`} className="mt-1" />
                        <Label htmlFor={`option-${index}`} className="text-base leading-relaxed cursor-pointer flex-1">
                          {option}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>

                  {/* Navigation */}
                  <div className="flex justify-between items-center mt-8">
                    <Button 
                      variant="outline" 
                      onClick={() => setCurrentView('domains')}
                      className="px-6"
                    >
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Back to Intro
                    </Button>
                    
                    <span className="text-muted-foreground">{currentQuestion} of {totalQuestions}</span>
                    
                    <Button 
                      className="px-6"
                      onClick={() => {
                        if (currentQuestion < totalQuestions) {
                          setCurrentQuestion(currentQuestion + 1);
                        }
                      }}
                    >
                      Next
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        )}
      </main>

      <SiteFooter />
    </>
  );
};

export default AIAssessment;