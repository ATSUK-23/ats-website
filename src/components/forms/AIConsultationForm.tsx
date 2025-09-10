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

interface AssessmentResults {
  answers: Record<number, number>;
  overallScore: number;
  domainScores: Array<{
    domain: string;
    score: number;
    weight: number;
    description: string;
  }>;
}

interface AIConsultationFormProps {
  assessmentResults?: AssessmentResults;
}

export function AIConsultationForm({ assessmentResults }: AIConsultationFormProps) {
  console.log("🚀 AIConsultationForm component rendered with assessmentResults:", assessmentResults);
  
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
    console.log("🚀 FORM SUBMIT TRIGGERED - TOP OF FUNCTION");
    console.log("🚀 BUTTON CLICKED - SUBMIT HANDLER TRIGGERED");
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
      console.log("Form submission started", { formData, assessmentResults });
      console.log("Assessment results check:", {
        hasAssessmentResults: !!assessmentResults,
        hasAnswers: !!(assessmentResults?.answers),
        hasDomainScores: !!(assessmentResults?.domainScores),
        answersType: typeof assessmentResults?.answers,
        domainScoresType: typeof assessmentResults?.domainScores
      });
      
      // Save assessment results to Supabase if available
      if (assessmentResults && assessmentResults.answers && assessmentResults.domainScores) {
        const getMaturityLevel = (score: number) => {
          if (score >= 76) return "AI Advanced";
          if (score >= 51) return "AI Capable"; 
          if (score >= 26) return "AI Curious";
          return "AI Unaware";
        };

        console.log("Attempting Supabase insert with data:", {
          user_name: formData.fullName,
          user_email: formData.email,
          company_name: formData.companyName,
          phone: formData.phone,
          additional_info: formData.additionalInfo,
          assessment_answers: assessmentResults.answers,
          overall_score: assessmentResults.overallScore,
          domain_scores: assessmentResults.domainScores,
          maturity_level: getMaturityLevel(assessmentResults.overallScore)
        });

        const { data, error: supabaseError } = await supabase
          .from('assessment_results')
          .insert({
            user_name: formData.fullName,
            user_email: formData.email,
            company_name: formData.companyName,
            phone: formData.phone,
            additional_info: formData.additionalInfo,
            assessment_answers: assessmentResults.answers,
            overall_score: assessmentResults.overallScore,
            domain_scores: assessmentResults.domainScores,
            maturity_level: getMaturityLevel(assessmentResults.overallScore)
          })
          .select();

        if (supabaseError) {
          console.error("Error saving to Supabase:", supabaseError);
          console.error("Full Supabase error details:", JSON.stringify(supabaseError, null, 2));
        } else {
          console.log("Assessment results saved to Supabase successfully");
          console.log("Inserted data:", data);
        }
      } else {
        console.log("No assessment results to save - this is likely a direct form submission");
        // For direct form submissions without assessment, we could save to a different table
        // or modify the assessment_results table to make assessment fields optional
      }
      
      // Submit to FormSubmit with assessment data
      const formSubmitData = new FormData();
      formSubmitData.append('name', formData.fullName);
      formSubmitData.append('email', formData.email);
      formSubmitData.append('business', formData.companyName);
      formSubmitData.append('phone', formData.phone);
      formSubmitData.append('additional', formData.additionalInfo);
      
      // Include assessment results if available
      if (assessmentResults && assessmentResults.answers && assessmentResults.domainScores) {
        formSubmitData.append('ai_readiness_score', `${Math.round(assessmentResults.overallScore)}%`);
        formSubmitData.append('growth_potential', `${Math.round(100 - assessmentResults.overallScore)}%`);
        formSubmitData.append('domain_scores', assessmentResults.domainScores.map(d => `${d.domain}: ${Math.round(d.score)}%`).join(', '));
        if (assessmentResults.answers && typeof assessmentResults.answers === 'object') {
          formSubmitData.append('assessment_answers', Object.entries(assessmentResults.answers).map(([q, a]) => `Q${q}: Option ${parseInt(a.toString()) + 1}`).join(', '));
        }
      }

      const formSubmitResponse = await fetch('https://formsubmit.co/martin@automatetosell.com', {
        method: 'POST',
        body: formSubmitData
      });
      
      console.log("FormSubmit response:", formSubmitResponse.status, formSubmitResponse.statusText);

      // Skip assessment email for now to isolate the issue
      // if (assessmentResults && assessmentResults.answers && assessmentResults.domainScores) {
      //   console.log("Sending assessment email...");
      //   try {
      //     const getMaturityLevel = (score: number) => {
      //       if (score >= 76) return "AI Advanced";
      //       if (score >= 51) return "AI Capable"; 
      //       if (score >= 26) return "AI Curious";
      //       return "AI Unaware";
      //     };

      //     const emailResponse = await supabase.functions.invoke('send-assessment-email', {
      //       body: {
      //         name: formData.fullName,
      //         email: formData.email,
      //         answers: assessmentResults.answers,
      //         overallScore: assessmentResults.overallScore,
      //         domainScores: assessmentResults.domainScores,
      //         maturity: getMaturityLevel(assessmentResults.overallScore)
      //       }
      //     });

      //     if (emailResponse.error) {
      //       console.error("Assessment email error:", emailResponse.error);
      //     } else {
      //       console.log("Assessment email sent successfully");
      //     }
      //   } catch (emailError) {
      //     console.error("Assessment email exception:", emailError);
      //   }
      // }

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

      // Remove automatic redirect - user will click button instead

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
        Thank you for your interest in our AI consultation services. Click the button below to book your call time
      </p>
      <Button 
        onClick={() => window.open('https://calendar.google.com/calendar/u/0/appointments/AcZssZ39ne1GRjOyM52AzZFovSI_Ye8wzmqZRFk9DVQ=', '_blank')}
        className="w-full max-w-md"
      >
        Book Your Call Now
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
              onClick={() => console.log("🚀 BUTTON CLICKED - onClick handler")}
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