import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const heroImageUrl = "/lovable-uploads/ad4bdc88-175b-440a-b084-366efb956989.png";
export const Hero = () => {
  console.log("Hero component rendering with image:", heroImageUrl);
  return <section className="relative overflow-hidden" style={{
    backgroundImage: `url(${heroImageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}>
      <div className="absolute inset-0 bg-black/70 -z-10" />
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-20">
        <div className="absolute -top-32 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-[hsl(var(--brand)/0.15)] blur-3xl" />
      </div>

      <div className="container py-12 sm:py-16 md:py-24 text-center relative z-10 px-4">
        <p className="text-xs sm:text-sm tracking-wider text-muted-foreground uppercase">Automation & AI | GTM Engineer & Consultants</p>
        <h1 className="mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold leading-tight">Scale Smarter With AI & Automation That Deliver Growth</h1>
        <p className="mt-4 sm:mt-5 text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto">Turn complexity into clarity: automation and AI built to fit your business, not the other way around.</p>

        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Link to="/ai-audit">
            <Button variant="hero" size="lg" className="w-full sm:w-auto text-sm sm:text-base">Book Your Business Automation Audit</Button>
          </Link>
          <a href="#contact">
            <Button variant="outline" size="lg" className="w-full sm:w-auto text-sm sm:text-base">Talk to an Automation Expert</Button>
          </a>
        </div>
        </div>
      </section>;
};
export default Hero;