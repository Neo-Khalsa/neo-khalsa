import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ParticleField } from './components/ParticleField';
import { SacredGeometryBg } from './components/SacredGeometryBg';
import { Marquee } from './components/Marquee';
import logoWhite from '../assets/027354ce14dae85850c3c889442da6849aab7a08.webp';

const NAV_ROWS = [
  { path: '/mission',   num: '01', label: 'MISSION',   desc: 'The vision and strategic intent'    },
  { path: '/projects',  num: '02', label: 'PROJECTS',  desc: 'Three active cultural initiatives'  },
  { path: '/operation', num: '03', label: 'OPERATION', desc: 'Acheron — the discipline arm'       },
  { path: '/contact',   num: '04', label: 'CONTACT',   desc: 'Correspondence and collaboration'   },
];

const TICKER = ['NEO KHALSA', 'KHALSA RAAJ', 'CHARDI KALA', 'SURREY BC', 'MMXXVI', 'KHALSA NU'];

export function HomePage() {
  return (
    <div className="min-h-screen relative grain-overlay">
      <ParticleField />
      <SacredGeometryBg opacity={0.028} />

      {/* ── HERO (full viewport) ────────────────────────────────────── */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-4">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 md:mb-12"
        >
          <img
            src={logoWhite}
            alt="Neo Khalsa"
            className="w-28 md:w-40 lg:w-52 h-auto animate-divine-breathe"
            style={{ filter: 'drop-shadow(0 0 24px rgba(192,24,24,0.45)) drop-shadow(0 0 60px rgba(192,24,24,0.15))' }}
            loading="eager"
            fetchPriority="high"
          />
        </motion.div>

        {/* Wordmark — each line clips out from behind */}
        <div className="overflow-hidden leading-none mb-1">
          <motion.span
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1.0, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="block text-[15vw] md:text-[12vw] lg:text-[10vw] tracking-[0.1em] leading-none text-glow-crimson"
          >
            NEO
          </motion.span>
        </div>
        <div className="overflow-hidden leading-none">
          <motion.span
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1.0, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="block text-[15vw] md:text-[12vw] lg:text-[10vw] tracking-[0.1em] leading-none"
          >
            KHALSA
          </motion.span>
        </div>

        {/* Rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.0, delay: 0.85, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-24 md:w-40 h-px mt-7 md:mt-9 mb-5 md:mb-6"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(192,24,24,0.65), transparent)',
            transformOrigin: 'center',
          }}
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.05 }}
          className="text-[9px] md:text-[10px] tracking-[0.4em] opacity-25 font-mono"
        >
          SURREY · EST. 2020 · KHALSA RAAJ
        </motion.p>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 9, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-10"
            style={{ background: 'linear-gradient(to bottom, rgba(192,24,24,0.55), transparent)' }}
          />
          <span className="text-[8px] tracking-[0.35em] opacity-20 font-mono">SCROLL</span>
        </motion.div>
      </section>

      {/* ── SECTION INDEX ────────────────────────────────────────────── */}
      <section className="relative z-10 pb-24 md:pb-36">

        {/* Ticker strip */}
        <div
          className="border-y py-3 md:py-4"
          style={{ borderColor: 'rgba(255,255,255,0.06)' }}
        >
          <Marquee items={TICKER} className="text-[9px] md:text-[10px] tracking-[0.35em] opacity-18 font-mono" />
        </div>

        {/* Navigation rows */}
        <div className="max-w-[1600px] mx-auto px-5 md:px-10">
          {NAV_ROWS.map(({ path, num, label, desc }, i) => (
            <motion.div
              key={path}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true, margin: '-40px' }}
            >
              <Link
                to={path}
                className="group flex items-center gap-3 md:gap-6 py-6 md:py-8 border-b transition-all duration-300"
                style={{ borderColor: 'rgba(255,255,255,0.06)' }}
              >
                {/* Active bar on hover */}
                <div
                  className="w-0 group-hover:w-[3px] h-6 md:h-8 flex-shrink-0 transition-all duration-300 rounded-full"
                  style={{ background: 'rgba(192,24,24,0.85)', boxShadow: '0 0 10px rgba(192,24,24,0.5)' }}
                />

                {/* Number */}
                <span className="text-[9px] font-mono opacity-18 w-5 flex-shrink-0 group-hover:opacity-35 transition-opacity">{num}</span>

                {/* Section name */}
                <h3 className="text-3xl md:text-5xl lg:text-6xl tracking-[0.1em] font-mono flex-shrink-0 group-hover:text-glow-crimson transition-all duration-300">
                  {label}
                </h3>

                {/* Extend line */}
                <div
                  className="flex-1 h-px hidden md:block opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{ background: 'rgba(255,255,255,1)' }}
                />

                {/* Right side */}
                <div className="ml-auto flex items-center gap-5 md:gap-8 flex-shrink-0">
                  <span className="hidden lg:block text-xs tracking-wider opacity-25 group-hover:opacity-50 transition-opacity text-right max-w-[220px]">
                    {desc}
                  </span>
                  <motion.span
                    className="text-xl md:text-3xl opacity-18 group-hover:opacity-70 transition-all duration-300"
                    style={{ color: 'rgba(192,24,24,1)' }}
                    animate={{}}
                    whileHover={{ x: 4 }}
                  >
                    →
                  </motion.span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Footer strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-between gap-4 mt-16 md:mt-24 px-5 md:px-10 text-[8px] md:text-[10px] font-mono opacity-12 max-w-[1600px] mx-auto"
        >
          <span>NEO KHALSA INITIATIVE</span>
          <span>49.1913°N · 122.8490°W</span>
          <span>SURREY BC · 2026</span>
        </motion.div>
      </section>
    </div>
  );
}
