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
      
      <div className="container px-4 sm:px-6 py-12 sm:py-16 md:py-24 text-center relative z-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold leading-tight capitalize px-2">
          {title}
        </h1>
        <p className="mt-4 sm:mt-5 text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-slate-200 px-4">
          {subtitle}
        </p>

        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="hero" size="lg" className="w-full sm:w-auto text-sm sm:text-base">
            Start AI Assessment
          </Button>
          <a href={ctaLink} target="_blank" rel="noreferrer">
            <Button variant="outline" size="lg" className="w-full sm:w-auto text-sm sm:text-base bg-blue-600 text-white border-blue-600 hover:bg-blue-700 hover:border-blue-700">
              Schedule Consultation
            </Button>
          </a>
        </div>
        
        {children}
      </div>
    </section>;
};
export default HeroSection;