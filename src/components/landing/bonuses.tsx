import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Gift } from 'lucide-react';

export function Bonuses() {
  const communityImage = PlaceHolderImages.find(img => img.id === 'bonus-community');
  const chordsImage = PlaceHolderImages.find(img => img.id === 'bonus-chords');

  const bonusItems = [
    {
      title: "Bônus 1: Comunidade Exclusiva",
      image: communityImage,
    },
    {
      title: "Bônus 2: Dicionário de Acordes",
      image: chordsImage,
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-accent/10 px-3 py-1 text-sm text-accent-foreground font-semibold">Bônus Especiais</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-accent">Para garantir hoje!</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Além de todo o método, você ainda leva para casa dois presentes que vão acelerar seus resultados.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          {bonusItems.map((bonus, index) => (
            <Card key={index} className="overflow-hidden shadow-lg border-accent/20 hover:shadow-accent/20 transition-shadow duration-300">
              {bonus.image && (
                <div className="relative h-60 w-full">
                  <Image
                    src={bonus.image.imageUrl}
                    alt={bonus.image.description}
                    fill
                    className="object-cover"
                    data-ai-hint={bonus.image.imageHint}
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Gift className="w-6 h-6 text-accent" />
                  {bonus.title}
                </CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
