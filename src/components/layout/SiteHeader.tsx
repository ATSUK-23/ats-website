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
  { id: "audits", label: "AI Audit", description: "How You Build Your AI Brain" },
  { id: "agents", label: "Agents", description: "Intelligent Automation For Workflows" },
  { id: "voice", label: "Voice AI", description: "1-2-1 Conversations With Prospects" },
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
        {/* Mobile layout: menu icon left, logo center */}
        <div className="md:hidden flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <nav className="mt-16 space-y-2">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="ai-solutions" className="border-b">
                    <AccordionTrigger className="text-left py-3 hover:text-primary hover:no-underline">
                      AI Solutions
                    </AccordionTrigger>
                    <AccordionContent className="pb-2">
                      <div className="ml-4 space-y-2">
                        {aiItems.map((item) => (
                          <SheetClose asChild key={item.id}>
                            <Link 
                              to={item.id === "agents" ? "/agents" : item.id === "voice" ? "/voice-ai" : "/ai-audit"}
                              className="block py-2 text-sm hover:text-primary"
                            >
                              {item.label}
                            </Link>
                          </SheetClose>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
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
                  <Link to="/training" className="w-full text-left py-1.5 hover:text-primary block">Training</Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link to="/about" className="w-full text-left py-1.5 hover:text-primary block">About</Link>
                </SheetClose>
                <SheetClose asChild>
                  <button onClick={() => handleScroll('contact')} className="w-full text-left py-1.5 hover:text-primary">Contact</button>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Logo - center on mobile, left on desktop */}
        <Link to="/" className="flex items-center gap-3 md:order-first absolute left-1/2 transform -translate-x-1/2 md:relative md:left-auto md:transform-none" aria-label="Automate To Sell Home">
          <img src={logo} alt="Automate To Sell logo" className="h-8 w-auto" loading="eager" />
          <span className="sr-only">Automate To Sell</span>
        </Link>

        {/* Spacer for mobile layout */}
        <div className="md:hidden w-6"></div>

        <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
          <DropdownMenu>
            <DropdownMenuTrigger className="text-sm font-medium hover:text-primary transition-colors whitespace-nowrap">AI Solutions</DropdownMenuTrigger>
            <DropdownMenuContent className="w-80 p-2 bg-gray-800 border-gray-700 shadow-lg">
              {aiItems.map((item) => (
                <DropdownMenuItem key={item.id} className="p-0">
                  <Link 
                    to={item.id === "agents" ? "/agents" : item.id === "voice" ? "/voice-ai" : "/ai-audit"} 
                    className="w-full p-3 rounded-md hover:bg-gray-700 transition-colors block"
                  >
                    <div className="font-medium text-white">{item.label}</div>
                    <div className="text-sm text-gray-300 mt-1">{item.description}</div>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Link to="/vibe-coding" className="text-sm font-medium hover:text-primary transition-colors whitespace-nowrap">Vibe Coding</Link>
          <Link to="/e-commerce" className="text-sm font-medium hover:text-primary transition-colors whitespace-nowrap">E‑Commerce</Link>
          <Link to="/social-content" className="text-sm font-medium hover:text-primary transition-colors whitespace-nowrap">Social Content</Link>
          <Link to="/sales-funnel-automation" className="text-sm font-medium hover:text-primary transition-colors whitespace-nowrap">Sales Funnel Automation</Link>
          <Link to="/training" className="text-sm font-medium hover:text-primary transition-colors whitespace-nowrap">Training</Link>
          <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors whitespace-nowrap">About</Link>
          <button onClick={() => handleScroll('contact')} className="text-sm font-medium hover:text-primary transition-colors whitespace-nowrap">Contact</button>
        </div>

        <div className="flex items-center gap-3 flex-shrink-0 ml-auto md:ml-0">
          <a href="https://www.automatetosell.com/ats-application" target="_blank" rel="noreferrer">
            <Button variant="hero" size="sm">Book Audit</Button>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default SiteHeader;
