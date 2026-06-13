import { motion } from "motion/react";
import { ParticleField } from '../components/ParticleField';
import { SacredGeometryBg } from '../components/SacredGeometryBg';
import { KhandaSymbol } from '../components/KhandaSymbol';

const CHANNELS = [
  {
    num: '01',
    label: 'GENERAL ENQUIRIES',
    desc: 'Questions about the initiative, the projects, or general correspondence',
    href: 'mailto:neokhalsa@proton.me',
    display: 'neokhalsa@proton.me',
    external: false,
  },
  {
    num: '02',
    label: 'COLLABORATIONS',
    desc: 'Artists, scholars, institutions, and creators called to the work',
    href: 'mailto:neokhalsa@proton.me',
    display: 'Reach out →',
    external: false,
  },
  {
    num: '03',
    label: 'NEO KHALSA KOANS',
    desc: 'Book trade, bulk orders, and press for the 2026 publication',
    href: 'https://www.houseofjouhal.com/product-page/neo-khalsa-koans',
    display: 'houseofjouhal.com',
    external: true,
  },
  {
    num: '04',
    label: 'SOCIAL',
    desc: 'Follow the development of projects and philosophical dispatches',
    href: 'https://instagram.com/neokhalsa',
    display: '@neokhalsa',
    external: true,
  },
];

export function ContactPage() {
  return (
    <div className="min-h-screen relative grain-overlay">
      <ParticleField />
      <SacredGeometryBg opacity={0.025} />

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 md:px-10">

        {/* ── HEADER ─────────────────────────────────────────────── */}
        <section className="pt-28 md:pt-36 pb-14 md:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Label */}
            <div className="flex items-center gap-3 mb-8 md:mb-12">
              <KhandaSymbol size={14} glow={false} animate={false} className="opacity-25" />
              <span className="text-[9px] tracking-[0.45em] opacity-25 font-mono">NEO KHALSA · 04 · CONTACT</span>
            </div>

            {/* Heading */}
            <div className="overflow-hidden mb-1">
              <motion.h1
                initial={{ y: '105%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.95, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-[16vw] md:text-[13vw] lg:text-[10vw] tracking-[0.06em] leading-none text-glow-crimson"
              >
                CON
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: '105%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.95, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-[16vw] md:text-[13vw] lg:text-[10vw] tracking-[0.06em] leading-none"
              >
                TACT
              </motion.h1>
            </div>

            {/* Sub */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-wrap items-center gap-4 md:gap-8 mt-8 md:mt-10 text-[9px] tracking-[0.4em] opacity-22 font-mono"
            >
              <span>CORRESPONDENCE & COLLABORATION</span>
              <div className="w-1 h-1 rounded-full bg-current opacity-40" />
              <span>49.1913°N, 122.8490°W · SURREY</span>
            </motion.div>
          </motion.div>
        </section>

        {/* ── CHANNEL ROWS ───────────────────────────────────────── */}
        <section>
          {/* Top rule */}
          <div className="h-px w-full" style={{ background: 'rgba(255,255,255,0.07)' }} />

          {CHANNELS.map(({ num, label, desc, href, display, external }, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: i * 0.07, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true, margin: '-40px' }}
            >
              <a
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className="group flex flex-col md:flex-row md:items-center gap-3 md:gap-0 py-7 md:py-9 border-b transition-all duration-300 hover:bg-[rgba(192,24,24,0.03)] hover:px-3 md:hover:px-5"
                style={{ borderColor: 'rgba(255,255,255,0.07)' }}
              >
                {/* Number */}
                <span className="text-[9px] font-mono opacity-18 md:w-12 flex-shrink-0 group-hover:opacity-40 transition-opacity">
                  {num}
                </span>

                {/* Label */}
                <span className="text-xl md:text-3xl lg:text-4xl tracking-wider md:w-80 lg:w-96 flex-shrink-0 group-hover:text-glow-crimson transition-all duration-300">
                  {label}
                </span>

                {/* Description — hidden on mobile, visible on md+ */}
                <span className="hidden lg:block flex-1 text-xs tracking-wider opacity-28 group-hover:opacity-45 transition-opacity px-8">
                  {desc}
                </span>

                {/* Spacer line */}
                <div
                  className="hidden md:block flex-1 h-px opacity-0 group-hover:opacity-8 transition-opacity mx-6 lg:mx-0"
                  style={{ background: 'rgba(255,255,255,0.3)' }}
                />

                {/* Display link + arrow */}
                <div className="flex items-center gap-3 md:gap-4 flex-shrink-0">
                  <span className="text-xs md:text-sm font-mono opacity-35 group-hover:opacity-75 group-hover:text-glow-crimson transition-all duration-300">
                    {display}
                  </span>
                  <span
                    className="text-lg opacity-18 group-hover:opacity-65 group-hover:translate-x-1 transition-all duration-300"
                    style={{ color: 'rgba(192,24,24,1)' }}
                  >
                    →
                  </span>
                </div>
              </a>
            </motion.div>
          ))}
        </section>

        {/* ── CLOSING QUOTE ──────────────────────────────────────── */}
        <section className="py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="relative p-8 md:p-12 overflow-hidden"
              style={{ background: 'rgba(192,24,24,0.04)', border: '1px solid rgba(192,24,24,0.18)' }}
            >
              <div className="absolute inset-0 shimmer-overlay pointer-events-none" />
              {/* Corner marks */}
              {['top-0 left-0 border-t border-l', 'top-0 right-0 border-t border-r', 'bottom-0 left-0 border-b border-l', 'bottom-0 right-0 border-b border-r'].map(cls => (
                <div key={cls} className={`absolute w-5 h-5 ${cls}`} style={{ borderColor: 'rgba(192,24,24,0.4)' }} />
              ))}

              <KhandaSymbol size={20} glow={false} animate={false} className="opacity-18 mx-auto mb-6" />
              <p className="text-sm md:text-base leading-relaxed italic relative z-10" style={{ opacity: 0.65 }}>
                "The Khalsa is not a relic — it is a living philosophy, continuously rediscovered."
              </p>
              <p className="text-[9px] tracking-[0.3em] opacity-25 mt-5 font-mono relative z-10">— NEO KHALSA</p>
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <div
          className="flex items-center justify-between pb-12 text-[9px] font-mono opacity-15 border-t pt-8"
          style={{ borderColor: 'rgba(255,255,255,0.06)' }}
        >
          <span>NEO KHALSA</span>
          <span>2026</span>
        </div>
      </div>
    </div>
  );
}
