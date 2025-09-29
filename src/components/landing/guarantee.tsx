import { ShieldCheck } from 'lucide-react';

const GuaranteeSeal = () => (
  <div className="relative w-48 h-48 sm:w-56 sm:h-56">
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <defs>
        <path id="circlePath" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
      </defs>
      <text>
        <textPath href="#circlePath" className="text-2xl font-bold uppercase fill-primary/80 tracking-wider" startOffset="50%" textAnchor="middle">
          Garantia de 7 dias • Garantia de 7 dias •
        </textPath>
      </text>
    </svg>
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-32 h-32 bg-accent rounded-full flex items-center justify-center">
        <span className="text-5xl font-bold text-white">07</span>
      </div>
    </div>
  </div>
);


export function Guarantee() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#F8F8F8] text-primary">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div className="flex justify-center lg:justify-start">
            <GuaranteeSeal />
          </div>
          <div className="space-y-4 text-center lg:text-left text-primary">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Garantia Incondicional de 7 Dias</h2>
            <p className="md:text-xl text-gray-700">
              Se dentro de 7 dias você não ficar satisfeito, devolvemos 100% do valor.
            </p>
            <p className="text-green-500 font-semibold text-lg">
              Sem perguntas. Sem burocracia.
            </p>
            <div className="flex items-center justify-center lg:justify-start gap-2 text-primary/80">
              <ShieldCheck className="w-5 h-5" />
              <span>Sua compra é 100% segura.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
