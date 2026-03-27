import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyUs from '@/components/WhyUs';
import Stats from '@/components/Stats';
import CTA from '@/components/CTA';
import CompanyIntro from '@/components/CompanyIntro';

export default function Home() {
  return (
    <div className="space-y-20 pb-20">
      <CompanyIntro />
      <Hero />
      <Services />
      <WhyUs />
      <Stats />
      <CTA />
    </div>
  );
}
