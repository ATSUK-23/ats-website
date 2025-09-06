import { Helmet } from "react-helmet-async";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { Button } from "@/components/ui/button";
import SplitSection from "@/components/sections/SplitSection";
import HeroSection from "@/components/sections/HeroSection";
import heroImage from "@/assets/ecommerce-hero.jpg";
import globalEcommerceHero from "@/assets/global-ecommerce-hero.jpg";
import globalSystemsImage from "@/assets/global-systems.jpg";
import shopifyImage from "@/assets/shopify-stores.jpg";
import marketplacesImage from "@/assets/marketplaces.jpg";
import adManagementImage from "@/assets/ad-management.jpg";
import crowdfundingImage from "@/assets/crowdfunding.jpg";
import growthImage from "@/assets/ecommerce-growth.jpg";
import ECommerceLeadForm from "@/components/forms/ECommerceLeadForm";
import { ShoppingCart, Factory, Lightbulb, Target, TrendingUp, Users, Truck } from "lucide-react";
const ECommerce = () => {
  return <div className="min-h-screen bg-background text-foreground">
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
        <HeroSection title="Take Your Winning Products Global Without Growing Your Team" subtitle="Expand into multiple countries with a fully automated & localised e-commerce system that runs 24/7." ctaText="Book Your Global Strategy Call" ctaLink="#ecommerce-form" backgroundImage={globalEcommerceHero} className="text-white" hideSecondaryButton />

        {/* Original Split Section */}
        <SplitSection title="Scale Your Online Sales with Smart E-Commerce Systems" description={<>
              <p className="text-lg mb-4">We help businesses design, integrate, and automate their e-commerce operations so you can sell more, reach more customers, and manage everything seamlessly across platforms, markets and countries</p>
              <p className="text-xl font-bold mb-4">Your Product. Every Market. Fully Managed.</p>
              <p>We expand your winning product into new countries with a complete, done-for-you system utilising Shopify, WP and marketplaces to localise fulfilment, order automation and customer support so you grow faster without extra staff or complexity.</p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Button variant="hero" size="lg" asChild>
                  <a href="#ecommerce-form">Book an E-Commerce Consultation</a>
                </Button>
              </div>
            </>} image="/lovable-uploads/601d3277-bc1d-48ce-9652-1ba452af8b6b.png" imageAlt="E-commerce dashboard showing global sales analytics and multi-platform management" />

        {/* Customer Results Section */}
        <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-primary/10 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="absolute top-0 right-0 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-primary/20 rounded-full blur-3xl opacity-30" />
          <div className="absolute bottom-0 left-0 w-36 sm:w-54 lg:w-72 h-36 sm:h-54 lg:h-72 bg-secondary/20 rounded-full blur-3xl opacity-30" />
          
          <div className="container px-4 sm:px-6 max-w-7xl relative z-10">
            {/* Section Header */}
            <div className="text-center mb-10 sm:mb-12 lg:mb-16 animate-fade-in">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  CUSTOMER RESULTS
                </span>
              </h2>
              <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6 sm:mb-8" />
            </div>

            <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 items-start">
              {/* Video Section */}
              <div className="lg:col-span-1 space-y-4 sm:space-y-6">
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-lg sm:rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-300" />
                  <div className="relative rounded-lg sm:rounded-xl overflow-hidden border bg-card shadow-lg hover-scale">
                    <div className="relative w-full" style={{
                    paddingBottom: '177.78%'
                  }}>
                      <iframe src="https://player.vimeo.com/video/1112524642?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" title="Fraser Importing Success Story" className="absolute top-0 left-0 w-full h-full" />
                    </div>
                  </div>
                </div>
                
                {/* Company Info Card */}
                <div className="bg-card/80 backdrop-blur-sm p-4 sm:p-6 rounded-lg sm:rounded-xl border shadow-lg">
                  <h4 className="text-lg sm:text-xl font-bold mb-2 text-primary">Fraser Importing</h4>
                  <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">Global Medical Products Distributor</p>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-xs sm:text-sm font-medium">Active Since 2020</span>
                  </div>
                </div>
              </div>

              {/* Main Results Content */}
              <div className="lg:col-span-2 space-y-6 sm:space-y-8">
                {/* Hero Stat */}
                <div className="text-center lg:text-left">
                  <div className="inline-block">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
                      <span className="text-muted-foreground">From</span>{" "}
                      <span className="text-primary">$40K</span>{" "}
                      <span className="text-muted-foreground">to</span>{" "}
                      <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">$50M</span>
                    </h3>
                    <p className="text-lg sm:text-xl text-muted-foreground mb-2">in just 4 years</p>
                  </div>
                </div>

                {/* Journey Timeline */}
                <div className="relative">
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary" />
                  
                  <div className="space-y-8">
                    {/* Before */}
                    <div className="flex items-start gap-6">
                      <div className="relative">
                        <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center border-4 border-background shadow-lg">
                          <span className="text-2xl font-bold text-muted-foreground">1</span>
                        </div>
                      </div>
                      <div className="flex-1 bg-card/50 p-6 rounded-xl border">
                        <h5 className="text-lg font-bold mb-2">Starting Point (2020)</h5>
                        <p className="text-muted-foreground">Single Amazon store, $40Kpm revenue, manual operations</p>
                      </div>
                    </div>

                    {/* After */}
                    <div className="flex items-start gap-6">
                      <div className="relative">
                        <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center border-4 border-background shadow-lg">
                          <span className="text-2xl font-bold text-white">2</span>
                        </div>
                      </div>
                      <div className="flex-1 bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-xl border border-primary/20">
                        <h5 className="text-lg font-bold mb-4 text-primary">Today (2024)</h5>
                        <div className="grid md:grid-cols-2 gap-4 mb-6">
                          <div className="bg-card/80 p-4 rounded-lg">
                            <div className="text-2xl font-bold text-primary mb-1">15+</div>
                            <div className="text-sm text-muted-foreground">Marketplaces</div>
                          </div>
                          <div className="bg-card/80 p-4 rounded-lg">
                            <div className="text-2xl font-bold text-primary mb-1">6</div>
                            <div className="text-sm text-muted-foreground">Shopify Stores</div>
                          </div>
                          <div className="bg-card/80 p-4 rounded-lg">
                            <div className="text-2xl font-bold text-primary mb-1">6</div>
                            <div className="text-sm text-muted-foreground">Fulfilment Partners</div>
                          </div>
                          <div className="bg-card/80 p-4 rounded-lg">
                            <div className="text-2xl font-bold text-primary mb-1">5</div>
                            <div className="text-sm text-muted-foreground">Total Staff</div>
                          </div>
                        </div>
                        
                        {/* Revenue Highlight */}
                        <div className="bg-gradient-to-r from-primary to-secondary p-6 rounded-xl text-white text-center">
                          <div className="text-3xl md:text-4xl font-bold mb-2">$1M+</div>
                          <div className="text-lg">Monthly Revenue</div>
                          <div className="text-sm opacity-90 mt-1">Across Multiple Continents</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Team Structure */}
                <div className="bg-card/60 backdrop-blur-sm p-6 rounded-xl border">
                  <h5 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    Lean Team Structure
                  </h5>
                  <div className="grid md:grid-cols-5 gap-3 text-center">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <div className="font-semibold text-sm">Operations Director</div>
                    </div>
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <div className="font-semibold text-sm">3 Support Agents</div>
                      <div className="text-xs text-muted-foreground">(Part-time)</div>
                    </div>
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <div className="font-semibold text-sm">Tech Role</div>
                    </div>
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <div className="font-semibold text-sm">CEO</div>
                    </div>
                    <div className="bg-gradient-to-r from-primary to-secondary p-3 rounded-lg text-white">
                      <div className="font-semibold text-sm">Total: 5</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Help Go Global Section */}
        <section className="py-12 sm:py-16 md:py-24 bg-background">
          <div className="container px-4 sm:px-6">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">Who We Help Go Global</h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
                Expand your reach, own your customer relationships, and grow your revenue across multiple countries, marketplaces, and D2C channels.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* e-Commerce Sellers */}
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-300" />
                <div className="relative bg-card/50 backdrop-blur-sm border-2 border-primary/30 rounded-xl p-6 sm:p-8 text-center space-y-4 sm:space-y-6 h-full hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center ring-1 ring-primary/20">
                    <ShoppingCart className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-foreground">e-Commerce Sellers</h3>
                    <div className="space-y-3 sm:space-y-4 text-sm sm:text-base">
                      <p className="font-medium text-foreground/90">Already selling successfully online in one channel or country?</p>
                      <p className="text-muted-foreground leading-relaxed">
                        You're sitting on a huge growth opportunity. We'll help you scale your winning products to new regions including North America, the UK, Europe, APAC, and Japan without the complexity of building local teams.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Manufacturers */}
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-300" />
                <div className="relative bg-card/50 backdrop-blur-sm border-2 border-primary/30 rounded-xl p-6 sm:p-8 text-center space-y-4 sm:space-y-6 h-full hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center ring-1 ring-primary/20">
                    <Factory className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-foreground">Manufacturers</h3>
                    <div className="space-y-3 sm:space-y-4 text-sm sm:text-base">
                      <p className="font-medium text-foreground/90">Want to create a profitable Direct-to-Consumer (D2C) revenue stream?</p>
                      <p className="text-muted-foreground leading-relaxed">
                        Keep the customer relationship in-house and sell your products at retail margins. We'll help you transform your manufacturing expertise into a global retail brand and position it for acquisition.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Inventors & Creators */}
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-300" />
                <div className="relative bg-card/50 backdrop-blur-sm border-2 border-primary/30 rounded-xl p-6 sm:p-8 text-center space-y-4 sm:space-y-6 h-full hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center ring-1 ring-primary/20">
                    <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-foreground">Inventors & Creators</h3>
                    <div className="space-y-3 sm:space-y-4 text-sm sm:text-base">
                      <p className="font-medium text-foreground/90">Turn your bold product ideas into global success stories.</p>
                      <p className="text-muted-foreground leading-relaxed">
                        Using crowdfunding platforms and proven pre-launch strategies, we'll help you validate demand before you invest in production then expand distribution through multiple countries, marketplaces, and D2C stores.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* e-Comm-as-a-Service Content */}
            <div className="text-center mt-16 py-12 bg-gradient-to-br from-primary/5 via-background to-secondary/5 rounded-2xl border">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  e-Comm-as-a-Service
                </span>
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-8" />
              <div className="max-w-4xl mx-auto space-y-4 text-muted-foreground px-8">
                <p className="text-lg">
                  Our e-Comm-as-a-Service provides a battle tested online sales system which includes customer targeting, sales conversions optimization, automated end to end order fulfilment & customer data management with 24/7 hands on customer support.
                </p>
                <p className="text-lg font-medium text-primary">
                  Our solution enables your business to rapidly scale globally without needing to increases your resources!
                </p>
              </div>
              <div className="mt-8">
                <Button variant="hero" size="lg" asChild>
                  <a href="#ecommerce-form">Book Your Global Strategy Call</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Marketplaces */}
        <SplitSection title="Win on Amazon, eBay and numerous other Marketplaces" description={<>
              <p className="mb-6">
                Marketplaces are powerful growth channels if you know how to manage them. We set up, optimise, and automate your presence on major marketplaces so you can sell more with less manual effort.
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
                Maximise visibility, stay competitive, and keep your marketplace operations running smoothly without burning hours on repetitive tasks.
              </p>
            </>} image={marketplacesImage} imageAlt="Multiple marketplace platforms showing automated product listings and inventory sync" reverse />

        {/* Shopify */}
        <SplitSection title="Shopify Stores Built to Sell and Scale" description={<>
              <p className="mb-6">
                Whether you're launching a new Shopify store, migrating from another platform, or levelling up your existing setup we can design, build, and optimise your store to convert more visitors into buyers.
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
                We don't just build a store we create a sales engine that's easy to manage and built for future growth.
              </p>
            </>} image="/lovable-uploads/ad2c5a27-bfef-4380-8186-bbf7da1628bb.png" imageAlt="Shopify ecosystem integration diagram showing connected services and platforms" />


        {/* Ad Management */}
        <SplitSection title="Performance Ads That Drive Sales" description={<>
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
                Stop wasting ad spend our performance-focused campaigns ensure every dollar works harder to bring you more sales.
              </p>
              <div className="mt-6">
                <Button variant="hero" size="lg" asChild>
                  <a href="#ecommerce-form">Book Your Global Strategy Call</a>
                </Button>
              </div>
            </>} image="/lovable-uploads/be7b54d5-3430-46e2-b634-55880cea311c.png" imageAlt="Multi-platform advertising ecosystem showing Google, Meta, TikTok, and Amazon ads integration" reverse />

        {/* Crowdfunding */}
        <SplitSection title="Launch Your Product to the World and Get Funded Fast" description={<>
              <p className="mb-4">
                Crowdfunding is one of the most powerful ways to launch a new product, test the market, and build a loyal customer base before you've even shipped.
              </p>
              <p className="mb-6">
                That's why we've partnered with LaunchBoom — the No. 1 launch agency in the world, helping product creators raise over $175M to create their dream businesses.
              </p>
              <p className="mb-6">
                Certified by Kickstarter and Indiegogo, LaunchBoom has developed a proprietary 4-step process proven to deliver results with many campaigns funded in less than 24 hours (average funding time: just 15 minutes).
              </p>
              <p className="font-medium mb-6">
                By combining our e-commerce expertise with LaunchBoom's proven crowdfunding system, we help you reduce risk, maximise exposure, and bring your product to market with both funding and an audience in place.
              </p>
              <Button variant="hero" size="lg" asChild>
                <a href="#ecommerce-form">Book a Crowdfunding Strategy Call</a>
              </Button>
            </>} image="/lovable-uploads/ee4cdcd5-6188-4808-b6a2-7339d263f6b5.png" imageAlt="Crowdfunding campaign dashboard showing Kickstarter and Indiegogo funding progress" reverse />

        {/* LaunchBoom 4-Step Process - Full Width */}
        <section className="py-8 md:py-12 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">The LaunchBoom 4-Step Process</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Proven strategies that have helped raise over $175M across successful crowdfunding campaigns
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-card p-8 rounded-xl border shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-primary font-bold text-2xl">1</span>
                </div>
                <h4 className="font-bold text-lg mb-4">Set Up Funnel</h4>
                <p className="text-muted-foreground">Use proprietary strategies proven to convert 30–50× more and eliminate wasteful ad spend.</p>
              </div>
              
              <div className="bg-card p-8 rounded-xl border shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-primary font-bold text-2xl">2</span>
                </div>
                <h4 className="font-bold text-lg mb-4">Test & Validate</h4>
                <p className="text-muted-foreground">Test your product and positioning with real customer demand before you commit to a full launch.</p>
              </div>
              
              <div className="bg-card p-8 rounded-xl border shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-primary font-bold text-2xl">3</span>
                </div>
                <h4 className="font-bold text-lg mb-4">Build an Audience</h4>
                <p className="text-muted-foreground">Attract real buyers and craft a campaign message that speaks directly to them.</p>
              </div>
              
              <div className="bg-card p-8 rounded-xl border shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-2xl">4</span>
                </div>
                <h4 className="font-bold text-lg mb-4">LaunchBoom 🚀</h4>
                <p className="text-muted-foreground">Launch on Kickstarter or Indiegogo with a campaign primed to succeed and get funded fast.</p>
              </div>
            </div>
          </div>
        </section>


        {/* Lead Generation Form */}
        <ECommerceLeadForm />

      </main>

      <SiteFooter />
    </div>;
};
export default ECommerce;