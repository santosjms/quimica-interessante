import { cn } from "@/lib/utils";

interface ChemicalFormulaProps {
  formula: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function ChemicalFormula({ formula, className, size = "md" }: ChemicalFormulaProps) {
  const sizeStyles = {
    sm: "text-sm px-2 py-1",
    md: "text-base px-3 py-1.5",
    lg: "text-lg px-4 py-2",
  };

  // Parse formula to add subscripts
  const parseFormula = (f: string) => {
    return f.split(/(\d+|→|⇌|\+)/).map((part, i) => {
      if (/^\d+$/.test(part)) {
        return <sub key={i}>{part}</sub>;
      }
      if (part === "→" || part === "⇌") {
        return <span key={i} className="mx-2 text-muted-foreground">{part}</span>;
      }
      return <span key={i}>{part}</span>;
    });
  };

  return (
    <code
      className={cn(
        "inline-flex items-baseline font-mono bg-muted/50 rounded-lg border border-border/50",
        sizeStyles[size],
        className
      )}
    >
      {parseFormula(formula)}
    </code>
  );
}
