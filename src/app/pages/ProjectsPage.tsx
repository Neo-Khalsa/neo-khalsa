import { motion } from "motion/react";
import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import projectImage1 from "../../assets/9db7de1cffccd7b3bcecbc3271c23d56717dcbc4.webp";
import projectImage2 from "../../assets/104fc68ae2769a86b33de8df270f335c79fa0eda.webp";
import projectImage3 from "../../assets/f51d02d1d6fe32ecb948954f06c2b5e6d43a9472.webp";
import { ParticleField } from '../components/ParticleField';
import { KhandaSymbol } from '../components/KhandaSymbol';
import { Marquee } from '../components/Marquee';

const TICKER = ['NEO KHALSA', 'THREE INITIATIVES', 'KOANS', 'NEO SAROOP', 'SIKH ANIME', '2026 — 2028'];

/* ── Buy dropdown ────────────────────────────────────────────────────────── */
function BuyDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const h = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, []);
  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 text-[10px] tracking-[0.25em] font-mono transition-all hover:text-glow-crimson"
        style={{ opacity: open ? 1 : 0.55 }}
      >
        ACQUIRE
        <ChevronDown size={10} className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div
          className="absolute left-0 top-full mt-2 min-w-[180px] animate-slideDown z-30 backdrop-blur-sm"
          style={{ background: 'rgba(26,26,26,0.97)', border: '1px solid rgba(192,24,24,0.3)' }}
        >
          <a
            href="https://www.houseofjouhal.com/product-page/neo-khalsa-koans"
            target="_blank" rel="noopener noreferrer"
            className="block px-5 py-3.5 text-[10px] tracking-wider opacity-55 hover:opacity-100 hover:bg-[rgba(192,24,24,0.07)] transition-all border-b"
            style={{ borderColor: 'rgba(255,255,255,0.06)' }}
            onClick={() => setOpen(false)}
          >
            HOUSE OF JOUHAL →
          </a>
          <a
            href="#"
            target="_blank" rel="noopener noreferrer"
            className="block px-5 py-3.5 text-[10px] tracking-wider opacity-55 hover:opacity-100 hover:bg-[rgba(192,24,24,0.07)] transition-all"
            onClick={() => setOpen(false)}
          >
            AMAZON →
          </a>
        </div>
      )}
    </div>
  );
}

/* ── Meta row ─────────────────────────────────────────────────────────────── */
function MetaRow({ label, value, live }: { label: string; value: React.ReactNode; live?: boolean }) {
  return (
    <div
      className="flex items-center justify-between py-3 border-b"
      style={{ borderColor: 'rgba(255,255,255,0.06)' }}
    >
      <span className="text-[9px] tracking-[0.3em] font-mono opacity-25">{label}</span>
      <div className="flex items-center gap-2">
        {live && <div className="sacred-dot" style={{ width: 5, height: 5 }} />}
        <span className="text-[11px] font-mono opacity-55">{value}</span>
      </div>
    </div>
  );
}

/* ── Chapter divider ─────────────────────────────────────────────────────── */
function ChapterDivider({ numeral }: { numeral: string }) {
  return (
    <div
      className="relative z-10 flex items-center px-5 md:px-10 py-10 md:py-14"
      style={{ borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, rgba(192,24,24,0.3), transparent)' }} />
      <span
        className="mx-6 md:mx-10 text-3xl md:text-5xl font-mono tracking-[0.2em]"
        style={{ opacity: 0.2 }}
      >
        {numeral}
      </span>
      <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(192,24,24,0.3))' }} />
    </div>
  );
}

/* ── Project section ─────────────────────────────────────────────────────── */
interface ProjectProps {
  numeral: string;
  bgNum: string;
  theme: string;
  image: string;
  imageAlt: string;
  darkMat?: boolean;
  flip?: boolean;
  title: string[];
  titleGlow?: number;
  statement: string;
  meta: { label: string; value: React.ReactNode; live?: boolean }[];
  details: string[];
  status: string;
  showBuy?: boolean;
  initial?: boolean;
}

