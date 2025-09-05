import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import HeroSection from "@/components/sections/HeroSection";
import SplitSection from "@/components/sections/SplitSection";
import Contact from "@/components/sections/Contact";
import TrainingLeadForm from "@/components/forms/TrainingLeadForm";
import { Clock, Users, Star, Award, BookOpen, Zap } from "lucide-react";

const trainingHeroBackground = "/lovable-uploads/69f481cd-156e-4ce8-91f4-94a5b2dfa309.png";

export default function Training() {
  const packages = [
    {
      title: "Small Business Package",
      description: "Any 3 workshops",
      discount: "20% off",
      price: "From £1,200",
      savings: "Save up to £390",
      features: ["Choose any 3 workshops", "Flexible scheduling", "Priority booking"]
    },
    {
      title: "Team Discount",
      description: "5+ participants",
      discount: "10% off",
      price: "Per person",
      savings: "Group booking benefits",
      features: ["Bulk booking discounts", "Group coordination", "Team certificates"]
    },
    {
      title: "Early Bird Special",
      description: "Bookings 6+ weeks in advance",
      discount: "15% off",
      price: "All courses",
      savings: "Plan ahead and save",
      features: ["Advanced booking discount", "Guaranteed scheduling", "Free rescheduling"]
    }
  ];

  const trainingPrograms = [
    {
      category: "Foundation Courses",
      description: "Essential AI knowledge for getting started",
      courses: [
        {
          title: "AI Quick-Start Essentials",
          duration: "90 minutes",
          level: "Beginner",
          format: "Online",
          price: "£150",
          maxParticipants: "25",
          description: "90-minute introduction to AI fundamentals and immediate-use tools like ChatGPT, Claude, and basic automation. Perfect for businesses taking their first steps into AI. Includes practical exercises and take-home resources.",
          features: ["AI fundamentals", "Immediate-use tools", "Practical exercises", "Take-home resources"],
          audience: "Business owners new to AI, administrative staff, small teams",
          platform: "Google Meet",
          dates: "Sep 1, Sep 15, Oct 6..."
        },
        {
          title: "AI Tools & Platforms Mastery",
          duration: "3 x 90-minute sessions",
          level: "Beginner",
          format: "Online",
          price: "£350",
          maxParticipants: "15",
          description: "Hands-on training with ChatGPT, Canva AI, automation tools, and productivity platforms. Three 90-minute sessions covering essential AI tools for daily operations, workflow creation, and productivity enhancement.",
          features: ["ChatGPT mastery", "Canva AI training", "Automation tools", "Productivity platforms"],
          audience: "All staff levels, operational teams, administrative professionals",
          platform: "Google Meet",
          dates: "Sep 2-16, Sep 30-Oct 14, Oct 27-Nov 10..."
        },
        {
          title: "AI Fundamentals for Small Business Leaders",
          duration: "Full day intensive",
          level: "Beginner",
          format: "In-person",
          price: "£450",
          maxParticipants: "12",
          description: "Essential foundation covering AI basics without technical jargon, opportunity identification specific to small businesses, strategic AI roadmap development, ROI assessment, and building an AI-ready culture. Full-day intensive for decision-makers.",
          features: ["AI basics without jargon", "Opportunity identification", "Strategic roadmap", "ROI assessment"],
          audience: "Business owners, senior managers, decision-makers, C-suite executives",
          platform: "Surbiton & Rugby locations available"
        }
      ]
    },
    {
      category: "Applied AI Training",
      description: "Practical implementation for specific business functions",
      courses: [
        {
          title: "AI Marketing & Sales Acceleration",
          duration: "Full day workshop",
          level: "Intermediate",
          format: "In-person",
          price: "£500",
          maxParticipants: "12",
          description: "Focus on customer acquisition, lead generation, and sales process optimisation using AI technologies. Covers AI-driven customer segmentation, automated content creation, predictive sales analytics, and CRM optimisation.",
          features: ["Customer acquisition", "Lead generation", "Sales optimisation", "CRM enhancement"],
          audience: "Marketing teams, sales professionals, business development managers",
          platform: "Surbiton & Rugby locations available"
        },
        {
          title: "AI Process Automation Clinic",
          duration: "3-hour workshop",
          level: "Intermediate",
          format: "Online",
          price: "£250",
          maxParticipants: "12",
          description: "Practical 3-hour workshop identifying and implementing workflow automation opportunities. Participants bring real business processes for hands-on optimisation using AI tools. Includes templates and follow-up resources.",
          features: ["Workflow automation", "Hands-on optimisation", "Templates included", "Follow-up resources"],
          audience: "Operations managers, process owners, administrative staff",
          platform: "Google Meet",
          dates: "Sep 5, Sep 19, Oct 3..."
        }
      ]
    },
    {
      category: "Advanced AI Applications",
      description: "Sophisticated AI solutions for experienced users",
      courses: [
        {
          title: "AI Data & Analytics for Business Intelligence",
          duration: "Full day workshop",
          level: "Advanced",
          format: "In-person",
          price: "£650",
          maxParticipants: "8",
          description: "Transform data into actionable business insights using AI-powered analytics. Covers predictive modelling, automated reporting, customer behaviour analysis, and performance optimisation. Full-day workshop with hands-on exercises.",
          features: ["Predictive modelling", "Automated reporting", "Behaviour analysis", "Performance optimisation"],
          audience: "Data analysts, financial controllers, strategic planners, business intelligence teams",
          platform: "Surbiton & Rugby locations available"
        },
        {
          title: "AI Risk Management & Governance",
          duration: "3 x 90-minute sessions",
          level: "Advanced",
          format: "Online",
          price: "£400",
          maxParticipants: "15",
          description: "Essential framework for responsible AI implementation covering ethics, GDPR compliance, cybersecurity, risk assessment, and governance policies. Three 90-minute sessions for compliance officers and senior management.",
          features: ["AI ethics", "GDPR compliance", "Risk assessment", "Governance policies"],
          audience: "Compliance officers, senior management, legal teams, risk managers",
          platform: "Google Meet",
          dates: "Sep 3-17, Oct 1-15, Oct 29-Nov 12..."
        }
      ]
    },
    {
      category: "Strategic AI Leadership",
      description: "Executive-level AI transformation and leadership",
      courses: [
        {
          title: "Industry-Specific AI Applications",
          duration: "Full day workshop",
          level: "Advanced",
          format: "In-person",
          price: "£600",
          maxParticipants: "10",
          description: "Tailored AI solutions for specific sectors including retail optimisation, professional services automation, manufacturing quality control, and healthcare management. Choose your industry track for targeted learning.",
          features: ["Sector-specific solutions", "Industry tracks", "Targeted learning", "Practical applications"],
          audience: "Industry-specific business owners, sector managers, specialised teams",
          platform: "Surbiton & Rugby locations available",
          tracks: "Retail & E-commerce, Professional Services..."
        },
        {
          title: "AI Implementation Strategy & Change Management",
          duration: "Full day workshop",
          level: "Advanced",
          format: "In-person",
          price: "£650",
          maxParticipants: "8",
          description: "Comprehensive strategic planning for AI adoption covering roadmap development, change management, team training, success measurement, and scaling initiatives. Executive-level workshop for transformation leaders.",
          features: ["Roadmap development", "Change management", "Success measurement", "Scaling initiatives"],
          audience: "Senior executives, transformation leaders, department heads, C-suite",
          platform: "Surbiton & Rugby locations available"
        }
      ]
    },
    {
      category: "Comprehensive Programs",
      description: "Multi-week programs for complete AI transformation",
      courses: [
        {
          title: "AI Essentials Express Series",
          duration: "6-week program",
          level: "Beginner to Intermediate",
          format: "Online",
          price: "£400",
          maxParticipants: "20",
          description: "Complete 6-week AI introduction covering fundamentals, tools mastery, marketing applications, automation, analytics, and implementation planning. Weekly 90-minute sessions with assignments and practical exercises.",
          features: ["6-week comprehensive program", "Weekly sessions", "Practical assignments", "Implementation planning"],
          audience: "Complete beginners, small business owners, teams wanting comprehensive foundation",
          platform: "Google Meet",
          dates: "Sep 4-Oct 9, Oct 16-Nov 20..."
        },
        {
          title: "Advanced AI Leadership Program",
          duration: "8-week program",
          level: "Advanced",
          format: "Hybrid (Online + In-person)",
          price: "£800",
          maxParticipants: "15",
          description: "Strategic 8-week program combining online learning with intensive in-person workshop. Covers AI vision development, technology selection, implementation management, and organisational transformation for senior leaders.",
          features: ["8-week strategic program", "Hybrid delivery", "Vision development", "Organisational transformation"],
          audience: "Senior executives, C-suite, transformation leaders, strategic decision-makers",
          platform: "Online sessions + Surbiton workshop"
        },
        {
          title: "AI Prototyping Workshop",
          duration: "1-day intensive",
          level: "Intermediate",
          format: "In-person or Virtual",
          price: "£397",
          maxParticipants: "12",
          description: "Hands-on workshop where you'll build and test AI prototypes for your specific business challenges. Leave with working prototypes and implementation roadmap.",
          features: ["Build AI prototypes", "Test solutions", "Implementation roadmap", "Real business challenges"],
          audience: "Business leaders, product managers, innovation teams",
          platform: "Surbiton & Rugby locations available"
        }
      ]
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
          title="Transform Your Team From AI Curious To AI Competent"
          subtitle="Comprehensive training programs that build AI literacy, practical skills, and strategic understanding across your organisation."
          ctaText="Speak to a Training Specialist"
          ctaLink="#training-form"
          backgroundImage={trainingHeroBackground}
          className="py-8 md:py-12"
          hideSecondaryButton={true}
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our AI Training Programs</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                12 specialised courses from £150-800 per delegate • Foundation to Advanced Level
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {packages.map((pkg, index) => (
                <Card key={index} className="relative bg-white/10 backdrop-blur-sm border-white/20">
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
                    <Card key={courseIndex} className="hover:shadow-lg transition-shadow bg-white/10 backdrop-blur-sm border-white/20">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <CardTitle className="text-xl">{course.title}</CardTitle>
                          <Badge 
                            variant="outline" 
                            className={
                              course.level === 'Beginner' ? 'bg-green-500 border-white text-white' :
                              course.level === 'Intermediate' ? 'bg-orange-500 border-white text-white' :
                              course.level === 'Advanced' ? 'bg-blue-500 border-white text-white' :
                              course.level === 'Beginner to Intermediate' ? 'bg-gradient-to-r from-green-500 to-orange-500 border-white text-white' :
                              ''
                            }
                          >
                            {course.level}
                          </Badge>
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
                         
                         {course.audience && (
                           <div className="mb-3">
                             <span className="text-xs font-semibold text-muted-foreground">Target audience: </span>
                             <span className="text-xs">{course.audience}</span>
                           </div>
                         )}
                         
                         {course.platform && (
                           <div className="mb-3">
                             <span className="text-xs font-semibold text-muted-foreground">Platform: </span>
                             <span className="text-xs">{course.platform}</span>
                           </div>
                         )}
                         
                         {course.dates && (
                           <div className="mb-4">
                             <span className="text-xs font-semibold text-muted-foreground">Available dates: </span>
                             <span className="text-xs">{course.dates}</span>
                           </div>
                         )}
                         
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
                            <Button asChild>
                              <a href="https://epitome-ai-reboot.lovable.app/training/ai-quick-start-essentials" target="_blank" rel="noopener noreferrer">
                                Book Now • {course.price}
                              </a>
                            </Button>
                         </div>
                       </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Training Benefits Section */}
        <section className="py-16 bg-secondary/5">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Training Benefits</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Measurable improvements in team performance and business outcomes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center p-6">
                <Zap className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Increased Productivity</h3>
                <p className="text-sm text-muted-foreground">Teams become 40% more efficient with proper AI tool training</p>
              </Card>
              <Card className="text-center p-6">
                <Star className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Competitive Advantage</h3>
                <p className="text-sm text-muted-foreground">Stay ahead with cutting-edge AI knowledge and skills</p>
              </Card>
              <Card className="text-center p-6">
                <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Reduced Resistance</h3>
                <p className="text-sm text-muted-foreground">Overcome AI adoption barriers through education and understanding</p>
              </Card>
              <Card className="text-center p-6">
                <Award className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Innovation Culture</h3>
                <p className="text-sm text-muted-foreground">Foster a culture of innovation and continuous learning</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Comprehensive Curriculum Section */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Curriculum</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything your team needs to succeed with AI
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">AI Fundamentals</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Understanding AI and Machine Learning</li>
                  <li>• AI vs Traditional Automation</li>
                  <li>• Current AI Landscape</li>
                  <li>• Future Trends and Opportunities</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Practical Tool Usage</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• ChatGPT and Language Models</li>
                  <li>• AI Writing and Content Tools</li>
                  <li>• Image and Video AI</li>
                  <li>• Business Intelligence AI</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Prompt Engineering</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Effective Prompt Design</li>
                  <li>• Context and Instructions</li>
                  <li>• Chain of Thought Prompting</li>
                  <li>• Error Handling and Refinement</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Strategic Implementation</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• AI Strategy Development</li>
                  <li>• Change Management</li>
                  <li>• ROI Measurement</li>
                  <li>• Risk Assessment and Mitigation</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Ethics and Governance</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• AI Ethics and Bias</li>
                  <li>• Data Privacy and Security</li>
                  <li>• Regulatory Compliance</li>
                  <li>• Responsible AI Practices</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Industry Applications</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Sales and Marketing AI</li>
                  <li>• Customer Service Automation</li>
                  <li>• Operations Optimisation</li>
                  <li>• Financial Analysis AI</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Flexible Delivery Options Section */}
        <section className="py-16 bg-secondary/5">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Flexible Delivery Options</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose the format that works best for your team
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-6">
                <h3 className="text-lg font-bold mb-3">In-Person Workshops</h3>
                <p className="text-sm text-muted-foreground mb-4">Interactive face-to-face training at your location or ours</p>
                <ul className="space-y-1 text-sm">
                  <li>• Direct interaction</li>
                  <li>• Team building</li>
                  <li>• Hands-on practice</li>
                  <li>• Immediate feedback</li>
                </ul>
              </Card>
              <Card className="p-6">
                <h3 className="text-lg font-bold mb-3">Virtual Training</h3>
                <p className="text-sm text-muted-foreground mb-4">Live online sessions with full interaction and engagement</p>
                <ul className="space-y-1 text-sm">
                  <li>• Cost effective</li>
                  <li>• Flexible scheduling</li>
                  <li>• Remote accessibility</li>
                  <li>• Recorded sessions</li>
                </ul>
              </Card>
              <Card className="p-6">
                <h3 className="text-lg font-bold mb-3">Hybrid Programs</h3>
                <p className="text-sm text-muted-foreground mb-4">Combination of online learning and in-person workshops</p>
                <ul className="space-y-1 text-sm">
                  <li>• Best of both worlds</li>
                  <li>• Flexible learning</li>
                  <li>• Progressive skill building</li>
                  <li>• Ongoing support</li>
                </ul>
              </Card>
              <Card className="p-6">
                <h3 className="text-lg font-bold mb-3">Self-Paced Learning</h3>
                <p className="text-sm text-muted-foreground mb-4">Comprehensive online modules with mentor support</p>
                <ul className="space-y-1 text-sm">
                  <li>• Learn at your pace</li>
                  <li>• Repeat modules</li>
                  <li>• 24/7 access</li>
                  <li>• Certificate upon completion</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Client Success Stories Section */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Success Stories</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Real transformations from our training programs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="p-6">
                <blockquote className="text-lg mb-4">
                  "The AI training transformed our team's understanding and confidence. We're now implementing AI solutions that have improved our efficiency by 45%."
                </blockquote>
                <div className="flex items-center gap-3">
                  <div>
                    <div className="font-semibold">Paul Beales</div>
                    <div className="text-sm text-muted-foreground">Operations Director</div>
                    <div className="text-sm text-muted-foreground">Cronos Group Ltd</div>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <blockquote className="text-lg mb-4">
                  "Epitome's training program gave us the knowledge and tools to integrate AI strategically across our business. The ROI has been exceptional."
                </blockquote>
                <div className="flex items-center gap-3">
                  <div>
                    <div className="font-semibold">Colin Grant</div>
                    <div className="text-sm text-muted-foreground">Technical Director</div>
                    <div className="text-sm text-muted-foreground">RES Ltd</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Training Lead Form Section */}
        <section id="training-form" className="py-16">
          <div className="container">
            <TrainingLeadForm />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}