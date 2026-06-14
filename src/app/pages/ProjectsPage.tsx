import { motion } from "motion/react";
import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import projectImage1 from "../../assets/9db7de1cffccd7b3bcecbc3271c23d56717dcbc4.webp";
import projectImage3 from "../../assets/f51d02d1d6fe32ecb948954f06c2b5e6d43a9472.webp";
import projectImage4 from "../../assets/litgen.webp";
import haloImage from "../../assets/halo.webp";
import { ParticleField } from '../components/ParticleField';
import { KhandaSymbol } from '../components/KhandaSymbol';
import { Marquee } from '../components/Marquee';

const TICKER = ['THREE WORKS', 'KOANS', 'SIKH ANIME', 'LITERARY GENESIS', 'VOLUME I', 'NEO KHALSA'];

/* ── Acquire dropdown ──────────────────────────────────────────────────── */
function BuyDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const h = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, []);
  return (
    <div className="relative inline-block" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 text-[10px] tracking-[0.3em] font-mono transition-all hover:text-crimson"
        style={{ opacity: open ? 1 : 0.6 }}
      >
        ACQUIRE
        <ChevronDown size={10} className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div
          className="absolute left-0 top-full mt-3 min-w-[190px] animate-slideDown z-30 backdrop-blur-sm"
          style={{ background: 'rgba(14,14,14,0.97)', border: '1px solid rgba(192,24,24,0.28)', borderRadius: 14 }}
        >
          <a href="https://www.houseofjouhal.com/product-page/neo-khalsa-koans" target="_blank" rel="noopener noreferrer"
            className="block px-5 py-4 text-[10px] tracking-wider opacity-55 hover:opacity-100 hover:bg-[rgba(192,24,24,0.07)] transition-all border-b hairline" onClick={() => setOpen(false)}>
            HOUSE OF JOUHAL →
          </a>
          <a href="#" className="block px-5 py-4 text-[10px] tracking-wider opacity-55 hover:opacity-100 hover:bg-[rgba(192,24,24,0.07)] transition-all" onClick={() => setOpen(false)}>
            AMAZON →
          </a>
        </div>
      )}
    </div>
  );
}

/* ── Orbiting concentric rings ─────────────────────────────────────────── */
function OrbitRings() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
      <motion.svg
        viewBox="0 0 600 600"
        className="w-[125%] h-[125%]"
        animate={{ rotate: 360 }}
        transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
        style={{ opacity: 0.5 }}
      >
        <circle cx="300" cy="300" r="290" fill="none" stroke="rgba(192,24,24,0.16)" strokeWidth="1" strokeDasharray="2 10" />
        <circle cx="300" cy="300" r="240" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
        <circle cx="300" cy="8" r="3" fill="rgba(192,24,24,0.8)" />
      </motion.svg>
    </div>
  );
}

/* ── Project scene ─────────────────────────────────────────────────────── */
interface SceneProps {
  numeral: string;
  index: string;
  theme: string;
  image: string;
  imageAlt: string;
  flip?: boolean;
  title: [string, string];
  statement: string;
  meta: { label: string; value: React.ReactNode }[];
  status: string;
  showBuy?: boolean;
  initial?: boolean;
}

