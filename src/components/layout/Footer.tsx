import { Atom, Heart } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Atom className="h-6 w-6 text-primary" />
            <span className="font-heading font-bold text-foreground">
              Química Interessante
            </span>
          </div>

          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Feito com <Heart className="h-4 w-4 text-chemistry-pink fill-chemistry-pink" /> para professores e alunos
          </p>

          <div className="flex items-center gap-4">
            <Link
              to="/plataformas"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Recursos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