function ProjectSection({ numeral, bgNum, theme, image, imageAlt, darkMat, flip, title, titleGlow = title.length - 1, statement, meta, details, status, showBuy, initial }: ProjectProps) {
  const motionProps = initial
    ? { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as [number,number,number,number] } }
    : { initial: { opacity: 0, y: 48 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as [number,number,number,number] }, viewport: { once: true, margin: '-80px' } };

  const imageCol = (
    <div className="relative">
      {/* Giant chapter numeral — background */}
      <div
        className="absolute -top-8 md:-top-12 pointer-events-none select-none"
        style={{ fontSize: '22vw', lineHeight: 1, opacity: 0.03, fontFamily: 'Space Mono, monospace', color: 'white', right: flip ? 'auto' : '-2vw', left: flip ? '-2vw' : 'auto' }}
        aria-hidden="true"
      >
        {bgNum}
      </div>
      {/* Image mat */}
      <motion.div
        className={`relative overflow-hidden group transition-all duration-700 ${darkMat ? 'p-5 md:p-8' : 'bg-white p-5 md:p-8'}`}
        style={darkMat
          ? { background: 'rgba(14,14,14,0.9)', border: '1px solid rgba(192,24,24,0.2)' }
          : { boxShadow: '0 0 0 1px rgba(192,24,24,0.12)' }
        }
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src={image}
          alt={imageAlt}
          className={`w-full h-auto gpu-accelerate transition-all duration-700 group-hover:brightness-105 ${darkMat ? '' : 'border border-gray-200'}`}
          loading={initial ? 'eager' : 'lazy'}
          decoding="async"
        />
        {/* Hover crimson veil */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: 'linear-gradient(135deg, rgba(192,24,24,0.07) 0%, transparent 60%)' }}
        />
      </motion.div>

      {/* Statement under image */}
      <div
        className="mt-4 p-4 md:p-5 relative overflow-hidden"
        style={{ borderLeft: '2px solid rgba(192,24,24,0.4)', background: 'rgba(192,24,24,0.03)' }}
      >
        <div className="absolute inset-0 shimmer-overlay pointer-events-none" />
        <p className="text-xs leading-relaxed opacity-60 italic relative z-10">"{statement}"</p>
      </div>
    </div>
  );

  const contentCol = (
    <div className="space-y-8 md:space-y-10">
      {/* Theme label */}
      <div className="flex items-center gap-3">
        <KhandaSymbol size={12} glow={false} animate={false} className="opacity-22" />
        <span className="text-[9px] tracking-[0.4em] opacity-22 font-mono">{theme}</span>
      </div>

      {/* Title */}
      <div>
        {title.map((line, i) => (
          <h2
            key={i}
            className={`text-5xl md:text-7xl lg:text-8xl tracking-wide leading-[0.95] ${i === titleGlow ? 'text-glow-crimson' : ''}`}
          >
            {line}
          </h2>
        ))}
      </div>

      {/* Status badge */}
      <div
        className="inline-flex items-center gap-2 px-3 py-1.5"
        style={{ border: '1px solid rgba(192,24,24,0.3)', background: 'rgba(192,24,24,0.06)' }}
      >
        <div className="sacred-dot" style={{ width: 5, height: 5 }} />
        <span className="text-[9px] tracking-[0.3em] font-mono opacity-65">{status}</span>
      </div>

      {/* Meta */}
      <div className="space-y-0">
        {meta.map(({ label, value, live }) => (
          <MetaRow key={label} label={label} value={value} live={live} />
        ))}
        {showBuy && (
          <div
            className="flex items-center justify-between py-3 border-b"
            style={{ borderColor: 'rgba(255,255,255,0.06)' }}
          >
            <span className="text-[9px] tracking-[0.3em] font-mono opacity-25">ACQUIRE</span>
            <BuyDropdown />
          </div>
        )}
      </div>

      {/* Details */}
      <div className="space-y-4 pt-2">
        <p className="text-[9px] tracking-[0.4em] opacity-20 font-mono">DETAILS</p>
        {details.map((para, i) => (
          <p key={i} className="text-sm leading-relaxed opacity-55">{para}</p>
        ))}
      </div>
    </div>
  );

  return (
    <motion.div
      {...motionProps}
      className="px-5 md:px-10 py-16 md:py-24 max-w-[1600px] mx-auto"
    >
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-start ${flip ? 'lg:[&>*:first-child]:order-last' : ''}`}>
        {imageCol}
        {contentCol}
      </div>
    </motion.div>
  );
}

/* ── Page ───────────────────────────────────────────────────────────────── */
export function ProjectsPage() {
  return (
    <div className="min-h-screen relative grain-overlay">
      <ParticleField />

      {/* ── Header ─────────────────────────────────────────────────── */}
      <section className="relative z-10 px-5 md:px-10 pt-28 md:pt-36 pb-10 md:pb-14 max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-8 md:pb-10 border-b"
          style={{ borderColor: 'rgba(255,255,255,0.07)' }}
        >
          <div>
            <p className="text-[9px] tracking-[0.45em] opacity-22 font-mono mb-4">NEO KHALSA · 02 · PROJECTS</p>
            <h1 className="text-5xl md:text-8xl lg:text-[9vw] tracking-wide leading-none">THREE</h1>
            <h1 className="text-5xl md:text-8xl lg:text-[9vw] tracking-wide leading-none text-glow-crimson">INITIATIVES</h1>
          </div>
          <div className="text-right space-y-1">
            <p className="text-2xl md:text-4xl font-mono opacity-18 tracking-wider">2026</p>
            <div className="h-px w-full" style={{ background: 'rgba(192,24,24,0.3)' }} />
            <p className="text-2xl md:text-4xl font-mono opacity-18 tracking-wider">2028</p>
          </div>
        </motion.div>
      </section>

      {/* Ticker */}
      <div className="relative z-10 border-b py-3" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
        <Marquee items={TICKER} className="text-[9px] tracking-[0.35em] opacity-15 font-mono" />
      </div>

      {/* ── PROJECT I — KOANS ──────────────────────────────────────── */}
      <div className="relative z-10">
        <ProjectSection
          numeral="I" bgNum="I" theme="ADAPTIVE TRUTH · PROJECT I"
          image={projectImage1} imageAlt="Neo Khalsa Koans"
          title={['NEO KHALSA', 'KOANS']} titleGlow={1}
          statement="A philosophical synthesis demonstrating that profound truths embedded in Sikh scripture echo across cultures and time"
          meta={[
            { label: 'PUBLISHER', value: 'Neo Khalsa', live: true },
            { label: 'PAGES',     value: '273' },
            { label: 'LOCATION',  value: 'Surrey BC' },
            { label: 'RELEASE',   value: '2026', live: true },
          ]}
          details={[
            'The Founder merges Art History and Philosophy, drawing on archival imagery across time periods and cultures. Through visual form and analytical rigor, he translates Sikhi\'s profound principles into concepts that resonate universally.',
            'Neo Khalsa Koans are paradoxical prompts designed to cut through conventional thought, complemented with classical art to bridge timeless wisdom with modern insight. Successfully crowdfunded for 2026 release.',
          ]}
          status="COMPLETE · CROWDFUNDED · AVAILABLE 2026"
          showBuy initial
        />
      </div>

      <ChapterDivider numeral="II" />

      {/* ── PROJECT II — SAROOP ────────────────────────────────────── */}
      <div className="relative z-10">
        <ProjectSection
          numeral="II" bgNum="II" theme="TANGIBLE TRUTH · PROJECT II"
          image={projectImage2} imageAlt="Neo Saroop" darkMat flip
          title={['NEO', 'SAROOP']} titleGlow={1}
          statement="Revitalizing the sacred tradition of handwritten saroops where craftsmanship meets devotion"
          meta={[
            { label: 'PAPER',    value: 'Washi 170 GSM' },
            { label: 'INK',      value: <span style={{ color: 'rgba(196,164,73,0.9)' }}>GOLD</span> },
            { label: 'LIKHARI',  value: 'Taksali Singh' },
            { label: 'LOCATION', value: 'Punjab → Surrey' },
            { label: 'RELEASE',  value: 'Late 2027' },
          ]}
          details={[
            'Crafted on thousand-year washi paper, dyed deep indigo and inscribed in gold. A Taksali Singh from Punjab will serve as the Likhari, painstakingly inscribing every letter with devotion and precision.',
            'The aim is to establish beautiful, ceremoniously honoured saroops as the norm in the Panth, replacing monotonous printed editions that lack the reverence they deserve.',
          ]}
          status="PRE-PRODUCTION · LATE 2027"
        />
      </div>

      <ChapterDivider numeral="III" />

      {/* ── PROJECT III — ANIME ────────────────────────────────────── */}
      <div className="relative z-10">
        <ProjectSection
          numeral="III" bgNum="III" theme="WORLDWIDE AUDIENCE · PROJECT III"
          image={projectImage3} imageAlt="Sikh Anime" darkMat
          title={['SIKH', 'ANIME']} titleGlow={1}
          statement="Bringing Sikh stories to a worldwide audience through the universal language of anime"
          meta={[
            { label: 'STUDIO',   value: 'TBD · Japan' },
            { label: 'EPISODES', value: '26' },
            { label: 'BUDGET',   value: '35K + 200K' },
            { label: 'STATUS',   value: 'Concept Art' },
            { label: 'RELEASE',  value: 'Late 2028' },
          ]}
          details={[
            'Designed to introduce the Khalsa to audiences unfamiliar with Sikhi. The story follows Sikhs who uncover an ancient technology powered by their spiritual energy, sparking wars and destruction that mirrors historical trials.',
            'Using a sci-fi backdrop infused with fantasy, the anime casts the widest possible net, reaching audiences globally while conveying the depth and values of the Khalsa in an engaging way.',
          ]}
          status="CONCEPT ART · 2028"
        />
      </div>

      {/* Footer strip */}
      <div
        className="relative z-10 flex items-center justify-between px-5 md:px-10 py-10 text-[9px] font-mono opacity-15 border-t"
        style={{ borderColor: 'rgba(255,255,255,0.06)' }}
      >
        <span>NEO KHALSA</span>
        <span>THREE INITIATIVES · 2026–2028</span>
        <span>SURREY</span>
      </div>
    </div>
  );
}
