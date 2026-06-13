import { motion } from "motion/react";
import operationImage from "../../assets/d471ea4233bb041ed70df8b61c5f992a45b7d581.webp";
import operationImageAlt from "../../assets/d819f16399e086e1b759d42556e51b73a508aa03.webp";
import { ParticleField } from './ParticleField';
import { SacredGeometryBg } from './SacredGeometryBg';
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
      <SacredGeometryBg opacity={0.025} />

      {/* ════════════════════════════════════════════════════
          § 1 — ACHERON HERO (large viewport section)
      ════════════════════════════════════════════════════ */}
      <section className="relative z-10 min-h-[85vh] flex flex-col justify-between px-5 md:px-10 pt-28 md:pt-36 pb-14 md:pb-20 overflow-hidden">

        {/* Huge background text — ACHERON */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          aria-hidden="true"
          style={{ zIndex: 0 }}
        >
          <span
            className="text-[22vw] font-mono tracking-tighter leading-none"
            style={{ opacity: 0.03, color: 'white', whiteSpace: 'nowrap' }}
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
          <span className="text-[9px] tracking-[0.45em] opacity-25 font-mono">NEO KHALSA · 03 · OPERATION</span>
        </motion.div>

        {/* Center content */}
        <div className="relative z-10 text-center space-y-6 md:space-y-8">
          <div className="overflow-hidden">
            <motion.p
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-[9px] tracking-[0.45em] opacity-30 font-mono"
            >
              OPERATION
            </motion.p>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: '105%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1.0, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="text-[18vw] md:text-[15vw] lg:text-[13vw] font-mono tracking-tight leading-none text-glow-crimson"
            >
              ACHERON
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.p
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-[9px] md:text-xs tracking-[0.4em] opacity-30 font-mono"
            >
              THE SHADOWED PASSAGE
            </motion.p>
          </div>

          {/* Gold divider — only prominent gold element on the site */}
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
            className="text-sm md:text-base italic opacity-50 max-w-lg mx-auto leading-relaxed"
          >
            "A quiet passage from words to will."
          </motion.p>
        </div>

        {/* Bottom quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="relative z-10 flex flex-wrap items-center justify-between gap-4 pt-8 text-[9px] font-mono opacity-20 border-t"
          style={{ borderColor: 'rgba(255,255,255,0.07)' }}
        >
          <span>ACHERON.V1</span>
          <span>INITIATED 2024 · TACTICAL · ACTIVE</span>
          <span>ONGOING</span>
        </motion.div>
      </section>

      {/* Ticker */}
      <div className="relative z-10 border-y py-3" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
        <Marquee items={TICKER} className="text-[9px] tracking-[0.35em] opacity-15 font-mono" />
      </div>

      {/* ════════════════════════════════════════════════════
          § 2 — CONTENT SPLIT (image + manifesto)
      ════════════════════════════════════════════════════ */}
      <section className="relative z-10 px-5 md:px-10 py-16 md:py-24 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 md:gap-16 items-start">

          {/* Left: Images stacked */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, margin: '-60px' }}
            className="space-y-4"
          >
            {/* Main image */}
            <div
              className="relative overflow-hidden group"
              style={{ border: '1px solid rgba(192,24,24,0.2)' }}
            >
              <motion.img
                src={operationImage}
                alt="Operation Acheron"
                className="w-full h-auto gpu-accelerate transition-all duration-700"
                whileHover={{ scale: 1.025 }}
                transition={{ duration: 0.55 }}
                loading="lazy"
                decoding="async"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: 'linear-gradient(135deg, rgba(192,24,24,0.08) 0%, transparent 55%)' }}
              />
              <div
                className="absolute top-4 left-4 px-3 py-1.5 backdrop-blur-sm"
                style={{ background: 'rgba(26,26,26,0.85)', border: '1px solid rgba(192,24,24,0.25)' }}
              >
                <span className="text-[9px] tracking-[0.3em] font-mono text-glow-crimson">02</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between px-4 pb-3 pt-10"
                style={{ background: 'linear-gradient(to top, rgba(26,26,26,0.7), transparent)' }}>
                <span className="text-[9px] opacity-30 font-mono">INIT. 2024</span>
                <span className="text-[9px] opacity-30 font-mono">TACTICAL</span>
              </div>
            </div>

            {/* Secondary image */}
            <div
              className="relative overflow-hidden group"
              style={{ border: '1px solid rgba(192,24,24,0.12)' }}
            >
              <motion.img
                src={operationImageAlt}
                alt="Operation Acheron — Detail"
                className="w-full h-auto gpu-accelerate"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.55 }}
                loading="lazy"
                decoding="async"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: 'rgba(192,24,24,0.05)' }}
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
            {/* Heading */}
            <div>
              <p className="text-[9px] tracking-[0.45em] opacity-22 font-mono mb-5">START-UP · DISCIPLINE</p>
              <h2 className="text-3xl md:text-5xl tracking-wider leading-tight mb-2 text-glow-crimson">OPERATION</h2>
              <h2 className="text-3xl md:text-5xl tracking-wider leading-tight">ACHERON</h2>
              <p className="text-sm opacity-35 tracking-wider mt-2">THE SHADOWED PASSAGE</p>
            </div>

            {/* Manifesto */}
            <div
              className="relative overflow-hidden p-6 md:p-8"
              style={{ background: 'rgba(192,24,24,0.05)', border: '1px solid rgba(192,24,24,0.22)' }}
            >
              <div className="absolute inset-0 shimmer-overlay pointer-events-none" />
              <p className="text-[9px] tracking-[0.35em] opacity-25 mb-4 font-mono relative z-10">MANIFESTO</p>
              <p className="text-sm leading-relaxed opacity-70 relative z-10">
                Neo Khalsa moves where others hesitate, confronting wounds, braving the harsh. Acheron takes the will, mind, and spirit to greater energy and control — the labour towards self-made lifestyles, disciplined and uncomplicated futures.
              </p>
            </div>

            {/* Description */}
            <p className="text-sm leading-relaxed opacity-55">
              Operation Acheron embraces the sound, embodied, tactical nature of Neo Khalsa — the pathway into deeper self-discovery and self-actualization.
            </p>

            {/* Meta rows */}
            <div className="space-y-0 border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
              {META.map(({ label, value }) => (
                <div
                  key={label}
                  className="flex items-start justify-between py-4 border-b"
                  style={{ borderColor: 'rgba(255,255,255,0.06)' }}
                >
                  <span className="text-[9px] tracking-[0.3em] font-mono opacity-22">{label}</span>
                  <span className="text-[11px] font-mono opacity-50 text-right max-w-[55%]">{value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          § 3 — CLOSING STATEMENT (full width)
      ════════════════════════════════════════════════════ */}
      <section className="relative z-10 px-5 md:px-10 py-16 md:py-24 border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
          className="text-center max-w-[1200px] mx-auto"
        >
          <div className="crimson-divider mb-10 md:mb-16" />
          <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl tracking-wide leading-tight text-glow-crimson">
            NEO KHALSA MOVES
          </h2>
          <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl tracking-wide leading-tight opacity-80">
            WHERE OTHERS HESITATE
          </h2>
          <div className="crimson-divider mt-10 md:mt-16" />
        </motion.div>

        {/* Footer strip */}
        <div className="flex items-center justify-between mt-14 md:mt-20 text-[9px] font-mono opacity-15 max-w-[1600px] mx-auto">
          <span>NEO KHALSA</span>
          <span>ACHERON.V1 · ONGOING</span>
          <span>2024 —</span>
        </div>
      </section>
    </div>
  );
}