function ProjectScene({ numeral, index, theme, image, imageAlt, flip, title, statement, meta, status, showBuy, initial }: SceneProps) {
  const motionProps = initial
    ? { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 } }
    : { initial: { opacity: 0, y: 60 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-100px' } };

  const imageCol = (
    <div className={`relative flex justify-center ${flip ? 'lg:justify-start' : 'lg:justify-end'}`}>
      {/* radial bloom */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at center, rgba(192,24,24,0.10) 0%, transparent 62%)' }} />
      {/* orbit rings */}
      <div className="absolute inset-0"><OrbitRings /></div>

      {/* arch-framed image */}
      <motion.div
        whileHover={{ scale: 1.015 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-[78%] sm:w-[68%] lg:w-[80%] max-w-[440px] overflow-hidden group"
        style={{
          borderRadius: '50% 50% 18px 18px / 44% 44% 18px 18px',
          border: '1px solid rgba(192,24,24,0.32)',
          boxShadow: '0 0 0 8px rgba(10,10,10,0.6), 0 0 70px rgba(192,24,24,0.12)',
        }}
      >
        <img src={image} alt={imageAlt} className="w-full h-auto gpu-accelerate transition-all duration-700 group-hover:brightness-110"
          loading={initial ? 'eager' : 'lazy'} decoding="async" />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: 'linear-gradient(160deg, rgba(192,24,24,0.10) 0%, transparent 55%)' }} />
        {/* status — floating circular tag */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-4 px-4 py-2 backdrop-blur-md flex items-center gap-2"
          style={{ background: 'rgba(10,10,10,0.78)', border: '1px solid rgba(192,24,24,0.3)', borderRadius: 999 }}>
          <div className="sacred-dot" style={{ width: 5, height: 5 }} />
          <span className="text-[8px] tracking-[0.3em] font-mono opacity-75 whitespace-nowrap">{status}</span>
        </div>
      </motion.div>
    </div>
  );

  const contentCol = (
    <div className={`relative ${flip ? 'lg:pl-6' : 'lg:pr-6'}`}>
      {/* theme */}
      <div className="flex items-center gap-3 mb-6">
        <KhandaSymbol size={12} glow={false} animate={false} className="opacity-25" />
        <span className="text-[9px] tracking-[0.4em] opacity-30 font-mono">{theme}</span>
      </div>

      {/* title — oversized, may bleed */}
      <div className="relative">
        <h2 className="font-display leading-[0.86]" style={{ fontSize: 'clamp(3rem, 8.5vw, 7rem)' }}>{title[0]}</h2>
        <h2 className="font-display-italic leading-[0.86] text-glow-crimson" style={{ fontSize: 'clamp(3rem, 8.5vw, 7rem)' }}>{title[1]}</h2>
      </div>

      {/* one-line statement */}
      <p className="font-display-italic opacity-70 mt-7 max-w-md" style={{ fontSize: 'clamp(1.05rem, 2.3vw, 1.5rem)', lineHeight: 1.4 }}>
        “{statement}”
      </p>

      {/* meta — minimal inline cluster */}
      <div className="flex flex-wrap items-center gap-x-7 gap-y-3 mt-9">
        {meta.map(({ label, value }) => (
          <div key={label} className="flex flex-col">
            <span className="text-[8px] tracking-[0.3em] font-mono opacity-30 mb-1">{label}</span>
            <span className="text-[13px] font-mono opacity-70">{value}</span>
          </div>
        ))}
        {showBuy && (
          <div className="flex flex-col">
            <span className="text-[8px] tracking-[0.3em] font-mono opacity-30 mb-1">ORDER</span>
            <BuyDropdown />
          </div>
        )}
      </div>
    </div>
  );

  return (
    <motion.div {...motionProps} transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative px-5 md:px-10 py-24 md:py-36 max-w-[1500px] mx-auto overflow-hidden">
      {/* giant bleeding numeral */}
      <div className="absolute -top-10 md:-top-20 pointer-events-none select-none font-display"
        style={{ fontSize: 'clamp(14rem, 36vw, 34rem)', lineHeight: 0.8, opacity: 0.04, color: 'white', right: flip ? 'auto' : '-6vw', left: flip ? '-6vw' : 'auto' }}
        aria-hidden="true">{numeral}</div>

      <div className={`relative grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-16 lg:gap-10 items-center ${flip ? 'lg:[&>*:first-child]:order-last' : ''}`}>
        {imageCol}
        {contentCol}
      </div>

      {/* index marker */}
      <div className={`relative mt-14 flex items-center gap-4 ${flip ? 'lg:justify-end' : ''}`}>
        <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ border: '1px solid rgba(192,24,24,0.4)' }}>
          <span className="text-[10px] font-mono opacity-60">{index}</span>
        </div>
        <div className="h-px flex-1 max-w-[180px]" style={{ background: 'linear-gradient(90deg, rgba(192,24,24,0.4), transparent)' }} />
      </div>
    </motion.div>
  );
}

