import { KhandaSymbol } from './KhandaSymbol';

/* Static structural divider that separates page sections.
   Replaces the scrolling ticker strip with a calm, symmetrical rule -
   a centered Khanda flanked by crimson-fading hairlines. Keeps the
   border-y rhythm so sections stay visually separated, without motion. */
export function SectionDivider() {
  return (
    <div className="relative z-10 border-y hairline py-5 md:py-6">
      <div className="flex items-center justify-center gap-4 md:gap-6 max-w-[1400px] mx-auto px-5 md:px-10">
        <div
          className="flex-1 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(192,24,24,0.28))' }}
        />
        <KhandaSymbol size={13} glow={false} animate={false} className="opacity-30 flex-shrink-0" />
        <div
          className="flex-1 h-px"
          style={{ background: 'linear-gradient(90deg, rgba(192,24,24,0.28), transparent)' }}
        />
      </div>
    </div>
  );
}
