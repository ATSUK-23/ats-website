export const SiteFooter = () => {
  return (
    <footer className="border-t">
      <div className="container py-10 text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} Automate To Sell. All rights reserved.</p>
        <nav className="flex items-center gap-6">
          <a href="#services" className="hover:text-primary">Services</a>
          <a href="#ai-solutions" className="hover:text-primary">AI Solutions</a>
          <a href="#case-studies" className="hover:text-primary">Case Studies</a>
          <a href="#contact" className="hover:text-primary">Contact</a>
        </nav>
      </div>
    </footer>
  );
};

export default SiteFooter;
