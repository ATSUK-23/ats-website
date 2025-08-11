import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import Hero from "@/components/sections/Hero";
import AISolutions from "@/components/sections/AISolutions";
import Contact from "@/components/sections/Contact";

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
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />

        <section id="services" className="container py-16 md:py-24">
          <header className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold">How we help</h2>
            <p className="mt-3 text-muted-foreground">
              In three steps: Discovery, Strategy, Implementation. We analyse your processes, map the opportunities, then implement with the best-fit tech partners.
            </p>
          </header>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <article className="rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="text-xl font-semibold">1) Discovery</h3>
              <p className="mt-2 text-sm text-muted-foreground">We learn your goals and identify automation opportunities across sales, service and operations.</p>
            </article>
            <article className="rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="text-xl font-semibold">2) Strategy</h3>
              <p className="mt-2 text-sm text-muted-foreground">You get a clear roadmap prioritising impact, with recommended AI engines and partners.</p>
            </article>
            <article className="rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="text-xl font-semibold">3) Implementation</h3>
              <p className="mt-2 text-sm text-muted-foreground">We manage delivery with trusted providers and ensure your team succeeds with the new systems.</p>
            </article>
          </div>
        </section>

        <AISolutions />

        <section id="e-commerce" className="container py-16 md:py-24">
          <header className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold">e‑Commerce</h2>
            <p className="mt-3 text-muted-foreground">Systems that scale globally across storefronts and channels.</p>
          </header>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <article id="global-systems" className="rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="text-xl font-semibold">Global Systems</h3>
              <p className="mt-2 text-sm text-muted-foreground">Plan architecture for multi‑region growth, fulfillment and compliance.</p>
            </article>
            <article id="shopify" className="rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="text-xl font-semibold">Shopify</h3>
              <p className="mt-2 text-sm text-muted-foreground">Conversion‑focused storefronts, apps and integrations for scale.</p>
            </article>
            <article id="marketplaces" className="rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="text-xl font-semibold">Marketplaces</h3>
              <p className="mt-2 text-sm text-muted-foreground">Expand to Amazon, eBay and more with unified operations.</p>
            </article>
          </div>
        </section>

        <section id="ad-management" className="container py-16 md:py-24">
          <header className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold">Ad Management</h2>
            <p className="mt-3 text-muted-foreground">Media systems that pair creative with automation for measurable ROI.</p>
          </header>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <article id="social-content" className="rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="text-xl font-semibold">Social Content</h3>
              <p className="mt-2 text-sm text-muted-foreground">Performance content engines that feed paid and organic channels.</p>
            </article>
            <article id="s-m-automation" className="rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="text-xl font-semibold">S&M Automation</h3>
              <p className="mt-2 text-sm text-muted-foreground">Sales & marketing automation that accelerates lead‑to‑revenue.</p>
            </article>
          </div>
        </section>

        <section id="about" className="container py-16 md:py-24">
          <header className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold">About</h2>
            <p className="mt-3 text-muted-foreground">Decades in digital, e‑commerce and automation. We help you choose the right strategy and partners—then ship.</p>
          </header>
        </section>

        <section id="case-studies" className="container py-16 md:py-24">
          <header className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold">Results</h2>
            <p className="mt-3 text-muted-foreground">Our team has helped brands scale globally across e‑commerce and services with automation-first strategies.</p>
          </header>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <article className="rounded-lg border bg-card p-6 shadow-sm">
              <p className="text-sm text-muted-foreground">Scaled e‑commerce revenue to $50m+ in 4 years with automated funnels and conversational journeys.</p>
            </article>
            <article className="rounded-lg border bg-card p-6 shadow-sm">
              <p className="text-sm text-muted-foreground">Built global sales systems for multi‑market launches, integrating marketplaces and paid media.</p>
            </article>
            <article className="rounded-lg border bg-card p-6 shadow-sm">
              <p className="text-sm text-muted-foreground">Deployed AI assistants that improved lead qualification and accelerated speed‑to‑appointment.</p>
            </article>
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
