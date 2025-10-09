import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
export const Contact = () => {
  const {
    toast
  } = useToast();
  const [loading, setLoading] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Thanks!",
        description: "We'll be in touch shortly. You can also book a call now."
      });
      window.open("https://www.automatetosell.com/ats-application", "_blank");
    }, 600);
  };
  return <section id="contact" className="bg-muted/30 border-t">
      
    </section>;
};
export default Contact;