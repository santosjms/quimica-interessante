import { Layout } from "@/components/layout/Layout";
import { TopicCard } from "@/components/ui/topic-card";
import { Button } from "@/components/ui/button";
import { 
  CloudRain, 
  FlaskConical, 
  Beer, 
  Coffee, 
  Heart, 
  Leaf, 
  Wrench,
  Atom,
  BookOpen,
  GraduationCap,
  Sparkles
} from "lucide-react";
import { Link } from "react-router-dom";

const topics = [
  {
    title: "Chuva Ácida",
    description: "Entenda as causas, reações químicas e impactos ambientais da chuva ácida",
    icon: <CloudRain className="h-7 w-7" />,
    href: "/chuva-acida",
    color: "blue" as const,
  },
  {
    title: "Grupos Funcionais",
    description: "Explore os principais grupos funcionais da química orgânica de forma visual",
    icon: <FlaskConical className="h-7 w-7" />,
    href: "/grupos-funcionais",
    color: "purple" as const,
  },
  {
    title: "Química da Cerveja",
    description: "Descubra os processos químicos por trás da fabricação da cerveja",
    icon: <Beer className="h-7 w-7" />,
    href: "/quimica-cerveja",
    color: "orange" as const,
  },
  {
    title: "Química do Café",
    description: "Conheça os compostos e reações que tornam o café especial",
    icon: <Coffee className="h-7 w-7" />,
    href: "/quimica-cafe",
    color: "orange" as const,
  },
  {
    title: "Química do Amor",
    description: "A ciência por trás dos sentimentos: hormônios e neurotransmissores",
    icon: <Heart className="h-7 w-7" />,
    href: "/quimica-amor",
    color: "pink" as const,
  },
  {
    title: "Biopolímeros",
    description: "Materiais sustentáveis: definição, tipos e aplicações no dia a dia",
    icon: <Leaf className="h-7 w-7" />,
    href: "/biopolimeros",
    color: "green" as const,
  },
  {
    title: "Plataformas Gratuitas",
    description: "Ferramentas online para criar mapas mentais e visualizar moléculas",
    icon: <Wrench className="h-7 w-7" />,
    href: "/plataformas",
    color: "cyan" as const,
  },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 py-16 md:py-24 relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Animated atom icon */}
            <div className="inline-flex items-center justify-center mb-6 animate-float">
              <div className="relative">
                <Atom className="h-16 w-16 md:h-20 md:w-20 text-primary" />
                <Sparkles className="absolute -top-2 -right-2 h-6 w-6 text-chemistry-yellow animate-pulse" />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 animate-fade-in">
              <span className="text-gradient">Química Interessante</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in animation-delay-200">
              Aprenda Química de forma visual e envolvente através de{" "}
              <span className="font-semibold text-foreground">mapas mentais interativos</span>.
              Conteúdo ideal para alunos e professores do ensino médio e superior.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in animation-delay-400">
              <Link to="/chuva-acida">
                <Button size="lg" className="gap-2 font-semibold">
                  <BookOpen className="h-5 w-5" />
                  Começar a Explorar
                </Button>
              </Link>
              <Link to="/plataformas">
                <Button variant="outline" size="lg" className="gap-2 font-semibold">
                  <Wrench className="h-5 w-5" />
                  Ver Ferramentas
                </Button>
              </Link>
            </div>

            {/* Feature badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 mt-10 animate-fade-in animation-delay-600">
              <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border/50 text-sm">
                <GraduationCap className="h-4 w-4 text-primary" />
                <span>Para Alunos</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border/50 text-sm">
                <BookOpen className="h-4 w-4 text-secondary" />
                <span>Para Professores</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border/50 text-sm">
                <Sparkles className="h-4 w-4 text-accent" />
                <span>Mapas Mentais</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Topics Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              Explore Nossos Mapas Mentais
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Cada tema é apresentado de forma visual e organizada, facilitando a compreensão e memorização dos conceitos químicos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {topics.map((topic, index) => (
              <TopicCard
                key={topic.href}
                {...topic}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              Pronto para Aprender Química de um Jeito Diferente?
            </h2>
            <p className="text-muted-foreground mb-8">
              Nossos mapas mentais transformam conceitos complexos em visualizações simples e memoráveis.
              Comece agora mesmo!
            </p>
            <Link to="/grupos-funcionais">
              <Button size="lg" className="gap-2 font-semibold">
                <FlaskConical className="h-5 w-5" />
                Ver Grupos Funcionais
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
