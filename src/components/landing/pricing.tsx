"use client"

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Check, Gift, ShieldCheck } from 'lucide-react';

const includedItems = [
  'PDF COMPLETO DO MÉTODO TOCAR DE OUVIDO',
  'EXERCÍCIOS DE PERCEPÇÃO AUDITIVA PASSO A PASSO',
  'TREINOS COM MÚSICAS REAIS (LULU SANTOS, DJAVAN, ETC.)',
  'GUIA PARA MONTAR SEUS PRÓPRIOS ARRANJOS',
  'EXPLICAÇÕES DE TEORIA MUSICAL DESCOMPLICADA',
  'SEM MENSALIDADE - ACESSO VITALÍCIO',
  'GARANTIA DE 7 DIAS',
  'BÔNUS: GUIA RÁPIDO: COMO TIRAR MÚSICAS EM 10 MINUTOS',
  'BÔNUS: DICIONÁRIO DE ACORDES',
];

export function Pricing() {
  const [isIntersecting, setIntersecting] = React.useState(false);
  const cardRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      {
        threshold: 0.5,
      }
    );

    const currentCardRef = cardRef.current;
    if (currentCardRef) {
      observer.observe(currentCardRef);
    }

    return () => {
      if (currentCardRef) {
        observer.unobserve(currentCardRef);
      }
    };
  }, []);

  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl uppercase">OFERTA ESPECIAL PARA GARANTIR HOJE!</h2>
          <p className="text-yellow-300">A promoção de lançamento pode encerrar a qualquer momento.</p>
        </div>
        <div className="mx-auto w-full max-w-md pt-12">
          <Card ref={cardRef} className="bg-white text-black shadow-xl animate-jump">
            <CardHeader className="text-center pb-2">
              <div className="relative inline-block mx-auto mb-2">
                <span className="text-2xl text-muted-foreground">DE R$ 147,00</span>
                <div
                  className={`absolute top-1/2 left-[-10%] w-0 h-[5px] bg-red-600 transform -rotate-[10deg] rounded-full ${
                    isIntersecting ? 'animate-strike-through-1' : ''
                  }`}
                ></div>
                <div
                  className={`absolute top-1/2 left-[-10%] w-0 h-[5px] bg-red-600 transform rotate-[10deg] rounded-full ${
                    isIntersecting ? 'animate-strike-through-2' : ''
                  }`}
                ></div>
              </div>
              <CardTitle className="text-2xl text-black">POR APENAS</CardTitle>
              <p className="text-7xl font-extrabold text-accent">R$19,90</p>
              <p className="font-semibold text-lg">PAGAMENTO ÚNICO</p>
            </CardHeader>
            <CardContent className="space-y-4 text-left p-6">
              <ul className="grid gap-2">
                {includedItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    {item.startsWith('BÔNUS:') ? (
                      <Gift className="h-5 w-5 text-primary mt-1 shrink-0" />
                    ) : (
                      <Check className="h-5 w-5 text-green-500 mt-1 shrink-0" />
                    )}
                    <span className={`text-sm font-bold ${item.startsWith('BÔNUS:') ? 'text-primary' : 'text-black'}`}>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <div className="flex items-center gap-2 text-xs text-red-500">
                <ShieldCheck className="h-4 w-4" />
                <span>Compra 100% segura</span>
              </div>
              <Button size="lg" className="w-full text-lg font-bold uppercase shadow-lg hover:scale-105 transition-transform duration-200 bg-green-600 text-white hover:bg-green-700 shadow-green-600/50 hover:shadow-green-500/50">
                GARANTIR O MEU AGORA!
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
