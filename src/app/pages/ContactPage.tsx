import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { motion } from 'motion/react';

export function ContactPage() {
  return (
    <div className="min-h-screen pt-20 md:pt-32 pb-24 md:pb-16 px-4 md:px-8 relative overflow-hidden">
      {/* Page Numbers - Hidden on mobile */}
      <div className="hidden md:block absolute bottom-8 left-8 text-xs opacity-20 font-mono">0</div>
      <div className="hidden md:block absolute bottom-8 right-8 text-xs opacity-20 font-mono">6</div>

      {/* Bottom Symbols - Hidden on mobile */}
      <div className="hidden md:flex absolute bottom-12 left-1/2 -translate-x-1/2 items-center gap-16 opacity-20">
        <div className="text-2xl font-serif">VI</div>
        <div className="text-xl font-mono tracking-widest">CONTACT</div>
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Large Title Section */}
        <motion.div 
          className="text-center mb-16 md:mb-24 space-y-4 md:space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl tracking-[0.3em] opacity-90">CONTACT</h1>
          <div className="text-[80px] md:text-[180px] font-mono leading-none opacity-10">06</div>
        </motion.div>

        {/* Centered Description - Simplified on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-12 md:mb-16 space-y-3 md:space-y-4"
        >
          <p className="hidden md:block text-xs tracking-[0.25em] opacity-40">DIRECTIVE</p>
          <h3 className="text-lg tracking-wider">COMMUNICATION</h3>
          <p className="text-xs leading-relaxed opacity-70 max-w-xl mx-auto px-4">
            Channels for inquiries, collaboration opportunities, and questions about the Neo Khalsa movement.
          </p>
        </motion.div>

        {/* Contact Information Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-6 md:space-y-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Email Section */}
            <div className="relative">
              <div className="hidden md:block absolute -left-6 top-0 text-xs opacity-20 font-mono tracking-wider -rotate-90 origin-left whitespace-nowrap">
                PRIMARY
              </div>
              <div className="border border-border/30 p-5 md:p-6 space-y-3 md:space-y-4">
                <div className="flex items-center justify-between">
                  <p className="text-xs tracking-[0.25em] opacity-40">EMAIL</p>
                  <div className="w-2 h-2 border border-foreground/30"></div>
                </div>
                <a 
                  href="mailto:contact@neokhalsa.com"
                  className="block text-sm font-mono opacity-70 hover:opacity-100 transition-opacity border-t border-border/10 pt-3 md:pt-4"
                >
                  contact@neokhalsa.com
                </a>
                <div className="hidden md:flex gap-2 pt-2">
                  {Array.from({ length: 8 }).map((_, idx) => (
                    <div key={idx} className="flex-1 h-1 bg-foreground/10"></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Social Section - Moved up on mobile, removed image */}
            <div className="relative">
              <div className="hidden md:block absolute -left-6 top-0 text-xs opacity-20 font-mono tracking-wider -rotate-90 origin-left whitespace-nowrap">
                SOCIAL
              </div>
              <div className="border border-border/30 p-5 md:p-6 space-y-3 md:space-y-4">
                <div className="flex items-center justify-between">
                  <p className="text-xs tracking-[0.25em] opacity-40">PLATFORMS</p>
                  <div className="w-2 h-2 border border-foreground/30"></div>
                </div>
                <div className="border-t border-border/10 pt-3 md:pt-4 space-y-3">
                  <a 
                    href="https://twitter.com/neokhalsa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-sm opacity-70 hover:opacity-100 transition-opacity group"
                  >
                    <span>Twitter / X</span>
                    <div className="w-1 h-1 bg-foreground/40 group-hover:bg-foreground"></div>
                  </a>
                  <a 
                    href="https://www.instagram.com/neokhalsa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-sm opacity-70 hover:opacity-100 transition-opacity group"
                  >
                    <span>Instagram</span>
                    <div className="w-1 h-1 bg-foreground/40 group-hover:bg-foreground"></div>
                  </a>
                </div>
                <div className="hidden md:flex gap-2 pt-2">
                  {Array.from({ length: 8 }).map((_, idx) => (
                    <div key={idx} className="flex-1 h-1 bg-foreground/10"></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Location Section - Hidden on mobile */}
            <div className="relative hidden md:block">
              <div className="absolute -left-6 top-0 text-xs opacity-20 font-mono tracking-wider -rotate-90 origin-left whitespace-nowrap">
                LOCATION
              </div>
              <div className="border border-border/30 p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <p className="text-xs tracking-[0.25em] opacity-40">COORDINATES</p>
                  <div className="w-2 h-2 border border-foreground/30"></div>
                </div>
                <div className="border-t border-border/10 pt-4 space-y-2">
                  <p className="text-sm font-mono opacity-70">49.1913°N, 122.8490°W</p>
                  <p className="text-xs opacity-50">Surrey, British Columbia</p>
                </div>
                <div className="flex gap-2 pt-2">
                  {Array.from({ length: 8 }).map((_, idx) => (
                    <div key={idx} className="flex-1 h-1 bg-foreground/10"></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Image Section - Hidden on mobile */}
            <div className="relative overflow-hidden border border-border/30 hidden md:block">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1678250991250-beb4b9cb297b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwbWluaW1hbGlzdCUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjY4MjMwNTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Architectural detail"
                className="w-full h-full object-cover opacity-40 grayscale"
              />
              <div className="absolute top-4 left-4 bg-background/90 px-3 py-2 border border-border/30">
                <span className="text-xs tracking-[0.25em] font-mono">IMAGE</span>
              </div>
            </div>
          </div>

          {/* Protocol Note - Hidden on mobile */}
          <div className="hidden md:block bg-foreground/5 border border-border/20 p-6 max-w-2xl mx-auto mt-16">
            <p className="text-[10px] tracking-[0.2em] opacity-40 mb-2">PROTOCOL</p>
            <p className="text-xs leading-relaxed opacity-70">
              Response times vary. Reference project names in subject lines for project-specific inquiries.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
