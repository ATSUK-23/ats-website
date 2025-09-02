import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CheckCircle2, Circle, Clock, ArrowLeft, ArrowRight, Brain, Shield, Users, Zap, Settings, TrendingUp } from "lucide-react";

// Assessment data structure
const assessmentData = [
  {
    domain: "Strategic Foundation",
    description: "Leadership commitment, AI strategy alignment, and business case clarity",
    questions: 4,
    weight: 20,
    icon: Brain,
    questions_list: [
      {
        id: 1,
        text: "How would you describe your organisation's current AI strategy and leadership commitment?",
        options: [
          "No formal AI strategy exists; leadership shows minimal interest",
          "Informal discussions about AI, but no clear direction or commitment",
          "Basic AI strategy drafted with moderate leadership buy-in",
          "Comprehensive AI strategy with strong leadership commitment and clear goals"
        ]
      },
      {
        id: 2,
        text: "How well does your AI initiative align with your overall business strategy?",
        options: [
          "No clear alignment; AI is seen as separate from business goals",
          "Some alignment exists but lacks clear connection to business outcomes",
          "Moderate alignment with some defined business use cases",
          "Strong alignment with clear business outcomes and measurable value"
        ]
      },
      {
        id: 3,
        text: "What is the current state of your business case for AI implementation?",
        options: [
          "No business case developed",
          "Basic business case with limited ROI analysis",
          "Solid business case with clear ROI projections",
          "Comprehensive business case with detailed cost-benefit analysis and success metrics"
        ]
      },
      {
        id: 4,
        text: "How would you rate your organization's understanding of AI risks and benefits?",
        options: [
          "Limited understanding of both risks and benefits",
          "Basic understanding with some awareness of key considerations",
          "Good understanding of main risks and benefits",
          "Comprehensive understanding with detailed risk mitigation strategies"
        ]
      }
    ]
  },
  {
    domain: "Data & Infrastructure",
    description: "Data quality, accessibility, infrastructure scalability, and technical readiness",
    questions: 5,
    weight: 25,
    icon: Settings,
    questions_list: [
      {
        id: 5,
        text: "How would you assess the quality and accessibility of your organisation's data?",
        options: [
          "Poor data quality with limited accessibility",
          "Moderate data quality with some accessibility challenges",
          "Good data quality with reasonable accessibility",
          "Excellent data quality with high accessibility and governance"
        ]
      },
      {
        id: 6,
        text: "What is the current state of your data infrastructure and storage capabilities?",
        options: [
          "Limited infrastructure with significant constraints",
          "Basic infrastructure meeting current needs",
          "Scalable infrastructure with room for growth",
          "Advanced, cloud-native infrastructure optimized for AI workloads"
        ]
      },
      {
        id: 7,
        text: "How mature are your data governance and security practices?",
        options: [
          "Basic or no data governance practices",
          "Some governance policies but inconsistent implementation",
          "Well-established governance with regular compliance",
          "Advanced governance with automated compliance and security"
        ]
      },
      {
        id: 8,
        text: "What is your organization's current technical infrastructure readiness for AI?",
        options: [
          "Minimal technical readiness requiring significant investment",
          "Basic readiness with some infrastructure gaps",
          "Good readiness with minor upgrades needed",
          "Excellent readiness with AI-optimized infrastructure"
        ]
      },
      {
        id: 9,
        text: "How effective are your current data integration and API capabilities?",
        options: [
          "Limited integration capabilities with manual processes",
          "Basic integration with some automated workflows",
          "Good integration capabilities with standardized APIs",
          "Advanced integration with real-time data flows and microservices"
        ]
      }
    ]
  },
  {
    domain: "Organisational Intelligence",
    description: "Team skills, AI literacy, culture of innovation, and talent development",
    questions: 4,
    weight: 20,
    icon: Users,
    questions_list: [
      {
        id: 10,
        text: "What is the current level of AI literacy and skills within your organization?",
        options: [
          "Limited AI knowledge across the organization",
          "Basic AI awareness with few skilled individuals",
          "Moderate AI literacy with some specialized expertise",
          "High AI literacy with strong technical capabilities"
        ]
      },
      {
        id: 11,
        text: "How would you describe your organization's culture regarding innovation and change?",
        options: [
          "Resistant to change with traditional approaches",
          "Open to change but cautious about new technologies",
          "Embraces innovation with moderate risk tolerance",
          "Highly innovative with strong appetite for cutting-edge solutions"
        ]
      },
      {
        id: 12,
        text: "What is your current approach to AI talent development and training?",
        options: [
          "No formal AI training programs",
          "Basic training with limited scope",
          "Structured training programs for key personnel",
          "Comprehensive AI education with ongoing development"
        ]
      },
      {
        id: 13,
        text: "How effective is cross-functional collaboration in your organization?",
        options: [
          "Limited collaboration with siloed departments",
          "Some collaboration but communication challenges remain",
          "Good collaboration with regular cross-functional projects",
          "Excellent collaboration with integrated teams and shared goals"
        ]
      }
    ]
  },
  {
    domain: "Operational Excellence",
    description: "Process optimisation, automation readiness, and workflow integration potential",
    questions: 4,
    weight: 15,
    icon: Zap,
    questions_list: [
      {
        id: 14,
        text: "How mature are your current business processes and workflow documentation?",
        options: [
          "Processes are largely undocumented and ad-hoc",
          "Basic process documentation with some standardization",
          "Well-documented processes with clear workflows",
          "Highly optimized processes with continuous improvement"
        ]
      },
      {
        id: 15,
        text: "What is your organization's current level of process automation?",
        options: [
          "Minimal automation with mostly manual processes",
          "Basic automation for routine tasks",
          "Moderate automation across key business areas",
          "Advanced automation with intelligent process optimization"
        ]
      },
      {
        id: 16,
        text: "How well are your systems integrated across different business functions?",
        options: [
          "Limited integration with disconnected systems",
          "Basic integration between core systems",
          "Good integration with standardized interfaces",
          "Seamless integration with real-time data sharing"
        ]
      },
      {
        id: 17,
        text: "What is your approach to measuring and monitoring operational performance?",
        options: [
          "Limited performance tracking and metrics",
          "Basic KPIs with manual reporting",
          "Comprehensive metrics with automated dashboards",
          "Advanced analytics with predictive performance insights"
        ]
      }
    ]
  },
  {
    domain: "Risk & Governance",
    description: "AI ethics, compliance readiness, security frameworks, and risk management",
    questions: 3,
    weight: 10,
    icon: Shield,
    questions_list: [
      {
        id: 18,
        text: "How developed are your AI ethics and governance frameworks?",
        options: [
          "No formal AI ethics or governance policies",
          "Basic ethical guidelines under development",
          "Established ethics framework with governance oversight",
          "Comprehensive AI governance with ethical AI practices embedded"
        ]
      },
      {
        id: 19,
        text: "What is your organization's readiness for AI-related compliance and regulations?",
        options: [
          "Limited awareness of compliance requirements",
          "Basic understanding with some compliance measures",
          "Good compliance readiness with documented procedures",
          "Comprehensive compliance framework with proactive monitoring"
        ]
      },
      {
        id: 20,
        text: "How robust are your cybersecurity measures for AI systems?",
        options: [
          "Basic security measures with potential vulnerabilities",
          "Standard security practices with some AI considerations",
          "Strong security framework with AI-specific protections",
          "Advanced security with AI-powered threat detection and response"
        ]
      }
    ]
  },
  {
    domain: "Innovation Velocity",
    description: "Speed of adoption, experimentation culture, and market responsiveness",
    questions: 3,
    weight: 10,
    icon: TrendingUp,
    questions_list: [
      {
        id: 21,
        text: "How quickly does your organization typically adopt new technologies?",
        options: [
          "Slow to adopt with extensive evaluation periods",
          "Cautious adoption after proven market success",
          "Moderate adoption speed with calculated risks",
          "Fast adoption with agile implementation approaches"
        ]
      },
      {
        id: 22,
        text: "What is your organization's approach to experimentation and pilot projects?",
        options: [
          "Limited experimentation with risk-averse culture",
          "Occasional pilots with careful oversight",
          "Regular experimentation with structured pilot programs",
          "Continuous experimentation with fail-fast mentality"
        ]
      },
      {
        id: 23,
        text: "How responsive is your organization to market changes and customer needs?",
        options: [
          "Slow response with traditional planning cycles",
          "Moderate responsiveness with quarterly adjustments",
          "Good responsiveness with agile planning",
          "Highly responsive with real-time market adaptation"
        ]
      }
    ]
  }
];

