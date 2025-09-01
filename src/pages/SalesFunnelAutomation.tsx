import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { HeroSection } from "@/components/sections/HeroSection";
import SFALeadForm from "@/components/forms/SFALeadForm";
import SplitSection from "@/components/sections/SplitSection";
import salesHeroImage from "@/assets/sales-automation-hero.jpg";
import automationBenefitsImage from "@/assets/automation-benefits.jpg";
import ghlPlatformImage from "@/assets/ghl-platform.jpg";
import systemIntegrationImage from "@/assets/system-integration.jpg";
import businessAutomatedImage from "@/assets/business-automated.jpg";
const SalesFunnelAutomation = () => {
  return <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-muted/50 text-foreground">
      <Helmet>
        <title>Sales Funnel Automation - Automate To Sell</title>
        <meta name="description" content="Automated sales & marketing systems built for your business. Streamline sales, nurture leads, and grow revenue with smart automation strategies." />
        <meta name="keywords" content="sales automation, marketing automation, GoHighLevel, CRM, lead nurturing, sales funnel" />
        <link rel="canonical" href="/sales-funnel-automation" />
      </Helmet>

      <SiteHeader />
      
      <main>
        <HeroSection title="Automated Sales & Marketing Systems, Built for Your Business" subtitle="We design and implement smart automation strategies using the right Martech tools utilising our GoHighLevel agency to streamline your sales, nurture leads, and grow revenue without increasing your workload." ctaText="Book a Sales & Marketing Automation Consultation" ctaLink="https://www.automatetosell.com/ats-application" backgroundImage={salesHeroImage} />

        <SplitSection title="Why Automation Matters" image={automationBenefitsImage} imageAlt="Business automation benefits and 24/7 lead response" description={<div className="space-y-4">
              <p>Today's customers expect instant responses, personalised experiences, and consistent follow-up.


Without automation, that's impossible to deliver at scale.</p>
              <p className="font-semibold">The right Sales & Marketing Automation system:</p>
              <ul className="space-y-2 list-disc list-inside">
                <li>Responds instantly to leads 24/7</li>
                <li>Nurtures prospects until they're ready to buy</li>
                <li>Keeps your sales pipeline full without manual chasing</li>
                <li>Ensures every customer gets the right message at the right time</li>
              </ul>
              <p>But the key is <em>right</em>. Automation is only powerful when it's tailored to your business not just stacked with tech for the sake of it.</p>
            </div>} />

        {/* Combined Process Section with Background */}
        <section className="relative py-12 sm:py-16 md:py-24">
          {/* Background Image with Dark Overlay */}
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${ghlPlatformImage})` }}>
            <div className="absolute inset-0 bg-black/70"></div>
          </div>
          
          {/* Content */}
          <div className="container relative z-10 px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-white">
                Our Process – From Strategy to Fully-Integrated Systems
              </h2>
              
              {/* 5 Steps in 2 Rows Layout */}
              <div className="space-y-6 md:space-y-8">
                {/* First Row - 3 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                  {/* Step 1 */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                    <div className="text-center mb-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-primary-foreground font-bold text-lg">1</span>
                      </div>
                      <h3 className="font-semibold text-white text-lg mb-3">Discovery & Strategy</h3>
                    </div>
                    <p className="text-white/90 text-sm">
                      We start by understanding your sales process, marketing channels, and customer journey. Together, we identify the best opportunities for automation and map a clear strategy.
                    </p>
                  </div>

                  {/* Step 2 */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                    <div className="text-center mb-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-primary-foreground font-bold text-lg">2</span>
                      </div>
                      <h3 className="font-semibold text-white text-lg mb-3">Platform Selection</h3>
                    </div>
                    <p className="text-white/90 text-sm">
                      As a GoHighLevel (GHL) Agency Owner, we have access to one of the most powerful all-in-one CRM and marketing automation platforms available but we only recommend the tools you actually need.
                    </p>
                  </div>

                  {/* Step 3 */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                    <div className="text-center mb-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-primary-foreground font-bold text-lg">3</span>
                      </div>
                      <h3 className="font-semibold text-white text-lg mb-3">System Build</h3>
                    </div>
                    <div className="text-white/90 text-sm">
                      <p className="mb-3">We design and build your automation system, integrating:</p>
                      <ul className="space-y-1 list-disc list-inside text-xs">
                        <li>CRM setup and data migration</li>
                        <li>Custom workflows and triggers</li>
                        <li>Email and SMS follow-up sequences</li>
                        <li>Landing pages and funnels</li>
                        <li>Appointment scheduling</li>
                        <li>AI-assisted lead qualification</li>
                        <li>Integration with existing tools</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Second Row - 2 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
                  {/* Step 4 */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                    <div className="text-center mb-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-primary-foreground font-bold text-lg">4</span>
                      </div>
                      <h3 className="font-semibold text-white text-lg mb-3">Testing & Training</h3>
                    </div>
                    <p className="text-white/90 text-sm">
                      We fully test every integration and train your team so they can manage, monitor, and optimise your system.
                    </p>
                  </div>

                  {/* Step 5 */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                    <div className="text-center mb-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-primary-foreground font-bold text-lg">5</span>
                      </div>
                      <h3 className="font-semibold text-white text-lg mb-3">Ongoing Optimisation</h3>
                    </div>
                    <p className="text-white/90 text-sm">
                      We can continue to monitor performance, refine workflows, and add new capabilities as your business evolves.
                    </p>
                  </div>
                </div>
              </div>

              {/* Why Work With Us Section */}
              <div className="mt-12 md:mt-16">
                <h3 className="font-semibold text-white text-xl mb-6 text-center">Why Work With Us</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="text-white/90 text-sm">
                    <strong className="text-white">Certified GHL Agency Owner</strong> – deep expertise with GoHighLevel's CRM, funnel, and automation tools
                  </div>
                  <div className="text-white/90 text-sm">
                    <strong className="text-white">Martech Strategy First</strong> – technology serves the strategy, not the other way around
                  </div>
                  <div className="text-white/90 text-sm">
                    <strong className="text-white">Full Integration Capability</strong> – we connect your sales, marketing, and customer service into one seamless system
                  </div>
                  <div className="text-white/90 text-sm">
                    <strong className="text-white">AI When It's Useful</strong> – we integrate AI features where they drive ROI not because it's trendy
                  </div>
                  <div className="text-white/90 text-sm">
                    <strong className="text-white">Measurable Results</strong> – track every lead, deal, and conversion from a single dashboard
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SplitSection title="Your Business, Automated" image={businessAutomatedImage} imageAlt="Business growth through automation and increased revenue" reverse description={<div className="space-y-4">
              <p>With the right sales and marketing automation system, you can:</p>
              <ul className="space-y-2 list-disc list-inside">
                <li>Capture more leads without spending more on ads</li>
                <li>Nurture relationships automatically</li>
                <li>Shorten your sales cycle</li>
                <li>Increase revenue while reducing manual work</li>
              </ul>
              <p className="font-medium">The result: More time for you and your team to focus on high-value tasks while your system keeps working in the background.</p>
            </div>} />

        <SFALeadForm />
      </main>

      <SiteFooter />
    </div>;
};
export default SalesFunnelAutomation;