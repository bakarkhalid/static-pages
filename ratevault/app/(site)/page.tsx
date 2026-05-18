import { Hero } from '@/components/Hero';
import { WhyNow } from '@/components/WhyNow';
import { Protected } from '@/components/Protected';
import { Trusted } from '@/components/Trusted';
import { CtaBanner } from '@/components/CtaBanner';

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyNow />
      <Protected />
      <Trusted />
      <CtaBanner />
    </>
  );
}
