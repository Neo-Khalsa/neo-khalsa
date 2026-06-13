import { motion } from "motion/react";
import missionImage from "../../assets/4c82dfbc2bfb2978f11914e22f7c49f4f06e2381.webp";
import { ParticleField } from './ParticleField';
import { SacredGeometryBg } from './SacredGeometryBg';
import { KhandaSymbol } from './KhandaSymbol';

const TimelineEntry = ({
  year, label, title, active = false,
}: { year: string; label: string; title: string; active?: boolean }) => (
  <div className={`relative pl-5 py-2.5 border-l-2 transition-all ${
    active
      ? 'border-[rgba(192,24,24,0.7)]'
      : 'border-foreground/25 hover:border-foreground/40'
  }`}>
    {active && (
      <div className="absolute -left-[5px] top-4 w-2 h-2 rounded-full bg-[#C01818]"
           style={{ boxShadow: '0 0 8px rgba(192,24,24,0.8), 0 0 16px rgba(192,24,24,0.35)' }} />
    )}
    <div className="flex items-baseline gap-3 mb-1">
      <span className={`text-lg font-mono ${active ? 'opacity-90' : 'opacity-60'}`}>{year}</span>
      {active && <div className="w-1.5 h-1.5 bg-[rgba(192,24,24,0.7)] rotate-45" />}
    </div>
    <p className="text-[10px] tracking-wider opacity-45 mb-0.5">{label}</p>
    <p className={`text-sm font-medium ${active ? '' : 'opacity-80'}`}>{title}</p>
  </div>
);

