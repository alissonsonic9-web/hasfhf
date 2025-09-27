import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Ear, KeyRound, Lightbulb, Music, Guitar, School } from 'lucide-react';

const benefits = [
  {
    icon: <Music className="w-8 h-8 text-white" />,
    title: 'Independência Total',
    description: 'Toque qualquer música sem depender de cifra ou partitura. Chega de buscar acordes no Google.',
  },
  {
    icon: <Ear className="w-8 h-8 text-white" />,
    title: 'Desenvolva seu Ouvido',
    description: 'Mesmo que você ache que "não nasceu com isso". Ouvir, entender e tocar — tudo isso pode ser treinado.',
  },
  {
    icon: <Guitar className="w-8 h-8 text-white" />,
    title: 'Para Qualquer Instrumento',
    description: 'Violão, teclado, flauta, sax, gaita... nosso método foi pensado para ser universal.',
  },
  {
    icon: <KeyRound className="w-8 h-8 text-white" />,
    title: 'Liberdade Musical',
    description: 'Ganhe independência como músico. Tocar de ouvido significa que você não depende mais de ninguém.',
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-white" />,
    title: 'Criatividade e Improviso',
    description: 'Quando o ouvido se desenvolve, a sua capacidade de improvisar flui com muito mais naturalidade.',
  },
  {
    icon: <School className="w-8 h-8 text-white" />,
    title: 'Ensino Moderno',
    description: 'Para professores que querem sair na frente, ensinando percepção auditiva de forma profissional.',
  },
];

export function Benefits() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Com esse material você terá!</h2>
          <p className="max-w-[900px] text-primary-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Um conjunto de habilidades que vão transformar a sua relação com a música, independente do seu nível ou instrumento.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-white/10 border-white/20 shadow-lg hover:shadow-white/20 transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center gap-4">
                {benefit.icon}
                <CardTitle className="text-xl text-white">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
