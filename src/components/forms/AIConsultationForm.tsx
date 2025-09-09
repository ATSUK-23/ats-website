import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  fullName: string;
  email: string;
  companyName: string;
  phone: string;
  additionalInfo: string;
}

export function AIConsultationForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    companyName: "",
    phone: "",
    additionalInfo: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.email || !formData.companyName) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Submit to Supabase using ai_leads table
      const { error } = await supabase
        .from("ai_leads")
        .insert([{
          first_name: formData.fullName.split(' ')[0] || formData.fullName,
          last_name: formData.fullName.split(' ').slice(1).join(' ') || '',
          email: formData.email,
          company_name: formData.companyName,
          phone: formData.phone,
          additional_info: formData.additionalInfo,
          comments: `AI Consultation booking request. Additional info: ${formData.additionalInfo}`,
          form_tag: "ai_consultation_booking"
        }]);

      if (error) throw error;

      // Also submit to FormSubmit
      const formSubmitData = new FormData();
      formSubmitData.append('name', formData.fullName);
      formSubmitData.append('email', formData.email);
      formSubmitData.append('business', formData.companyName);
      formSubmitData.append('phone', formData.phone);
      formSubmitData.append('additional', formData.additionalInfo);

      await fetch('https://formsubmit.co/richard.padun@theepitome.co.uk', {
        method: 'POST',
        body: formSubmitData
      });

      toast({
        title: "Success!",
        description: "Your consultation request has been submitted successfully.",
      });

      setIsSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        companyName: "",
        phone: "",
        additionalInfo: "",
      });

    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Failed to submit form. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const SuccessMessage = () => (
    <div className="text-center py-8">
      <CheckCircle2 className="mx-auto h-16 w-16 text-green-500 mb-4" />
      <h3 className="text-xl font-semibold mb-2">Consultation Request Received!</h3>
      <p className="text-muted-foreground mb-6">
        Thank you for your interest in our AI consultation services. 
        Please click button below to book a time in Richard's Diary
      </p>
      <Button 
        onClick={() => window.open('https://calendar.google.com/calendar/u/0/appointments/AcZssZ39ne1GRjOyM52AzZFovSI_Ye8wzmqZRFk9DVQ=', '_blank')}
        className="bg-primary hover:bg-primary/90"
      >
        Book Your Consultation Meeting
      </Button>
    </div>
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Schedule Your Session</CardTitle>
      </CardHeader>
      <CardContent>
        {isSubmitted ? (
          <SuccessMessage />
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name *</Label>
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="companyName">Company Name *</Label>
                <Input
                  id="companyName"
                  name="companyName"
                  type="text"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your company name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="additionalInfo">Additional Information</Label>
              <Textarea
                id="additionalInfo"
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleInputChange}
                placeholder="Tell us about your specific AI needs, challenges, or goals..."
                rows={4}
              />
            </div>

            <Button 
              type="submit" 
              className="w-full" 
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Schedule Free AI Consultation"}
            </Button>

            <p className="text-xs text-muted-foreground text-center mt-4">
              By submitting this form, you consent to being contacted by Advanced Technology Solutions regarding your AI consultation. We respect your privacy and will not share your information with third parties.
            </p>
          </form>
        )}
      </CardContent>
    </Card>
  );
}