import React from 'react';

/**
 * Pure White Card with Sky Blue Shadows and Black text
 */
export default function GlassCard({
  children,
  className = '',
  interactive = false,
  glow = false,
  onClick,
  ...props
}) {
  const cardClass = interactive ? 'white-card' : 'white-card-static';
  
  const glowStyle = glow 
    ? 'ring-1 ring-sky-300 shadow-[0_12px_30px_-4px_rgba(14,165,233,0.28)]' 
    : '';

  return (
    <div
      onClick={onClick}
      className={`rounded-2xl p-6 relative overflow-hidden bg-white text-black ${cardClass} ${glowStyle} ${className}`}
      {...props}
    >
      {/* Subtle top edge highlight */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-sky-300 to-transparent pointer-events-none" />
      {children}
    </div>
  );
}