export function MissionSection() {
  return (
    <div className="min-h-screen pt-20 md:pt-32 pb-16 md:pb-24 px-4 md:px-8 relative overflow-hidden grain-overlay">

      {/* ── Ambient layers ─────────────────────────────────────────────── */}
      <ParticleField />
      <SacredGeometryBg opacity={0.035} />

      {/* Vertical side label */}
      <div className="hidden lg:block fixed left-4 top-1/2 -translate-y-1/2 opacity-10 z-10">
        <div className="flex flex-col items-center gap-4">
          <span className="text-xs font-mono tracking-wider -rotate-90 origin-center whitespace-nowrap">STATUS</span>
          <div className="w-[1px] h-32 bg-foreground/20" />
          <span className="text-2xl font-mono">III</span>
        </div>
      </div>

      {/* ── Content ────────────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-[1800px] mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative mb-12 md:mb-24 smooth-animation"
        >
          {/* Khanda accent */}
          <div className="flex items-start gap-3 md:gap-6">
            <div className="flex flex-col items-center">
              <div className="h-4 md:h-8 w-[1px] bg-[rgba(192,24,24,0.4)]" />
              <div className="h-8 md:h-16 w-[1px] bg-foreground/30" />
            </div>

            <div className="space-y-2 md:space-y-4">
              {/* Khanda + heading row */}
              <div className="flex items-center gap-4 md:gap-6 mb-2">
                <KhandaSymbol size={28} glow={true} animate={true}
                  className="text-white opacity-70" />
                <div className="h-[1px] w-12 md:w-20 bg-[rgba(192,24,24,0.35)]" />
              </div>

              <div className="flex items-center gap-3 md:gap-8">
                <h1 className="text-3xl md:text-7xl tracking-wider text-glow-crimson">MISSION</h1>
                <span className="text-xs opacity-20 font-mono mt-auto mb-1 md:mb-2">01</span>
              </div>

              {/* Crimson reveal line */}
              <motion.div
                className="crimson-divider"
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                style={{ width: '100%', transformOrigin: 'left' }}
              />

              <p className="text-xs md:text-sm tracking-wider opacity-60 max-w-xl pr-4 pt-1">
                A strategic, results-driven hub centered on getting things done —
                propelling the Khalsa into the second half of the 21st century.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Main grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 mb-16 md:mb-24 smooth-animation"
        >
          {/* ── Left column ──────────────────────────────────────────── */}
          <div className="lg:col-span-4 space-y-8">
            <div className="relative">
              <div className="hidden lg:block absolute -left-8 top-4 w-3 h-3 border border-[rgba(192,24,24,0.4)] rotate-45" />
              <h2 className="text-3xl md:text-4xl tracking-wider mb-2">NEO KHALSA</h2>
              <h3 className="text-xl md:text-2xl tracking-wider opacity-60 mb-4">PROJECT</h3>
              <p className="text-xs tracking-[0.25em] opacity-40">VOLUME I</p>
            </div>

            {/* Vision statement — crimson border glow */}
            <div
              className="border-l-2 pl-6 py-4 transition-all duration-500 hover:border-glow-crimson"
              style={{ borderColor: 'rgba(192,24,24,0.45)' }}
            >
              <p className="text-sm leading-relaxed italic opacity-80">
                "Neo Khalsa is a positive panthic institution that offers new ideas to people."
              </p>
            </div>

            {/* Metadata box */}
            <div
              className="border p-6 bg-secondary/5 space-y-3 text-sm animate-crimson-border"
              style={{ borderColor: 'rgba(192,24,24,0.2)' }}
            >
              {[
                { label: 'HQ LOCATION', val: '49.1913°N, 122.8490°W' },
                { label: 'SIZE',        val: '347' },
                { label: 'STATUS',      val: 'ACTIVE' },
              ].map(({ label, val }) => (
                <div key={label} className="flex justify-between opacity-60 border-b border-border/10 pb-2">
                  <span className="text-xs tracking-wider opacity-50">{label}</span>
                  <span className="font-mono text-xs">{val}</span>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <p className="text-sm leading-relaxed opacity-70">
                The objectives of Neo Khalsa are far-reaching, quietly concentrated in three domains:
                narrative influence, resource acquisition, and internal discipline.
              </p>
              <p className="text-xs leading-relaxed opacity-45 italic">
                Neo Khalsa operates as a strategic, results-driven hub, centered on getting things done.
              </p>
            </div>
          </div>

          {/* ── Centre column ────────────────────────────────────────── */}
          <div className="lg:col-span-5 space-y-8">
            {/* Mission image */}
            <div
              className="relative overflow-hidden transition-all duration-700 group"
              style={{ border: '1px solid rgba(192,24,24,0.18)' }}
            >
              <motion.img
                src={missionImage}
                alt="Neo Khalsa Mission"
                className="w-full h-auto gpu-accelerate"
                loading="lazy"
                decoding="async"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              />
              {/* Crimson corner overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[rgba(192,24,24,0.06)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="absolute top-4 right-4 bg-background/90 px-3 py-1 border border-border/30">
                <span className="text-xs tracking-[0.2em] font-mono">01</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-background/60 to-transparent flex items-end justify-center pb-2">
                <span className="text-[10px] opacity-30 font-mono">EST. 2020</span>
              </div>
            </div>

            <div className="flex justify-between text-xs opacity-25 tracking-wider">
              <span className="font-mono">NEO_KHALSA.V1</span>
              <span className="font-mono">PRESENT</span>
            </div>

            {/* Strategic quote */}
            <div
              className="pl-6 py-6 relative overflow-hidden"
              style={{
                borderLeft: '2px solid rgba(192,24,24,0.45)',
                background: 'rgba(192,24,24,0.04)',
              }}
            >
              {/* Shimmer overlay */}
              <div className="absolute inset-0 shimmer-overlay pointer-events-none" />
              <p className="text-sm leading-relaxed opacity-80 italic mb-3 relative z-10">
                "Starting with The Founder, Neo Khalsa has become a deliberate manifestation,
                quietly addressing the deficiencies within the Panth."
              </p>
              <p className="text-xs opacity-45 tracking-wider relative z-10">— CORE STRATEGY</p>
            </div>
          </div>

          {/* ── Right column – Timeline ──────────────────────────────── */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-xs tracking-[0.25em] opacity-45 mb-6">TIMELINE</h3>

            <div className="space-y-5">
              <TimelineEntry year="2025" label="PROJECT" title="Neo Khalsa Koans" />
              <TimelineEntry year="2026" label="PROJECT" title="Neo Saroop & Workshop" active />
              <TimelineEntry year="2027" label="PROJECT" title="Sikh Anime & VC Fund" />
              <TimelineEntry year="2030" label="MILESTONE" title="The Crossing" />
            </div>

            <div className="border-t border-border/20 pt-4 mt-8">
              <span className="text-[10px] font-mono opacity-25 block text-center">HIGH-LEVERAGE</span>
            </div>

            {/* Coordinates box */}
            <div
              className="border p-4 bg-secondary/5 mt-8 animate-crimson-border"
              style={{ borderColor: 'rgba(192,24,24,0.15)' }}
            >
              <p className="text-[10px] font-mono opacity-35 mb-2">COORDINATES</p>
              <p className="text-xs opacity-55">49.1913°N, 122.8490°W</p>
              <p className="text-[10px] opacity-25 mt-3">SURREY 2025</p>
            </div>
          </div>
        </motion.div>

        {/* ── Bottom — Origins & Operation ───────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 max-w-6xl mx-auto smooth-animation"
        >
          {/* Origins */}
          <div className="space-y-6">
            <h3 className="text-xs tracking-[0.25em] opacity-25 mb-4">ORIGINS</h3>
            <div
              className="border p-8 bg-secondary/5 space-y-4 transition-all duration-500 hover:border-glow-crimson"
              style={{ borderColor: 'rgba(255,255,255,0.1)' }}
            >
              <p className="text-sm leading-relaxed opacity-65">
                Neo Khalsa began as a digital forum of discourse centred around the E-Squared show,
                and has quietly evolved into the primary channel for disseminating ideas and voicing
                what the rest of the Panth will not.
              </p>
              <p className="text-sm leading-relaxed opacity-65">
                In this spirit, the ideological current of Neo Khalsa is now taking shape in tangible
                initiatives intended to propel the Khalsa into the second half of the 21st century.
              </p>
            </div>
          </div>

          {/* Operation */}
          <div className="space-y-6">
            <h3 className="text-xs tracking-[0.25em] opacity-25 mb-4">OPERATION</h3>
            <div
              className="pl-8 py-8 relative overflow-hidden"
              style={{
                borderLeft: '2px solid rgba(192,24,24,0.28)',
                background: 'rgba(192,24,24,0.035)',
              }}
            >
              <div className="absolute inset-0 shimmer-overlay pointer-events-none" />
              <p className="text-sm leading-relaxed opacity-65 italic mb-4 relative z-10">
                "Acheron is Neo Khalsa's shadowed crossing — a quiet passage from words to will."
              </p>
              <div className="flex items-center gap-4 text-xs opacity-35 relative z-10">
                <span className="font-mono">CLASSIFIED</span>
                <div className="flex-1 h-[1px] bg-foreground/10" />
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
