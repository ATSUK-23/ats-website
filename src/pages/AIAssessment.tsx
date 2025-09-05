import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, Brain, Shield, Users, Zap, Settings, TrendingUp } from "lucide-react";

// Assessment data structure for reference (minimal version for results display)
const assessmentData = [
  {
    domain: "Strategic Foundation",
    description: "Leadership commitment, AI strategy alignment, and business case clarity",
    weight: 20,
    icon: Brain,
  },
  {
    domain: "Data & Infrastructure", 
    description: "Data quality, accessibility, infrastructure scalability, and technical readiness",
    weight: 25,
    icon: Settings,
  },
  {
    domain: "Organisational Intelligence",
    description: "Team skills, AI literacy, culture of innovation, and talent development",
    weight: 20,
    icon: Users,
  },
  {
    domain: "Operational Excellence",
    description: "Process optimisation, automation readiness, and workflow integration potential",
    weight: 15,
    icon: Zap,
  },
  {
    domain: "Risk & Governance",
    description: "AI ethics, compliance readiness, security frameworks, and risk management",
    weight: 10,
    icon: Shield,
  },
  {
    domain: "Innovation Velocity",
    description: "Speed of adoption, experimentation culture, and market responsiveness",
    weight: 10,
    icon: TrendingUp,
  }
];

const maturityLevels = {
  "AI Unaware": { min: 0, max: 25, color: "text-red-500", bgColor: "bg-red-100 dark:bg-red-950/20" },
  "AI Curious": { min: 26, max: 50, color: "text-orange-500", bgColor: "bg-orange-100 dark:bg-orange-950/20" },
  "AI Capable": { min: 51, max: 75, color: "text-blue-500", bgColor: "bg-blue-100 dark:bg-blue-950/20" },
  "AI Advanced": { min: 76, max: 100, color: "text-green-500", bgColor: "bg-green-100 dark:bg-green-950/20" }
};

const getMaturityLevel = (score: number) => {
  for (const [level, range] of Object.entries(maturityLevels)) {
    if (score >= range.min && score <= range.max) {
      return { level, ...range };
    }
  }
  return { level: "AI Unaware", ...maturityLevels["AI Unaware"] };
};

