import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { CheckCircle } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";

interface FormData {
  email: string;
  name: string;
  location: string;
  eventType: string;
  eventTypeOther: string;
  timeFrame: string;
  teamType: string;
  teamTypeOther: string;
  desiredOutcome: string;
  additionalInfo: string;
}

const SuperSkillsLeadForm = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    name: "",
    location: "",
    eventType: "",
    eventTypeOther: "",
    timeFrame: "",
    teamType: "",
    teamTypeOther: "",
    desiredOutcome: "",
    additionalInfo: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!formData.email || !formData.name || !formData.location || !formData.eventType || !formData.timeFrame || !formData.teamType) {
      alert("Please fill in all required fields");
      setIsSubmitting(false);
      return;
    }

    try {
      // Submit to Zapier webhook
      await fetch("https://hooks.zapier.com/hooks/catch/20872563/2e8qdec/", {
        method: "POST",
        body: JSON.stringify({
          ...formData,
          formType: "SuperSkills Keynote Booking",
          submittedAt: new Date().toISOString()
        })
      });

      setIsSubmitted(true);
      setFormData({
        email: "",
        name: "",
        location: "",
        eventType: "",
        eventTypeOther: "",
        timeFrame: "",
        teamType: "",
        teamTypeOther: "",
        desiredOutcome: "",
        additionalInfo: ""
      });
    } catch (error) {
      console.error("Form submission error:", error);
      alert("There was an error submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const SuccessMessage = () => (
    <div className="text-center py-12">
      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
      <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
      <p className="text-muted-foreground mb-4">
        Your booking inquiry has been submitted successfully.
      </p>
      <p className="text-muted-foreground">
        Rahim will review your request and get back to you within 48 hours to discuss availability and next steps.
      </p>
    </div>
  );

  return (
    <section className="py-16 bg-secondary/5">
      <div className="container max-w-3xl">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl text-center">Book the SuperSkills Keynote</CardTitle>
            <p className="text-center text-muted-foreground mt-2">
              Bring the SuperSkills Keynote to Your Organisation (Q3/Q4 2025)
            </p>
          </CardHeader>
          <CardContent>
            {isSubmitted ? (
              <SuccessMessage />
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@company.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                {/* Location */}
                <div className="space-y-2">
                  <Label>Are you located in London or elsewhere? *</Label>
                  <RadioGroup value={formData.location} onValueChange={(value) => handleRadioChange("location", value)}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="London (or close to)" id="loc-london" />
                      <Label htmlFor="loc-london" className="font-normal cursor-pointer">London (or close to)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="UK" id="loc-uk" />
                      <Label htmlFor="loc-uk" className="font-normal cursor-pointer">UK</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Europe" id="loc-europe" />
                      <Label htmlFor="loc-europe" className="font-normal cursor-pointer">Europe</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="GCC" id="loc-gcc" />
                      <Label htmlFor="loc-gcc" className="font-normal cursor-pointer">GCC</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="North America" id="loc-na" />
                      <Label htmlFor="loc-na" className="font-normal cursor-pointer">North America</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Asia" id="loc-asia" />
                      <Label htmlFor="loc-asia" className="font-normal cursor-pointer">Asia</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Online" id="loc-online" />
                      <Label htmlFor="loc-online" className="font-normal cursor-pointer">Looking for Online Delivery across timezones</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Event Type */}
                <div className="space-y-2">
                  <Label>What are you exploring? *</Label>
                  <RadioGroup value={formData.eventType} onValueChange={(value) => handleRadioChange("eventType", value)}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Keynote for leadership team" id="event-leadership" />
                      <Label htmlFor="event-leadership" className="font-normal cursor-pointer">A keynote for a leadership team meeting or offsite</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Internal event" id="event-internal" />
                      <Label htmlFor="event-internal" className="font-normal cursor-pointer">An internal event or All-Hands Session</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Public event" id="event-public" />
                      <Label htmlFor="event-public" className="font-normal cursor-pointer">A public event with multiple speakers</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Private event" id="event-private" />
                      <Label htmlFor="event-private" className="font-normal cursor-pointer">A closed private event for clients, groups e.g. Impact Breakfasts</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Other" id="event-other" />
                      <Label htmlFor="event-other" className="font-normal cursor-pointer">Other</Label>
                    </div>
                  </RadioGroup>
                  {formData.eventType === "Other" && (
                    <Input
                      name="eventTypeOther"
                      placeholder="Please specify"
                      value={formData.eventTypeOther}
                      onChange={handleInputChange}
                      className="mt-2"
                    />
                  )}
                </div>

                {/* Time Frame */}
                <div className="space-y-2">
                  <Label>What time frame are you looking at? *</Label>
                  <RadioGroup value={formData.timeFrame} onValueChange={(value) => handleRadioChange("timeFrame", value)}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="July/Aug 2025" id="time-summer" />
                      <Label htmlFor="time-summer" className="font-normal cursor-pointer">July/Aug 2025</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="September/October 2025" id="time-fall" />
                      <Label htmlFor="time-fall" className="font-normal cursor-pointer">September/October 2025</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="November/December 2025" id="time-winter" />
                      <Label htmlFor="time-winter" className="font-normal cursor-pointer">November/December 2025</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="2026" id="time-2026" />
                      <Label htmlFor="time-2026" className="font-normal cursor-pointer">2026</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Book Launch" id="time-launch" />
                      <Label htmlFor="time-launch" className="font-normal cursor-pointer">Only around the Book Launch</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Team Type */}
                <div className="space-y-2">
                  <Label>What type of team are you? *</Label>
                  <RadioGroup value={formData.teamType} onValueChange={(value) => handleRadioChange("teamType", value)}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="C-Suite" id="team-csuite" />
                      <Label htmlFor="team-csuite" className="font-normal cursor-pointer">C-Suite</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Senior Team" id="team-senior" />
                      <Label htmlFor="team-senior" className="font-normal cursor-pointer">Senior Team</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="People Ops / HR" id="team-hr" />
                      <Label htmlFor="team-hr" className="font-normal cursor-pointer">People Ops / HR</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Events Team" id="team-events" />
                      <Label htmlFor="team-events" className="font-normal cursor-pointer">Events Team</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Other" id="team-other" />
                      <Label htmlFor="team-other" className="font-normal cursor-pointer">Other</Label>
                    </div>
                  </RadioGroup>
                  {formData.teamType === "Other" && (
                    <Input
                      name="teamTypeOther"
                      placeholder="Please specify"
                      value={formData.teamTypeOther}
                      onChange={handleInputChange}
                      className="mt-2"
                    />
                  )}
                </div>

                {/* Desired Outcome */}
                <div className="space-y-2">
                  <Label htmlFor="desiredOutcome">What do you want your people to walk away with?</Label>
                  <Textarea
                    id="desiredOutcome"
                    name="desiredOutcome"
                    placeholder="e.g. Insight, mindset shift, strategic challenge, inspiration, practical tools"
                    value={formData.desiredOutcome}
                    onChange={handleInputChange}
                    rows={4}
                  />
                </div>

                {/* Additional Info */}
                <div className="space-y-2">
                  <Label htmlFor="additionalInfo">Anything else you want to share?</Label>
                  <Textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    placeholder="Any additional information..."
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                    rows={3}
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Booking Inquiry"}
                  </Button>
                </div>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to be contacted about the SuperSkills keynote booking.
                </p>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SuperSkillsLeadForm;
