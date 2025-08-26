import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import HeroSection from "@/components/sections/HeroSection";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
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
      title: "Web Apps",
      description: "User-facing apps with screens & forms.",
      icon: <Monitor className="h-6 w-6" />
    },
    {
      title: "Autonomous Agents",
      description: "Scheduled automations that run independently.",
      icon: <Bot className="h-6 w-6" />
    },
    {
      title: "Browser Extensions",
      description: "Triggered via browser toolbar for seamless integration.",
      icon: <Globe className="h-6 w-6" />
    },
    {
      title: "Email Triggered",
      description: "Activate via forwarding or CC for automated responses.",
      icon: <Mail className="h-6 w-6" />
    },
    {
      title: "Webhooks & APIs",
      description: "Trigger via Zapier, Make, or any app integration.",
      icon: <Webhook className="h-6 w-6" />
    },
    {
      title: "MCP Servers",
      description: "Expose agent-to-agent capabilities for complex workflows.",
      icon: <Server className="h-6 w-6" />
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
    <section className="py-16">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
          title="Automate Anything with AI Agents"
          subtitle="Launch AI agents as apps, automations, or integrations wherever you need them."
          ctaText="Start Building"
          ctaLink="https://www.automatetosell.com/ats-application"
          backgroundImage="/lovable-uploads/6f46dcfa-73ab-402b-8d25-de2cdf561d8c.png"
        />

        {/* Agent Collections */}
        <SectionGrid title="Agent Types" items={agentTypes} />
        <SectionGrid title="Content Generation" items={contentGeneration} />
        <SectionGrid title="Data Ingestion" items={dataIngestion} />
        <SectionGrid title="Social & Communications" items={socialCommunications} />
        <SectionGrid title="Human in the Loop" items={humanInLoop} />
        <SectionGrid title="Testing & Quality Assurance" items={testingQA} />
        <SectionGrid title="Agent Development" items={agentDevelopment} />
        <SectionGrid title="Workspace & Management" items={workspaceManagement} />

        {/* Integrations Showcase */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Seamless Integrations</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
              {integrationLogos.map((logo, index) => (
                <div key={index} className="flex items-center justify-center p-4 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <span className="font-semibold text-muted-foreground">{logo}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Banner */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Automate Anything. Start Today.</h2>
            <a href="https://www.automatetosell.com/ats-application" target="_blank" rel="noreferrer">
              <Button variant="secondary" size="lg">Get Started Free</Button>
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
};

export default Agents;