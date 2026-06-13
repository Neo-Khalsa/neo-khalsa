export function SacredGeometryBg({ opacity = 0.038 }: { opacity?: number }) {
  const cx = 300, cy = 300;

  // 8-pointed star (octagram) – alternates outer (r=220) / inner (r=110) vertices
  const octagram = Array.from({ length: 16 }, (_, i) => {
    const a = (i * Math.PI) / 8 - Math.PI / 2;
    const r = i % 2 === 0 ? 220 : 110;
    return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`;
  }).join(' ');

  // 6-pointed star (hexagram / Satkona) – alternates outer (r=145) / inner (r=72)
  const hexagram = Array.from({ length: 12 }, (_, i) => {
    const a = (i * Math.PI) / 6 - Math.PI / 2;
    const r = i % 2 === 0 ? 145 : 72;
    return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`;
  }).join(' ');

  // 8 radial spokes
  const spokes = Array.from({ length: 8 }, (_, i) => {
    const a = (i * Math.PI) / 4;
    return {
      x1: cx + Math.cos(a) * 46, y1: cy + Math.sin(a) * 46,
      x2: cx + Math.cos(a) * 240, y2: cy + Math.sin(a) * 240,
    };
  });

  // 8 lotus petal ellipses
  const petals = Array.from({ length: 8 }, (_, i) => {
    const a = (i * Math.PI) / 4;
    const px = cx + Math.cos(a) * 82;
    const py = cy + Math.sin(a) * 82;
    return { cx: px, cy: py, angle: (i * 45) };
  });

  return (
    <div
      className="fixed inset-0 pointer-events-none flex items-center justify-center overflow-hidden"
      style={{ zIndex: 0 }}
    >
      <svg
        viewBox="0 0 600 600"
        className="w-[min(105vw,105vh)] h-[min(105vw,105vh)]"
        style={{ opacity }}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outermost ring – slow rotation */}
        <g style={{ transformOrigin: '300px 300px', animation: 'rotate-sacred 90s linear infinite' }}>
          <circle cx={cx} cy={cy} r="240" stroke="white" strokeWidth="0.4" />
          <polygon points={octagram} stroke="white" strokeWidth="0.7" />
        </g>

        {/* Mid ring – counter-rotation */}
        <g style={{ transformOrigin: '300px 300px', animation: 'rotate-sacred-rev 60s linear infinite' }}>
          <polygon points={hexagram} stroke="white" strokeWidth="0.65" />
          <circle cx={cx} cy={cy} r="148" stroke="white" strokeWidth="0.35" strokeDasharray="3 7" />
        </g>

        {/* Static inner geometry */}
        {spokes.map((s, i) => (
          <line key={i} x1={s.x1} y1={s.y1} x2={s.x2} y2={s.y2} stroke="white" strokeWidth="0.25" />
        ))}

        {/* Lotus petals */}
        {petals.map((p, i) => (
          <ellipse
            key={i}
            cx={p.cx} cy={p.cy}
            rx="16" ry="32"
            stroke="white" strokeWidth="0.4"
            transform={`rotate(${p.angle}, ${p.cx}, ${p.cy})`}
          />
        ))}

        {/* Inner fixed rings */}
        <circle cx={cx} cy={cy} r="90"  stroke="white" strokeWidth="0.7" />
        <circle cx={cx} cy={cy} r="46"  stroke="white" strokeWidth="0.45" />
        <circle cx={cx} cy={cy} r="18"  stroke="white" strokeWidth="0.35" />
        <circle cx={cx} cy={cy} r="5"   fill="white" opacity="0.55" />
      </svg>
    </div>
  );
}
