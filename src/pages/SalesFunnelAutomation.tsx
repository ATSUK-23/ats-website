import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { HeroSection } from "@/components/sections/HeroSection";
import SplitSection from "@/components/sections/SplitSection";
import salesHeroImage from "@/assets/sales-automation-hero.jpg";
import automationBenefitsImage from "@/assets/automation-benefits.jpg";
import ghlPlatformImage from "@/assets/ghl-platform.jpg";
import systemIntegrationImage from "@/assets/system-integration.jpg";
import businessAutomatedImage from "@/assets/business-automated.jpg";

const SalesFunnelAutomation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-muted/50">
      <Helmet>
        <title>Sales Funnel Automation - Automate To Sell</title>
        <meta name="description" content="Automated sales & marketing systems built for your business. Streamline sales, nurture leads, and grow revenue with smart automation strategies." />
        <meta name="keywords" content="sales automation, marketing automation, GoHighLevel, CRM, lead nurturing, sales funnel" />
        <link rel="canonical" href="/sales-funnel-automation" />
      </Helmet>

      <SiteHeader />
      
      <main>
        <HeroSection
          title="Automated Sales & Marketing Systems, Built for Your Business"
          subtitle="We design and implement smart automation strategies using the right Martech tools — including our GoHighLevel agency platform — to streamline your sales, nurture leads, and grow revenue without increasing your workload."
          ctaText="Book a Sales & Marketing Automation Consultation"
          ctaLink="https://www.automatetosell.com/ats-application"
          backgroundImage={salesHeroImage}
          className="bg-gradient-to-br from-background via-background/95 to-muted/30"
        />

        <SplitSection
          title="Why Automation Matters"
          image={automationBenefitsImage}
          imageAlt="Business automation benefits and 24/7 lead response"
          description={
            <div className="space-y-4">
              <p>Today's customers expect instant responses, personalised experiences, and consistent follow-up. Without automation, that's impossible to deliver at scale.</p>
              <p className="font-semibold">The right Sales & Marketing Automation system:</p>
              <ul className="space-y-2 list-disc list-inside">
                <li>Responds instantly to leads 24/7</li>
                <li>Nurtures prospects until they're ready to buy</li>
                <li>Keeps your sales pipeline full without manual chasing</li>
                <li>Ensures every customer gets the right message at the right time</li>
              </ul>
              <p>But the key is <em>right</em>. Automation is only powerful when it's tailored to your business — not just stacked with tech for the sake of it.</p>
            </div>
          }
        />

        <SplitSection
          title="Our Process – From Strategy to Fully-Integrated Systems"
          image={ghlPlatformImage}
          imageAlt="GoHighLevel platform and automation system setup"
          reverse
          description={
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Step 1 – Discovery & Strategy</h3>
                <p className="text-sm">We start by understanding your sales process, marketing channels, and customer journey. Together, we identify the best opportunities for automation and map a clear strategy.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Step 2 – Platform Selection</h3>
                <p className="text-sm">As a GoHighLevel (GHL) Agency Owner, we have access to one of the most powerful all-in-one CRM and marketing automation platforms available — but we only recommend the tools you actually need.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Step 3 – System Build</h3>
                <p className="text-sm mb-2">We design and build your automation system, integrating:</p>
                <ul className="text-sm space-y-1 list-disc list-inside">
                  <li>CRM setup and data migration</li>
                  <li>Custom workflows and triggers</li>
                  <li>Email and SMS follow-up sequences</li>
                  <li>Landing pages and funnels</li>
                  <li>Appointment scheduling</li>
                  <li>AI-assisted lead qualification and messaging (when relevant)</li>
                  <li>Integration with existing tools (e.g., payment processors, e-commerce, analytics)</li>
                </ul>
              </div>
            </div>
          }
        />

        <SplitSection
          title="Complete Implementation & Support"
          image={systemIntegrationImage}
          imageAlt="System integration and testing process"
          description={
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Step 4 – Testing & Training</h3>
                <p className="text-sm">We fully test every integration and train your team so they can manage, monitor, and optimise your system.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Step 5 – Ongoing Optimisation</h3>
                <p className="text-sm">We can continue to monitor performance, refine workflows, and add new capabilities as your business evolves.</p>
              </div>
              <div className="mt-8">
                <h3 className="font-semibold mb-4">Why Work With Us</h3>
                <ul className="space-y-2 text-sm">
                  <li><strong>Certified GHL Agency Owner</strong> – deep expertise with GoHighLevel's CRM, funnel, and automation tools</li>
                  <li><strong>Martech Strategy First</strong> – technology serves the strategy, not the other way around</li>
                  <li><strong>Full Integration Capability</strong> – we connect your sales, marketing, and customer service into one seamless system</li>
                  <li><strong>AI When It's Useful</strong> – we integrate AI features where they drive ROI — not because it's trendy</li>
                  <li><strong>Measurable Results</strong> – track every lead, deal, and conversion from a single dashboard</li>
                </ul>
              </div>
            </div>
          }
        />

        <SplitSection
          title="Your Business, Automated"
          image={businessAutomatedImage}
          imageAlt="Business growth through automation and increased revenue"
          reverse
          description={
            <div className="space-y-4">
              <p>With the right sales and marketing automation system, you can:</p>
              <ul className="space-y-2 list-disc list-inside">
                <li>Capture more leads without spending more on ads</li>
                <li>Nurture relationships automatically</li>
                <li>Shorten your sales cycle</li>
                <li>Increase revenue while reducing manual work</li>
              </ul>
              <p className="font-medium">The result: More time for you and your team to focus on high-value tasks while your system keeps working in the background.</p>
            </div>
          }
        />

        <section className="container py-16 md:py-24 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let's Build a Sales & Marketing Machine for Your Business
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We'll work with you to create an automation strategy, select the right tech, and build an integrated system that turns prospects into customers — automatically.
            </p>
            <a href="https://www.automatetosell.com/ats-application" target="_blank" rel="noreferrer">
              <Button size="lg" className="text-lg px-8 py-3">
                Book Your Consultation
              </Button>
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
};

export default SalesFunnelAutomation;