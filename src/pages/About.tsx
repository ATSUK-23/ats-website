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
            
            <div className="bg-card rounded-xl p-6 sm:p-8 md:p-10 shadow-sm">
              <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-start">
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <img src="/lovable-uploads/58c466af-1a0a-4930-a75c-aac6312ab1d4.png" alt="Automate to Sell business model diagram showing AI, advertising, marketing, operations, and customer support connected to central hub" className="w-full rounded-lg" />
                </div>
                <div className="w-full md:w-2/3">
                  <div className="prose prose-lg max-w-none text-foreground">
                    <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                      At Automate to Sell, I help businesses engineer growth through automation, AI, and smart digital systems.
                    </p>
                    
                    <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                      I don't run a big in-house agency with high overheads. Instead, I've built a leaner, more effective way to deliver results:
                    </p>
                    
                    <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                      You work directly with me as your strategist and project lead, so there's always clarity and accountability.
                    </p>

                    <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                      For each part of your project or training, I bring in specialists I know and trust in automation, AI, advertising, marketing, and operations.
                    </p>
                    
                    <p className="text-base sm:text-lg leading-relaxed">
                      This means you avoid paying premium agency fees, but still get access to top-level expertise. Flexible, cost-effective, and laser-focused on the right outcome for your business.
                    </p>
                  </div>
                </div>
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
                <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">I'm Martin Keene, founder of Automate to Sell and an early adopter of what's now being called Go-To-Market Engineering (GTME) combining strategy, automation, low code/no code tools and AI to build global scalable growth systems for SMEs and e-commerce businesses.</p>

                <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                  I've spent more than 20 years at the intersection of sales, marketing, and technology:
                </p>

                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 text-base sm:text-lg">
                  <li><strong>2000–2010:</strong> Went mobile-first with Vodafone, building V1 of mobile content, games, and music platforms for early devices, and pioneered the premium billing engine that enabled third-party apps and services to be charged directly to customer bills laying the foundation for today's app economy.</li>
                  
                  <li><strong>2010–2020:</strong> I led digital transformation and sales automation projects that replaced manual processes with scalable workflows.</li>

                  <li>This includes an Online Education business where I helped launch and scale digital e-learning membership programs, including one that grew from 0 to 16,000 students and generated $70M+ in revenue in just 4 years.</li>

                  <li><strong>2020–2024:</strong> I designed and implemented a global e-commerce growth system that scaled a health & wellness brand from $40K/month to $40M+ in sales. That included running 10+ online marketplaces, 6 Shopify stores, automating fulfilment across 8 international hubs, and managing it all with a lean team of 5.</li>
                </ul>

                <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                  <strong>Startup Founder:</strong> I've also launched three startups, each rooted in emerging technology and customer-centric digital strategies.
                </p>

                <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                  <strong>ClickFunnels Pioneer:</strong> I was an early adopter of ClickFunnels in 2014, completing their inaugural Certification Program in 2015. I went on to help one client win the 2 Comma Club Award, and another (Reliable Education) reach the 2 Comma Club X Award.
                </p>

                <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                  <strong>Go High Level Agency:</strong> In 2020, I expanded into Go High Level, launching my own digital agency to build scalable marketing systems and smart automations for clients.
                </p>

                <p className="text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                  Now, with the rapid rise of AI-powered tools, I'm applying everything I know about systems and scale to the next wave of business transformation.
                </p>

                

                

                

                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 text-base sm:text-lg">
                  
                  
                  
                  
                  
                  
                </ul>

                <p className="text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                  👉 For me, it's never been about chasing tools - it's about building systems that deliver measurable growth, efficiency, and scale.
                </p>

                <div className="text-center">
                  <Button size="lg" className="text-sm sm:text-base">
                    Schedule a Consultation
                  </Button>
                </div>
              </div>
            </div>
          </div>
          </section>

          
        </div>
      </main>

      <SiteFooter />
    </div>;
};
export default About;