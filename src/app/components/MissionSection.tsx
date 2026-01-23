import { motion } from "motion/react";
import missionImage from "../../assets/4c82dfbc2bfb2978f11914e22f7c49f4f06e2381.jpg";

export function MissionSection() {
  return (
    <div className="min-h-screen pt-20 md:pt-32 pb-16 md:pb-24 px-4 md:px-8 relative overflow-hidden">
      {/* Vertical Side Labels - Desktop Only */}
      <div className="hidden lg:block fixed left-4 top-1/2 -translate-y-1/2 opacity-10">
        <div className="flex flex-col items-center gap-4">
          <span className="text-xs font-mono tracking-wider -rotate-90 origin-center whitespace-nowrap">STATUS</span>
          <div className="w-[1px] h-32 bg-foreground/20"></div>
          <span className="text-2xl font-mono">III</span>
        </div>
      </div>

      {/* Background Grid Lines - Desktop Only */}
      <div className="hidden lg:block fixed top-1/4 right-1/4 opacity-[0.008] pointer-events-none">
        <div className="w-96 h-[1px] bg-foreground rotate-12"></div>
        <div className="w-64 h-[1px] bg-foreground -rotate-45 mt-32"></div>
        <div className="w-80 h-[1px] bg-foreground rotate-[65deg] -mt-16"></div>
      </div>
      
      <div className="max-w-[1800px] mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1],
            type: "tween"
          }}
          className="relative mb-12 md:mb-24 smooth-animation"
        >
          <div className="flex items-start gap-3 md:gap-6">
            <div className="h-12 md:h-24 w-[1px] bg-foreground/30"></div>
            <div className="space-y-2 md:space-y-4">
              <div className="flex items-center gap-3 md:gap-8">
                <h1 className="text-3xl md:text-7xl tracking-wider">MISSION</h1>
                <span className="text-xs opacity-20 font-mono mt-auto mb-1 md:mb-2">01</span>
              </div>
              <p className="text-xs md:text-sm tracking-wider opacity-60 max-w-xl pr-4">
                A strategic, results-driven hub centered on getting things done propelling the Khalsa into the second half of the 21st century.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Complex Multi-Column Grid Layout */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6,
            delay: 0.1,
            ease: [0.25, 0.1, 0.25, 1],
            type: "tween"
          }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 mb-16 md:mb-24 smooth-animation"
        >
          {/* Left Column - Project Info */}
          <div className="lg:col-span-4 space-y-8">
            <div className="relative">
              <div className="hidden lg:block absolute -left-8 top-4 w-3 h-3 border border-foreground/20 rotate-45"></div>
              
              <h2 className="text-3xl md:text-4xl tracking-wider mb-2">NEO KHALSA</h2>
              <h3 className="text-xl md:text-2xl tracking-wider opacity-60 mb-4">PROJECT</h3>
              <p className="text-xs tracking-[0.25em] opacity-40">VOLUME I</p>
            </div>

            {/* Vision Statement */}
            <div className="border-l-2 border-red-600/30 pl-6 py-4">
              <p className="text-sm leading-relaxed italic opacity-80">
                "Neo Khalsa is a positive panthic institution that offers new ideas to people."
              </p>
            </div>

            {/* Metadata */}
            <div className="border border-border/30 p-6 bg-secondary/5 space-y-3 text-sm">
              <div className="flex justify-between opacity-60 border-b border-border/10 pb-2">
                <span className="text-xs tracking-wider opacity-50">HQ LOCATION</span>
                <span className="font-mono text-xs">49.1913°N, 122.8490°W</span>
              </div>
              <div className="flex justify-between opacity-60 border-b border-border/10 pb-2">
                <span className="text-xs tracking-wider opacity-50">SIZE</span>
                <span className="font-mono">347</span>
              </div>
              <div className="flex justify-between opacity-60 border-b border-border/10 pb-2">
                <span className="text-xs tracking-wider opacity-50">STATUS</span>
                <span className="font-mono">ACTIVE</span>
              </div>
            </div>

            {/* Core Description */}
            <div className="space-y-4">
              <p className="text-sm leading-relaxed opacity-70">
                The objectives of Neo Khalsa are far-reaching, quietly concentrated in three domains: 
                narrative influence, resource acquisition, and internal discipline.
              </p>
              <p className="text-xs leading-relaxed opacity-50 italic">
                Neo Khalsa operates as a strategic, results-driven hub, centered on getting things done.
              </p>
            </div>
          </div>

          {/* Center Column - Main Image & Timeline */}
          <div className="lg:col-span-5 space-y-8">
            {/* Main Mission Image */}
            <div className="relative overflow-hidden border border-border/30">
              <motion.img
                src={missionImage}
                alt="Neo Khalsa Mission"
                className="w-full h-auto gpu-accelerate"
                loading="lazy"
                decoding="async"
                whileHover={{ scale: 1.05 }}
                transition={{ 
                  duration: 0.4,
                  ease: [0.25, 0.1, 0.25, 1],
                  type: "tween"
                }}
              />
              <div className="absolute top-4 right-4 bg-background/90 px-3 py-1 border border-border/30">
                <span className="text-xs tracking-[0.2em] font-mono">01</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-background/60 to-transparent flex items-end justify-center pb-2">
                <span className="text-[10px] opacity-30 font-mono">EST. 2020</span>
              </div>
            </div>

            <div className="flex justify-between text-xs opacity-30 tracking-wider">
              <span className="font-mono">NEO_KHALSA.V1</span>
              <span className="font-mono">PRESENT</span>
            </div>

            {/* Strategic Quote */}
            <div className="border-l-2 border-red-600/40 pl-6 py-6 bg-red-600/5">
              <p className="text-sm leading-relaxed opacity-80 italic mb-3">
                "Starting with The Founder, Neo Khalsa has become a deliberate manifestation, 
                quietly addressing the deficiencies within the Panth."
              </p>
              <p className="text-xs opacity-50 tracking-wider">— CORE STRATEGY</p>
            </div>
          </div>

          {/* Right Column - Timeline */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-xs tracking-[0.25em] opacity-50 mb-6">TIMELINE</h3>
            
            {/* Compact Timeline */}
            <div className="space-y-6">
              {/* 2025 */}
              <div className="border-l-2 border-foreground/30 pl-4 py-2">
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-lg font-mono opacity-70">2025</span>
                  <div className="w-1.5 h-1.5 bg-foreground/40 rotate-45"></div>
                </div>
                <p className="text-[10px] tracking-wider opacity-50 mb-1">PROJECT</p>
                <p className="text-sm font-medium">Neo Khalsa Koans</p>
              </div>

              {/* 2026 */}
              <div className="border-l-2 border-foreground/35 pl-4 py-2">
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-lg font-mono opacity-70">2026</span>
                  <div className="w-1.5 h-1.5 bg-foreground/40 rotate-45"></div>
                </div>
                <p className="text-[10px] tracking-wider opacity-50 mb-1">PROJECT</p>
                <p className="text-sm font-medium">Neo Saroop & Workshop</p>
              </div>

              {/* 2027 */}
              <div className="border-l-2 border-foreground/40 pl-4 py-2">
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-lg font-mono opacity-70">2027</span>
                  <div className="w-1.5 h-1.5 bg-foreground/40 rotate-45"></div>
                </div>
                <p className="text-[10px] tracking-wider opacity-50 mb-1">PROJECT</p>
                <p className="text-sm font-medium">Sikh Anime & VC Fund</p>
              </div>

              {/* 2030 */}
              <div className="border-l-2 border-foreground/50 pl-4 py-2 bg-foreground/5">
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-lg font-mono opacity-90">2030</span>
                  <div className="w-1.5 h-1.5 bg-foreground/60 rotate-45"></div>
                </div>
                <p className="text-[10px] tracking-wider opacity-50 mb-1">MILESTONE</p>
                <p className="text-sm font-medium">The Crossing</p>
              </div>
            </div>

            {/* Timeline Footer */}
            <div className="border-t border-border/20 pt-4 mt-8">
              <span className="text-[10px] font-mono opacity-30 block text-center">HIGH-LEVERAGE</span>
            </div>

            {/* Additional Technical Annotations */}
            <div className="border border-border/20 p-4 bg-secondary/5 mt-8">
              <p className="text-[10px] font-mono opacity-40 mb-2">COORDINATES</p>
              <p className="text-xs opacity-60">49.1913°N, 122.8490°W</p>
              <p className="text-[10px] opacity-30 mt-3">SURREY 2025</p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section - Origins & Acheron */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1],
            type: "tween"
          }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 max-w-6xl mx-auto smooth-animation"
        >
          {/* Origins */}
          <div className="space-y-6">
            <h3 className="text-xs tracking-[0.25em] opacity-30 mb-4">ORIGINS</h3>
            <div className="border border-border/30 p-8 bg-secondary/5 space-y-4">
              <p className="text-sm leading-relaxed opacity-70">
                Neo Khalsa began as a digital forum of discourse centered around the E-Squared show, 
                and has quietly evolved into the primary channel for disseminating ideas and voicing 
                what the rest of the Panth will not.
              </p>
              <p className="text-sm leading-relaxed opacity-70">
                In this spirit, the ideological current of Neo Khalsa is now taking shape in tangible 
                initiatives intended to propel the Khalsa into the second half of the 21st century.
              </p>
            </div>
          </div>

          {/* Acheron Connection */}
          <div className="space-y-6">
            <h3 className="text-xs tracking-[0.25em] opacity-30 mb-4">OPERATION</h3>
            <div className="border-l-2 border-red-600/20 pl-8 py-8 bg-red-600/5">
              <p className="text-sm leading-relaxed opacity-70 italic mb-4">
                "Acheron is Neo Khalsa's shadowed crossing a quiet passage from words to will."
              </p>
              <div className="flex items-center gap-4 text-xs opacity-40">
                <span className="font-mono">CLASSIFIED</span>
                <div className="flex-1 h-[1px] bg-foreground/10"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
