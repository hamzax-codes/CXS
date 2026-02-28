import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TeamSection from './components/TeamSection';
import EventsSection from './components/EventsSection';
import UpcomingTourSection from './components/UpcomingTourSection';
import ApplySection from './components/ApplySection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="overflow-x-hidden min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <TeamSection />
        <EventsSection />
        <UpcomingTourSection />
        <ApplySection />
      </main>
      <Footer />
    </div>
  );
}
