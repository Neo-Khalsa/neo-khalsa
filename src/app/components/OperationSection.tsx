import { useState } from 'react';
import { motion } from "motion/react";
import operationImage from "../../assets/d819f16399e086e1b759d42556e51b73a508aa03.webp";
import operationImageMain from "../../assets/d471ea4233bb041ed70df8b61c5f992a45b7d581.webp";
import { ParticleField } from './ParticleField';
import { KhandaSymbol } from './KhandaSymbol';

export function OperationSection() {
  const [currentSlide, setCurrentSlide] = useState(3);
  const totalSlides = 9;

  return (
    <div className="min-h-screen pt-20 md:pt-32 pb-16 md:pb-24 px-4 md:px-8 relative overflow-hidden grain-overlay">

      {/* Ambient particles */}
      <ParticleField />

      {/* Subtle sacred geometry — top-right corner */}
      <div
        className="hidden lg:block fixed top-0 right-0 pointer-events-none"
        style={{ zIndex: 0, width: '45vw', height: '45vw', opacity: 0.032 }}
      >
        <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg"
             className="w-full h-full">
          <circle cx="200" cy="200" r="180" stroke="white" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="130" stroke="white" strokeWidth="0.35" strokeDasharray="4 8" />
          <circle cx="200" cy="200" r="80"  stroke="white" strokeWidth="0.5" />
          {[0,45,90,135,180,225,270,315].map(deg => {
            const r = deg * Math.PI / 180;
            return <line key={deg}
              x1={200 + Math.cos(r) * 80} y1={200 + Math.sin(r) * 80}
              x2={200 + Math.cos(r) * 180} y2={200 + Math.sin(r) * 180}
              stroke="white" strokeWidth="0.25" />;
          })}
        </svg>
      </div>

      {/* Page numbers */}
      <div className="hidden md:block absolute bottom-8 left-8 text-xs opacity-15 font-mono z-10">0</div>
      <div className="hidden md:block absolute bottom-8 right-8 text-xs opacity-15 font-mono z-10">5</div>

      {/* Top quote */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-2xl mx-auto text-center mb-8 md:mb-12 px-4"
      >
        <div className="crimson-divider mb-6" />
        <p className="text-xs md:text-sm leading-relaxed italic opacity-65">
          "Moving beyond mere talk to definitize ideas through embodied action and strategic discipline."
        </p>
        <div className="crimson-divider mt-6" />
      </motion.div>

      {/* Carousel dots */}
      <div className="relative z-10 flex justify-center md:justify-end md:mr-32 gap-2 mb-6 md:mb-8">
        {Array.from({ length: totalSlides }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className="w-2 h-2 rounded-full border transition-all"
            style={currentSlide === idx
              ? { borderColor: 'rgba(192,24,24,0.85)', background: 'rgba(192,24,24,0.85)',
                  boxShadow: '0 0 8px rgba(192,24,24,0.6)' }
              : { borderColor: 'rgba(255,255,255,0.25)', background: 'transparent' }}
          />
        ))}
      </div>

      {/* Main layout */}
      <div className="relative z-10 max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 lg:gap-16">

        {/* ── Left sidebar ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 md:space-y-8"
        >
          <div className="flex items-start gap-3 md:gap-4">
            <div
              className="w-[1px] min-h-[300px] md:min-h-[400px]"
              style={{ background: 'linear-gradient(to bottom, rgba(192,24,24,0.5), rgba(255,255,255,0.25), rgba(192,24,24,0.15))' }}
            />
            <div className="space-y-4 md:space-y-6">
              {/* Khanda + title */}
              <div className="flex items-center gap-3 mb-2">
                <KhandaSymbol size={24} glow={true} animate={true} className="text-white opacity-65" />
              </div>

              <div>
                <h1 className="text-2xl md:text-4xl tracking-wider leading-tight mb-2 text-glow-crimson">OPERATION</h1>
                <h1 className="text-2xl md:text-4xl tracking-wider leading-tight mb-2">ACHERON</h1>
                <h2 className="text-lg md:text-2xl tracking-wider opacity-55 leading-tight mb-1">THE SHADOWED</h2>
                <h2 className="text-lg md:text-2xl tracking-wider opacity-55 leading-tight">PASSAGE</h2>
              </div>

              <div className="pt-2 md:pt-4">
                <p className="text-xs tracking-[0.25em] opacity-35 mb-3 md:mb-4">START-UP</p>
                <p className="text-xs leading-relaxed opacity-65">
                  Operation Acheron embraces the sound, embodied, tactical nature of Neo Khalsa —
                  the pathway into deeper self-discovery and self-actualization.
                </p>
              </div>

              {/* Metadata */}
              <div className="space-y-2 text-xs pt-2 md:pt-4">
                {[
                  { label: 'INITIATED', val: '2024' },
                  { label: 'FOCUS',     val: 'DISCIPLINE' },
                  { label: 'APPROACH',  val: 'Tactical' },
                  { label: 'STATUS',    val: 'ACTIVE' },
                ].map(({ label, val }) => (
                  <div key={label} className="flex justify-between opacity-55 border-b border-border/10 pb-2">
                    <span className="tracking-wider opacity-45">{label}</span>
                    <span>{val}</span>
                  </div>
                ))}
              </div>

              {/* Manifesto box */}
              <div
                className="p-4 mt-4 md:mt-6 relative overflow-hidden"
                style={{
                  background: 'rgba(192,24,24,0.045)',
                  border: '1px solid rgba(192,24,24,0.25)',
                }}
              >
                <div className="absolute inset-0 shimmer-overlay pointer-events-none" />
                <p className="text-xs tracking-[0.2em] opacity-35 mb-2 md:mb-3 relative z-10">MANIFESTO</p>
                <p className="text-xs leading-relaxed opacity-65 relative z-10">
                  Neo Khalsa moves where others hesitate, confronting wounds, braving the harsh.
                  Acheron takes the will, mind, and spirit to greater energy and control — the labour
                  towards self-made lifestyles, disciplined and uncomplicated futures.
                </p>
              </div>

              <div className="pt-4 md:pt-8">
                <p className="text-xs tracking-[0.25em] opacity-25">DISCIPLINE</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Right – images ───────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Main image */}
          <div
            className="relative overflow-hidden mb-6 md:mb-8 bg-neutral-900 p-4 md:p-6 transition-all duration-700 group"
            style={{ border: '1px solid rgba(192,24,24,0.22)' }}
          >
            <motion.img
              src={operationImageMain}
              alt="Operation Acheron"
              className="w-full h-auto brightness-90 gpu-accelerate"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5 }}
            />
            {/* Crimson hover veil */}
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(192,24,24,0.08)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div
              className="absolute top-6 md:top-10 left-6 md:left-10 bg-background/90 px-3 py-1 border"
              style={{ borderColor: 'rgba(192,24,24,0.3)' }}
            >
              <span className="text-xs tracking-[0.2em] font-mono text-glow-crimson">02</span>
            </div>
            <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6 h-12 bg-gradient-to-t from-background/60 to-transparent flex items-end justify-between px-2 md:px-4 pb-2">
              <span className="text-[10px] opacity-25 font-mono">INIT. 2024</span>
              <span className="text-[10px] opacity-25 font-mono">TACTICAL</span>
            </div>
          </div>

          <div className="flex justify-between text-xs opacity-22 tracking-wider mb-8 md:mb-12">
            <span className="font-mono">ACHERON.V1</span>
            <span className="font-mono">ONGOING</span>
          </div>

          {/* Secondary image — desktop only */}
          <div
            className="hidden lg:block lg:absolute lg:bottom-0 lg:right-0 lg:w-1/2 relative overflow-hidden bg-neutral-900 p-4 group"
            style={{ border: '1px solid rgba(192,24,24,0.18)' }}
          >
            <motion.img
              src={operationImage}
              alt="Operation Acheron Detail"
              className="w-full h-auto gpu-accelerate"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.5 }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(192,24,24,0.06)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div
              className="absolute top-6 left-6 bg-background/90 px-2 py-1 border"
              style={{ borderColor: 'rgba(192,24,24,0.25)' }}
            >
              <span className="text-[10px] tracking-[0.2em] font-mono">02.1</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
