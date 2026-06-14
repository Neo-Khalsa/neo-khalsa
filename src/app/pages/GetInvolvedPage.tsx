import { motion } from "motion/react";
import { ParticleField } from '../components/ParticleField';
import { KhandaSymbol } from '../components/KhandaSymbol';
import { Marquee } from '../components/Marquee';

/* ────────────────────────────────────────────────────────────────────────
   NOTE: The donation call-to-action below points to a placeholder ("#").
   Replace DONATE_URL with your real payment / donation link (Stripe,
   PayPal, bank page, etc.) when ready.
──────────────────────────────────────────────────────────────────────── */
const DONATE_URL = '#';
const CONTACT_EMAIL = 'mailto:neokhalsa@proton.me';

const TICKER = ['GET INVOLVED', 'CARRY THE WORK', 'FROM WORDS TO WILL', 'CONTRIBUTE', 'SUSTAIN', 'NEO KHALSA'];

const WAYS = [
  {
    num: '01',
    label: 'Lend Your Voice',
    desc: 'Artists, writers, and scholars to advance Sikh thought in the open — through art, translation, debate, and the written word.',
    href: CONTACT_EMAIL,
    display: 'Public work →',
    external: false,
  },
  {
    num: '02',
    label: 'Work Behind the Scenes',
    desc: 'Organisers and builders who supply, fund, and sustain the work privately — the quiet engine of the movement.',
    href: CONTACT_EMAIL,
    display: 'Private work →',
    external: false,
  },
  {
    num: '03',
    label: 'Build the Spaces',
    desc: 'Architects, patrons, and partners for the Akhara, the University, and the Gurdwaras of the Millenia.',
    href: CONTACT_EMAIL,
    display: 'Partner with us →',
    external: false,
  },
  {
    num: '04',
    label: 'Carry the Word',
    desc: 'Share the projects, challenge the conversation, and bring new minds to the movement.',
    href: 'https://instagram.com/neokhalsa',
    display: '@neokhalsa',
    external: true,
  },
];

const TIERS = [
  { name: 'Sustainer', detail: 'Recurring support that keeps the work alive, month to month.' },
  { name: 'Builder',   detail: 'Fund a project outright — a book printed, a gallery, a room in the Akhara.' },
  { name: 'Patron',    detail: 'Underwrite the monumental works and help shape the movement’s future.' },
];

