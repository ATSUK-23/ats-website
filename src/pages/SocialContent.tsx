import { Helmet } from "react-helmet-async";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { Button } from "@/components/ui/button";
import SplitSection from "@/components/sections/SplitSection";
import HeroSection from "@/components/sections/HeroSection";
import heroImage from "@/assets/social-hero.jpg";
import brandingBenefitsImage from "@/assets/personal-branding-benefits.jpg";
import contentSystemImage from "@/assets/content-system.jpg";
import authenticContentImage from "@/assets/authentic-content.jpg";
import doneForYouImage from "@/assets/done-for-you.jpg";
import influenceGrowthImage from "@/assets/influence-growth.jpg";

const SocialContent = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Social Content & Personal Branding - Grow Your Influence | Automate To Sell</title>
        <meta name="description" content="Transform your ideas into a powerful online presence. Our done-for-you social content system helps you build your personal brand, grow influence, and attract opportunities." />
        <meta name="keywords" content="personal branding, social media content, content creation, influence marketing, authentic content, brand building" />
        <link rel="canonical" href="https://automatetosell.com/social-content" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Social Content & Personal Branding",
            "description": "Done-for-you social content system to build your personal brand and grow your influence",
            "provider": {
              "@type": "Organization",
              "name": "Automate To Sell"
            },
            "serviceType": "Social Media and Personal Branding Services",
            "areaServed": "Worldwide"
          })}
        </script>
      </Helmet>

      <SiteHeader />

      <main>
        {/* Hero Section */}
        <HeroSection
          title="If You're Not Building Your Personal Brand, You're Being Forgotten"
          subtitle="Stand out in a noisy world with a content system that turns your ideas into consistent, high-impact social presence."
          ctaText="Book Your Social Content Strategy Call"
          ctaLink="https://calendly.com/automatetosell"
          backgroundImage="/lovable-uploads/09efc9f0-7701-4022-a165-746abba2ea45.png"
        />

        {/* Original Hero Content Section */}
        <SplitSection
          title="Turn Your Ideas into a Powerful Online Presence"
          description={
            <>
              <p className="text-lg mb-6">
                Your personal brand is your most valuable business asset. We help you create, curate, publish, and distribute authentic content so you can grow your influence, attract opportunities, and scale your company without losing focus on running it.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg">
                  Book Your Social Content Strategy Call
                </Button>
              </div>
            </>
          }
          image={heroImage}
          imageAlt="Professional content creation workspace with cameras, lights, and editing equipment"
        />

        {/* Why Personal Branding Matters */}
        <SplitSection
          title="Why Personal Branding Matters for Business Growth"
          description={
            <>
              <p className="mb-6">
                In today's market, people don't just buy products or services they buy into people.
              </p>
              <div className="space-y-2 mb-6">
                <h4 className="font-semibold text-lg">A strong personal brand:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Builds trust faster than any ad campaign</li>
                  <li>• Positions you as the go-to authority in your field</li>
                  <li>• Opens doors to partnerships, speaking opportunities, and new customers</li>
                  <li>• Makes your business more resilient in competitive markets</li>
                </ul>
              </div>
              <p className="font-medium">
                If you're not building your brand, you're missing the chance to make your voice and your business stand out.
              </p>
            </>
          }
          image={brandingBenefitsImage}
          imageAlt="Business growth visualization showing personal brand impact with trust building and networking"
          reverse
        />

        {/* Done-for-You System */}
        <SplitSection
          title="Our Done-for-You Social Content System"
          description={
            <>
              <p className="mb-6">
                We've designed a simple, streamlined process that lets you capture the real you then leaves the rest to us.
              </p>
              <div className="space-y-4 mb-6">
                <div>
                  <h5 className="font-semibold">Step 1 – Content Capture</h5>
                  <p className="text-muted-foreground">We guide you in creating authentic, "raw" content short videos, insights, stories, and moments from your business.</p>
                </div>
                <div>
                  <h5 className="font-bold">Step 2 – Curation & Editing</h5>
                  <p className="text-muted-foreground">Our team edits, enhances, and repurposes your content into polished, platform-ready posts, tailored to your brand voice.</p>
                </div>
                <div>
                  <h5 className="font-semibold">Step 3 – Publishing & Distribution</h5>
                  <p className="text-muted-foreground">We schedule and post across the right channels at the right times to maximise reach and engagement.</p>
                </div>
                <div>
                  <h5 className="font-semibold">Step 4 – Performance Insights</h5>
                  <p className="text-muted-foreground">You get regular reports showing growth in your audience, engagement, and influence without having to lift a finger.</p>
                </div>
              </div>
            </>
          }
          image={contentSystemImage}
          imageAlt="Content creation system workflow showing capture, editing, publishing, and analytics steps"
        />

        {/* Real Content Advantage */}
        <SplitSection
          title="The Real Content Advantage"
          description={
            <>
              <p className="mb-6">
                AI and generic stock content are everywhere but they can't replace your voice, your face, your experiences.
              </p>
              <p className="font-medium">
                By starting with real content from you, we keep your brand authentic while scaling your visibility far beyond what you could do alone.
              </p>
            </>
          }
          image={authenticContentImage}
          imageAlt="Authentic vs artificial content comparison showing real person content versus AI generated content"
          reverse
        />

        {/* You Stay the Expert */}
        <SplitSection
          title="You Stay the Expert. We Do the Work."
          description={
            <>
              <p className="mb-6">
                Once you've shared your authentic content with us, your part is done. We take care of:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6 text-muted-foreground">
                <ul className="space-y-2">
                  <li>• Editing and design</li>
                  <li>• Captions and copywriting</li>
                  <li>• Platform optimisation</li>
                </ul>
                <ul className="space-y-2">
                  <li>• Posting and scheduling</li>
                  <li>• Hashtag and trend strategy</li>
                  <li>• Cross-platform distribution</li>
                </ul>
              </div>
              <p className="font-medium">
                That means you can get back to building your business while we grow your footprint.
              </p>
            </>
          }
          image={doneForYouImage}
          imageAlt="Done-for-you service showing expert team handling content while business owner focuses on core business"
        />

        {/* Final CTA */}
        <SplitSection
          title="Ready to Grow Your Influence?"
          description={
            <>
              <p className="mb-6">
                Building your personal brand isn't optional it's a growth multiplier. With our system, you stay authentic, visible, and in demand while staying focused on running your business.
              </p>
              <Button variant="hero" size="lg">
                Start Building Your Brand Today
              </Button>
            </>
          }
          image={influenceGrowthImage}
          imageAlt="Influence growth visualization showing expanding network and business opportunities"
          reverse
        />
      </main>

      <SiteFooter />
    </div>
  );
};

export default SocialContent;