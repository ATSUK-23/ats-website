import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import HeroSection from "@/components/sections/HeroSection";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import AIAgentsLeadForm from "@/components/forms/AIAgentsLeadForm";
import { 
  Bot, 
  FileText, 
  Image, 
  Database, 
  Headphones, 
  Table, 
  Globe, 
  MessageSquare, 
  Bell, 
  Users, 
  CheckCircle, 
  Wrench,
  Code,
  Settings,
  Workflow,
  Monitor,
  Mail,
  Webhook,
  Server,
  Eye,
  Upload,
  Plug,
  Share2,
  Smartphone,
  BarChart3,
  TestTube,
  Target,
  FileCheck,
  Cog,
  Key,
  GitBranch
} from "lucide-react";

const Agents = () => {
  const agentTypes = [
    {
      title: "AI Lead Generation Agent",
      description: "Book qualified meetings with automated LinkedIn outreach and personalised cold email campaigns that run on autopilot.",
      icon: <Users className="h-6 w-6" />
    },
    {
      title: "AI Inbound Lead Response Agent",
      description: "Turn inbound enquiries into booked meetings with instant replies, smart qualification, and automated follow-ups.",
      icon: <MessageSquare className="h-6 w-6" />
    },
    {
      title: "AI Authority Builder Agent",
      description: "Publish timely blogs and social posts that position your business as the go-to authority in your industry.",
      icon: <FileText className="h-6 w-6" />
    },
    {
      title: "AI Social Engagement Agent",
      description: "Engage prospects on social platforms with instant replies and relevant comments that build connections automatically.",
      icon: <Share2 className="h-6 w-6" />
    },
    {
      title: "AI CRM Reactivation Agent",
      description: "Revive prospects and clients in your CRM with personalised outreach that re-engages them and books meetings automatically.",
      icon: <Database className="h-6 w-6" />
    },
    {
      title: "AI Deal Qualifier Agent",
      description: "Walk into every call fully prepared with instant insight on company size, industry, funding stage, fit, and opportunity potential.",
      icon: <Target className="h-6 w-6" />
    },
    {
      title: "AI Proposal & Quote Agent",
      description: "Send tailored proposals and quotes instantly from discovery notes with automated follow-up reminders.",
      icon: <FileCheck className="h-6 w-6" />
    },
    {
      title: "AI Sales Knowledge Agent",
      description: "Give your team instant access to your playbook, product knowledge, and objection handling anytime they need it.",
      icon: <Bot className="h-6 w-6" />
    }
  ];

  const contentGeneration = [
    {
      title: "Text",
      description: "Access 90+ LLMs without API keys for diverse content creation.",
      icon: <FileText className="h-6 w-6" />
    },
    {
      title: "Images",
      description: "Generate visuals with multiple models for any creative need.",
      icon: <Image className="h-6 w-6" />
    },
    {
      title: "HTML",
      description: "Produce styled web pages with professional layouts.",
      icon: <Code className="h-6 w-6" />
    },
    {
      title: "PDF",
      description: "Create slide decks, reports, or documents automatically.",
      icon: <FileCheck className="h-6 w-6" />
    },
    {
      title: "Audio / Podcasts",
      description: "Text-to-speech and multi-speaker shows for engaging content.",
      icon: <Headphones className="h-6 w-6" />
    },
    {
      title: "Structured Data",
      description: "Output CSV, JSON, XML, YAML for data integration.",
      icon: <Table className="h-6 w-6" />
    }
  ];

  const dataIngestion = [
    {
      title: "Scrape Websites",
      description: "Extract structured data from live URLs automatically.",
      icon: <Globe className="h-6 w-6" />
    },
    {
      title: "Databases",
      description: "Connect to relational, document, vector DBs seamlessly.",
      icon: <Database className="h-6 w-6" />
    },
    {
      title: "Social Listening",
      description: "Track mentions, trends, competitors across platforms.",
      icon: <Share2 className="h-6 w-6" />
    },
    {
      title: "Vision Models",
      description: "OCR, object detection, image analysis capabilities.",
      icon: <Eye className="h-6 w-6" />
    },
    {
      title: "Upload & Vectorize",
      description: "Enable RAG from bulk data for intelligent responses.",
      icon: <Upload className="h-6 w-6" />
    },
    {
      title: "App Integrations",
      description: "Connect Docs, Sheets, Notion, HubSpot seamlessly.",
      icon: <Plug className="h-6 w-6" />
    }
  ];

  const socialCommunications = [
    {
      title: "Social Media",
      description: "Post, comment, and analyse across major platforms.",
      icon: <Share2 className="h-6 w-6" />
    },
    {
      title: "SMS & Email",
      description: "Send and receive transactional messages automatically.",
      icon: <Smartphone className="h-6 w-6" />
    },
    {
      title: "Notifications",
      description: "Alerts via Slack or email for important updates.",
      icon: <Bell className="h-6 w-6" />
    }
  ];

  const humanInLoop = [
    {
      title: "User Interfaces",
      description: "Forms, charts, dashboards for human interaction.",
      icon: <Monitor className="h-6 w-6" />
    },
    {
      title: "Checkpoints",
      description: "Human approval steps for critical decisions.",
      icon: <CheckCircle className="h-6 w-6" />
    },
    {
      title: "Context Enrichment",
      description: "Collect additional info for better outcomes.",
      icon: <Target className="h-6 w-6" />
    },
    {
      title: "File Uploads",
      description: "Process runtime uploads for dynamic content.",
      icon: <Upload className="h-6 w-6" />
    },
    {
      title: "Onboarding",
      description: "Capture data to personalise agents effectively.",
      icon: <Users className="h-6 w-6" />
    }
  ];

  const testingQA = [
    {
      title: "Diagnostics",
      description: "Identify inefficiencies and optimize performance.",
      icon: <BarChart3 className="h-6 w-6" />
    },
    {
      title: "Evaluations",
      description: "Run structured test cases for quality assurance.",
      icon: <TestTube className="h-6 w-6" />
    },
    {
      title: "Test Case Generation",
      description: "Auto-create scenarios for comprehensive testing.",
      icon: <Workflow className="h-6 w-6" />
    },
    {
      title: "Debugger",
      description: "Step-by-step run breakdown for troubleshooting.",
      icon: <Wrench className="h-6 w-6" />
    },
    {
      title: "Errors Panel",
      description: "View warnings & problem links for quick fixes.",
      icon: <FileCheck className="h-6 w-6" />
    },
    {
      title: "Model Profiler",
      description: "Compare speed, cost, quality across models.",
      icon: <Target className="h-6 w-6" />
    }
  ];

  const agentDevelopment = [
    {
      title: "Prompt Engineering",
      description: "Write or auto-generate prompts for optimal results.",
      icon: <FileText className="h-6 w-6" />
    },
    {
      title: "Custom Functions",
      description: "Extend with Python/JS for specialized capabilities.",
      icon: <Code className="h-6 w-6" />
    },
    {
      title: "Auto Docs",
      description: "Document custom code automatically for maintenance.",
      icon: <FileCheck className="h-6 w-6" />
    },
    {
      title: "Function Tester",
      description: "Validate with test data before deployment.",
      icon: <TestTube className="h-6 w-6" />
    },
    {
      title: "Prompt Tester",
      description: "Chat with AI to refine prompts interactively.",
      icon: <MessageSquare className="h-6 w-6" />
    },
    {
      title: "API Builder",
      description: "Create & log requests for external integrations.",
      icon: <Webhook className="h-6 w-6" />
    }
  ];

  const workspaceManagement = [
    {
      title: "Organizations & Teams",
      description: "Manage multiple workspaces with role-based access.",
      icon: <Users className="h-6 w-6" />
    },
    {
      title: "Budgets",
      description: "Control monthly or per-agent usage limits.",
      icon: <Target className="h-6 w-6" />
    },
    {
      title: "Payment Options",
      description: "Multiple payment methods for flexible billing.",
      icon: <Cog className="h-6 w-6" />
    },
    {
      title: "Version Control",
      description: "View & restore builds with complete history.",
      icon: <GitBranch className="h-6 w-6" />
    },
    {
      title: "API Keys",
      description: "Manage external service integrations securely.",
      icon: <Key className="h-6 w-6" />
    },
    {
      title: "Workspace Transfer",
      description: "Move agents across accounts seamlessly.",
      icon: <Settings className="h-6 w-6" />
    }
  ];

  const integrationLogos = [
    "Zapier", "Slack", "Google", "HubSpot", "Salesforce", "Notion", 
    "Microsoft", "OpenAI", "Anthropic", "GitHub", "AWS", "Stripe"
  ];

  const AgentCard = ({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) => (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border bg-card">
      <CardContent className="p-6">
        <div className="flex flex-col items-start gap-3">
          <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
            {icon}
          </div>
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </CardContent>
    </Card>
  );

  const SectionGrid = ({ title, items }: { title: string; items: any[] }) => (
    <section className="py-12 sm:py-16">
      <div className="container px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {items.map((item, index) => (
            <AgentCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
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

        {/* Agent Collections */}
        <SectionGrid title="AI Agents for Growth" items={agentTypes} />

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