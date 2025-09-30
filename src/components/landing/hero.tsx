import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative w-full text-center text-white overflow-hidden">
      {/* Desktop View */}
      <div className="hidden md:block md:h-[80vh] md:min-h-[500px] md:relative">
        <Image
          src="https://images.unsplash.com/photo-1627407660893-fe01f60d44c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxtdXNpYyUyMHN0dWRpb3xlbnwwfHx8fDE3NTg5MDgxMjl8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="A dark and moody shot of a music studio with various instruments."
          fill
          className="object-cover"
          data-ai-hint="music studio"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container px-4 md:px-6 flex flex-col items-center justify-center h-full">
          <div className="flex flex-col items-center space-y-6">
            <h1 className="text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none uppercase">
              Toque qualquer música
              <span className="block text-accent">sem depender de cifra</span>
            </h1>
            <p className="max-w-[700px] text-lg text-neutral-200 md:text-xl">
              Chega de buscar acordes no Google a cada nova música. Desenvolva seu ouvido musical e ganhe a liberdade que você sempre quis.
            </p>
            <Link
              href="https://www.ggcheckout.com/checkout/v2/dd3YcDfmJ9793x2ccCRZ"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8 text-lg font-bold uppercase shadow-lg hover:scale-105 transform-gpu transition-transform duration-200 bg-green-600 text-white hover:bg-green-700 shadow-green-600/50 hover:shadow-green-500/50"
            >
              GARANTIR MEU PACK AGORA!
            </Link>
          </div>
        </div>
      </div>
      
      {/* Mobile View */}
      <div className="md:hidden w-full">
        <div className='relative w-full aspect-[9/10]'>
          <Image
            src="https://i.ibb.co/3kCx9Q2/musica.jpg"
            alt="Toque qualquer música sem depender de cifra"
            fill
            className="object-cover"
            priority
            quality={100}
            sizes="(max-width: 767px) 100vw, 0"
          />
        </div>
      </div>
    </section>
  );
}
