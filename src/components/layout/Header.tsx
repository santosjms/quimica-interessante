import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Atom, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const topics = [
  { name: "Chuva Ácida", path: "/chuva-acida", emoji: "🌧️" },
  { name: "Grupos Funcionais", path: "/grupos-funcionais", emoji: "⚗️" },
  { name: "Química da Cerveja", path: "/quimica-cerveja", emoji: "🍺" },
  { name: "Química do Café", path: "/quimica-cafe", emoji: "☕" },
  { name: "Química do Amor", path: "/quimica-amor", emoji: "💕" },
  { name: "Biopolímeros", path: "/biopolimeros", emoji: "🌿" },
  { name: "Plataformas Gratuitas", path: "/plataformas", emoji: "🛠️" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Atom className="h-8 w-8 text-primary transition-transform group-hover:rotate-180 duration-700" />
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="font-heading text-xl font-bold text-gradient hidden sm:inline">
              Química Interessante
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link to="/">
              <Button
                variant={isActive("/") ? "default" : "ghost"}
                size="sm"
                className="font-medium"
              >
                Início
              </Button>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="font-medium">
                  Mapas Mentais
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-56">
                {topics.map((topic) => (
                  <DropdownMenuItem key={topic.path} asChild>
                    <Link
                      to={topic.path}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <span>{topic.emoji}</span>
                      <span>{topic.name}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col gap-2">
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                <Button
                  variant={isActive("/") ? "default" : "ghost"}
                  className="w-full justify-start"
                >
                  🏠 Início
                </Button>
              </Link>
              {topics.map((topic) => (
                <Link
                  key={topic.path}
                  to={topic.path}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button
                    variant={isActive(topic.path) ? "default" : "ghost"}
                    className="w-full justify-start"
                  >
                    {topic.emoji} {topic.name}
                  </Button>
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
