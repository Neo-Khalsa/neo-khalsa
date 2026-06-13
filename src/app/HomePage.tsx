import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ParticleField } from './components/ParticleField';
import { SacredGeometryBg } from './components/SacredGeometryBg';
import { KhandaSymbol } from './components/KhandaSymbol';
import finalLogo from '../assets/4cdf9cd568e3ee9baa5d3b36dc93e020b862ab0a.webp';

const sections = [
  {
    path: '/mission',
    num: '01',
    label: 'MISSION',
    sub: 'The Vision',
    body: 'A strategic, results-driven institution propelling the Khalsa into the second half of the 21st century.',
  },
  {
    path: '/projects',
    num: '02',
    label: 'PROJECTS',
    sub: 'What We Build',
    body: 'Three active initiatives: a philosophical book, a sacred handwritten saroop, and a global-reach anime.',
  },
  {
    path: '/operation',
    num: '03',
    label: 'OPERATION',
    sub: 'The Discipline',
    body: 'Operation Acheron — the shadowed crossing from words to will. Sound, embodied, tactical.',
  },
  {
    path: '/contact',
    num: '04',
    label: 'CONTACT',
    sub: 'Reach Us',
    body: 'Collaborations, enquiries, and correspondence for those called to the work.',
  },
];

export function HomePage() {
  return (
    <div className="min-h-screen relative overflow-hidden grain-overlay">
      <ParticleField />
      <SacredGeometryBg opacity={0.04} />

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">

        {/* Final logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 md:mb-12"
        >
          <img
            src={finalLogo}
            alt="Neo Khalsa"
            className="w-28 md:w-40 lg:w-48 h-auto animate-divine-breathe"
            style={{ filter: 'drop-shadow(0 0 18px rgba(192,24,24,0.45)) drop-shadow(0 0 40px rgba(192,24,24,0.18))' }}
          />
        </motion.div>

        {/* Wordmark */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-4 md:mb-6"
        >
          <h1 className="text-5xl md:text-8xl lg:text-[110px] tracking-[0.2em] text-glow-crimson leading-none">
            NEO
          </h1>
          <h1 className="text-5xl md:text-8xl lg:text-[110px] tracking-[0.2em] leading-none opacity-90">
            KHALSA
          </h1>
        </motion.div>

        {/* Crimson rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.0, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-32 md:w-56 h-[1px] mb-6 md:mb-8"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(192,24,24,0.7), transparent)',
            transformOrigin: 'center',
          }}
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-xs md:text-sm tracking-[0.3em] opacity-40 max-w-sm md:max-w-md leading-relaxed"
        >
          A STRATEGIC INSTITUTION FOR THE KHALSA
          <br className="hidden md:block" />
          {' '}IN THE SECOND HALF OF THE 21ST CENTURY
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.3em] opacity-25 font-mono">EXPLORE</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-[1px] h-8"
            style={{ background: 'linear-gradient(to bottom, rgba(192,24,24,0.5), transparent)' }}
          />
        </motion.div>
      </div>

      {/* ── Section tiles ──────────────────────────────────────────────── */}
      <div className="relative z-10 px-4 md:px-8 pb-20 md:pb-32 max-w-[1400px] mx-auto">

        {/* Section header */}
        <div className="flex items-center gap-6 mb-10 md:mb-16">
          <div className="flex-1 h-[1px]" style={{ background: 'rgba(192,24,24,0.2)' }} />
          <span className="text-[10px] tracking-[0.35em] opacity-25 font-mono">NAVIGATION</span>
          <div className="flex-1 h-[1px]" style={{ background: 'rgba(192,24,24,0.2)' }} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {sections.map(({ path, num, label, sub, body }, i) => (
            <motion.div
              key={path}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true, margin: '-60px' }}
            >
              <Link
                to={path}
                className="group block h-full p-6 md:p-8 relative overflow-hidden transition-all duration-500 hover:bg-[rgba(192,24,24,0.05)]"
                style={{ border: '1px solid rgba(255,255,255,0.08)' }}
              >
                {/* Hover top line */}
                <div
                  className="absolute top-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-600"
                  style={{ background: 'linear-gradient(90deg, rgba(192,24,24,0.9), rgba(192,24,24,0.2))' }}
                />

                {/* Corner number */}
                <span className="block text-[10px] font-mono opacity-20 mb-6 md:mb-8">{num}</span>

                {/* Small khanda accent */}
                <div className="mb-4 opacity-0 group-hover:opacity-40 transition-opacity duration-400">
                  <KhandaSymbol size={16} glow={false} animate={false} />
                </div>

                <h3 className="text-xl md:text-2xl tracking-[0.2em] mb-1 group-hover:text-glow-crimson transition-all duration-300">
                  {label}
                </h3>
                <p className="text-[10px] tracking-[0.25em] opacity-30 mb-4 md:mb-6">{sub}</p>
                <p className="text-xs leading-relaxed opacity-45 group-hover:opacity-65 transition-opacity duration-300">
                  {body}
                </p>

                {/* Arrow */}
                <div className="mt-6 md:mt-8 flex items-center gap-2 opacity-0 group-hover:opacity-55 transition-opacity duration-300">
                  <div className="h-[1px] w-6" style={{ background: 'rgba(192,24,24,0.6)' }} />
                  <span className="text-[10px] font-mono tracking-widest" style={{ color: 'rgba(192,24,24,0.8)' }}>
                    ENTER
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Footer strip */}
        <div className="flex items-center justify-between mt-16 md:mt-24 text-[10px] font-mono opacity-15">
          <span>NEO KHALSA INITIATIVE</span>
          <span>EST. 2020 · SURREY</span>
          <span>2026</span>
        </div>
      </div>
    </div>
  );
}
