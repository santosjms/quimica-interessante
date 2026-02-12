import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MindMapContainerProps {
  children: ReactNode;
  className?: string;
  title?: string;
  description?: string;
}

export function MindMapContainer({
  children,
  className,
  title,
  description,
}: MindMapContainerProps) {
  return (
    <section className={cn("py-8 md:py-12", className)}>
      {(title || description) && (
        <div className="text-center mb-8 md:mb-12 animate-fade-in">
          {title && (
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
              {title}
            </h1>
          )}
          {description && (
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>
      )}
      <div className="mind-map-container">
        {children}
      </div>
    </section>
  );
}
