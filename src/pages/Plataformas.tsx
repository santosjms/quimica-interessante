import { Layout } from "@/components/layout/Layout";
import { MindMapContainer } from "@/components/mindmap/MindMapContainer";
import { MindMapNode } from "@/components/mindmap/MindMapNode";
import { MindMapBranch } from "@/components/mindmap/MindMapBranch";
import { Wrench, Brain, Atom, FlaskConical, ExternalLink } from "lucide-react";

const plataformasMapas = [
  {
    nome: "Coggle",
    url: "https://coggle.it",
    descricao: "Criação colaborativa de mapas mentais com interface intuitiva",
    destaque: "Colaboração em tempo real",
    gratuito: "Versão gratuita limitada",
  },
  {
    nome: "MindMeister",
    url: "https://mindmeister.com",
    descricao: "Ferramenta profissional para mapas mentais com muitos templates",
    destaque: "Templates educacionais",
    gratuito: "3 mapas gratuitos",
  },
  {
    nome: "Canva",
    url: "https://canva.com",
    descricao: "Design gráfico com templates de mapas mentais personalizáveis",
    destaque: "Design visual atraente",
    gratuito: "Versão gratuita completa",
  },
  {
    nome: "Miro",
    url: "https://miro.com",
    descricao: "Quadro branco online com ferramentas para mapas conceituais",
    destaque: "Ideal para colaboração",
    gratuito: "3 boards gratuitos",
  },
  {
    nome: "Whimsical",
    url: "https://whimsical.com",
    descricao: "Flowcharts e mind maps com estética limpa e moderna",
    destaque: "Interface minimalista",
    gratuito: "Versão gratuita básica",
  },
];

const visualizadoresMoleculas = [
  {
    nome: "MolView",
    url: "https://molview.org",
    descricao: "Visualize estruturas moleculares em 2D e 3D gratuitamente",
    destaque: "100% gratuito e online",
    uso: "Estudo de moléculas orgânicas",
  },
  {
    nome: "PubChem",
    url: "https://pubchem.ncbi.nlm.nih.gov",
    descricao: "Banco de dados público com milhões de compostos químicos",
    destaque: "Maior banco de dados químicos",
    uso: "Pesquisa de propriedades",
  },
  {
    nome: "ChemDraw (PerkinElmer)",
    url: "https://chemdrawdirect.perkinelmer.cloud",
    descricao: "Desenho de estruturas químicas profissional",
    destaque: "Padrão da indústria",
    uso: "Desenho de fórmulas estruturais",
  },
  {
    nome: "Avogadro",
    url: "https://avogadro.cc",
    descricao: "Software gratuito para edição de moléculas em 3D",
    destaque: "Código aberto",
    uso: "Modelagem molecular",
  },
];

const simuladoresLab = [
  {
    nome: "PhET Interactive Simulations",
    url: "https://phet.colorado.edu",
    descricao: "Simulações interativas de física e química da Universidade do Colorado",
    destaque: "Referência mundial",
    tipo: "Experimentos virtuais",
  },
  {
    nome: "ChemCollective",
    url: "http://chemcollective.org",
    descricao: "Laboratório virtual com experimentos de química",
    destaque: "Foco em estequiometria",
    tipo: "Laboratório virtual",
  },
  {
    nome: "Labster",
    url: "https://labster.com",
    descricao: "Simulações avançadas de laboratório em realidade virtual",
    destaque: "Experiência imersiva",
    tipo: "VR Lab (pago)",
  },
  {
    nome: "Virtual Lab Simulator",
    url: "https://www.vlab.co.in",
    descricao: "Laboratórios virtuais do governo da Índia, gratuitos",
    destaque: "Totalmente gratuito",
    tipo: "Experimentos virtuais",
  },
];

