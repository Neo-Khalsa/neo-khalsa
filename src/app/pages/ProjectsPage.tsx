import { motion } from "motion/react";
import projectImage1 from "../../assets/9db7de1cffccd7b3bcecbc3271c23d56717dcbc4.webp";
import projectImage2 from "../../assets/104fc68ae2769a86b33de8df270f335c79fa0eda.webp";
import projectImage3 from "../../assets/f51d02d1d6fe32ecb948954f06c2b5e6d43a9472.webp";
import logoImage from '../../assets/84335e1f178065509e21c16077749e55474b40ec.webp';
import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

// Metadata Dot Component
function MetadataDot({ filled }: { filled: boolean }) {
  return (
    <div className={`w-2 h-2 rounded-full border border-foreground/40 ${filled ? 'bg-foreground/60' : 'bg-transparent'}`}></div>
  );
}

// Diamond Diagram Component
function DiamondDiagram({ number }: { number: string }) {
  return (
    <div className="relative w-24 h-24">
      <div className="absolute inset-0 border border-foreground/30 rotate-45"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-2xl font-mono opacity-60">{number}</span>
      </div>
    </div>
  );
}

// Three Bar Icon Component
function ThreeBarIcon() {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="w-8 h-[2px] bg-foreground/40"></div>
      <div className="w-8 h-[2px] bg-foreground/40"></div>
      <div className="w-8 h-[2px] bg-foreground/40"></div>
    </div>
  );
}

// Buy Now Dropdown Component
function BuyNowDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 opacity-70 hover:opacity-100 transition-opacity font-mono text-xs tracking-wide"
      >
        Buy Now
        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 bg-background/95 backdrop-blur-sm border border-foreground/20 min-w-[160px] animate-slideDown z-10">
          <a
            href="https://www.houseofjouhal.com/product-page/neo-khalsa-koans"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-3 text-xs tracking-wide opacity-70 hover:opacity-100 hover:bg-foreground/5 transition-all border-b border-foreground/10"
            onClick={() => setIsOpen(false)}
          >
            House of Jouhal →
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-3 text-xs tracking-wide opacity-70 hover:opacity-100 hover:bg-foreground/5 transition-all"
            onClick={() => setIsOpen(false)}
          >
            Amazon →
          </a>
        </div>
      )}
    </div>
  );
}

