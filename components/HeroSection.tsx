import React from "react";
import {
  Sparkles,
  Play,
  MapPin,
  Clock,
  ArrowDown,
  Gamepad2,
} from "lucide-react";
import heroBg from "../assets/hero-bg.png";

// VR headset image from Cloudinary
const VR_HEADSET_IMAGE =
  "https://res.cloudinary.com/dymhoaarh/image/upload/v1763597958/virtual-reality-vr01_rousc6.webp";

const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* ===== BACKGROUND (image + gradient + blur) ===== */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.65), rgba(0,0,0,0.85)), url(${heroBg})`,
            filter: "blur(2px)",
            transform: "scale(1.05)", // بسيط عشان ما تبين حواف الصورة
          }}
        />
        <div className="hero-noise-overlay pointer-events-none" />
      </div>

      {/* Glows */}
      <div className="pointer-events-none absolute -top-40 right-[-10%] h-[420px] w-[420px] rounded-full bg-gradient-to-br from-sky-500/25 via-indigo-500/25 to-emerald-400/25 blur-[90px] hero-orbit" />
      <div className="pointer-events-none absolute bottom-[-30%] left-[-5%] h-[360px] w-[360px] rounded-full bg-gradient-to-tr from-indigo-500/20 via-sky-500/20 to-emerald-400/10 blur-[100px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-20 lg:pt-32 lg:pb-24">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          {/* ===== LEFT: TEXT ===== */}
          <div className="w-full lg:w-3/5 animate-hero-fade">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 mb-5 backdrop-blur-md hero-chip">
              <Sparkles className="h-3.5 w-3.5 text-sky-300" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-gray-200">
                Immersive VR Arcade • Amman
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight text-white mb-4 hero-title">
              Step inside
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-emerald-300">
                The Terminal VR
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-xl mb-7">
              High-end VR simulators with 360° motion, racing, horror and
              free-walk experiences. Feel your games turn into fully immersive
              worlds all around you.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-7">
              <a
                href="#booking"
                className="relative inline-flex items-center gap-2 rounded-full border border-emerald-400/80 bg-gradient-to-r from-emerald-500 via-sky-500 to-indigo-500 px-6 py-2.5 text-sm sm:text-base font-semibold text-white shadow-[0_0_30px_rgba(52,211,153,0.9)] hover:scale-105 transition-transform duration-150"
              >
                <span className="absolute -inset-0.5 rounded-full bg-emerald-400/30 blur-lg" />
                <span className="relative flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Book your session now
                </span>
              </a>

              <a
                href="#games"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-5 py-2.5 text-sm sm:text-base font-medium text-gray-100 hover:bg-white/10 transition-colors"
              >
                <Play className="h-4 w-4 text-sky-300" />
                Explore simulators
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-gray-200">
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-black/50 border border-white/10 backdrop-blur-md">
                <Gamepad2 className="h-4 w-4 text-sky-300" />
                <div>
                  <div className="font-semibold text-white">6 VR simulators</div>
                  <div className="text-[11px] text-gray-400">
                    Arena • Racing • 360 • Chair • Slider • Walk
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-black/50 border border-white/10 backdrop-blur-md">
                <Clock className="h-4 w-4 text-emerald-300" />
                <div>
                  <div className="font-semibold text-white">30 - 60 min sessions</div>
                  <div className="text-[11px] text-gray-400">
                    Perfect for squads & parties
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-black/50 border border-white/10 backdrop-blur-md">
                <MapPin className="h-4 w-4 text-indigo-300" />
                <div>
                  <div className="font-semibold text-white">Amman • Jordan</div>
                  <div className="text-[11px] text-gray-400">
                    The Terminal VR Arcade
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ===== RIGHT: VR CARD ===== */}
          <div className="w-full lg:w-2/5">
            <div className="relative hero-card-container">
              <div className="hero-card-glow" />

              <div className="hero-card">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-400/18 border border-emerald-300/60">
                      <Gamepad2 className="h-4 w-4 text-emerald-300" />
                    </span>
                    <div className="leading-tight">
                      <p className="text-[11px] uppercase tracking-[0.2em] text-emerald-200/80">
                        Hardware
                      </p>
                      <p className="text-sm font-semibold text-white">
                        Pro VR headset & motion rig
                      </p>
                    </div>
                  </div>

                  <span className="rounded-full bg-emerald-400/15 border border-emerald-300/50 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-emerald-200">
                    Real setup
                  </span>
                </div>

                <div className="relative overflow-hidden rounded-xl border border-white/8 bg-black/60 mb-3 hero-preview">
                  <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/35 via-sky-500/15 to-transparent mix-blend-screen" />
                  <div className="hero-preview-lines" />

                  <img
                    src={VR_HEADSET_IMAGE}
                    alt="VR Headset"
                    className="hero-vr-img"
                  />

                  <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center text-[11px] text-gray-100">
                    <div className="flex flex-col gap-0.5">
                      <span className="uppercase tracking-[0.18em] text-gray-300/90">
                        Terminal VR rig
                      </span>
                      <span className="text-[10px] text-gray-300">
                        High-refresh headset • Motion platform • Spatial audio
                      </span>
                    </div>
                    <span className="rounded-full bg-black/60 border border-emerald-300/60 px-2 py-1 text-[10px] text-emerald-200">
                      Ready to play
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-3 text-[11px] text-gray-300">
                  <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                    <p className="text-gray-400 mb-0.5">Field of view</p>
                    <p className="text-sm font-semibold text-white">
                      Wide & immersive
                    </p>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                    <p className="text-gray-400 mb-0.5">Tracking</p>
                    <p className="text-sm font-semibold text-white">
                      6 DOF • room-scale
                    </p>
                  </div>
                </div>

                <button
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-emerald-400/80 bg-gradient-to-r from-emerald-500 via-sky-500 to-indigo-500 px-4 py-2 text-xs font-semibold text-white shadow-[0_0_24px_rgba(52,211,153,0.9)] hover:scale-[1.02] transition-transform duration-150"
                  onClick={() => {
                    const el = document.getElementById("booking");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <Play className="h-3.5 w-3.5" />
                  Start booking experience
                </button>
              </div>

              {/* Floating chips */}
              <div className="hero-floating-chip hero-floating-chip-1">
                <span className="dot" />
                98% of players would come again
              </div>
              <div className="hero-floating-chip hero-floating-chip-2">
                <span className="dot dot-sky" />
                Best played in squads of 3–4
              </div>
              <div className="hero-floating-chip hero-floating-chip-3">
                <span className="dot dot-emerald" />
                Average VR session: 25 minutes
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center text-gray-400 text-[11px] tracking-[0.22em] uppercase">
          <span>Scroll to explore</span>
          <div className="mt-2 h-8 w-[1px] bg-gradient-to-b from-transparent via-gray-500/70 to-transparent relative">
            <span className="absolute -top-1 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.9)] hero-scroll-dot" />
          </div>
          <ArrowDown className="h-3 w-3 mt-1 text-sky-300 hero-bounce" />
        </div>
      </div>

      {/* CSS */}
      <style>{`
        .hero-noise-overlay {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 160 160' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='4' stitchTiles='noStitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.12'/%3E%3C/svg%3E");
          opacity: 0.65;
          mix-blend-mode: soft-light;
          position: absolute;
          inset: 0;
        }

        .hero-orbit {
          animation: hero-orbit 18s linear infinite;
        }

        .hero-title {
          text-shadow: 0 0 35px rgba(15, 23, 42, 0.9);
        }

        .hero-card-container {
          position: relative;
          animation: hero-float 10s ease-in-out infinite;
        }

        .hero-card-glow {
          position: absolute;
          inset: -18px;
          border-radius: 30px;
          background: conic-gradient(
            from 200deg,
            rgba(56, 189, 248, 0.35),
            rgba(129, 140, 248, 0.4),
            rgba(52, 211, 153, 0.5),
            rgba(56, 189, 248, 0.35)
          );
          opacity: 0.3;
          filter: blur(26px);
          z-index: -1;
        }

        .hero-card {
          position: relative;
          border-radius: 24px;
          border: 1px solid rgba(148, 163, 184, 0.2);
          background: radial-gradient(circle at top, rgba(15, 23, 42, 0.98), #020617 60%);
          box-shadow: 0 30px 80px rgba(15, 23, 42, 0.95);
          padding: 1.2rem 1.1rem 1.1rem;
          backdrop-filter: blur(18px);
        }

        .hero-preview {
          position: relative;
          overflow: hidden;
        }

        .hero-preview-lines::before,
        .hero-preview-lines::after {
          content: "";
          position: absolute;
          inset: 0;
          background-image: linear-gradient(
              to right,
              rgba(148, 163, 184, 0.22) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(148, 163, 184, 0.18) 1px,
              transparent 1px
            );
          background-size: 22px 22px;
          opacity: 0.3;
          mix-blend-mode: soft-light;
        }

        .hero-vr-img {
          width: 100%;
          height: 220px;
          object-fit: cover;
          display: block;
          filter: saturate(1.15);
          transform-origin: center;
          transition:
            transform 260ms ease-out,
            filter 260ms ease-out;
        }

        .hero-card:hover .hero-vr-img {
          transform: scale(1.04);
          filter: saturate(1.35);
        }

        .hero-chip {
          animation: hero-fade 1.1s ease-out forwards;
        }

        .hero-floating-chip {
          position: absolute;
          font-size: 10px;
          color: #e5e7eb;
          background: rgba(15, 23, 42, 0.96);
          border-radius: 999px;
          border: 1px solid rgba(148, 163, 184, 0.6);
          padding: 0.35rem 0.7rem 0.35rem 0.45rem;
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          backdrop-filter: blur(10px);
          box-shadow: 0 18px 40px rgba(15, 23, 42, 0.9);
          animation: hero-float-chip 7s.ease-in-out infinite;
        }

        .hero-floating-chip .dot {
          display: inline-block;
          width: 7px;
          height: 7px;
          border-radius: 999px;
          background: rgba(244, 244, 245, 1);
        }

        .hero-floating-chip .dot-sky {
          background: rgba(56, 189, 248, 1);
          box-shadow: 0 0 10px rgba(56, 189, 248, 0.9);
        }

        .hero-floating-chip .dot-emerald {
          background: rgba(52, 211, 153, 1);
          box-shadow: 0 0 10px rgba(52, 211, 153, 0.9);
        }

        .hero-floating-chip-1 {
          top: 10%;
          right: -8%;
          animation-delay: 0s;
        }

        .hero-floating-chip-2 {
          bottom: 16%;
          right: -2%;
          animation-delay: 1.2s;
        }

        .hero-floating-chip-3 {
          top: 38%;
          left: -10%;
          animation-delay: 2.1s;
        }

        .hero-scroll-dot {
          animation: hero-scroll-pulse 1.6s.ease-out infinite;
        }

        .hero-bounce {
          animation: hero-bounce 1.6s.ease-in-out infinite;
        }

        @keyframes hero-orbit {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        @keyframes hero-float {
          0%,100% { transform: translateY(0px); }
          50%     { transform: translateY(-8px); }
        }

        @keyframes hero-fade {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes hero-float-chip {
          0%,100% { transform: translateY(0px) translateX(0px); }
          50%     { transform: translateY(-6px) translateX(3px); }
        }

        @keyframes hero-scroll-pulse {
          0%   { transform: translateY(0);  opacity: 1; }
          100% { transform: translateY(10px); opacity: 0; }
        }

        @keyframes hero-bounce {
          0%,100% { transform: translateY(0); }
          50%     { transform: translateY(4px); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
