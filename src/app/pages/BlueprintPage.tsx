import { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'motion/react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import './blueprint.css';
import { ParticleField } from '../components/ParticleField';
import { KhandaSymbol } from '../components/KhandaSymbol';

/* Worker is bundled locally (no CDN) so the strict-CSP/offline case still works. */
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const PDF_URL = '/neo-khalsa-blueprint.pdf';

/* The file is image-heavy, so let pdf.js pull byte ranges for the pages actually
   in view instead of downloading the whole document up front. */
const PDF_OPTIONS = {
  disableAutoFetch: true,
  disableStream: false,
};

export function BlueprintPage() {
  const [numPages, setNumPages] = useState(0);
  const [current, setCurrent] = useState(1);
  /* Pages that have come near the viewport. Only these get mounted, so pdf.js
     fetches their byte ranges on demand rather than pulling the whole file. */
  const [activated, setActivated] = useState<Set<number>>(() => new Set([0]));
  const [width, setWidth] = useState(900);
  const [error, setError] = useState<string | null>(null);
  const shellRef = useRef<HTMLDivElement>(null);
  const pageRefs = useRef<(HTMLDivElement | null)[]>([]);

  /* Render pages at the container's width, capped for large screens */
  useEffect(() => {
    const measure = () => {
      const w = shellRef.current?.clientWidth ?? 900;
      setWidth(Math.min(w, 1000));
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  /* One scroll pass drives both the page counter and which pages get mounted.
     Measuring rects directly (rather than IntersectionObserver) keeps this
     working in any embedding context and is cheap at 16 pages. */
  useEffect(() => {
    if (!numPages) return;

    const sync = () => {
      const vh = window.innerHeight;
      const reach = vh * 1.5; // mount this far ahead/behind the viewport
      const near = new Set<number>();
      let best = 1;
      let bestVisible = -1;

      pageRefs.current.forEach((el, i) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        if (r.bottom > -reach && r.top < vh + reach) near.add(i);
        const visible = Math.min(r.bottom, vh) - Math.max(r.top, 0);
        if (visible > bestVisible) { bestVisible = visible; best = i + 1; }
      });

      setCurrent(best);
      setActivated((prev) => {
        let changed = false;
        const next = new Set(prev);
        near.forEach((i) => { if (!next.has(i)) { next.add(i); changed = true; } });
        return changed ? next : prev;
      });
    };

    sync();
    window.addEventListener('scroll', sync, { passive: true });
    window.addEventListener('resize', sync);
    return () => {
      window.removeEventListener('scroll', sync);
      window.removeEventListener('resize', sync);
    };
  }, [numPages]);

  const jump = useCallback((delta: number) => {
    const target = pageRefs.current[current - 1 + delta];
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [current]);

  return (
    <div className="min-h-screen relative grain-overlay">
      <ParticleField />

      {/* ── HEADER ───────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-5 md:px-10">
        <section className="pt-28 md:pt-40 pb-12 md:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="flex items-center gap-3 mb-8 md:mb-12">
              <KhandaSymbol size={14} glow={false} animate={false} className="opacity-25" />
              <span className="text-[9px] tracking-[0.45em] opacity-25 font-mono">05 · BLUEPRINT</span>
            </div>

            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: '105%' }} animate={{ y: 0 }}
                transition={{ duration: 0.95, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-display leading-[0.9]"
                style={{ fontSize: 'clamp(3.4rem, 13vw, 9rem)' }}
              >
                The
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: '105%' }} animate={{ y: 0 }}
                transition={{ duration: 0.95, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="font-display-italic leading-[0.9] text-glow-crimson"
                style={{ fontSize: 'clamp(3.4rem, 13vw, 9rem)' }}
              >
                Blueprint.
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.55 }}
              className="font-display-italic max-w-xl opacity-60 mt-8"
              style={{ fontSize: 'clamp(1.1rem, 2.6vw, 1.55rem)', lineHeight: 1.5 }}
            >
              Sixteen pages: the objectives, the costs, and the order in which they are attempted.
            </motion.p>
          </motion.div>
        </section>
      </div>

      {/* ── READER ───────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-5 md:px-10 py-12 md:py-16">
        {/* Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b hairline">
          <div className="flex items-center gap-4">
            <span className="text-[9px] tracking-[0.35em] font-mono opacity-25">
              {numPages ? `PAGE ${String(current).padStart(2, '0')} / ${String(numPages).padStart(2, '0')}` : 'LOADING'}
            </span>
            {numPages > 0 && (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => jump(-1)} disabled={current <= 1} aria-label="Previous page"
                  className="px-3 py-1.5 text-[10px] font-mono tracking-wider transition-all disabled:opacity-15 hover:bg-[rgba(192,24,24,0.08)]"
                  style={{ border: '1px solid rgba(192,24,24,0.28)' }}
                >←</button>
                <button
                  onClick={() => jump(1)} disabled={current >= numPages} aria-label="Next page"
                  className="px-3 py-1.5 text-[10px] font-mono tracking-wider transition-all disabled:opacity-15 hover:bg-[rgba(192,24,24,0.08)]"
                  style={{ border: '1px solid rgba(192,24,24,0.28)' }}
                >→</button>
              </div>
            )}
          </div>

          <a
            href={PDF_URL} download
            className="group inline-flex items-center gap-3 px-5 py-3 transition-all duration-300 hover:bg-[rgba(192,24,24,0.06)]"
            style={{ border: '1px solid rgba(192,24,24,0.4)' }}
          >
            <span className="text-[10px] tracking-[0.3em] font-mono opacity-80 group-hover:opacity-100">DOWNLOAD PDF</span>
            <span className="opacity-60 transition-transform duration-300 group-hover:translate-y-0.5" style={{ color: '#C01818' }}>↓</span>
          </a>
        </div>

        {/* Pages */}
        <div ref={shellRef}>
          {error ? (
            <div className="py-20 text-center">
              <p className="text-sm opacity-50 mb-4">The document could not be displayed in your browser.</p>
              <a href={PDF_URL} download className="text-[11px] tracking-[0.3em] font-mono" style={{ color: '#C01818' }}>
                DOWNLOAD IT INSTEAD →
              </a>
            </div>
          ) : (
            <Document
              file={PDF_URL}
              options={PDF_OPTIONS}
              onLoadSuccess={({ numPages: n }) => setNumPages(n)}
              onLoadError={(e) => setError(e.message)}
              loading={
                <div className="py-20 text-center text-[9px] tracking-[0.35em] font-mono opacity-25">
                  OPENING THE BLUEPRINT
                </div>
              }
            >
              {Array.from({ length: numPages }, (_, i) => (
                <div
                  key={i}
                  ref={(el) => { pageRefs.current[i] = el; }}
                  className="mb-8 md:mb-12 scroll-mt-24 flex flex-col items-center"
                >
                  {activated.has(i) ? (
                    <Page
                      pageNumber={i + 1}
                      width={width}
                      renderAnnotationLayer
                      renderTextLayer
                      loading={
                        <div
                          className="mx-auto flex items-center justify-center"
                          style={{ width, height: width * 1.4, background: '#101010', border: '1px solid rgba(255,255,255,0.06)' }}
                        >
                          <span className="text-[9px] tracking-[0.35em] font-mono opacity-20">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                        </div>
                      }
                    />
                  ) : (
                    <div
                      className="mx-auto flex items-center justify-center"
                      style={{ width, height: width * 1.4, background: '#101010', border: '1px solid rgba(255,255,255,0.06)' }}
                    >
                      <span className="text-[9px] tracking-[0.35em] font-mono opacity-20">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                  )}
                  <p className="mt-3 text-center text-[8px] tracking-[0.35em] font-mono opacity-20">
                    {String(i + 1).padStart(2, '0')}
                  </p>
                </div>
              ))}
            </Document>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="flex items-center justify-between pb-12 text-[9px] font-mono tracking-[0.25em] opacity-15 border-t hairline pt-8">
          <span>NEO KHALSA</span>
          <span>BLUEPRINT · MMXXVI</span>
        </div>
      </div>
    </div>
  );
}
