// Next, React
import { FC, useState, useEffect, useCallback, useRef } from 'react';
import pkg from '../../../package.json';

// ❌ DO NOT EDIT ANYTHING ABOVE THIS LINE

export const HomeView: FC = () => {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      {/* HEADER – Frosted Glass Tabs */}
      <header className="flex items-center justify-center py-3">
        <div className="flex items-center gap-1 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 px-1.5 py-1 text-[11px]">
          <button className="rounded-full backdrop-blur-md bg-white/10 border border-white/20 px-3 py-1 font-semibold text-white shadow-lg">
            Feed
          </button>
          <button className="rounded-full px-3 py-1 text-white/40 hover:text-white/60 transition-colors">
            Casino
          </button>
          <button className="rounded-full px-3 py-1 text-white/40 hover:text-white/60 transition-colors">
            Kids
          </button>
        </div>
      </header>

      {/* MAIN – Vision Pro Glass Frame */}
      <main className="flex flex-1 items-center justify-center px-4 py-2">
        <div className="relative aspect-[9/16] w-full max-w-sm overflow-hidden rounded-[2.5rem] backdrop-blur-xl bg-white/5 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)]">
          {/* Glass Highlight */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

          {/* Dynamic Island Header */}
          <div className="relative z-10 flex items-center justify-center pt-2 pb-1">
            <div className="flex items-center gap-2 rounded-full backdrop-blur-xl bg-black/60 border border-white/10 px-3 py-1.5 shadow-lg">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-[9px] font-semibold uppercase tracking-widest text-white/80">Neon Arcade</span>
              <span className="text-[8px] text-white/40">#ScrollyGameJam</span>
            </div>
          </div>

          {/* Game Container */}
          <div className="absolute inset-0 top-[36px]">
            <GameSandbox />
          </div>
        </div>
      </main>

      {/* FOOTER – Minimal */}
      <footer className="flex h-4 items-center justify-center px-2 text-[8px] text-white/20">
        <span>v{pkg.version}</span>
      </footer>
    </div>
  );
};

// ============================================
// ✅ NEON ARCADE - Multi-Game Fantasy Console
// ============================================

// AUDIO ENGINE
class AudioEngine {
  private ctx: AudioContext | null = null;
  private getContext(): AudioContext {
    if (!this.ctx) this.ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    return this.ctx;
  }
  play(type: 'click' | 'drop' | 'perfect' | 'slice' | 'crash' | 'flip' | 'coin' | 'jackpot' | 'woosh') {
    try {
      const ctx = this.getContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      const now = ctx.currentTime;
      switch (type) {
        case 'click': osc.type = 'sine'; osc.frequency.setValueAtTime(150, now); osc.frequency.exponentialRampToValueAtTime(60, now + 0.03); gain.gain.setValueAtTime(0.3, now); gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04); osc.start(now); osc.stop(now + 0.04); break;
        case 'woosh': osc.type = 'sine'; osc.frequency.setValueAtTime(200, now); osc.frequency.exponentialRampToValueAtTime(800, now + 0.15); gain.gain.setValueAtTime(0.08, now); gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15); osc.start(now); osc.stop(now + 0.15); break;
        case 'drop': osc.type = 'sine'; osc.frequency.setValueAtTime(300, now); osc.frequency.exponentialRampToValueAtTime(100, now + 0.15); gain.gain.setValueAtTime(0.15, now); gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15); osc.start(now); osc.stop(now + 0.15); break;
        case 'perfect': osc.type = 'sine'; osc.frequency.setValueAtTime(523, now); osc.frequency.setValueAtTime(659, now + 0.1); osc.frequency.setValueAtTime(784, now + 0.2); gain.gain.setValueAtTime(0.12, now); gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3); osc.start(now); osc.stop(now + 0.3); break;
        case 'slice': osc.type = 'sawtooth'; osc.frequency.setValueAtTime(200, now); osc.frequency.exponentialRampToValueAtTime(50, now + 0.2); gain.gain.setValueAtTime(0.12, now); gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2); osc.start(now); osc.stop(now + 0.2); break;
        case 'crash': osc.type = 'sawtooth'; osc.frequency.setValueAtTime(150, now); osc.frequency.exponentialRampToValueAtTime(30, now + 0.4); gain.gain.setValueAtTime(0.2, now); gain.gain.exponentialRampToValueAtTime(0.01, now + 0.4); osc.start(now); osc.stop(now + 0.4); break;
        case 'flip': osc.type = 'square'; osc.frequency.setValueAtTime(200, now); osc.frequency.exponentialRampToValueAtTime(600, now + 0.08); gain.gain.setValueAtTime(0.1, now); gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1); osc.start(now); osc.stop(now + 0.1); break;
        case 'coin': osc.type = 'sine'; osc.frequency.setValueAtTime(988, now); osc.frequency.setValueAtTime(1319, now + 0.08); gain.gain.setValueAtTime(0.08, now); gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15); osc.start(now); osc.stop(now + 0.15); break;
        case 'jackpot': osc.type = 'sine'; [523, 659, 784, 1047, 784, 1047].forEach((freq, i) => osc.frequency.setValueAtTime(freq, now + i * 0.1)); gain.gain.setValueAtTime(0.15, now); gain.gain.exponentialRampToValueAtTime(0.01, now + 0.6); osc.start(now); osc.stop(now + 0.6); break;
      }
    } catch (e) {}
  }
}
const audio = new AudioEngine();

type ActiveGame = 'MENU' | 'ASCENT' | 'STACK' | 'GRAVITY';

