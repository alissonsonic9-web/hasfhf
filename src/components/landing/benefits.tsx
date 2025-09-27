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
import { Ear, TrendingUp, FlaskConical, Music, Guitar, Library, AudioWaveform, Mic, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const modules = [
  {
    icon: Ear,
    title: 'Módulo 1 – Método Prático para Desenvolver o Ouvido Musical',
    imageUrl: 'https://i.postimg.cc/BnDLdQCX/metodo.png',
    content: [
      'Aprenda a treinar o ouvido de forma intuitiva, reconhecendo acordes, riffs, frases, solos e arranjos.',
      'Tudo direto na escuta, sem depender de cifras ou partituras.',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Módulo 2 – Exercícios Progressivos que Funcionam em Qualquer Instrumento',
    imageUrl: 'https://i.postimg.cc/Z0zZ3ZvX/cifra.png',
    content: [
      'Treinos graduais que se adaptam a qualquer instrumento (violão, sax, teclado, etc.).',
      'Exercícios aplicáveis em qualquer música, acelerando seu domínio musical.',
    ],
  },
  {
    icon: FlaskConical,
    title: 'Módulo 3 – Estufa de Percepção Auditiva na Prática',
    imageUrl: 'https://i.postimg.cc/zf7BrLHX/percepcao-corrigido.png',
    content: [
      'Aprenda a separar instrumentos dentro de uma música.',
      'Desenvolva sensibilidade para reconhecer timbres, frequências e intensidades.',
    ],
  },
  {
    icon: Music,
    title: 'Módulo 4 – Treinamento de Escuta com Músicas Reais',
    imageUrl: 'https://i.postimg.cc/mZCrL6HS/treino-com-msc-reais.png',
    content: [
      'Pratique com músicas conhecidas de artistas como Cartola, Djavan e Lulu Santos.',
      'Aplique o aprendizado tocando junto com canções de verdade.',
    ],
  },
  {
    icon: Guitar,
    title: 'Módulo 5 – Rotinas de Treino Técnico no Seu Instrumento',
    imageUrl: 'https://i.postimg.cc/MGnWhswf/rotina.png',
    content: [
      'Domine técnicas como vibratos, bends, ligados e palhetada alternada.',
      'Rotinas organizadas para você evoluir de forma sólida e progressiva.',
    ],
  },
  {
    icon: Library,
    title: 'Módulo 6 – Conceitos Teóricos Descomplicados e Aplicáveis',
    content: [
      'Aprenda apenas a teoria musical que você realmente precisa.',
      'Conhecimento aplicado para você entender o que ouve e toca.',
    ],
  },
  {
    icon: AudioWaveform,
    title: 'Módulo 7 – Guia para Transformar Qualquer Música em Aprendizado Técnico',
    content: [
      'Aprenda a extrair solos, levadas e arranjos de qualquer música.',
      'Uma abordagem que respeita seu tempo de evolução.',
    ],
  },
  {
    icon: Mic,
    title: 'Módulo 8 – Método Flexível para Quem Toca em Diferentes Ambientes',
    content: [
      'Aplique o método em qualquer cenário: sozinho, em grupo, na igreja ou em bares.',
      'Conteúdo versátil que pode ser usado para estudo ou para ensinar.',
    ],
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
                            src={module.imageUrl || `https://picsum.photos/seed/${index + 10}/600/400`}
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
                          <ul className="space-y-2">
                            {module.content.map((item, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                                <span className="text-sm text-muted-foreground font-black">{item}</span>
                              </li>
                            ))}
                          </ul>
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
                    src={module.imageUrl || `https://picsum.photos/seed/${index + 10}/600/400`}
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
                   <ul className="space-y-2">
                    {module.content.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                        <span className="text-sm text-muted-foreground font-black">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div className="flex justify-center sm:mt-0 mt-8">
          <a href="#pricing">
            <Button
              size="lg"
              className="w-full max-w-xs text-lg font-bold uppercase shadow-lg bg-green-600 text-white hover:bg-green-700 animate-[jump_4s_ease-in-out_infinite] shadow-green-500/50 hover:shadow-green-400/50"
            >
              GARANTIR MEU PACK AGORA!
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
