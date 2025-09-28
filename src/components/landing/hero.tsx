import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-bg');

  return (
    <section className="relative w-full text-center text-white overflow-hidden md:h-[80vh] md:min-h-[500px] md:flex md:items-center md:justify-center">
      {/* Desktop View */}
      <div className="hidden md:block w-full h-full">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            data-ai-hint={heroImage.imageHint}
            priority
          />
        )}
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
            <Button size="lg" className="text-lg font-bold uppercase shadow-lg hover:scale-105 transition-transform duration-200 bg-green-600 text-white hover:bg-green-700 shadow-green-600/50 hover:shadow-green-500/50">
              Garantir meu Pack Agora!
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile View */}
      <div className="md:hidden w-full bg-[#2E435A]">
        <div className='relative w-full aspect-[9/16]'>
          <Image
            src="https://i.postimg.cc/G2X6zshf/musica.jpg"
            alt="Toque qualquer música sem depender de cifra"
            fill
            className="object-contain"
            priority
            quality={100}
          />
        </div>
      </div>
    </section>
  );
}
