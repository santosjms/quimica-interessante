import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ChuvaAcida from "./pages/ChuvaAcida";
import GruposFuncionais from "./pages/GruposFuncionais";
import QuimicaCerveja from "./pages/QuimicaCerveja";
import QuimicaCafe from "./pages/QuimicaCafe";
import QuimicaAmor from "./pages/QuimicaAmor";
import Biopolimeros from "./pages/Biopolimeros";
import Plataformas from "./pages/Plataformas";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/chuva-acida" element={<ChuvaAcida />} />
          <Route path="/grupos-funcionais" element={<GruposFuncionais />} />
          <Route path="/quimica-cerveja" element={<QuimicaCerveja />} />
          <Route path="/quimica-cafe" element={<QuimicaCafe />} />
          <Route path="/quimica-amor" element={<QuimicaAmor />} />
          <Route path="/biopolimeros" element={<Biopolimeros />} />
          <Route path="/plataformas" element={<Plataformas />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
