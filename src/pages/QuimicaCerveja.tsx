import { Layout } from "@/components/layout/Layout";
import { MindMapContainer } from "@/components/mindmap/MindMapContainer";
import { MindMapNode } from "@/components/mindmap/MindMapNode";
import { MindMapBranch } from "@/components/mindmap/MindMapBranch";
import { ChemicalFormula } from "@/components/mindmap/ChemicalFormula";
import { Beer, Droplets, Wheat, Flower2, CircleDot, FlaskConical, Thermometer } from "lucide-react";

export default function QuimicaCerveja() {
  return (
    <Layout>
      <MindMapContainer
        title="🍺 A Química da Cerveja"
        description="Descubra os processos químicos e ingredientes por trás de uma das bebidas mais antigas da humanidade"
      >
        <div className="container mx-auto px-4">
          {/* Central Node */}
          <div className="flex justify-center mb-12">
            <MindMapNode variant="center" className="text-center max-w-md">
              <div className="flex items-center justify-center gap-3 mb-2">
                <Beer className="h-8 w-8" />
                <h2 className="text-2xl font-heading font-bold">Cerveja</h2>
              </div>
              <p className="text-sm opacity-90">
                Uma bebida fermentada produzida a partir de cereais maltados, água, lúpulo e levedura
              </p>
            </MindMapNode>
          </div>

          {/* Ingredientes Principais */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <MindMapBranch
              title="Água"
              icon={<Droplets className="h-6 w-6" />}
              color="primary"
              delay={100}
            >
              <MindMapNode variant="primary" delay={150}>
                <p className="font-semibold mb-2">90-95% da cerveja</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• pH influencia o sabor</li>
                  <li>• Minerais afetam a fermentação</li>
                  <li>• Dureza define o estilo</li>
                </ul>
              </MindMapNode>
            </MindMapBranch>

            <MindMapBranch
              title="Malte"
              icon={<Wheat className="h-6 w-6" />}
              color="warning"
              delay={200}
            >
              <MindMapNode variant="warning" delay={250}>
                <p className="font-semibold mb-2">Fonte de açúcares</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Cevada maltada</li>
                  <li>• Amido → Maltose</li>
                  <li>• Cor e corpo da cerveja</li>
                </ul>
              </MindMapNode>
            </MindMapBranch>

            <MindMapBranch
              title="Lúpulo"
              icon={<Flower2 className="h-6 w-6" />}
              color="success"
              delay={300}
            >
              <MindMapNode variant="success" delay={350}>
                <p className="font-semibold mb-2">Amargor e aroma</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Ácidos alfa (amargor)</li>
                  <li>• Óleos essenciais (aroma)</li>
                  <li>• Conservante natural</li>
                </ul>
              </MindMapNode>
            </MindMapBranch>

            <MindMapBranch
              title="Levedura"
              icon={<CircleDot className="h-6 w-6" />}
              color="accent"
              delay={400}
            >
              <MindMapNode variant="accent" delay={450}>
                <p className="font-semibold mb-2">Fermentação</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Saccharomyces cerevisiae</li>
                  <li>• Converte açúcar em álcool</li>
                  <li>• Produz CO₂ e ésteres</li>
                </ul>
              </MindMapNode>
            </MindMapBranch>
          </div>

          {/* Processo Químico */}
          <div className="mb-12">
            <h3 className="text-2xl font-heading font-bold text-center mb-6">
              <FlaskConical className="inline-block mr-2 h-6 w-6" />
              Processo de Fabricação
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <MindMapNode variant="primary" delay={500}>
                <div className="text-center">
                  <span className="inline-block w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold mb-2 leading-8">1</span>
                  <h4 className="font-heading font-bold mb-2">Malteação</h4>
                  <p className="text-sm text-muted-foreground">
                    Grãos germinam e produzem enzimas (amilases)
                  </p>
                </div>
              </MindMapNode>

              <MindMapNode variant="warning" delay={550}>
                <div className="text-center">
                  <span className="inline-block w-8 h-8 rounded-full bg-chemistry-orange text-primary-foreground font-bold mb-2 leading-8">2</span>
                  <h4 className="font-heading font-bold mb-2">Mosturação</h4>
                  <p className="text-sm text-muted-foreground">
                    Amido é convertido em açúcares fermentáveis
                  </p>
                  <div className="mt-2">
                    <ChemicalFormula formula="(C6H10O5)n → C12H22O11" size="sm" />
                  </div>
                </div>
              </MindMapNode>

              <MindMapNode variant="success" delay={600}>
                <div className="text-center">
                  <span className="inline-block w-8 h-8 rounded-full bg-node-success text-primary-foreground font-bold mb-2 leading-8">3</span>
                  <h4 className="font-heading font-bold mb-2">Fervura</h4>
                  <p className="text-sm text-muted-foreground">
                    Adição de lúpulo e esterilização
                  </p>
                </div>
              </MindMapNode>

              <MindMapNode variant="accent" delay={650}>
                <div className="text-center">
                  <span className="inline-block w-8 h-8 rounded-full bg-accent text-accent-foreground font-bold mb-2 leading-8">4</span>
                  <h4 className="font-heading font-bold mb-2">Fermentação</h4>
                  <p className="text-sm text-muted-foreground">
                    Levedura converte açúcar em álcool
                  </p>
                  <div className="mt-2">
                    <ChemicalFormula formula="C6H12O6 → 2C2H5OH + 2CO2" size="sm" />
                  </div>
                </div>
              </MindMapNode>
            </div>
          </div>

          {/* Compostos e Sabor */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <MindMapBranch
              title="Compostos Formados"
              icon={<FlaskConical className="h-6 w-6" />}
              color="info"
              delay={700}
            >
              <div className="grid grid-cols-2 gap-3">
                <MindMapNode variant="info" delay={750}>
                  <p className="font-semibold text-sm">Etanol</p>
                  <p className="text-xs text-muted-foreground">4-8% v/v típico</p>
                </MindMapNode>
                <MindMapNode variant="info" delay={800}>
                  <p className="font-semibold text-sm">CO₂</p>
                  <p className="text-xs text-muted-foreground">Carbonatação</p>
                </MindMapNode>
                <MindMapNode variant="info" delay={850}>
                  <p className="font-semibold text-sm">Ésteres</p>
                  <p className="text-xs text-muted-foreground">Aromas frutados</p>
                </MindMapNode>
                <MindMapNode variant="info" delay={900}>
                  <p className="font-semibold text-sm">Álcoois superiores</p>
                  <p className="text-xs text-muted-foreground">Complexidade</p>
                </MindMapNode>
              </div>
            </MindMapBranch>

            <MindMapBranch
              title="Relação Química e Sabor"
              icon="👅"
              color="secondary"
              delay={750}
            >
              <MindMapNode variant="secondary" delay={800}>
                <ul className="text-sm space-y-2">
                  <li>🍋 <strong>Amargor:</strong> Iso-α-ácidos do lúpulo</li>
                  <li>🍯 <strong>Doçura:</strong> Açúcares residuais</li>
                  <li>🍎 <strong>Frutado:</strong> Ésteres da fermentação</li>
                  <li>🌾 <strong>Maltado:</strong> Melanoidinas do malte</li>
                  <li>🌸 <strong>Floral:</strong> Óleos do lúpulo</li>
                </ul>
              </MindMapNode>
            </MindMapBranch>
          </div>

          {/* Curiosidade */}
          <div className="mt-12 max-w-2xl mx-auto">
            <MindMapNode variant="primary" className="text-center" delay={950}>
              <h4 className="font-heading font-bold mb-2">💡 Curiosidade</h4>
              <p className="text-sm text-muted-foreground">
                A Lei da Pureza Alemã (Reinheitsgebot, 1516) determinava que cerveja só poderia 
                conter água, malte de cevada e lúpulo. A levedura só foi adicionada depois que 
                Pasteur descobriu seu papel na fermentação!
              </p>
            </MindMapNode>
          </div>
        </div>
      </MindMapContainer>
    </Layout>
  );
}
