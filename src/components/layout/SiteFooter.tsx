import { Link } from "react-router-dom";
export const SiteFooter = () => {
  return (
    <footer className="border-t">
      <div className="container py-10 text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} Automate To Sell. All rights reserved.</p>
        <nav className="flex items-center gap-6">
          <a href="#" className="hover:text-primary">Home</a>
          <a href="#ai-solutions" className="hover:text-primary">AI Solutions</a>
          <Link to="/vibe-coding" className="hover:text-primary">Vibe Coding</Link>
          <Link to="/e-commerce" className="hover:text-primary">E‑Commerce</Link>
          <a href="#social-content" className="hover:text-primary">Social Content</a>
          <a href="#sales-marketing-automation" className="hover:text-primary">Sales & Marketing Automation</a>
          <a href="#about" className="hover:text-primary">About</a>
          <a href="#contact" className="hover:text-primary">Contact</a>
          <Link to="/privacy-policy" className="hover:text-primary">Privacy Policy</Link>
          <Link to="/terms-of-service" className="hover:text-primary">Terms of Service</Link>
        </nav>
      </div>
    </footer>
  );
};

export default SiteFooter;