export default function Plataformas() {
  return (
    <Layout>
      <MindMapContainer
        title="🛠️ Plataformas Gratuitas"
        description="Ferramentas online para criar mapas mentais, visualizar moléculas e simular experimentos"
      >
        <div className="container mx-auto px-4">
          {/* Central Node */}
          <div className="flex justify-center mb-12">
            <MindMapNode variant="center" className="text-center max-w-md">
              <div className="flex items-center justify-center gap-3 mb-2">
                <Wrench className="h-8 w-8" />
                <h2 className="text-2xl font-heading font-bold">Recursos Educacionais</h2>
              </div>
              <p className="text-sm opacity-90">
                Plataformas gratuitas para potencializar o ensino e aprendizado de Química
              </p>
            </MindMapNode>
          </div>

          {/* Mapas Mentais */}
          <div className="mb-12">
            <MindMapBranch
              title="Criação de Mapas Mentais"
              icon={<Brain className="h-6 w-6" />}
              color="primary"
              delay={100}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {plataformasMapas.map((plat, index) => (
                  <MindMapNode key={plat.nome} variant="primary" delay={150 + index * 50}>
                    <div className="flex flex-col h-full">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-heading font-bold">{plat.nome}</h4>
                        <a
                          href={plat.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2 flex-grow">{plat.descricao}</p>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                          ⭐ {plat.destaque}
                        </span>
                        <span className="text-xs bg-muted px-2 py-1 rounded">
                          {plat.gratuito}
                        </span>
                      </div>
                    </div>
                  </MindMapNode>
                ))}
              </div>
            </MindMapBranch>
          </div>

          {/* Visualizadores de Moléculas */}
          <div className="mb-12">
            <MindMapBranch
              title="Visualizadores de Moléculas"
              icon={<Atom className="h-6 w-6" />}
              color="accent"
              delay={400}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {visualizadoresMoleculas.map((plat, index) => (
                  <MindMapNode key={plat.nome} variant="accent" delay={450 + index * 50}>
                    <div className="flex flex-col h-full">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-heading font-bold">{plat.nome}</h4>
                        <a
                          href={plat.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent hover:text-accent/80 transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2 flex-grow">{plat.descricao}</p>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">
                          ⭐ {plat.destaque}
                        </span>
                        <span className="text-xs bg-muted px-2 py-1 rounded">
                          📚 {plat.uso}
                        </span>
                      </div>
                    </div>
                  </MindMapNode>
                ))}
              </div>
            </MindMapBranch>
          </div>

          {/* Simuladores de Laboratório */}
          <div className="mb-12">
            <MindMapBranch
              title="Simuladores de Laboratório Virtual"
              icon={<FlaskConical className="h-6 w-6" />}
              color="secondary"
              delay={650}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {simuladoresLab.map((plat, index) => (
                  <MindMapNode key={plat.nome} variant="secondary" delay={700 + index * 50}>
                    <div className="flex flex-col h-full">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-heading font-bold">{plat.nome}</h4>
                        <a
                          href={plat.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-secondary hover:text-secondary/80 transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2 flex-grow">{plat.descricao}</p>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded">
                          ⭐ {plat.destaque}
                        </span>
                        <span className="text-xs bg-muted px-2 py-1 rounded">
                          🔬 {plat.tipo}
                        </span>
                      </div>
                    </div>
                  </MindMapNode>
                ))}
              </div>
            </MindMapBranch>
          </div>

          {/* Dicas de Uso */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <MindMapNode variant="success" delay={900}>
              <h4 className="font-heading font-bold mb-3">💡 Dicas para Professores</h4>
              <ul className="text-sm space-y-2">
                <li>📊 Use mapas mentais para revisar conteúdos antes de provas</li>
                <li>🔬 Simuladores são ótimos para demonstrar experimentos perigosos</li>
                <li>🎨 Deixe alunos criarem seus próprios mapas como avaliação</li>
                <li>💻 PhET funciona offline após download</li>
              </ul>
            </MindMapNode>

            <MindMapNode variant="info" delay={950}>
              <h4 className="font-heading font-bold mb-3">📚 Dicas para Alunos</h4>
              <ul className="text-sm space-y-2">
                <li>🧠 Crie mapas mentais para resumir capítulos</li>
                <li>🔍 Use MolView para entender geometria molecular</li>
                <li>🧪 Pratique no PhET antes de ir ao laboratório real</li>
                <li>📱 A maioria funciona bem no celular também!</li>
              </ul>
            </MindMapNode>
          </div>

          {/* Nota Final */}
          <div className="max-w-2xl mx-auto">
            <MindMapNode variant="primary" className="text-center" delay={1000}>
              <h4 className="font-heading font-bold mb-2">🚀 Comece Agora!</h4>
              <p className="text-sm text-muted-foreground">
                Todas essas ferramentas têm versões gratuitas que são suficientes para uso educacional.
                Experimente cada uma e encontre as que melhor se adaptam ao seu estilo de aprendizado!
              </p>
            </MindMapNode>
          </div>
        </div>
      </MindMapContainer>
    </Layout>
  );
}
