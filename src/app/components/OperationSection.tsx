import { useState } from 'react';
import { motion } from "motion/react";
import operationImage from "../../assets/d819f16399e086e1b759d42556e51b73a508aa03.webp";
import operationImageMain from "../../assets/d471ea4233bb041ed70df8b61c5f992a45b7d581.webp";

export function OperationSection() {
  const [currentSlide, setCurrentSlide] = useState(3);
  const totalSlides = 9;

  return (
    <div className="min-h-screen pt-20 md:pt-32 pb-16 md:pb-24 px-4 md:px-8 relative overflow-hidden">
      {/* Page Numbers - Desktop Only */}
      <div className="hidden md:block absolute bottom-8 left-8 text-xs opacity-20 font-mono">0</div>
      <div className="hidden md:block absolute bottom-8 right-8 text-xs opacity-20 font-mono">5</div>

      {/* Top Center Quote */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto text-center mb-8 md:mb-12 px-4"
      >
        <p className="text-xs md:text-sm leading-relaxed italic opacity-70">
          "Moving beyond mere talk to definitize ideas through embodied action and strategic discipline."
        </p>
      </motion.div>

      {/* Carousel Dots - Simplified on mobile */}
      <div className="flex justify-center md:justify-end md:mr-32 gap-2 mb-6 md:mb-8">
        {Array.from({ length: totalSlides }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-2 h-2 rounded-full border transition-all ${
              currentSlide === idx 
                ? 'border-foreground bg-foreground' 
                : 'border-foreground/30 bg-transparent hover:border-foreground/60'
            }`}
          />
        ))}
      </div>

      {/* Symbol Analysis Label - Desktop Only */}
      <div className="hidden lg:block absolute top-32 right-16 opacity-20">
        <p className="text-xs font-mono tracking-wider -rotate-90 origin-center whitespace-nowrap">
          SYMBOL ANALYSIS
        </p>
      </div>

      {/* Main Layout - Sidebar Style */}
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 lg:gap-16">
        {/* Left Sidebar - All Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 md:space-y-8"
        >
          {/* Vertical Line + Title */}
          <div className="flex items-start gap-3 md:gap-4">
            <div className="w-[1px] h-full min-h-[300px] md:min-h-[400px] bg-foreground/30"></div>
            <div className="space-y-4 md:space-y-6">
              {/* Large Stacked Title */}
              <div>
                <h1 className="text-2xl md:text-4xl tracking-wider leading-tight mb-2">OPERATION</h1>
                <h1 className="text-2xl md:text-4xl tracking-wider leading-tight mb-2">ACHERON</h1>
                <h2 className="text-lg md:text-2xl tracking-wider opacity-60 leading-tight mb-1">THE SHADOWED</h2>
                <h2 className="text-lg md:text-2xl tracking-wider opacity-60 leading-tight">PASSAGE</h2>
              </div>

              {/* START-UP Label */}
              <div className="pt-2 md:pt-4">
                <p className="text-xs tracking-[0.25em] opacity-40 mb-3 md:mb-4">START-UP</p>
                <p className="text-xs leading-relaxed opacity-70">
                  Operation Acheron embraces the sound, embodied, tactical nature of Neo Khalsa—the pathway into deeper 
                  self-discovery and self-actualization.
                </p>
              </div>

              {/* Metadata */}
              <div className="space-y-2 text-xs pt-2 md:pt-4">
                <div className="flex justify-between opacity-60 border-b border-border/10 pb-2">
                  <span className="tracking-wider opacity-50">INITIATED</span>
                  <span>2024</span>
                </div>
                <div className="flex justify-between opacity-60 border-b border-border/10 pb-2">
                  <span className="tracking-wider opacity-50">FOCUS</span>
                  <span className="font-mono">DISCIPLINE</span>
                </div>
                <div className="flex justify-between opacity-60 border-b border-border/10 pb-2">
                  <span className="tracking-wider opacity-50">APPROACH</span>
                  <span>Tactical</span>
                </div>
                <div className="flex justify-between opacity-60 border-b border-border/10 pb-2">
                  <span className="tracking-wider opacity-50">STATUS</span>
                  <span className="font-mono">ACTIVE</span>
                </div>
              </div>

              {/* Manifesto Box */}
              <div className="bg-foreground/10 border border-foreground/20 p-4 mt-4 md:mt-6">
                <p className="text-xs tracking-[0.2em] opacity-40 mb-2 md:mb-3">MANIFESTO</p>
                <p className="text-xs leading-relaxed opacity-70">
                  Neo Khalsa moves where others hesitate, confronting wounds, braving the harsh. Acheron takes 
                  the will, mind, and spirit to greater energy and control—the labor towards self-made lifestyles, 
                  disciplined and uncomplicated futures.
                </p>
              </div>

              {/* DISCIPLINE Label at Bottom */}
              <div className="pt-4 md:pt-8">
                <p className="text-xs tracking-[0.25em] opacity-30">DISCIPLINE</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Images Dominating */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Large Main Image */}
          <div className="relative overflow-hidden border border-border/30 mb-6 md:mb-8 bg-neutral-800 p-4 md:p-6">
            <motion.img
              src={operationImageMain}
              alt="Operation Acheron"
              className="w-full h-auto border border-neutral-700 brightness-90"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
            />
            <div className="absolute top-6 md:top-10 left-6 md:left-10 bg-background/90 px-3 py-1 border border-border/30">
              <span className="text-xs tracking-[0.2em] font-mono">02</span>
            </div>
            <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6 h-12 bg-gradient-to-t from-background/60 to-transparent flex items-end justify-between px-2 md:px-4 pb-2">
              <span className="text-[10px] opacity-30 font-mono">INIT. 2024</span>
              <span className="text-[10px] opacity-30 font-mono">TACTICAL</span>
            </div>
          </div>

          <div className="flex justify-between text-xs opacity-30 tracking-wider mb-8 md:mb-12">
            <span className="font-mono">ACHERON.V1</span>
            <span className="font-mono">ONGOING</span>
          </div>

          {/* Secondary Smaller Image - Hidden on mobile */}
          <div className="hidden lg:block lg:absolute lg:bottom-0 lg:right-0 lg:w-1/2 relative overflow-hidden border border-border/30 bg-neutral-800 p-4">
            <motion.img
              src={operationImage}
              alt="Operation Acheron Detail"
              className="w-full h-auto border border-neutral-700"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
            />
            <div className="absolute top-6 left-6 bg-background/90 px-2 py-1 border border-border/30">
              <span className="text-[10px] tracking-[0.2em] font-mono">02.1</span>
            </div>
          </div>

          {/* Decorative Warrior Graphics - Desktop Only */}
          <div className="hidden lg:flex items-center gap-8 absolute top-1/2 -left-20 opacity-[0.08]">
            {/* Shield */}
            <div className="relative w-12 h-16">
              <div className="absolute inset-0 border-[2px] border-foreground rounded-b-full"></div>
              <div className="absolute top-0 left-0 right-0 h-0 border-l-[24px] border-l-transparent border-r-[24px] border-r-transparent border-t-[12px] border-t-foreground"></div>
              <div className="absolute inset-2 flex items-center justify-center">
                <div className="w-3 h-[2px] bg-foreground"></div>
                <div className="w-[2px] h-3 bg-foreground absolute"></div>
              </div>
            </div>
            
            {/* Sword */}
            <div className="relative w-2 h-20">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-16 bg-foreground"></div>
              <div className="absolute top-16 left-1/2 -translate-x-1/2 w-6 h-[2px] bg-foreground"></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-6 border-[2px] border-foreground border-t-0"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
