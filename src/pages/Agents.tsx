import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import HeroSection from "@/components/sections/HeroSection";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import AIAgentsLeadForm from "@/components/forms/AIAgentsLeadForm";
import { GlobalSEO } from "@/components/seo/GlobalSEO";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { Target, MessageSquare, PenTool, Network, RefreshCw, CheckSquare, Zap, BookOpen, Headphones, Radio, TrendingUp, Puzzle, AlertTriangle, Wand2, PoundSterling } from "lucide-react";

const Agents = () => {
  const agentTypes = [{
    id: "lead-generation",
    title: "AI Lead Generation Agent",
    description: "Fill your sales calendar with qualified prospects through automated LinkedIn and cold-email outreach that never sleeps.",
    bullets: ["Problem: Prospecting manually is slow, inconsistent, and drains your team's time.", "Automation: Identifies target accounts, crafts personalised messages, and books calls automatically.", "Solution: Generates a predictable flow of meetings without relying on constant manual effort."],
    cta: "Faster Lead - Performance Model",
    icon: <Target className="h-8 w-8" />,
    category: "AI Sales Automation"
  }, {
    id: "inbound-response",
    title: "AI Inbound Lead Response Agent",
    description: "Instantly convert every incoming enquiry into a booked meeting with intelligent replies and automated scheduling.",
    bullets: ["Problem: Delayed responses cause leads to lose interest or go elsewhere.", "Automation: Replies instantly via chat, email, or web forms, qualifies leads, and books calls into calendars.", "Solution: Ensures every inbound opportunity is handled fast and professionally 24/7."],
    cta: "Respond & Convert Instantly",
    icon: <MessageSquare className="h-8 w-8" />,
    category: "AI Sales Automation"
  }, {
    id: "authority-builder",
    title: "AI Authority Builder Agent",
    description: "Publish fresh, relevant content that positions your brand as the industry voice automatically.",
    bullets: ["Problem: Producing thought-leadership content consistently is time-consuming and hard to sustain.", "Automation: Tracks trends, generates blog and social posts in your tone, and schedules them for release.", "Solution: Keeps your audience engaged and builds trust with zero content bottlenecks."],
    cta: "Build Authority",
    icon: <PenTool className="h-8 w-8" />,
    category: "AI Content Automation"
  }, {
    id: "social-engagement",
    title: "AI Social Engagement Agent",
    description: "Build meaningful relationships on social media with smart, context-aware interactions handled automatically.",
    bullets: ["Problem: Missed comments and slow engagement mean fewer genuine connections.", "Automation: Monitors hashtags, competitor posts, and audience activity, replying with relevant messages.", "Solution: Grows brand presence and nurtures prospects without needing daily manual effort."],
    cta: "Boost Engagement",
    icon: <Network className="h-8 w-8" />,
    category: "AI Marketing Automation"
  }, {
    id: "crm-reactivation",
    title: "AI CRM Reactivation Agent",
    description: "Re-ignite cold contacts and past clients in your CRM with personalised outreach that wins them back.",
    bullets: ["Problem: Valuable leads go dormant and are rarely re-contacted.", "Automation: Reviews historic data, segments contacts, and sends contextual follow-ups automatically.", "Solution: Converts forgotten records into new deals and revenue opportunities."],
    cta: "Reignite Pipeline",
    icon: <RefreshCw className="h-8 w-8" />,
    category: "AI CRM Management"
  }, {
    id: "deal-qualifier",
    title: "AI Deal Qualifier Agent",
    description: "Know exactly who to chase with instant data-driven insights into every prospect before the first call.",
    bullets: ["Problem: Sales teams spend hours researching leads that don't convert.", "Automation: Pulls firmographic and behavioural data, scores leads, and flags best-fit opportunities.", "Solution: Lets your team focus only on the prospects most likely to close."],
    cta: "Qualify Smarter",
    icon: <CheckSquare className="h-8 w-8" />,
    category: "AI Lead Nurturing"
  }, {
    id: "proposal-quote",
    title: "AI Proposal & Quote Agent",
    description: "Create and send personalised proposals in minutes, not hours, with automated follow-ups that close deals faster.",
    bullets: ["Problem: Writing proposals manually slows down your sales process.", "Automation: Extracts notes from discovery calls, generates branded proposals, and triggers reminders.", "Solution: Speeds up quoting and keeps prospects moving smoothly toward signature."],
    cta: "Quote Instantly",
    icon: <Zap className="h-8 w-8" />,
    category: "AI Sales Enablement"
  }, {
    id: "sales-knowledge",
    title: "AI Sales Knowledge Agent",
    description: "Give every rep an instant knowledge base that delivers playbooks, pricing, and pitch answers on demand.",
    bullets: ["Problem: Teams lose time searching for information or improvising answers.", "Automation: Centralises all product data and training material into a smart chat assistant.", "Solution: Ensures consistent, confident conversations that improve conversion rates."],
    cta: "Train Instantly",
    icon: <BookOpen className="h-8 w-8" />,
    category: "AI Sales Enablement"
  }, {
    id: "customer-service",
    title: "AI Customer Service Agent",
    description: "Deliver instant, consistent support across email, chat, and social channels with intelligent triage and response.",
    bullets: ["Problem: Support inboxes fill with repetitive questions that slow your team down.", "Automation: Detects message intent, responds automatically, and routes complex issues to humans.", "Solution: Cuts response times and boosts customer satisfaction around the clock."],
    cta: "Support Smarter",
    icon: <Headphones className="h-8 w-8" />,
    category: "AI Support Automation"
  }, {
    id: "sales-call-analyser",
    title: "AI Sales Call Analyser Agent",
    description: "Transform every sales conversation into actionable insights and next-step recommendations automatically.",
    bullets: ["Problem: Important insights from sales calls are lost in inconsistent note-taking.", "Automation: Transcribes conversations, scores performance, and drafts personalised follow-ups.", "Solution: Delivers sharper coaching insights and higher close rates across your team."],
    cta: "Analyse Calls",
    icon: <Radio className="h-8 w-8" />,
    category: "AI Analytics"
  }, {
    id: "sales-manager",
    title: "AI Sales Manager Agent",
    description: "Gain real-time visibility into your team's performance without endless call reviews or reports.",
    bullets: ["Problem: Managers struggle to track activity and identify where coaching is needed.", "Automation: Analyses call data, compiles concise summaries, and highlights performance trends.", "Solution: Frees up leadership time and improves results through data-driven feedback."],
    cta: "Manage Smarter",
    icon: <TrendingUp className="h-8 w-8" />,
    category: "AI Analytics"
  }, {
    id: "custom-agent",
    title: "Fully Customised AI Agent",
    description: "Design a purpose-built AI agent crafted precisely around your workflows and growth objectives.",
    bullets: ["Problem: Generic automations can't solve unique, business-specific challenges.", "Automation: Scopes, designs, and deploys a tailor-made agent that integrates into your tools.", "Solution: Creates measurable impact with AI built exclusively for your business model."],
    cta: "Design Yours",
    icon: <Puzzle className="h-8 w-8" />,
    category: "AI Custom Solutions"
  }];

  // ItemList Schema for all agents
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "AI Growth Agents",
    itemListElement: agentTypes.map((agent, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: agent.title,
        url: `https://automatetosell.com/agents#${agent.id}`
      }
    }))
  };

  // Individual Service schemas for each agent
  const agentSchemas = agentTypes.map(agent => ({
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: agent.title,
    provider: {
      "@type": "Organization",
      name: "Automate to Sell"
    },
    description: agent.description,
    category: agent.category,
    areaServed: "Global"
  }));
  interface AgentCardProps {
    id: string;
    title: string;
    description: string;
    bullets: string[];
    cta: string;
    icon: React.ReactNode;
  }
  const AgentCard = ({
    id,
    title,
    description,
    bullets,
    cta,
    icon
  }: AgentCardProps) => <Card id={id} className="group hover:shadow-xl hover:scale-[1.03] transition-all duration-300 border bg-card h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex flex-col items-center text-center gap-4 flex-grow">
          <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
            {icon}
          </div>
          <h3 className="font-bold text-xl">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
          
          <ul className="text-left text-sm space-y-3 w-full mt-4">
            {bullets.map((bullet, index) => {
            const getBulletIcon = () => {
              if (bullet.startsWith('Problem:')) return <AlertTriangle className="h-4 w-4 text-white flex-shrink-0 mt-0.5" />;
              if (bullet.startsWith('Automation:')) return <Wand2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />;
              if (bullet.startsWith('Solution:')) return <PoundSterling className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />;
              return null;
            };
            const formatBullet = (text: string) => {
              const parts = text.split(':');
              if (parts.length < 2) return text;
              const label = parts[0];
              const content = parts.slice(1).join(':');
              return <>
                    <span className="text-white font-semibold">{label}:</span>
                    <span className="text-muted-foreground">{content}</span>
                  </>;
            };
            return <li key={index} className="flex items-start gap-2 leading-relaxed">
                  {getBulletIcon()}
                  <span>{formatBullet(bullet)}</span>
                </li>;
          })}
          </ul>
          
          <Button className="w-full mt-auto" onClick={() => document.getElementById('ai-agents-form')?.scrollIntoView({
          behavior: 'smooth'
        })}>
            {cta}
          </Button>
        </div>
      </CardContent>
    </Card>;
  return <>
      <GlobalSEO 
        title="AI Growth Agents that Drive Revenue"
        description="Proven AI agents that bring leads, book meetings and speed sales. 12 AI automation agents including lead generation, inbound response, CRM management, content creation, customer service and more."
        path="/agents"
        keywords="AI agents, AI automation, lead generation, sales automation, CRM automation, content automation, customer service automation, sales agents, marketing agents"
      />
      <SchemaMarkup schema={[itemListSchema, ...agentSchemas]} />

      <SiteHeader />
      
      <main>
        {/* Hero Section */}
        <HeroSection title="AI Growth Agents that Drive Revenue" subtitle="Proven AI agents that bring leads, book meetings and speed sales, fully managed and customisable, plus bespoke builds when required." ctaText="See How It Works" ctaLink="#ai-agents-form" backgroundImage="/lovable-uploads/6f46dcfa-73ab-402b-8d25-de2cdf561d8c.png" />

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
            <div className="text-center mb-8 max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">AI Agents for Growth</h2>
              <p className="text-lg text-muted-foreground">
                Our AI Growth Agents tackle every stage of your sales process through automation—from prospecting to closing deals. Each agent solves a specific problem, delivers measurable value, and integrates seamlessly with your existing tech stack.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {agentTypes.map((agent, index) => <AgentCard key={index} {...agent} />)}
            </div>
          </div>
        </section>

        {/* Call to Action Buttons */}
        

        {/* Lead Form */}
        <AIAgentsLeadForm formTag="agent-opt-in" title="Build Your AI Agents Today" subtitle="Tell us about your automation needs and we'll help you build powerful AI agents that work 24/7." />

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
    </>;
};
export default Agents;