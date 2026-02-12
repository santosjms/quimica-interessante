import { useState } from 'react';

import { Layout } from "@/components/layout/Layout";
import { MindMapContainer } from "@/components/mindmap/MindMapContainer";
import { ChemicalFormula } from "@/components/mindmap/ChemicalFormula";

import Torre from '@/assets/images/torre.png';
import Carvao from '@/assets/images/Carvao.png';
import Florestas from '@/assets/images/Florestas.png';
import Aguas from '@/assets/images/Aguas.png';
import Cloud from '@/assets/images/cloud.png';
import Fabrica from '@/assets/images/Fábrica.png';
import Carro from '@/assets/images/Carro.png';


const RAIN_DROPS = [
  { left: 5, top: 0, height: 18, delay: 0, duration: 1.2, opacity: 0.6 },
  { left: 12, top: 10, height: 22, delay: 0.4, duration: 1.5, opacity: 0.5 },
  { left: 20, top: 4, height: 14, delay: 0.8, duration: 1.1, opacity: 0.7 },
  { left: 28, top: 18, height: 20, delay: 0.2, duration: 1.4, opacity: 0.6 },
  { left: 35, top: 6, height: 16, delay: 1, duration: 1.3, opacity: 0.5 },
  { left: 45, top: 12, height: 24, delay: 0.6, duration: 1.6, opacity: 0.6 },
  { left: 52, top: 2, height: 14, delay: 0.9, duration: 1.2, opacity: 0.7 },
  { left: 60, top: 20, height: 26, delay: 0.3, duration: 1.7, opacity: 0.5 },
  { left: 68, top: 8, height: 18, delay: 1.1, duration: 1.3, opacity: 0.6 },
  { left: 76, top: 4, height: 22, delay: 0.5, duration: 1.5, opacity: 0.6 },
  { left: 84, top: 14, height: 16, delay: 0.7, duration: 1.2, opacity: 0.7 },
  { left: 92, top: 0, height: 20, delay: 1.3, duration: 1.6, opacity: 0.5 }
];

export default function ChuvaAcida() {
  return (
    <Layout>
      <MindMapContainer
        title="🌧️ Chuva Ácida"
        description="Entenda como a poluição atmosférica causa a chuva ácida e seus impactos no meio ambiente"
      >
        <div className="container mx-auto px-4 py-10 max-w-7xl">

          {/* Linha superior */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">

            {/* Vinda de */}
            <div className="text-center flex flex-col items-center">
              <h3 className="font-bold text-lg mb-6 uppercase">Vinda de</h3>

              <div className="flex flex-wrap justify-center gap-8">
                <div className="flex flex-col items-center">
                  <img
                    src={Torre}
                    alt="Petróleo"
                    className="w-24 sm:w-32 md:w-40 object-contain"
                  />
                  <p className="mt-2 text-sm font-medium">Petróleo</p>
                </div>

                <div className="flex flex-col items-center">
                  <img
                    src={Carvao}
                    alt="Carvão"
                    className="w-24 sm:w-32 md:w-40 object-contain"
                  />
                  <p className="mt-2 text-sm font-medium">Carvão</p>
                </div>
              </div>
            </div>

            {/* Afeta */}
            <div className="text-center">
              <h3 className="font-bold text-lg mb-6 uppercase">Afeta</h3>

              <div className="flex flex-wrap justify-center gap-8">
                <div className="flex flex-col items-center">
                  <img
                    src={Florestas}
                    alt="Florestas"
                    className="w-24 sm:w-32 md:w-40 object-contain"
                  />
                  <p className="mt-2 text-sm font-medium">Florestas</p>
                </div>

                <div className="flex flex-col items-center">
                  <img
                    src={Aguas}
                    alt="Águas e Solos"
                    className="w-24 sm:w-32 md:w-40 object-contain"
                  />
                  <p className="mt-2 text-sm font-medium">Águas e Solos</p>
                </div>
              </div>
            </div>
          </div>

          {/* Centro */}
          <div className="flex justify-center mb-20">
            <div className="relative flex flex-col items-center animate-[float_4s_ease-in-out_infinite]">

              <img
                src={Cloud}
                alt="Nuvem de chuva ácida"
                className="w-72 sm:w-80 md:w-96"
              />

              <h2 className="absolute top-1/2 -translate-y-1/2 text-xl sm:text-2xl md:text-3xl font-bold uppercase text-black z-20 text-center">
                Chuva Ácida
              </h2>

              {/* Chuva */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 sm:w-72 md:w-80 h-32 pointer-events-none overflow-hidden">
                {RAIN_DROPS.map((drop, i) => (
                  <span
                    key={i}
                    className="rain-drop absolute"
                    style={{
                      left: `${drop.left}%`,
                      top: `${drop.top}px`,
                      height: `${drop.height}px`,
                      opacity: drop.opacity,
                      animationDelay: `${drop.delay}s`,
                      animationDuration: `${drop.duration}s`
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Parte inferior */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14">

            {/* Poluição */}
            <div className="text-center">
              <p className="text-sm mb-2">Sua origem:</p>
              <p className="font-bold uppercase mb-6">Poluição</p>

              <div className="flex flex-wrap justify-center gap-8">
                <div className="flex flex-col items-center">
                  <img
                    src={Fabrica}
                    alt="Fábricas"
                    className="w-24 sm:w-32 md:w-40 object-contain"
                  />
                  <p className="mt-2 text-sm font-medium">Fábricas</p>
                </div>

                <div className="flex flex-col items-center">
                  <img
                    src={Carro}
                    alt="Queima de combustível"
                    className="w-24 sm:w-32 md:w-40 object-contain"
                  />
                  <p className="mt-2 text-sm font-medium">Queima de Combustível</p>
                </div>
              </div>
            </div>

            {/* Reações Químicas */}
            <div className="bg-gray-100 rounded-2xl p-4 sm:p-5 text-center shadow-md 
                max-w-sm mx-auto">

              <h3 className="text-sm font-bold mb-4 uppercase tracking-wide text-gray-700">
                Reações Químicas
              </h3>

              <div className="flex flex-col gap-4 items-center">

                <div className="bg-white rounded-xl px-4 py-4 w-full">
                  <ChemicalFormula formula="SO₃ + H₂O → H₂SO₄" size="md" />
                  <p className="mt-2 text-xs text-gray-500">
                    Ácido sulfúrico
                  </p>
                </div>

                <div className="bg-white rounded-xl px-4 py-4 w-full">
                  <ChemicalFormula formula="NO + H₂O → HNO₃" size="md" />
                  <p className="mt-2 text-xs text-gray-500">
                    Ácido nítrico
                  </p>
                </div>

              </div>
            </div>


          </div>
        </div>
      </MindMapContainer>
    </Layout>
  );
}
