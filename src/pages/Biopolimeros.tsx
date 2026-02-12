import { Layout } from "@/components/layout/Layout";
import { MindMapContainer } from "@/components/mindmap/MindMapContainer";
import { MindMapNode } from "@/components/mindmap/MindMapNode";
import { MindMapBranch } from "@/components/mindmap/MindMapBranch";
import { Leaf, Recycle, ShoppingBag, Pill, Package, Globe } from "lucide-react";

const biopolimerosNaturais = [
  { nome: "Celulose", fonte: "Plantas", uso: "Papel, têxteis" },
  { nome: "Amido", fonte: "Milho, batata", uso: "Embalagens biodegradáveis" },
  { nome: "Quitina/Quitosana", fonte: "Crustáceos", uso: "Curativos, cosméticos" },
  { nome: "Colágeno", fonte: "Animais", uso: "Medicina, cosméticos" },
  { nome: "Proteínas de soja", fonte: "Soja", uso: "Plásticos biodegradáveis" },
];

const biopolimerosSinteticos = [
  { nome: "PLA (Ácido Polilático)", fonte: "Amido de milho", uso: "Embalagens, impressão 3D", tempo: "6-24 meses" },
  { nome: "PHA (Polihidroxialcanoatos)", fonte: "Bactérias", uso: "Embalagens, medicina", tempo: "3-6 meses" },
  { nome: "PBS (Polibutileno Sucinato)", fonte: "Biomassa", uso: "Filmes, sacolas", tempo: "2-3 anos" },
];

const aplicacoes = [
  { area: "Embalagens", icone: "📦", exemplos: "Sacolas, potes, filmes" },
  { area: "Medicina", icone: "🏥", exemplos: "Suturas, implantes, liberação de fármacos" },
  { area: "Agricultura", icone: "🌱", exemplos: "Mulching, liberação controlada" },
  { area: "Têxtil", icone: "👕", exemplos: "Fibras, tecidos sustentáveis" },
  { area: "Automotivo", icone: "🚗", exemplos: "Peças internas, compósitos" },
  { area: "Cosméticos", icone: "💄", exemplos: "Microesferas, embalagens" },
];