export function GetInvolvedPage() {
  return (
    <div className="min-h-screen relative grain-overlay">
      <ParticleField />

      <div className="relative z-10 max-w-[1500px] mx-auto px-5 md:px-10">

        {/* ── HERO ─────────────────────────────────────────────── */}
        <section className="pt-28 md:pt-40 pb-14 md:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="flex items-center gap-3 mb-8 md:mb-12">
              <KhandaSymbol size={14} glow={false} animate={false} className="opacity-25" />
              <span className="text-[9px] tracking-[0.45em] opacity-25 font-mono">04 · GET INVOLVED</span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 44 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display leading-[0.9]"
              style={{ fontSize: 'clamp(3.4rem, 14vw, 10rem)' }}
            >
              Join the
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 44 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-display-italic leading-[0.9] text-glow-crimson"
              style={{ fontSize: 'clamp(3.4rem, 14vw, 10rem)' }}
            >
              work.
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.0, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="gold-divider w-28 md:w-44 mt-9 mb-7"
              style={{ transformOrigin: 'left' }}
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="font-display-italic max-w-2xl opacity-60"
              style={{ fontSize: 'clamp(1.1rem, 2.6vw, 1.6rem)', lineHeight: 1.5 }}
            >
              "The Khalsa was never the work of one. It is built by those who choose to carry it."
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="flex flex-wrap items-center gap-x-8 gap-y-3 mt-12 md:mt-16 pt-6 text-[9px] md:text-[10px] tracking-[0.35em] font-mono opacity-25 border-t hairline"
            >
              {['OPEN · 2026', 'CONTRIBUTORS WELCOME', 'PUBLIC & PRIVATE', 'FROM WORDS TO WILL'].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </motion.div>
          </motion.div>
        </section>
      </div>

      {/* Ticker */}
      <div className="relative z-10 border-y py-3 hairline">
        <Marquee items={TICKER} className="text-[9px] tracking-[0.35em] opacity-15 font-mono" />
      </div>

      <div className="relative z-10 max-w-[1500px] mx-auto px-5 md:px-10">

        {/* ── INVITATION ───────────────────────────────────────── */}
        <section className="py-20 md:py-28 grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr] gap-0">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, margin: '-80px' }}
            className="space-y-7 pb-14 lg:pb-0 lg:pr-16"
          >
            <p className="text-[9px] tracking-[0.45em] opacity-22 font-mono">THE CALL</p>
            <blockquote
              className="font-display-italic pl-5"
              style={{ fontSize: 'clamp(1.35rem, 2.6vw, 1.9rem)', lineHeight: 1.4, borderLeft: '2px solid rgba(192,24,24,0.5)' }}
            >
              "Non-conformity is a strength. The work is crafted to withstand scrutiny — and to outlast us."
            </blockquote>
            <div className="space-y-5 text-sm leading-relaxed opacity-60">
              <p>
                Neo Khalsa moves where others hesitate. What began as a forum of discourse is becoming
                tangible — books, craft, story, and stone — and the work now reaches beyond what any
                one hand can build.
              </p>
              <p>
                We are gathering those who would carry it forward: people of skill, conviction, and
                quiet resolve, willing to set ideas down where they will endure.
              </p>
              <p className="italic opacity-80">
                There is a place here for the loud and the unseen alike — for those who build in the
                open, and those who sustain from behind.
              </p>
            </div>
          </motion.div>

          <div
            className="hidden lg:block w-px self-stretch"
            style={{ background: 'linear-gradient(to bottom, transparent, rgba(192,24,24,0.22) 20%, rgba(192,24,24,0.22) 80%, transparent)' }}
          />

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, margin: '-80px' }}
            className="lg:pl-16 space-y-7"
          >
            <p className="text-[9px] tracking-[0.45em] opacity-22 font-mono">WHO WE SEEK</p>
            <div
              className="relative overflow-hidden p-6 md:p-8"
              style={{ background: 'rgba(192,24,24,0.04)', border: '1px solid rgba(192,24,24,0.18)' }}
            >
              <div className="absolute inset-0 shimmer-overlay pointer-events-none" />
              <div className="relative z-10 space-y-6">
                <div>
                  <p className="text-[9px] tracking-[0.35em] opacity-40 mb-2 font-mono">PUBLIC</p>
                  <p className="text-sm leading-relaxed opacity-65">
                    Those who engage openly — promoting Sikhi, debating, writing on the Granth and
                    philosophy, advancing Sikh thought before the world.
                  </p>
                </div>
                <div className="h-px w-full" style={{ background: 'rgba(255,255,255,0.07)' }} />
                <div>
                  <p className="text-[9px] tracking-[0.35em] opacity-40 mb-2 font-mono">PRIVATE</p>
                  <p className="text-sm leading-relaxed opacity-65">
                    Those who work behind the scenes — organising funding, creating spaces for the
                    work to take root, and managing the logistics that make it possible.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ── WAYS TO CONTRIBUTE ───────────────────────────────── */}
        <section className="pb-10 md:pb-16">
          <p className="text-[9px] tracking-[0.45em] opacity-22 font-mono mb-8">WAYS TO CONTRIBUTE</p>
          <div className="h-px w-full bg-line" />
          {WAYS.map(({ num, label, desc, href, display, external }, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: i * 0.07, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true, margin: '-40px' }}
            >
              <a
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className="group flex flex-col md:flex-row md:items-center gap-2 md:gap-0 py-7 md:py-9 border-b hairline transition-all duration-300 hover:bg-[rgba(192,24,24,0.025)] hover:px-3 md:hover:px-5"
              >
                <span className="text-[9px] font-mono opacity-20 md:w-12 flex-shrink-0 group-hover:opacity-50 group-hover:text-crimson transition-all">
                  {num}
                </span>
                <span
                  className="font-display md:w-80 lg:w-[26rem] flex-shrink-0 leading-tight opacity-85 group-hover:opacity-100 transition-all duration-300"
                  style={{ fontSize: 'clamp(1.6rem, 5vw, 2.6rem)' }}
                >
                  {label}
                </span>
                <span className="hidden lg:block flex-1 text-xs tracking-wider opacity-28 group-hover:opacity-50 transition-opacity px-8">
                  {desc}
                </span>
                <div className="hidden md:block flex-1 lg:flex-none h-px opacity-0 group-hover:opacity-100 bg-line transition-opacity mx-6" />
                <div className="flex items-center gap-3 md:gap-4 flex-shrink-0">
                  <span className="text-xs md:text-sm font-mono opacity-40 group-hover:opacity-85 transition-all duration-300">
                    {display}
                  </span>
                  <span
                    className="text-lg opacity-20 group-hover:opacity-70 group-hover:translate-x-1 transition-all duration-300"
                    style={{ color: '#C01818' }}
                  >
                    →
                  </span>
                </div>
              </a>
            </motion.div>
          ))}
        </section>

        {/* ── DONATE ───────────────────────────────────────────── */}
        <section className="py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, margin: '-60px' }}
            className="relative overflow-hidden p-8 md:p-14"
            style={{ background: 'rgba(192,24,24,0.045)', border: '1px solid rgba(192,24,24,0.22)' }}
          >
            <div className="absolute inset-0 shimmer-overlay pointer-events-none" />
            {['top-0 left-0 border-t border-l', 'top-0 right-0 border-t border-r', 'bottom-0 left-0 border-b border-l', 'bottom-0 right-0 border-b border-r'].map(cls => (
              <div key={cls} className={`absolute w-6 h-6 ${cls}`} style={{ borderColor: 'rgba(192,24,24,0.4)' }} />
            ))}

            <div className="relative z-10 max-w-3xl">
              <p className="text-[9px] tracking-[0.45em] opacity-30 font-mono mb-6">FUND THE CAUSE</p>
              <h2 className="font-display leading-[1.02]" style={{ fontSize: 'clamp(2.4rem, 7vw, 5rem)' }}>
                Fund the
              </h2>
              <h2 className="font-display-italic leading-[1.02] text-glow-crimson mb-7" style={{ fontSize: 'clamp(2.4rem, 7vw, 5rem)' }}>
                work.
              </h2>
              <p className="text-sm md:text-base leading-relaxed opacity-65 max-w-2xl">
                To enact change the Khalsa way, donations alone are not enough — but they are the
                foundation. Every contribution becomes something tangible: books printed, scholars
                supported, galleries hung, and spaces raised from the ground. To give is to build.
              </p>

              {/* Tiers */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-px mt-10">
                {TIERS.map(({ name, detail }) => (
                  <div
                    key={name}
                    className="p-5 md:p-6 transition-colors duration-300 hover:bg-[rgba(192,24,24,0.05)]"
                    style={{ background: 'rgba(10,10,10,0.35)', borderTop: '2px solid rgba(192,24,24,0.3)' }}
                  >
                    <p className="font-display text-xl md:text-2xl mb-2 opacity-90">{name}</p>
                    <p className="text-xs leading-relaxed opacity-50">{detail}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-wrap items-center gap-5 mt-10">
                <a
                  href={DONATE_URL}
                  className="group inline-flex items-center gap-3 px-7 py-4 transition-all duration-300"
                  style={{ background: 'rgba(192,24,24,0.9)', boxShadow: '0 0 22px rgba(192,24,24,0.3)' }}
                >
                  <span className="text-[11px] tracking-[0.3em] font-mono">SUPPORT THE CAUSE</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
                <a
                  href={CONTACT_EMAIL}
                  className="text-[10px] tracking-[0.3em] font-mono opacity-45 hover:opacity-90 transition-opacity"
                >
                  OR ENQUIRE · NEOKHALSA@PROTON.ME
                </a>
              </div>

              <p className="text-[9px] tracking-[0.25em] font-mono opacity-25 mt-6">
                BANK TRANSFER · CARD · PATRON OPTIONS AVAILABLE ON REQUEST
              </p>
            </div>
          </motion.div>
        </section>

        {/* ── CLOSING ──────────────────────────────────────────── */}
        <section className="pb-20 md:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
            className="text-center max-w-[1100px] mx-auto"
          >
            <div className="crimson-divider mb-10 md:mb-14" />
            <h2 className="font-display leading-[1.08]" style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)' }}>
              Move where others
            </h2>
            <h2 className="font-display-italic leading-[1.08] text-glow-crimson" style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)' }}>
              hesitate.
            </h2>
            <div className="crimson-divider mt-10 md:mt-14" />
          </motion.div>
        </section>

        {/* Footer */}
        <div className="flex items-center justify-between pb-12 text-[9px] font-mono tracking-[0.25em] opacity-15 border-t hairline pt-8">
          <span>NEO KHALSA</span>
          <span>GET INVOLVED · MMXXVI</span>
        </div>
      </div>
    </div>
  );
}
