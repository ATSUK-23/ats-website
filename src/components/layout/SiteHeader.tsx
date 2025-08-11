import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/ats-logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
      <nav className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3" aria-label="Automate To Sell Home">
          <img src={logo} alt="Automate To Sell logo" className="h-8 w-auto" loading="eager" />
          <span className="sr-only">Automate To Sell</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <DropdownMenu>
            <DropdownMenuTrigger className="text-sm font-medium focus:outline-none">AI Solutions</DropdownMenuTrigger>
            <DropdownMenuContent align="start" sideOffset={8} className="z-[90] bg-popover text-popover-foreground border shadow-md">
              {aiItems.map((item) => (
                <DropdownMenuItem key={item.id} onSelect={() => handleScroll(item.id)}>
                  {item.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="text-sm font-medium focus:outline-none">e-Commerce</DropdownMenuTrigger>
            <DropdownMenuContent align="start" sideOffset={8} className="z-[90] bg-popover text-popover-foreground border shadow-md">
              {ecommerceItems.map((item) => (
                <DropdownMenuItem key={item.id} onSelect={() => handleScroll(item.id)}>
                  {item.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="text-sm font-medium focus:outline-none">Ad Management</DropdownMenuTrigger>
            <DropdownMenuContent align="start" sideOffset={8} className="z-[90] bg-popover text-popover-foreground border shadow-md">
              {adItems.map((item) => (
                <DropdownMenuItem key={item.id} onSelect={() => handleScroll(item.id)}>
                  {item.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <button onClick={() => handleScroll("about")} className="text-sm font-medium hover:text-primary transition-colors">About</button>
          <button onClick={() => handleScroll("contact")} className="text-sm font-medium hover:text-primary transition-colors">Contact</button>
        </div>

        <div className="flex items-center gap-3">
          <a href="https://www.automatetosell.com/ats-application" target="_blank" rel="noreferrer">
            <Button variant="hero" size="sm">Book Intro Call</Button>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default SiteHeader;
