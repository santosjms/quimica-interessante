import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type NodeVariant = "center" | "primary" | "secondary" | "accent" | "warning" | "success" | "info";

interface MindMapNodeProps {
  children: ReactNode;
  variant?: NodeVariant;
  className?: string;
  icon?: ReactNode;
  delay?: number;
}

const variantStyles: Record<NodeVariant, string> = {
  center: "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20 min-w-[200px]",
  primary: "bg-card border-primary/40 hover:border-primary/60 hover:shadow-primary/10",
  secondary: "bg-card border-secondary/40 hover:border-secondary/60 hover:shadow-secondary/10",
  accent: "bg-card border-accent/40 hover:border-accent/60 hover:shadow-accent/10",
  warning: "bg-card border-chemistry-orange/40 hover:border-chemistry-orange/60 hover:shadow-chemistry-orange/10",
  success: "bg-card border-node-success/40 hover:border-node-success/60 hover:shadow-node-success/10",
  info: "bg-card border-chemistry-cyan/40 hover:border-chemistry-cyan/60 hover:shadow-chemistry-cyan/10",
};

export function MindMapNode({
  children,
  variant = "primary",
  className,
  icon,
  delay = 0,
}: MindMapNodeProps) {
  return (
    <div
      className={cn(
        "relative p-4 rounded-2xl border-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg animate-scale-in",
        variantStyles[variant],
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {icon && (
        <div className="flex items-center gap-2 mb-2">
          <span className="text-2xl">{icon}</span>
        </div>
      )}
      {children}
    </div>
  );
}
