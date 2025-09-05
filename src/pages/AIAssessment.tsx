import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, Circle, Clock, ArrowLeft, ArrowRight, Brain, Shield, Users, Zap, Settings, TrendingUp, BarChart3, Target, Lightbulb } from "lucide-react";

// Assessment data structure with complete questions and weighted scoring
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

// Maturity level definitions
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
  const [currentView, setCurrentView] = useState<'intro' | 'domains' | 'assessment' | 'results'>('intro');
  const [currentDomainIndex, setCurrentDomainIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});

  // Check if results were passed from the questions page
  useEffect(() => {
    if (location.state?.assessmentResults) {
      setAnswers(location.state.assessmentResults.answers || {});
      setCurrentView('results');
    }
  }, [location.state]);

  // Calculate comprehensive scoring
  const totalQuestions = 23;
  const answeredQuestions = Object.keys(answers).length;
  const overallProgress = (answeredQuestions / totalQuestions) * 100;

  // Calculate domain scores and overall weighted score
  const calculateDomainScore = (domainIndex: number) => {
    const domain = assessmentData[domainIndex];
    const domainAnswers = domain.questions_list.filter(q => answers[q.id] !== undefined);
    if (domainAnswers.length === 0) return 0;
    
    const totalScore = domain.questions_list.reduce((sum, q) => {
      const answer = answers[q.id];
      return sum + (answer !== undefined ? answer + 1 : 0); // Convert 0-3 to 1-4
    }, 0);
    
    const maxScore = domain.questions_list.length * 4;
    return (totalScore / maxScore) * 100;
  };

  const calculateOverallScore = () => {
    let weightedSum = 0;
    let totalWeight = 0;
    
    assessmentData.forEach((domain, index) => {
      const domainScore = calculateDomainScore(index);
      const domainQuestions = domain.questions_list.filter(q => answers[q.id] !== undefined);
      
      if (domainQuestions.length > 0) {
        weightedSum += domainScore * domain.weight;
        totalWeight += domain.weight;
      }
    });
    
    return totalWeight > 0 ? weightedSum / totalWeight : 0;
  };

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

  const overallScore = calculateOverallScore();
  const maturity = getMaturityLevel(overallScore);

  const handleScheduleConsultation = () => {
    // Calculate domain scores for the consultation page
    const domainScores = assessmentData.map((domain, index) => ({
      domain: domain.domain,
      score: calculateDomainScore(index),
      weight: domain.weight,
      description: domain.description
    }));

    navigate('/ai-consultation', {
      state: {
        assessmentResults: {
          overallScore,
          domainScores,
          maturity: maturity.level,
          answeredQuestions: Object.keys(answers).length,
          totalQuestions: 23
        }
      }
    });
  };

  // CHANGED: Navigate to separate questions page instead of local assessment
  const handleStartAssessment = () => {
    navigate('/assessment-questions');
  };

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
              
              {/* CHANGED: Use handleStartAssessment instead of setCurrentView('assessment') */}
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
              <div className="bg-muted/30 rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-6">Assessment Domains</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  {assessmentData.map((domain, index) => {
                    const Icon = domain.icon;
                    return (
                      <div key={index} className="bg-background/50 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Icon className="h-5 w-5 text-primary" />
                          <span className="font-medium text-sm">{domain.domain}</span>
                        </div>
                        <div className="text-xs text-muted-foreground mb-1">
                          {domain.questions} questions • {domain.weight}% weight
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {domain.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
                
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

        {/* Domains Overview */}
        {currentView === 'domains' && (
          <section className="py-16">
            <div className="container px-4 max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Assessment Domains</h1>
                <p className="text-lg text-muted-foreground">
                  Your AI readiness will be evaluated across these six critical domains
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {assessmentData.map((domain, index) => {
                  const Icon = domain.icon;
                  const status = getDomainStatus(index);
                  
                  return (
                    <Card key={index} className={`transition-all duration-200 ${
                      status === 'completed' ? 'ring-2 ring-green-500/20 bg-green-50/50 dark:bg-green-950/20' :
                      status === 'in-progress' ? 'ring-2 ring-blue-500/20 bg-blue-50/50 dark:bg-blue-950/20' :
                      status === 'current' ? 'ring-2 ring-primary/50 bg-primary/5' :
                      'hover:shadow-md'
                    }`}>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`p-2 rounded-lg ${
                            status === 'completed' ? 'bg-green-100 dark:bg-green-900/30' :
                            status === 'in-progress' ? 'bg-blue-100 dark:bg-blue-900/30' :
                            status === 'current' ? 'bg-primary/10' :
                            'bg-muted/50'
                          }`}>
                            <Icon className={`h-6 w-6 ${
                              status === 'completed' ? 'text-green-600' :
                              status === 'in-progress' ? 'text-blue-600' :
                              status === 'current' ? 'text-primary' :
                              'text-muted-foreground'
                            }`} />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold">{domain.domain}</h3>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <span>{domain.questions} questions</span>
                              <span>•</span>
                              <span>{domain.weight}% weight</span>
                            </div>
                          </div>
                          {status === 'completed' && (
                            <CheckCircle2 className="h-5 w-5 text-green-600" />
                          )}
                          {status === 'in-progress' && (
                            <Circle className="h-5 w-5 text-blue-600 fill-current" />
                          )}
                        </div>
                        
                        <p className="text-sm text-muted-foreground mb-4">
                          {domain.description}
                        </p>
                        
                        <div className="text-xs text-muted-foreground">
                          Status: <span className={`font-medium ${
                            status === 'completed' ? 'text-green-600' :
                            status === 'in-progress' ? 'text-blue-600' :
                            status === 'current' ? 'text-primary' :
                            'text-muted-foreground'
                          }`}>
                            {status === 'completed' ? 'Completed' :
                             status === 'in-progress' ? 'In Progress' :
                             status === 'current' ? 'Current' :
                             'Not Started'}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              <div className="text-center">
                <Button size="lg" onClick={() => setCurrentView('assessment')} className="bg-primary hover:bg-primary/90">
                  Begin Assessment
                </Button>
              </div>
            </div>
          </section>
        )}

        {/* Assessment Questions */}
        {currentView === 'assessment' && (
          <section className="py-8 md:py-16">
            <div className="container px-4 max-w-4xl mx-auto">
              
              {/* Progress Header */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h1 className="text-2xl md:text-3xl font-bold">AI Readiness Assessment</h1>
                  <div className="text-sm text-muted-foreground">
                    Question {questionNumber} of {totalQuestions}
                  </div>
                </div>
                <Progress value={overallProgress} className="h-2" />
                <div className="text-center mt-2 text-sm text-muted-foreground">
                  {Math.round(overallProgress)}% Complete
                </div>
              </div>

              {/* Domain Progress */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mb-8">
                {assessmentData.map((domain, index) => {
                  const Icon = domain.icon;
                  const status = getDomainStatus(index);
                  
                  return (
                    <div key={index} className={`p-3 rounded-lg border text-center ${
                      status === 'completed' ? 'bg-green-50 border-green-200 dark:bg-green-950/20 dark:border-green-800' :
                      status === 'in-progress' ? 'bg-blue-50 border-blue-200 dark:bg-blue-950/20 dark:border-blue-800' :
                      status === 'current' ? 'bg-primary/10 border-primary' :
                      'bg-muted/20 border-muted-foreground/20'
                    }`}>
                      <Icon className={`h-5 w-5 mx-auto mb-1 ${
                        status === 'completed' ? 'text-green-600' :
                        status === 'in-progress' ? 'text-blue-600' :
                        status === 'current' ? 'text-primary' :
                        'text-muted-foreground'
                      }`} />
                      <div className="text-xs font-medium">{domain.domain}</div>
                      <div className="flex justify-center mt-1">
                        {status === 'completed' ? (
                          <CheckCircle2 className="h-4 w-4 text-green-600" />
                        ) : status === 'in-progress' ? (
                          <Circle className="h-4 w-4 text-blue-600 fill-current" />
                        ) : status === 'current' ? (
                          <Circle className="h-4 w-4 text-primary" />
                        ) : (
                          <Circle className="h-4 w-4 text-muted-foreground" />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Current Question */}
              <Card className="mb-8">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="text-sm text-primary font-medium mb-2">
                      {currentDomain.domain}
                    </div>
                    <h2 className="text-xl md:text-2xl font-semibold leading-relaxed">
                      {currentQuestion?.text}
                    </h2>
                  </div>

                  <RadioGroup value={answers[currentQuestion?.id]?.toString()} onValueChange={(value) => handleAnswer(parseInt(value))}>
                    <div className="space-y-4">
                      {currentQuestion?.options.map((option, index) => (
                        <div key={index} className="flex items-start space-x-3 p-4 rounded-lg border hover:bg-muted/50 transition-colors">
                          <RadioGroupItem value={index.toString()} id={`option-${index}`} className="mt-1" />
                          <Label 
                            htmlFor={`option-${index}`} 
                            className="flex-1 text-sm leading-relaxed cursor-pointer"
                          >
                            {option}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>

              {/* Navigation */}
              <div className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentDomainIndex === 0 && currentQuestionIndex === 0}
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Previous
                </Button>

                <Button
                  onClick={handleNext}
                  disabled={!currentQuestion || answers[currentQuestion.id] === undefined}
                  className="bg-primary hover:bg-primary/90"
                >
                  {currentDomainIndex === assessmentData.length - 1 && 
                   currentQuestionIndex === currentDomain.questions_list.length - 1 ? 
                   'View Results' : 'Next'}
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>
          </section>
        )}

        {/* Results View */}
        {currentView === 'results' && (
          <section className="py-16">
            <div className="container px-4 max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Your AI Readiness Results</h1>
                <p className="text-lg text-muted-foreground">
                  Based on your responses to {answeredQuestions} questions
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
                {assessmentData.map((domain, index) => {
                  const Icon = domain.icon;
                  const domainScore = calculateDomainScore(index);
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

              {/* CTA Section - CHANGED: Removed Download Report button */}
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
                      setAnswers({});
                      setCurrentDomainIndex(0);
                      setCurrentQuestionIndex(0);
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