import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface TopicCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  href: string;
  color?: "blue" | "green" | "purple" | "orange" | "pink" | "cyan";
  delay?: number;
}

const colorStyles = {
  blue: "hover:border-chemistry-blue/50 hover:shadow-chemistry-blue/10 group-hover:text-chemistry-blue",
  green: "hover:border-chemistry-green/50 hover:shadow-chemistry-green/10 group-hover:text-chemistry-green",
  purple: "hover:border-chemistry-purple/50 hover:shadow-chemistry-purple/10 group-hover:text-chemistry-purple",
  orange: "hover:border-chemistry-orange/50 hover:shadow-chemistry-orange/10 group-hover:text-chemistry-orange",
  pink: "hover:border-chemistry-pink/50 hover:shadow-chemistry-pink/10 group-hover:text-chemistry-pink",
  cyan: "hover:border-chemistry-cyan/50 hover:shadow-chemistry-cyan/10 group-hover:text-chemistry-cyan",
};

const iconColorStyles = {
  blue: "bg-chemistry-blue/10 text-chemistry-blue",
  green: "bg-chemistry-green/10 text-chemistry-green",
  purple: "bg-chemistry-purple/10 text-chemistry-purple",
  orange: "bg-chemistry-orange/10 text-chemistry-orange",
  pink: "bg-chemistry-pink/10 text-chemistry-pink",
  cyan: "bg-chemistry-cyan/10 text-chemistry-cyan",
};

export function TopicCard({
  title,
  description,
  icon,
  href,
  color = "blue",
  delay = 0,
}: TopicCardProps) {
  return (
    <Link to={href} className="group block animate-fade-in" style={{ animationDelay: `${delay}ms` }}>
      <div
        className={cn(
          "relative h-full p-6 bg-card rounded-2xl border-2 border-border/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl",
          colorStyles[color]
        )}
      >
        <div className={cn("w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-colors", iconColorStyles[color])}>
          {icon}
        </div>
        
        <h3 className="text-xl font-heading font-bold mb-2 transition-colors group-hover:text-foreground">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>
        
        <div className="flex items-center gap-1 text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
          <span>Explorar mapa</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