export function ProjectsPage() {
  return (
    <div className="min-h-screen pt-20 md:pt-32 pb-16 md:pb-24 px-4 md:px-8">
      <div className="max-w-[1800px] mx-auto space-y-16 md:space-y-24">
        {/* PROJECT 01: Neo Khalsa Koans */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1],
            type: "tween"
          }}
          className="min-h-screen relative smooth-animation"
        >
          {/* Page Number - Desktop Only */}
          <div className="hidden md:block absolute bottom-0 left-0 text-xs opacity-20 font-mono">07</div>
          <div className="hidden md:block absolute bottom-0 right-0 text-xs opacity-20 font-mono">08</div>

          {/* Central Header */}
          <div className="flex items-center justify-center gap-4 md:gap-6 mb-12 md:mb-16">
            <div className="w-16 md:w-32 h-[1px] bg-foreground/20"></div>
            <h2 className="text-lg md:text-2xl tracking-[0.3em] opacity-60 font-mono">PROJECT I</h2>
            <div className="w-16 md:w-32 h-[1px] bg-foreground/20"></div>
          </div>

          {/* Theme Label */}
          <div className="text-center mb-8 md:mb-12">
            <p className="text-xs tracking-[0.25em] opacity-40">ADAPTIVE TRUTH</p>
          </div>

          {/* Main Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
            {/* Left Column - Image */}
            <div className="space-y-6">
              {/* Logo */}
              <div className="flex justify-center lg:justify-start mb-6 md:mb-8 min-h-[56px] md:min-h-[80px]">
                <img 
                  src={logoImage} 
                  alt="Neo Khalsa" 
                  className="w-14 md:w-20 h-auto opacity-70"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  style={{ aspectRatio: 'auto' }}
                />
              </div>

              {/* Featured Image with White Mat */}
              <div className="relative bg-white p-4 md:p-6">
                <motion.img
                  src={projectImage1}
                  alt="Neo Khalsa Koans"
                  className="w-full h-auto border border-gray-300 gpu-accelerate"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  whileHover={{ scale: 1.02 }}
                  transition={{ 
                    duration: 0.4,
                    ease: [0.25, 0.1, 0.25, 1],
                    type: "tween"
                  }}
                />
                <div className="mt-4 text-center">
                  <p className="text-sm tracking-wider text-gray-800 font-mono">NEO KHALSA KOANS</p>
                </div>
              </div>

              {/* Statement Box with Three-Bar Icon */}
              <div className="bg-foreground/10 border border-foreground/20 p-4 md:p-6 flex items-start gap-4">
                <div className="hidden md:block"><ThreeBarIcon /></div>
                <p className="text-sm leading-relaxed opacity-80 italic flex-1">
                  "A philosophical synthesis demonstrating that profound truths embedded in Sikh scripture echo across cultures and time"
                </p>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-8 md:space-y-12">
              {/* Large Project Title */}
              <div>
                <h1 className="text-4xl md:text-7xl lg:text-8xl tracking-wider mb-3 md:mb-4">NEO</h1>
                <h1 className="text-4xl md:text-7xl lg:text-8xl tracking-wider mb-3 md:mb-4">KHALSA</h1>
                <h1 className="text-4xl md:text-7xl lg:text-8xl tracking-wider opacity-60">KOANS</h1>
              </div>

              {/* Metadata with Dots */}
              <div className="space-y-3 md:space-y-4 text-sm">
                <h3 className="text-xs tracking-[0.25em] opacity-40 mb-4 md:mb-6">METADATA</h3>
                
                <div className="flex items-center justify-between border-b border-border/10 pb-2 md:pb-3">
                  <div className="flex items-center gap-3">
                    <MetadataDot filled={true} />
                    <span className="text-xs tracking-wider opacity-50">LOCATION</span>
                  </div>
                  <span className="opacity-70">Surrey</span>
                </div>

                <div className="flex items-center justify-between border-b border-border/10 pb-2 md:pb-3">
                  <div className="flex items-center gap-3">
                    <MetadataDot filled={true} />
                    <span className="text-xs tracking-wider opacity-50">PUBLISHER</span>
                  </div>
                  <span className="opacity-70">Neo Khalsa</span>
                </div>

                <div className="flex items-center justify-between border-b border-border/10 pb-2 md:pb-3">
                  <div className="flex items-center gap-3">
                    <MetadataDot filled={true} />
                    <span className="text-xs tracking-wider opacity-50">PAGES</span>
                  </div>
                  <span className="opacity-70 font-mono">273</span>
                </div>

                <div className="flex items-center justify-between border-b border-border/10 pb-2 md:pb-3">
                  <div className="flex items-center gap-3">
                    <MetadataDot filled={true} />
                    <span className="text-xs tracking-wider opacity-50">RELEASE</span>
                  </div>
                  <span className="opacity-70">2026</span>
                </div>

                <div className="flex items-center justify-between border-b border-border/10 pb-2 md:pb-3">
                  <div className="flex items-center gap-3">
                    <MetadataDot filled={true} />
                    <span className="text-xs tracking-wider opacity-50">STATUS</span>
                  </div>
                  <span className="opacity-70 font-mono">DONE</span>
                </div>

                <div className="flex items-center justify-between border-b border-border/10 pb-2 md:pb-3">
                  <div className="flex items-center gap-3">
                    <MetadataDot filled={true} />
                    <span className="text-xs tracking-wider opacity-50">ACQUIRE</span>
                  </div>
                  <BuyNowDropdown />
                </div>
              </div>

              {/* Details Section */}
              <div className="space-y-4 pt-4 md:pt-8">
                <h3 className="text-xs tracking-[0.25em] opacity-40 mb-4 md:mb-6">DETAILS</h3>
                <p className="text-sm leading-relaxed opacity-70">
                  The Founder merges Art History and Philosophy, drawing on archival imagery across time periods and cultures. 
                  Through visual form and analytical rigor, he translates Sikhi's profound principles into concepts that 
                  resonate universally.
                </p>
                <p className="text-sm leading-relaxed opacity-70">
                  Neo Khalsa Koans are paradoxical prompts designed to cut through conventional thought, complemented with 
                  classical art to bridge timeless wisdom with modern insight. Successfully crowdfunded for 2026 release.
                </p>
              </div>

              {/* Diamond Diagram - Desktop Only */}
              <div className="hidden md:flex justify-end pt-8">
                <DiamondDiagram number="01" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* PROJECT 02: Neo Saroop */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1],
            type: "tween"
          }}
          viewport={{ once: true, margin: "-100px" }}
          className="min-h-screen relative smooth-animation"
        >
          {/* Page Number - Desktop Only */}
          <div className="hidden md:block absolute bottom-0 left-0 text-xs opacity-20 font-mono">09</div>
          <div className="hidden md:block absolute bottom-0 right-0 text-xs opacity-20 font-mono">10</div>

          {/* Central Header */}
          <div className="flex items-center justify-center gap-4 md:gap-6 mb-12 md:mb-16">
            <div className="w-16 md:w-32 h-[1px] bg-foreground/20"></div>
            <h2 className="text-lg md:text-2xl tracking-[0.3em] opacity-60 font-mono">PROJECT II</h2>
            <div className="w-16 md:w-32 h-[1px] bg-foreground/20"></div>
          </div>

          {/* Theme Label */}
          <div className="text-center mb-8 md:mb-12">
            <p className="text-xs tracking-[0.25em] opacity-40">TANGIBLE TRUTH</p>
          </div>

          {/* Main Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
            {/* Left Column - Image */}
            <div className="space-y-6">
              {/* Featured Image with White Mat */}
              <div className="relative bg-white p-4 md:p-6">
                <motion.img
                  src={projectImage2}
                  alt="Neo Saroop"
                  className="w-full h-auto border border-gray-300 gpu-accelerate"
                  loading="lazy"
                  decoding="async"
                  whileHover={{ scale: 1.02 }}
                  transition={{ 
                    duration: 0.4,
                    ease: [0.25, 0.1, 0.25, 1],
                    type: "tween"
                  }}
                />
                <div className="mt-4 text-center">
                  <p className="text-sm tracking-wider text-gray-800 font-mono">NEO SAROOP</p>
                </div>
              </div>

              {/* Statement Box with Three-Bar Icon */}
              <div className="bg-foreground/10 border border-foreground/20 p-4 md:p-6 flex items-start gap-4">
                <div className="hidden md:block"><ThreeBarIcon /></div>
                <p className="text-sm leading-relaxed opacity-80 italic flex-1">
                  "Revitalizing the sacred tradition of handwritten saroops where craftsmanship meets devotion"
                </p>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-8 md:space-y-12">
              {/* Large Project Title */}
              <div>
                <h1 className="text-4xl md:text-7xl lg:text-8xl tracking-wider mb-3 md:mb-4">NEO</h1>
                <h1 className="text-4xl md:text-7xl lg:text-8xl tracking-wider opacity-60">SAROOP</h1>
              </div>

              {/* Metadata with Dots - Simplified on mobile */}
              <div className="space-y-3 md:space-y-4 text-sm">
                <h3 className="text-xs tracking-[0.25em] opacity-40 mb-4 md:mb-6">METADATA</h3>
                
                <div className="flex items-center justify-between border-b border-border/10 pb-2 md:pb-3">
                  <div className="flex items-center gap-3">
                    <MetadataDot filled={true} />
                    <span className="text-xs tracking-wider opacity-50">LOCATION</span>
                  </div>
                  <span className="opacity-70">Surrey</span>
                </div>

                <div className="flex items-center justify-between border-b border-border/10 pb-2 md:pb-3">
                  <div className="flex items-center gap-3">
                    <MetadataDot filled={true} />
                    <span className="text-xs tracking-wider opacity-50">LIKHARI</span>
                  </div>
                  <span className="opacity-70">Taksali</span>
                </div>

                <div className="flex items-center justify-between border-b border-border/10 pb-2 md:pb-3">
                  <div className="flex items-center gap-3">
                    <MetadataDot filled={true} />
                    <span className="text-xs tracking-wider opacity-50">PAPER</span>
                  </div>
                  <span className="opacity-70">Washi 170 GSM</span>
                </div>

                <div className="flex items-center justify-between border-b border-border/10 pb-2 md:pb-3">
                  <div className="flex items-center gap-3">
                    <MetadataDot filled={true} />
                    <span className="text-xs tracking-wider opacity-50">INK</span>
                  </div>
                  <span className="opacity-70 text-yellow-600/80 font-mono">GOLD</span>
                </div>

                <div className="flex items-center justify-between border-b border-border/10 pb-2 md:pb-3">
                  <div className="flex items-center gap-3">
                    <MetadataDot filled={false} />
                    <span className="text-xs tracking-wider opacity-50">STATUS</span>
                  </div>
                  <span className="opacity-70 font-mono">PRE-PRODUCTION</span>
                </div>

                <div className="flex items-center justify-between border-b border-border/10 pb-2 md:pb-3">
                  <div className="flex items-center gap-3">
                    <MetadataDot filled={false} />
                    <span className="text-xs tracking-wider opacity-50">RELEASE</span>
                  </div>
                  <span className="opacity-70">Late 2027</span>
                </div>
              </div>

              {/* Details Section */}
              <div className="space-y-4 pt-4 md:pt-8">
                <h3 className="text-xs tracking-[0.25em] opacity-40 mb-4 md:mb-6">DETAILS</h3>
                <p className="text-sm leading-relaxed opacity-70">
                  Crafted on thousand-year washi paper, dyed deep indigo and inscribed in gold. A Taksali Singh from Punjab 
                  will serve as the Likhari, painstakingly inscribing every letter with devotion and precision.
                </p>
                <p className="text-sm leading-relaxed opacity-70">
                  The aim is to establish beautiful, ceremoniously honored saroops as the norm in the Panth, replacing 
                  monotonous printed editions that lack the reverence they deserve.
                </p>
              </div>

              {/* Diamond Diagram - Desktop Only */}
              <div className="hidden md:flex justify-end pt-8">
                <DiamondDiagram number="02" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* PROJECT 03: Sikh Anime */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1],
            type: "tween"
          }}
          viewport={{ once: true, margin: "-100px" }}
          className="min-h-screen relative pb-16 md:pb-32 smooth-animation"
        >
          {/* Page Number - Desktop Only */}
          <div className="hidden md:block absolute bottom-0 left-0 text-xs opacity-20 font-mono">11</div>
          <div className="hidden md:block absolute bottom-0 right-0 text-xs opacity-20 font-mono">12</div>

          {/* Central Header */}
          <div className="flex items-center justify-center gap-4 md:gap-6 mb-12 md:mb-16">
            <div className="w-16 md:w-32 h-[1px] bg-foreground/20"></div>
            <h2 className="text-lg md:text-2xl tracking-[0.3em] opacity-60 font-mono">PROJECT III</h2>
            <div className="w-16 md:w-32 h-[1px] bg-foreground/20"></div>
          </div>

          {/* Theme Label */}
          <div className="text-center mb-8 md:mb-12">
            <p className="text-xs tracking-[0.25em] opacity-40">WORLDWIDE AUDIENCE</p>
          </div>

          {/* Main Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
            {/* Left Column - Image */}
            <div className="space-y-6">
              {/* Featured Image with White Mat */}
              <div className="relative bg-white p-4 md:p-6">
                <motion.img
                  src={projectImage3}
                  alt="Sikh Anime"
                  className="w-full h-auto border border-gray-300 gpu-accelerate"
                  loading="lazy"
                  decoding="async"
                  whileHover={{ scale: 1.02 }}
                  transition={{ 
                    duration: 0.4,
                    ease: [0.25, 0.1, 0.25, 1],
                    type: "tween"
                  }}
                />
                <div className="mt-4 text-center">
                  <p className="text-sm tracking-wider text-gray-800 font-mono">SIKH ANIME</p>
                </div>
              </div>

              {/* Statement Box with Three-Bar Icon */}
              <div className="bg-foreground/10 border border-foreground/20 p-4 md:p-6 flex items-start gap-4">
                <div className="hidden md:block"><ThreeBarIcon /></div>
                <p className="text-sm leading-relaxed opacity-80 italic flex-1">
                  "Bringing Sikh stories to a worldwide audience through the universal language of anime"
                </p>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-8 md:space-y-12">
              {/* Large Project Title */}
              <div>
                <h1 className="text-4xl md:text-7xl lg:text-8xl tracking-wider mb-3 md:mb-4">SIKH</h1>
                <h1 className="text-4xl md:text-7xl lg:text-8xl tracking-wider opacity-60">ANIME</h1>
              </div>

              {/* Metadata with Dots */}
              <div className="space-y-3 md:space-y-4 text-sm">
                <h3 className="text-xs tracking-[0.25em] opacity-40 mb-4 md:mb-6">METADATA</h3>
                
                <div className="flex items-center justify-between border-b border-border/10 pb-2 md:pb-3">
                  <div className="flex items-center gap-3">
                    <MetadataDot filled={false} />
                    <span className="text-xs tracking-wider opacity-50">LOCATION</span>
                  </div>
                  <span className="opacity-70">Japan</span>
                </div>

                <div className="flex items-center justify-between border-b border-border/10 pb-2 md:pb-3">
                  <div className="flex items-center gap-3">
                    <MetadataDot filled={false} />
                    <span className="text-xs tracking-wider opacity-50">STUDIO</span>
                  </div>
                  <span className="opacity-70">TBD</span>
                </div>

                <div className="flex items-center justify-between border-b border-border/10 pb-2 md:pb-3">
                  <div className="flex items-center gap-3">
                    <MetadataDot filled={false} />
                    <span className="text-xs tracking-wider opacity-50">EPISODES</span>
                  </div>
                  <span className="opacity-70 font-mono">26</span>
                </div>

                <div className="flex items-center justify-between border-b border-border/10 pb-2 md:pb-3">
                  <div className="flex items-center gap-3">
                    <MetadataDot filled={false} />
                    <span className="text-xs tracking-wider opacity-50">STATUS</span>
                  </div>
                  <span className="opacity-70 font-mono">CONCEPT ART</span>
                </div>

                <div className="flex items-center justify-between border-b border-border/10 pb-2 md:pb-3">
                  <div className="flex items-center gap-3">
                    <MetadataDot filled={false} />
                    <span className="text-xs tracking-wider opacity-50">BUDGET</span>
                  </div>
                  <span className="opacity-70">35K + 200K</span>
                </div>

                <div className="flex items-center justify-between border-b border-border/10 pb-2 md:pb-3">
                  <div className="flex items-center gap-3">
                    <MetadataDot filled={false} />
                    <span className="text-xs tracking-wider opacity-50">RELEASE</span>
                  </div>
                  <span className="opacity-70">Late 2028</span>
                </div>
              </div>

              {/* Details Section */}
              <div className="space-y-4 pt-4 md:pt-8">
                <h3 className="text-xs tracking-[0.25em] opacity-40 mb-4 md:mb-6">DETAILS</h3>
                <p className="text-sm leading-relaxed opacity-70">
                  Designed to introduce the Khalsa to audiences unfamiliar with Sikhi. The story follows Sikhs who 
                  uncover an ancient technology powered by their spiritual energy, sparking wars and destruction 
                  that mirrors historical trials.
                </p>
                <p className="text-sm leading-relaxed opacity-70">
                  Using a sci-fi backdrop infused with fantasy, the anime casts the widest possible net, reaching 
                  audiences globally while conveying the depth and values of the Khalsa in an engaging way.
                </p>
              </div>

              {/* Diamond Diagram - Desktop Only */}
              <div className="hidden md:flex justify-end pt-8">
                <DiamondDiagram number="03" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
