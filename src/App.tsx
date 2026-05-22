/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trophy, Star, Award, Heart, Zap, ShieldCheck, Rocket, UserPlus, X, ChevronRight, Sparkles, Sliders } from 'lucide-react';
import { nominations, Nomination, Nominee } from './data';

export default function App() {
  const [showLanding, setShowLanding] = useState(true);
  const [activeTab, setActiveTab] = useState(0);
  const [selectedNominee, setSelectedNominee] = useState<Nominee | null>(null);
  const [isWinnerRevealed, setIsWinnerRevealed] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [revealedNominees, setRevealedNominees] = useState<Set<string>>(new Set());

  const activeNomination = nominations[activeTab];

  // Keyboard controls: ArrowRight/Left for home-nomination switching, Space to reveal next nominee, Enter to reveal winner
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (showLanding) {
        if (event.key === 'ArrowRight') {
          event.preventDefault();
          setShowLanding(false);
        }
        return;
      }

      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        setShowLanding(true);
      } else if (event.code === 'Space') {
        event.preventDefault();
        if (activeNomination && activeNomination.nominees) {
          const unrevealed = activeNomination.nominees.find(nominee => !revealedNominees.has(nominee.id));
          if (unrevealed) {
            toggleReveal(unrevealed.id);
          }
        }
      } else if (event.code === 'Enter') {
        event.preventDefault();
        if (!isWinnerRevealed) {
          handleRevealWinner();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [showLanding, activeNomination, revealedNominees, isWinnerRevealed]);

  // Reset states when current nomination changes or returning to landing page
  useEffect(() => {
    setIsWinnerRevealed(false);
    setShowConfetti(false);
    setRevealedNominees(new Set());
  }, [activeTab, showLanding]);

  const handleRevealWinner = () => {
    setIsWinnerRevealed(true);
    setTimeout(() => {
      setShowConfetti(true);
      // Auto-stop confetti fireworks after 20 seconds
      setTimeout(() => {
        setShowConfetti(false);
      }, 20000);
    }, 1000);
  };

  const toggleReveal = (nomineeId: string) => {
    setRevealedNominees(prev => {
      const next = new Set(prev);
      if (next.has(nomineeId)) {
        // If already revealed, click opens modal with full detail
        const nominee = activeNomination?.nominees?.find(n => n.id === nomineeId);
        if (nominee) setSelectedNominee(nominee);
      } else {
        next.add(nomineeId);
      }
      return next;
    });
  };

  const allRevealed = revealedNominees.size === (activeNomination?.nominees?.length || 0);

  // Group nominations for beautiful select categorized list
  const itNominations = nominations.filter(n => n.group === 'it');
  const desNominations = nominations.filter(n => n.group === 'designer');

  if (showLanding) {
    return (
      <div className="h-screen bg-neutral-950 text-white font-sans flex flex-col items-center justify-center relative overflow-hidden select-none">
        {/* Background ambient lighting */}
        <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-amber-500/10 to-transparent blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-96 bg-gradient-to-t from-neutral-900/40 to-transparent blur-3xl pointer-events-none" />
        
        <div className="relative z-10 text-center max-w-4xl px-6 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-6"
          >
            <span className="text-amber-500 uppercase tracking-[0.4em] text-xs font-black bg-amber-500/10 border border-amber-500/30 px-4 py-1.5 rounded-none inline-block">
              AMJILT CYBER SCHOOL
            </span>
            
            <h1 className="text-[64px] sm:text-[90px] md:text-[110px] leading-[0.85] font-black tracking-tighter uppercase max-w-2xl mx-auto">
              LEVEL UP <span className="text-neutral-900 text-stroke">2026</span>
            </h1>

            <p className="text-neutral-400 text-sm md:text-md uppercase tracking-[0.2em] font-medium max-w-xl mx-auto leading-relaxed border-t border-b border-white/5 py-4">
              Жыл соңындағы үздіктер мен жобалар марапаттау салтанаты
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            onClick={() => setShowLanding(false)}
            className="mt-16 flex flex-col items-center gap-3 cursor-pointer group"
          >
            {/* Elegant animated horizontal line */}
            <div className="relative w-48 h-[1px] bg-white/10 overflow-hidden">
              <motion.div 
                animate={{ x: [-192, 192] }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                className="absolute top-0 bottom-0 w-24 bg-gradient-to-r from-transparent via-amber-500 to-transparent"
              />
            </div>
            {/* Bouncing Chevron down / arrow down indicating starting */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="mt-1"
            >
              <ChevronRight className="w-5 h-5 text-amber-500 rotate-90" />
            </motion.div>
          </motion.div>
        </div>

        {/* Cinematic Grid Lines */}
        <div className="absolute inset-0 grid grid-cols-6 pointer-events-none opacity-5">
          <div className="border-r border-white h-full" />
          <div className="border-r border-white h-full" />
          <div className="border-r border-white h-full" />
          <div className="border-r border-white h-full" />
          <div className="border-r border-white h-full" />
          <div className="border-r border-white h-full" />
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Inter:wght@400;700;900&display=swap');
          .text-stroke {
            -webkit-text-stroke: 1px rgba(255, 255, 255, 0.2);
            color: transparent;
          }
        `}} />
      </div>
    );
  }

  return (
    <div className="h-screen bg-neutral-950 text-white font-sans flex flex-col overflow-hidden select-none">
      
      {/* Top Bar Branding & Navigation */}
      <header className="border-b border-white/5 bg-neutral-950 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0 z-30">
        <div 
          onClick={() => setShowLanding(true)}
          className="flex items-center gap-3 cursor-pointer group select-none"
        >
          <div className="bg-amber-500 text-black px-2 py-0.5 text-[10px] font-black tracking-widest uppercase group-hover:bg-amber-400 transition-colors">
            LEVEL UP 2026
          </div>
          <span className="text-[10px] tracking-[0.3em] font-bold text-neutral-500 uppercase hidden md:inline group-hover:text-amber-300 transition-colors">
            Жыл қорытындысы • Мектеп Салтанаты
          </span>
        </div>

        {/* Categories Dropdown Selector */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <label htmlFor="nomination-select" className="text-[10px] font-black uppercase tracking-wider text-neutral-400 whitespace-nowrap hidden lg:inline">
            Номинацияны таңдаңыз:
          </label>
          <select
            id="nomination-select"
            value={activeTab}
            onChange={(e) => setActiveTab(Number(e.target.value))}
            className="w-full sm:w-72 bg-neutral-900 border border-white/10 px-3 py-2 text-xs font-bold uppercase tracking-wider text-amber-500 rounded-none focus:outline-none focus:border-amber-500 cursor-pointer"
          >
            <optgroup label="💻 ЖЫЛ IT ЖОБАСЫ" className="bg-neutral-950 text-white font-sans font-bold">
              {itNominations.map(nom => (
                <option key={nom.id} value={nominations.findIndex(n => n.id === nom.id)}>
                  {nom.title}
                </option>
              ))}
            </optgroup>
            <optgroup label="🎨 ЖЫЛ ДИЗАЙНЕРІ" className="bg-neutral-950 text-white font-sans font-bold">
              {desNominations.map(nom => (
                <option key={nom.id} value={nominations.findIndex(n => n.id === nom.id)}>
                  {nom.title}
                </option>
              ))}
            </optgroup>
          </select>
        </div>
      </header>

      {/* Main Screen Layout Container designed to fit in viewport height */}
      <main className="flex-1 flex flex-col p-4 md:p-8 justify-between overflow-hidden relative">
        
        {/* Compact Title Section */}
        <section className="mb-4 shrink-0">
          <motion.div
            key={`title-section-${activeNomination.id}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl"
          >
            <span className="text-[9px] tracking-[0.4em] font-black text-amber-500 uppercase mb-1 block">
              Белсенді Номинация
            </span>
            <h1 className="text-2xl md:text-5xl font-black uppercase tracking-tight text-white mb-2 leading-tight">
              {activeNomination.title}
            </h1>
            <p className="text-neutral-400 text-xs md:text-sm font-medium tracking-tight italic max-w-3xl border-l border-amber-500/50 pl-4 py-0.5">
              {activeNomination.description}
            </p>
          </motion.div>
        </section>



        {/* Nominees/Winners Cards Grid Area - Styled to fit correctly within height */}
        <section className="flex-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 items-center justify-center overflow-hidden min-h-0">
          <AnimatePresence mode="wait">
            {activeNomination?.nominees?.map((nominee, idx) => {
              const isWinner = activeNomination.winnerIds?.includes(nominee.id) || nominee.id === activeNomination.winnerId;
              const isRevealed = revealedNominees.has(nominee.id);
              const showAsWinner = isWinnerRevealed && isWinner;
              const fadeOther = isWinnerRevealed && !isWinner;

              return (
                <motion.div
                  key={nominee.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: fadeOther ? 0.2 : 1,
                    scale: showAsWinner ? 1.1 : 0.95,
                  }}
                  transition={{ type: "spring", stiffness: 100, damping: 14 }}
                  style={{ perspective: 1000 }}
                  className="relative w-full h-full max-h-[350px] aspect-[3/4.2] mx-auto cursor-pointer"
                >
                  <motion.div
                    animate={{ 
                      rotateY: isRevealed ? 180 : 0 
                    }}
                    transition={{ type: "spring", stiffness: 90, damping: 15 }}
                    className="w-full h-full relative transform-style-3d duration-500"
                    onClick={() => toggleReveal(nominee.id)}
                  >
                    {/* CLOSED STATE (BACK side of 3D, gold cover) */}
                    <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-amber-500 to-amber-600 border border-amber-400 shadow-[0_8px_25px_rgba(245,158,11,0.2)] flex flex-col p-3 rounded-none items-center justify-center text-center select-none">
                      <div className="text-4xl font-black text-black mb-1 drop-shadow-sm">
                        0{idx + 1}
                      </div>
                      <div className="text-[10px] font-black text-black/85 uppercase tracking-[0.2em] border-t border-black/20 pt-2 px-3">
                        Үміткер
                      </div>
                      <Trophy className="w-6 h-6 mt-4 text-black opacity-80" />
                    </div>

                    {/* OPEN STATE (FRONT side of 3D, photo and info) */}
                    <div 
                      className={`absolute inset-0 backface-hidden [transform:rotateY(180deg)] bg-neutral-900 border flex flex-col p-3 rounded-none overflow-hidden
                        ${showAsWinner ? 'border-amber-500 shadow-[0_0_50px_rgba(245,158,11,0.6)] ring-2 ring-amber-500' : 'border-white/10'}
                      `}
                    >
                      <div className="relative flex-1 bg-neutral-800 overflow-hidden">
                        <img
                          src={nominee.photo}
                          alt={nominee.name}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-neutral-950/10" />
                        
                        {showAsWinner && (
                          <div className="absolute top-0 left-0 right-0 bg-amber-500 text-black py-0.5 text-[8px] font-black tracking-widest uppercase text-center z-10">
                            ЖЕҢІМПАЗ 🏆
                          </div>
                        )}
                      </div>

                      <div className="pt-2">
                        <div className="text-[8px] font-black text-amber-500 uppercase tracking-widest mb-0.5">
                          {isWinner && isWinnerRevealed ? 'Ресми Иегері' : `Үміткер 0${idx + 1}`}
                        </div>
                        <div className={`font-black uppercase tracking-tighter ${showAsWinner ? 'text-xs md:text-sm leading-tight text-amber-400' : 'text-[11px] leading-none text-white'}`}>
                          {nominee.name}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </section>
      </main>

      {/* Nominee Profile Detailed Card Modal */}
      <AnimatePresence>
        {selectedNominee && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedNominee(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-sm"
            />
            
            <motion.div
              className="relative w-full max-w-4xl bg-neutral-900 border border-white/5 overflow-hidden grid grid-cols-1 md:grid-cols-[1.2fr_1.5fr] shadow-2xl z-55 rounded-none"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
            >
              <button
                onClick={() => setSelectedNominee(null)}
                className="absolute top-6 right-6 z-30 p-2 text-white hover:text-amber-500 transition-colors focus:outline-none"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="h-[240px] md:h-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-75">
                <img
                  src={selectedNominee.photo}
                  alt={selectedNominee.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-8 md:p-14 flex flex-col justify-center bg-neutral-950">
                <span className="text-amber-500 uppercase tracking-[0.4em] text-[10px] font-black mb-6 block">
                  Қатысушы Сауалнамасы
                </span>
                <h3 className="text-3xl md:text-5xl font-black uppercase leading-none tracking-tighter mb-6">
                  {selectedNominee.name}
                </h3>
                <p className="text-neutral-400 text-sm md:text-base mb-8 italic border-l-2 border-amber-500/30 pl-6 py-1">
                  "{selectedNominee.bio}"
                </p>
                
                <div className="space-y-4">
                  <h4 className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 font-black">Жетістіктері мен Еңбектері</h4>
                  <div className="grid gap-2">
                    {selectedNominee.achievements.map((achive, i) => (
                      <div key={i} className="flex items-center gap-3 text-xs uppercase font-bold tracking-widest text-neutral-300">
                        <span className="text-amber-500">/</span>
                        {achive}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Confetti Animation Overlay */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-[60] overflow-hidden">
          {[...Array(60)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: -10, x: `${Math.random() * 100}vw`, rotate: 0 }}
              animate={{ 
                y: '110vh', 
                rotate: 360 * 4,
                x: `${(Math.random() * 100) + (Math.random() * 10 - 5)}vw` 
              }}
              transition={{ 
                duration: 2 + Math.random() * 2, 
                ease: "linear",
                repeat: Infinity
              }}
              className="absolute w-2 h-2"
              style={{
                backgroundColor: i % 3 === 0 ? '#f59e0b' : i % 3 === 1 ? '#ffffff' : '#444444'
              }}
            />
          ))}
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Inter:wght@400;700;900&display=swap');
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 0px;
        }

        .backface-hidden {
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }

        .transform-style-3d {
          transform-style: preserve-3d;
        }
      `}} />
    </div>
  );
}