const GameSandbox: FC = () => {
  const [activeGame, setActiveGame] = useState<ActiveGame>('MENU');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const launchGame = (game: ActiveGame) => {
    audio.play('woosh');
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveGame(game);
      setTimeout(() => setIsTransitioning(false), 200);
    }, 300);
  };

  const exitToMenu = () => {
    audio.play('click');
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveGame('MENU');
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      <style>{`
        @keyframes pulse { 0%, 100% { opacity: 0.8; } 50% { opacity: 1; } }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-3px); } }
        @keyframes dronePulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.1); } }
        @keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
        @keyframes gradientMove { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        @keyframes scaleIn { from { transform: scale(0.95) translateY(10px); opacity: 0; } to { transform: scale(1) translateY(0); opacity: 1; } }
        @keyframes slideIn { from { transform: translateX(100%); } to { transform: translateX(0); } }
        @keyframes slideOut { from { transform: translateX(0); } to { transform: translateX(-100%); } }
        @keyframes rgbSplit { 0% { text-shadow: -2px 0 #ff0000, 2px 0 #00ffff; } 50% { text-shadow: 2px 0 #ff0000, -2px 0 #00ffff; } 100% { text-shadow: -2px 0 #ff0000, 2px 0 #00ffff; } }
        @keyframes fallAway { 0% { transform: translateY(0) rotate(0deg); opacity: 1; } 100% { transform: translateY(100px) rotate(45deg); opacity: 0; } }
        @keyframes glitchFlash { 0%, 100% { filter: none; } 25% { filter: hue-rotate(90deg); } 50% { filter: hue-rotate(180deg); } 75% { filter: hue-rotate(270deg); } }
        @keyframes perfectPulse { 0% { transform: scale(1); } 50% { transform: scale(1.2); } 100% { transform: scale(1); } }
        @keyframes jackpotGlow { 0%, 100% { box-shadow: 0 0 20px #ffd700, 0 0 40px #ffd700; } 50% { box-shadow: 0 0 40px #ffd700, 0 0 80px #ffd700; } }
        @keyframes countPulse { 0% { transform: scale(1.5); opacity: 1; } 100% { transform: scale(1); opacity: 0.8; } }
        @keyframes orbitGlow { 0% { transform: rotate(0deg) translateX(60px) rotate(0deg); } 100% { transform: rotate(360deg) translateX(60px) rotate(-360deg); } }
        @keyframes breathe { 0%, 100% { transform: scale(1); box-shadow: 0 0 20px currentColor; } 50% { transform: scale(1.02); box-shadow: 0 0 30px currentColor, 0 0 60px currentColor; } }
        @keyframes orbFloat { 0%, 100% { transform: translateY(0) scale(1); } 50% { transform: translateY(-8px) scale(1.05); } }
        @keyframes glassShine { 0% { transform: translateX(-100%) rotate(45deg); } 100% { transform: translateX(200%) rotate(45deg); } }
        @keyframes springBounce { 0% { transform: scale(0.9); } 50% { transform: scale(1.03); } 75% { transform: scale(0.98); } 100% { transform: scale(1); } }
        @keyframes iconPulse { 0%, 100% { filter: drop-shadow(0 0 8px currentColor); } 50% { filter: drop-shadow(0 0 16px currentColor) drop-shadow(0 0 32px currentColor); } }
        @keyframes ambientGlow { 0%, 100% { opacity: 0.2; transform: scale(1); } 50% { opacity: 0.5; transform: scale(1.08); } }
      `}</style>

      {isTransitioning && <div className="absolute inset-0 z-50 backdrop-blur-sm bg-white/10 pointer-events-none" style={{ transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }} />}

      <div className="absolute inset-0" style={{ opacity: isTransitioning ? 0 : 1, transform: isTransitioning ? 'scale(0.98)' : 'scale(1)', transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)' }}>
        {activeGame === 'MENU' && <ArcadeMenu onSelectGame={launchGame} />}
        {activeGame === 'ASCENT' && <GameAscent onExit={exitToMenu} />}
        {activeGame === 'STACK' && <GameStack onExit={exitToMenu} />}
        {activeGame === 'GRAVITY' && <GameGravity onExit={exitToMenu} />}
      </div>
    </div>
  );
};

// ============================================
// ARCADE MENU - Vision Pro Aesthetic
// ============================================

interface ArcadeMenuProps { onSelectGame: (game: ActiveGame) => void; }

const GAMES = [
  { id: 'ASCENT' as ActiveGame, name: 'NEON ASCENT', tag: 'RUNNER', color: '#00ffff', icon: '🚀', desc: 'Dodge obstacles at lightspeed' },
  { id: 'STACK' as ActiveGame, name: 'CYBER STACK', tag: 'ARCADE', color: '#a855f7', icon: '🏗️', desc: 'Stack blocks to the top' },
  { id: 'GRAVITY' as ActiveGame, name: 'GRAVITY GLITCH', tag: 'ACTION', color: '#f97316', icon: '🔄', desc: 'Flip gravity to survive' },
];

