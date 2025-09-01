import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2, Calendar, FileText, Users } from "lucide-react";

interface VibeCodingLeadFormProps {
  title?: string;
  subtitle?: string;
}

export default function VibeCodingLeadForm({ 
  title = "Ready to Start Your Vibe Coding Project?",
  subtitle = "Get in touch with our Vibe Coding experts and turn your idea into reality."
}: VibeCodingLeadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState("");
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    jobTitle: "",
    companyName: "",
    comments: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Submit to Supabase
      const { error } = await supabase
        .from('vibe-coding')
        .insert({
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone || null,
          job_title: formData.jobTitle || null,
          company_name: formData.companyName || null,
          comments: formData.comments || null,
          form_tag: 'Vibe-Coding'
        });

      if (error) throw error;

      // Send to Zapier webhook
      try {
        await fetch('https://hooks.zapier.com/hooks/catch/5146490/uhgjr5b/', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          mode: "no-cors",
          body: JSON.stringify({
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phone: formData.phone,
            jobTitle: formData.jobTitle,
            companyName: formData.companyName,
            comments: formData.comments,
            formTag: 'Vibe-Coding',
            timestamp: new Date().toISOString(),
            source: 'Vibe Coding Lead Form'
          }),
        });
      } catch (webhookError) {
        console.error('Zapier webhook error:', webhookError);
        // Don't fail the form submission if webhook fails
      }

      toast({
        title: "Thank you for your submission!",
        description: "We'll be in touch soon to discuss your Vibe Coding project needs.",
      });

      // Store name and show success state
      setSubmittedName(formData.firstName);
      setIsSubmitted(true);
      
      // Reset form data but keep success state
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        jobTitle: "",
        companyName: "",
        comments: ""
      });

    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Submission failed",
        description: "There was an error submitting your form. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Success Message Component
  const SuccessMessage = () => (
    <CardContent className="text-center py-16">
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
            Thank You, {submittedName}!
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your project application has been successfully submitted. We're excited to help you build your vision with Vibe Coding!
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
                <p className="text-sm text-muted-foreground">Our Vibe Coding team will review your project and reach out</p>
              </div>
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h5 className="font-medium text-foreground">Discovery Call</h5>
                <p className="text-sm text-muted-foreground">We'll schedule a consultation to understand your vision</p>
              </div>
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h5 className="font-medium text-foreground">Project Proposal</h5>
                <p className="text-sm text-muted-foreground">Receive your custom development roadmap and timeline</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="space-y-4">
          <p className="text-muted-foreground">
            In the meantime, explore our Vibe Coding workshops and success stories
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" asChild>
              <a href="/training">Vibe Coding Workshops</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/about">Our Success Stories</a>
            </Button>
          </div>
        </div>
      </div>
    </CardContent>
  );

  return (
    <section id="vibe-coding-form" className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-card/80 backdrop-blur-sm border border-primary/20 shadow-xl">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                {title}
              </CardTitle>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                {subtitle}
              </p>
            </CardHeader>
            
            {/* Conditional Content */}
            {isSubmitted ? (
              <SuccessMessage />
            ) : (
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-sm font-medium">
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="bg-background/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-sm font-medium">
                      Last Name *
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="bg-background/50"
                    />
                  </div>
                </div>

                {/* Contact Fields */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-background/50"
                    />
                  </div>
                </div>

                {/* Job Fields */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="jobTitle" className="text-sm font-medium">
                      Job Title
                    </Label>
                    <Input
                      id="jobTitle"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleChange}
                      className="bg-background/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="companyName" className="text-sm font-medium">
                      Company Name
                    </Label>
                    <Input
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      className="bg-background/50"
                    />
                  </div>
                </div>

                {/* Comments */}
                <div className="space-y-2">
                  <Label htmlFor="comments" className="text-sm font-medium">
                    Tell us about your project
                  </Label>
                  <Textarea
                    id="comments"
                    name="comments"
                    value={formData.comments}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describe your project idea, goals, or any specific requirements..."
                    className="bg-background/50 min-h-[100px]"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full text-base font-semibold"
                  >
                    {isSubmitting ? "Submitting..." : "Get Started with Vibe Coding"}
                  </Button>
                </div>
              </form>
              </CardContent>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
}