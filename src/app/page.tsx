import { Hero } from '@/components/landing/hero';
import { Benefits } from '@/components/landing/benefits';
import { Modules } from '@/components/landing/modules';
import { TargetAudience } from '@/components/landing/target-audience';
import { Bonuses } from '@/components/landing/bonuses';
import { Pricing } from '@/components/landing/pricing';
import { Footer } from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <Hero />
        <Benefits />
        <Modules />
        <TargetAudience />
        <Bonuses />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
