import React from "react";

interface SplitSectionProps {
  id?: string;
  title: string;
  description?: React.ReactNode;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  children?: React.ReactNode;
}

const SplitSection: React.FC<SplitSectionProps> = ({ id, title, description, image, imageAlt, reverse, children }) => {
  return (
    <section id={id} className="container px-4 sm:px-6 py-12 sm:py-16 md:py-24">
      <div className={`grid items-start gap-8 sm:gap-10 md:gap-12 lg:grid-cols-2`}>
        {/* Text */}
        <article className={`${reverse ? "lg:order-2" : "lg:order-1"} space-y-4 sm:space-y-6`}>
          <header className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">{title}</h2>
            {description ? (
              <div className="mt-4 sm:mt-6 text-muted-foreground space-y-3 sm:space-y-4 text-sm sm:text-base">{description}</div>
            ) : null}
          </header>
          {children ? <div className="mt-4 sm:mt-6">{children}</div> : null}
        </article>

        {/* Image */}
        <div className={`${reverse ? "lg:order-1" : "lg:order-2"} mt-6 lg:mt-0`}>
          <div className="rounded-lg sm:rounded-xl overflow-hidden border bg-card shadow-sm">
            <img
              src={image}
              alt={imageAlt}
              loading="lazy"
              className="w-full h-[200px] sm:h-[260px] md:h-[320px] lg:h-[380px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SplitSection;
