import { Link, useLocation } from 'react-router-dom';
import logoImage from '../../assets/75c40697214f907eef38b05581e8d850d6220130.webp';
import { KhandaSymbol } from './KhandaSymbol';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation({ isAtTop }: { isAtTop: boolean }) {
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { path: '/mission',   label: 'MISSION'   },
    { path: '/projects',  label: 'PROJECTS'  },
    { path: '/operation', label: 'OPERATION' },
  ];
  const contactItem = { path: '/contact', label: 'CONTACT' };

  // Hide nav entirely on the home page (it's not needed there)
  const isHome = location.pathname === '/';

  return (
    <>
      {/* ── Desktop nav ──────────────────────────────────────────────── */}
      <nav
        className={`hidden md:flex fixed top-8 right-8 z-50 transition-opacity duration-500 ${
          isHome ? 'opacity-0 pointer-events-none' : isAtTop || isHovered ? 'opacity-100' : 'opacity-0'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex flex-col gap-6 items-end">

          {/* Logo — home link */}
          <Link to="/" className="mb-2 flex items-center gap-3 group">
            <KhandaSymbol
              size={18}
              glow={false}
              animate={false}
              className="text-white opacity-30 group-hover:opacity-70 transition-opacity duration-300"
            />
            <img
              src={logoImage}
              alt="Neo Khalsa"
              className="h-10 w-auto opacity-90 hover:opacity-100 transition-opacity"
            />
          </Link>

          {navItems.map((item) => {
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`text-xs tracking-[0.2em] transition-all hover:opacity-100 pr-4 relative ${
                  active ? 'opacity-100' : 'opacity-40'
                }`}
              >
                {active && (
                  <span
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-0.5 h-full"
                    style={{ background: 'rgba(192,24,24,0.85)', boxShadow: '0 0 8px rgba(192,24,24,0.7)' }}
                  />
                )}
                <span
                  className={active ? 'text-glow-crimson' : ''}
                  style={active ? { color: 'rgba(255,255,255,0.95)' } : undefined}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}

          <div className="mt-3 pt-3 border-t border-foreground/5">
            <Link
              to={contactItem.path}
              className={`text-xs tracking-[0.2em] transition-all pr-4 ${
                location.pathname === contactItem.path
                  ? 'opacity-55 hover:opacity-70'
                  : 'opacity-18 hover:opacity-45'
              }`}
            >
              {contactItem.label}
            </Link>
          </div>
        </div>
      </nav>

      {/* ── Mobile nav ───────────────────────────────────────────────── */}
      <nav className={`md:hidden fixed top-0 left-0 right-0 z-50 bg-background/96 backdrop-blur-sm border-b border-foreground/10 transition-opacity duration-500 ${
        isHome ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}>
        <div className="flex items-center justify-between px-4 py-4">
          <Link to="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2">
            <KhandaSymbol size={16} glow={false} animate={false} className="text-white opacity-40" />
            <img src={logoImage} alt="Neo Khalsa" className="h-8 w-auto opacity-95" />
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 opacity-65 hover:opacity-100 transition-opacity"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-foreground/10 bg-background/98 backdrop-blur-sm animate-slideDown">
            <div className="flex flex-col py-2">
              {navItems.map((item, i) => {
                const active = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={`px-6 py-4 text-xs tracking-[0.2em] transition-all border-l-2 ${
                      active ? 'opacity-100 bg-foreground/5' : 'opacity-55 border-transparent hover:opacity-100 hover:bg-foreground/5'
                    }`}
                    style={active
                      ? { borderColor: 'rgba(192,24,24,0.75)', animationDelay: `${i * 50}ms` }
                      : { animationDelay: `${i * 50}ms` }}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="border-t border-foreground/5 mt-2 pt-2">
                <Link
                  to={contactItem.path}
                  onClick={() => setMobileOpen(false)}
                  className={`px-6 py-4 text-xs tracking-[0.2em] transition-all border-l-2 ${
                    location.pathname === contactItem.path
                      ? 'opacity-55 border-foreground/50 bg-foreground/5'
                      : 'opacity-28 border-transparent hover:opacity-55 hover:bg-foreground/5'
                  }`}
                >
                  {contactItem.label}
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
