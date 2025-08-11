export const SiteFooter = () => {
  return (
    <footer className="border-t">
      <div className="container py-10 text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} Automate To Sell. All rights reserved.</p>
        <nav className="flex items-center gap-6">
          <a href="#ai-solutions" className="hover:text-primary">AI Solutions</a>
          <a href="#e-commerce" className="hover:text-primary">e‑Commerce</a>
          <a href="#ad-management" className="hover:text-primary">Ad Management</a>
          <a href="#about" className="hover:text-primary">About</a>
          <a href="#contact" className="hover:text-primary">Contact</a>
        </nav>
      </div>
    </footer>
  );
};

export default SiteFooter;
