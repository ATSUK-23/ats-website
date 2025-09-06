import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import EmailTemplate from '@/components/email/EmailTemplate';
import { EmailTemplateHTML } from '@/components/email/EmailTemplateHTML';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const EmailTemplatePreview = () => {
  const [templateProps, setTemplateProps] = useState({
    recipientName: 'John Smith',
    subject: 'Thank you for your interest in AI Automation',
    message: 'We\'ve received your inquiry and will be in touch within 24 hours to discuss how we can help transform your business with intelligent automation.',
    ctaText: 'Schedule Your Consultation',
    ctaUrl: 'https://automatetosell.com'
  });

  const handleInputChange = (field: string, value: string) => {
    setTemplateProps(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Email Template Preview | Automate To Sell</title>
        <meta name="description" content="Preview and customize email templates for Go High Level integration" />
      </Helmet>
      
      <SiteHeader />
      
      <main className="container py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4">Email Template Preview</h1>
            <p className="text-muted-foreground">
              Customize and preview your email template for Go High Level integration
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Controls */}
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg border">
                <h2 className="text-xl font-semibold mb-4">Customize Template</h2>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="recipientName">Recipient Name</Label>
                    <Input
                      id="recipientName"
                      value={templateProps.recipientName}
                      onChange={(e) => handleInputChange('recipientName', e.target.value)}
                      placeholder="John Smith"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Use &#123;&#123;first_name&#125;&#125; in GHL
                    </p>
                  </div>

                  <div>
                    <Label htmlFor="subject">Email Subject</Label>
                    <Input
                      id="subject"
                      value={templateProps.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      placeholder="Thank you for your interest"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Main Message</Label>
                    <Textarea
                      id="message"
                      value={templateProps.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Your main email message..."
                      rows={4}
                    />
                  </div>

                  <div>
                    <Label htmlFor="ctaText">Call-to-Action Text</Label>
                    <Input
                      id="ctaText"
                      value={templateProps.ctaText}
                      onChange={(e) => handleInputChange('ctaText', e.target.value)}
                      placeholder="Schedule Your Consultation"
                    />
                  </div>

                  <div>
                    <Label htmlFor="ctaUrl">Call-to-Action URL</Label>
                    <Input
                      id="ctaUrl"
                      value={templateProps.ctaUrl}
                      onChange={(e) => handleInputChange('ctaUrl', e.target.value)}
                      placeholder="https://automatetosell.com"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Preview */}
            <div className="space-y-6">
              <Tabs defaultValue="preview" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="preview">Preview</TabsTrigger>
                  <TabsTrigger value="html">HTML Code</TabsTrigger>
                </TabsList>
                
                <TabsContent value="preview" className="space-y-4">
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Email Preview</h3>
                    <div className="bg-white rounded-md overflow-hidden shadow-sm">
                      <EmailTemplate {...templateProps} />
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="html" className="space-y-4">
                  <EmailTemplateHTML {...templateProps} />
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-12 bg-card p-6 rounded-lg border">
            <h2 className="text-xl font-semibold mb-4">Integration Instructions</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">For Go High Level:</h3>
                <ol className="text-sm space-y-2 text-muted-foreground">
                  <li>1. Copy the HTML code from the "HTML Code" tab above</li>
                  <li>2. Go to Marketing → Email Templates in GHL</li>
                  <li>3. Create new template or edit existing</li>
                  <li>4. Switch to HTML/Code view</li>
                  <li>5. Paste the HTML code</li>
                  <li>6. Replace static values with GHL merge tags</li>
                  <li>7. Test and save your template</li>
                </ol>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Common GHL Merge Tags:</h3>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• &#123;&#123;first_name&#125;&#125; - First name</li>
                  <li>• &#123;&#123;last_name&#125;&#125; - Last name</li>
                  <li>• &#123;&#123;email&#125;&#125; - Email address</li>
                  <li>• &#123;&#123;phone&#125;&#125; - Phone number</li>
                  <li>• &#123;&#123;company_name&#125;&#125; - Company name</li>
                  <li>• &#123;&#123;custom_field_name&#125;&#125; - Custom fields</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <SiteFooter />
    </div>
  );
};

export default EmailTemplatePreview;