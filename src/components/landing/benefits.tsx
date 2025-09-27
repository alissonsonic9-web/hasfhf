import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { Ear, TrendingUp, FlaskConical, Music, Guitar, Library, AudioWaveform, Mic } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const modules = [
  {
    icon: Ear,
    title: 'Módulo 1 – Método Prático para Desenvolver o Ouvido Musical',
    content: 'Você vai aprender a treinar o ouvido de forma intuitiva, reconhecendo acordes, riffs, frases, solos e arranjos em qualquer estilo. Tudo direto na escuta, sem depender de cifras ou partituras, desenvolvendo uma percepção musical mais natural.',
  },
  {
    icon: TrendingUp,
    title: 'Módulo 2 – Exercícios Progressivos que Funcionam em Qualquer Instrumento',
    content: 'Uma sequência de treinos graduais pensados para se adaptar a qualquer instrumento — do violão ao sax, da guitarra ao teclado. Os exercícios foram planejados para serem aplicados em qualquer música e contexto, acelerando seu domínio musical.',
  },
  {
    icon: FlaskConical,
    title: 'Módulo 3 – Estufa de Percepção Auditiva na Prática',
    content: 'Aqui a ideia é treinar o ouvido em profundidade, aprendendo a separar instrumentos dentro de uma faixa musical. Você vai desenvolver sensibilidade para reconhecer timbres, frequências e intensidades, aplicando isso diretamente na prática, sem excesso de teoria.',
  },
  {
    icon: Music,
    title: 'Módulo 4 – Treinamento de Escuta com Músicas Reais',
    content: 'Nada de exercícios abstratos: neste módulo, você vai praticar com músicas conhecidas de artistas como Cartola, Djavan, Lulu Santos, Garota de Ipanema e muito mais. Assim, além de treinar, você aplica o aprendizado tocando junto com canções de verdade.',
  },
  {
    icon: Guitar,
    title: 'Módulo 5 – Rotinas de Treino Técnico no Seu Instrumento',
    content: 'Aprenda a dominar técnicas como vibratos, bends, ligados, palhetada alternada e tapping, sempre com foco em clareza, controle e fluidez. As rotinas foram organizadas para você evoluir no seu instrumento de forma sólida e progressiva.',
  },
  {
    icon: Library,
    title: 'Módulo 6 – Conceitos Teóricos Descomplicados e Aplicáveis',
    content: 'A teoria musical aqui é simples e prática: apenas o que você realmente precisa para entender o que ouve e aplicar no seu instrumento. Escalas, harmonia e fundamentos são apresentados sem enrolação, para virar conhecimento aplicado e não apenas teoria decorada.',
  },
  {
    icon: AudioWaveform,
    title: 'Módulo 7 – Guia para Transformar Qualquer Música em Aprendizado Técnico',
    content: 'Cada música pode se tornar um exercício. Neste módulo você vai aprender a extrair solos, levadas, arranjos e acordes, mesmo quando parecem difíceis, usando uma abordagem que respeita seu tempo de evolução.',
  },
  {
    icon: Mic,
    title: 'Módulo 8 – Método Flexível para Quem Toca em Diferentes Ambientes',
    content: 'Seja tocando sozinho, em grupo, na igreja ou em bares, este método foi feito para se encaixar em qualquer cenário musical. O conteúdo é tão versátil que você pode aplicar no seu estudo individual ou até usar para ensinar, se for professor.',
  },
];

export function Benefits() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-orange-500 text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">O que você vai ter acesso?</h2>
        </div>
        <div className="py-12">
          <div className="sm:hidden">
            <Carousel
              opts={{
                align: 'start',
                loop: true,
                duration: 35,
              }}
              className="w-full"
            >
              <CarouselContent>
                {modules.map((module, index) => (
                  <CarouselItem key={index} className="basis-4/5">
                    <div className="p-1 h-full">
                      <Card className="flex flex-col h-full overflow-hidden rounded-xl bg-card text-card-foreground shadow-lg">
                        <div className="relative h-48 w-full bg-muted">
                          <Image 
                            src={`https://picsum.photos/seed/${index + 10}/600/400`}
                            alt={module.title}
                            fill
                            className="object-cover"
                            data-ai-hint="music lesson"
                          />
                        </div>
                        <CardHeader>
                          <div className='p-3 bg-primary rounded-full inline-block self-start'>
                            <module.icon className="h-6 w-6 text-primary-foreground" />
                          </div>
                          <CardTitle className="text-base text-blue-900">{module.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <p className="text-sm text-muted-foreground font-black">{module.content}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
          <div className="hidden sm:grid mx-auto grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {modules.map((module, index) => (
              <Card key={index} className="flex flex-col overflow-hidden rounded-xl bg-card text-card-foreground shadow-lg transition-transform duration-300 hover:-translate-y-2">
                <div className="relative h-48 w-full bg-muted">
                  <Image 
                    src={`https://picsum.photos/seed/${index + 10}/600/400`}
                    alt={module.title}
                    fill
                    className="object-cover"
                    data-ai-hint="music lesson"
                  />
                </div>
                <CardHeader>
                  <div className='p-3 bg-primary rounded-full inline-block self-start'>
                    <module.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-base text-blue-900">{module.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground font-black">{module.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <a href="#pricing">
            <Button
              size="lg"
              className="w-full max-w-xs text-lg font-bold uppercase shadow-lg bg-green-600 text-white hover:bg-green-700 mt-4 shadow-green-500/50 hover:shadow-green-400/50 animate-jump"
            >
              GARANTIR MEU PACK AGORA!
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
