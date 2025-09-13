import { Helmet } from "react-helmet-async";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Automate To Sell</title>
        <meta name="description" content="Privacy Policy for Automate To Sell - Learn how we collect, use, and protect your personal information." />
      </Helmet>
      
      <SiteHeader />
      
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
            <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>
            
            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
                <p className="mb-4">
                  We collect information you provide directly to us, such as when you fill out a contact form, 
                  request a consultation, or take our AI assessment. This may include:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Name and contact information (email, phone number)</li>
                  <li>Company information and business details</li>
                  <li>Assessment responses and consultation preferences</li>
                  <li>Communication preferences</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
                <p className="mb-4">We use the information we collect to:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Provide consultation services and respond to your inquiries</li>
                  <li>Send you requested information about our services</li>
                  <li>Improve our services and develop new offerings</li>
                  <li>Communicate with you about our services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. Information Sharing</h2>
                <p className="mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties 
                  without your consent, except as described in this policy. We may share your information:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>With service providers who help us operate our business</li>
                  <li>When required by law or to protect our rights</li>
                  <li>In connection with a business transfer or sale</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
                <p className="mb-4">
                  We implement appropriate security measures to protect your personal information against 
                  unauthorized access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
                <p className="mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Access and update your personal information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt out of marketing communications</li>
                  <li>Request a copy of your data</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. Cookies</h2>
                <p className="mb-4">
                  Our website may use cookies to enhance your experience. You can choose to disable cookies 
                  through your browser settings, though this may affect functionality.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
                <p className="mb-4">
                  If you have questions about this Privacy Policy, please contact us at:
                </p>
                <p className="mb-2">Email: info@automatetosell.com</p>
                <p>Website: https://automatetosell.com</p>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <SiteFooter />
    </>
  );
};

export default PrivacyPolicy;