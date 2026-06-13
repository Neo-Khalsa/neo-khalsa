import { motion } from "motion/react";
import projectImage1 from "../../assets/9db7de1cffccd7b3bcecbc3271c23d56717dcbc4.webp";
import projectImage2 from "../../assets/104fc68ae2769a86b33de8df270f335c79fa0eda.webp";
import projectImage3 from "../../assets/f51d02d1d6fe32ecb948954f06c2b5e6d43a9472.webp";
import logoImage from '../../assets/84335e1f178065509e21c16077749e55474b40ec.webp';
import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { ParticleField } from '../components/ParticleField';
import { KhandaSymbol } from '../components/KhandaSymbol';

function MetadataDot({ filled }: { filled: boolean }) {
  return (
    <div
      className={`w-2 h-2 rounded-full border ${filled ? '' : 'bg-transparent'}`}
      style={filled
        ? { background: 'rgba(192,24,24,0.75)', borderColor: 'rgba(192,24,24,0.6)',
            boxShadow: '0 0 6px rgba(192,24,24,0.5)' }
        : { borderColor: 'rgba(255,255,255,0.3)' }}
    />
  );
}

function DiamondDiagram({ number }: { number: string }) {
  return (
    <div className="relative w-24 h-24 animate-divine-breathe">
      <div
        className="absolute inset-0 rotate-45 border transition-all duration-500"
        style={{ borderColor: 'rgba(192,24,24,0.35)' }}
      />
      <div
        className="absolute inset-2 rotate-45 border"
        style={{ borderColor: 'rgba(192,24,24,0.15)' }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className="text-2xl font-mono text-glow-crimson"
          style={{ opacity: 0.7 }}
        >
          {number}
        </span>
      </div>
    </div>
  );
}

function BuyNowDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setIsOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 opacity-65 hover:opacity-100 transition-all font-mono text-xs tracking-wide hover:text-glow-crimson"
      >
        Buy Now
        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div
          className="absolute right-0 top-full mt-2 bg-background/97 backdrop-blur-sm min-w-[160px] animate-slideDown z-20"
          style={{ border: '1px solid rgba(192,24,24,0.3)' }}
        >
          <a
            href="https://www.houseofjouhal.com/product-page/neo-khalsa-koans"
            target="_blank" rel="noopener noreferrer"
            className="block px-4 py-3 text-xs tracking-wide opacity-65 hover:opacity-100 hover:bg-[rgba(192,24,24,0.06)] transition-all border-b border-foreground/10"
            onClick={() => setIsOpen(false)}
          >
            House of Jouhal →
          </a>
          <a
            href="#"
            target="_blank" rel="noopener noreferrer"
            className="block px-4 py-3 text-xs tracking-wide opacity-65 hover:opacity-100 hover:bg-[rgba(192,24,24,0.06)] transition-all"
            onClick={() => setIsOpen(false)}
          >
            Amazon →
          </a>
        </div>
      )}
    </div>
  );
}

interface ProjectProps {
  number: string;
  romanNumeral: string;
  theme: string;
  image: string;
  imageAlt: string;
  title: string[];
  statement: string;
  metadata: { label: string; val: string | JSX.Element; filled: boolean }[];
  details: string[];
  pageNums?: [string, string];
  showLogo?: boolean;
  showBuy?: boolean;
  initial?: boolean;
  diamondNum: string;
}

