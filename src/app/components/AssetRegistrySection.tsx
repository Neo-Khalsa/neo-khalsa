import { useState } from 'react';
import { motion, AnimatePresence } from "motion/react";
import assetImage1 from "../../assets/b15b54e92731eb30e0871fb4247f2fd293fb29fc.png";
import assetImage2 from "../../assets/09963943a3c9a0ff88e365b3dc5c6996783eb2ef.png";
import assetGridImage from "../../assets/e794e30f5d95623797655a17dd31d2b0fd6bc95d.png";
import logoImage from '../../assets/84335e1f178065509e21c16077749e55474b40ec.png';
import asaSinghPortrait from "../../assets/60709e882963ac69655fb3b44e405b973edeeb9e.png";
import arjanSinghPortrait from "../../assets/b86ac6613e9bfb44e0ce4d10d38e39e3e34476ff.png";
import jodhSinghPortrait from "../../assets/55a581fe46d9bb3d99cf39a4a1652372a53ece34.png";
import { Users, Briefcase, FileText, Shield, Target, Layers } from 'lucide-react';

// Unsplash image for human assets symbol
const crownImage = "https://images.unsplash.com/photo-1759523207844-51c953516339?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc2ljYWwlMjBjcm93biUyMGdvbGR8ZW58MXx8fHwxNzY2ODI2Mjg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

type ViewType = 'building' | 'human-assets';

export function AssetRegistrySection() {
  const [currentView, setCurrentView] = useState<ViewType>('building');

  return (
    <div className="min-h-screen">
      <AnimatePresence mode="wait">
        {currentView === 'building' && (
          <AssetBuildingView key="building" onNavigate={setCurrentView} />
        )}
        {currentView === 'human-assets' && (
          <HumanAssetsView key="human-assets" onNavigate={setCurrentView} />
        )}
      </AnimatePresence>
    </div>
  );
}

