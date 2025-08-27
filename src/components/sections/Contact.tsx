import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Thanks!",
        description: "We'll be in touch shortly. You can also book a call now.",
      });
      window.open("https://www.automatetosell.com/ats-application", "_blank");
    }, 600);
  };

  return (
    <section id="contact" className="bg-muted/30 border-t">
      <div className="container py-12 sm:py-16 md:py-24 px-4">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Get in touch</h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground">
            Tell us about your goals and we'll recommend the right AI strategy and implementation plan.
          </p>
        </div>

        <form onSubmit={onSubmit} className="mt-6 sm:mt-8 grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <label className="text-sm font-medium">Name</label>
            <Input name="name" required placeholder="Your name" />
          </div>
          <div className="sm:col-span-1">
            <label className="text-sm font-medium">Email</label>
            <Input type="email" name="email" required placeholder="you@company.com" />
          </div>
          <div className="sm:col-span-2">
            <label className="text-sm font-medium">Message</label>
            <Textarea name="message" rows={4} placeholder="What would you like to automate?" />
          </div>
          <div className="sm:col-span-2 flex flex-col sm:flex-row items-center gap-3">
            <Button type="submit" variant="hero" disabled={loading} className="w-full sm:w-auto text-sm sm:text-base">{loading ? "Sending..." : "Send & Book Call"}</Button>
            <a href="https://www.automatetosell.com/ats-application" target="_blank" rel="noreferrer" className="text-xs sm:text-sm font-medium">
              Prefer to book directly?
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;