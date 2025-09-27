import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-bg');

  return (
    <section className="relative w-full h-[80vh] min-h-[500px] flex items-center justify-center text-center text-white overflow-hidden">
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
      <div className="relative z-10 container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6">
          <h1 className="text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none uppercase">
            Toque qualquer música
            <span className="block text-accent">sem depender de cifra</span>
          </h1>
          <p className="max-w-[700px] text-lg text-neutral-200 md:text-xl">
            Chega de buscar acordes no Google a cada nova música. Desenvolva seu ouvido musical e ganhe a liberdade que você sempre quis.
          </p>
          <Button variant="accent" size="lg" className="text-lg font-bold uppercase shadow-lg hover:scale-105 transition-transform duration-200">
            Garantir meu Pack Agora!
          </Button>
        </div>
      </div>
    </section>
  );
}
