import { Button } from "@/components/ui/button";
interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage?: string;
  className?: string;
  children?: React.ReactNode;
}
export const HeroSection = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  backgroundImage,
  className = "",
  children
}: HeroSectionProps) => {
  return <section className={`relative overflow-hidden ${className}`} style={{
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}>
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="container text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          {title}
        </h1>
        <p className="mt-5 text-lg md:text-xl max-w-3xl mx-auto text-slate-200">
          {subtitle}
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <a href={ctaLink} target="_blank" rel="noreferrer">
            <Button variant="hero" size="lg">{ctaText}</Button>
          </a>
        </div>
        
        {children}
      </div>
    </section>;
};
export default HeroSection;