const ArcadeMenu: FC<ArcadeMenuProps> = ({ onSelectGame }) => {
  const [selected, setSelected] = useState(0);
  const [dragStart, setDragStart] = useState<number | null>(null);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax effect on mouse/touch move
  const handleParallax = useCallback((clientX: number, clientY: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((clientY - rect.top) / rect.height - 0.5) * 20;
    setParallax({ x, y });
  }, []);

  // Rubber-band physics for swipe
  const handleDragMove = (clientX: number) => {
    if (dragStart === null) return;
    let diff = dragStart - clientX;
    // Rubber-band effect at edges
    if ((selected === 0 && diff < 0) || (selected === GAMES.length - 1 && diff > 0)) {
      diff = diff * 0.3; // Resistance at edges
    }
    setDragOffset(-diff);
  };

  const handleDragEnd = (clientX: number) => {
    if (dragStart === null) return;
    const diff = dragStart - clientX;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      audio.play('woosh');
      if (diff > 0 && selected < GAMES.length - 1) setSelected(s => s + 1);
      else if (diff < 0 && selected > 0) setSelected(s => s - 1);
    }

    setDragStart(null);
    setDragOffset(0);
    setIsDragging(false);
  };

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => { setDragStart(e.touches[0].clientX); setIsDragging(true); };
  const handleTouchMove = (e: React.TouchEvent) => { handleDragMove(e.touches[0].clientX); handleParallax(e.touches[0].clientX, e.touches[0].clientY); };
  const handleTouchEnd = (e: React.TouchEvent) => handleDragEnd(e.changedTouches[0].clientX);

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => { setDragStart(e.clientX); setIsDragging(true); };
  const handleMouseMove = (e: React.MouseEvent) => { handleDragMove(e.clientX); handleParallax(e.clientX, e.clientY); };
  const handleMouseUp = (e: React.MouseEvent) => handleDragEnd(e.clientX);
  const handleMouseLeave = () => { if (isDragging) handleDragEnd(dragStart || 0); setParallax({ x: 0, y: 0 }); };

  const game = GAMES[selected];

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 flex flex-col overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0a0a0f 0%, #000 100%)', cursor: isDragging ? 'grabbing' : 'grab' }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      {/* Parallax Background Layers */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ transform: `translate(${parallax.x * 0.5}px, ${parallax.y * 0.5}px)`, transition: isDragging ? 'none' : 'transform 0.3s ease-out' }}>
        <div className="absolute w-40 h-40 rounded-full blur-3xl opacity-15" style={{ background: game.color, top: '5%', left: '50%', transform: 'translateX(-50%)', transition: 'background 0.6s' }} />
        <div className="absolute w-32 h-32 rounded-full blur-2xl opacity-10" style={{ background: game.color, bottom: '20%', left: '20%', transition: 'background 0.6s' }} />
        <div className="absolute w-24 h-24 rounded-full blur-2xl opacity-10" style={{ background: game.color, top: '40%', right: '10%', transition: 'background 0.6s' }} />
      </div>

      {/* Header - Frosted Glass */}
      <div className="relative z-10 pt-1 px-3">
        <div className="flex items-center justify-between backdrop-blur-xl bg-white/5 rounded-full px-3 py-1.5 border border-white/10">
          <h1 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/80">Neon Arcade</h1>
          <div className="flex gap-2">
            {GAMES.map((g, i) => (
              <button
                key={g.id}
                onClick={(e) => { e.stopPropagation(); audio.play('click'); setSelected(i); }}
                className="relative w-2 h-2 rounded-full transition-all duration-500"
                style={{
                  background: i === selected ? g.color : 'rgba(255,255,255,0.15)',
                  transform: i === selected ? 'scale(1.4)' : 'scale(1)',
                  boxShadow: i === selected ? `0 0 12px ${g.color}, 0 0 24px ${g.color}50` : 'none',
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Main Card Area with Spring Physics */}
      <div className="flex-1 flex items-center justify-center px-4 py-3">
        <div
          className="relative w-full"
          style={{
            transform: `translateX(${dragOffset}px)`,
            transition: isDragging ? 'none' : 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
        >
          {/* Ambient Glow Behind Card */}
          <div
            className="absolute inset-0 rounded-[2rem] blur-2xl pointer-events-none"
            style={{
              background: game.color,
              animation: 'ambientGlow 4s ease-in-out infinite',
              transition: 'background 0.6s',
            }}
          />
          {/* Frosted Glass Card */}
          <div
            className="relative rounded-3xl overflow-hidden backdrop-blur-xl"
            style={{
              background: `linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)`,
              border: '1px solid rgba(255,255,255,0.15)',
              boxShadow: `0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.05) inset, 0 0 80px ${game.color}15`,
              animation: 'springBounce 0.5s ease-out',
              transform: `perspective(1000px) rotateY(${parallax.x * 0.1}deg) rotateX(${-parallax.y * 0.1}deg)`,
              transition: isDragging ? 'none' : 'transform 0.3s ease-out',
            }}
            key={game.id}
          >
            {/* Glass Shine Effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute inset-0 opacity-20" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 40%)' }} />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative p-4">
              {/* Floating Orb Icon */}
              <div className="flex justify-center mb-3">
                <div
                  className="relative flex items-center justify-center w-16 h-16 rounded-full backdrop-blur-xl"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, ${game.color}40 0%, ${game.color}10 60%, transparent 100%)`,
                    border: `1px solid ${game.color}30`,
                    boxShadow: `0 0 40px ${game.color}30, inset 0 0 20px ${game.color}20`,
                    animation: 'orbFloat 3s ease-in-out infinite',
                  }}
                >
                  <span className="text-3xl" style={{ filter: `drop-shadow(0 0 10px ${game.color})`, animation: 'iconPulse 2s ease-in-out infinite' }}>{game.icon}</span>
                </div>
              </div>

              {/* Tag Pill */}
              <div className="flex justify-center mb-2">
                <span className="px-2 py-0.5 rounded-full text-[8px] font-bold uppercase tracking-widest backdrop-blur-md" style={{
                  background: `${game.color}15`,
                  color: game.color,
                  border: `1px solid ${game.color}30`,
                }}>{game.tag}</span>
              </div>

              {/* Title */}
              <h2 className="text-xl font-black text-center tracking-tight mb-1" style={{ color: 'white' }}>{game.name}</h2>
              <p className="text-[11px] text-center text-white/40 mb-4 font-medium">{game.desc}</p>

              {/* Breathing Play Button */}
              <button
                onClick={(e) => { e.stopPropagation(); onSelectGame(game.id); }}
                className="w-full py-3 rounded-2xl font-bold text-sm uppercase tracking-widest transition-all active:scale-95"
                style={{
                  background: `linear-gradient(135deg, ${game.color} 0%, ${game.color}dd 100%)`,
                  color: '#000',
                  boxShadow: `0 4px 20px ${game.color}40`,
                  animation: 'breathe 3s ease-in-out infinite',
                }}
              >
                Play
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Pills */}
      <div className="relative z-10 flex justify-center gap-3 pb-3 px-4">
        {GAMES.map((g, i) => (
          <button
            key={g.id}
            onClick={(e) => { e.stopPropagation(); audio.play('click'); setSelected(i); }}
            className="flex-1 py-2 rounded-xl text-[9px] font-bold uppercase tracking-wider transition-all duration-300 backdrop-blur-xl"
            style={{
              background: i === selected ? `${g.color}20` : 'rgba(255,255,255,0.03)',
              border: i === selected ? `1px solid ${g.color}40` : '1px solid rgba(255,255,255,0.05)',
              color: i === selected ? g.color : 'rgba(255,255,255,0.3)',
              transform: i === selected ? 'scale(1.02)' : 'scale(1)',
            }}
          >
            {g.name.split(' ')[0]}
          </button>
        ))}
      </div>
    </div>
  );
};

// ============================================
// GAME 1: NEON ASCENT
// ============================================

interface GameProps { onExit: () => void; }

const GameAscent: FC<GameProps> = ({ onExit }) => {
  const LANE_WIDTH = 100 / 3, PLAYER_Y = 75;
  type Difficulty = "EASY" | "NORMAL" | "HARD";
  const CONFIGS = {
    EASY: { speed: 1.2, speedInc: 0.00005, maxSpeed: 6, obstacleRate: 3000, coinRate: 1200, droneEnabled: false, color: "#00ff88" },
    NORMAL: { speed: 1.8, speedInc: 0.00015, maxSpeed: 9, obstacleRate: 2200, coinRate: 1400, droneEnabled: true, color: "#00ffff" },
    HARD: { speed: 2.5, speedInc: 0.0003, maxSpeed: 12, obstacleRate: 1600, coinRate: 1600, droneEnabled: true, color: "#ff0040" },
  };
  const SKINS = [
    { id: "cyber", color: "#00ffff", unlock: 0 },
    { id: "gold", color: "#ffd700", unlock: 500 },
    { id: "glitch", color: "#ff0040", unlock: 1500 },
    { id: "phantom", color: "#ffffff", unlock: -1 },
  ];
  const TAUNTS = ["AI: OPTIMIZING...", "AI: DEPLOYING...", "AI: CRITICAL...", "AI: PURSUIT..."];

  const [gameState, setGameState] = useState<"menu" | "playing" | "gameover">("menu");
  const [difficulty, setDifficulty] = useState<Difficulty>("NORMAL");
  const [score, setScore] = useState(0);
  const [highScores, setHighScores] = useState({ EASY: 0, NORMAL: 0, HARD: 0 });
  const [totalScore, setTotalScore] = useState(0);
  const [playerLane, setPlayerLane] = useState(1);
  const [obstacles, setObstacles] = useState<Array<{ id: number; lane: number; y: number; type: string; startLane: number; time: number }>>([]);
  const [coins, setCoins] = useState<Array<{ id: number; lane: number; y: number }>>([]);
  const [speed, setSpeed] = useState(1.8);
  const [combo, setCombo] = useState(0);
  const [lastCoinTime, setLastCoinTime] = useState(0);
  const [selectedSkin, setSelectedSkin] = useState("cyber");
  const [unlockedSkins, setUnlockedSkins] = useState(["cyber"]);
  const [hasPlayedHard, setHasPlayedHard] = useState(false);
  const [aiMessage, setAiMessage] = useState<string | null>(null);
  const [flash, setFlash] = useState(false);
  const [shakeX, setShakeX] = useState(0);

  const frameRef = useRef(0), lastTimeRef = useRef(0), idRef = useRef(0);
  const timersRef = useRef({ obstacle: 0, coin: 0, drone: 0, taunt: 0 });
  const animRef = useRef<number>();

  const config = CONFIGS[difficulty];
  const currentSkin = SKINS.find(s => s.id === selectedSkin) || SKINS[0];

  useEffect(() => {
    try {
      const saved = localStorage.getItem("neon_ascent_v2");
      if (saved) { const d = JSON.parse(saved); setHighScores(d.highScores || {}); setTotalScore(d.totalScore || 0); setUnlockedSkins(d.unlockedSkins || ["cyber"]); setSelectedSkin(d.selectedSkin || "cyber"); setHasPlayedHard(d.hasPlayedHard || false); }
    } catch {}
  }, []);

  const saveData = (hs: typeof highScores, ts: number, us: string[], hp: boolean) => {
    try { localStorage.setItem("neon_ascent_v2", JSON.stringify({ highScores: hs, totalScore: ts, unlockedSkins: us, selectedSkin, hasPlayedHard: hp })); } catch {}
  };

  const startGame = () => { setGameState("playing"); setScore(0); setPlayerLane(1); setObstacles([]); setCoins([]); setSpeed(config.speed); setCombo(0); setAiMessage(null); lastTimeRef.current = performance.now(); timersRef.current = { obstacle: 0, coin: 0, drone: 0, taunt: 0 }; frameRef.current = 0; };

  const endGame = () => {
    audio.play('crash'); setGameState("gameover"); setFlash(true); setTimeout(() => setFlash(false), 200);
    const fs = Math.floor(score); let nh = { ...highScores }; if (fs > highScores[difficulty]) { nh[difficulty] = fs; setHighScores(nh); }
    const nt = totalScore + fs; setTotalScore(nt); const hp = hasPlayedHard || difficulty === "HARD"; setHasPlayedHard(hp);
    const nu = [...unlockedSkins]; SKINS.forEach(s => { if (!nu.includes(s.id) && s.unlock >= 0 && nt >= s.unlock) nu.push(s.id); if (s.id === "phantom" && hp && !nu.includes(s.id)) nu.push(s.id); }); setUnlockedSkins(nu);
    saveData(nh, nt, nu, hp);
  };

  const moveLane = (dir: -1 | 1) => { if (gameState !== "playing") return; setPlayerLane(l => Math.max(0, Math.min(2, l + dir))); setShakeX(dir * 3); setTimeout(() => setShakeX(0), 50); };

  const update = useCallback((time: number) => {
    if (gameState !== "playing") { animRef.current = requestAnimationFrame(update); return; }
    const dt = time - lastTimeRef.current; lastTimeRef.current = time; frameRef.current++;
    setSpeed(s => Math.min(s + config.speedInc * dt, config.maxSpeed)); setScore(s => s + speed * 0.008);
    timersRef.current.obstacle += dt; timersRef.current.coin += dt; timersRef.current.drone += dt; timersRef.current.taunt += dt;
    if (timersRef.current.obstacle > config.obstacleRate / (speed * 0.5 + 1)) { timersRef.current.obstacle = 0; const l = Math.floor(Math.random() * 3); setObstacles(p => [...p, { id: idRef.current++, lane: l, y: -10, type: "wall", startLane: l, time }]); }
    if (config.droneEnabled && timersRef.current.drone > 8000 / (speed * 0.3 + 1)) { timersRef.current.drone = 0; const l = Math.floor(Math.random() * 3); setObstacles(p => [...p, { id: idRef.current++, lane: l, y: -10, type: "drone", startLane: l, time }]); }
    if (timersRef.current.coin > config.coinRate / (speed * 0.4 + 1)) { timersRef.current.coin = 0; const l = Math.floor(Math.random() * 3); setCoins(p => [...p, { id: idRef.current++, lane: l, y: -10 }]); }
    if (difficulty === "HARD" && timersRef.current.taunt > 12000) { timersRef.current.taunt = 0; setAiMessage(TAUNTS[Math.floor(Math.random() * TAUNTS.length)]); setTimeout(() => setAiMessage(null), 2000); }
    const ma = (speed * dt) / 18;
    setObstacles(p => {
      const n = p.map(o => { let nl = o.lane; if (o.type === "drone") { const e = (time - o.time) / 1000; nl = o.startLane + Math.sin(e * 2.5) * 0.8; nl = Math.max(0, Math.min(2, nl)); } return { ...o, y: o.y + ma, lane: nl }; }).filter(o => o.y < 110);
      for (const o of n) { const dy = Math.abs(o.y - PLAYER_Y), oc = (o.lane + 0.5) * LANE_WIDTH, pc = (playerLane + 0.5) * LANE_WIDTH, dx = Math.abs(oc - pc); if (dy < 6 && dx < LANE_WIDTH * 0.45) { setTimeout(endGame, 10); break; } }
      return n;
    });
    setCoins(p => p.map(c => ({ ...c, y: c.y + ma })).filter(c => { const dy = Math.abs(c.y - PLAYER_Y); if (dy < 6 && c.lane === playerLane) { audio.play('coin'); const ic = time - lastCoinTime < 1500, nc = ic ? combo + 1 : 1; setCombo(nc); setLastCoinTime(time); setScore(s => s + 10 * nc); return false; } return c.y < 110; }));
    animRef.current = requestAnimationFrame(update);
  }, [gameState, speed, config, difficulty, playerLane, combo, lastCoinTime]);

  useEffect(() => { animRef.current = requestAnimationFrame(update); return () => { if (animRef.current) cancelAnimationFrame(animRef.current); }; }, [update]);
  useEffect(() => { const h = (e: KeyboardEvent) => { if (e.key === "ArrowLeft" || e.key === "a") moveLane(-1); if (e.key === "ArrowRight" || e.key === "d") moveLane(1); if (e.key === " " && gameState !== "playing") startGame(); if (e.key === "Escape") onExit(); }; window.addEventListener("keydown", h); return () => window.removeEventListener("keydown", h); }, [gameState, difficulty]);

  const handleTouch = (e: React.TouchEvent) => { const x = e.touches[0].clientX, r = e.currentTarget.getBoundingClientRect(), rx = x - r.left; if (gameState !== "playing") startGame(); else moveLane(rx < r.width / 2 ? -1 : 1); };
  const handleClick = (e: React.MouseEvent) => { const x = e.clientX, r = e.currentTarget.getBoundingClientRect(), rx = x - r.left; if (gameState !== "playing") startGame(); else moveLane(rx < r.width / 2 ? -1 : 1); };
  const go = (frameRef.current * speed * 0.3) % 40;

  return (
    <div className="absolute inset-0 overflow-hidden select-none touch-none" style={{ background: "linear-gradient(to bottom, #001122 0%, #000 100%)", transform: `translateX(${shakeX}px)` }} onTouchStart={handleTouch} onClick={handleClick}>
      <button onClick={(e) => { e.stopPropagation(); onExit(); }} className="absolute top-1 left-1 z-50 px-2 py-1 rounded bg-black/50 border border-white/20 text-[10px] text-white/60">←</button>
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: `linear-gradient(${currentSkin.color}40 1px, transparent 1px), linear-gradient(90deg, ${currentSkin.color}40 1px, transparent 1px)`, backgroundSize: "40px 40px", backgroundPosition: `0px ${go}px` }} />
      <div className="absolute top-1/4 left-1/2 w-32 h-32 rounded-full blur-3xl opacity-40" style={{ background: currentSkin.color, transform: "translateX(-50%)" }} />
      {[1, 2].map(i => <div key={i} className="absolute top-0 bottom-0 w-px opacity-20" style={{ left: `${i * LANE_WIDTH}%`, background: currentSkin.color }} />)}
      {/* Obstacles - styled barriers */}
      {obstacles.map(o => (
        <div key={o.id} className="absolute" style={{ left: `${(o.lane + 0.5) * LANE_WIDTH}%`, top: `${o.y}%`, transform: "translate(-50%, -50%)" }}>
          {o.type === "wall" ? (
            <div className="relative" style={{ width: '50px', height: '14px' }}>
              <div className="absolute inset-0 rounded-sm" style={{ background: `linear-gradient(180deg, ${currentSkin.color}40 0%, #000 50%, ${currentSkin.color}20 100%)`, border: `2px solid ${currentSkin.color}`, boxShadow: `0 0 12px ${currentSkin.color}, inset 0 0 8px ${currentSkin.color}40` }} />
              <div className="absolute inset-x-1 top-1 h-1 rounded-full opacity-60" style={{ background: currentSkin.color }} />
            </div>
          ) : (
            <div className="relative" style={{ width: '24px', height: '24px' }}>
              <div className="absolute inset-0 rounded-full" style={{ background: 'radial-gradient(circle at 30% 30%, #ff6666, #ff0040, #660020)', boxShadow: '0 0 15px #ff0040, 0 0 30px #ff004060', animation: 'dronePulse 0.4s infinite' }} />
              <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white">⚡</div>
            </div>
          )}
        </div>
      ))}
      {/* Coins - styled crystals */}
      {coins.map(c => (
        <div key={c.id} className="absolute" style={{ left: `${(c.lane + 0.5) * LANE_WIDTH}%`, top: `${c.y}%`, transform: "translate(-50%, -50%)", animation: "float 0.5s infinite" }}>
          <div className="relative" style={{ width: '16px', height: '16px' }}>
            <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #ffd700 0%, #ffaa00 50%, #ff8800 100%)', clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)', boxShadow: '0 0 10px #ffd700, 0 0 20px #ffd70060' }} />
            <div className="absolute inset-1" style={{ background: 'linear-gradient(135deg, #fff 0%, #ffd700 100%)', clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)', opacity: 0.6 }} />
          </div>
        </div>
      ))}
      {gameState !== "menu" && <div className="absolute" style={{ left: `${(playerLane + 0.5) * LANE_WIDTH}%`, top: `${PLAYER_Y}%`, transform: "translate(-50%, -50%)", transition: "left 0.08s" }}><div style={{ width: 0, height: 0, borderLeft: "12px solid transparent", borderRight: "12px solid transparent", borderBottom: `22px solid ${currentSkin.color}`, filter: `drop-shadow(0 0 8px ${currentSkin.color})` }} /><div className="absolute top-full left-1/2 w-0.5 h-4 -translate-x-1/2" style={{ background: `linear-gradient(to bottom, ${currentSkin.color}, transparent)`, animation: "pulse 0.3s infinite" }} /></div>}
      {/* Dynamic Island HUD */}
      {gameState === "playing" && (
        <div className="absolute top-1 left-1/2 -translate-x-1/2 flex items-center gap-2 backdrop-blur-xl bg-black/60 rounded-full px-3 py-1.5 border border-white/10 shadow-lg">
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: currentSkin.color, boxShadow: `0 0 6px ${currentSkin.color}` }} />
            <span className="text-lg font-black tabular-nums tracking-tighter" style={{ color: currentSkin.color }}>{Math.floor(score)}</span>
          </div>
          <div className="w-px h-4 bg-white/20" />
          <span className="text-[9px] font-bold text-white/50 tracking-wide uppercase">{speed.toFixed(1)}x</span>
          {combo > 1 && <>
            <div className="w-px h-4 bg-white/20" />
            <span className="text-[10px] font-black text-yellow-400 tracking-wide">{combo}x</span>
          </>}
        </div>
      )}
      {aiMessage && <div className="absolute top-16 left-1/2 -translate-x-1/2 w-4/5"><div className="bg-black/80 border border-red-500 rounded px-2 py-1 text-red-400 text-[10px] font-mono text-center" style={{ animation: "blink 0.5s infinite" }}>{aiMessage}</div></div>}
      {gameState === "menu" && <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 p-3" onClick={(e) => e.stopPropagation()}><h1 className="text-3xl font-black" style={{ color: currentSkin.color, textShadow: `0 0 20px ${currentSkin.color}` }}>NEON</h1><h2 className="text-xl font-black text-white italic -mt-1 tracking-widest" style={{ transform: "skewX(-10deg)" }}>ASCENT</h2><button onClick={(e) => { e.stopPropagation(); startGame(); }} className="mt-4 px-6 py-2 rounded-lg font-bold text-black text-base" style={{ background: currentSkin.color, boxShadow: `0 0 20px ${currentSkin.color}80` }}>TAP TO START</button><div className="mt-4 flex items-center gap-2"><button onClick={(e) => { e.stopPropagation(); audio.play('click'); setDifficulty(d => d === "EASY" ? "HARD" : d === "NORMAL" ? "EASY" : "NORMAL"); }} className="text-white/40 text-lg">◀</button><div className="text-center min-w-[80px]"><div className="font-bold text-base" style={{ color: config.color }}>{difficulty}</div></div><button onClick={(e) => { e.stopPropagation(); audio.play('click'); setDifficulty(d => d === "EASY" ? "NORMAL" : d === "NORMAL" ? "HARD" : "EASY"); }} className="text-white/40 text-lg">▶</button></div><div className="mt-3 flex gap-1.5">{SKINS.map(s => { const u = unlockedSkins.includes(s.id), sel = selectedSkin === s.id; return <button key={s.id} onClick={(e) => { e.stopPropagation(); if (u) setSelectedSkin(s.id); }} className={`w-8 h-8 rounded-lg border-2 flex items-center justify-center ${sel ? "scale-110" : ""} ${!u ? "opacity-40" : ""}`} style={{ borderColor: sel ? s.color : "rgba(255,255,255,0.2)", background: u ? `${s.color}30` : "#111" }}>{u ? <div style={{ width: 0, height: 0, borderLeft: "5px solid transparent", borderRight: "5px solid transparent", borderBottom: `8px solid ${s.color}` }} /> : <span className="text-[10px]">🔒</span>}</button>; })}</div>{highScores[difficulty] > 0 && <div className="mt-3 text-yellow-400/70 text-[11px]">🏆 {highScores[difficulty]}</div>}</div>}
      {gameState === "gameover" && <div className="absolute inset-0 flex flex-col items-center justify-center bg-red-900/50 p-3" onClick={(e) => e.stopPropagation()}><div className="bg-black/80 rounded-xl p-4 border border-red-500 w-full max-w-[90%] text-center"><h2 className="text-2xl font-black text-red-500">💀 CRASHED</h2><div className="text-4xl font-mono font-bold my-3 tracking-tighter" style={{ color: currentSkin.color }}>{Math.floor(score)}</div>{Math.floor(score) >= highScores[difficulty] && Math.floor(score) > 0 && <div className="text-yellow-400 text-xs mb-1 tracking-widest uppercase">⭐ New Best!</div>}<button onClick={(e) => { e.stopPropagation(); startGame(); }} className="w-full py-2 rounded-lg font-bold text-black text-sm" style={{ background: currentSkin.color }}>🔄 RETRY</button><button onClick={(e) => { e.stopPropagation(); onExit(); }} className="w-full mt-1.5 py-1.5 rounded-lg text-white/40 border border-white/20 text-sm">← MENU</button></div></div>}
      {flash && <div className="absolute inset-0 bg-red-500 opacity-50 pointer-events-none" />}
    </div>
  );
};