/* ── Page ──────────────────────────────────────────────────────────────── */
export function ProjectsPage() {
  return (
    <div className="min-h-screen relative grain-overlay overflow-hidden">
      <ParticleField />

      {/* ── Header ───────────────────────────────────────────────── */}
      <section className="relative z-10 px-5 md:px-10 pt-32 md:pt-48 pb-12 md:pb-20 max-w-[1500px] mx-auto">
        {/* halo behind title */}
        <div className="absolute pointer-events-none select-none"
          style={{ top: '6%', right: '-6%', width: 'min(70vw, 620px)', height: 'min(70vw, 620px)', opacity: 0.55, mixBlendMode: 'screen', backgroundImage: `url(${haloImage})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}
          aria-hidden="true" />

        <motion.div initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }} className="relative">
          <p className="text-[9px] tracking-[0.45em] opacity-30 font-mono mb-6">02 · VOLUME I</p>
          <h1 className="font-display leading-[0.82]" style={{ fontSize: 'clamp(4.5rem, 20vw, 18rem)' }}>Projects</h1>
          <div className="flex flex-wrap items-end gap-x-8 gap-y-2 mt-6">
            <span className="font-display-italic opacity-40" style={{ fontSize: 'clamp(1.4rem, 4vw, 2.6rem)' }}>three works</span>
            <span className="text-[10px] tracking-[0.35em] font-mono opacity-30">2026 — 2028</span>
          </div>
        </motion.div>
      </section>

      {/* Ticker */}
      <div className="relative z-10 border-y py-3 hairline">
        <Marquee items={TICKER} className="text-[9px] tracking-[0.35em] opacity-15 font-mono" />
      </div>

      {/* Scenes */}
      <div className="relative z-10">
        <ProjectScene
          numeral="I" index="01" theme="ADAPTIVE TRUTH"
          image={projectImage1} imageAlt="Neo Khalsa Koans"
          title={['Neo Khalsa', 'Koans']}
          statement="Ancient wisdom, cut to a single edge."
          meta={[{ label: 'FORM', value: 'Book · 273pp' }, { label: 'EDITION', value: 'First' }, { label: 'RELEASE', value: '2026' }]}
          status="AVAILABLE 2026" showBuy initial
        />

        <ArcDivider />

        <ProjectScene
          numeral="II" index="02" theme="WORLDWIDE AUDIENCE" flip
          image={projectImage3} imageAlt="Sikh Anime"
          title={['Sikh', 'Anime']}
          statement="The Khalsa, told to the whole world."
          meta={[{ label: 'STUDIO', value: 'Japan · TBD' }, { label: 'EPISODES', value: '26' }, { label: 'RELEASE', value: '2028' }]}
          status="CONCEPT ART"
        />

        <ArcDivider flip />

        <ProjectScene
          numeral="III" index="03" theme="WRITTEN TRUTH"
          image={projectImage4} imageAlt="Literary Genesis"
          title={['Literary', 'Genesis']}
          statement="The word, returned to the centre."
          meta={[{ label: 'FORM', value: 'Essay · Translation' }, { label: 'TONGUE', value: 'Punjabi · English' }, { label: 'RELEASE', value: '2027' }]}
          status="IN DEVELOPMENT"
        />
      </div>

      {/* Footer */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 px-5 md:px-10 py-12 text-[9px] font-mono tracking-[0.25em] opacity-15 border-t hairline">
        <span>NEO KHALSA</span>
        <span>VOLUME I · 2026–2028</span>
        <span>MMXXVI</span>
      </div>
    </div>
  );
}

/* ── Curved arc divider (replaces straight hairline) ───────────────────── */
function ArcDivider({ flip }: { flip?: boolean }) {
  return (
    <div className="relative z-10 h-24 md:h-32 max-w-[1500px] mx-auto overflow-hidden" aria-hidden="true">
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full" style={{ transform: flip ? 'scaleX(-1)' : 'none' }}>
        <path d="M0,20 Q600,140 1200,20" fill="none" stroke="rgba(192,24,24,0.22)" strokeWidth="1" />
      </svg>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full" style={{ background: 'rgba(192,24,24,0.7)' }} />
    </div>
  );
}
