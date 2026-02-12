import { Layout } from "@/components/layout/Layout";
import { MindMapContainer } from "@/components/mindmap/MindMapContainer";
import { MindMapNode } from "@/components/mindmap/MindMapNode";
import { MindMapBranch } from "@/components/mindmap/MindMapBranch";
import { ChemicalFormula } from "@/components/mindmap/ChemicalFormula";

const gruposHidrocarbonetos = [
  { nome: "Alcanos", formula: "C-C", exemplo: "CH₄ (Metano)", caracteristica: "Ligações simples" },
  { nome: "Alcenos", formula: "C=C", exemplo: "C₂H₄ (Eteno)", caracteristica: "Ligação dupla" },
  { nome: "Alcinos", formula: "C≡C", exemplo: "C₂H₂ (Etino)", caracteristica: "Ligação tripla" },
  { nome: "Aromáticos", formula: "⬡", exemplo: "C₆H₆ (Benzeno)", caracteristica: "Anel benzênico" },
];

const gruposOxigenados = [
  { nome: "Álcool", formula: "R-OH", exemplo: "CH₃OH (Metanol)", caracteristica: "Hidroxila ligada a C saturado" },
  { nome: "Fenol", formula: "Ar-OH", exemplo: "C₆H₅OH", caracteristica: "Hidroxila ligada a anel" },
  { nome: "Éter", formula: "R-O-R'", exemplo: "CH₃OCH₃", caracteristica: "Oxigênio entre carbonos" },
  { nome: "Aldeído", formula: "R-CHO", exemplo: "HCHO (Metanal)", caracteristica: "Carbonila terminal" },
  { nome: "Cetona", formula: "R-CO-R'", exemplo: "CH₃COCH₃ (Acetona)", caracteristica: "Carbonila interna" },
  { nome: "Ác. Carboxílico", formula: "R-COOH", exemplo: "CH₃COOH (Vinagre)", caracteristica: "Carboxila" },
  { nome: "Éster", formula: "R-COO-R'", exemplo: "CH₃COOCH₃", caracteristica: "Carboxila + éter" },
];

const gruposNitrogenados = [
  { nome: "Amina", formula: "R-NH₂", exemplo: "CH₃NH₂", caracteristica: "Derivado da amônia" },
  { nome: "Amida", formula: "R-CONH₂", exemplo: "CH₃CONH₂", caracteristica: "Carbonila + nitrogênio" },
  { nome: "Nitrila", formula: "R-C≡N", exemplo: "CH₃CN", caracteristica: "Tripla com nitrogênio" },
  { nome: "Nitrocomposto", formula: "R-NO₂", exemplo: "CH₃NO₂", caracteristica: "Grupo nitro" },
];

export default function GruposFuncionais() {
  return (
    <Layout>
      <MindMapContainer
        title="⚗️ Grupos Funcionais"
        description="Os principais grupos funcionais da Química Orgânica organizados por categoria"
      >
        <div className="container mx-auto px-4">
          {/* Central Node */}
          <div className="flex justify-center mb-12">
            <MindMapNode variant="center" className="text-center max-w-md">
              <h2 className="text-2xl font-heading font-bold mb-2">Química Orgânica</h2>
              <p className="text-sm opacity-90">
                Grupos funcionais são conjuntos de átomos que determinam as propriedades químicas dos compostos orgânicos
              </p>
            </MindMapNode>
          </div>

          {/* Three Columns Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Hidrocarbonetos */}
            <div className="space-y-4">
              <div className="text-center mb-4">
                <span className="inline-block px-4 py-2 bg-chemistry-blue/10 text-chemistry-blue rounded-full font-heading font-bold">
                  🔷 Hidrocarbonetos
                </span>
              </div>
              
              {gruposHidrocarbonetos.map((grupo, index) => (
                <MindMapNode
                  key={grupo.nome}
                  variant="primary"
                  delay={index * 100}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-heading font-bold text-chemistry-blue">{grupo.nome}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{grupo.caracteristica}</p>
                      <p className="text-sm mt-2">Ex: {grupo.exemplo}</p>
                    </div>
                    <div className="text-2xl font-mono bg-chemistry-blue/10 px-3 py-1 rounded-lg text-chemistry-blue">
                      {grupo.formula}
                    </div>
                  </div>
                </MindMapNode>
              ))}
            </div>

            {/* Oxigenados */}
            <div className="space-y-4">
              <div className="text-center mb-4">
                <span className="inline-block px-4 py-2 bg-chemistry-orange/10 text-chemistry-orange rounded-full font-heading font-bold">
                  🔶 Oxigenados
                </span>
              </div>
              
              {gruposOxigenados.map((grupo, index) => (
                <MindMapNode
                  key={grupo.nome}
                  variant="warning"
                  delay={index * 100 + 50}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-heading font-bold text-chemistry-orange">{grupo.nome}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{grupo.caracteristica}</p>
                      <p className="text-sm mt-2">Ex: {grupo.exemplo}</p>
                    </div>
                    <div className="text-lg font-mono bg-chemistry-orange/10 px-3 py-1 rounded-lg text-chemistry-orange whitespace-nowrap">
                      {grupo.formula}
                    </div>
                  </div>
                </MindMapNode>
              ))}
            </div>

            {/* Nitrogenados */}
            <div className="space-y-4">
              <div className="text-center mb-4">
                <span className="inline-block px-4 py-2 bg-chemistry-purple/10 text-chemistry-purple rounded-full font-heading font-bold">
                  🔷 Nitrogenados
                </span>
              </div>
              
              {gruposNitrogenados.map((grupo, index) => (
                <MindMapNode
                  key={grupo.nome}
                  variant="accent"
                  delay={index * 100 + 100}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-heading font-bold text-chemistry-purple">{grupo.nome}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{grupo.caracteristica}</p>
                      <p className="text-sm mt-2">Ex: {grupo.exemplo}</p>
                    </div>
                    <div className="text-lg font-mono bg-chemistry-purple/10 px-3 py-1 rounded-lg text-chemistry-purple whitespace-nowrap">
                      {grupo.formula}
                    </div>
                  </div>
                </MindMapNode>
              ))}

              {/* Outros grupos */}
              <div className="pt-4 border-t border-border/50">
                <p className="text-sm text-center text-muted-foreground mb-3">Outros grupos importantes:</p>
                <div className="grid grid-cols-2 gap-2">
                  <MindMapNode variant="info" className="text-center py-2" delay={500}>
                    <p className="font-semibold text-sm">Haleto</p>
                    <p className="text-xs text-muted-foreground">R-X</p>
                  </MindMapNode>
                  <MindMapNode variant="info" className="text-center py-2" delay={550}>
                    <p className="font-semibold text-sm">Tiol</p>
                    <p className="text-xs text-muted-foreground">R-SH</p>
                  </MindMapNode>
                </div>
              </div>
            </div>
          </div>

          {/* Legend / Tip */}
          <div className="mt-12 max-w-3xl mx-auto">
            <MindMapNode variant="secondary" className="text-center" delay={600}>
              <h4 className="font-heading font-bold mb-2">💡 Dica de Estudo</h4>
              <p className="text-sm text-muted-foreground">
                <strong>R</strong> representa qualquer cadeia carbônica (radical alquila), 
                <strong> Ar</strong> representa um anel aromático, e 
                <strong> R'</strong> indica um radical que pode ser diferente de R.
              </p>
            </MindMapNode>
          </div>
        </div>
      </MindMapContainer>
    </Layout>
  );
}
