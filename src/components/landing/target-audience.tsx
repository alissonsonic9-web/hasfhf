import { Card, CardContent } from '@/components/ui/card';

const audience = [
  "PARA QUEM JÁ TOCA, MAS QUER SE LIBERTAR DAS CIFRAS.",
  "PARA QUEM É INICIANTE E QUER APRENDER DO JEITO CERTO DESDE O COMEÇO.",
  "PARA PROFESSORES QUE QUEREM ENSINAR MAIS DO QUE O BÁSICO.",
  "PARA QUEM TOCA NA IGREJA E PRECISA SE VIRAR NA HORA.",
];

export function TargetAudience() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#1C1C1C] text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl uppercase">Esse material é para você:</h2>
        </div>
        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 py-12 sm:grid-cols-2">
          {audience.map((item, index) => (
            <Card key={index} className="bg-[#D90429] rounded-2xl">
              <CardContent className="flex items-center justify-center p-6 h-full">
                <p className="text-xl font-bold text-center text-white">{item}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
