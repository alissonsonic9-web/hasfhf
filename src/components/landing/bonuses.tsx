import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Gift } from 'lucide-react';

export function Bonuses() {

  const bonusItems = [
    {
      title: "Bônus 1: Guia Rápido",
      image: "https://i.postimg.cc/kMs5ZYRp/guia.png",
      description: "Como tirar músicas de ouvido em 10 minutos."
    },
    {
      title: "Bônus 2: Dicionário de Acordes",
      image: "https://i.postimg.cc/ZKqqhPrY/dicionario.png",
      description: "O mais completo do mercado, para você nunca mais ter dúvidas."
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white text-black">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">Bônus Especiais</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl uppercase text-primary">E ainda tem mais...</h2>
          <p className="max-w-[900px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Garantindo seu acesso hoje, você leva para casa dois bônus exclusivos que vão acelerar ainda mais a sua evolução musical.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-1 md:grid-cols-2">
          {bonusItems.map((bonus, index) => (
            <div key={index} className="flex flex-col items-center text-center gap-4">
               <div className="relative w-full max-w-[400px] aspect-square">
                 <Image
                    src={bonus.image}
                    alt={bonus.title}
                    fill
                    className="object-contain"
                    data-ai-hint="music guide"
                  />
               </div>
               <div className="space-y-2">
                <h3 className="text-2xl font-bold flex items-center justify-center gap-2 text-primary">
                  <Gift className="w-7 h-7 text-accent" /> {bonus.title}
                </h3>
                <p className="text-lg text-gray-800">{bonus.description}</p>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
