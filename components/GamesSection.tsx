import React from "react";
import { motion } from "framer-motion";
import { Gamepad2, Flame, Star, Sparkles, Users } from "lucide-react";
import "./GameSection.css";

type Game = {
  id: number;
  title: string;
  genre: string;
  platform: string;
  rating: number;
  playersOnline: string;
  thumbnail: string;
  status: "new" | "hot" | "featured";
  tags: string[];
};

const games: Game[] = [
  {
    id: 1,
    title: "Neon Rift: Tokyo Nights",
    genre: "Cyberpunk Shooter",
    platform: "PC / PS5 / Xbox",
    rating: 4.9,
    playersOnline: "12.3K",
    thumbnail:
      "https://images.pexels.com/photos/9072388/pexels-photo-9072388.jpeg?auto=compress&cs=tinysrgb&w=1200",
    status: "hot",
    tags: ["Ranked", "Crossplay", "4v4 Arena"],
  },
  {
    id: 2,
    title: "Pixel Legends Online",
    genre: "Fantasy RPG",
    platform: "PC / Switch",
    rating: 4.7,
    playersOnline: "8.4K",
    thumbnail:
      "https://images.pexels.com/photos/9071749/pexels-photo-9071749.jpeg?auto=compress&cs=tinysrgb&w=1200",
    status: "featured",
    tags: ["Co-op", "Raids", "Open World"],
  },
  {
    id: 3,
    title: "Zero Gravity Drift",
    genre: "Sci-Fi Racing",
    platform: "PC / PS5",
    rating: 4.5,
    playersOnline: "3.1K",
    thumbnail:
      "https://images.pexels.com/photos/9071828/pexels-photo-9071828.jpeg?auto=compress&cs=tinysrgb&w=1200",
    status: "new",
    tags: ["Time Attack", "Online PvP"],
  },
];

const statusLabel: Record<Game["status"], string> = {
  hot: "🔥 Trending",
  new: "✨ New Drop",
  featured: "⭐ Featured",
};

const GameSection: React.FC = () => {
  return (
    <section className="games-section">
      <div className="games-header">
        <div>
          <p className="eyebrow">
            <Sparkles size={16} />
            Featured Games
          </p>
          <h2 className="games-title">Dive into the PixelRealm</h2>
          <p className="games-subtitle">
            Curated multiplayer titles with active communities, ranked ladders,
            and cross-platform support.
          </p>
        </div>

        <div className="games-stats">
          <div className="games-stat-card">
            <Gamepad2 size={18} />
            <div>
              <span className="games-stat-label">Live titles</span>
              <strong className="games-stat-value">36</strong>
            </div>
          </div>
          <div className="games-stat-card">
            <Users size={18} />
            <div>
              <span className="games-stat-label">Players online</span>
              <strong className="games-stat-value">52.4K</strong>
            </div>
          </div>
        </div>
      </div>

      <div className="games-grid">
        {games.map((game, index) => (
          <motion.article
            key={game.id}
            className="game-card"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08, duration: 0.4 }}
            whileHover={{ y: -6, scale: 1.01 }}
          >
            <div className="game-media">
              <img
                src={game.thumbnail}
                alt={game.title}
                className="game-thumbnail"
                loading="lazy"
              />
              <div className="game-media-overlay" />
              <div className="game-status-pill">
                {game.status === "hot" && <Flame size={14} />}
                {game.status === "featured" && <Star size={14} />}
                {game.status === "new" && <Sparkles size={14} />}
                <span>{statusLabel[game.status]}</span>
              </div>
              <div className="game-rating-chip">
                <Star size={12} />
                <span>{game.rating.toFixed(1)}</span>
              </div>
            </div>

            <div className="game-body">
              <header className="game-header">
                <h3 className="game-title">{game.title}</h3>
                <span className="game-platform">{game.platform}</span>
              </header>

              <p className="game-genre">{game.genre}</p>

              <div className="game-meta">
                <span className="game-meta-pill">
                  <Users size={14} />
                  Live: {game.playersOnline}
                </span>
                <span className="game-meta-pill">
                  <Gamepad2 size={14} />
                  Multiplayer
                </span>
              </div>

              <div className="game-tags">
                {game.tags.map((tag) => (
                  <span className="game-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className="game-footer">
                <button className="game-cta-primary">Join Lobby</button>
                <button className="game-cta-secondary">View details</button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default GameSection;
