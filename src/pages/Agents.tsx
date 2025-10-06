import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import HeroSection from "@/components/sections/HeroSection";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import AIAgentsLeadForm from "@/components/forms/AIAgentsLeadForm";
import { 
  Target,
  MessageSquare,
  PenTool,
  Network,
  RefreshCw,
  CheckSquare,
  Zap,
  BookOpen,
  Headphones,
  Radio,
  TrendingUp,
  Puzzle
} from "lucide-react";

const Agents = () => {
  const agentTypes = [
    {
      title: "Automate Your Prospecting",
      description: "Fill your calendar with qualified leads using AI-powered outreach across LinkedIn, email, and other channels.",
      bullets: [
        "Builds and updates ideal customer profiles automatically.",
        "Scrapes contact data and segments by persona or niche.",
        "Writes personalised connection messages and emails.",
        "Books meetings directly into your calendar."
      ],
      value: "Creates a consistent lead pipeline without hiring more sales reps.",
      cta: "Generate Leads Faster",
      icon: <Target className="h-8 w-8" />
    },
    {
      title: "Never Miss an Enquiry Again",
      description: "Convert inbound messages into meetings with lightning-fast, human-sounding responses.",
      bullets: [
        "Replies instantly across chat, email, and web forms.",
        "Qualifies prospects using custom rules or scoring.",
        "Schedules calls automatically in your booking system.",
        "Syncs data into your CRM in real time."
      ],
      value: "Turns inbound interest into revenue while you focus on delivery.",
      cta: "Respond Instantly",
      icon: <MessageSquare className="h-8 w-8" />
    },
    {
      title: "Stay Top-of-Mind, Effortlessly",
      description: "Publish smart, SEO-friendly content that keeps you visible and relevant in your market.",
      bullets: [
        "Scans industry trends and suggests new topics.",
        "Drafts LinkedIn posts, articles, and blogs in your voice.",
        "Repurposes long content into short-form posts.",
        "Queues and publishes across multiple platforms."
      ],
      value: "Grows brand authority and visibility without content burnout.",
      cta: "Build Authority",
      icon: <PenTool className="h-8 w-8" />
    },
    {
      title: "Engage Like a Human — 24/7",
      description: "Build relationships on social media by automatically liking, commenting, and messaging the right people.",
      bullets: [
        "Tracks hashtags, mentions, and competitors.",
        "Writes thoughtful comments and DMs using context.",
        "Keeps your brand visible with daily micro-engagements.",
        "Nurtures warm leads ready for outreach."
      ],
      value: "Builds trust and engagement without manual scrolling.",
      cta: "Boost Engagement",
      icon: <Network className="h-8 w-8" />
    },
    {
      title: "Revive Your Dead Leads",
      description: "Re-engage dormant contacts with context-aware follow-ups that spark fresh conversations.",
      bullets: [
        "Analyses old CRM data and contact activity.",
        "Writes personalised re-engagement messages.",
        "Runs automated outreach sequences by segment.",
        "Books calls or directs to offers automatically."
      ],
      value: "Uncovers hidden revenue inside your existing database.",
      cta: "Reignite Pipeline",
      icon: <RefreshCw className="h-8 w-8" />
    },
    {
      title: "Focus on the Right Prospects",
      description: "Instantly assess every lead's fit and potential so your team only pursues high-value deals.",
      bullets: [
        "Gathers company data from web, LinkedIn, and databases.",
        "Scores leads using your ideal client criteria.",
        "Flags high-potential accounts for follow-up.",
        "Updates CRM with qualification details."
      ],
      value: "Increases close rates by removing low-value leads early.",
      cta: "Qualify Smarter",
      icon: <CheckSquare className="h-8 w-8" />
    },
    {
      title: "Send Proposals in Minutes, Not Hours",
      description: "Create and send personalised proposals automatically from call notes or CRM data.",
      bullets: [
        "Extracts details from discovery calls or forms.",
        "Generates branded proposals or quotes instantly.",
        "Sends automatically with polite follow-ups.",
        "Tracks opens, views, and responses."
      ],
      value: "Speeds up the sales cycle and boosts win rates.",
      cta: "Quote Instantly",
      icon: <Zap className="h-8 w-8" />
    },
    {
      title: "Your Team's Instant Sales Coach",
      description: "Give reps on-demand access to scripts, pricing, case studies, and product answers.",
      bullets: [
        "Centralises playbooks and sales materials.",
        "Answers rep questions through chat or Slack.",
        "Suggests talking points and objection replies.",
        "Updates automatically as new content is added."
      ],
      value: "Keeps every rep on-message and confident during calls.",
      cta: "Train Instantly",
      icon: <BookOpen className="h-8 w-8" />
    },
    {
      title: "24/7 Support That Never Sleeps",
      description: "Deliver fast, accurate, multi-channel customer support with AI triage and escalation.",
      bullets: [
        "Reads and responds to emails, chat, and WhatsApp.",
        "Recognises sentiment and urgency automatically.",
        "Escalates complex issues to human agents.",
        "Logs every conversation in your helpdesk."
      ],
      value: "Reduces response time and improves customer satisfaction.",
      cta: "Support Smarter",
      icon: <Headphones className="h-8 w-8" />
    },
    {
      title: "Turn Every Call into Data",
      description: "Analyse conversations, score performance, and create actionable follow-ups automatically.",
      bullets: [
        "Transcribes and summarises every call.",
        "Detects objections, tone, and buying signals.",
        "Scores reps against your playbook.",
        "Suggests next steps and sends follow-ups."
      ],
      value: "Improves call quality and helps teams close more deals.",
      cta: "Analyse Calls",
      icon: <Radio className="h-8 w-8" />
    },
    {
      title: "Manage by Insight, Not Guesswork",
      description: "Track performance, get summaries, and coach your team automatically.",
      bullets: [
        "Monitors team calls and activity.",
        "Sends concise updates and leaderboards.",
        "Flags coaching opportunities instantly.",
        "Provides weekly summaries and trends."
      ],
      value: "Saves managers hours while improving team performance.",
      cta: "Manage Smarter",
      icon: <TrendingUp className="h-8 w-8" />
    },
    {
      title: "Build Your Own Growth Agent",
      description: "Create a fully bespoke AI solution that automates your unique workflow.",
      bullets: [
        "Scopes and designs an agent for your exact needs.",
        "Connects seamlessly to your CRM or apps.",
        "Includes logic, prompts, and integrations.",
        "Deployed securely in your Lovable Cloud environment."
      ],
      value: "A made-to-measure automation built to grow your business.",
      cta: "Design Yours",
      icon: <Puzzle className="h-8 w-8" />
    }
  ];

  interface AgentCardProps {
    title: string;
    description: string;
    bullets: string[];
    value: string;
    cta: string;
    icon: React.ReactNode;
  }

  const AgentCard = ({ title, description, bullets, value, cta, icon }: AgentCardProps) => (
    <Card className="group hover:shadow-xl hover:scale-[1.03] transition-all duration-300 border bg-card h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex flex-col items-center text-center gap-4 flex-grow">
          <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
            {icon}
          </div>
          <h3 className="font-bold text-xl">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
          
          <ul className="text-left text-sm space-y-2 w-full mt-2">
            {bullets.map((bullet, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span className="text-muted-foreground">{bullet}</span>
              </li>
            ))}
          </ul>
          
          <p className="font-semibold text-sm text-primary mt-4">
            {value}
          </p>
          
          <Button 
            className="w-full mt-auto"
            onClick={() => document.getElementById('ai-agents-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {cta}
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <>
      <Helmet>
        <title>AI Agents - Automate Anything | Automate To Sell</title>
        <meta name="description" content="Launch AI agents as apps, automations, or integrations. Discover powerful agent types, content generation, data ingestion, and more to automate anything in your business." />
        <meta name="keywords" content="AI agents, automation, workflows, content generation, data ingestion, business automation" />
        <link rel="canonical" href="https://automatetosell.com/agents" />
      </Helmet>

      <SiteHeader />
      
      <main>
        {/* Hero Section */}
        <HeroSection
          title="AI Growth Agents that Drive Revenue"
          subtitle="Proven AI agents that bring leads, book meetings and speed sales, fully managed and customisable, plus bespoke builds when required."
          ctaText="See How It Works"
          ctaLink="#ai-agents-form"
          backgroundImage="/lovable-uploads/6f46dcfa-73ab-402b-8d25-de2cdf561d8c.png"
        />

        {/* Value Propositions */}
        <section className="py-12 sm:py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-3">More Leads, More Meetings</h3>
                <p className="text-muted-foreground">Agents designed to fill your pipeline by prospecting, email outreach, event promotion and social engagement.</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-3">Faster Sales, Higher Conversions</h3>
                <p className="text-muted-foreground">From instant proposals to ad optimisation and SEO content, our agents help you close deals quicker and maximise campaign returns.</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-3">Stronger Client Revenue</h3>
                <p className="text-muted-foreground">Reactivation, upsells, cross-sells and smart content distribution keep your brand front of mind and expand revenue from existing customers.</p>
              </div>
            </div>
          </div>
        </section>

        {/* AI Agents for Growth Section */}
        <section className="py-12 sm:py-16">
          <div className="container px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">AI Agents for Growth</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {agentTypes.map((agent, index) => (
                <AgentCard key={index} {...agent} />
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Buttons */}
        <section className="py-12 sm:py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container px-4 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">Ready to Build Your AI Agents?</h2>
            <p className="text-lg text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto">
              Transform your business with powerful AI agents that work 24/7. Get started today and see the difference automation can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#ai-agents-form">
                <Button size="lg" className="w-full sm:w-auto text-sm sm:text-base">Start Building AI Agents</Button>
              </a>
              <a href="#ai-agents-form">
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-sm sm:text-base">Get Free Consultation</Button>
              </a>
              <a href="#ai-agents-form">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto text-sm sm:text-base">See Agent Examples</Button>
              </a>
            </div>
          </div>
        </section>

        {/* Lead Form */}
        <AIAgentsLeadForm 
          formTag="Agents"
          title="Build Your AI Agents Today"
          subtitle="Tell us about your automation needs and we'll help you build powerful AI agents that work 24/7."
        />

        {/* Final CTA Banner */}
        <section className="py-12 sm:py-16 bg-primary text-primary-foreground">
          <div className="container text-center px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">Automate Anything. Start Today.</h2>
            <a href="#ai-agents-form">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto text-sm sm:text-base">Start Building AI Agents</Button>
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
};

export default Agents;