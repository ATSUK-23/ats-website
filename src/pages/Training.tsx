import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import HeroSection from "@/components/sections/HeroSection";
import SplitSection from "@/components/sections/SplitSection";
import Contact from "@/components/sections/Contact";
import { Clock, Users, Star, Award, BookOpen, Zap } from "lucide-react";

const trainingHeroBackground = "/lovable-uploads/69f481cd-156e-4ce8-91f4-94a5b2dfa309.png";

export default function Training() {
  const trainingPrograms = [
    {
      category: "Foundation Courses",
      description: "Essential AI knowledge for getting started",
      courses: [
        {
          title: "AI Fundamentals for Business",
          duration: "2 hours",
          level: "Beginner",
          format: "Online",
          price: "£199",
          maxParticipants: "20",
          description: "Perfect introduction to AI for business owners and managers. Learn the basics of AI, explore practical applications, and understand how AI can transform your operations.",
          features: ["AI basics explained simply", "Real world examples", "Practical exercises", "Take-home resources"]
        },
        {
          title: "AI Tools Mastery Workshop",
          duration: "Half day",
          level: "Beginner",
          format: "Online/In-person",
          price: "£399",
          maxParticipants: "15",
          description: "Hands-on training with the most powerful AI tools available today. Learn to use ChatGPT, Claude, Midjourney, and automation tools effectively.",
          features: ["Live tool demonstrations", "Hands-on practice", "Custom prompts library", "30-day support"]
        }
      ]
    },
    {
      category: "Advanced Programs",
      description: "Deep-dive training for strategic implementation",
      courses: [
        {
          title: "AI Strategy & Implementation",
          duration: "Full day",
          level: "Intermediate",
          format: "In-person/Virtual",
          price: "£799",
          maxParticipants: "12",
          description: "Comprehensive program for leaders ready to implement AI across their organization. Develop your AI strategy, identify opportunities, and create an implementation roadmap.",
          features: ["Strategic planning session", "ROI calculation methods", "Implementation roadmap", "3-month follow-up"]
        },
        {
          title: "Custom AI Solutions Training",
          duration: "2 days",
          level: "Advanced",
          format: "Bespoke",
          price: "Contact us",
          maxParticipants: "8",
          description: "Tailored training program designed specifically for your business needs. Includes custom AI solution development and team training.",
          features: ["Bespoke curriculum", "Custom AI tools", "Ongoing support", "Team certification"]
        }
      ]
    }
  ];

  const packages = [
    {
      title: "Starter Package",
      description: "Any 2 foundation courses",
      discount: "15% off",
      price: "From £339",
      savings: "Save £59",
      features: ["2 courses of your choice", "Digital certificates", "Resource library access"]
    },
    {
      title: "Business Package",
      description: "Complete foundation + 1 advanced",
      discount: "20% off",
      price: "From £799",
      savings: "Save £199",
      features: ["3 courses included", "Priority booking", "Extended support"]
    },
    {
      title: "Enterprise Package",
      description: "Full program access",
      discount: "25% off",
      price: "Contact us",
      savings: "Maximum savings",
      features: ["All courses", "Custom scheduling", "Dedicated support"]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>AI Training & Upskilling Programs | Automate to Sell</title>
        <meta name="description" content="Transform your team from AI curious to AI competent with our comprehensive training programs. Foundation to advanced level courses available." />
      </Helmet>

      <SiteHeader />

      <main>
        {/* Hero Section */}
        <HeroSection 
          title="TRANSFORM YOUR TEAM FROM AI CURIOUS TO AI COMPETENT"
          subtitle="Comprehensive training programs that build AI literacy, practical skills, and strategic understanding across your organisation."
          ctaText="Speak to a Training Specialist"
          ctaLink="#contact"
          backgroundImage={trainingHeroBackground}
          className="py-16 md:py-24"
        >
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <BookOpen className="w-8 h-8 mx-auto mb-2 text-white" />
              <div className="text-2xl font-bold text-white">12+</div>
              <div className="text-sm text-white/80">Specialised Courses</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <Users className="w-8 h-8 mx-auto mb-2 text-white" />
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-sm text-white/80">Professionals Trained</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <Star className="w-8 h-8 mx-auto mb-2 text-white" />
              <div className="text-2xl font-bold text-white">4.9/5</div>
              <div className="text-sm text-white/80">Average Rating</div>
            </div>
          </div>
        </HeroSection>

        {/* Training Packages Section */}
        <section className="py-16 bg-secondary/5">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Training Packages & Discounts</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose from our flexible packages designed to meet different business needs and budgets.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {packages.map((pkg, index) => (
                <Card key={index} className="relative">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-xl">{pkg.title}</CardTitle>
                      <Badge variant="secondary">{pkg.discount}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{pkg.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <div className="text-2xl font-bold text-primary">{pkg.price}</div>
                      <div className="text-sm text-green-600">{pkg.savings}</div>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <Zap className="w-4 h-4 mr-2 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full" variant="outline">Learn More</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Training Programs Section */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our AI Training Programs</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From foundation courses to advanced implementation strategies, we have programs for every skill level.
              </p>
            </div>

            {trainingPrograms.map((program, programIndex) => (
              <div key={programIndex} className="mb-12">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">{program.category}</h3>
                  <p className="text-muted-foreground">{program.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {program.courses.map((course, courseIndex) => (
                    <Card key={courseIndex} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <CardTitle className="text-xl">{course.title}</CardTitle>
                          <Badge variant="outline">{course.level}</Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {course.duration}
                          </div>
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            Max {course.maxParticipants}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm mb-4">{course.description}</p>
                        
                        <div className="space-y-2 mb-4">
                          {course.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center text-sm">
                              <Award className="w-4 h-4 mr-2 text-primary" />
                              {feature}
                            </div>
                          ))}
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-2xl font-bold text-primary">{course.price}</div>
                            <div className="text-xs text-muted-foreground">{course.format}</div>
                          </div>
                          <Button>Book Now</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Our Training Section */}
        <SplitSection 
          id="why-choose-training"
          title="Why Choose Our AI Training Programs?"
          description={
            <div className="space-y-4">
              <p>
                Our training programs are designed by AI implementation experts who understand both the technology and the practical challenges businesses face.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>Practical Focus:</strong> Every course includes hands-on exercises and real-world applications relevant to your industry.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>Expert Trainers:</strong> Learn from certified AI specialists with proven track records in business implementation.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>Ongoing Support:</strong> All courses include post-training support to help you implement what you've learned.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>Flexible Delivery:</strong> Choose from online, in-person, or hybrid training formats to suit your team's needs.
                  </div>
                </div>
              </div>
            </div>
          }
          image="/lovable-uploads/925210b2-3594-4c64-8a4a-2f65e141bb1b.png"
          imageAlt="AI training session with participants learning practical skills"
          reverse
        />

        {/* Final CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Team's AI Capabilities?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Join hundreds of businesses who have already upskilled their teams with our comprehensive AI training programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                View Course Calendar
              </Button>
              <Button size="lg" variant="outline">
                Speak to a Training Specialist
              </Button>
            </div>
          </div>
        </section>

        <Contact />
      </main>

      <SiteFooter />
    </div>
  );
}