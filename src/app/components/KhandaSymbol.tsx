import { motion } from 'motion/react';

interface KhandaProps {
  size?: number;
  className?: string;
  glow?: boolean;
  animate?: boolean;
}

export function KhandaSymbol({ size = 80, className = '', glow = true, animate = true }: KhandaProps) {
  const inner = (
    <svg
      viewBox="0 0 100 120"
      width={size}
      height={size * 1.2}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={glow ? {
        filter: 'drop-shadow(0 0 6px rgba(192,24,24,0.55)) drop-shadow(0 0 18px rgba(192,24,24,0.25))',
      } : undefined}
    >
      {/* Left kirpan */}
      <path
        d="M50,113 C30,109 8,88 7,62 C6,36 20,14 32,8 L36,13 C26,20 14,40 15,62 C16,87 35,105 50,108 Z"
        opacity="0.88"
      />
      {/* Right kirpan */}
      <path
        d="M50,113 C70,109 92,88 93,62 C94,36 80,14 68,8 L64,13 C74,20 86,40 85,62 C84,87 65,105 50,108 Z"
        opacity="0.88"
      />
      {/* Chakkar ring */}
      <circle cx="50" cy="58" r="27" stroke="currentColor" strokeWidth="4" fill="none" opacity="0.95" />
      {/* Central khanda blade */}
      <path
        d="M50,3 C50,3 59,28 61,46 C62,53 59,57 57,61 L57,80 L53,80 L53,97 L50,115 L47,97 L47,80 L43,80 L43,61 C41,57 38,53 39,46 C41,28 50,3 50,3 Z"
        opacity="0.97"
      />
      {/* Handle crossguard */}
      <rect x="43" y="80" width="14" height="3.5" rx="1.2" opacity="0.75" />
      <rect x="45" y="83.5" width="10" height="2.5" rx="1" opacity="0.5" />
    </svg>
  );

  if (!animate) return inner;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="animate-divine-breathe"
    >
      {inner}
    </motion.div>
  );
}
