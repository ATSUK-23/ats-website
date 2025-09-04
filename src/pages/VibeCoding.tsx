import { useEffect } from "react";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import SplitSection from "@/components/sections/SplitSection";
import HeroSection from "@/components/sections/HeroSection";
import VibeCodingLeadForm from "@/components/forms/VibeCodingLeadForm";
import { Button } from "@/components/ui/button";
import vibeHero from "@/assets/vibe-hero.jpg";
import vibeWhatIs from "@/assets/vibe-what-is.jpg";
import vibeWorkshops from "@/assets/vibe-workshops.jpg";
import vibeProcess from "@/assets/vibe-process.jpg";
import vibeBenefits from "@/assets/vibe-benefits.jpg";
import vibeCta from "@/assets/vibe-cta.jpg";
const VibeCoding = () => {
  const metaDescription = "Vibe Coding: build websites and apps in days using AI and low-code. Workshops, rapid prototyping, and full builds.";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Vibe Coding Rapid Prototyping & App Builds",
    serviceType: "Vibe Coding",
    url: "https://automatetosell.com/vibe-coding",
    provider: {
      "@type": "Organization",
      name: "Automate To Sell",
      url: "https://automatetosell.com/"
    },
    areaServed: "Global",
    description: metaDescription
  };
  useEffect(() => {
    document.title = "Vibe Coding | Build websites and apps in days";
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = metaDescription;
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `${window.location.origin}/vibe-coding`;
  }, []);
  return <div className="dark min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        {/* Hero */}
        <HeroSection title="From Idea to Prototype in Days, Not Months" subtitle="Build your website, widgets or apps faster with AI-powered Vibe Coding" ctaText="Schedule Consultation" ctaLink="#vibe-coding-form" backgroundImage="/lovable-uploads/c4d72d9f-395b-418d-89c3-09bac2b64fe5.png" />

        {/* What is Vibe Coding */}
        <SplitSection id="vibe-hero" title="Build It, Show It, Sell It!" image={vibeHero} imageAlt="Team collaborating with automation overlays and dashboards in a modern office" description={<p>We help businesses unlock the power of Vibe Coding, a fast, collaborative way to create websites and apps using AI and low-code tools. 


Whether you need a customer portal, e-commerce platform, internal dashboard, or a brand-new app, we can take you from concept to working prototype faster than you thought possible.</p>}>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#vibe-cta">
              <Button variant="hero" size="lg" className="w-full sm:w-auto text-sm sm:text-base">LIVE 1 Day WorkShops in London</Button>
            </a>
            <a href="#vibe-coding-form">
              <Button variant="outline" size="lg" className="bg-transparent w-full sm:w-auto text-sm sm:text-base">Talk to a Vibe Coding Expert</Button>
            </a>
          </div>
        </SplitSection>

        {/* What is Vibe Coding */}
        <SplitSection id="what-is-vibe-coding" reverse title="What is Vibe Coding?" image={vibeWhatIs} imageAlt="Composite of AI-assisted and low-code collaboration interfaces" description={<>
              <p>Vibe Coding blends AI, low-code, and collaboration to turn ideas into prototypes in days giving you something tangible to test and refine immediately.</p>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                
                
                
              </ul>
              <p className="pt-2">It helps businesses rapidly explore opportunities from apps to e-commerce tools, validating ideas with users before major investment, ensuring smarter decisions and faster growth.</p>
              
              <p>For entrepreneurs, Vibe Coding is a launchpad turning concepts in your head into clickable prototypes to share with investors, partners, and customers for instant traction.</p>
            </>} />

        {/* On-Site Workshops */}
        <SplitSection id="vibe-workshops" title="Vibe Coding Workshops" image={vibeWorkshops} imageAlt="Facilitator leading an on-site workshop with a team and whiteboard" description={<p>Join one of our open workshops or we can run immersive, hands-on workshops at your location. Your team works alongside our experts to:</p>}>
          <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-2 text-muted-foreground">
            <ul className="list-disc pl-5 space-y-2">
              <li>Define the problem and desired outcomes</li>
              <li>Map core features and user journeys</li>
            </ul>
            <ul className="list-disc pl-5 space-y-2">
              <li>Select the right tools and platforms</li>
              <li>Start building live in real time</li>
            </ul>
          </div>
          <p className="mt-4 text-muted-foreground">By the end of the session, you'll have the foundation of your website or app ready to expand.</p>
          <div className="mt-6">
            <a href="#vibe-coding-form">
              <Button variant="outline" size="lg" className="bg-transparent w-full sm:w-auto text-sm sm:text-base">Talk to a Vibe Coding Expert</Button>
            </a>
          </div>
        </SplitSection>

        {/* Full Process */}
        <SplitSection id="vibe-process" reverse title="Full Vibe Coding Process" image="/lovable-uploads/b2641d10-8890-4077-a6d4-b4b103870aae.png" imageAlt="Five-step process flow showing Discovery, Prototype, Build, Test, and Launch phases" description={<p>When you want us to guide the full build, here's the process we'll lead you through:</p>}>
          <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
            <li><strong className="font-bold text-white">Step 1 – Discovery & Strategy:</strong> We review your goals, challenges, and existing systems to ensure we're solving the right problem.</li>
            <li><strong className="font-bold text-white">Step 2 – Rapid Prototyping:</strong> In just a few days, we create a working prototype you can click through, share, and test with users.</li>
            <li><strong className="font-bold text-white">Step 3 – Build & Integrate:</strong> We develop the core product using AI-assisted and low-code tools, integrating with your existing tech stack (e.g., CRM, e-commerce, analytics).</li>
            <li><strong className="font-bold text-white">Step 4 – Test & Refine:</strong> We run live tests, gather feedback, and make rapid improvements without weeks of delays.</li>
            <li><strong className="font-bold text-white">Step 5 – Launch & Support:</strong> We deploy your website or app, train your team, and provide ongoing support to keep everything running smoothly.</li>
          </ol>
        </SplitSection>

        {/* Why Businesses Love Vibe Coding */}
        <SplitSection id="vibe-benefits" title="Why Businesses Love Vibe Coding" image={vibeBenefits} imageAlt="Team celebrating results with a clean analytics dashboard on screen">
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li><strong>Speed:</strong> Get to market fast and beat competitors.</li>
            <li><strong>Cost-Effective:</strong> Build without the high overhead of traditional dev teams.</li>
            <li><strong>Collaborative:</strong> Your team stays involved and in control throughout the process.</li>
            <li><strong>Flexible:</strong> Easily adapt and add features as your business evolves.</li>
            <li><strong>Reduced Risk:</strong> Test ideas before committing large budgets.</li>
          </ul>
        </SplitSection>

        {/* CTA Bottom */}
        <SplitSection id="vibe-cta" reverse title="Let's Bring Your Idea to Life" image={vibeCta} imageAlt="Founder at desk with analytics dashboard in the background" description={<>
          <p>Whether you're starting from scratch or need to accelerate a stalled project, our Vibe Coding service can take you from concept to launch faster and with less stress than you imagined.</p>
          <p>Once a month, we run a live 1-day workshop in London with our partners at Epitome. Only 12 spots available as its designed for maximum results.</p>
        </>}>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="https://theepitome.co.uk/ai-prototyping-workshop" target="_blank" rel="noreferrer">
              <Button variant="hero" size="lg" className="w-full sm:w-auto text-sm sm:text-base">Reserve Your Workshop Place</Button>
            </a>
            <a href="#vibe-coding-form">
              <Button variant="outline" size="lg" className="bg-transparent w-full sm:w-auto text-sm sm:text-base">Talk to a Vibe Coding Expert</Button>
            </a>
          </div>
        </SplitSection>

        {/* Vibe Coding Lead Form */}
        <VibeCodingLeadForm />
      </main>
      <SiteFooter />

      <script type="application/ld+json" dangerouslySetInnerHTML={{
      __html: JSON.stringify(jsonLd)
    }} />
    </div>;
};
export default VibeCoding;