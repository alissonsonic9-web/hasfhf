import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Star } from 'lucide-react';

const benefits = [
  {
    title: 'Independência Total',
    description: 'Toque qualquer música sem depender de cifra ou partitura. Chega de buscar acordes no Google.',
  },
  {
    title: 'Desenvolva seu Ouvido',
    description: 'Mesmo que você ache que "não nasceu com isso". Ouvir, entender e tocar — tudo isso pode ser treinado.',
  },
  {
    title: 'Para Qualquer Instrumento',
    description: 'Violão, teclado, flauta, sax, gaita... nosso método foi pensado para ser universal.',
  },
  {
    title: 'Liberdade Musical',
    description: 'Ganhe independência como músico. Tocar de ouvido significa que você não depende mais de ninguém.',
  },
  {
    title: 'Criatividade e Improviso',
    description: 'Quando o ouvido se desenvolve, a sua capacidade de improvisar flui com muito mais naturalidade.',
  },
  {
    title: 'Ensino Moderno',
    description: 'Para professores que querem sair na frente, ensinando percepção auditiva de forma profissional.',
  },
];

export function Modules() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Com esse material você terá!</h2>
        </div>
        <div className="mx-auto grid max-w-5xl items-stretch gap-6 py-12 lg:grid-cols-2 lg:gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-card text-card-foreground shadow-lg rounded-2xl flex flex-col justify-center p-6">
              <CardHeader className="items-center text-center p-0">
                <div className="bg-accent p-2 rounded-full mb-4">
                  <Star className="w-6 h-6 text-accent-foreground" fill="white" />
                </div>
                <CardTitle className="text-lg font-bold uppercase">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center p-0 mt-2">
                <p className="text-base text-muted-foreground font-semibold">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