// ============================================
// GAME 2: CYBER STACK
// ============================================

const GameStack: FC<GameProps> = ({ onExit }) => {
  const [gameState, setGameState] = useState<'menu' | 'playing' | 'gameover' | 'jackpot'>('menu');
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [blocks, setBlocks] = useState<Array<{ width: number; x: number; perfect: boolean }>>([]);
  const [currentBlock, setCurrentBlock] = useState({ width: 60, x: 20, direction: 1 });
  const [speed, setSpeed] = useState(1.5);
  const [fallingPieces, setFallingPieces] = useState<Array<{ id: number; x: number; width: number; y: number; side: string }>>([]);
  const [perfectStreak, setPerfectStreak] = useState(0);
  const [showPerfect, setShowPerfect] = useState(false);
  const animRef = useRef<number>(); const pieceIdRef = useRef(0);
  const JACKPOT = 25, BH = 12;

  useEffect(() => { try { const s = localStorage.getItem("cyber_stack_v2"); if (s) setHighScore(parseInt(s)); } catch {} }, []);

  const startGame = () => { setGameState('playing'); setScore(0); setBlocks([{ width: 60, x: 50, perfect: false }]); setCurrentBlock({ width: 60, x: 20, direction: 1 }); setSpeed(1.5); setFallingPieces([]); setPerfectStreak(0); };

  const dropBlock = () => {
    if (gameState !== 'playing') return;
    const lb = blocks[blocks.length - 1], cl = currentBlock.x, cr = currentBlock.x + currentBlock.width, ll = lb.x - lb.width / 2, lr = lb.x + lb.width / 2;
    const ol = Math.max(cl, ll), or = Math.min(cr, lr), ov = or - ol;
    if (ov <= 0) { audio.play('crash'); setGameState('gameover'); if (score > highScore) { setHighScore(score); localStorage.setItem("cyber_stack_v2", score.toString()); } return; }
    const ip = Math.abs(ov - currentBlock.width) < 3, nw = ip ? currentBlock.width : Math.max(ov, 8), nx = (ol + or) / 2;
    if (!ip) { audio.play('slice'); const nf: typeof fallingPieces = []; if (cl < ll) nf.push({ id: pieceIdRef.current++, x: cl, width: ll - cl, y: 0, side: 'left' }); if (cr > lr) nf.push({ id: pieceIdRef.current++, x: lr, width: cr - lr, y: 0, side: 'right' }); setFallingPieces(p => [...p, ...nf]); setPerfectStreak(0); }
    else { audio.play('perfect'); setPerfectStreak(s => s + 1); setShowPerfect(true); setTimeout(() => setShowPerfect(false), 500); }
    const ns = score + 1;
    setBlocks(p => [...p.slice(-(JACKPOT - 1)), { width: nw, x: nx, perfect: ip }]); setCurrentBlock({ width: nw, x: 10, direction: 1 }); setScore(ns); setSpeed(s => Math.min(s + 0.08, 4));
    if (ns >= JACKPOT) { audio.play('jackpot'); setGameState('jackpot'); if (ns > highScore) { setHighScore(ns); localStorage.setItem("cyber_stack_v2", ns.toString()); } } else audio.play('drop');
  };

  useEffect(() => { if (gameState !== 'playing') return; const u = () => { setCurrentBlock(p => { let nx = p.x + p.direction * speed, nd = p.direction; if (nx + p.width > 95) { nx = 95 - p.width; nd = -1; } if (nx < 5) { nx = 5; nd = 1; } return { ...p, x: nx, direction: nd }; }); setFallingPieces(p => p.map(f => ({ ...f, y: f.y + 3 })).filter(f => f.y < 150)); animRef.current = requestAnimationFrame(u); }; animRef.current = requestAnimationFrame(u); return () => { if (animRef.current) cancelAnimationFrame(animRef.current); }; }, [gameState, speed]);
  useEffect(() => { const h = (e: KeyboardEvent) => { if (e.key === " ") { if (gameState === 'playing') dropBlock(); else startGame(); } if (e.key === "Escape") onExit(); }; window.addEventListener("keydown", h); return () => window.removeEventListener("keydown", h); }, [gameState, currentBlock, blocks, score]);

  const to = Math.max(0, (blocks.length - 8) * BH);

  return (
    <div className="absolute inset-0 overflow-hidden select-none touch-none" style={{ background: 'linear-gradient(to bottom, #1a0a2e 0%, #0d0015 100%)' }} onClick={gameState === 'playing' ? dropBlock : undefined} onTouchStart={gameState === 'playing' ? dropBlock : undefined}>
      <button onClick={onExit} className="absolute top-1 left-1 z-50 px-2 py-1 rounded bg-black/50 border border-white/20 text-[10px] text-white/60">←</button>
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#a855f720 1px, transparent 1px), linear-gradient(90deg, #a855f720 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
      {gameState === 'playing' && <div className="absolute left-0 right-0 flex items-center justify-center text-[10px] text-purple-400/50" style={{ top: `${100 - (JACKPOT - blocks.length) * 3 - 20}%` }}><div className="border-t border-dashed border-purple-400/30 flex-1 mx-2" /><span>JACKPOT</span><div className="border-t border-dashed border-purple-400/30 flex-1 mx-2" /></div>}
      {gameState === 'menu' && <div className="absolute inset-0 flex flex-col items-center justify-center p-4"><h1 className="text-3xl font-black" style={{ color: '#a855f7', textShadow: '0 0 20px #a855f7' }}>CYBER</h1><h2 className="text-xl font-black text-white italic -mt-1 tracking-widest">STACK</h2><p className="text-[10px] text-white/40 mt-2">Stack {JACKPOT} for JACKPOT</p><button onClick={startGame} className="mt-6 px-6 py-2 rounded-lg font-bold text-black" style={{ background: '#a855f7', boxShadow: '0 0 20px #a855f780' }}>TAP TO START</button>{highScore > 0 && <p className="mt-3 text-yellow-400/70 text-xs">🏆 {highScore}</p>}</div>}
      {gameState === 'playing' && <>
        {/* Dynamic Island HUD */}
        <div className="absolute top-1 left-1/2 -translate-x-1/2 flex items-center gap-2 backdrop-blur-xl bg-black/60 rounded-full px-3 py-1.5 border border-white/10 shadow-lg z-10">
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#a855f7', boxShadow: '0 0 6px #a855f7' }} />
            <span className="text-lg font-black tabular-nums tracking-tighter" style={{ color: '#a855f7' }}>{score}</span>
          </div>
          <div className="w-px h-4 bg-white/20" />
          <span className="text-[9px] font-bold text-white/50 tracking-wide uppercase">{JACKPOT - score} left</span>
          {showPerfect && <>
            <div className="w-px h-4 bg-white/20" />
            <span className="text-[10px] font-black text-yellow-400" style={{ animation: 'perfectPulse 0.5s' }}>PERFECT</span>
          </>}
        </div>
        <div className="absolute bottom-4 left-0 right-0" style={{ transform: `translateY(${to}px)` }}>{blocks.map((b, i) => <div key={i} className="absolute rounded" style={{ width: `${b.width}%`, height: `${BH}px`, left: `${b.x - b.width / 2}%`, bottom: `${i * BH}px`, background: b.perfect ? 'linear-gradient(90deg, #ffd700, #ffaa00)' : `linear-gradient(90deg, hsl(${270 + i * 5}, 80%, 50%), hsl(${280 + i * 5}, 80%, 40%))`, boxShadow: b.perfect ? '0 0 15px #ffd700' : `0 0 8px hsl(${275 + i * 5}, 80%, 50%)` }} />)}</div>{fallingPieces.map(p => <div key={p.id} className="absolute rounded opacity-70" style={{ width: `${p.width}%`, height: `${BH}px`, left: `${p.x}%`, bottom: `${blocks.length * BH - p.y}px`, background: '#a855f7', transform: `rotate(${p.side === 'left' ? -15 : 15}deg)`, animation: 'fallAway 0.5s forwards' }} />)}<div className="absolute rounded" style={{ width: `${currentBlock.width}%`, height: `${BH}px`, left: `${currentBlock.x}%`, bottom: `${blocks.length * BH + 4 - to}px`, background: 'linear-gradient(90deg, #e879f9, #a855f7)', boxShadow: '0 0 15px #a855f7' }} /></>}
      {gameState === 'gameover' && <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 p-4"><div className="bg-black/80 rounded-xl p-4 border border-purple-500 text-center"><h2 className="text-2xl font-black text-purple-400">TOWER FELL</h2><div className="text-4xl font-mono font-bold my-3 tracking-tighter" style={{ color: '#a855f7' }}>{score}</div>{score >= highScore && score > 0 && <p className="text-yellow-400 text-xs mb-2 tracking-widest uppercase">⭐ New Best!</p>}<button onClick={startGame} className="w-full py-2 rounded-lg font-bold text-black" style={{ background: '#a855f7' }}>🔄 RETRY</button><button onClick={onExit} className="w-full mt-2 py-1.5 rounded-lg text-white/40 border border-white/20 text-sm">← MENU</button></div></div>}
      {gameState === 'jackpot' && <div className="absolute inset-0 flex flex-col items-center justify-center bg-yellow-900/50 p-4"><div className="bg-black/80 rounded-xl p-6 border-2 border-yellow-400 text-center" style={{ animation: 'jackpotGlow 1s infinite' }}><h2 className="text-3xl font-black text-yellow-400" style={{ animation: 'rgbSplit 0.3s infinite' }}>🎰 JACKPOT!</h2><div className="text-5xl font-mono font-bold my-4 text-yellow-300 tracking-tighter">{score}</div><button onClick={startGame} className="w-full py-2 rounded-lg font-bold text-black bg-yellow-400">🔄 AGAIN</button><button onClick={onExit} className="w-full mt-2 py-1.5 rounded-lg text-white/40 border border-white/20 text-sm">← MENU</button></div></div>}
    </div>
  );
};

// ============================================
// GAME 3: GRAVITY GLITCH (Rewritten)
// ============================================

const GameGravity: FC<GameProps> = ({ onExit }) => {
  const [gameState, setGameState] = useState<'menu' | 'ready' | 'playing' | 'gameover'>('menu');
  const [countdown, setCountdown] = useState(3);
  const [highScore, setHighScore] = useState(0);
  const [tunnelRotation, setTunnelRotation] = useState(0);
  const [glitchEffect, setGlitchEffect] = useState(false);
  const [renderTick, setRenderTick] = useState(0);

  // Use refs for physics to avoid stale closure issues
  const physicsRef = useRef({ playerY: 50, velocity: 0, gravity: 1, distance: 0, gameSpeed: 1 });
  const obstaclesRef = useRef<Array<{ id: number; x: number; top: boolean; bottom: boolean }>>([]);
  const animRef = useRef<number>();
  const idRef = useRef(0);
  const lastSpawnRef = useRef(0);
  const startTimeRef = useRef(0);
  const gameStateRef = useRef(gameState);

  const PX = 15, PS = 12, SH = 15, GRACE_TIME = 1500;

  useEffect(() => { gameStateRef.current = gameState; }, [gameState]);
  useEffect(() => { try { const s = localStorage.getItem("gravity_glitch_v3"); if (s) setHighScore(parseInt(s)); } catch {} }, []);

  const startGame = () => {
    setGameState('ready');
    setCountdown(3);
    physicsRef.current = { playerY: 50, velocity: 0, gravity: 1, distance: 0, gameSpeed: 1 };
    obstaclesRef.current = [];
    setTunnelRotation(0);
    setGlitchEffect(false);
    idRef.current = 0;
    lastSpawnRef.current = 0;

    let c = 3;
    const iv = setInterval(() => {
      c--;
      setCountdown(c);
      if (c <= 0) {
        clearInterval(iv);
        startTimeRef.current = performance.now();
        setGameState('playing');
      }
    }, 600);
  };

  const flipGravity = () => {
    if (gameStateRef.current !== 'playing') return;
    audio.play('flip');
    physicsRef.current.gravity *= -1;
    physicsRef.current.velocity = 0; // Reset velocity on flip for snappy control
    setTunnelRotation(r => r + 180);
    setGlitchEffect(true);
    setTimeout(() => setGlitchEffect(false), 100);
  };

  const endGame = useCallback(() => {
    if (gameStateRef.current !== 'playing') return;
    audio.play('crash');
    setGameState('gameover');
    const fs = Math.floor(physicsRef.current.distance / 10);
    if (fs > highScore) { setHighScore(fs); localStorage.setItem("gravity_glitch_v3", fs.toString()); }
  }, [highScore]);

  useEffect(() => {
    if (gameState !== 'playing') return;

    let lastTime = performance.now();

    const update = (time: number) => {
      if (gameStateRef.current !== 'playing') return;

      const dt = Math.min(time - lastTime, 32); // Cap delta time
      lastTime = time;
      const elapsed = time - startTimeRef.current;
      const isInGrace = elapsed < GRACE_TIME;

      const p = physicsRef.current;

      // Apply gravity to velocity
      p.velocity += p.gravity * 0.15 * (dt / 16);
      p.velocity = Math.max(-4, Math.min(4, p.velocity)); // Clamp velocity

      // Apply velocity to position
      p.playerY += p.velocity * (dt / 16);

      // Boundary collision
      const topBound = SH + 3;
      const bottomBound = 100 - SH - 3;

      if (p.playerY < topBound) {
        p.playerY = topBound;
        if (!isInGrace) { endGame(); return; }
        p.velocity = 0;
      }
      if (p.playerY > bottomBound) {
        p.playerY = bottomBound;
        if (!isInGrace) { endGame(); return; }
        p.velocity = 0;
      }

      // Update distance and speed
      p.distance += p.gameSpeed * (dt / 16);
      if (p.distance > 500 && p.gameSpeed < 2) {
        p.gameSpeed = Math.min(p.gameSpeed + 0.0005 * dt, 2);
      }

      // Spawn obstacles after grace period
      if (!isInGrace && time - lastSpawnRef.current > 1800 / p.gameSpeed) {
        lastSpawnRef.current = time;
        const hasTop = Math.random() > 0.4;
        const hasBottom = Math.random() > 0.4 || !hasTop;
        obstaclesRef.current.push({ id: idRef.current++, x: 105, top: hasTop, bottom: hasBottom });
      }

      // Update obstacles and check collisions
      const obs = obstaclesRef.current;
      for (let i = obs.length - 1; i >= 0; i--) {
        obs[i].x -= p.gameSpeed * 0.8 * (dt / 16);

        // Remove off-screen
        if (obs[i].x < -10) { obs.splice(i, 1); continue; }

        // Collision check (only after grace)
        if (!isInGrace && obs[i].x > PX - 5 && obs[i].x < PX + 5) {
          const spikeHeight = 12;
          if (obs[i].top && p.playerY < SH + spikeHeight + 4) { endGame(); return; }
          if (obs[i].bottom && p.playerY > 100 - SH - spikeHeight - 4) { endGame(); return; }
        }
      }

      // Trigger re-render
      setRenderTick(t => t + 1);
      animRef.current = requestAnimationFrame(update);
    };

    animRef.current = requestAnimationFrame(update);
    return () => { if (animRef.current) cancelAnimationFrame(animRef.current); };
  }, [gameState, endGame]);

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === " ") {
        if (gameState === 'playing') flipGravity();
        else if (gameState === 'menu' || gameState === 'gameover') startGame();
      }
      if (e.key === "Escape") onExit();
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [gameState]);

  const handleTap = () => {
    if (gameState === 'playing') flipGravity();
    else if (gameState === 'menu' || gameState === 'gameover') startGame();
  };

  return (
    <div
      className="absolute inset-0 overflow-hidden select-none touch-none"
      style={{ background: 'linear-gradient(to bottom, #1a0800 0%, #0d0500 100%)', filter: glitchEffect ? 'hue-rotate(180deg) saturate(2)' : 'none', transition: 'filter 0.1s' }}
      onClick={handleTap}
      onTouchStart={handleTap}
    >
      <button onClick={(e) => { e.stopPropagation(); onExit(); }} className="absolute top-1 left-1 z-50 px-2 py-1 rounded bg-black/50 border border-white/20 text-[10px] text-white/60">←</button>

      {/* Tunnel */}
      <div className="absolute inset-0 transition-transform duration-300" style={{ transform: `perspective(500px) rotateX(${tunnelRotation}deg)` }}>
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'linear-gradient(#ff880040 1px, transparent 1px), linear-gradient(90deg, #ff880040 1px, transparent 1px)', backgroundSize: '25px 25px', backgroundPosition: `${-physicsRef.current.distance % 25}px 0` }} />
      </div>

      {/* Ceiling */}
      <div className="absolute top-0 left-0 right-0" style={{ height: `${SH}%`, background: 'linear-gradient(to bottom, #ff8800, #331a00)' }}>
        <div className="absolute bottom-0 left-0 right-0 h-2" style={{ background: 'repeating-linear-gradient(90deg, transparent 0px, transparent 8px, #ff8800 8px, #ff8800 16px)' }} />
      </div>

      {/* Floor */}
      <div className="absolute bottom-0 left-0 right-0" style={{ height: `${SH}%`, background: 'linear-gradient(to top, #ff8800, #331a00)' }}>
        <div className="absolute top-0 left-0 right-0 h-2" style={{ background: 'repeating-linear-gradient(90deg, transparent 0px, transparent 8px, #ff8800 8px, #ff8800 16px)' }} />
      </div>

      {gameState === 'menu' && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
          <h1 className="text-2xl font-black" style={{ color: '#ff8800', textShadow: '0 0 20px #ff8800' }}>GRAVITY</h1>
          <h2 className="text-xl font-black text-white italic -mt-1 tracking-widest">GLITCH</h2>
          <p className="text-[10px] text-white/40 mt-2">Tap to flip gravity</p>
          <button onClick={startGame} className="mt-6 px-6 py-2 rounded-lg font-bold text-black" style={{ background: '#ff8800', boxShadow: '0 0 20px #ff880080' }}>TAP TO START</button>
          {highScore > 0 && <p className="mt-3 text-yellow-400/70 text-xs">🏆 {highScore}</p>}
        </div>
      )}

      {gameState === 'ready' && (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-6xl font-black" style={{ color: '#ff8800', textShadow: '0 0 30px #ff8800', animation: 'countPulse 0.8s ease-out' }} key={countdown}>
            {countdown > 0 ? countdown : 'GO!'}
          </div>
          <p className="text-white/40 text-sm mt-2">GET READY</p>
        </div>
      )}

      {(gameState === 'playing' || gameState === 'ready') && (
        <>
          {/* Dynamic Island HUD */}
          <div className="absolute top-1 left-1/2 -translate-x-1/2 flex items-center gap-2 backdrop-blur-xl bg-black/60 rounded-full px-3 py-1.5 border border-white/10 shadow-lg z-10">
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#ff8800', boxShadow: '0 0 6px #ff8800' }} />
              <span className="text-lg font-black tabular-nums tracking-tighter" style={{ color: '#ff8800' }}>{Math.floor(physicsRef.current.distance / 10)}</span>
            </div>
            <div className="w-px h-4 bg-white/20" />
            <span className="text-[9px] font-bold text-white/50 tracking-wide uppercase">{physicsRef.current.gameSpeed.toFixed(1)}x</span>
            <div className="w-px h-4 bg-white/20" />
            <span className="text-[9px] font-bold tracking-wide" style={{ color: physicsRef.current.gravity > 0 ? '#ff8800' : '#00ffff' }}>
              {physicsRef.current.gravity > 0 ? '↓' : '↑'}
            </span>
          </div>

          {obstaclesRef.current.map(o => (
            <div key={o.id}>
              {o.top && <div className="absolute" style={{ left: `${o.x}%`, top: `${SH}%`, width: '20px', height: '20px', background: '#ff8800', clipPath: 'polygon(50% 100%, 0 0, 100% 0)', boxShadow: '0 0 10px #ff8800', transform: 'translateX(-50%)' }} />}
              {o.bottom && <div className="absolute" style={{ left: `${o.x}%`, bottom: `${SH}%`, width: '20px', height: '20px', background: '#ff8800', clipPath: 'polygon(50% 0, 0 100%, 100% 100%)', boxShadow: '0 0 10px #ff8800', transform: 'translateX(-50%)' }} />}
            </div>
          ))}

          <div className="absolute" style={{ left: `${PX}%`, top: `${physicsRef.current.playerY}%`, width: `${PS}px`, height: `${PS}px`, transform: 'translate(-50%, -50%)', background: glitchEffect ? 'linear-gradient(45deg, #ff0000, #00ffff)' : 'linear-gradient(45deg, #ff8800, #ffaa00)', boxShadow: glitchEffect ? '0 0 20px #ff0000, 0 0 20px #00ffff' : '0 0 15px #ff8800', borderRadius: '2px' }}>
            <div className="absolute right-full top-1/2 -translate-y-1/2 w-8 h-1" style={{ background: `linear-gradient(to left, ${glitchEffect ? '#00ffff' : '#ff8800'}, transparent)` }} />
          </div>

          {glitchEffect && <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(90deg, rgba(255,0,0,0.1) 0%, rgba(0,255,255,0.1) 50%, rgba(255,0,255,0.1) 100%)', animation: 'glitchFlash 0.15s' }} />}
        </>
      )}

      {gameState === 'gameover' && (() => {
        const finalScore = Math.floor(physicsRef.current.distance / 10);
        return (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 p-4">
            <div className="bg-black/80 rounded-xl p-4 border border-orange-500 text-center">
              <h2 className="text-2xl font-black text-orange-400" style={{ animation: 'rgbSplit 0.5s' }}>GLITCHED OUT</h2>
              <div className="text-4xl font-mono font-bold my-3 tracking-tighter" style={{ color: '#ff8800' }}>{finalScore}</div>
              {finalScore >= highScore && finalScore > 0 && <p className="text-yellow-400 text-xs mb-2 tracking-widest uppercase">⭐ New Best!</p>}
              <button onClick={startGame} className="w-full py-2 rounded-lg font-bold text-black" style={{ background: '#ff8800' }}>🔄 RETRY</button>
              <button onClick={(e) => { e.stopPropagation(); onExit(); }} className="w-full mt-2 py-1.5 rounded-lg text-white/40 border border-white/20 text-sm">← MENU</button>
            </div>
          </div>
        );
      })()}
    </div>
  );
};
