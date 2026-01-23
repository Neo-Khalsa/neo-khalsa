import { motion } from "motion/react";

export function DisciplineSection() {
  const principles = [
    {
      number: "01",
      title: "PHYSICAL SOVEREIGNTY",
      description: "Cultivate a body that serves as a temple of strength and resilience. Physical discipline is the foundation of mental clarity."
    },
    {
      number: "02",
      title: "INTELLECTUAL RIGOR",
      description: "Engage in continuous learning and critical thinking. Challenge assumptions and seek truth through discourse and study."
    },
    {
      number: "03",
      title: "SPIRITUAL PRACTICE",
      description: "Maintain daily connection with the divine through meditation, prayer, and contemplative practice."
    },
    {
      number: "04",
      title: "SERVICE TO COMMUNITY",
      description: "Dedicate time and energy to uplifting others. True leadership manifests through selfless service."
    }
  ];

  const practices = [
    { name: "MORNING MEDITATION", duration: "05:00 - 06:00" },
    { name: "PHYSICAL TRAINING", duration: "06:00 - 07:30" },
    { name: "STUDY & REFLECTION", duration: "20:00 - 21:30" },
    { name: "COMMUNITY SERVICE", duration: "VARIABLE" }
  ];

  return (
    <div className="min-h-screen pt-20 md:pt-32 pb-16 px-4 md:px-8 relative overflow-hidden">
      {/* Sophisticated Background Elements */}
      <div className="hidden md:block fixed top-1/3 left-1/4 opacity-[0.008] pointer-events-none">
        <svg width="400" height="400" viewBox="0 0 400 400">
          <circle cx="200" cy="200" r="150" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="100" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="50" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <line x1="200" y1="50" x2="200" y2="350" stroke="currentColor" strokeWidth="0.3" />
          <line x1="50" y1="200" x2="350" y2="200" stroke="currentColor" strokeWidth="0.3" />
        </svg>
      </div>
      <div className="hidden md:block fixed bottom-1/4 right-1/5 opacity-[0.01] pointer-events-none">
        <div className="text-[200px] font-mono tracking-widest">03</div>
      </div>
      <div className="hidden md:block fixed top-1/4 right-1/3 w-[1px] h-80 bg-gradient-to-b from-foreground/5 via-foreground/8 to-transparent pointer-events-none"></div>
      <div className="hidden md:block fixed bottom-1/3 left-1/2 w-64 h-[1px] bg-gradient-to-r from-transparent via-foreground/5 to-transparent pointer-events-none"></div>
      
      <div className="max-w-[1800px] mx-auto space-y-24 md:space-y-48">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Technical marker */}
          <div className="hidden lg:block absolute -left-16 top-0 text-xs opacity-20 font-mono rotate-90 origin-left">
            DAILY.PRACTICE
          </div>
          
          <div className="flex items-start gap-3 md:gap-6 ml-0 md:ml-8">
            <div className="h-16 md:h-24 w-[1px] bg-foreground/30"></div>
            <div className="space-y-2 md:space-y-4">
              <div className="flex items-center gap-4 md:gap-8">
                <h1 className="text-4xl md:text-7xl tracking-wider">DISCIPLINE</h1>
                <span className="text-xs opacity-20 font-mono mt-auto mb-1 md:mb-2">04</span>
              </div>
              <p className="text-xs md:text-sm tracking-wider opacity-60 max-w-xl">
                The bridge between goals and accomplishment unwavering commitment to self-mastery and transformation.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Principles Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Geometric marker */}
          <div className="absolute -right-16 top-1/4 text-xs opacity-10 font-mono">
            <div className="flex flex-col items-center gap-2">
              <div className="w-8 h-8 border-2 border-foreground"></div>
              <div className="w-[1px] h-16 bg-foreground/20"></div>
              <span className="rotate-90 origin-center">CORE</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.618fr] gap-24">
            {/* Left - Header */}
            <div className="space-y-12 lg:mt-16">
              <div className="relative">
                {/* Circle ornament */}
                <div className="absolute -left-8 top-6 w-4 h-4 rounded-full border border-foreground/20"></div>
                
                <h2 className="text-4xl tracking-wider mb-4">CORE</h2>
                <h3 className="text-3xl tracking-wider opacity-60 mb-4">PRINCIPLES</h3>
                <p className="text-xs tracking-[0.25em] opacity-40">FOUNDATION · MASTERY</p>
              </div>

              {/* Quote */}
              <div className="border-l-2 border-green-600/30 pl-8 py-6">
                <p className="text-sm leading-relaxed italic opacity-80">
                  "Discipline is the bridge between goals and accomplishment."
                </p>
                <p className="text-[10px] tracking-wider opacity-40 mt-3 font-mono">— PHILOSOPHY</p>
              </div>

              <p className="text-sm leading-loose opacity-70 max-w-sm">
                The Neo Khalsa path demands unwavering commitment to self-mastery, recognizing that individual 
                transformation ripples outward to transform communities. Through disciplined practice across physical, 
                intellectual, spiritual, and communal domains, we forge ourselves into instruments of change.
              </p>

              {/* Pillar graphics */}
              <div className="flex items-end gap-6 pt-12 opacity-[0.12]">
                {/* Four pillars */}
                <div className="flex flex-col items-center gap-1">
                  <div className="w-12 h-24 border-2 border-foreground flex items-end justify-center pb-1">
                    <span className="text-[8px] font-mono">01</span>
                  </div>
                  <div className="w-14 h-2 bg-foreground"></div>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="w-12 h-32 border-2 border-foreground flex items-end justify-center pb-1">
                    <span className="text-[8px] font-mono">02</span>
                  </div>
                  <div className="w-14 h-2 bg-foreground"></div>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="w-12 h-28 border-2 border-foreground flex items-end justify-center pb-1">
                    <span className="text-[8px] font-mono">03</span>
                  </div>
                  <div className="w-14 h-2 bg-foreground"></div>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="w-12 h-20 border-2 border-foreground flex items-end justify-center pb-1">
                    <span className="text-[8px] font-mono">04</span>
                  </div>
                  <div className="w-14 h-2 bg-foreground"></div>
                </div>
              </div>
            </div>

            {/* Right - Principles List */}
            <div className="space-y-10 lg:-mt-8">
              {principles.map((principle) => (
                <motion.div
                  key={principle.number}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="space-y-4 group"
                >
                  <div className="flex items-start gap-6">
                    <span className="text-xs tracking-[0.15em] opacity-40 mt-1 font-mono">
                      {principle.number}
                    </span>
                    <div className="space-y-3 flex-1">
                      <h4 className="text-sm tracking-[0.12em] group-hover:opacity-100 opacity-90 transition-opacity">
                        {principle.title}
                      </h4>
                      <p className="text-sm leading-relaxed opacity-60 max-w-lg">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                  <div className="h-[1px] bg-border/20 ml-12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Daily Practice Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Cross accent */}
          <div className="absolute -left-12 top-1/3 opacity-10">
            <div className="relative w-8 h-8">
              <div className="absolute w-full h-[2px] bg-foreground top-1/2"></div>
              <div className="absolute w-[2px] h-full bg-foreground left-1/2"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.618fr_1fr] gap-28">
            {/* Left - Daily Schedule */}
            <div className="space-y-12 lg:mt-20">
              <div className="relative">
                <h2 className="text-4xl tracking-wider mb-4">DAILY</h2>
                <h3 className="text-3xl tracking-wider opacity-60 mb-4">PRACTICE</h3>
                <p className="text-xs tracking-[0.25em] opacity-40">ROUTINE · CONSISTENCY</p>
              </div>

              {/* Schedule */}
              <div className="space-y-6">
                {practices.map((practice, idx) => (
                  <div key={idx} className="space-y-3">
                    <div className="flex justify-between items-start border-l-2 border-foreground/20 pl-6 py-3">
                      <div>
                        <p className="text-sm tracking-[0.12em] mb-1">{practice.name}</p>
                        <p className="text-xs tracking-[0.15em] opacity-40 font-mono">
                          {practice.duration}
                        </p>
                      </div>
                    </div>
                    <div className="h-[1px] bg-border/20"></div>
                  </div>
                ))}
              </div>

              {/* Clock/time graphics */}
              <div className="flex items-center gap-8 pt-8 opacity-[0.12]">
                {/* Clock face */}
                <div className="relative w-24 h-24">
                  <div className="absolute inset-0 border-[3px] border-foreground rounded-full"></div>
                  {/* Hour markers */}
                  <div className="absolute top-1 left-1/2 w-[2px] h-3 bg-foreground -translate-x-1/2"></div>
                  <div className="absolute bottom-1 left-1/2 w-[2px] h-3 bg-foreground -translate-x-1/2"></div>
                  <div className="absolute left-1 top-1/2 w-3 h-[2px] bg-foreground -translate-y-1/2"></div>
                  <div className="absolute right-1 top-1/2 w-3 h-[2px] bg-foreground -translate-y-1/2"></div>
                  {/* Clock hands */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-[3px] bg-foreground origin-left rotate-45"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3 h-3 bg-foreground rounded-full"></div>
                  </div>
                </div>

                {/* Calendar/routine */}
                <div className="flex flex-col gap-1">
                  {Array.from({ length: 7 }).map((_, i) => (
                    <div key={i} className="flex gap-1">
                      <div className="w-4 h-4 border-2 border-foreground"></div>
                      <div className="w-16 h-4 border border-foreground"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right - Commitments */}
            <div className="space-y-10 lg:-mt-8">
              <h3 className="text-xl tracking-wider">COMMITMENTS</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="border border-border/30 p-6 space-y-2 hover:bg-secondary/10 transition-colors">
                  <p className="text-xs tracking-[0.15em] opacity-40">WEEKLY</p>
                  <p className="text-2xl font-mono">7</p>
                  <p className="text-xs tracking-wider opacity-60">DAYS ACTIVE</p>
                </div>
                <div className="border border-border/30 p-6 space-y-2 hover:bg-secondary/10 transition-colors">
                  <p className="text-xs tracking-[0.15em] opacity-40">DAILY</p>
                  <p className="text-2xl font-mono">3+</p>
                  <p className="text-xs tracking-wider opacity-60">HOURS PRACTICE</p>
                </div>
                <div className="border border-border/30 p-6 space-y-2 hover:bg-secondary/10 transition-colors">
                  <p className="text-xs tracking-[0.15em] opacity-40">MONTHLY</p>
                  <p className="text-2xl font-mono">4</p>
                  <p className="text-xs tracking-wider opacity-60">COMMUNITY EVENTS</p>
                </div>
                <div className="border border-border/30 p-6 space-y-2 hover:bg-secondary/10 transition-colors">
                  <p className="text-xs tracking-[0.15em] opacity-40">ANNUAL</p>
                  <p className="text-2xl font-mono">∞</p>
                  <p className="text-xs tracking-wider opacity-60">GROWTH MINDSET</p>
                </div>
              </div>

              {/* Progress Tracking */}
              <div className="border border-border/30 p-8 space-y-6">
                <h4 className="text-sm tracking-[0.12em]">PROGRESS TRACKING</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs mb-2 opacity-60">
                      <span>CONSISTENCY</span>
                      <span>92%</span>
                    </div>
                    <div className="h-1 bg-secondary">
                      <div className="h-full bg-foreground w-[92%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-2 opacity-60">
                      <span>ENGAGEMENT</span>
                      <span>87%</span>
                    </div>
                    <div className="h-1 bg-secondary">
                      <div className="h-full bg-foreground w-[87%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-2 opacity-60">
                      <span>GROWTH</span>
                      <span>95%</span>
                    </div>
                    <div className="h-1 bg-secondary">
                      <div className="h-full bg-foreground w-[95%]"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Metadata */}
              <div className="space-y-3 text-sm pt-4">
                <div className="flex justify-between opacity-60 border-b border-border/10 pb-2">
                  <span className="text-xs tracking-wider opacity-50">FOCUS</span>
                  <span className="font-mono">DAILY</span>
                </div>
                <div className="flex justify-between opacity-60 border-b border-border/10 pb-2">
                  <span className="text-xs tracking-wider opacity-50">APPROACH</span>
                  <span>Holistic</span>
                </div>
                <div className="flex justify-between opacity-60 border-b border-border/10 pb-2">
                  <span className="text-xs tracking-wider opacity-50">STATUS</span>
                  <span className="font-mono">ONGOING</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}