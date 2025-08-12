import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage?: string;
  className?: string;
}

export const HeroSection = ({ 
  title, 
  subtitle, 
  ctaText, 
  ctaLink, 
  backgroundImage, 
  className = "" 
}: HeroSectionProps) => {
  return (
    <section className={`relative overflow-hidden ${className}`}>
      {backgroundImage && (
        <div className="absolute inset-0 -z-10">
          <img 
            src={backgroundImage} 
            alt="" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-background/60" />
        </div>
      )}
      
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-[hsl(var(--brand)/0.15)] blur-3xl" />
      </div>

      <div className="container py-16 md:py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          {title}
        </h1>
        <p className="mt-5 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          {subtitle}
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <a href={ctaLink} target="_blank" rel="noreferrer">
            <Button variant="hero" size="lg">{ctaText}</Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;