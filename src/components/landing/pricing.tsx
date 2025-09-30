"use client";

import { Check, Gift, ShieldCheck } from 'lucide-react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

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
  return (
    <section
      id="pricing"
      className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground"
    >
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl uppercase">
            OFERTA ESPECIAL PARA GARANTIR HOJE!
          </h2>
          <p className="text-yellow-300">
            A promoção de lançamento pode encerrar a qualquer momento.
          </p>
        </div>
        <div className="mx-auto max-w-md pt-12">
          <Card className="bg-white text-black shadow-xl animate-jump">
            <CardHeader className="text-center pb-2">
              <div className="relative inline-block mx-auto mb-2">
                <span className="text-2xl text-muted-foreground line-through">
                  DE R$ 147,00
                </span>
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
                    <span
                      className={`font-bold ${
                        item.startsWith('BÔNUS:')
                          ? 'text-primary'
                          : 'text-black'
                      } text-sm`}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
               <a href="https://www.ggcheckout.com/checkout/v2/dd3YcDfmJ9793x2ccCRZ" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 w-full text-lg font-bold uppercase shadow-lg bg-green-600 text-white hover:bg-green-700 shadow-green-600/50 hover:shadow-green-500/50 h-11 px-8">
                GARANTIR O MEU AGORA!
               </a>
              <div className="flex items-center gap-2 text-xs text-red-500">
                <ShieldCheck className="h-4 w-4" />
                <span>Compra 100% segura</span>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
