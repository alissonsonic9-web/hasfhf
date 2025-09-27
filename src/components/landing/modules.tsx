import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Ear, TrendingUp, FlaskConical, Music2, Guitar, Library, AudioWaveform, Mic } from 'lucide-react';

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
    icon: Music2,
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

export function Modules() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-accent text-accent-foreground">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">O que você vai ter acesso?</h2>
          <p className="max-w-[900px] text-accent-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Uma jornada completa, do básico ao avançado, para você dominar a arte de tocar de ouvido.
          </p>
        </div>
        <div className="mx-auto max-w-3xl py-12">
          <Accordion type="single" collapsible className="w-full">
            {modules.map((module, index) => (
              <AccordionItem value={`item-${index + 1}`} key={index} className="border-white/20">
                <AccordionTrigger className="text-lg hover:no-underline">
                  <div className="flex items-center gap-4">
                    <module.icon className="h-6 w-6 text-white" />
                    <span className="text-left text-white">{module.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-base text-white/80 pl-14">
                  {module.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
