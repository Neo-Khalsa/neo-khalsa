import { motion } from "motion/react";
import { ParticleField } from '../components/ParticleField';
import { SacredGeometryBg } from '../components/SacredGeometryBg';
import { KhandaSymbol } from '../components/KhandaSymbol';

function ContactBox({
  number, title, body, link, linkLabel, delay = 0,
}: {
  number: string; title: string; body: string;
  link?: string; linkLabel?: string; delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay, ease: [0.25, 0.1, 0.25, 1] }}
      viewport={{ once: true, margin: '-80px' }}
      className="group relative p-6 md:p-8 animate-crimson-border transition-all duration-500 hover:bg-[rgba(192,24,24,0.04)]"
      style={{ border: '1px solid rgba(192,24,24,0.25)' }}
    >
      {/* Corner number */}
      <span className="absolute top-4 right-5 text-xs font-mono opacity-20">{number}</span>

      {/* Top crimson line — grows on hover */}
      <div
        className="absolute top-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-700"
        style={{ background: 'linear-gradient(90deg, rgba(192,24,24,0.8), rgba(192,24,24,0.2))' }}
      />

      <h3 className="text-xs tracking-[0.25em] opacity-35 mb-4 md:mb-6">{title}</h3>

      <p className="text-sm leading-relaxed opacity-65 mb-4 md:mb-6">{body}</p>

      {link && linkLabel && (
        <a
          href={link}
          target={link.startsWith('http') ? '_blank' : undefined}
          rel={link.startsWith('http') ? 'noopener noreferrer' : undefined}
          className="inline-flex items-center gap-2 text-xs tracking-widest opacity-55 hover:opacity-100 transition-opacity hover:text-glow-crimson font-mono"
        >
          {linkLabel}
          <span className="opacity-50">→</span>
        </a>
      )}
    </motion.div>
  );
}

function CrimsonDivider() {
  return (
    <div className="flex items-center gap-4 my-10 md:my-14">
      <div className="flex-1 h-[1px]" style={{ background: 'linear-gradient(90deg, transparent, rgba(192,24,24,0.35))' }} />
      <KhandaSymbol size={14} glow={false} animate={false} className="opacity-25" />
      <div className="flex-1 h-[1px]" style={{ background: 'linear-gradient(90deg, rgba(192,24,24,0.35), transparent)' }} />
    </div>
  );
}

export function ContactPage() {
  return (
    <div className="min-h-screen pt-20 md:pt-32 pb-16 md:pb-24 px-4 md:px-8 grain-overlay">
      <ParticleField />
      <SacredGeometryBg opacity={0.032} />

      <div className="relative z-10 max-w-[1100px] mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-12 md:mb-20"
        >
          <div className="flex justify-center mb-6 md:mb-8">
            <KhandaSymbol size={52} animate />
          </div>

          <h1 className="text-5xl md:text-8xl lg:text-9xl tracking-wider mb-4 md:mb-6 text-glow-crimson">
            CONTACT
          </h1>

          <div className="flex items-center justify-center gap-4 md:gap-6 mb-6 md:mb-8">
            <div className="w-12 md:w-20 h-[1px]" style={{ background: 'rgba(192,24,24,0.3)' }} />
            <p className="text-xs tracking-[0.3em] opacity-35">CORRESPONDENCE</p>
            <div className="w-12 md:w-20 h-[1px]" style={{ background: 'rgba(192,24,24,0.3)' }} />
          </div>

          <p className="text-sm leading-relaxed opacity-55 max-w-lg mx-auto">
            For collaborations, enquiries, or conversations about the work — reach through the channels below.
          </p>
        </motion.div>

        {/* Sacred geometry divider */}
        <CrimsonDivider />

        {/* Contact boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-10 md:mb-16">
          <ContactBox
            number="01"
            title="GENERAL ENQUIRIES"
            body="For questions about the initiative, the projects, or general correspondence regarding Neo Khalsa."
            link="mailto:neokhalsa@proton.me"
            linkLabel="neokhalsa@proton.me"
            delay={0.1}
          />
          <ContactBox
            number="02"
            title="COLLABORATIONS"
            body="Artists, scholars, institutions, and creators interested in working together to amplify the vision."
            link="mailto:neokhalsa@proton.me"
            linkLabel="Reach out →"
            delay={0.2}
          />
          <ContactBox
            number="03"
            title="NEO KHALSA KOANS"
            body="For book trade enquiries, bulk orders, or press coverage of the crowdfunded 2026 publication."
            link="https://www.houseofjouhal.com/product-page/neo-khalsa-koans"
            linkLabel="House of Jouhal →"
            delay={0.3}
          />
          <ContactBox
            number="04"
            title="SOCIAL"
            body="Follow the development of Neo Khalsa projects and philosophical dispatches across platforms."
            link="https://instagram.com/neokhalsa"
            linkLabel="@neokhalsa →"
            delay={0.4}
          />
        </div>

        <CrimsonDivider />

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto py-8 md:py-12"
        >
          <div
            className="relative p-6 md:p-10 overflow-hidden"
            style={{ background: 'rgba(192,24,24,0.04)', border: '1px solid rgba(192,24,24,0.2)' }}
          >
            <div className="absolute inset-0 shimmer-overlay pointer-events-none" />

            {/* Corner ornaments */}
            {[
              'top-2 left-2 border-t border-l',
              'top-2 right-2 border-t border-r',
              'bottom-2 left-2 border-b border-l',
              'bottom-2 right-2 border-b border-r',
            ].map((cls) => (
              <div
                key={cls}
                className={`absolute w-4 h-4 ${cls}`}
                style={{ borderColor: 'rgba(192,24,24,0.4)' }}
              />
            ))}

            <p className="text-sm md:text-base leading-relaxed opacity-65 italic relative z-10">
              "The Khalsa is not a relic — it is a living philosophy, continuously rediscovered."
            </p>
            <p className="text-xs tracking-[0.2em] opacity-30 mt-4 relative z-10">— NEO KHALSA</p>
          </div>
        </motion.div>

        {/* Bottom metadata */}
        <div className="flex items-center justify-between pt-6 md:pt-10 text-xs font-mono opacity-20">
          <span>NEO KHALSA</span>
          <span>2026</span>
        </div>
      </div>
    </div>
  );
}
