import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import Hero from "@/components/sections/Hero";
import Contact from "@/components/sections/Contact";
import { Button } from "@/components/ui/button";

const Index = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Automate To Sell",
    url: "https://automatetosell.com/",
    description:
      "AI automation consultancy helping businesses boost sales and efficiency.",
  };

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />

        {/* Why Businesses Choose Us */}
        <section id="about" className="container py-16 md:py-24">
          <header className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold">Technology Should Serve Your Strategy — Not Replace It</h2>
            <p className="mt-4 text-muted-foreground">
              The automation and AI space is evolving at lightning speed. But with so many tools and platforms, it’s easy to get lost in “shiny object” syndrome.
              We cut through the noise to:
            </p>
          </header>
          <ul className="mt-8 grid gap-3 text-sm md:text-base text-muted-foreground">
            <li>• Analyse your processes end-to-end</li>
            <li>• Identify where automation and AI can create measurable ROI</li>
            <li>• Recommend only what you truly need</li>
            <li>• Integrate everything into one seamless system</li>
          </ul>
          <p className="mt-6 text-muted-foreground">We’re not tied to one software vendor. Our loyalty is to your results.</p>
        </section>

        {/* Audit First, Automate Second */}
        <section id="audit" className="container py-16 md:py-24">
          <header className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold">Your Automation Journey Starts with a Business Process Audit</h2>
            <p className="mt-4 text-muted-foreground">
              The fastest way to see results is to start with a clear picture of where you are now. Our Business Process Audit covers:
            </p>
          </header>
          <div className="mt-6 grid gap-3 text-sm md:text-base text-muted-foreground md:grid-cols-3">
            <ul className="space-y-2">
              <li>• Sales & Marketing</li>
              <li>• Product Development</li>
            </ul>
            <ul className="space-y-2">
              <li>• IT & Operations</li>
              <li>• Customer Support</li>
            </ul>
            <ul className="space-y-2">
              <li>• Finance & Reporting</li>
              <li>• And more…</li>
            </ul>
          </div>
          <div className="mt-8">
            <a href="https://www.automatetosell.com/ats-application" target="_blank" rel="noreferrer">
              <Button variant="hero" size="lg">Book Your Audit Now</Button>
            </a>
          </div>
        </section>

        {/* Internal Training & Workshops */}
        <section id="workshops" className="container py-16 md:py-24">
          <header className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold">Upskill Your Team to Harness AI & Automation In-House</h2>
            <p className="mt-4 text-muted-foreground">
              We don’t just install systems and walk away. We empower your team to make automation and AI part of their everyday workflow.
            </p>
          </header>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="text-xl font-semibold">Open Workshops</h3>
              <p className="mt-2 text-sm text-muted-foreground">Open to all, great for networking and shared learning.</p>
            </article>
            <article className="rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="text-xl font-semibold">Internal Company Workshops</h3>
              <p className="mt-2 text-sm text-muted-foreground">Tailored for your team and your systems.</p>
            </article>
          </div>
          <p className="mt-6 text-muted-foreground">Your staff leave confident, capable, and ready to get the most from your automation investment.</p>
        </section>

        {/* Expert Solution Sourcing */}
        <section id="solution-sourcing" className="container py-16 md:py-24">
          <header className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold">We Find and Manage the Right Suppliers for You</h2>
            <p className="mt-4 text-muted-foreground">No one platform does it all — and no single vendor is best at everything. We’ll:</p>
          </header>
          <ul className="mt-8 grid gap-3 text-sm md:text-base text-muted-foreground">
            <li>• Identify the best-fit automation & AI providers for your needs</li>
            <li>• Manage the vendor relationship</li>
            <li>• Integrate multiple solutions into a single, efficient system</li>
          </ul>
        </section>

        {/* Our Core Services (Service Pillars) */}
        <section id="service-pillars" className="container py-16 md:py-24">
          <header className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold">End-to-End Automation & AI Expertise</h2>
          </header>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <article id="ai-solutions" className="rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="text-xl font-semibold">AI Solutions</h3>
              <p className="mt-2 text-sm text-muted-foreground">Intelligent agents, voice automation, audits, and workshops.</p>
            </article>
            <article id="vibe-coding" className="rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="text-xl font-semibold">Vibe Coding</h3>
              <p className="mt-2 text-sm text-muted-foreground">Rapid prototyping for websites and apps.</p>
            </article>
            <article id="e-commerce" className="rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="text-xl font-semibold">E‑Commerce Systems</h3>
              <p className="mt-2 text-sm text-muted-foreground">Shopify, marketplaces, global integrations, ad management.</p>
            </article>
            <article id="social-content" className="rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="text-xl font-semibold">Social Content</h3>
              <p className="mt-2 text-sm text-muted-foreground">Authentic, done-for-you brand content.</p>
            </article>
            <article id="sales-marketing-automation" className="rounded-lg border bg-card p-6 shadow-sm md:col-span-2 lg:col-span-1">
              <h3 className="text-xl font-semibold">Sales & Marketing Automation</h3>
              <p className="mt-2 text-sm text-muted-foreground">CRM, funnels, workflows, follow-up sequences.</p>
            </article>
          </div>
        </section>

        {/* CTA Bottom Banner */}
        <section id="cta-bottom" className="py-16 md:py-20 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Work Smarter. Grow Faster.</h2>
            <p className="mt-4 max-w-2xl mx-auto">
              Let’s design a strategy, choose the right tools, and build automation systems that deliver results — so you can focus on growing your business.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <a href="https://www.automatetosell.com/ats-application" target="_blank" rel="noreferrer">
                <Button variant="secondary" size="lg">Book Your Business Automation Audit</Button>
              </a>
              <a href="#contact">
                <Button variant="outline" size="lg" className="bg-transparent">Schedule a Call</Button>
              </a>
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <SiteFooter />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
};

export default Index;
