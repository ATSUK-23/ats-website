import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { FileText, CloudUpload, Zap, Brain, Bot } from "lucide-react";

const maturityStages = [
  {
    stage: 0,
    title: "Manual",
    description: "Paper-driven processes, disconnected spreadsheets, and ad-hoc workflows. Foundation isn't digital yet.",
    icon: FileText,
  },
  {
    stage: 1,
    title: "Digitise",
    description: "Moving to digital systems for storage and communication. Building the base layer of digital foundations.",
    icon: CloudUpload,
  },
  {
    stage: 2,
    title: "Automation",
    description: "Connecting tools, automating repetitive tasks, and driving efficiency across processes.",
    icon: Zap,
  },
  {
    stage: 3,
    title: "AI Integration",
    description: "Applying AI to enhance processes, make smarter decisions, and unlock new efficiencies.",
    icon: Brain,
  },
  {
    stage: 4,
    title: "Agentic AI",
    description: "Autonomous AI agents working across systems, delivering scale and intelligence with minimal human input.",
    icon: Bot,
  },
];

export const DigitalMaturitySection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-background">
      <div className="container px-4">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-foreground">
            The 5 Stages of Digital & AI Maturity
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            AI success doesn't start with AI. It starts with strong digital foundations. Most failed AI projects come from skipping steps and trying to leap straight from manual processes to AI. That's why we use a proven maturity scale to show you where your business really is - and how to move forward with confidence.
          </p>
        </div>

        {/* Maturity Stages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {maturityStages.map((stage) => {
            const IconComponent = stage.icon;
            return (
              <Card key={stage.stage} className="relative group hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6 text-center">
                  {/* Stage Number */}
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg">
                    {stage.stage}
                  </div>
                  
                  {/* Icon */}
                  <div className="mb-4">
                    <IconComponent className="w-8 h-8 mx-auto text-primary group-hover:text-primary/80 transition-colors" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-semibold text-lg mb-3 text-foreground">
                    Stage {stage.stage} – {stage.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {stage.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-lg mb-6 text-muted-foreground">
            👉 Where does your business sit on the scale? Find out your stage and next steps.
          </p>
          <Link to="/ai-audit">
            <Button variant="hero" size="lg" className="text-base px-8">
              Discover Your Stage
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DigitalMaturitySection;