import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { CheckCircle2, Calendar, FileText, Users } from "lucide-react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  productNiche: string;
  hasPatent: string;
  productUnique: string;
  salesChannels: string[];
  skuCount: string;
  monthlySales: string;
}

const ECommerceLeadForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState("");
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    productNiche: "",
    hasPatent: "",
    productUnique: "",
    salesChannels: [],
    skuCount: "",
    monthlySales: ""
  });

  const salesChannelOptions = [
    "Amazon",
    "Ebay", 
    "Shopify",
    "Walmart",
    "WP",
    "Others"
  ];

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSalesChannelChange = (channel: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      salesChannels: checked 
        ? [...prev.salesChannels, channel]
        : prev.salesChannels.filter(c => c !== channel)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email) {
      toast({
        title: "Please fill in required fields",
        description: "First name, last name, and email are required.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Insert data into Supabase
      const { error } = await supabase
        .from('ecommerce_leads')
        .insert({
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.mobile,
          product_niche: formData.productNiche,
          sales_channels: formData.salesChannels,
          sales_volume: formData.monthlySales,
          additional_info: `Patent: ${formData.hasPatent}, SKUs: ${formData.skuCount}, Unique features: ${formData.productUnique}`
        });

      if (error) {
        console.error('Supabase error:', error);
        toast({
          title: "Something went wrong",
          description: "Please try again later.",
          variant: "destructive"
        });
        return;
      }
      
      toast({
        title: "Thank you for your submission!",
        description: "We'll be in touch soon to help scale your e-commerce business.",
      });

      // Store name and show success state
      setSubmittedName(formData.firstName);
      setIsSubmitted(true);
      
      // Reset form data but keep success state
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        productNiche: "",
        hasPatent: "",
        productUnique: "",
        salesChannels: [],
        skuCount: "",
        monthlySales: ""
      });
    } catch (error) {
      console.error('Unexpected error:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive"
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
            Your application has been successfully submitted. We're excited to help you scale your e-commerce business globally!
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
                <p className="text-sm text-muted-foreground">We'll schedule a personalized consultation</p>
              </div>
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h5 className="font-medium text-foreground">Custom Plan</h5>
                <p className="text-sm text-muted-foreground">Receive your global expansion roadmap</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="space-y-4">
          <p className="text-muted-foreground">
            In the meantime, check out some of our success stories and resources
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" asChild>
              <a href="/about">Our Success Stories</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/training">Free Resources</a>
            </Button>
          </div>
        </div>
      </div>
    </CardContent>
  );

  return (
    <section id="ecommerce-form" className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-card/80 backdrop-blur-sm border border-primary/20 shadow-xl">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Ready to Scale Your E-Commerce Business?
              </CardTitle>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                Tell us about your business and we'll show you how to expand globally with our proven systems.
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
                      Mobile
                    </Label>
                    <Input
                      id="mobile"
                      type="tel"
                      value={formData.mobile}
                      onChange={(e) => handleInputChange("mobile", e.target.value)}
                      className="bg-background/50"
                    />
                  </div>
                </div>

                {/* Product Niche */}
                <div className="space-y-2">
                  <Label htmlFor="productNiche" className="text-sm font-medium">
                    Product Niche
                  </Label>
                  <Input
                    id="productNiche"
                    type="text"
                    value={formData.productNiche}
                    onChange={(e) => handleInputChange("productNiche", e.target.value)}
                    placeholder="e.g., Health & Wellness, Electronics, Home & Garden"
                    className="bg-background/50"
                  />
                </div>

                {/* Patent Status */}
                <div className="space-y-2">
                  <Label htmlFor="hasPatent" className="text-sm font-medium">
                    Do You Have A Patent?
                  </Label>
                  <Select value={formData.hasPatent} onValueChange={(value) => handleInputChange("hasPatent", value)}>
                    <SelectTrigger className="bg-background/50">
                      <SelectValue placeholder="Select patent status" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border border-border">
                      <SelectItem value="yes">Yes</SelectItem>
                      <SelectItem value="no">No</SelectItem>
                      <SelectItem value="in-progress">In Progress</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Product Unique Features */}
                <div className="space-y-2">
                  <Label htmlFor="productUnique" className="text-sm font-medium">
                    What is Unique About Your Product?
                  </Label>
                  <Textarea
                    id="productUnique"
                    value={formData.productUnique}
                    onChange={(e) => handleInputChange("productUnique", e.target.value)}
                    placeholder="Describe what makes your product stand out from competitors..."
                    className="bg-background/50 min-h-[100px]"
                  />
                </div>

                {/* Sales Channels */}
                <div className="space-y-4">
                  <Label className="text-sm font-medium">
                    What Sales Channels Do You Use? (Select all that apply)
                  </Label>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {salesChannelOptions.map((channel) => (
                      <div key={channel} className="flex items-center space-x-2">
                        <Checkbox
                          id={channel}
                          checked={formData.salesChannels.includes(channel)}
                          onCheckedChange={(checked) => 
                            handleSalesChannelChange(channel, checked as boolean)
                          }
                        />
                        <Label htmlFor={channel} className="text-sm font-normal">
                          {channel}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* SKU Count */}
                <div className="space-y-2">
                  <Label htmlFor="skuCount" className="text-sm font-medium">
                    How Many SKUs Do You Have?
                  </Label>
                  <Input
                    id="skuCount"
                    type="number"
                    value={formData.skuCount}
                    onChange={(e) => handleInputChange("skuCount", e.target.value)}
                    placeholder="Enter number of products/variants"
                    className="bg-background/50"
                  />
                </div>

                {/* Monthly Sales */}
                <div className="space-y-2">
                  <Label htmlFor="monthlySales" className="text-sm font-medium">
                    Average Monthly Sales
                  </Label>
                  <Select value={formData.monthlySales} onValueChange={(value) => handleInputChange("monthlySales", value)}>
                    <SelectTrigger className="bg-background/50">
                      <SelectValue placeholder="Select monthly sales range" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border border-border">
                      <SelectItem value="under-10k">&lt; $9,999</SelectItem>
                      <SelectItem value="10k-25k">$10,000 - $24,999</SelectItem>
                      <SelectItem value="25k-50k">$25,000 - $49,999</SelectItem>
                      <SelectItem value="50k-100k">$50,000 - $99,999</SelectItem>
                      <SelectItem value="100k-500k">$100,000 - $499,999</SelectItem>
                      <SelectItem value="500k-1m">$500,000 - $999,999</SelectItem>
                      <SelectItem value="over-1m">&gt; $1M</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full text-base font-semibold"
                  >
                    {isSubmitting ? "Submitting..." : "Help Me Scale My e-Commerce Business"}
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

export default ECommerceLeadForm;