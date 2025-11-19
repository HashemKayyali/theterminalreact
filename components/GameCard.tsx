import React, { useEffect, useRef, useState } from 'react';
import type { Game } from '../types';

interface GameCardProps {
  game: Game;
  index: number;
}

const GameCard: React.FC<GameCardProps> = ({ game, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imgSrc, setImgSrc] = useState(game.imageUrl);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isHovered) {
      video.currentTime = 0;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }, [isHovered]);

  const showVideo = isHovered && !!game.videoUrl;

  return (
    <div
      className="bg-gray-900/50 rounded-lg overflow-hidden group transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 border border-gray-800"
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-56 overflow-hidden">
        {showVideo ? (
          <video
            ref={videoRef}
            src={game.videoUrl}
            className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          <img
            src={imgSrc}
            alt={game.name}
            className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
            onError={() => {
              setImgSrc(`https://picsum.photos/seed/game-${game.id}/600/400`);
            }}
          />
        )}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

        <div className="absolute bottom-0 left-0 p-4">
          <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
            {game.genre}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{game.name}</h3>
        <p className="text-gray-400 leading-relaxed">{game.description}</p>
      </div>
    </div>
  );
};

export default GameCard;
