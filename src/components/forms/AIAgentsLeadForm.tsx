import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { CheckCircle2, Calendar, Users, FileText } from "lucide-react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  jobTitle: string;
  companyName: string;
  comments: string;
}

interface AIAgentsLeadFormProps {
  formTag: string;
  title: string;
  subtitle: string;
}

const AIAgentsLeadForm: React.FC<AIAgentsLeadFormProps> = ({ formTag, title, subtitle }) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    jobTitle: "",
    companyName: "",
    comments: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      // Send data to Zapier webhook
      try {
        await fetch('https://hooks.zapier.com/hooks/catch/5146490/uhqraq6/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          mode: 'no-cors',
          body: JSON.stringify({
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            mobile: formData.mobile,
            jobTitle: formData.jobTitle,
            companyName: formData.companyName,
            comments: formData.comments,
            formTag: formTag,
            timestamp: new Date().toISOString(),
            source: 'AI Agents Lead Form'
          }),
        });
      } catch (zapierError) {
        console.error('Zapier webhook failed:', zapierError);
      }

      toast.success("Form submitted successfully!");
      setIsSubmitted(true);
      
      // Reset form data
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        jobTitle: "",
        companyName: "",
        comments: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("There was an error submitting your form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const SuccessMessage = () => (
    <div className="text-center py-16">
      <div className="space-y-8">
        {/* Success Icon */}
        <div className="flex justify-center">
          <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
            <CheckCircle2 className="w-12 h-12 text-white" />
          </div>
        </div>

        {/* Thank You Message */}
        <div className="space-y-4">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground">
            Thank You!
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your AI agent inquiry has been successfully submitted. We're excited to help you build powerful automation!
          </p>
        </div>

        {/* What Happens Next */}
        <div className="bg-card/50 border border-primary/20 rounded-xl p-8 max-w-3xl mx-auto">
          <h4 className="text-xl font-semibold mb-6 text-foreground">What happens next?</h4>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h5 className="font-medium text-foreground">Within 24 Hours</h5>
                <p className="text-sm text-muted-foreground">Our AI specialists review your requirements</p>
              </div>
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h5 className="font-medium text-foreground">Strategy Call</h5>
                <p className="text-sm text-muted-foreground">We'll schedule a personalized consultation</p>
              </div>
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h5 className="font-medium text-foreground">Automation Roadmap</h5>
                <p className="text-sm text-muted-foreground">Receive your custom AI agent blueprint</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="space-y-4">
          <p className="text-muted-foreground">
            In the meantime, explore our AI solutions and resources
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" asChild>
              <a href="/ai-solutions">Explore AI Solutions</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/training">Free Resources</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="ai-agents-form" className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container px-4 max-w-4xl mx-auto">
        <Card className="bg-card/80 backdrop-blur-sm border border-primary/20 shadow-xl">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl sm:text-3xl font-bold mb-4">{title}</CardTitle>
            <p className="text-muted-foreground text-lg">{subtitle}</p>
          </CardHeader>
          <CardContent className="p-6 sm:p-8">
            {isSubmitted ? (
              <SuccessMessage />
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="mobile">Phone Number</Label>
                    <Input
                      id="mobile"
                      name="mobile"
                      type="tel"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="jobTitle">Job Title</Label>
                    <Input
                      id="jobTitle"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleInputChange}
                      className="w-full"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Company Name</Label>
                    <Input
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="comments">What AI agents would you like to build?</Label>
                  <Textarea
                    id="comments"
                    name="comments"
                    value={formData.comments}
                    onChange={handleInputChange}
                    placeholder="Describe your automation needs, workflows you'd like to streamline, or specific AI agent capabilities you're interested in..."
                    className="w-full min-h-[120px]"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full" 
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Start Building AI Agents"}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AIAgentsLeadForm;