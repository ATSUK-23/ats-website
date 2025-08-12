import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/ats-logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Menu } from "lucide-react";

const aiItems = [
  { id: "agents", label: "Agents" },
  { id: "voice", label: "Voice" },
  { id: "audits", label: "Audits" },
  { id: "workshops", label: "Workshops" },
  { id: "vibe-coding", label: "Vibe Coding" },
];

const ecommerceItems = [
  { id: "global-systems", label: "Global Systems" },
  { id: "shopify", label: "Shopify" },
  { id: "marketplaces", label: "Marketplaces" },
];

const adItems = [
  { id: "social-content", label: "Social Content" },
  { id: "s-m-automation", label: "S&M Automation" },
];

export const SiteHeader = () => {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-[80]">
      <nav className="container flex items-center justify-between py-4 min-h-[4rem]">
        <Link to="/" className="flex items-center gap-3" aria-label="Automate To Sell Home">
          <img src={logo} alt="Automate To Sell logo" className="h-8 w-auto" loading="eager" />
          <span className="sr-only">Automate To Sell</span>
        </Link>

        <div className="md:hidden flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <nav className="mt-6 space-y-2">
                <SheetClose asChild>
                  <Link to="/ai-solutions" className="w-full text-left py-1.5 hover:text-primary block">AI Solutions</Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link to="/vibe-coding" className="w-full text-left py-1.5 hover:text-primary block">Vibe Coding</Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link to="/e-commerce" className="w-full text-left py-1.5 hover:text-primary block">E‑Commerce</Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link to="/social-content" className="w-full text-left py-1.5 hover:text-primary block">Social Content</Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link to="/sales-funnel-automation" className="w-full text-left py-1.5 hover:text-primary block">Sales Funnel Automation</Link>
                </SheetClose>
                <SheetClose asChild>
                  <button onClick={() => handleScroll('about')} className="w-full text-left py-1.5 hover:text-primary">About</button>
                </SheetClose>
                <SheetClose asChild>
                  <button onClick={() => handleScroll('contact')} className="w-full text-left py-1.5 hover:text-primary">Contact</button>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
          <Link to="/ai-solutions" className="text-sm font-medium hover:text-primary transition-colors whitespace-nowrap">AI Solutions</Link>
          <Link to="/vibe-coding" className="text-sm font-medium hover:text-primary transition-colors whitespace-nowrap">Vibe Coding</Link>
          <Link to="/e-commerce" className="text-sm font-medium hover:text-primary transition-colors whitespace-nowrap">E‑Commerce</Link>
          <Link to="/social-content" className="text-sm font-medium hover:text-primary transition-colors whitespace-nowrap">Social Content</Link>
          <Link to="/sales-funnel-automation" className="text-sm font-medium hover:text-primary transition-colors whitespace-nowrap">Sales Funnel Automation</Link>
          <button onClick={() => handleScroll('about')} className="text-sm font-medium hover:text-primary transition-colors whitespace-nowrap">About</button>
          <button onClick={() => handleScroll('contact')} className="text-sm font-medium hover:text-primary transition-colors whitespace-nowrap">Contact</button>
        </div>

        <div className="flex items-center gap-3 flex-shrink-0">
          <a href="https://www.automatetosell.com/ats-application" target="_blank" rel="noreferrer">
            <Button variant="hero" size="sm">Book Audit</Button>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default SiteHeader;
