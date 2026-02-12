import { Layout } from "@/components/layout/Layout";
import { MindMapContainer } from "@/components/mindmap/MindMapContainer";
import { MindMapNode } from "@/components/mindmap/MindMapNode";
import { MindMapBranch } from "@/components/mindmap/MindMapBranch";
import { ChemicalFormula } from "@/components/mindmap/ChemicalFormula";
import { Coffee, Flame, Brain, Droplets, Zap } from "lucide-react";

const compostosCafe = [
  { nome: "Cafeína", formula: "C₈H₁₀N₄O₂", efeito: "Estimulante do SNC", concentracao: "1-2%" },
  { nome: "Ácido Clorogênico", formula: "C₁₆H₁₈O₉", efeito: "Antioxidante", concentracao: "6-7%" },
  { nome: "Trigonelina", formula: "C₇H₇NO₂", efeito: "Aroma na torra", concentracao: "0.5-1%" },
  { nome: "Ácidos orgânicos", formula: "Vários", efeito: "Acidez e sabor", concentracao: "~6%" },
];

export default function QuimicaCafe() {
  return (
    <Layout>
      <MindMapContainer
        title="☕ A Química do Café"
        description="Explore os compostos químicos, reações da torra e os efeitos dessa bebida fascinante"
      >
        <div className="container mx-auto px-4">
          {/* Central Node */}
          <div className="flex justify-center mb-12">
            <MindMapNode variant="center" className="text-center max-w-md">
              <div className="flex items-center justify-center gap-3 mb-2">
                <Coffee className="h-8 w-8" />
                <h2 className="text-2xl font-heading font-bold">Café</h2>
              </div>
              <p className="text-sm opacity-90">
                Mais de 1000 compostos químicos que criam aroma, sabor e efeitos únicos
              </p>
            </MindMapNode>
          </div>

          {/* Compostos Principais */}
          <div className="mb-12">
            <h3 className="text-2xl font-heading font-bold text-center mb-6">
              🧪 Principais Compostos Químicos
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {compostosCafe.map((composto, index) => (
                <MindMapNode
                  key={composto.nome}
                  variant={index % 2 === 0 ? "primary" : "secondary"}
                  delay={index * 100 + 100}
                >
                  <h4 className="font-heading font-bold mb-2">{composto.nome}</h4>
                  <div className="mb-2">
                    <ChemicalFormula formula={composto.formula} size="sm" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{composto.efeito}</p>
                  <p className="text-xs text-muted-foreground">~{composto.concentracao} do grão</p>
                </MindMapNode>
              ))}
            </div>
          </div>

          {/* Torra e Reações */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <MindMapBranch
              title="Reações Durante a Torra"
              icon={<Flame className="h-6 w-6" />}
              color="warning"
              delay={500}
            >
              <MindMapNode variant="warning" delay={550}>
                <h4 className="font-heading font-bold mb-2">Reação de Maillard</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Aminoácidos + açúcares → compostos aromáticos
                </p>
                <p className="text-xs text-muted-foreground">
                  Responsável pela cor marrom e aromas complexos
                </p>
              </MindMapNode>

              <MindMapNode variant="warning" delay={600}>
                <h4 className="font-heading font-bold mb-2">Caramelização</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Açúcares se decompõem em temperaturas altas
                </p>
                <p className="text-xs text-muted-foreground">
                  Produz notas de caramelo e doçura
                </p>
              </MindMapNode>

              <MindMapNode variant="warning" delay={650}>
                <h4 className="font-heading font-bold mb-2">Pirólise</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Degradação térmica de compostos orgânicos
                </p>
                <p className="text-xs text-muted-foreground">
                  Forma melanoidinas (cor) e libera CO₂
                </p>
              </MindMapNode>
            </MindMapBranch>

            <MindMapBranch
              title="Níveis de Torra"
              icon="🌡️"
              color="info"
              delay={550}
            >
              <div className="space-y-3">
                <MindMapNode variant="info" delay={600}>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold">Clara</p>
                      <p className="text-xs text-muted-foreground">180-205°C</p>
                    </div>
                    <span className="text-sm">Mais ácido, floral</span>
                  </div>
                </MindMapNode>

                <MindMapNode variant="info" delay={650}>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold">Média</p>
                      <p className="text-xs text-muted-foreground">210-220°C</p>
                    </div>
                    <span className="text-sm">Equilibrado, doce</span>
                  </div>
                </MindMapNode>

                <MindMapNode variant="info" delay={700}>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold">Escura</p>
                      <p className="text-xs text-muted-foreground">225-230°C</p>
                    </div>
                    <span className="text-sm">Intenso, amargo</span>
                  </div>
                </MindMapNode>
              </div>
            </MindMapBranch>
          </div>

          {/* Cafeína e Efeitos */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <MindMapBranch
              title="Cafeína: Molécula do Despertar"
              icon={<Brain className="h-6 w-6" />}
              color="accent"
              delay={700}
            >
              <MindMapNode variant="accent" delay={750}>
                <h4 className="font-heading font-bold mb-2">Como funciona?</h4>
                <ul className="text-sm space-y-2">
                  <li>🧠 Bloqueia receptores de adenosina</li>
                  <li>⚡ Aumenta liberação de dopamina</li>
                  <li>💓 Acelera batimentos cardíacos</li>
                  <li>🎯 Melhora foco e concentração</li>
                </ul>
              </MindMapNode>

              <MindMapNode variant="accent" delay={800}>
                <h4 className="font-heading font-bold mb-2">Farmacocinética</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Absorção: 45 min após ingestão</li>
                  <li>• Pico: 1-2 horas</li>
                  <li>• Meia-vida: 3-5 horas</li>
                </ul>
              </MindMapNode>
            </MindMapBranch>

            <MindMapBranch
              title="Preparo e Composição"
              icon={<Droplets className="h-6 w-6" />}
              color="secondary"
              delay={750}
            >
              <MindMapNode variant="secondary" delay={800}>
                <h4 className="font-heading font-bold mb-2">Extração varia conforme:</h4>
                <ul className="text-sm space-y-2">
                  <li>🌡️ <strong>Temperatura:</strong> 90-96°C ideal</li>
                  <li>⏱️ <strong>Tempo:</strong> Mais tempo = mais extração</li>
                  <li>🔬 <strong>Moagem:</strong> Mais fina = mais contato</li>
                  <li>💧 <strong>Proporção:</strong> Água/café afeta concentração</li>
                </ul>
              </MindMapNode>

              <MindMapNode variant="secondary" delay={850}>
                <h4 className="font-heading font-bold mb-2">Cafeína por método:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Espresso (30ml): ~63mg</li>
                  <li>• Filtrado (240ml): ~95mg</li>
                  <li>• Cold brew (240ml): ~200mg</li>
                </ul>
              </MindMapNode>
            </MindMapBranch>
          </div>

          {/* Curiosidade */}
          <div className="max-w-2xl mx-auto">
            <MindMapNode variant="primary" className="text-center" delay={900}>
              <h4 className="font-heading font-bold mb-2">💡 Você Sabia?</h4>
              <p className="text-sm text-muted-foreground">
                Apesar de parecer mais forte, o café com torra escura tem <strong>menos</strong> cafeína 
                que o de torra clara! A cafeína se degrada parcialmente durante a torra prolongada.
                O aroma intenso vem das reações de Maillard, não da cafeína.
              </p>
            </MindMapNode>
          </div>
        </div>
      </MindMapContainer>
    </Layout>
  );
}
