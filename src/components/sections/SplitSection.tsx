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
    <section id={id} className="container py-16 md:py-24">
      <div className={`grid items-center gap-10 md:gap-12 md:grid-cols-2`}>
        {/* Text */}
        <article className={`${reverse ? "md:order-2" : "md:order-1"}`}>
          <header className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
            {description ? (
              <div className="mt-4 text-muted-foreground space-y-4">{description}</div>
            ) : null}
          </header>
          {children ? <div className="mt-6">{children}</div> : null}
        </article>

        {/* Image */}
        <div className={`${reverse ? "md:order-1" : "md:order-2"}`}>
          <div className="rounded-xl overflow-hidden border bg-card shadow-sm">
            <img
              src={image}
              alt={imageAlt}
              loading="lazy"
              className="w-full h-[260px] sm:h-[320px] md:h-[380px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SplitSection;
