import React from 'react';

/**
 * Reusable GlassCard tuned for the clean bright cyan-turquoise gradient theme
 */
export default function GlassCard({
  children,
  className = '',
  interactive = false,
  glow = false,
  onClick,
  ...props
}) {
  const baseClasses = interactive
    ? 'glass-panel-interactive'
    : 'glass-panel';

  const glowStyle = glow
    ? 'relative before:absolute before:-inset-[1px] before:rounded-2xl before:bg-gradient-to-r before:from-[#05d9ff]/40 before:to-[#00ffcc]/30 before:-z-10 before:blur-[2px]'
    : '';

  return (
    <div
      onClick={onClick}
      className={`rounded-2xl p-6 relative overflow-hidden ${baseClasses} ${glowStyle} ${className}`}
      {...props}
    >
      {/* Specular highlight border at top */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none" />
      {children}
    </div>
  );
}
