import { Helmet } from "react-helmet-async";
import { useState } from "react";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import HeroSection from "@/components/sections/HeroSection";
import SuperSkillsLeadForm from "@/components/forms/SuperSkillsLeadForm";
export default function SuperSkills() {
  const [showForm, setShowForm] = useState(false);
  const scrollToForm = () => {
    setShowForm(true);
    setTimeout(() => {
      document.getElementById('superskills-form')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }, 100);
  };
  return <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>The SuperSkills Era: Thriving in the Age of AI | Keynote Bookings</title>
        <meta name="description" content="Now accepting keynote bookings for Q3 2025 & Q4 2026. Executive session for boards and senior leadership teams on thriving in the AI era." />
      </Helmet>

      <SiteHeader />

      <main>
        {/* Hero Section */}
        <HeroSection title="The SuperSkills Era: Thriving in the Age of AI" subtitle="Now accepting keynote bookings for Q3 2025 & Q4 2026" ctaText="Find Out More" ctaLink="#" backgroundImage="/lovable-uploads/69f481cd-156e-4ce8-91f4-94a5b2dfa309.png" className="py-8 md:py-12" hideSecondaryButton={true}>
          <div className="mt-6">
            
          </div>
        </HeroSection>

        {/* Main Content Section */}
        <section className="container px-4 sm:px-6 py-12 sm:py-16 md:py-24">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                As we approach the next wave of AI transformation, leaders are rethinking what it takes to thrive in a world where technology is rewriting every rule of work.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                Rahim Hirji's keynote — <strong className="text-foreground">The SuperSkills Era: Thriving in the Age of AI</strong> — explores the human capabilities that will define exceptional leadership in the decade ahead.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                Drawing on research and insights from his upcoming book, this 60-minute executive session is designed for boards and senior leadership teams who want to:
              </p>

              <ul className="mt-6 space-y-4 text-lg text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-3 mt-1 text-primary">•</span>
                  <span>Reframe their organisation's approach to human performance in the AI era</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1 text-primary">•</span>
                  <span>Build adaptability, creativity, and empathy into decision-making</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1 text-primary">•</span>
                  <span>Future-proof their teams for the accelerated pace of change</span>
                </li>
              </ul>

              <p className="text-lg text-muted-foreground leading-relaxed mt-8">
                Delivered in person or virtually across the UK, Europe, and globally, this keynote offers a powerful reset for strategic thinking and leadership readiness.
              </p>

              <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-6 mt-8">
                <p className="text-xl font-semibold text-foreground">
                  📅 Slots now open for Q3 2025 and Q4 2026.
                </p>
              </div>

              <div className="mt-10 text-center">
                <button onClick={scrollToForm} className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-[hsl(var(--brand))] to-[hsl(var(--brand-2))] text-[hsl(var(--brand-foreground))] shadow-lg hover:shadow-xl hover:from-[hsl(var(--brand)/0.95)] hover:to-[hsl(var(--brand-2)/0.95)] h-11 px-8">
                  Find Out More →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Form Section - Only shown when button is clicked */}
        {showForm && <div id="superskills-form">
            <SuperSkillsLeadForm />
          </div>}
      </main>

      <SiteFooter />
    </div>;
}