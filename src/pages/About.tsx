import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import profileImage from "@/assets/martin-keene-profile.jpeg";
const About = () => {
  return <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>About Martin Keene - Automate To Sell | Digital Marketing Expert</title>
        <meta name="description" content="Learn about Martin Keene's 20+ years experience in digital marketing, eCommerce automation, and building scalable business systems." />
      </Helmet>

      <SiteHeader />
      
      <main className="container py-12 sm:py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          {/* A Smarter Consulting Model Section */}
          <section className="mb-12 sm:mb-16 md:mb-20">
            <div className="text-center mb-8 sm:mb-10">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6">
                A Smarter Consulting Model
              </h1>
            </div>
            
            <div className="bg-card border rounded-xl p-6 sm:p-8 md:p-10 shadow-sm">
              <div className="prose prose-lg max-w-none text-foreground">
                <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                  At Automate to Sell, I've built a leaner, more effective way to deliver results. Instead of a big in-house team with high overheads, I collaborate with proven specialists across the digital economy, from AI and automation to advertising, marketing and operations.
                </p>
                
                <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                  You always work directly with me as your strategist and project lead, ensuring clarity, accountability, and results. Then, for each part of the job, I bring in the best expert I know and trust to implement the work.
                </p>
                
                <p className="text-base sm:text-lg leading-relaxed">
                  The result? You avoid paying premium agency fees, but still get access to top-level expertise in every area. It's a business model designed to be flexible, cost-effective, and laser-focused on delivering the right outcome for you.
                </p>
              </div>
            </div>
          </section>

          {/* My Experience Section */}
          <section>
            <header className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6">
                My Experience
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground">20+ Years of Implementing Digital Innovation & Automation Solutions.</p>
            </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 items-start mb-8 sm:mb-12">
            <div className="md:col-span-1 text-center md:text-left">
              <div className="relative mb-6">
                <img src={profileImage} alt="Martin Keene - Digital Marketing Expert" className="w-full max-w-xs sm:max-w-sm mx-auto rounded-xl shadow-lg" />
              </div>
              <div className="text-center mt-4 sm:mt-6">
                <h2 className="text-xl sm:text-2xl font-bold mb-2">Martin Keene</h2>
                <a href="https://www.linkedin.com/in/martinkeene/" target="_blank" rel="noopener noreferrer" className="inline-block">
                  <Button variant="outline" className="gap-2 text-sm">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn Profile
                  </Button>
                </a>
              </div>
              
              <div className="mt-6 sm:mt-8">
                <img src="/lovable-uploads/424228f5-13aa-4f5c-ab81-cbc8a096400c.png" alt="Two Comma Club Award recognition plaque featuring Martin Keene" className="max-w-xs sm:max-w-md w-full rounded-lg shadow-lg mx-auto" />
                <p className="text-xs sm:text-sm text-muted-foreground text-center mt-3 sm:mt-4">
                  Recognition for excellence in building automated systems that generate significant revenue for clients.
                </p>
              </div>
            </div>

            <div className="md:col-span-2 mt-8 md:mt-0">
              <div className="prose prose-sm sm:prose-lg max-w-none text-foreground">
                <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                  I've been deeply immersed in the digital world since the late 1990s, starting with building and selling websites when the internet was just beginning to take shape. It's been an exciting journey from those early days to now!
                </p>

                <p className="text-lg leading-relaxed mb-6">Over the past 20+ years, my career has followed a unique and dynamic path, blending leadership roles in large corporate environments (including mobile operators and media companies) with entrepreneurial ventures across mobile, e-commerce, and digital transformation.</p>

                <p className="text-lg leading-relaxed mb-6">
                  I've also launched three startups, each rooted in emerging technology and customer-centric digital strategies.
                </p>

                

                

                <p className="text-lg leading-relaxed mb-6">
                  I was an early adopter of ClickFunnels, joining the platform in October 2014 and completing their inaugural Certification Program the following year.
                </p>

                <p className="text-lg leading-relaxed mb-6">In partnership with one client I was recognised for the 2 Comma Club Award and I helped another client (Reliable Education) reach the 2 Comma Club X award.


For the last eight years, I've also focused on building turn key global eCommerce systems taking one of my clients from $40kpm to generate $1M months and 4 years revenue of over $40 Million.</p>

                <p className="text-lg leading-relaxed mb-6">
                  In 2020, I expanded my expertise into Go High Level, launching my own digital agency to support clients with turn key scalable marketing systems and smart automation.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Currently based in London, I've also lived and worked in Munich, Sydney, and Los Angeles, experiences that have enriched both my professional outlook and personal life. I'm passionate about sunny climates, global perspectives, and my guilty pleasure?...fine dining experiences.
                </p>
              </div>
            </div>
          </div>
          </section>

          <div className="text-center mt-8 sm:mt-12">
            <a href="https://www.automatetosell.com/ats-application" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gap-2 w-full sm:w-auto text-sm sm:text-base">
                Book a Strategy Call
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Button>
            </a>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>;
};
export default About;