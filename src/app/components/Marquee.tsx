interface MarqueeProps {
  items: string[];
  className?: string;
  slow?: boolean;
}

export function Marquee({ items, className = '', slow = false }: MarqueeProps) {
  const chunk = items.join(' · ') + ' · ';
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div className={slow ? 'inline-block animate-marquee-slow' : 'inline-block animate-marquee'}>
        <span>{chunk}</span>
        <span aria-hidden="true">{chunk}</span>
      </div>
    </div>
  );
}
