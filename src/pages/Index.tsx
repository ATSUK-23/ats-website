import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import Hero from "@/components/sections/Hero";
import DigitalMaturitySection from "@/components/sections/DigitalMaturitySection";
import HomePageLeadForm from "@/components/forms/HomePageLeadForm";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SplitSection from "@/components/sections/SplitSection";
import whyImg from "@/assets/why-choose-us.jpg";
const auditImg = "/lovable-uploads/267ce356-fb37-4f4b-8001-76a4a464c8a1.png";
import workshopsImg from "@/assets/workshops.jpg";
const sourcingImg = "/lovable-uploads/bc0882a0-dbff-46c2-b567-5f2cdffb425b.png";

const Index = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Automate To Sell",
    url: "https://automatetosell.com/",
    description: "AI automation consultancy helping businesses boost sales and efficiency."
  };

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        
        <DigitalMaturitySection />

        <SplitSection id="about" title="Technology Should Serve Your Strategy, Not Replace It" image={whyImg} imageAlt="Before and after comparison of messy vs streamlined automated business systems" description={<>
              <p>
                The automation and AI space is evolving at lightning speed. But with so many tools and platforms, it's easy to get lost in "shiny object" syndrome. We cut through the noise to:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Analyse your processes end-to-end</li>
                <li>Identify where automation and AI can create measurable ROI</li>
                <li>Recommend only what you truly need</li>
                <li>Integrate everything into one seamless system</li>
              </ul>
              <p className="pt-2">We're not tied to one software vendor. Our loyalty is to your results.</p>
            </>} />

        <SplitSection id="audit" reverse title="Your Automation Journey Starts with a Business Process Audit" image={auditImg} imageAlt="Dashboard flow showing Audit → Recommendations → Implementation → Results" description={<p>
              The fastest way to see results is to start with a clear picture of where you are now. Our Business Process Audit covers:
            </p>}>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 text-muted-foreground">
            <ul className="list-disc pl-5 space-y-2">
              <li>Sales & Marketing</li>
              <li>Product Development</li>
            </ul>
            <ul className="list-disc pl-5 space-y-2">
              <li>IT & Operations</li>
              <li>Customer Support</li>
            </ul>
            <ul className="list-disc pl-5 space-y-2">
              <li>Finance & Reporting</li>
              <li>And more…</li>
            </ul>
          </div>
          <div className="mt-6">
            <Link to="/ai-audit">
              <Button variant="hero" size="lg" className="w-full sm:w-auto">Book Your Audit Now</Button>
            </Link>
          </div>
        </SplitSection>

        <section id="service-pillars" className="relative py-8 sm:py-12 md:py-16">
          {/* Background with Dark Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/30 to-secondary/40">
            <div className="absolute inset-0 bg-black/80"></div>
          </div>
          
          {/* Content */}
          <div className="container relative z-10 px-4">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">Implement End-to-End Automation & AI In Your Business</h2>
            </div>
            
            <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              <article id="ai-solutions" className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 relative">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-white">Global e-Commerce System </h3>
                  <a href="https://preview--ats-website.lovable.app/e-commerce">
                    <Button variant="outline" size="sm" className="bg-white/20 border-white/30 text-white hover:bg-white/30 text-xs px-3 py-1 h-auto">More</Button>
                  </a>
                </div>
                <p className="mt-2 text-sm text-white/90">Go global the easy way. <br />We build automated e-commerce systems that manage sales, fulfilment, support, and ads, so you can sell your winning products worldwide without increasing headcount.</p>
              </article>
              <article id="vibe-coding" className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 relative">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-white">AI Solutions</h3>
                  <a href="https://preview--ats-website.lovable.app/ai-audit">
                    <Button variant="outline" size="sm" className="bg-white/20 border-white/30 text-white hover:bg-white/30 text-xs px-3 py-1 h-auto">More</Button>
                  </a>
                </div>
                <p className="mt-2 text-sm text-white/90">Gain clarity with AI Audits and instant online AI Assessment to build your AI Brain. <br />Streamline operations with intelligent agents, scale efficiency through AI voice automation, and unlock new skills by joining our workshops or hosting them in-house.</p>
              </article>
              <article id="e-commerce" className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 relative">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-white">Vibe Coding</h3>
                  <a href="https://preview--ats-website.lovable.app/vibe-coding">
                    <Button variant="outline" size="sm" className="bg-white/20 border-white/30 text-white hover:bg-white/30 text-xs px-3 py-1 h-auto">More</Button>
                  </a>
                </div>
                <p className="mt-2 text-sm text-white/90">From simple websites to dashboards, sales tools, e-commerce stores, or even full SaaS platforms, we take you from idea to working prototype fast. <br />Join our small, focused public workshops or run private in-house sprints where we shape strategy and build together.</p>
              </article>
              <article id="social-content" className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 relative">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-white">Sales & Marketing Automation</h3>
                  <a href="https://preview--ats-website.lovable.app/sales-funnel-automation">
                    <Button variant="outline" size="sm" className="bg-white/20 border-white/30 text-white hover:bg-white/30 text-xs px-3 py-1 h-auto">More</Button>
                  </a>
                </div>
                <p className="mt-2 text-sm text-white/90">Close more deals with less effort. We design and implement smart automation systems. <br />From CRM and funnels to email follow-ups, booking calendars, e-learning platforms and other 3rd party integrations. Enabling you to nurture leads, streamline sales, and grow revenue without adding to your workload.</p>
              </article>
              <article id="sales-marketing-automation" className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 relative">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-white">Social Content & Distribution</h3>
                  <a href="https://preview--ats-website.lovable.app/social-content">
                    <Button variant="outline" size="sm" className="bg-white/20 border-white/30 text-white hover:bg-white/30 text-xs px-3 py-1 h-auto">More</Button>
                  </a>
                </div>
                <p className="mt-2 text-sm text-white/90">We help you cut through the noise with authentic, done-for-you content that builds a powerful personal brand. <br />Grow your influence, open doors to new opportunities, and scale your business while we handle the heavy lifting.</p>
              </article>
              <article id="training" className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 relative">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-white">Training</h3>
                  <a href="https://preview--ats-website.lovable.app/training">
                    <Button variant="outline" size="sm" className="bg-white/20 border-white/30 text-white hover:bg-white/30 text-xs px-3 py-1 h-auto">More</Button>
                  </a>
                </div>
                <p className="mt-2 text-sm text-white/90">Equip your team with the skills to boost productivity by up to 40%, overcome resistance to new technology, and stay ahead with cutting-edge AI knowledge. <br />Our training not only improves day-to-day performance but also fosters a culture of innovation and continuous learning that drives measurable business results.</p>
              </article>
            </div>
          </div>
        </section>

        <SplitSection id="workshops" title="Upskill Your Team to Harness AI & Automation (Workshops & Training)" image={workshopsImg} imageAlt="Professional workshop with team and facilitator at whiteboard" description={<p>
              We don't just install systems and walk away. We empower your team to make automation and AI part of their everyday workflow.
            </p>}>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="text-xl font-semibold">Open Workshops</h3>
              <p className="mt-2 text-sm text-muted-foreground">Open to all, great for networking and shared learning.</p>
            </article>
            <article className="rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="text-xl font-semibold">Internal Company Workshops</h3>
              <p className="mt-2 text-sm text-muted-foreground">Authentic, done-for-you brand content to build your high-impact social presence. high-impact social presence</p>
            </article>
          </div>
          <p className="mt-6 text-muted-foreground">Your staff leave confident, capable, and ready to get the most from your automation investment.</p>
          <div className="mt-6">
            <Link to="/training">
              <Button size="lg" className="w-full sm:w-auto">AI Training For Your Team</Button>
            </Link>
          </div>
        </SplitSection>

        <SplitSection id="solution-sourcing" reverse title="We Find and Manage the Best AI Solution Provider for Your Business" image={sourcingImg} imageAlt="3D business building with department labels showing Sales, Marketing, IT & Operations, Customer Support, Finance & Reporting, and HR" description={<>
              <p>No one platform does it all and no single vendor is best at everything. We'll:</p>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Identify the best-fit automation & AI providers for your needs</li>
                <li>Manage the vendor relationship</li>
                <li>Integrate multiple solutions into a single, efficient system</li>
              </ul>
            </>} />

        {/* CTA Bottom Banner */}
        <section id="cta-bottom" className="py-16 md:py-20 bg-primary text-primary-foreground">
          <div className="container text-center px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Work Smarter. Grow Faster.</h2>
            <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base">
              Let's design a strategy, choose the right tools, and build automation systems that deliver results — so you can focus on growing your business.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://preview--ats-website.lovable.app/ai-audit">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">Book Your Business Automation Audit</Button>
              </a>
              <a href="#contact">
                <Button variant="outline" size="lg" className="bg-transparent w-full sm:w-auto">Schedule a Call</Button>
              </a>
            </div>
          </div>
        </section>

        <HomePageLeadForm />
      </main>
      <SiteFooter />

      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd)
      }} />
    </div>
  );
};

export default Index;