export default function AIAssessment() {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentView, setCurrentView] = useState<'intro' | 'results'>('intro');
  const [assessmentResults, setAssessmentResults] = useState<any>(null);

  // Check if results were passed from the questions page
  useEffect(() => {
    if (location.state?.assessmentResults) {
      setAssessmentResults(location.state.assessmentResults);
      setCurrentView('results');
    }
  }, [location.state]);

  const handleScheduleConsultation = () => {
    if (!assessmentResults) return;
    
    navigate('/ai-consultation', {
      state: {
        assessmentResults
      }
    });
  };

  const handleStartAssessment = () => {
    navigate('/assessment-questions');
  };

  // Use results if available, otherwise show default values
  const overallScore = assessmentResults?.overallScore || 0;
  const maturity = getMaturityLevel(overallScore);

  return (
    <>
      <Helmet>
        <title>AI Readiness Assessment | Advanced Technology Solutions</title>
        <meta name="description" content="Discover exactly where your business stands with AI and get a personalised roadmap for successful integration. Take our comprehensive 23-question assessment." />
      </Helmet>

      <SiteHeader />

      <main className="min-h-screen bg-background">
        {/* Introduction View */}
        {currentView === 'intro' && (
          <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
            <div className="container px-4 max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                AI Integration Audit
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Discover exactly where your business stands with AI and get a personalised roadmap for successful integration. Take our short curated unique AI Integration Assessment to get started.
              </p>
              
              <Button size="lg" onClick={handleStartAssessment} className="mb-4 bg-primary hover:bg-primary/90">
                Start Your Assessment
              </Button>
              
              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground mb-16">
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span>Free assessment</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span>Instant results</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span>23 comprehensive questions</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span>Personalised recommendations</span>
                </div>
              </div>

              {/* Assessment Overview */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {assessmentData.map((domain, index) => {
                  const Icon = domain.icon;
                  
                  return (
                    <Card key={index} className="hover:shadow-md transition-all duration-200">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 rounded-lg bg-muted/50">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold">{domain.domain}</h3>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <span>{domain.weight}% weight</span>
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-sm text-muted-foreground">
                          {domain.description}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              <div className="bg-muted/30 rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-4">What You'll Get</h2>
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div>
                    <h3 className="font-semibold mb-2">📊 Comprehensive Score</h3>
                    <p className="text-sm text-muted-foreground">Get your overall AI readiness percentage across all critical domains</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">🎯 Domain Breakdown</h3>
                    <p className="text-sm text-muted-foreground">See exactly where you excel and where improvement is needed</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">🚀 Actionable Recommendations</h3>
                    <p className="text-sm text-muted-foreground">Receive personalised next steps based on your maturity level</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">💬 Free Consultation</h3>
                    <p className="text-sm text-muted-foreground">Book a strategy session to discuss your results with our experts</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Results View */}
        {currentView === 'results' && assessmentResults && (
          <section className="py-16">
            <div className="container px-4 max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Your AI Readiness Results</h1>
                <p className="text-lg text-muted-foreground">
                  Based on your responses to {assessmentResults.answeredQuestions} questions
                </p>
              </div>

              {/* Overall Score */}
              <Card className="mb-8">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <div className={`text-5xl md:text-6xl font-bold mb-2 ${maturity.color}`}>
                      {Math.round(overallScore)}%
                    </div>
                    <div className={`text-2xl font-semibold mb-2 ${maturity.color}`}>
                      {maturity.level}
                    </div>
                    <p className="text-muted-foreground">
                      Your organization's overall AI readiness score
                    </p>
                  </div>
                  
                  <div className="max-w-md mx-auto">
                    <Progress value={overallScore} className="h-4" />
                  </div>
                </CardContent>
              </Card>

              {/* Domain Breakdown */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {assessmentResults.domainScores.map((domainResult: any, index: number) => {
                  const domain = assessmentData[index];
                  const Icon = domain.icon;
                  const domainScore = domainResult.score;
                  const domainMaturity = getMaturityLevel(domainScore);
                  
                  return (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <Icon className="h-6 w-6 text-primary" />
                          <div>
                            <h3 className="font-semibold">{domain.domain}</h3>
                            <p className="text-sm text-muted-foreground">Weight: {domain.weight}%</p>
                          </div>
                        </div>
                        
                        <div className="mb-3">
                          <div className="flex justify-between text-sm mb-1">
                            <span>Score</span>
                            <span className={`font-medium ${domainMaturity.color}`}>
                              {Math.round(domainScore)}% ({domainMaturity.level})
                            </span>
                          </div>
                          <Progress value={domainScore} className="h-2" />
                        </div>
                        
                        <p className="text-sm text-muted-foreground">
                          {domain.description}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Recommendations based on maturity level */}
              <Card className="mb-8">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Personalized Recommendations</h2>
                  
                  {maturity.level === "AI Unaware" && (
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-red-600">Priority Actions for AI Unaware Organizations</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Establish basic AI literacy through leadership education and training</li>
                        <li>• Develop a preliminary AI strategy aligned with business objectives</li>
                        <li>• Conduct data quality assessment and governance foundation</li>
                        <li>• Build change management capabilities and innovation culture</li>
                        <li>• Engage with AI specialists for strategic guidance</li>
                      </ul>
                    </div>
                  )}
                  
                  {maturity.level === "AI Curious" && (
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-orange-600">Growth Opportunities for AI Curious Organizations</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Formalize AI strategy with clear business cases and ROI projections</li>
                        <li>• Invest in data infrastructure and integration capabilities</li>
                        <li>• Expand AI skills through structured training programs</li>
                        <li>• Start with low-risk pilot projects to build confidence</li>
                        <li>• Establish governance frameworks and risk management practices</li>
                      </ul>
                    </div>
                  )}
                  
                  {maturity.level === "AI Capable" && (
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-blue-600">Advancement Path for AI Capable Organizations</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Scale successful AI initiatives across business functions</li>
                        <li>• Implement advanced analytics and automation solutions</li>
                        <li>• Develop AI center of excellence and specialized capabilities</li>
                        <li>• Enhance real-time integration and intelligent process optimization</li>
                        <li>• Explore cutting-edge AI technologies and market opportunities</li>
                      </ul>
                    </div>
                  )}
                  
                  {maturity.level === "AI Advanced" && (
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-green-600">Excellence Maintenance for AI Advanced Organizations</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Lead industry innovation with cutting-edge AI implementations</li>
                        <li>• Continuously optimize AI-powered business processes</li>
                        <li>• Share best practices and thought leadership in AI adoption</li>
                        <li>• Explore AI-driven new business models and revenue streams</li>
                        <li>• Maintain competitive advantage through continuous AI evolution</li>
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* CTA Section */}
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-8 text-center">
                  <h2 className="text-2xl font-bold mb-4">Ready to Take the Next Step?</h2>
                  <p className="text-muted-foreground mb-6">
                    Schedule a free 30-minute consultation to discuss your results and create a personalized AI implementation roadmap.
                  </p>
                  
                  <div className="flex flex-wrap justify-center gap-4">
                    <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={handleScheduleConsultation}>
                      Schedule Free Consultation
                    </Button>
                    <Button size="lg" variant="outline" onClick={() => {
                      setAssessmentResults(null);
                      setCurrentView('intro');
                    }}>
                      Retake Assessment
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
}