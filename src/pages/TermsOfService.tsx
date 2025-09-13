import { Helmet } from "react-helmet-async";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Automate To Sell</title>
        <meta name="description" content="Terms of Service for Automate To Sell - Read our terms and conditions for using our services." />
      </Helmet>
      
      <SiteHeader />
      
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
            <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>
            
            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
                <p className="mb-4">
                  By accessing and using the Automate To Sell website and services, you agree to be bound 
                  by these Terms of Service and all applicable laws and regulations.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. Description of Services</h2>
                <p className="mb-4">
                  Automate To Sell provides AI automation consulting services, including:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Business process assessments and audits</li>
                  <li>AI strategy consulting and implementation guidance</li>
                  <li>Technology recommendations and integration support</li>
                  <li>Training and educational services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
                <p className="mb-4">You agree to:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Provide accurate and complete information</li>
                  <li>Use our services only for lawful purposes</li>
                  <li>Respect intellectual property rights</li>
                  <li>Not interfere with the proper functioning of our services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
                <p className="mb-4">
                  All content on this website, including text, graphics, logos, and software, is the 
                  property of Automate To Sell and is protected by copyright and other intellectual property laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
                <p className="mb-4">
                  Automate To Sell shall not be liable for any indirect, incidental, special, or consequential 
                  damages arising from your use of our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. Privacy</h2>
                <p className="mb-4">
                  Your privacy is important to us. Please review our Privacy Policy to understand how we 
                  collect, use, and protect your information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">7. Modifications</h2>
                <p className="mb-4">
                  We reserve the right to modify these terms at any time. Changes will be effective 
                  immediately upon posting on this website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">8. Contact Information</h2>
                <p className="mb-4">
                  For questions about these Terms of Service, please contact us at:
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

export default TermsOfService;