function ProjectSection({
  number, romanNumeral, theme, image, imageAlt, title, statement,
  metadata, details, pageNums, showLogo, showBuy, initial, diamondNum,
}: ProjectProps) {
  const motionProps = initial
    ? { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, ease: [0.25,0.1,0.25,1] as [number,number,number,number] } }
    : { initial: { opacity: 0, y: 50 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, ease: [0.25,0.1,0.25,1] as [number,number,number,number] }, viewport: { once: true, margin: '-100px' } };

  return (
    <motion.div {...motionProps} className="min-h-screen relative smooth-animation">
      {pageNums && (
        <>
          <div className="hidden md:block absolute bottom-0 left-0 text-xs opacity-15 font-mono">{pageNums[0]}</div>
          <div className="hidden md:block absolute bottom-0 right-0 text-xs opacity-15 font-mono">{pageNums[1]}</div>
        </>
      )}

      {/* Section header */}
      <div className="flex items-center justify-center gap-4 md:gap-6 mb-12 md:mb-16">
        <div className="w-16 md:w-32 h-[1px]" style={{ background: 'rgba(192,24,24,0.25)' }} />
        <div className="flex items-center gap-3">
          <KhandaSymbol size={14} glow={false} animate={false} className="text-white opacity-30" />
          <h2 className="text-lg md:text-2xl tracking-[0.3em] opacity-55 font-mono">PROJECT {romanNumeral}</h2>
        </div>
        <div className="w-16 md:w-32 h-[1px]" style={{ background: 'rgba(192,24,24,0.25)' }} />
      </div>

      <div className="text-center mb-8 md:mb-12">
        <p className="text-xs tracking-[0.25em] opacity-35">{theme}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">

        {/* Left — image */}
        <div className="space-y-6">
          {showLogo && (
            <div className="flex justify-center lg:justify-start mb-6 md:mb-8 min-h-[56px] md:min-h-[80px]">
              <img src={logoImage} alt="Neo Khalsa" className="w-14 md:w-20 h-auto opacity-65"
                   loading="eager" fetchPriority="high" decoding="async" />
            </div>
          )}

          {/* Image frame */}
          <div
            className="relative bg-white p-4 md:p-6 transition-all duration-500 group"
            style={{ boxShadow: '0 0 0 1px rgba(192,24,24,0.12)' }}
          >
            <motion.img
              src={image}
              alt={imageAlt}
              className="w-full h-auto border border-gray-300 gpu-accelerate"
              loading={initial ? 'eager' : 'lazy'}
              fetchPriority={initial ? 'high' : undefined}
              decoding="async"
              whileHover={{ scale: 1.025 }}
              transition={{ duration: 0.45, ease: [0.25,0.1,0.25,1] }}
            />
            {/* Crimson glow on hover */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ boxShadow: 'inset 0 0 30px rgba(192,24,24,0.08)' }}
            />
            <div className="mt-4 text-center">
              <p className="text-sm tracking-wider text-gray-700 font-mono">{imageAlt.toUpperCase()}</p>
            </div>
          </div>

          {/* Statement */}
          <div
            className="flex items-start gap-4 p-4 md:p-6 relative overflow-hidden"
            style={{ background: 'rgba(192,24,24,0.04)', border: '1px solid rgba(192,24,24,0.2)' }}
          >
            <div className="absolute inset-0 shimmer-overlay pointer-events-none" />
            <div className="hidden md:flex flex-col gap-1.5 relative z-10 pt-1">
              <div className="w-8 h-[2px] bg-foreground/35" />
              <div className="w-8 h-[2px] bg-foreground/35" />
              <div className="w-8 h-[2px] bg-foreground/35" />
            </div>
            <p className="text-sm leading-relaxed opacity-75 italic flex-1 relative z-10">"{statement}"</p>
          </div>
        </div>

        {/* Right — content */}
        <div className="space-y-8 md:space-y-12">
          {/* Large stacked title */}
          <div>
            {title.map((line, i) => (
              <h1
                key={i}
                className={`text-4xl md:text-7xl lg:text-8xl tracking-wider mb-3 md:mb-4 ${
                  i === title.length - 1 ? 'text-glow-crimson' : ''
                }`}
                style={i === title.length - 1 ? { opacity: 0.85 } : undefined}
              >
                {line}
              </h1>
            ))}
          </div>

          {/* Metadata */}
          <div className="space-y-3 md:space-y-4 text-sm">
            <h3 className="text-xs tracking-[0.25em] opacity-35 mb-4 md:mb-6">METADATA</h3>
            {metadata.map(({ label, val, filled }) => (
              <div key={label} className="flex items-center justify-between border-b border-border/10 pb-2 md:pb-3">
                <div className="flex items-center gap-3">
                  <MetadataDot filled={filled} />
                  <span className="text-xs tracking-wider opacity-45">{label}</span>
                </div>
                {label === 'ACQUIRE' && showBuy
                  ? <BuyNowDropdown />
                  : <span className="opacity-65">{val}</span>
                }
              </div>
            ))}
          </div>

          {/* Details */}
          <div className="space-y-4 pt-4 md:pt-8">
            <h3 className="text-xs tracking-[0.25em] opacity-35 mb-4 md:mb-6">DETAILS</h3>
            {details.map((para, i) => (
              <p key={i} className="text-sm leading-relaxed opacity-65">{para}</p>
            ))}
          </div>

          {/* Diamond diagram */}
          <div className="hidden md:flex justify-end pt-8">
            <DiamondDiagram number={diamondNum} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectsPage() {
  return (
    <div className="min-h-screen pt-20 md:pt-32 pb-16 md:pb-24 px-4 md:px-8 grain-overlay">
      <ParticleField />

      <div className="relative z-10 max-w-[1800px] mx-auto space-y-16 md:space-y-24">

        <ProjectSection
          number="1" romanNumeral="I" theme="ADAPTIVE TRUTH"
          image={projectImage1} imageAlt="Neo Khalsa Koans"
          title={['NEO', 'KHALSA', 'KOANS']}
          statement="A philosophical synthesis demonstrating that profound truths embedded in Sikh scripture echo across cultures and time"
          metadata={[
            { label: 'LOCATION',  val: 'Surrey',     filled: true },
            { label: 'PUBLISHER', val: 'Neo Khalsa', filled: true },
            { label: 'PAGES',     val: '273',         filled: true },
            { label: 'RELEASE',   val: '2026',        filled: true },
            { label: 'STATUS',    val: 'DONE',        filled: true },
            { label: 'ACQUIRE',   val: '',            filled: true },
          ]}
          details={[
            'The Founder merges Art History and Philosophy, drawing on archival imagery across time periods and cultures. Through visual form and analytical rigor, he translates Sikhi\'s profound principles into concepts that resonate universally.',
            'Neo Khalsa Koans are paradoxical prompts designed to cut through conventional thought, complemented with classical art to bridge timeless wisdom with modern insight. Successfully crowdfunded for 2026 release.',
          ]}
          pageNums={['07', '08']}
          showLogo initial showBuy
          diamondNum="01"
        />

        <ProjectSection
          number="2" romanNumeral="II" theme="TANGIBLE TRUTH"
          image={projectImage2} imageAlt="Neo Saroop"
          title={['NEO', 'SAROOP']}
          statement="Revitalizing the sacred tradition of handwritten saroops where craftsmanship meets devotion"
          metadata={[
            { label: 'LOCATION', val: 'Surrey',         filled: true },
            { label: 'LIKHARI',  val: 'Taksali',        filled: true },
            { label: 'PAPER',    val: 'Washi 170 GSM',  filled: true },
            { label: 'INK',      val: <span className="font-mono" style={{ color: 'rgba(196,164,73,0.9)' }}>GOLD</span>, filled: true },
            { label: 'STATUS',   val: 'PRE-PRODUCTION', filled: false },
            { label: 'RELEASE',  val: 'Late 2027',      filled: false },
          ]}
          details={[
            'Crafted on thousand-year washi paper, dyed deep indigo and inscribed in gold. A Taksali Singh from Punjab will serve as the Likhari, painstakingly inscribing every letter with devotion and precision.',
            'The aim is to establish beautiful, ceremoniously honoured saroops as the norm in the Panth, replacing monotonous printed editions that lack the reverence they deserve.',
          ]}
          pageNums={['09', '10']}
          diamondNum="02"
        />

        <ProjectSection
          number="3" romanNumeral="III" theme="WORLDWIDE AUDIENCE"
          image={projectImage3} imageAlt="Sikh Anime"
          title={['SIKH', 'ANIME']}
          statement="Bringing Sikh stories to a worldwide audience through the universal language of anime"
          metadata={[
            { label: 'LOCATION', val: 'Japan',       filled: false },
            { label: 'STUDIO',   val: 'TBD',         filled: false },
            { label: 'EPISODES', val: '26',           filled: false },
            { label: 'STATUS',   val: 'CONCEPT ART', filled: false },
            { label: 'BUDGET',   val: '35K + 200K',  filled: false },
            { label: 'RELEASE',  val: 'Late 2028',   filled: false },
          ]}
          details={[
            'Designed to introduce the Khalsa to audiences unfamiliar with Sikhi. The story follows Sikhs who uncover an ancient technology powered by their spiritual energy, sparking wars and destruction that mirrors historical trials.',
            'Using a sci-fi backdrop infused with fantasy, the anime casts the widest possible net, reaching audiences globally while conveying the depth and values of the Khalsa in an engaging way.',
          ]}
          pageNums={['11', '12']}
          diamondNum="03"
        />
      </div>
    </div>
  );
}
