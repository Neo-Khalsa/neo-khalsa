import { Fragment, useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';

/* Static justified masthead that crossfades between coherent motif sets -
   replaces the scrolling ticker. Each set holds, then dissolves into the
   next in place (no horizontal motion). Sets are grouped by theme so the
   words on screen at any moment read together. */
const GROUPS: string[][] = [
  ['CULTURE', 'CRAFT', 'DISCIPLINE', 'CHARDI KALA'],
  ['NEO KHALSA KOANS', 'SIKH ANIME', 'LITERARY GENESIS'],
  ['THE AKHARA', 'UNIVERSITY', 'GURDWARAS'],
  ['NARRATIVE INFLUENCE', 'RESOURCE ACQUISITION', 'INTERNAL DISCIPLINE'],
];

const HOLD_MS = 5000;

export function MastheadCycle() {
  const [i, setI] = useState(0);

  useEffect(() => {
    // motion/react animates via JS, so CSS reduced-motion rules don't apply -
    // hold the first set statically instead of rotating
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = setInterval(() => setI((prev) => (prev + 1) % GROUPS.length), HOLD_MS);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative h-[18px] md:h-[20px]">
      <AnimatePresence>
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0 flex items-center justify-between gap-3"
        >
          {GROUPS[i].map((term, idx) => (
            <Fragment key={term}>
              {idx > 0 && (
                <span
                  className="w-1 h-1 rotate-45 flex-shrink-0"
                  style={{ background: 'rgba(192,24,24,0.55)' }}
                  aria-hidden="true"
                />
              )}
              <span className="text-[9px] md:text-[10px] tracking-[0.35em] opacity-20 font-mono whitespace-nowrap">
                {term}
              </span>
            </Fragment>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
