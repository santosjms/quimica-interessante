import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MindMapBranchProps {
  title: string;
  children: ReactNode;
  className?: string;
  color?: "primary" | "secondary" | "accent" | "warning" | "success" | "info";
  icon?: ReactNode;
  delay?: number;
}

const colorStyles = {
  primary: "border-l-primary bg-primary/5",
  secondary: "border-l-secondary bg-secondary/5",
  accent: "border-l-accent bg-accent/5",
  warning: "border-l-chemistry-orange bg-chemistry-orange/5",
  success: "border-l-node-success bg-node-success/5",
  info: "border-l-chemistry-cyan bg-chemistry-cyan/5",
};

const titleColors = {
  primary: "text-primary",
  secondary: "text-secondary",
  accent: "text-accent",
  warning: "text-chemistry-orange",
  success: "text-node-success",
  info: "text-chemistry-cyan",
};

export function MindMapBranch({
  title,
  children,
  className,
  color = "primary",
  icon,
  delay = 0,
}: MindMapBranchProps) {
  return (
    <div
      className={cn(
        "border-l-4 rounded-r-2xl p-4 md:p-6 transition-all duration-300 hover:shadow-md animate-fade-in",
        colorStyles[color],
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-2 mb-4">
        {icon && <span className="text-2xl">{icon}</span>}
        <h3 className={cn("text-lg md:text-xl font-heading font-bold", titleColors[color])}>
          {title}
        </h3>
      </div>
      <div className="space-y-3">{children}</div>
    </div>
  );
}