export default function Biopolimeros() {
  return (
    <Layout>
      <MindMapContainer
        title="🌿 Biopolímeros"
        description="Materiais sustentáveis que estão revolucionando a indústria e ajudando o meio ambiente"
      >
        <div className="container mx-auto px-4">
          {/* Central Node */}
          <div className="flex justify-center mb-12">
            <MindMapNode variant="center" className="text-center max-w-md">
              <div className="flex items-center justify-center gap-3 mb-2">
                <Leaf className="h-8 w-8" />
                <h2 className="text-2xl font-heading font-bold">Biopolímeros</h2>
              </div>
              <p className="text-sm opacity-90">
                Polímeros de origem biológica ou biodegradáveis, alternativas sustentáveis aos plásticos convencionais
              </p>
            </MindMapNode>
          </div>

          {/* Definição e Tipos */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <MindMapBranch
              title="Biopolímeros Naturais"
              icon="🌱"
              color="success"
              delay={100}
            >
              <div className="space-y-3">
                {biopolimerosNaturais.map((bio, index) => (
                  <MindMapNode key={bio.nome} variant="success" delay={150 + index * 50}>
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-heading font-bold">{bio.nome}</h4>
                        <p className="text-xs text-muted-foreground">Fonte: {bio.fonte}</p>
                      </div>
                      <span className="text-xs bg-node-success/10 text-node-success px-2 py-1 rounded">
                        {bio.uso}
                      </span>
                    </div>
                  </MindMapNode>
                ))}
              </div>
            </MindMapBranch>

            <MindMapBranch
              title="Biopolímeros Sintéticos Biodegradáveis"
              icon="🔬"
              color="secondary"
              delay={200}
            >
              <div className="space-y-3">
                {biopolimerosSinteticos.map((bio, index) => (
                  <MindMapNode key={bio.nome} variant="secondary" delay={250 + index * 50}>
                    <h4 className="font-heading font-bold">{bio.nome}</h4>
                    <p className="text-xs text-muted-foreground mb-1">Fonte: {bio.fonte}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">{bio.uso}</span>
                      <span className="text-xs bg-secondary/20 px-2 py-0.5 rounded">
                        ⏱️ {bio.tempo}
                      </span>
                    </div>
                  </MindMapNode>
                ))}
              </div>
            </MindMapBranch>
          </div>

          {/* Importância Ambiental */}
          <div className="mb-12">
            <h3 className="text-2xl font-heading font-bold text-center mb-6">
              <Globe className="inline-block mr-2 h-6 w-6" />
              Importância Ambiental
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <MindMapNode variant="primary" delay={400}>
                <div className="text-center">
                  <Recycle className="h-10 w-10 mx-auto mb-3 text-chemistry-green" />
                  <h4 className="font-heading font-bold mb-2">Biodegradabilidade</h4>
                  <p className="text-sm text-muted-foreground">
                    Decomposição natural por microrganismos em meses, não séculos
                  </p>
                </div>
              </MindMapNode>

              <MindMapNode variant="success" delay={450}>
                <div className="text-center">
                  <Leaf className="h-10 w-10 mx-auto mb-3 text-node-success" />
                  <h4 className="font-heading font-bold mb-2">Fontes Renováveis</h4>
                  <p className="text-sm text-muted-foreground">
                    Produzidos a partir de biomassa, não de petróleo
                  </p>
                </div>
              </MindMapNode>

              <MindMapNode variant="info" delay={500}>
                <div className="text-center">
                  <Globe className="h-10 w-10 mx-auto mb-3 text-chemistry-cyan" />
                  <h4 className="font-heading font-bold mb-2">Menor Pegada de Carbono</h4>
                  <p className="text-sm text-muted-foreground">
                    Redução de emissões de CO₂ no ciclo de vida
                  </p>
                </div>
              </MindMapNode>
            </div>
          </div>

          {/* Aplicações */}
          <div className="mb-12">
            <h3 className="text-2xl font-heading font-bold text-center mb-6">
              <Package className="inline-block mr-2 h-6 w-6" />
              Aplicações no Dia a Dia
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {aplicacoes.map((app, index) => (
                <MindMapNode
                  key={app.area}
                  variant={index % 2 === 0 ? "primary" : "secondary"}
                  className="text-center"
                  delay={550 + index * 50}
                >
                  <span className="text-3xl mb-2 block">{app.icone}</span>
                  <h4 className="font-heading font-bold text-sm mb-1">{app.area}</h4>
                  <p className="text-xs text-muted-foreground">{app.exemplos}</p>
                </MindMapNode>
              ))}
            </div>
          </div>

          {/* Sustentabilidade */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <MindMapBranch
              title="Vantagens"
              icon="✅"
              color="success"
              delay={700}
            >
              <MindMapNode variant="success" delay={750}>
                <ul className="text-sm space-y-2">
                  <li>🌍 Redução da poluição plástica</li>
                  <li>🌱 Matéria-prima renovável</li>
                  <li>♻️ Compostáveis industrialmente</li>
                  <li>🏭 Menor dependência do petróleo</li>
                  <li>🐟 Menos impacto nos oceanos</li>
                </ul>
              </MindMapNode>
            </MindMapBranch>

            <MindMapBranch
              title="Desafios"
              icon="⚠️"
              color="warning"
              delay={750}
            >
              <MindMapNode variant="warning" delay={800}>
                <ul className="text-sm space-y-2">
                  <li>💰 Custo ainda mais elevado</li>
                  <li>🏗️ Infraestrutura de compostagem limitada</li>
                  <li>🌾 Competição com produção de alimentos</li>
                  <li>⚙️ Propriedades mecânicas inferiores</li>
                  <li>📊 Escala de produção menor</li>
                </ul>
              </MindMapNode>
            </MindMapBranch>
          </div>

          {/* Comparação Visual */}
          <div className="max-w-3xl mx-auto mb-8">
            <MindMapNode variant="accent" delay={850}>
              <h4 className="font-heading font-bold text-center mb-4">⏱️ Tempo de Decomposição</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
                <div className="bg-node-success/10 p-3 rounded-xl">
                  <p className="font-bold text-node-success">Bioplástico PLA</p>
                  <p className="text-muted-foreground">6-24 meses</p>
                </div>
                <div className="bg-secondary/10 p-3 rounded-xl">
                  <p className="font-bold text-secondary">Papel</p>
                  <p className="text-muted-foreground">2-6 semanas</p>
                </div>
                <div className="bg-chemistry-orange/10 p-3 rounded-xl">
                  <p className="font-bold text-chemistry-orange">Plástico PET</p>
                  <p className="text-muted-foreground">400+ anos</p>
                </div>
                <div className="bg-chemistry-red/10 p-3 rounded-xl">
                  <p className="font-bold text-chemistry-red">Isopor</p>
                  <p className="text-muted-foreground">500+ anos</p>
                </div>
              </div>
            </MindMapNode>
          </div>

          {/* Nota Final */}
          <div className="max-w-2xl mx-auto">
            <MindMapNode variant="primary" className="text-center" delay={900}>
              <h4 className="font-heading font-bold mb-2">🌟 O Futuro é Verde</h4>
              <p className="text-sm text-muted-foreground">
                Os biopolímeros representam uma das principais soluções para a crise do plástico.
                Com avanços tecnológicos e maior conscientização, espera-se que se tornem 
                cada vez mais acessíveis e substituam os plásticos convencionais em muitas aplicações.
              </p>
            </MindMapNode>
          </div>
        </div>
      </MindMapContainer>
    </Layout>
  );
}
