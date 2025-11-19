import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      
      {/* ← خلفية جديدة بدل القديمة */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: "url('../assets/hero-bg.png')" }}
      ></div>

      <div className="absolute inset-0 bg-black/70 z-10"></div>
      
      <div className="relative z-20 px-6 animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 text-glow">
          Welcome to <span className="text-blue-500">The Terminal VR</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          Dive into breathtaking worlds, experience epic stories, and challenge your skills. Your next great adventure starts here.
        </p>
        <a 
          href="#games" 
          className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/30"
        >
          Explore Games
        </a>
      </div>
      
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
