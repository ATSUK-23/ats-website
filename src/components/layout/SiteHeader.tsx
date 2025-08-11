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
  { id: "your-ai-brain", label: "Your AI Brain" },
  { id: "talking-websites", label: "Talking Websites" },
  { id: "ai-receptionist", label: "24/7 Multi-Tasking Receptionist" },
  { id: "digital-assistant", label: "Intelligent Digital Store Assistance" },
  { id: "speed-to-lead", label: "Speed To Lead Forms" },
  { id: "maximise-conversions", label: "Maximise Conversions" },
  { id: "social-agents", label: "Social Agents" },
];

export const SiteHeader = () => {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <nav className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3" aria-label="Automate To Sell Home">
          <img src={logo} alt="Automate To Sell logo" className="h-8 w-auto" loading="eager" />
          <span className="sr-only">Automate To Sell</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <button onClick={() => handleScroll("services")} className="text-sm font-medium hover:text-primary transition-colors">Services</button>

          <DropdownMenu>
            <DropdownMenuTrigger className="text-sm font-medium focus:outline-none">AI Solutions</DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              {aiItems.map((item) => (
                <DropdownMenuItem key={item.id} onSelect={() => handleScroll(item.id)}>
                  {item.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <button onClick={() => handleScroll("case-studies")} className="text-sm font-medium hover:text-primary transition-colors">Case Studies</button>
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
