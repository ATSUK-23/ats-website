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
import { CheckCircle2, Circle, ArrowLeft, ArrowRight, Brain, Shield, Users, Zap, Settings, TrendingUp } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

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

export default function AssessmentQuestions() {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentDomainIndex, setCurrentDomainIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [userInfo, setUserInfo] = useState<{name: string; email: string; business?: string; phone?: string} | null>(null);

  useEffect(() => {
    // Get user info from location state
    if (location.state?.name && location.state?.email) {
      setUserInfo({ 
        name: location.state.name, 
        email: location.state.email,
        business: location.state.business || '',
        phone: location.state.phone || ''
      });
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
    if (domainIndex === currentDomainIndex) return 'current';
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

  const handleNext = async () => {
    if (currentQuestionIndex < currentDomain.questions_list.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else if (currentDomainIndex < assessmentData.length - 1) {
      setCurrentDomainIndex(currentDomainIndex + 1);
      setCurrentQuestionIndex(0);
    } else {
      // Assessment completed, send email and navigate to results
      const overallScore = calculateOverallScore();
      const domainScores = assessmentData.map((domain, index) => ({
        domain: domain.domain,
        score: calculateDomainScore(index),
        weight: domain.weight,
        description: domain.description
      }));

      try {
        console.log('Submitting assessment with userInfo:', userInfo);
        
        // If no user info, use default values for testing
        const submissionData = userInfo || {
          name: 'Anonymous User',
          email: 'test@example.com',
          business: '',
          phone: ''
        };

        // Send assessment email via Supabase
        await supabase.functions.invoke('send-assessment-email', {
          body: {
            name: submissionData.name,
            email: submissionData.email,
            answers,
            overallScore,
            domainScores,
            maturity: getMaturityLevel(overallScore).level
          }
        });

        // Also send via FormSubmit with comprehensive user details
        // Format assessment data for FormSubmit
        const answersText = Object.entries(answers)
          .map(([questionId, answerIndex]) => `Question ${questionId}: Option ${answerIndex + 1}`)
          .join('\n');
        
        const domainScoresText = domainScores
          .map(domain => `${domain.domain}: ${Math.round(domain.score)}%`)
          .join('\n');
        
        const assessmentResults = `
AI ASSESSMENT RESULTS

Personal Details:
- Name: ${submissionData.name}
- Email: ${submissionData.email}
- Business: ${submissionData.business || 'Not provided'}
- Phone: ${submissionData.phone || 'Not provided'}

Assessment Summary:
- Overall Score: ${Math.round(overallScore)}%
- Maturity Level: ${getMaturityLevel(overallScore).level}

Domain Breakdown:
${domainScoresText}

Detailed Question Responses:
${answersText}
        `;

        // Send to both email addresses via FormSubmit
        const emailAddresses = [
          'richard.padun@theepitome.co.uk',
          'martin@automatetosell.com'
        ];

        for (const emailAddress of emailAddresses) {
          console.log(`Sending FormSubmit to: ${emailAddress} with user data:`, submissionData);
          
          try {
            // Create a proper form data object for each submission
            const formData = new FormData();
            formData.append('name', submissionData.name);
            formData.append('email', submissionData.email);
            formData.append('business', submissionData.business || 'Not provided');
            formData.append('phone', submissionData.phone || 'Not provided');
            formData.append('message', assessmentResults);
            formData.append('_subject', `AI Assessment Completed - ${submissionData.name}`);
            formData.append('_autoresponse', 'Thank you for completing the AI assessment. We will review your results and get back to you soon.');
            
            const response = await fetch(`https://formsubmit.co/${emailAddress}`, {
              method: 'POST',
              body: formData
            });
            
            console.log(`FormSubmit response for ${emailAddress}:`, response.status, response.statusText);
            
            if (!response.ok) {
              const responseText = await response.text();
              console.error(`FormSubmit failed for ${emailAddress}:`, responseText);
            } else {
              console.log(`FormSubmit successful for ${emailAddress}`);
            }
          } catch (error) {
            console.error(`FormSubmit error for ${emailAddress}:`, error);
          }
        }
        
        console.log('Assessment submission completed successfully');
      } catch (error) {
        console.error('Failed to send assessment data:', error);
      }

      navigate('/ai-assessment', {
        state: {
          assessmentResults: {
            overallScore,
            domainScores,
            maturity: getMaturityLevel(overallScore).level,
            answeredQuestions: Object.keys(answers).length,
            totalQuestions: 23,
            answers
          }
        }
      });
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

  const selectedAnswer = currentQuestion ? answers[currentQuestion.id] : undefined;

  return (
    <>
      <Helmet>
        <title>AI Assessment Questions | Advanced Technology Solutions</title>
        <meta name="description" content="Complete our comprehensive 23-question AI readiness assessment to understand your organization's AI integration maturity." />
      </Helmet>

      <SiteHeader />

      <main className="min-h-screen bg-background">
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

                <RadioGroup 
                  value={selectedAnswer !== undefined ? selectedAnswer.toString() : undefined} 
                  onValueChange={(value) => handleAnswer(parseInt(value))}
                  key={currentQuestion?.id} // Force re-render for each question
                >
                  <div className="space-y-4">
                    {currentQuestion?.options.map((option, index) => {
                      const isSelected = selectedAnswer === index;
                      const optionId = `q${currentQuestion?.id}-option-${index}`;
                      return (
                        <div 
                          key={index} 
                          className={`flex items-start space-x-3 p-4 rounded-lg border transition-colors ${
                            isSelected 
                              ? 'border-green-500 bg-green-50 dark:bg-green-950/20' 
                              : 'border hover:bg-muted/50'
                          }`}
                        >
                          <RadioGroupItem value={index.toString()} id={optionId} className="mt-1" />
                          <Label 
                            htmlFor={optionId} 
                            className={`flex-1 text-sm leading-relaxed cursor-pointer ${
                              isSelected ? 'text-green-700 dark:text-green-300' : ''
                            }`}
                          >
                            {option}
                          </Label>
                        </div>
                      );
                    })}
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
                disabled={selectedAnswer === undefined}
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
      </main>

      <SiteFooter />
    </>
  );
}