// Asset Building Main View
function AssetBuildingView({ onNavigate }: { onNavigate: (view: ViewType) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen pt-20 md:pt-32 pb-16 md:pb-24 px-4 md:px-8 relative overflow-hidden"
    >
      {/* Page Numbers - Desktop Only */}
      <div className="hidden md:block absolute bottom-8 left-8 text-xs opacity-20 font-mono">0</div>
      <div className="hidden md:block absolute bottom-8 right-8 text-xs opacity-20 font-mono">5</div>

      {/* Bottom Symbols - Desktop Only */}
      <div className="hidden md:flex absolute bottom-12 left-1/2 -translate-x-1/2 items-center gap-16 opacity-20">
        <div className="text-2xl font-serif">III</div>
        <div className="text-xl font-mono tracking-widest">8250</div>
      </div>

      {/* Main Grid Layout */}
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 lg:gap-16">
        {/* Left Sidebar - Navigation & Classification */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Vertical Line */}
          <div className="flex gap-6">
            <div className="w-[1px] min-h-[600px] bg-foreground/30"></div>
            <div className="space-y-8 flex-1">
              {/* Classification Section */}
              <div>
                <p className="text-xs tracking-[0.25em] opacity-40 mb-4">CLASSIFICATION</p>
                <h3 className="text-lg tracking-wider mb-3">OF ASSET</h3>
                <p className="text-xs leading-relaxed opacity-70">
                  Assets are categorized into human and material to streamline strategy and resource management.
                </p>
              </div>

              {/* Human Assets Project Button */}
              <button
                onClick={() => onNavigate('human-assets')}
                className="w-full text-left border border-border/30 p-4 hover:bg-foreground/5 transition-all group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 border-2 border-foreground group-hover:bg-foreground transition-all"></div>
                  <h4 className="text-sm tracking-wider">HUMAN ASSETS</h4>
                </div>
                <p className="text-[10px] leading-relaxed opacity-60 pl-5">
                  Frontline and behind-the-scenes individuals driving strategy and action.
                </p>
              </button>

              {/* Material Assets Project */}
              <div className="w-full text-left border border-border/30 p-4 opacity-40">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 border-2 border-foreground"></div>
                  <h4 className="text-sm tracking-wider">MATERIAL ASSETS</h4>
                </div>
                <p className="text-[10px] leading-relaxed opacity-60 pl-5">
                  Financial resources and wealth accumulation through recognized asset classes.
                </p>
              </div>

              {/* Resources Section */}
              <div>
                <p className="text-xs tracking-[0.25em] opacity-40 mb-4">RESOURCES</p>
                <div className="space-y-2 text-xs opacity-60">
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-foreground/40"></div>
                    <span>Strategic Planning</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-foreground/40"></div>
                    <span>Resource Allocation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-foreground/40"></div>
                    <span>Deployment Framework</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Header + Image Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-12"
        >
          {/* Large "ASSET TYPE" + "05" */}
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-7xl tracking-[0.3em] opacity-90">ASSET PROTOCOL</h1>
            <div className="text-[120px] md:text-[180px] font-mono leading-none opacity-10">05</div>
          </div>

          {/* Full Grid Image */}
          <motion.div
            className="relative max-w-4xl mx-auto border border-border/30"
            style={{ height: '600px' }}
          >
            {/* Single Image - Full Display */}
            <img 
              src={assetGridImage} 
              alt="Asset Registry" 
              className="w-full h-full object-cover"
            />
            
            {/* Overlaid Grid Lines to Create Three Sections */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Vertical Line - Divides left/right */}
              <div className="absolute left-1/2 top-0 w-[16px] h-full bg-background"></div>
              
              {/* Horizontal Line - Divides top-right/bottom-right */}
              <div className="absolute left-1/2 top-1/2 w-1/2 h-[16px] bg-background"></div>
            </div>

            {/* Hover Zones for Interactive Feedback */}
            <motion.div
              whileHover={{ opacity: 0.1 }}
              className="absolute left-0 top-0 w-1/2 h-full bg-foreground opacity-0 transition-opacity pointer-events-auto"
            />
            <motion.div
              whileHover={{ opacity: 0.1 }}
              className="absolute left-1/2 top-0 w-1/2 h-1/2 bg-foreground opacity-0 transition-opacity pointer-events-auto"
            />
            <motion.div
              whileHover={{ opacity: 0.1 }}
              className="absolute left-1/2 top-1/2 w-1/2 h-1/2 bg-foreground opacity-0 transition-opacity pointer-events-auto"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

// Human Assets View
function HumanAssetsView({ onNavigate }: { onNavigate: (view: ViewType) => void }) {
  const profiles = [
    {
      name: 'ASA SINGH',
      code: 'A.SINGH',
      profileNum: '01',
      quote: 'Asa Singh, a scholar with his sword at his hip at the Bloor St Gurdwara, his best argument circulating senselessly in stale cool air.',
      education: [
        { degree: 'M.A. History', institution: 'York University', year: '2023' },
        { degree: 'B.A. Philosophy', institution: 'University of Toronto', year: '2020' }
      ],
      experience: [
        { role: 'Historical Research', org: 'Independent Scholar', year: '2023-Present' },
        { role: 'Teaching Fellow', org: 'York University', year: '2021-2023' }
      ],
      proficiency: { english: 90, punjabi: 75, research: 95, writing: 88 },
      about: 'Asa Singh represents emerging strengths in the realm of scholarship, combining historical knowledge with tactical awareness. His work is sensitizing the Panth, where diverse threads must weave into an organized structure for coherent action.',
      portrait: asaSinghPortrait,
      number: '8250'
    },
    {
      name: 'ARJAN SINGH',
      code: 'A.SINGH',
      profileNum: '02',
      quote: 'Arjan Singh, a shadow with the sword at his hip in the House. If Nirankar, his best argument circulating senselessly in stale cool air.',
      education: [
        { degree: 'B.A. Politics', institution: 'McGill University', year: '2022' },
        { degree: 'Advanced Geopolitics', institution: 'Independent Study', year: '2023' }
      ],
      experience: [
        { role: 'Policy Analysis', org: 'Think Tank', year: '2022-Present' },
        { role: 'Community Organizer', org: 'Sikh Federation', year: '2020-2022' }
      ],
      proficiency: { english: 95, punjabi: 80, strategy: 92, diplomacy: 85 },
      about: 'Arjan Singh exemplifies emerging discipline in the realm of strategy, combining geopolitical insight with structured methods. His work is sensitizing to the Panth, where diverse efforts must align into coordinated movement for sustainable impact.',
      portrait: arjanSinghPortrait,
      number: '8260'
    },
    {
      name: 'JODH SINGH',
      code: 'J.SINGH',
      profileNum: '03',
      quote: 'Jodh Singh roars in the House of Elixir and there is no response. If Nirankar, a loving saint, then unsavored and shallow until enriched and lifted on his own right.',
      education: [
        { degree: 'B.A. Divinity', institution: 'Oxford University', year: '2021' },
        { degree: 'Gurmat Research', institution: 'Punjabi University', year: '2022' }
      ],
      experience: [
        { role: 'Sikh Apologetics', org: 'Independent Speaker', year: '2021-Present' },
        { role: 'Gurbani Translation', org: 'Various Projects', year: '2019-2021' }
      ],
      proficiency: { english: 88, punjabi: 92, theology: 94, oratory: 90 },
      about: 'Jodh Singh embodies emerging mastery in the realm of spirituality and apologetics, blending deep scriptural knowledge with compelling oratory. His efforts are sensitizing to the Panth, where scattered aspirations must solidify into coherent theological frameworks.',
      portrait: jodhSinghPortrait,
      number: '8260'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen pt-20 md:pt-32 pb-16 px-4 md:px-8 relative"
    >
      {/* Back Button */}
      <button
        onClick={() => onNavigate('building')}
        className="absolute top-8 left-1/2 -translate-x-1/2 text-xs opacity-40 hover:opacity-100 transition-opacity font-mono tracking-wider"
      >
        ← REGISTRY
      </button>

      {/* Icon Toolbar - Top Center */}
      <div className="flex justify-center gap-8 mb-16">
        {[Users, Briefcase, FileText, Shield, Target, Layers].map((Icon, idx) => (
          <button
            key={idx}
            className="w-8 h-8 border border-border/30 flex items-center justify-center hover:bg-foreground/10 transition-all"
          >
            <Icon className="w-4 h-4 opacity-40" />
          </button>
        ))}
      </div>

      <div className="max-w-[1800px] mx-auto space-y-32">
        {/* Overview Section */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">
          {/* Left - Crown Image + Title */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Large Crown Image */}
            <div className="relative overflow-hidden border border-border/30 max-w-2xl">
              <img src={crownImage} alt="Human Assets Symbol" className="w-full h-auto" />
              <div className="absolute top-4 left-4 bg-background/90 px-3 py-2 border border-border/30">
                <span className="text-xs tracking-[0.25em] font-mono">SYMBOL</span>
              </div>
            </div>

            {/* Title */}
            <div className="flex items-baseline gap-4">
              <h1 className="text-4xl md:text-6xl tracking-wider">HUMAN ASSETS</h1>
              <span className="text-2xl opacity-30 font-mono">03</span>
            </div>
          </motion.div>

          {/* Right Sidebar - Cultivation Text + Quote */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Vertical Line */}
            <div className="flex gap-6">
              <div className="w-[1px] min-h-[400px] bg-foreground/30"></div>
              <div className="space-y-8">
                {/* Cultivation Section */}
                <div>
                  <p className="text-xs tracking-[0.25em] opacity-40 mb-4">CULTIVATION</p>
                  <p className="text-xs leading-relaxed opacity-70">
                    Cultivating human assets begins with establishing Neo Khalsa as a beacon to attract talent capable of making a real difference. The most crucial focus will be on thinkers—those who can envision, strategize, and articulate ideas to advance the mission effectively.
                  </p>
                </div>

                {/* Quote Box */}
                <div className="bg-foreground/10 border border-foreground/20 p-4">
                  <p className="text-xs leading-relaxed italic opacity-70">
                    "The Panth is not an institution but a network of sovereigns who act with discipline and purpose, united by shared values rather than hierarchy."
                  </p>
                </div>

                {/* Three Vertical Chart Bars */}
                <div className="flex items-end gap-6 pt-8">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 bg-foreground/20 h-32"></div>
                    <span className="text-[10px] opacity-40 font-mono">SKILL</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 bg-foreground/30 h-40"></div>
                    <span className="text-[10px] opacity-40 font-mono">FOCUS</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 bg-foreground/20 h-24"></div>
                    <span className="text-[10px] opacity-40 font-mono">REACH</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* All Three Profiles */}
        {profiles.map((profile, idx) => (
          <ProfileSection key={profile.code + idx} profile={profile} index={idx} />
        ))}
      </div>
    </motion.div>
  );
}

// Profile Section Component
function ProfileSection({ profile, index }: { profile: any, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative"
    >
      {/* Circle Pattern - Right Side */}
      <div className="hidden lg:block absolute top-0 right-0 w-1/3 h-full opacity-20 pointer-events-none">
        <div className="grid grid-cols-12 gap-2 p-8">
          {Array.from({ length: 200 }).map((_, idx) => (
            <div key={idx} className="w-1.5 h-1.5 rounded-full border border-foreground"></div>
          ))}
        </div>
      </div>

      {/* Profile Number Label */}
      <div className="text-xs tracking-[0.3em] opacity-20 mb-6 font-mono">
        PROFILE_{profile.profileNum}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8">
        {/* Left - Portrait + Proficiency */}
        <div className="space-y-6">
          {/* Portrait with White Mat */}
          <div className="relative">
            <div className="bg-[#F5F5DC] p-6 border border-border/30">
              <div className="border border-border/20">
                <img src={profile.portrait} alt={profile.name} className="w-full h-auto" />
              </div>
              <div className="mt-4 bg-white p-3 border border-border/20">
                <p className="text-[10px] tracking-[0.2em] opacity-40 mb-2 text-foreground">PERSONAL</p>
                <p className="text-xs tracking-wider mb-1 text-foreground">INFORMATION</p>
                <p className="text-[10px] opacity-60 font-mono text-foreground">{profile.code}</p>
              </div>
            </div>
          </div>

          {/* Proficiency Section */}
          <div className="relative">
            {/* Vertical PROFICIENCY Label */}
            <div className="absolute -left-8 top-0 text-xs opacity-20 font-mono tracking-wider -rotate-90 origin-left whitespace-nowrap">
              PROFICIENCY
            </div>
            
            <div className="space-y-3">
              {Object.entries(profile.proficiency).map(([skill, level]) => (
                <div key={skill} className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="tracking-wider uppercase opacity-60">{skill}</span>
                    <span className="font-mono opacity-40">{(level as number)}%</span>
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <div
                        key={idx}
                        className={`flex-1 h-6 border border-border/30 ${
                          idx < Math.floor((level as number) / 20) ? 'bg-foreground/20' : ''
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Box */}
          <div className="border-t border-border/20 pt-3">
            <p className="text-xs tracking-[0.25em] opacity-40 mb-2">SKILLS</p>
            <p className="text-[10px] leading-relaxed opacity-60">
              Strategic thinking | Research methodology | Public speaking | Cultural preservation | Historical analysis | Theological discourse
            </p>
          </div>
        </div>

        {/* Right - Info + Khanda + About */}
        <div className="space-y-8">
          {/* Name Header */}
          <div>
            <h2 className="text-3xl md:text-5xl tracking-wider mb-2">{profile.name}</h2>
            <p className="text-xs italic opacity-60 leading-relaxed max-w-2xl">{profile.quote}</p>
          </div>

          {/* Education Section */}
          <div>
            <p className="text-xs tracking-[0.25em] opacity-40 mb-3">EDUCATION</p>
            <div className="space-y-2">
              {profile.education.map((edu: any, idx: number) => (
                <div key={idx} className="flex justify-between items-baseline border-b border-border/10 pb-2">
                  <div>
                    <div className="text-sm tracking-wider">{edu.degree}</div>
                    <div className="text-xs opacity-60">{edu.institution}</div>
                  </div>
                  <div className="text-xs opacity-40 font-mono">{edu.year}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div>
            <p className="text-xs tracking-[0.25em] opacity-40 mb-3">EXPERIENCE</p>
            <div className="space-y-2">
              {profile.experience.map((exp: any, idx: number) => (
                <div key={idx} className="flex justify-between items-baseline border-b border-border/10 pb-2">
                  <div>
                    <div className="text-sm tracking-wider">{exp.role}</div>
                    <div className="text-xs opacity-60">{exp.org}</div>
                  </div>
                  <div className="text-xs opacity-40 font-mono">{exp.year}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ACHERON Label */}
          <div className="bg-foreground/5 border border-border/20 px-4 py-2 inline-block">
            <span className="text-xs tracking-[0.3em] font-mono">ACHERON</span>
          </div>

          {/* About Section */}
          <div className="relative">
            {/* Vertical ABOUT Label */}
            <div className="absolute -right-8 top-0 text-xs opacity-20 font-mono tracking-wider -rotate-90 origin-right whitespace-nowrap">
              ABOUT
            </div>
            
            <div className="flex gap-6">
              <div className="w-[1px] min-h-[100px] bg-foreground/30"></div>
              <div className="space-y-3">
                <p className="text-xs leading-relaxed opacity-70 max-w-2xl">{profile.about}</p>
                <div className="flex gap-8 text-xs pt-2">
                  <div className="space-y-1">
                    <div className="opacity-40 tracking-wider">ENGLISH</div>
                    <div className="opacity-40 tracking-wider">PUNJABI</div>
                    <div className="opacity-40 tracking-wider">CLASS</div>
                    <div className="opacity-40 tracking-wider">CATEGORY</div>
                  </div>
                  <div className="space-y-1 font-mono">
                    <div className="opacity-60">FLUENT</div>
                    <div className="opacity-60">FLUENT</div>
                    <div className="opacity-60">I</div>
                    <div className="opacity-60">ACTIVE</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Number */}
          <div className="flex justify-end pt-4">
            <div className="text-4xl font-mono opacity-10">{profile.number}</div>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      {index < 2 && (
        <div className="w-full h-[1px] bg-foreground/10 mt-24"></div>
      )}
    </motion.div>
  );
}
