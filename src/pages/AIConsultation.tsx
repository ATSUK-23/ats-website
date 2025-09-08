import { useState, useEffect } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Clock, VideoIcon, Calendar, CheckCircle2 } from "lucide-react";
import { AIConsultationForm } from "@/components/forms/AIConsultationForm";

// Import assessment data for scoring calculation
const assessmentData = [
  {
    domain: "Strategic Foundation",
    description: "Leadership commitment, AI strategy alignment, and business case clarity",
    weight: 20,
  },
  {
    domain: "Data & Infrastructure", 
    description: "Data quality, accessibility, infrastructure scalability, and technical readiness",
    weight: 25,
  },
  {
    domain: "Organisational Intelligence",
    description: "Team skills, AI literacy, culture of innovation, and talent development",
    weight: 20,
  },
  {
    domain: "Operational Excellence",
    description: "Process optimisation, automation readiness, and workflow integration potential",
    weight: 15,
  },
  {
    domain: "Risk & Governance",
    description: "AI ethics, compliance readiness, security frameworks, and risk management",
    weight: 10,
  },
  {
    domain: "Innovation Velocity",
    description: "Speed of adoption, experimentation culture, and market responsiveness",
    weight: 10,
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

export default function AIConsultation() {
  const location = useLocation();
  const assessmentResults = location.state?.assessmentResults;

  // Redirect to assessment if no results are available
  if (!assessmentResults) {
    return <Navigate to="/ai-assessment" replace />;
  }

  const { overallScore, domainScores } = assessmentResults;
  const maturity = getMaturityLevel(overallScore);

  return (
    <>
      <Helmet>
        <title>Schedule Your Free AI Consultation | Advanced Technology Solutions</title>
        <meta name="description" content="Let's discuss your assessment results and create a personalised AI adoption roadmap" />
      </Helmet>

      <SiteHeader />

      <main className="min-h-screen bg-background">
        <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container px-4 max-w-7xl mx-auto">
            
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Schedule Your Free AI Consultation
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Let's discuss your assessment results and create a personalised AI adoption roadmap
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Left Side - Assessment Summary */}
              <div className="space-y-6">
                <Card className="border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                      <h2 className="text-xl font-bold">Your Assessment Summary</h2>
                    </div>

                    {/* Overall Score */}
                    <div className="mb-6">
                      <div className="flex justify-between items-center mb-3">
                        <div>
                          <div className="text-3xl font-bold">{Math.round(overallScore)}%</div>
                          <div className="text-sm text-muted-foreground">AI Readiness</div>
                        </div>
                        <div>
                          <div className="text-xl font-bold">{Math.round(100 - overallScore)}%</div>
                          <div className="text-sm text-muted-foreground">Growth Potential</div>
                        </div>
                      </div>
                      
                      <div className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${maturity.bgColor} ${maturity.color} mb-4`}>
                        {maturity.level}
                      </div>
                      
                      <Progress value={overallScore} className="h-3" />
                    </div>

                    {/* What to Expect */}
                    <div className="space-y-4">
                      <h3 className="font-semibold text-lg">What to Expect:</h3>
                      
                      <div className="flex items-start gap-3">
                        <Clock className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <div className="font-medium">30-minute focused discussion</div>
                          <div className="text-sm text-muted-foreground">Deep dive into your specific results</div>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <VideoIcon className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <div className="font-medium">Google Meet video call</div>
                          <div className="text-sm text-muted-foreground">Face-to-face strategy session</div>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Calendar className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <div className="font-medium">Flexible scheduling within 48 hours</div>
                          <div className="text-sm text-muted-foreground">Choose a time that works for you</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Side - Consultation Form */}
              <div>
                <AIConsultationForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}