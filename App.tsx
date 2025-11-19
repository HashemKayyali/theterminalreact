import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import GamesSection from './components/GamesSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';
import BookingSection from './components/BookingSection';

const App: React.FC = () => {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <GamesSection />
        <GallerySection />
        <BookingSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default App;
