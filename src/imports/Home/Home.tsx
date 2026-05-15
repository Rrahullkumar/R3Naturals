import Navbar from '../../app/components/sections/Navbar';
import HeroSection from '../../app/components/sections/HeroSection';
import AboutSection from '../../app/components/sections/AboutSection';
import SpaServicesSection from '../../app/components/sections/SpaServicesSection';
import TrustedSanctuary from '../../app/components/sections/TrustedSanctuary';
import WorkingHours from '../../app/components/sections/WorkingHours';
import SpecialOffer from '../../app/components/sections/SpecialOffer';
import GreenSection from '../../app/components/sections/GreenSection';
import BeautyJournal from '../../app/components/sections/BeautyJournal';
import Partners from '../../app/components/sections/Partners';
import Footer from '../../app/components/sections/Footer';

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-[#fffef6]">
      <Navbar />
      <main className="flex flex-col">
        <HeroSection />
        <AboutSection />
        <SpaServicesSection />
        <TrustedSanctuary />
        <WorkingHours />
        {/* <SpecialOffer /> */}
        <GreenSection />
        <BeautyJournal />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}