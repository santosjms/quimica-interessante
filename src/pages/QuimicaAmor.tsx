import { Layout } from "@/components/layout/Layout";
import { MindMapContainer } from "@/components/mindmap/MindMapContainer";
import { MindMapNode } from "@/components/mindmap/MindMapNode";
import { MindMapBranch } from "@/components/mindmap/MindMapBranch";
import { ChemicalFormula } from "@/components/mindmap/ChemicalFormula";
import { Heart, Brain, Sparkles, Users, Clock, Zap } from "lucide-react";

const neurotransmissores = [
  {
    nome: "Dopamina",
    formula: "C₈H₁₁NO₂",
    apelido: "Molécula do Prazer",
    funcao: "Sistema de recompensa, motivação, prazer",
    fase: "Atração inicial",
    cor: "primary" as const,
  },
  {
    nome: "Serotonina",
    formula: "C₁₀H₁₂N₂O",
    apelido: "Molécula da Felicidade",
    funcao: "Humor, bem-estar, obsessão amorosa",
    fase: "Paixão intensa",
    cor: "accent" as const,
  },
  {
    nome: "Noradrenalina",
    formula: "C₈H₁₁NO₃",
    apelido: "Molécula da Excitação",
    funcao: "Energia, foco, batimentos acelerados",
    fase: "Excitação inicial",
    cor: "warning" as const,
  },
  {
    nome: "Oxitocina",
    formula: "C₄₃H₆₆N₁₂O₁₂S₂",
    apelido: "Hormônio do Abraço",
    funcao: "Vínculo, confiança, intimidade",
    fase: "Apego e conexão",
    cor: "secondary" as const,
  },
];

