import { Helmet } from "react-helmet-async";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { Button } from "@/components/ui/button";
import SplitSection from "@/components/sections/SplitSection";
import heroImage from "@/assets/ecommerce-hero.jpg";
import globalSystemsImage from "@/assets/global-systems.jpg";
import shopifyImage from "@/assets/shopify-stores.jpg";
import marketplacesImage from "@/assets/marketplaces.jpg";
import adManagementImage from "@/assets/ad-management.jpg";
import crowdfundingImage from "@/assets/crowdfunding.jpg";
import growthImage from "@/assets/ecommerce-growth.jpg";

const ECommerce = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>E-Commerce Solutions - Scale Your Online Sales | Automate To Sell</title>
        <meta name="description" content="Scale your online sales with smart e-commerce systems. From Shopify stores to global systems, marketplaces, and ad management - we help you sell more and manage everything seamlessly." />
        <meta name="keywords" content="e-commerce, Shopify, online sales, marketplaces, Amazon, eBay, ad management, global systems, crowdfunding" />
        <link rel="canonical" href="https://automatetosell.com/e-commerce" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "E-Commerce Solutions",
            "description": "Scale your online sales with smart e-commerce systems and automation",
            "provider": {
              "@type": "Organization",
              "name": "Automate To Sell"
            },
            "serviceType": "E-Commerce Development and Management",
            "areaServed": "Worldwide"
          })}
        </script>
      </Helmet>

      <SiteHeader />

      <main>
        {/* Hero Section */}
        <SplitSection
          title="Scale Your Online Sales with Smart E-Commerce Systems"
          description={
            <>
              <p className="text-lg mb-4">
                We help businesses design, integrate, and automate their e-commerce operations — so you can sell more, reach more customers, and manage everything seamlessly across platforms and markets.
              </p>
              <p>
                From global commerce systems to Shopify stores, marketplaces, and ad management — we bring the strategy, the tech, and the hands-on implementation to get your products in front of the right customers and keep sales growing without adding operational headaches.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Button variant="hero" size="lg">
                  Book an E-Commerce Consultation
                </Button>
              </div>
            </>
          }
          image={heroImage}
          imageAlt="E-commerce dashboard showing global sales analytics and multi-platform management"
        />

        {/* Global Systems */}
        <SplitSection
          title="One View of Your Entire Business"
          description={
            <>
              <p className="mb-4">
                If you're selling across multiple countries, channels, or fulfilment partners, you need more than a storefront — you need a connected system.
              </p>
              <p className="mb-6">
                We unify your e-commerce stack so inventory, orders, payments, and customer data flow smoothly between your website, marketplaces, warehouses, and analytics.
              </p>
              <div className="space-y-2 mb-6">
                <h4 className="font-semibold text-lg">What We Do:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Multi-region product catalogues with currency and tax handling</li>
                  <li>• Integration of ERP, CRM, WMS, and PIM systems</li>
                  <li>• Centralised inventory and order management</li>
                  <li>• Automated fulfilment and shipping workflows</li>
                  <li>• Analytics and reporting dashboards for real-time insights</li>
                </ul>
              </div>
              <p className="font-medium">
                One source of truth for your entire operation means less manual work, fewer errors, and more time to focus on growth.
              </p>
            </>
          }
          image={globalSystemsImage}
          imageAlt="Unified business systems dashboard showing connected ERP, CRM, and inventory management"
          reverse
        />

        {/* Shopify */}
        <SplitSection
          title="Shopify Stores Built to Sell and Scale"
          description={
            <>
              <p className="mb-6">
                Whether you're launching a new Shopify store, migrating from another platform, or levelling up your existing setup — we can design, build, and optimise your store to convert more visitors into buyers.
              </p>
              <div className="space-y-2 mb-6">
                <h4 className="font-semibold text-lg">What We Do:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Custom theme design and development</li>
                  <li>• App integrations to extend store functionality</li>
                  <li>• Conversion rate optimisation and A/B testing</li>
                  <li>• Subscription, bundle, and upsell systems</li>
                  <li>• Headless Shopify builds for faster, flexible storefronts</li>
                </ul>
              </div>
              <p className="font-medium">
                We don't just build a store — we create a sales engine that's easy to manage and built for future growth.
              </p>
            </>
          }
          image={shopifyImage}
          imageAlt="Modern Shopify store interface with conversion optimization and sales analytics"
        />

        {/* Marketplaces */}
        <SplitSection
          title="Win on Amazon, eBay, Etsy and Beyond"
          description={
            <>
              <p className="mb-6">
                Marketplaces are powerful growth channels — if you know how to manage them. We set up, optimise, and automate your presence on major marketplaces so you can sell more with less manual effort.
              </p>
              <div className="space-y-2 mb-6">
                <h4 className="font-semibold text-lg">What We Do:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Marketplace account setup and integration</li>
                  <li>• Product listing optimisation and keyword targeting</li>
                  <li>• Automated inventory sync across platforms</li>
                  <li>• Marketplace advertising and promotions</li>
                  <li>• Policy compliance and IP protection monitoring</li>
                </ul>
              </div>
              <p className="font-medium">
                Maximise visibility, stay competitive, and keep your marketplace operations running smoothly — without burning hours on repetitive tasks.
              </p>
            </>
          }
          image={marketplacesImage}
          imageAlt="Multiple marketplace platforms showing automated product listings and inventory sync"
          reverse
        />

        {/* Ad Management */}
        <SplitSection
          title="Performance Ads That Drive Sales"
          description={
            <>
              <p className="mb-6">
                We run e-commerce ad campaigns that combine creativity with automation to drive traffic, increase conversions, and deliver measurable ROI.
              </p>
              <div className="space-y-2 mb-6">
                <h4 className="font-semibold text-lg">What We Do:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Google Shopping, Meta Ads, TikTok, and Amazon Ads management</li>
                  <li>• AI-driven creative testing and optimisation</li>
                  <li>• Dynamic product ads synced to your inventory</li>
                  <li>• ROAS tracking and budget pacing automation</li>
                  <li>• Campaign reporting with actionable insights</li>
                </ul>
              </div>
              <p className="font-medium">
                Stop wasting ad spend — our performance-focused campaigns ensure every dollar works harder to bring you more sales.
              </p>
            </>
          }
          image={adManagementImage}
          imageAlt="Performance advertising dashboard with ROAS metrics and campaign optimization"
        />

        {/* Crowdfunding */}
        <SplitSection
          title="Launch Your Product to the World — and Get Funded Fast"
          description={
            <>
              <p className="mb-4">
                Crowdfunding is one of the most powerful ways to launch a new product, test the market, and build a loyal customer base before you've even shipped.
              </p>
              <p className="mb-6">
                That's why we've partnered with LaunchBoom — the No. 1 launch agency in the world, helping product creators raise over $175M to create their dream businesses.
              </p>
              <p className="mb-6">
                Certified by Kickstarter and Indiegogo, LaunchBoom has developed a proprietary 4-step process proven to deliver results — with many campaigns funded in less than 24 hours (average funding time: just 15 minutes).
              </p>
              <div className="space-y-4 mb-6">
                <h4 className="font-semibold text-lg">The LaunchBoom 4-Step Process:</h4>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-medium">1. Set Up Funnel</h5>
                    <p className="text-muted-foreground">Use proprietary strategies proven to convert 30–50× more and eliminate wasteful ad spend.</p>
                  </div>
                  <div>
                    <h5 className="font-medium">2. Test & Validate</h5>
                    <p className="text-muted-foreground">Test your product and positioning with real customer demand before you commit to a full launch.</p>
                  </div>
                  <div>
                    <h5 className="font-medium">3. Build an Audience</h5>
                    <p className="text-muted-foreground">Attract real buyers and craft a campaign message that speaks directly to them.</p>
                  </div>
                  <div>
                    <h5 className="font-medium">4. LaunchBoom 🚀</h5>
                    <p className="text-muted-foreground">Launch on Kickstarter or Indiegogo with a campaign primed to succeed — and get funded fast.</p>
                  </div>
                </div>
              </div>
              <p className="font-medium mb-6">
                By combining our e-commerce expertise with LaunchBoom's proven crowdfunding system, we help you reduce risk, maximise exposure, and bring your product to market with both funding and an audience in place.
              </p>
              <Button variant="hero" size="lg">
                Book a Crowdfunding Strategy Call
              </Button>
            </>
          }
          image={crowdfundingImage}
          imageAlt="Crowdfunding campaign dashboard showing Kickstarter and Indiegogo funding progress"
          reverse
        />

        {/* e-Comm-as-a-Service Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">e-Comm-as-a-Service</h2>
              <div className="max-w-4xl mx-auto space-y-4 text-muted-foreground">
                <p className="text-lg">
                  Our e-Comm-as-a-Service provides a battle tested online sales system which includes customer targeting, sales conversions optimization, automated end to end order fulfilment & customer data management with 24/7 hands on customer support.
                </p>
                <p className="text-lg font-medium">
                  Our solution enables your business to rapidly scale globally without needing to increases your resources!
                </p>
              </div>
            </div>

            {/* 4 Columns */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="text-center space-y-4">
                <h3 className="text-xl font-bold text-primary">CUSTOMER TARGETING</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p className="font-medium">How do you get your ideal customers to discover your products?</p>
                  <p>Using paid Search & Social Media, we create ad campaigns which target your ideal clients and drive them to your online proposition.</p>
                  <p className="font-medium">This includes Facebook, Instagram, Google, TikTok & YouTube.</p>
                </div>
              </div>

              <div className="text-center space-y-4">
                <h3 className="text-xl font-bold text-primary">SALES CONVERSIONS</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>Ensure your products are available in the best sales platforms to simplify your customers purchase.</p>
                  <p>This could be Shopify, Marketplaces or even Sales Funnels.</p>
                  <p className="font-medium">It is crucial that your product is easily available to purchase in your customers preferred digital shopping location.</p>
                </div>
              </div>

              <div className="text-center space-y-4">
                <h3 className="text-xl font-bold text-primary">CUSTOMER MANAGEMENT</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>Centralise all customer data in a single tech platform.</p>
                  <p>Simple to access and use with complete visibility on your customers data.</p>
                  <p className="font-medium">We also provide 24/7 customer support solutions you can rely on to ensure your customers are looked after during pre & post purchase.</p>
                </div>
              </div>

              <div className="text-center space-y-4">
                <h3 className="text-xl font-bold text-primary">AUTOMATED FULFILMENT</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>End to End from manufacturer's bulk shipment to your warehouse through to last mile delivery to your customer.</p>
                  <p className="font-medium">All sales channels and fulfilment partners in all territories are integrated and automated to maximize speed of delivery whilst reducing people resources</p>
                </div>
              </div>
            </div>

            {/* Bottom Content */}
            <div className="bg-card rounded-lg p-8 border">
              <div className="max-w-4xl mx-auto text-center space-y-6">
                <h3 className="text-2xl font-bold">Strategy & Business Case Development</h3>
                <p className="text-muted-foreground">
                  We help you structure your D2C offers to boost engagement, increase cart size, and drive repeat purchases—setting you up for long-term success and a profitable exit strategy.
                </p>
                <div className="text-lg font-medium space-y-2">
                  <p>You keep your focus on creating outstanding products whilst we</p>
                  <p className="text-primary font-bold text-xl">AUTOMATE & SCALE your global e-commerce business</p>
                </div>
                <Button variant="hero" size="lg" className="mt-6">
                  Book Your e-Comm Strategy Session
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <SplitSection
          title="Let's Grow Your E-Commerce Sales Together"
          description={
            <>
              <p className="mb-6">
                Whether you're selling on one platform or across the globe, we'll help you choose the right tools, set up the right systems, and manage the right campaigns to scale your e-commerce business.
              </p>
              <Button variant="hero" size="lg">
                Book Your Consultation
              </Button>
            </>
          }
          image={growthImage}
          imageAlt="E-commerce growth visualization showing sales scaling and global reach"
        />
      </main>

      <SiteFooter />
    </div>
  );
};

export default ECommerce;