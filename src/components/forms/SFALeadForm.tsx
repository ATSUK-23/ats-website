import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { CheckCircle2, Calendar, FileText, Users } from "lucide-react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  jobTitle: string;
  companyName: string;
  comments: string;
}

const SFALeadForm = () => {
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState("");
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    jobTitle: "",
    companyName: "",
    comments: ""
  });

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.mobile) {
      setIsSubmitting(false);
      return;
    }

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
            formTag: 'sfa-opt-in',
            timestamp: new Date().toISOString(),
            source: 'Sales Funnel Automation Form'
          }),
        });
      } catch (zapierError) {
        console.error('Zapier webhook failed:', zapierError);
      }

      // Store name and show success state
      setSubmittedName(formData.firstName);
      setIsSubmitted(true);
      
      // Reset form data but keep success state
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        jobTitle: "",
        companyName: "",
        comments: ""
      });
    } catch (error) {
      console.error('Unexpected error:', error);
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
            Your application has been successfully submitted. We're excited to help you automate your sales and marketing!
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
                <p className="text-sm text-muted-foreground">Our team will review your application and reach out</p>
              </div>
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h5 className="font-medium text-foreground">Strategy Call</h5>
                <p className="text-sm text-muted-foreground">We'll schedule a personalized automation consultation</p>
              </div>
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h5 className="font-medium text-foreground">Custom Plan</h5>
                <p className="text-sm text-muted-foreground">Receive your automation implementation roadmap</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </CardContent>
  );

  return (
    <section id="sfa-form" className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-card/80 backdrop-blur-sm border border-primary/20 shadow-xl">
            {!isSubmitted && (
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                  Get Your Sales & Marketing Automation Assessment
                </CardTitle>
                <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                  Ready to automate your sales funnel? Let's discuss how we can streamline your processes and boost your revenue.
                </p>
              </CardHeader>
            )}
            
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
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
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
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        required
                        className="bg-background/50"
                      />
                    </div>
                  </div>

                  {/* Contact Fields */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">
                        E-mail *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        className="bg-background/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="mobile" className="text-sm font-medium">
                        Mobile *
                      </Label>
                      <Input
                        id="mobile"
                        type="tel"
                        value={formData.mobile}
                        onChange={(e) => handleInputChange("mobile", e.target.value)}
                        required
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
                        type="text"
                        value={formData.jobTitle}
                        onChange={(e) => handleInputChange("jobTitle", e.target.value)}
                        className="bg-background/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="companyName" className="text-sm font-medium">
                        Company Name
                      </Label>
                      <Input
                        id="companyName"
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => handleInputChange("companyName", e.target.value)}
                        className="bg-background/50"
                      />
                    </div>
                  </div>

                  {/* Comments */}
                  <div className="space-y-2">
                    <Label htmlFor="comments" className="text-sm font-medium">
                      Comments
                    </Label>
                    <Textarea
                      id="comments"
                      value={formData.comments}
                      onChange={(e) => handleInputChange("comments", e.target.value)}
                      placeholder="Tell us about your automation needs or any questions you have..."
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
                      {isSubmitting ? "Submitting..." : "Get Your Automation Assessment"}
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
};

export default SFALeadForm;
