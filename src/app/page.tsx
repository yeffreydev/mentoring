import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { AchievementsSection } from '@/components/AchievementsSection';
import { ModulesSection } from '@/components/ModulesSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <AboutSection />
      <AchievementsSection />
      <ModulesSection />
      <Footer />
    </main>
  );
}
