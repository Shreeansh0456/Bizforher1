const words = [
  'Leadership', 'Innovation', 'Strategy', 'Entrepreneurship',
  'Vision', 'Impact', 'Community', 'Growth', 'Ambition', 'Excellence',
  'Leadership', 'Innovation', 'Strategy', 'Entrepreneurship',
  'Vision', 'Impact', 'Community', 'Growth', 'Ambition', 'Excellence',
];

export default function Marquee() {
  return (
    <div className="relative overflow-hidden py-7 flex items-center" style={{ background: '#F7B3BC' }}>
      <div className="marquee-track flex items-center gap-10">
        {words.map((word, i) => (
          <span key={i} className="flex items-center gap-10 whitespace-nowrap">
            <span className="font-serif italic text-lg font-medium text-cream/90 tracking-wide">
              {word}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-cream/50 flex-shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}
