import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import logoImage from '../../assets/75c40697214f907eef38b05581e8d850d6220130.webp';

const MENU_ITEMS = [
  { path: '/',          num: '00', label: 'Home'      },
  { path: '/mission',   num: '01', label: 'Mission'   },
  { path: '/projects',  num: '02', label: 'Projects'  },
  { path: '/spaces',       num: '03', label: 'Spaces'       },
  { path: '/get-involved', num: '04', label: 'Get Involved' },
  { path: '/contact',      num: '05', label: 'Contact'      },
];

export function Navigation() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 24);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Lock body scroll while menu is open */
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  /* Close on route change */
  useEffect(() => { setOpen(false); }, [location.pathname]);

  /* Close on Escape */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const current = MENU_ITEMS.find(i => i.path === location.pathname);

  return (
    <>
      {/* ── Top bar ─────────────────────────────────────────────────── */}
      <header
        className="fixed top-0 left-0 right-0 z-[90] transition-colors duration-500"
        style={{
          background: scrolled && !open ? 'rgba(10,10,10,0.82)' : 'transparent',
          backdropFilter: scrolled && !open ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: scrolled && !open ? 'blur(12px)' : 'none',
          borderBottom: scrolled && !open ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        }}
      >
        <div className="flex items-center justify-between px-5 md:px-10 h-16 md:h-20 max-w-[1700px] mx-auto">
          <Link to="/" aria-label="Neo Khalsa — Home" className="flex items-center gap-3">
            <img src={logoImage} alt="Neo Khalsa" className="h-7 md:h-8 w-auto opacity-95" />
            <span className="hidden sm:block text-[10px] tracking-[0.35em] font-mono opacity-30">
              NEO KHALSA
            </span>
          </Link>

          <div className="flex items-center gap-6">
            {current && current.path !== '/' && (
              <span className="hidden md:block text-[9px] tracking-[0.4em] font-mono opacity-25">
                {current.num} · {current.label.toUpperCase()}
              </span>
            )}
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              className="group flex items-center gap-3 py-3 pl-3 -mr-1"
            >
              <span className="text-[10px] tracking-[0.35em] font-mono opacity-55 group-hover:opacity-100 transition-opacity">
                {open ? 'CLOSE' : 'MENU'}
              </span>
              <span className="relative w-5 h-3 flex flex-col justify-between">
                <span
                  className="block h-px w-full bg-current transition-transform duration-300"
                  style={{ transform: open ? 'translateY(5.5px) rotate(45deg)' : 'none', opacity: 0.85 }}
                />
                <span
                  className="block h-px w-full bg-current transition-transform duration-300"
                  style={{ transform: open ? 'translateY(-5.5px) rotate(-45deg)' : 'none', opacity: 0.85 }}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* ── Full-screen overlay menu ────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 z-[80] flex flex-col"
            style={{ background: 'rgba(10,10,10,0.985)' }}
          >
            {/* faint red bloom, top-right */}
            <div
              className="absolute pointer-events-none"
              style={{
                top: '-20%', right: '-15%', width: '60vw', height: '60vw',
                background: 'radial-gradient(circle, rgba(192,24,24,0.07) 0%, transparent 65%)',
              }}
            />

            <nav className="flex-1 flex flex-col justify-center px-6 md:px-16 max-w-[1700px] mx-auto w-full">
              {MENU_ITEMS.map(({ path, num, label }, i) => {
                const active = location.pathname === path;
                return (
                  <motion.div
                    key={path}
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    transition={{ duration: 0.5, delay: 0.06 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      to={path}
                      className="group flex items-baseline gap-4 md:gap-8 py-2.5 md:py-3"
                    >
                      <span className="text-[10px] font-mono w-7 flex-shrink-0 transition-opacity"
                        style={{ color: active ? '#C01818' : undefined, opacity: active ? 0.9 : 0.25 }}>
                        {num}
                      </span>
                      <span
                        className={`font-display leading-none transition-all duration-300 ${
                          active ? 'text-glow-crimson' : 'opacity-65 group-hover:opacity-100'
                        }`}
                        style={{ fontSize: 'clamp(2.6rem, 9vw, 6.5rem)' }}
                      >
                        {label}
                      </span>
                      <span
                        className="hidden md:block text-2xl opacity-0 group-hover:opacity-60 transition-all duration-300 translate-x-0 group-hover:translate-x-2"
                        style={{ color: '#C01818' }}
                      >
                        →
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Overlay footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="px-6 md:px-16 pb-8 md:pb-10 max-w-[1700px] mx-auto w-full"
            >
              <div className="h-px w-full mb-6" style={{ background: 'rgba(255,255,255,0.07)' }} />
              <div className="flex flex-wrap items-center justify-between gap-4 text-[9px] md:text-[10px] tracking-[0.3em] font-mono">
                <a href="mailto:neokhalsa@proton.me" className="opacity-35 hover:opacity-80 transition-opacity">
                  NEOKHALSA@PROTON.ME
                </a>
                <a href="https://instagram.com/neokhalsa" target="_blank" rel="noopener noreferrer" className="opacity-35 hover:opacity-80 transition-opacity">
                  @NEOKHALSA
                </a>
                <span className="opacity-20">EST. MMXX</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
