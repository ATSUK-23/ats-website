import { Button } from "@/components/ui/button";
interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage?: string;
  className?: string;
  children?: React.ReactNode;
  customButtonClasses?: {
    primary?: string;
    secondary?: string;
  };
  hideSecondaryButton?: boolean;
}
export const HeroSection = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  backgroundImage,
  className = "",
  children,
  customButtonClasses,
  hideSecondaryButton = false
}: HeroSectionProps) => {
  return <section className={`relative overflow-hidden ${className}`} style={{
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}>
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="container px-4 sm:px-6 py-12 sm:py-16 md:py-24 text-center relative z-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold leading-tight capitalize px-2">
          {title}
        </h1>
        <p className="mt-4 sm:mt-5 text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-slate-200 px-4">
          {subtitle}
        </p>

        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={ctaLink}>
            
          </a>
          {!hideSecondaryButton && <Button variant="outline" size="lg" className={`w-full sm:w-auto text-sm sm:text-base ${customButtonClasses?.secondary || 'border-white/20 text-white hover:bg-white/10'}`} onClick={() => {
          const element = document.getElementById('ai-form');
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }}>
              Schedule Consultation
            </Button>}
        </div>
        
        {children}
      </div>
    </section>;
};
export default HeroSection;