import { motion } from "motion/react";
import operationImage from "../../assets/d471ea4233bb041ed70df8b61c5f992a45b7d581.webp";
import operationImageAlt from "../../assets/d819f16399e086e1b759d42556e51b73a508aa03.webp";
import { ParticleField } from './ParticleField';
import { KhandaSymbol } from './KhandaSymbol';
import { Marquee } from './Marquee';

const TICKER = ['OPERATION ACHERON', 'THE SHADOWED PASSAGE', 'WORDS TO WILL', 'TACTICAL', 'DISCIPLINE', 'INITIATED 2024'];

const META = [
  { label: 'INITIATED', value: '2024' },
  { label: 'FOCUS',     value: 'Discipline & Self-Actualisation' },
  { label: 'APPROACH',  value: 'Tactical · Embodied · Sound' },
  { label: 'STATUS',    value: 'ACTIVE' },
];

export function OperationSection() {
  return (
    <div className="relative grain-overlay">
      <ParticleField />

      {/* ════════════════════════════════════════════════════
          § 1 — ACHERON HERO
      ════════════════════════════════════════════════════ */}
      <section
        className="relative z-10 flex flex-col justify-between px-5 md:px-10 pt-28 md:pt-40 pb-12 md:pb-16 overflow-hidden"
        style={{ minHeight: '92svh' }}
      >
        {/* Huge background text */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          aria-hidden="true"
          style={{ zIndex: 0 }}
        >
          <span
            className="font-display leading-none"
            style={{ fontSize: '24vw', opacity: 0.03, color: 'white', whiteSpace: 'nowrap' }}
          >
            ACHERON
          </span>
        </div>

        {/* Top label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-3 relative z-10"
        >
          <KhandaSymbol size={14} glow={false} animate={false} className="opacity-25" />
          <span className="text-[9px] tracking-[0.45em] opacity-25 font-mono">04 · OPERATION</span>
        </motion.div>

        {/* Center content */}
        <div className="relative z-10 text-center space-y-6 md:space-y-8 py-12">
          <div className="overflow-hidden">
            <motion.p
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-[9px] tracking-[0.5em] opacity-30 font-mono"
            >
              OPERATION
            </motion.p>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: '105%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1.0, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="font-display leading-[0.95] text-glow-crimson"
              style={{ fontSize: 'clamp(4rem, 18vw, 13rem)' }}
            >
              Acheron
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.p
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-[9px] md:text-xs tracking-[0.45em] opacity-30 font-mono"
            >
              THE SHADOWED PASSAGE
            </motion.p>
          </div>

          {/* Gold divider — the one gold element */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.0, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="gold-divider w-32 md:w-48 mx-auto"
            style={{ transformOrigin: 'center' }}
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="font-display-italic opacity-55 max-w-lg mx-auto"
            style={{ fontSize: 'clamp(1.05rem, 2.4vw, 1.4rem)', lineHeight: 1.5 }}
          >
            "A quiet passage from words to will."
          </motion.p>
        </div>

        {/* Bottom strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="relative z-10 flex flex-wrap items-center justify-between gap-4 pt-8 text-[9px] font-mono tracking-[0.2em] opacity-20 border-t hairline"
        >
          <span>ACHERON.V1</span>
          <span className="hidden sm:inline">INITIATED 2024 · TACTICAL · ACTIVE</span>
          <span>ONGOING</span>
        </motion.div>
      </section>

      {/* Ticker */}
      <div className="relative z-10 border-y py-3 hairline">
        <Marquee items={TICKER} className="text-[9px] tracking-[0.35em] opacity-15 font-mono" />
      </div>

      {/* ════════════════════════════════════════════════════
          § 2 — CONTENT SPLIT
      ════════════════════════════════════════════════════ */}
      <section className="relative z-10 px-5 md:px-10 py-16 md:py-24 max-w-[1700px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 md:gap-16 items-start">

          {/* Left: Images stacked */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, margin: '-60px' }}
            className="space-y-4"
          >
            <div className="relative overflow-hidden group" style={{ border: '1px solid rgba(192,24,24,0.18)' }}>
              <motion.img
                src={operationImage}
                alt="Operation Acheron"
                className="w-full h-auto gpu-accelerate img-duotone"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.55 }}
                loading="lazy"
                decoding="async"
              />
              <div
                className="absolute top-4 left-4 px-3 py-1.5 backdrop-blur-sm"
                style={{ background: 'rgba(10,10,10,0.85)', border: '1px solid rgba(192,24,24,0.25)' }}
              >
                <span className="text-[9px] tracking-[0.3em] font-mono text-crimson">04</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between px-4 pb-3 pt-10"
                style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.75), transparent)' }}>
                <span className="text-[9px] opacity-35 font-mono">INIT. 2024</span>
                <span className="text-[9px] opacity-35 font-mono">TACTICAL</span>
              </div>
            </div>

            <div className="relative overflow-hidden group" style={{ border: '1px solid rgba(192,24,24,0.1)' }}>
              <motion.img
                src={operationImageAlt}
                alt="Operation Acheron — Detail"
                className="w-full h-auto gpu-accelerate img-duotone"
                whileHover={{ scale: 1.025 }}
                transition={{ duration: 0.55 }}
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.div>

          {/* Right: Manifesto + Meta */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, margin: '-60px' }}
            className="space-y-8 md:space-y-10 lg:pt-4"
          >
            <div>
              <p className="text-[9px] tracking-[0.45em] opacity-22 font-mono mb-5">START-UP · DISCIPLINE</p>
              <h2 className="font-display leading-[1.02]" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4rem)' }}>
                Operation
              </h2>
              <h2 className="font-display-italic leading-[1.02] text-glow-crimson" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4rem)' }}>
                Acheron
              </h2>
              <p className="text-xs opacity-35 tracking-[0.3em] mt-3 font-mono">THE SHADOWED PASSAGE</p>
            </div>

            {/* Manifesto */}
            <div
              className="relative overflow-hidden p-6 md:p-8"
              style={{ background: 'rgba(192,24,24,0.04)', border: '1px solid rgba(192,24,24,0.2)' }}
            >
              <div className="absolute inset-0 shimmer-overlay pointer-events-none" />
              <p className="text-[9px] tracking-[0.35em] opacity-25 mb-4 font-mono relative z-10">MANIFESTO</p>
              <p className="text-sm leading-relaxed opacity-70 relative z-10">
                Neo Khalsa moves where others hesitate, confronting wounds, braving the harsh. Acheron takes the will, mind, and spirit to greater energy and control — the labour towards self-made lifestyles, disciplined and uncomplicated futures.
              </p>
            </div>

            <p className="text-sm leading-relaxed opacity-55">
              Operation Acheron embraces the sound, embodied, tactical nature of Neo Khalsa — the pathway into deeper self-discovery and self-actualization.
            </p>

            {/* Meta rows */}
            <div className="space-y-0 border-t hairline">
              {META.map(({ label, value }) => (
                <div key={label} className="flex items-start justify-between py-4 border-b hairline">
                  <span className="text-[9px] tracking-[0.3em] font-mono opacity-22">{label}</span>
                  <span className="text-[11px] font-mono opacity-55 text-right max-w-[55%]">{value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          § 3 — CLOSING STATEMENT
      ════════════════════════════════════════════════════ */}
      <section className="relative z-10 px-5 md:px-10 py-16 md:py-28 border-t hairline">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
          className="text-center max-w-[1200px] mx-auto"
        >
          <div className="crimson-divider mb-10 md:mb-16" />
          <h2 className="font-display leading-[1.08]" style={{ fontSize: 'clamp(2.2rem, 6.5vw, 5rem)' }}>
            Neo Khalsa moves
          </h2>
          <h2 className="font-display-italic leading-[1.08] text-glow-crimson" style={{ fontSize: 'clamp(2.2rem, 6.5vw, 5rem)' }}>
            where others hesitate.
          </h2>
          <div className="crimson-divider mt-10 md:mt-16" />
        </motion.div>

        <div className="flex flex-wrap items-center justify-between gap-2 mt-14 md:mt-20 text-[9px] font-mono tracking-[0.25em] opacity-15 max-w-[1700px] mx-auto">
          <span>NEO KHALSA</span>
          <span>ACHERON.V1 · ONGOING</span>
          <span>2024 —</span>
        </div>
      </section>
    </div>
  );
}