export default function AIAssessment() {
  const [currentView, setCurrentView] = useState<'intro' | 'domains' | 'assessment' | 'results'>('intro');
  const [currentDomainIndex, setCurrentDomainIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});

  // Calculate progress
  const totalQuestions = 23;
  const answeredQuestions = Object.keys(answers).length;
  const overallProgress = (answeredQuestions / totalQuestions) * 100;

  // Get current question
  const currentDomain = assessmentData[currentDomainIndex];
  const currentQuestion = currentDomain?.questions_list[currentQuestionIndex];
  const questionNumber = assessmentData.slice(0, currentDomainIndex).reduce((sum, domain) => sum + domain.questions, 0) + currentQuestionIndex + 1;

  // Calculate domain completion status
  const getDomainStatus = (domainIndex: number) => {
    const domain = assessmentData[domainIndex];
    const domainQuestionIds = domain.questions_list.map(q => q.id);
    const answeredInDomain = domainQuestionIds.filter(id => answers[id] !== undefined).length;
    
    if (answeredInDomain === domain.questions) return 'completed';
    if (answeredInDomain > 0) return 'in-progress';
    if (domainIndex === currentDomainIndex && currentView === 'assessment') return 'current';
    return 'not-started';
  };

  const handleAnswer = (optionIndex: number) => {
    if (currentQuestion) {
      setAnswers(prev => ({
        ...prev,
        [currentQuestion.id]: optionIndex
      }));
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < currentDomain.questions_list.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else if (currentDomainIndex < assessmentData.length - 1) {
      setCurrentDomainIndex(currentDomainIndex + 1);
      setCurrentQuestionIndex(0);
    } else {
      setCurrentView('results');
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else if (currentDomainIndex > 0) {
      setCurrentDomainIndex(currentDomainIndex - 1);
      setCurrentQuestionIndex(assessmentData[currentDomainIndex - 1].questions_list.length - 1);
    }
  };

  const startAssessment = () => {
    setCurrentView('domains');
  };

  const proceedToAssessment = () => {
    setCurrentView('assessment');
    setCurrentDomainIndex(0);
    setCurrentQuestionIndex(0);
  };

  return (
    <>
      <Helmet>
        <title>AI Assessment | Advanced Technology Solutions</title>
        <meta name="description" content="Comprehensive AI readiness assessment to evaluate your organization's AI implementation potential across 6 key domains." />
      </Helmet>

      <SiteHeader />

      <main className="min-h-screen bg-background">
        {/* Introduction View */}
        {currentView === 'intro' && (
          <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
            <div className="container px-4 max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                AI Readiness Assessment
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Discover your organization's AI implementation potential with our comprehensive 23-question assessment across 6 critical domains.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">6 Key Domains</h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      {assessmentData.map((domain, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <domain.icon className="h-4 w-4 text-primary" />
                          <span>{domain.domain}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Assessment Benefits</h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>Comprehensive Analysis</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>Personalized Report</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>Expert Consultation</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>Implementation Roadmap</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <Button size="lg" onClick={startAssessment} className="bg-primary hover:bg-primary/90">
                Start Your Assessment
              </Button>
            </div>
          </section>
        )}

        {/* Domains Overview */}
        {currentView === 'domains' && (
          <section className="py-8 bg-background min-h-screen">
            <div className="container px-4 max-w-4xl mx-auto">
              <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2">Assessment Domains</h1>
                <p className="text-muted-foreground">Complete all domains to receive your comprehensive AI readiness report</p>
              </div>

              <div className="space-y-4 mb-8">
                {assessmentData.map((domain, index) => {
                  const status = getDomainStatus(index);
                  const Icon = domain.icon;
                  
                  return (
                    <Card key={index} className={`transition-all duration-200 ${
                      status === 'current' ? 'border-primary bg-primary/5' : 
                      status === 'completed' ? 'border-green-500 bg-green-50 dark:bg-green-950/20' : 
                      'border-border'
                    }`}>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            {status === 'completed' ? (
                              <CheckCircle2 className="h-6 w-6 text-green-500" />
                            ) : status === 'current' ? (
                              <Clock className="h-6 w-6 text-primary" />
                            ) : (
                              <Circle className="h-6 w-6 text-muted-foreground" />
                            )}
                          </div>
                          
                          <div className="flex-grow">
                            <div className="flex items-center gap-2 mb-2">
                              <Icon className="h-5 w-5 text-primary" />
                              <h3 className="text-lg font-semibold">{domain.domain}</h3>
                            </div>
                            <p className="text-muted-foreground text-sm mb-3">{domain.description}</p>
                            
                            {status === 'current' && (
                              <div className="text-sm text-primary font-medium">
                                → Currently answering questions in this domain
                              </div>
                            )}
                          </div>
                          
                          <div className="text-right text-sm text-muted-foreground">
                            <div>{domain.questions} questions</div>
                            <div>{domain.weight}% weight</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              <div className="flex justify-between items-center">
                <Button variant="outline" onClick={() => setCurrentView('intro')}>
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Introduction
                </Button>
                
                <div className="text-center">
                  <div className="text-sm text-muted-foreground mb-1">Overall Progress</div>
                  <div className="text-lg font-semibold">{answeredQuestions} of {totalQuestions} questions</div>
                </div>
                
                <Button onClick={proceedToAssessment} className="bg-primary hover:bg-primary/90">
                  Start Assessment
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>
          </section>
        )}

        {/* Assessment Questions */}
        {currentView === 'assessment' && currentQuestion && (
          <section className="py-8 bg-background min-h-screen">
            <div className="container px-4 max-w-4xl mx-auto">
              {/* Progress Header */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-medium">Question {questionNumber} of {totalQuestions}</span>
                  <span className="text-lg font-medium text-primary">{currentDomain.domain}</span>
                </div>
                
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-300" 
                    style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
                  />
                </div>
              </div>

              <Card className="bg-card">
                <CardContent className="p-8">
                  <h1 className="text-2xl font-bold mb-8">{currentQuestion.text}</h1>

                  <RadioGroup 
                    value={answers[currentQuestion.id]?.toString()} 
                    onValueChange={(value) => handleAnswer(parseInt(value))}
                    className="space-y-4"
                  >
                    {currentQuestion.options.map((option, index) => (
                      <div key={index} className="flex items-start space-x-3 p-4 rounded-lg border border-muted hover:bg-muted/30 transition-colors">
                        <RadioGroupItem value={index.toString()} id={`option-${index}`} className="mt-1" />
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
                      onClick={handlePrevious}
                      disabled={questionNumber === 1}
                      className="px-6"
                    >
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Previous
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      onClick={() => setCurrentView('domains')}
                      className="px-6"
                    >
                      View Domains
                    </Button>
                    
                    <Button 
                      onClick={handleNext}
                      disabled={answers[currentQuestion.id] === undefined}
                      className="px-6"
                    >
                      {questionNumber === totalQuestions ? 'Complete Assessment' : 'Next'}
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        )}

        {/* Results View */}
        {currentView === 'results' && (
          <section className="py-8 bg-background min-h-screen">
            <div className="container px-4 max-w-4xl mx-auto text-center">
              <h1 className="text-3xl font-bold mb-4">Assessment Complete!</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Thank you for completing the AI readiness assessment. Your personalized report will be generated and sent to you shortly.
              </p>
              
              <Card className="max-w-md mx-auto">
                <CardContent className="p-6">
                  <CheckCircle2 className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">All {totalQuestions} questions answered</h3>
                  <p className="text-sm text-muted-foreground">
                    Your comprehensive AI readiness report is being prepared.
                  </p>
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