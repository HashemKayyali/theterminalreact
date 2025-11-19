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
  trailer: string;
  status: "new" | "hot" | "featured";
  tags: string[];
};

// ملاحظة: غيّر روابط الـ trailer لروابط Cloudinary تبعتك (video/mp4)
const games: Game[] = [
  {
    id: 1,
    title: "Arena",
    genre: "VR Battle Arena Simulator",
    platform: "In-store VR Rig",
    rating: 4.9,
    playersOnline: "6 seats",
    thumbnail:
      "https://images.pexels.com/photos/9072388/pexels-photo-9072388.jpeg?auto=compress&cs=tinysrgb&w=1200",
    trailer: "https://www.w3schools.com/html/mov_bbb.mp4",
    status: "hot",
    tags: ["PvP Arena", "Party Mode", "High Intensity"],
  },
  {
    id: 2,
    title: "360",
    genre: "360° VR Experience",
    platform: "Full Rotation Platform",
    rating: 4.8,
    playersOnline: "1 player",
    thumbnail:
      "https://images.pexels.com/photos/9071750/pexels-photo-9071750.jpeg?auto=compress&cs=tinysrgb&w=1200",
    trailer: "https://www.w3schools.com/html/movie.mp4",
    status: "featured",
    tags: ["360° Motion", "Cinematic", "Immersive"],
  },
  {
    id: 3,
    title: "Racing",
    genre: "VR Racing Cockpit",
    platform: "Racing Simulator",
    rating: 4.7,
    playersOnline: "2 seats",
    thumbnail:
      "https://images.pexels.com/photos/9071828/pexels-photo-9071828.jpeg?auto=compress&cs=tinysrgb&w=1200",
    trailer: "https://www.w3schools.com/html/mov_bbb.mp4",
    status: "hot",
    tags: ["Force Feedback", "Time Attack", "Drift Mode"],
  },
  {
    id: 4,
    title: "Slider",
    genre: "VR Sliding Adventure",
    platform: "Motion Slider Rig",
    rating: 4.6,
    playersOnline: "1 player",
    thumbnail:
      "https://images.pexels.com/photos/9072384/pexels-photo-9072384.jpeg?auto=compress&cs=tinysrgb&w=1200",
    trailer: "https://www.w3schools.com/html/movie.mp4",
    status: "new",
    tags: ["Family Friendly", "Kids Mode", "Adventure"],
  },
  {
    id: 5,
    title: "Chair",
    genre: "Dynamic VR Chair",
    platform: "Motion VR Chair",
    rating: 4.5,
    playersOnline: "1 player",
    thumbnail:
      "https://images.pexels.com/photos/9071759/pexels-photo-9071759.jpeg?auto=compress&cs=tinysrgb&w=1200",
    trailer: "https://www.w3schools.com/html/mov_bbb.mp4",
    status: "featured",
    tags: ["Horror Mode", "Flight Sim", "Roller Coaster"],
  },
  {
    id: 6,
    title: "Walk",
    genre: "Free-Roam VR Walking",
    platform: "Room-scale VR",
    rating: 4.9,
    playersOnline: "Up to 4",
    thumbnail:
      "https://images.pexels.com/photos/9071733/pexels-photo-9071733.jpeg?auto=compress&cs=tinysrgb&w=1200",
    trailer: "https://www.w3schools.com/html/movie.mp4",
    status: "new",
    tags: ["Zombie Mode", "Co-op", "Exploration"],
  },
];

const statusLabel: Record<Game["status"], string> = {
  hot: "🔥 Hot Simulator",
  new: "✨ New Experience",
  featured: "⭐ Fan Favorite",
};

const GamesSection: React.FC = () => {
  return (
    <section className="games-section">
      <div className="games-header">
        <div>
          <p className="eyebrow">
            <Sparkles size={16} />
            VR Simulators
          </p>
          <h2 className="games-title">Step into the PixelRealm VR</h2>
          <p className="games-subtitle">
            Six insane VR simulators, high-motion rigs, and full 360° immersion
            built for your arcade experience.
          </p>
        </div>

        <div className="games-stats">
          <div className="games-stat-card">
            <Gamepad2 size={18} />
            <div>
              <span className="games-stat-label">Simulators</span>
              <strong className="games-stat-value">6 Rigs</strong>
            </div>
          </div>
          <div className="games-stat-card">
            <Users size={18} />
            <div>
              <span className="games-stat-label">Max players</span>
              <strong className="games-stat-value">15+ at once</strong>
            </div>
          </div>
        </div>
      </div>

      <div className="games-grid">
        {games.map((game, index) => (
          <motion.article
            key={game.id}
            className="game-card"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.07, duration: 0.45 }}
            whileHover={{ y: -10, scale: 1.02 }}
          >
            <div className="game-media">
              {/* صورة المحاكي */}
              <img
                src={game.thumbnail}
                alt={game.title}
                className="game-thumbnail"
                loading="lazy"
              />

              {/* فيديو الترايلر اللي يطلع على الـ hover */}
              <video
                className="game-video"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={game.trailer} type="video/mp4" />
              </video>

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
                  Capacity: {game.playersOnline}
                </span>
                <span className="game-meta-pill">
                  <Gamepad2 size={14} />
                  VR Simulator
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
                <button className="game-cta-primary">Book this rig</button>
                <button className="game-cta-secondary">Watch full demo</button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default GamesSection;
