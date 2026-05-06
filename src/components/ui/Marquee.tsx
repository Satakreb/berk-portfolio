import React from "react";

interface MarqueeProps {
  items: string[];
}

export default function Marquee({ items }: MarqueeProps) {
  return (
    <div className="w-full overflow-hidden bg-surface py-6 border-y border-border relative flex items-center">
      <div className="absolute left-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10" />
      
      <div className="animate-marquee whitespace-nowrap flex gap-12 font-code text-sm tracking-widest uppercase text-muted/60 items-center">
        {/* Double the items to ensure seamless scrolling */}
        {[...items, ...items, ...items].map((item, index) => (
          <React.Fragment key={index}>
            <span>{item}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent/40" />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
