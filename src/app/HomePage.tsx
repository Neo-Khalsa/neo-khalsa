import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ParticleField } from './components/ParticleField';
import { MastheadCycle } from './components/MastheadCycle';
import logoWhite from '../assets/027354ce14dae85850c3c889442da6849aab7a08.webp';

const NAV_ROWS = [
  { path: '/mission',   num: '01', label: 'Mission',   desc: 'The vision and strategic intent'    },
  { path: '/projects',     num: '02', label: 'Projects',     desc: 'Three creative initiatives - Volume I' },
  { path: '/spaces',       num: '03', label: 'Spaces',       desc: 'Physical Sikh builds - Volume II'      },
  { path: '/get-involved', num: '04', label: 'Get Involved', desc: 'Join the work & support the cause'     },
  { path: '/blueprint',    num: '05', label: 'Blueprint',    desc: 'The plan, set down in full'            },
  { path: '/contact',      num: '06', label: 'Contact',      desc: 'Correspondence and collaboration'      },
];

export function HomePage() {
  return (
    <div className="min-h-screen relative grain-overlay">
      <ParticleField />

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section
        className="relative z-10 flex flex-col items-center justify-center text-center px-5"
        style={{ minHeight: '100svh' }}
      >
        {/* Crimson bloom behind the mark */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: '50%', left: '50%', transform: 'translate(-50%, -58%)',
            width: 'min(90vw, 760px)', height: 'min(90vw, 760px)',
            background: 'radial-gradient(circle, rgba(192,24,24,0.085) 0%, transparent 62%)',
          }}
        />

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
          className="mb-9 md:mb-12"
        >
          <img
            src={logoWhite}
            alt="Neo Khalsa"
            className="w-24 md:w-36 lg:w-44 h-auto animate-divine-breathe"
            style={{
              // cap by viewport height so short laptop screens don't overflow the hero
              maxWidth: '20svh',
              filter: 'drop-shadow(0 0 22px rgba(192,24,24,0.35)) drop-shadow(0 0 56px rgba(192,24,24,0.12))',
            }}
            loading="eager"
            fetchPriority="high"
          />
        </motion.div>

        {/* Wordmark - serif, clipped reveal */}
        <div className="overflow-hidden leading-none">
          <motion.h1
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1.0, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="font-display leading-[0.92] tracking-[0.01em]"
            style={{ fontSize: 'clamp(3rem, min(17vw, 22svh), 12rem)' }}
          >
            NEO
          </motion.h1>
        </div>
        <div className="overflow-hidden leading-none">
          <motion.h1
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1.0, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-display-italic leading-[0.92] tracking-[0.01em]"
            style={{ fontSize: 'clamp(3rem, min(17vw, 22svh), 12rem)' }}
          >
            Khalsa
          </motion.h1>
        </div>

        {/* Rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.0, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-24 md:w-40 h-px mt-8 mb-6"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(192,24,24,0.65), transparent)',
            transformOrigin: 'center',
          }}
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-[9px] md:text-[10px] tracking-[0.45em] opacity-30 font-mono"
        >
          CULTURE · CRAFT · DISCIPLINE
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.15 }}
          className="text-[9px] tracking-[0.4em] opacity-15 font-mono mt-3"
        >
          EST. MMXX
        </motion.p>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
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

      {/* ── SECTION INDEX ───────────────────────────────────────────── */}
      <section className="relative z-10 pb-24 md:pb-32">

        {/* Motif masthead - crossfades between coherent themed sets, static */}
        <div className="border-y py-4 md:py-5 hairline">
          <div className="max-w-[1700px] mx-auto px-5 md:px-10">
            <MastheadCycle />
          </div>
        </div>

        {/* Index label */}
        <div className="max-w-[1700px] mx-auto px-5 md:px-10 pt-12 md:pt-16 pb-2">
          <p className="text-[9px] tracking-[0.45em] opacity-22 font-mono">INDEX</p>
        </div>

        {/* Navigation rows */}
        <div className="max-w-[1700px] mx-auto px-5 md:px-10">
          {NAV_ROWS.map(({ path, num, label, desc }, i) => (
            <motion.div
              key={path}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: i * 0.07, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true, margin: '-30px' }}
            >
              <Link
                to={path}
                className="group flex items-center gap-4 md:gap-8 py-6 md:py-9 border-b hairline transition-all duration-300"
              >
                {/* Active bar on hover */}
                <div
                  className="w-0 group-hover:w-[3px] h-8 md:h-10 flex-shrink-0 transition-all duration-300"
                  style={{ background: 'rgba(192,24,24,0.85)', boxShadow: '0 0 10px rgba(192,24,24,0.45)' }}
                />

                <span className="text-[9px] font-mono opacity-20 w-6 flex-shrink-0 group-hover:opacity-50 group-hover:text-crimson transition-all">
                  {num}
                </span>

                <span
                  className="font-display flex-shrink-0 leading-none opacity-85 group-hover:opacity-100 transition-all duration-300"
                  style={{ fontSize: 'clamp(2.2rem, 7vw, 4.5rem)' }}
                >
                  {label}
                </span>

                <div className="flex-1 h-px hidden md:block opacity-0 group-hover:opacity-100 bg-line transition-opacity duration-500" />

                <div className="ml-auto flex items-center gap-5 md:gap-8 flex-shrink-0">
                  <span className="hidden lg:block text-xs tracking-wider opacity-25 group-hover:opacity-55 transition-opacity text-right max-w-[230px]">
                    {desc}
                  </span>
                  <span
                    className="text-xl md:text-2xl opacity-20 group-hover:opacity-80 group-hover:translate-x-1 transition-all duration-300"
                    style={{ color: '#C01818' }}
                  >
                    →
                  </span>
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
          className="flex flex-wrap items-center justify-between gap-4 mt-16 md:mt-24 px-5 md:px-10 text-[8px] md:text-[9px] font-mono tracking-[0.25em] opacity-15 max-w-[1700px] mx-auto"
        >
          <span>NEO KHALSA INITIATIVE</span>
          <span>EST. 2020</span>
          <span>MMXXVI</span>
        </motion.div>
      </section>
    </div>
  );
}
