import React from 'react';
import type { Game } from '../types';
import GameCard from './GameCard';

const games: Game[] = [
  {
    id: 1,
    name: 'CyberRonin',
    description:
      'A fast-paced action RPG set in a dystopian future. Master the blade and technology to uncover a corporate conspiracy.',
    // رابط الصورة من Google Drive - مافي أي مسافة بعد الرابط
    imageUrl:
      'https://res.cloudinary.com/dymhoaarh/image/upload/v1758053830/main-sample.png',
    // حط هون ID تبع فيديو اللعبة لما تجهزه
    videoUrl:
      'https://res.cloudinary.com/dymhoaarh/video/upload/about2_igr1ns.mp4',
    genre: 'Action RPG',
  },
  {
    id: 2,
    name: 'Aetheria Chronicles',
    description:
      'Explore a vast, magical open world. Forge alliances, tame mythical beasts, and shape the destiny of a floating continent.',
    imageUrl:
      'https://drive.google.com/uc?export=view&id=IMAGE_ID_2',
    videoUrl:
      'https://drive.google.com/uc?export=download&id=VIDEO_ID_2',
    genre: 'Open World Fantasy',
  },
  {
    id: 3,
    name: 'Starfall Racers',
    description:
      'Compete in high-speed, anti-gravity races across the galaxy. Customize your ship and dominate the interstellar circuits.',
    imageUrl:
      'https://drive.google.com/uc?export=view&id=IMAGE_ID_3',
    videoUrl:
      'https://drive.google.com/uc?export=download&id=VIDEO_ID_3',
    genre: 'Sci-Fi Racing',
  },
  {
    id: 4,
    name: 'Void Echoes',
    description:
      'A psychological horror game where you must survive on a derelict spaceship. Your only company is an unsettling AI.',
    imageUrl:
      'https://drive.google.com/uc?export=view&id=IMAGE_ID_4',
    videoUrl:
      'https://drive.google.com/uc?export=download&id=VIDEO_ID_4',
    genre: 'Horror',
  },
  {
    id: 5,
    name: 'Grove Guardians',
    description:
      'A charming co-op puzzle game. Work together as forest spirits to heal a corrupted grove and restore its magic.',
    imageUrl:
      'https://drive.google.com/uc?export=view&id=IMAGE_ID_5',
    videoUrl:
      'https://drive.google.com/uc?export=download&id=VIDEO_ID_5',
    genre: 'Puzzle Co-op',
  },
  {
    id: 6,
    name: 'Iron Empire',
    description:
      'Lead your faction in a grand strategy game of conquest and diplomacy in a steampunk-inspired industrial age.',
    imageUrl:
      'https://drive.google.com/uc?export=view&id=IMAGE_ID_6',
    videoUrl:
      'https://drive.google.com/uc?export=download&id=VIDEO_ID_6',
    genre: 'Strategy',
  },
];

const GamesSection: React.FC = () => {
  return (
    <section id="games" className="py-20 md:py-28 bg-[#111111]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-glow">
            Our Games
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Discover our curated collection of immersive and unforgettable
            gaming experiences.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <GameCard key={game.id} game={game} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
