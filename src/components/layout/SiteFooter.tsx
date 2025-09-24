import { Link } from "react-router-dom";
export const SiteFooter = () => {
  return (
    <footer className="border-t">
      <div className="container py-10 text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-6 px-4">
        <p className="text-center md:text-left">© {new Date().getFullYear()} Automate To Sell. All rights reserved.</p>
        <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          <a href="#" className="hover:text-primary whitespace-nowrap">Home</a>
          <a href="#ai-solutions" className="hover:text-primary whitespace-nowrap">AI Solutions</a>
          <Link to="/vibe-coding" className="hover:text-primary whitespace-nowrap">Vibe Coding</Link>
          <Link to="/e-commerce" className="hover:text-primary whitespace-nowrap">E‑Commerce</Link>
          <a href="#social-content" className="hover:text-primary whitespace-nowrap">Social Content</a>
          <a href="#sales-marketing-automation" className="hover:text-primary whitespace-nowrap">Sales & Marketing Automation</a>
          <a href="#about" className="hover:text-primary whitespace-nowrap">About</a>
          <a href="#contact" className="hover:text-primary whitespace-nowrap">Contact</a>
          <Link to="/privacy-policy" className="hover:text-primary whitespace-nowrap">Privacy Policy</Link>
          <Link to="/terms-of-service" className="hover:text-primary whitespace-nowrap">Terms of Service</Link>
        </nav>
      </div>
    </footer>
  );
};

export default SiteFooter;
