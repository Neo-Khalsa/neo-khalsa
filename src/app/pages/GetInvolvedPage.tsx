import { motion } from "motion/react";
import swordImage from "../../assets/d471ea4233bb041ed70df8b61c5f992a45b7d581.webp";
import { ParticleField } from '../components/ParticleField';
import { KhandaSymbol } from '../components/KhandaSymbol';
import { Marquee } from '../components/Marquee';

/* Replace DONATE_URL with the real donation link when ready. */
const DONATE_URL = '#';
const CONTACT_EMAIL = 'mailto:neokhalsaofficial@gmail.com';

const TICKER = ['GET INVOLVED', 'CARRY THE WORK', 'FROM WORDS TO WILL', 'SUSTAIN', 'NEO KHALSA'];

export function GetInvolvedPage() {
  return (
    <div className="min-h-screen relative grain-overlay overflow-hidden">
      <ParticleField />

      {/* ── HERO (heading kept) ──────────────────────────────────── */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-5 md:px-10">
        <section className="pt-28 md:pt-40 pb-14 md:pb-16">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, ease: [0.25, 0.1, 0.25, 1] }}>
            <div className="flex items-center gap-3 mb-8 md:mb-12">
              <KhandaSymbol size={14} glow={false} animate={false} className="opacity-25" />
              <span className="text-[9px] tracking-[0.45em] opacity-25 font-mono">04 · GET INVOLVED</span>
            </div>

            <motion.h1 initial={{ opacity: 0, y: 44 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.95, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display leading-[0.9]" style={{ fontSize: 'clamp(3.4rem, 14vw, 10rem)' }}>Join the</motion.h1>
            <motion.h1 initial={{ opacity: 0, y: 44 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.95, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-display-italic leading-[0.9] text-glow-crimson" style={{ fontSize: 'clamp(3.4rem, 14vw, 10rem)' }}>work.</motion.h1>

            <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="gold-divider w-28 md:w-44 mt-9 mb-7" style={{ transformOrigin: 'left' }} />

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.65 }}
              className="font-display-italic max-w-xl opacity-60" style={{ fontSize: 'clamp(1.1rem, 2.6vw, 1.55rem)', lineHeight: 1.5 }}>
              "The Khalsa was never the work of one."
            </motion.p>
          </motion.div>
        </section>
      </div>

      {/* Ticker */}
      <div className="relative z-10 border-y py-3 hairline">
        <Marquee items={TICKER} className="text-[9px] tracking-[0.35em] opacity-15 font-mono" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 md:px-10">

        {/* ── INVITATION - golden-ratio split (1 : 1.618) ──────────── */}
        <section className="py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.618fr] gap-14 lg:gap-20 items-center">

            {/* visual - the talwar, quietly floating */}
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
              className="order-last lg:order-first"
            >
              <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                className="relative mx-auto w-full max-w-[340px]">
                <div className="absolute -inset-10 pointer-events-none" style={{ background: 'radial-gradient(circle at center, rgba(192,24,24,0.16) 0%, transparent 70%)' }} />
                <div className="relative bg-white p-3 md:p-4" style={{ boxShadow: '0 0 0 1px rgba(192,24,24,0.15), 0 36px 80px rgba(0,0,0,0.55)' }}>
                  <img src={swordImage} alt="Talwar - the shastar of the Khalsa" className="w-full h-auto block" loading="lazy" decoding="async" />
                </div>
                <p className="mt-4 text-center text-[8px] tracking-[0.35em] font-mono opacity-30">SHASTAR · THE EDGE OF INTENT</p>
              </motion.div>
            </motion.div>

            {/* pitch + two CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <p className="text-[9px] tracking-[0.45em] opacity-25 font-mono mb-7">THE INVITATION</p>
              <h2 className="font-display leading-[1.0]" style={{ fontSize: 'clamp(2.9rem, 6.5vw, 5.4rem)' }}>The work</h2>
              <h2 className="font-display-italic leading-[1.0] text-glow-crimson mb-8" style={{ fontSize: 'clamp(2.9rem, 6.5vw, 5.4rem)' }}>outlasts us.</h2>

              <p className="leading-relaxed opacity-65 max-w-lg" style={{ fontSize: 'clamp(1.1rem, 2.2vw, 1.35rem)' }}>
                Lend it your hand, or your means - and be counted among the few who build what endures.
              </p>

              <div className="flex flex-wrap items-center gap-5 mt-10">
                <a href={DONATE_URL} className="group inline-flex items-center gap-3 px-7 py-4 transition-all duration-300"
                  style={{ background: 'rgba(192,24,24,0.92)', boxShadow: '0 0 22px rgba(192,24,24,0.3)' }}>
                  <span className="text-[12px] tracking-[0.3em] font-mono">SUSTAIN THE WORK</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
                <a href={CONTACT_EMAIL} className="group inline-flex items-center gap-3 px-7 py-4 transition-all duration-300 hover:bg-[rgba(192,24,24,0.06)]"
                  style={{ border: '1px solid rgba(192,24,24,0.4)' }}>
                  <span className="text-[12px] tracking-[0.3em] font-mono opacity-80 group-hover:opacity-100">BEGIN A CONVERSATION</span>
                  <span className="opacity-60 transition-transform duration-300 group-hover:translate-x-1" style={{ color: '#C01818' }}>→</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── CLOSING ──────────────────────────────────────────────── */}
        <section className="py-16 md:py-24">
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center max-w-[1000px] mx-auto">
            <div className="crimson-divider mb-10 md:mb-14" />
            <h2 className="font-display leading-[1.08]" style={{ fontSize: 'clamp(2rem, 6vw, 4.2rem)' }}>Move where others</h2>
            <h2 className="font-display-italic leading-[1.08] text-glow-crimson" style={{ fontSize: 'clamp(2rem, 6vw, 4.2rem)' }}>hesitate.</h2>
            <div className="crimson-divider mt-10 md:mt-14" />
          </motion.div>
        </section>

        {/* Footer */}
        <div className="flex items-center justify-between pb-12 text-[9px] font-mono tracking-[0.25em] opacity-15 border-t hairline pt-8">
          <span>NEO KHALSA</span>
          <span>GET INVOLVED · MMXXVI</span>
        </div>
      </div>
    </div>
  );
}
