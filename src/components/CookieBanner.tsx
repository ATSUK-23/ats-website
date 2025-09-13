import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X } from "lucide-react";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <Card className="mx-auto max-w-4xl p-6 shadow-lg border bg-background/95 backdrop-blur-sm">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="flex-1">
            <h3 className="font-semibold mb-2">We use cookies</h3>
            <p className="text-sm text-muted-foreground">
              This website uses cookies to enhance your browsing experience and provide personalized content. 
              By continuing to use this site, you consent to our use of cookies. 
              <a href="/privacy-policy" className="underline hover:text-primary ml-1">
                Learn more in our Privacy Policy
              </a>.
            </p>
          </div>
          <div className="flex gap-2 shrink-0">
            <Button
              variant="outline"
              size="sm"
              onClick={declineCookies}
              className="text-sm"
            >
              Decline
            </Button>
            <Button
              size="sm"
              onClick={acceptCookies}
              className="text-sm"
            >
              Accept All
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CookieBanner;