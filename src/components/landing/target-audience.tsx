import { CheckCircle2 } from 'lucide-react';

const audience = [
  "PARA QUEM JÁ TOCA, MAS QUER SE LIBERTAR DAS CIFRAS.",
  "PARA QUEM É INICIANTE E QUER APRENDER DO JEITO CERTO DESDE O COMEÇO.",
  "PARA PROFESSORES QUE QUEREM ENSINAR MAIS DO QUE O BÁSICO.",
  "PARA QUEM TOCA NA IGREJA E PRECISA SE VIRAR NA HORA.",
];

export function TargetAudience() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl uppercase">Esse material é para você:</h2>
        </div>
        <div className="mx-auto max-w-2xl py-12">
          <ul className="space-y-6">
            {audience.map((item, index) => (
              <li key={index} className="flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                <span className="text-xl font-semibold text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