export default function QuimicaAmor() {
  return (
    <Layout>
      <MindMapContainer
        title="💕 A Química do Amor"
        description="Entenda a ciência por trás das emoções: hormônios e neurotransmissores que nos fazem sentir amor"
      >
        <div className="container mx-auto px-4">
          {/* Central Node */}
          <div className="flex justify-center mb-12">
            <MindMapNode variant="center" className="text-center max-w-md">
              <div className="flex items-center justify-center gap-3 mb-2">
                <Heart className="h-8 w-8" />
                <h2 className="text-2xl font-heading font-bold">Química do Amor</h2>
              </div>
              <p className="text-sm opacity-90">
                O amor não é apenas uma emoção - é uma complexa reação química no cérebro
              </p>
            </MindMapNode>
          </div>

          {/* Neurotransmissores Grid */}
          <div className="mb-12">
            <h3 className="text-2xl font-heading font-bold text-center mb-6">
              <Brain className="inline-block mr-2 h-6 w-6" />
              Moléculas do Amor
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {neurotransmissores.map((neuro, index) => (
                <MindMapNode
                  key={neuro.nome}
                  variant={neuro.cor}
                  delay={index * 100 + 100}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-current/10 flex items-center justify-center text-2xl">
                      {index === 0 && "🎯"}
                      {index === 1 && "😊"}
                      {index === 2 && "⚡"}
                      {index === 3 && "🤗"}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-heading font-bold text-lg">{neuro.nome}</h4>
                      <p className="text-xs text-muted-foreground italic mb-2">{neuro.apelido}</p>
                      <div className="mb-2">
                        <ChemicalFormula formula={neuro.formula} size="sm" />
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">
                        <strong>Função:</strong> {neuro.funcao}
                      </p>
                      <p className="text-xs bg-muted/50 px-2 py-1 rounded inline-block">
                        📍 {neuro.fase}
                      </p>
                    </div>
                  </div>
                </MindMapNode>
              ))}
            </div>
          </div>

          {/* Fases do Amor */}
          <div className="mb-12">
            <h3 className="text-2xl font-heading font-bold text-center mb-6">
              <Clock className="inline-block mr-2 h-6 w-6" />
              As 3 Fases do Amor
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <MindMapBranch
                title="1. Desejo (Luxúria)"
                icon="🔥"
                color="warning"
                delay={500}
              >
                <MindMapNode variant="warning" delay={550}>
                  <h4 className="font-semibold mb-2">Hormônios envolvidos:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• <strong>Testosterona</strong> - desejo sexual</li>
                    <li>• <strong>Estrogênio</strong> - atração física</li>
                  </ul>
                  <p className="text-xs text-muted-foreground mt-2">
                    Fase evolutiva: busca por parceiro reprodutivo
                  </p>
                </MindMapNode>
              </MindMapBranch>

              <MindMapBranch
                title="2. Atração (Paixão)"
                icon="✨"
                color="accent"
                delay={600}
              >
                <MindMapNode variant="accent" delay={650}>
                  <h4 className="font-semibold mb-2">Hormônios envolvidos:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• <strong>Dopamina</strong> - euforia, energia</li>
                    <li>• <strong>Noradrenalina</strong> - excitação</li>
                    <li>• <strong>Serotonina ↓</strong> - pensamentos obsessivos</li>
                  </ul>
                  <p className="text-xs text-muted-foreground mt-2">
                    Similar ao vício - ativa sistema de recompensa
                  </p>
                </MindMapNode>
              </MindMapBranch>

              <MindMapBranch
                title="3. Apego (Vínculo)"
                icon="🤝"
                color="secondary"
                delay={700}
              >
                <MindMapNode variant="secondary" delay={750}>
                  <h4 className="font-semibold mb-2">Hormônios envolvidos:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• <strong>Oxitocina</strong> - conexão emocional</li>
                    <li>• <strong>Vasopressina</strong> - compromisso</li>
                  </ul>
                  <p className="text-xs text-muted-foreground mt-2">
                    Fase de relacionamento duradouro e estável
                  </p>
                </MindMapNode>
              </MindMapBranch>
            </div>
          </div>

          {/* Efeitos no Corpo */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <MindMapBranch
              title="Sintomas Físicos do Amor"
              icon={<Zap className="h-6 w-6" />}
              color="primary"
              delay={800}
            >
              <MindMapNode variant="primary" delay={850}>
                <ul className="text-sm space-y-2">
                  <li>💓 <strong>Coração acelerado</strong> - adrenalina</li>
                  <li>😰 <strong>Mãos suadas</strong> - sistema nervoso simpático</li>
                  <li>🦋 <strong>Frio na barriga</strong> - redução do fluxo digestivo</li>
                  <li>😊 <strong>Euforia</strong> - pico de dopamina</li>
                  <li>😶 <strong>Perda de apetite</strong> - cortisol elevado</li>
                  <li>😴 <strong>Dificuldade para dormir</strong> - noradrenalina</li>
                </ul>
              </MindMapNode>
            </MindMapBranch>

            <MindMapBranch
              title="Amor e Saúde Mental"
              icon={<Brain className="h-6 w-6" />}
              color="info"
              delay={850}
            >
              <MindMapNode variant="info" delay={900}>
                <h4 className="font-semibold mb-2">Conexão científica:</h4>
                <ul className="text-sm space-y-2">
                  <li>🧠 <strong>Similar ao TOC:</strong> níveis baixos de serotonina causam pensamentos obsessivos</li>
                  <li>💊 <strong>Efeito analgésico:</strong> oxitocina reduz percepção de dor</li>
                  <li>🩺 <strong>Saúde cardiovascular:</strong> relacionamentos estáveis reduzem cortisol</li>
                </ul>
              </MindMapNode>
            </MindMapBranch>
          </div>

          {/* Nota Final */}
          <div className="max-w-2xl mx-auto">
            <MindMapNode variant="secondary" className="text-center" delay={950}>
              <h4 className="font-heading font-bold mb-2">🔬 Ciência e Emoção</h4>
              <p className="text-sm text-muted-foreground">
                Entender a química do amor não diminui sua magia - apenas revela a complexidade 
                do cérebro humano. O amor é uma experiência que envolve biologia, psicologia, 
                cultura e história pessoal. A ciência nos ajuda a compreender os mecanismos, 
                mas cada experiência amorosa é única!
              </p>
            </MindMapNode>
          </div>
        </div>
      </MindMapContainer>
    </Layout>
  );
}
