import { motion } from "motion/react";
import assetImage1 from "../../assets/b15b54e92731eb30e0871fb4247f2fd293fb29fc.png";
import assetImage2 from "../../assets/09963943a3c9a0ff88e365b3dc5c6996783eb2ef.png";

export function SocialSection() {
  return (
    <div className="min-h-screen pt-20 md:pt-32 pb-16 px-4 md:px-8 relative overflow-hidden">
      {/* Ethereal Background Elements */}
      <div className="hidden md:block fixed top-1/5 right-1/6 opacity-[0.008] pointer-events-none">
        <div className="relative w-96 h-96">
          <div className="absolute inset-0 border border-foreground rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-foreground rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-foreground rounded-full"></div>
          <div className="absolute top-0 left-1/2 w-[1px] h-full bg-foreground -translate-x-1/2"></div>
          <div className="absolute left-0 top-1/2 w-full h-[1px] bg-foreground -translate-y-1/2"></div>
        </div>
      </div>
      <div className="hidden md:block fixed bottom-1/3 left-1/6 opacity-[0.01] pointer-events-none">
        <div className="text-[220px] font-mono tracking-widest">05</div>
      </div>
      <div className="hidden md:block fixed top-1/3 left-1/4 w-80 h-[1px] bg-gradient-to-r from-transparent via-foreground/5 to-transparent rotate-45 pointer-events-none"></div>
      <div className="hidden md:block fixed bottom-1/4 right-1/4 w-[1px] h-64 bg-gradient-to-b from-transparent via-foreground/8 to-transparent pointer-events-none"></div>
      
      <div className="max-w-[1800px] mx-auto space-y-24 md:space-y-48">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="hidden lg:block absolute -right-20 top-0 text-xs opacity-20 font-mono rotate-90 origin-right">
            REGISTRY.SYS
          </div>
          
          <div className="flex items-start gap-3 md:gap-6 ml-0 md:ml-4">
            <div className="h-16 md:h-28 w-[1px] bg-foreground/30"></div>
            <div className="space-y-2 md:space-y-4">
              <div className="flex flex-wrap items-center gap-4 md:gap-8">
                <h1 className="text-3xl md:text-7xl tracking-wider">ASSET REGISTRY</h1>
                <span className="text-xs opacity-20 font-mono mt-auto mb-1 md:mb-2">05</span>
              </div>
              <p className="text-xs md:text-sm tracking-wider opacity-60 max-w-xl">
                Strategic classification and deployment of resources human and material engineered for sustainable momentum.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Asset Building Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -left-16 top-0 text-xs opacity-10 font-mono rotate-90 origin-left">
            TWN0818
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.618fr] gap-12 md:gap-20">
            {/* Left - Graphics */}
            <div className="space-y-8 flex flex-col justify-center">
              {/* Abstract asset visualization graphics */}
              <div className="space-y-12 opacity-[0.15]">
                {/* Resource flow diagram */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 border-2 border-foreground flex items-center justify-center">
                      <div className="text-sm font-mono">M</div>
                    </div>
                    <div className="flex-1 h-[2px] bg-foreground relative">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 border-t-2 border-r-2 border-foreground rotate-45"></div>
                    </div>
                    <div className="w-24 h-24 border-2 border-foreground flex items-center justify-center">
                      <div className="text-lg font-mono">NK</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 border-2 border-foreground flex items-center justify-center">
                      <div className="text-sm font-mono">H</div>
                    </div>
                    <div className="flex-1 h-[2px] bg-foreground relative">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 border-t-2 border-r-2 border-foreground rotate-45"></div>
                    </div>
                    <div className="w-24 h-24 border-2 border-foreground flex items-center justify-center">
                      <div className="text-lg font-mono">NK</div>
                    </div>
                  </div>
                </div>

                {/* Classification matrix */}
                <div className="grid grid-cols-2 gap-4 max-w-md">
                  <div className="aspect-square border-2 border-foreground flex flex-col items-center justify-center p-4 text-center">
                    <div className="text-2xl font-mono mb-2">$</div>
                    <div className="text-[10px] tracking-wider">MATERIAL</div>
                  </div>
                  <div className="aspect-square border-2 border-foreground flex flex-col items-center justify-center p-4 text-center">
                    <div className="text-2xl font-mono mb-2">◉</div>
                    <div className="text-[10px] tracking-wider">HUMAN</div>
                  </div>
                  <div className="aspect-square border-2 border-foreground flex flex-col items-center justify-center p-4 text-center">
                    <div className="text-2xl font-mono mb-2">⟳</div>
                    <div className="text-[10px] tracking-wider">REPLENISH</div>
                  </div>
                  <div className="aspect-square border-2 border-foreground flex flex-col items-center justify-center p-4 text-center">
                    <div className="text-2xl font-mono mb-2">∞</div>
                    <div className="text-[10px] tracking-wider">SUSTAIN</div>
                  </div>
                </div>

                {/* Organizational hierarchy */}
                <div className="space-y-4 max-w-sm">
                  <div className="w-full h-12 border-2 border-foreground flex items-center justify-center">
                    <span className="text-xs font-mono tracking-wider">STRATEGIC CORE</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="flex-1 h-10 border-2 border-foreground flex items-center justify-center">
                      <span className="text-[10px] font-mono">PUBLIC</span>
                    </div>
                    <div className="flex-1 h-10 border-2 border-foreground flex items-center justify-center">
                      <span className="text-[10px] font-mono">PRIVATE</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-1">
                    <div className="aspect-square border border-foreground"></div>
                    <div className="aspect-square border border-foreground"></div>
                    <div className="aspect-square border border-foreground"></div>
                    <div className="aspect-square border border-foreground"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Text Content */}
            <div className="space-y-12">
              {/* Section Header */}
              <div className="space-y-4">
                <div className="flex items-center gap-6">
                  <div className="w-8 md:w-16 h-[1px] bg-foreground/30"></div>
                  <h2 className="text-3xl md:text-5xl tracking-wider">ASSET BUILDING</h2>
                  <span className="text-xs opacity-20 font-mono">2026</span>
                </div>
                <p className="text-xs tracking-[0.25em] opacity-40 ml-10 md:ml-20">PLANNING · CLASSIFICATION · REPLENISHMENT</p>
              </div>

              {/* Classification Detail */}
              <div className="border-l-2 border-foreground/20 pl-6 md:pl-12 py-6 ml-0 md:ml-20 space-y-6">
                <div className="space-y-3">
                  <h3 className="text-xl tracking-wider opacity-80">CLASSIFICATION OF ASSET</h3>
                  <p className="text-sm leading-relaxed opacity-70 max-w-3xl">
                    Assets are categorized into human and material to streamline strategy and resource management. Human assets encompass skills, knowledge, and expertise that drive action and decision-making. Material assets include physical resources, tools, and technologies essential to support operations.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 pt-4">
                  {/* Material Assets */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-4">
                      <div className="w-2 h-2 border-2 border-foreground"></div>
                      <h4 className="tracking-wider">MATERIAL ASSETS</h4>
                    </div>
                    <p className="text-xs leading-relaxed opacity-60 pl-6">
                      Material assets encompass the replenishment of funds and the accumulation of wealth through globally recognized asset classes. To enact meaningful change the Khalsa way, strategy must extend to engaging with major banks, mining corporations, lobbying efforts, and operating at the highest levels of influence.
                    </p>
                  </div>

                  {/* Human Assets Detail */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-4">
                      <div className="w-2 h-2 border-2 border-foreground"></div>
                      <h4 className="tracking-wider">HUMAN ASSETS</h4>
                    </div>
                    <p className="text-xs leading-relaxed opacity-60 pl-6">
                      Human assets serve in two ways: frontline individuals who operate in the public eye, and those who work behind the scenes. Public assets engage openly, promoting Sikhi, debating, and conducting apologetics. Private assets provide essential support by organizing funding and creating spaces for Neo Khalsa ideals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Human Assets Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -right-20 top-8 text-xs opacity-10 font-mono">
            <div className="flex flex-col items-center gap-2">
              <span className="text-4xl">0910</span>
              <div className="w-[1px] h-24 bg-foreground/20"></div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3 md:gap-6">
              <div className="w-12 md:w-24 h-[1px] bg-foreground/30"></div>
              <h2 className="text-3xl md:text-6xl tracking-wider">HUMAN ASSETS</h2>
            </div>
            <div className="ml-14 md:ml-28">
              <p className="text-xs tracking-[0.25em] opacity-40 mb-4">VOLUME I · HISTORIC PRESERVATION</p>
              <p className="text-sm leading-relaxed opacity-70 max-w-3xl">
                Cultivating human assets begins with establishing Neo Khalsa as a beacon to attract talent capable of making a real difference. The most crucial focus will be on thinkers those who can envision, strategize, and articulate ideas to advance the mission effectively.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Human Asset 01: Asa Singh */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -left-12 top-0 opacity-10">
            <div className="text-6xl font-mono">01</div>
          </div>

          <div className="space-y-8">
            {/* Name Header */}
            <div className="border-l-2 border-foreground/30 pl-6">
              <h3 className="text-5xl tracking-wider mb-2">ASA SINGH</h3>
              <p className="text-sm tracking-[0.2em] opacity-40">APOLOGIST & HISTORIAN</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-12">
              {/* Left: Image & Quick Info */}
              <div className="space-y-4">
                <div className="relative overflow-hidden border border-border/30">
                  <img src={assetImage1} alt="Asa Singh" className="w-full h-auto" />
                  <div className="absolute top-3 left-3 bg-background/90 px-2 py-1 border border-border/30">
                    <span className="text-[10px] tracking-[0.2em] font-mono">A.SINGH</span>
                  </div>
                </div>
                
                <div className="border border-border/20 p-4 space-y-3 text-xs">
                  <div className="flex justify-between">
                    <span className="opacity-40">LOCATION</span>
                    <span className="font-mono opacity-60">43.7315°N, 79.7624°W</span>
                  </div>
                  <div className="h-[1px] bg-border/10"></div>
                  <div className="flex justify-between">
                    <span className="opacity-40">STATUS</span>
                    <span className="font-mono">ACTIVE ASSET</span>
                  </div>
                  <div className="h-[1px] bg-border/10"></div>
                  <div>
                    <p className="opacity-40 mb-2">LANGUAGES</p>
                    <div className="flex gap-2">
                      <span className="border border-border/20 px-2 py-1 text-[10px]">EN</span>
                      <span className="border border-border/20 px-2 py-1 text-[10px]">PA</span>
                      <span className="border border-border/20 px-2 py-1 text-[10px]">HI</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Details */}
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  {/* Education */}
                  <div className="space-y-2">
                    <h4 className="text-xs tracking-wider opacity-40">EDUCATION</h4>
                    <div className="space-y-1 text-sm">
                      <p className="opacity-70">University of Toronto</p>
                      <p className="text-xs opacity-50">History and Psychology</p>
                    </div>
                  </div>

                  {/* Experience */}
                  <div className="space-y-2">
                    <h4 className="text-xs tracking-wider opacity-40">EXPERIENCE</h4>
                    <div className="space-y-1 text-xs opacity-70">
                      <p>Debate & Interfaith Dialogue</p>
                      <p>Against conversion</p>
                      <p>Canon of discourse</p>
                    </div>
                  </div>
                </div>

                <div className="h-[1px] bg-border/20"></div>

                {/* About */}
                <div className="space-y-2">
                  <h4 className="text-xs tracking-wider opacity-40">OVERVIEW</h4>
                  <p className="text-sm leading-relaxed opacity-70">
                    A student of Giani Inderjit Singh Raqbewale and a History graduate from the University of Toronto. Excels in debating, apologetics, and educating people in Sikh philosophy, particularly in metaphysics and community importance. Active contributor to Neo Khalsa through a Substack blog and podcast appearances.
                  </p>
                </div>

                <div className="h-[1px] bg-border/20"></div>

                {/* Skills */}
                <div className="space-y-2">
                  <h4 className="text-xs tracking-wider opacity-40">KEY SKILLS</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="border border-border/20 px-3 py-1 text-xs">Philosophy & Metaphysics</span>
                    <span className="border border-border/20 px-3 py-1 text-xs">Debating</span>
                    <span className="border border-border/20 px-3 py-1 text-xs">Apologetics</span>
                    <span className="border border-border/20 px-3 py-1 text-xs">Public Speaking</span>
                    <span className="border border-border/20 px-3 py-1 text-xs">Writing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Human Asset 02: Arjan Singh */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -right-12 top-0 opacity-10">
            <div className="text-6xl font-mono">02</div>
          </div>

          <div className="space-y-8">
            {/* Name Header */}
            <div className="border-l-2 border-foreground/30 pl-6">
              <h3 className="text-5xl tracking-wider mb-2">ARJAN SINGH</h3>
              <p className="text-sm tracking-[0.2em] opacity-40">GIANI IN THE MAKING</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12">
              {/* Left: Details */}
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  {/* Education */}
                  <div className="space-y-2">
                    <h4 className="text-xs tracking-wider opacity-40">EDUCATION</h4>
                    <div className="space-y-1 text-sm">
                      <p className="opacity-70">Nirmala Samparda</p>
                      <p className="text-xs opacity-50">Dharmic tradition</p>
                    </div>
                  </div>

                  {/* Experience */}
                  <div className="space-y-2">
                    <h4 className="text-xs tracking-wider opacity-40">EXPERIENCE</h4>
                    <div className="space-y-1 text-xs opacity-70">
                      <p>Samparda Knowledge</p>
                      <p>Santhiya Teacher</p>
                      <p>Deep study of Granths</p>
                    </div>
                  </div>
                </div>

                <div className="h-[1px] bg-border/20"></div>

                {/* About */}
                <div className="space-y-2">
                  <h4 className="text-xs tracking-wider opacity-40">OVERVIEW</h4>
                  <p className="text-sm leading-relaxed opacity-70">
                    A devoted student of the Nirmala Sampradaya under Sant Darshan Singh. Possesses extensive knowledge of Sikhi depths, skillfully connecting Vedantic wisdom with Sikh teachings. Aids in explaining the Gurus' words through Santhiya and continuous learning, making complex spiritual concepts accessible.
                  </p>
                </div>

                <div className="h-[1px] bg-border/20"></div>

                {/* Skills */}
                <div className="space-y-2">
                  <h4 className="text-xs tracking-wider opacity-40">KEY SKILLS</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="border border-border/20 px-3 py-1 text-xs">Santhiya</span>
                    <span className="border border-border/20 px-3 py-1 text-xs">Textual Analysis</span>
                    <span className="border border-border/20 px-3 py-1 text-xs">Vedantic Knowledge</span>
                    <span className="border border-border/20 px-3 py-1 text-xs">Teaching</span>
                    <span className="border border-border/20 px-3 py-1 text-xs">Research</span>
                  </div>
                </div>
              </div>

              {/* Right: Image & Quick Info */}
              <div className="space-y-4">
                <div className="relative overflow-hidden border border-border/30">
                  <img src={assetImage2} alt="Arjan Singh" className="w-full h-auto" />
                  <div className="absolute top-3 left-3 bg-background/90 px-2 py-1 border border-border/30">
                    <span className="text-[10px] tracking-[0.2em] font-mono">A.SINGH</span>
                  </div>
                </div>
                
                <div className="border border-border/20 p-4 space-y-3 text-xs">
                  <div className="flex justify-between">
                    <span className="opacity-40">LOCATION</span>
                    <span className="font-mono opacity-60">51.5072°N, 0.1276°W</span>
                  </div>
                  <div className="h-[1px] bg-border/10"></div>
                  <div className="flex justify-between">
                    <span className="opacity-40">STATUS</span>
                    <span className="font-mono">ACTIVE ASSET</span>
                  </div>
                  <div className="h-[1px] bg-border/10"></div>
                  <div>
                    <p className="opacity-40 mb-2">LANGUAGES</p>
                    <div className="flex gap-2">
                      <span className="border border-border/20 px-2 py-1 text-[10px]">EN</span>
                      <span className="border border-border/20 px-2 py-1 text-[10px]">PA</span>
                      <span className="border border-border/20 px-2 py-1 text-[10px]">SA</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Human Asset 03: Jodh Singh */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative pb-32"
        >
          <div className="absolute -left-12 top-0 opacity-10">
            <div className="text-6xl font-mono">03</div>
          </div>

          <div className="space-y-8">
            {/* Name Header */}
            <div className="border-l-2 border-foreground/30 pl-6">
              <h3 className="text-5xl tracking-wider mb-2">JODH SINGH</h3>
              <p className="text-sm tracking-[0.2em] opacity-40">BIRH EXPERT</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-12">
              {/* Left: Image & Quick Info */}
              <div className="space-y-4">
                <div className="relative overflow-hidden border border-border/30">
                  <img src={assetImage1} alt="Jodh Singh" className="w-full h-auto" />
                  <div className="absolute top-3 left-3 bg-background/90 px-2 py-1 border border-border/30">
                    <span className="text-[10px] tracking-[0.2em] font-mono">J.SINGH</span>
                  </div>
                </div>
                
                <div className="border border-border/20 p-4 space-y-3 text-xs">
                  <div className="flex justify-between">
                    <span className="opacity-40">LOCATION</span>
                    <span className="font-mono opacity-60">37.8136°S, 144.9631°E</span>
                  </div>
                  <div className="h-[1px] bg-border/10"></div>
                  <div className="flex justify-between">
                    <span className="opacity-40">STATUS</span>
                    <span className="font-mono">ACTIVE ASSET</span>
                  </div>
                  <div className="h-[1px] bg-border/10"></div>
                  <div>
                    <p className="opacity-40 mb-2">LANGUAGES</p>
                    <div className="flex gap-2">
                      <span className="border border-border/20 px-2 py-1 text-[10px]">EN</span>
                      <span className="border border-border/20 px-2 py-1 text-[10px]">PA</span>
                      <span className="border border-border/20 px-2 py-1 text-[10px]">HI</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Details */}
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  {/* Education */}
                  <div className="space-y-2">
                    <h4 className="text-xs tracking-wider opacity-40">EDUCATION</h4>
                    <div className="space-y-1 text-sm">
                      <p className="opacity-70">Nirmala Samparda</p>
                      <p className="text-xs opacity-50">Dharmic tradition</p>
                    </div>
                  </div>

                  {/* Experience */}
                  <div className="space-y-2">
                    <h4 className="text-xs tracking-wider opacity-40">EXPERIENCE</h4>
                    <div className="space-y-1 text-xs opacity-70">
                      <p>Birh Knowledge & Workshops</p>
                      <p>Deep study of Granths</p>
                      <p>Research showcase</p>
                    </div>
                  </div>
                </div>

                <div className="h-[1px] bg-border/20"></div>

                {/* About */}
                <div className="space-y-2">
                  <h4 className="text-xs tracking-wider opacity-40">OVERVIEW</h4>
                  <p className="text-sm leading-relaxed opacity-70">
                    Excels in the history of Birhs and the tradition of being a Likhari under Sant Darshan Singh. Has researched Birhs for many years, becoming an expert on their providence and nuances. His work highlights overlooked aspects of Sikh history that hold immense significance in illuminating the Panth's legacy.
                  </p>
                </div>

                <div className="h-[1px] bg-border/20"></div>

                {/* Skills */}
                <div className="space-y-2">
                  <h4 className="text-xs tracking-wider opacity-40">KEY SKILLS</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="border border-border/20 px-3 py-1 text-xs">Historical Research</span>
                    <span className="border border-border/20 px-3 py-1 text-xs">Birh Analysis</span>
                    <span className="border border-border/20 px-3 py-1 text-xs">Preservation</span>
                    <span className="border border-border/20 px-3 py-1 text-xs">Documentation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}