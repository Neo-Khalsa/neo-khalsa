import { Link, useLocation } from 'react-router-dom';
import logoImage from '../../assets/75c40697214f907eef38b05581e8d850d6220130.png';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation({ isAtTop }: { isAtTop: boolean }) {
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'MISSION' },
    { path: '/projects', label: 'PROJECTS' },
    { path: '/operation', label: 'OPERATION' },
    // { path: '/discipline', label: 'DISCIPLINE' },
  ];

  const contactItem = { path: '/contact', label: 'CONTACT' };

  return (
    <>
      {/* Desktop Navigation */}
      <nav 
        className={`hidden md:flex fixed top-8 right-8 z-50 transition-opacity duration-300 ${
          isAtTop || isHovered ? 'opacity-100' : 'opacity-0'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex flex-col gap-6 items-end">
          {/* Logo */}
          <Link to="/" className="mb-2">
            <img src={logoImage} alt="Neo Khalsa" className="h-10 w-auto opacity-95 hover:opacity-100 transition-opacity" />
          </Link>
          
          {/* Nav Items */}
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-xs tracking-[0.2em] transition-all hover:opacity-100 ${
                location.pathname === item.path
                  ? 'opacity-100 border-r-2 border-foreground pr-4'
                  : 'opacity-40 pr-4'
              }`}
            >
              {item.label}
            </Link>
          ))}
          
          {/* Subtle Contact Link - Separated and lower opacity */}
          <div className="mt-3 pt-3 border-t border-foreground/5">
            <Link
              to={contactItem.path}
              className={`text-xs tracking-[0.2em] transition-all hover:opacity-60 ${
                location.pathname === contactItem.path
                  ? 'opacity-60 border-r-2 border-foreground/50 pr-4'
                  : 'opacity-20 pr-4'
              }`}
            >
              {contactItem.label}
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-foreground/10">
        <div className="flex items-center justify-between px-4 py-4">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
            <img src={logoImage} alt="Neo Khalsa" className="h-8 w-auto opacity-95" />
          </Link>
          
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 opacity-70 hover:opacity-100 transition-opacity"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="border-t border-foreground/10 bg-background/98 backdrop-blur-sm animate-slideDown">
            <div className="flex flex-col py-2">
              {navItems.map((item, index) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-6 py-4 text-xs tracking-[0.2em] transition-all border-l-2 ${
                    location.pathname === item.path
                      ? 'opacity-100 border-foreground bg-foreground/5'
                      : 'opacity-60 border-transparent hover:opacity-100 hover:bg-foreground/5'
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Subtle Contact Link for Mobile */}
              <div className="border-t border-foreground/5 mt-2 pt-2">
                <Link
                  to={contactItem.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-6 py-4 text-xs tracking-[0.2em] transition-all border-l-2 ${
                    location.pathname === contactItem.path
                      ? 'opacity-60 border-foreground/50 bg-foreground/5'
                      : 'opacity-30 border-transparent hover:opacity-60 hover:bg-foreground/5'
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
