import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";

import { CheckCircle } from "lucide-react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  jobTitle: string;
  companyName: string;
  comments: string;
}

export default function TrainingLeadForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
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
      return;
    }

    setIsSubmitting(true);

    try {
      // Insert into Supabase
      const { error } = await supabase
        .from('training')
        .insert([
          {
            first_name: formData.firstName,
            last_name: formData.lastName,
            email: formData.email,
            phone: formData.phone || null,
            job_title: formData.jobTitle || null,
            company_name: formData.companyName || null,
            comments: formData.comments || null,
            form_tag: 'training'
          }
        ]);

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }

      // Send to Zapier webhook
      try {
        await fetch('https://hooks.zapier.com/hooks/catch/5146490/uhqle29/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            form_type: 'training',
            submitted_at: new Date().toISOString(),
          }),
        });
      } catch (webhookError) {
        console.warn('Zapier webhook failed:', webhookError);
        // Don't fail the form submission if webhook fails
      }


      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        jobTitle: "",
        companyName: "",
        comments: "",
      });
      
      setIsSubmitted(true);

    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const SuccessMessage = () => (
    <div className="text-center py-8">
      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
      <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
      <p className="text-muted-foreground mb-6">
        Your training inquiry has been received. We'll contact you within 24 hours to discuss your training needs.
      </p>
      <div className="space-y-2 text-sm text-muted-foreground">
        <p>📞 Expect a call from our training specialist</p>
        <p>📧 Check your email for confirmation</p>
        <p>🎯 We'll help you choose the right program</p>
      </div>
    </div>
  );

  return (
    <Card className="w-full max-w-2xl mx-auto bg-white/10 backdrop-blur-sm border-white/20">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Get Started with AI Training</CardTitle>
        <p className="text-muted-foreground text-center">
          Ready to transform your team's AI capabilities? Let's discuss your training needs.
        </p>
      </CardHeader>
      <CardContent>
        {isSubmitted ? (
          <SuccessMessage />
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
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
                />
              </div>
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
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="jobTitle">Job Title</Label>
                <Input
                  id="jobTitle"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="companyName">Company Name</Label>
                <Input
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="comments">Training Interests & Questions</Label>
              <Textarea
                id="comments"
                name="comments"
                placeholder="Tell us about your training goals, team size, and which programs interest you most..."
                value={formData.comments}
                onChange={handleInputChange}
                rows={4}
              />
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Request Training Information"}
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              By submitting this form, you agree to be contacted about our training programs.
            </p>
          </form>
        )}
      </CardContent>
    </Card>
  );
}