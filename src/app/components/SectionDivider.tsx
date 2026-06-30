/* Soft section break - a single short, centered crimson-fade bar with a
   gentle bloom behind it. Deliberately minimal and low: the sections above
   and below already carry their own border lines, so this just gives a soft
   breath between them rather than stacking more hard rules. */
export function SectionDivider() {
  return (
    <div className="relative z-10 flex justify-center py-6 md:py-8">
      <div className="relative flex items-center justify-center">
        {/* soft crimson bloom so the mark reads gently, not as a hard line */}
        <div
          className="absolute w-36 h-6 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at center, rgba(192,24,24,0.12) 0%, transparent 70%)' }}
        />
        {/* the short bar itself - rounded and feathered at both ends */}
        <div
          className="relative h-[2px] w-20 md:w-24 rounded-full"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(192,24,24,0.5) 35%, rgba(192,24,24,0.5) 65%, transparent)' }}
        />
      </div>
    </div>
  );
}
