import { Button } from "@/components/ui/button";
export const Hero = () => {
  return <section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60" style={{
        backgroundImage: `url(/lovable-uploads/ad4bdc88-175b-440a-b084-366efb956989.png)`
      }} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background/40" />
        <div className="absolute -top-32 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-[hsl(var(--brand)/0.15)] blur-3xl" />
      </div>

      <div className="container py-16 md:py-24 text-center">
        <p className="text-sm tracking-wider text-muted-foreground uppercase">Automation & AI Consultancy</p>
        <h1 className="mt-3 text-4xl md:text-6xl font-extrabold leading-tight">Automation & AI That Works for Your Business!
Not the Other Way Around</h1>
        <p className="mt-5 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">We help you analyse, prioritise, and implement automation and AI solutions that deliver real growth and efficiency without wasting time or budget on tech you don’t need.</p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="https://www.automatetosell.com/ats-application" target="_blank" rel="noreferrer">
            <Button variant="hero" size="lg">Book Your Business Automation Audit</Button>
          </a>
          <a href="#contact">
            <Button variant="outline" size="lg">Talk to an Automation Expert</Button>
          </a>
        </div>
        </div>
      </section>;
};
export default Hero;