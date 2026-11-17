import React from 'react';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  iconPosition = 'right',
  ...props
}) {
  const baseStyles =
    'relative inline-flex items-center justify-center font-bold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer overflow-hidden group shadow-sm';

  const variants = {
    // Primary: High contrast dark navy with glowing cyan border/hover
    primary:
      'bg-slate-950 hover:bg-slate-900 text-white hover:text-[#00ffcc] border border-slate-900 hover:border-[#05d9ff] shadow-md hover:shadow-lg focus:ring-slate-950',

    // Cyan Gradient Accent
    accent:
      'bg-gradient-to-r from-[#05d9ff] to-[#00ffcc] text-slate-950 hover:from-[#04b7d7] hover:to-[#00e6b8] shadow-md hover:shadow-cyan-400/40 border border-white/50 focus:ring-cyan-400',

    // Secondary: Translucent White Glass with crisp border
    secondary:
      'bg-white/80 hover:bg-white text-slate-900 border border-slate-300/80 hover:border-slate-400 shadow-sm focus:ring-slate-400 backdrop-blur-md',

    // Glass: Pure glassmorphism
    glass:
      'glass-panel hover:bg-white text-slate-900 border border-white/90 hover:border-[#05d9ff] shadow-sm hover:shadow-md focus:ring-cyan-500',

    // Outline: Deep industrial border
    outline:
      'border-2 border-slate-900 text-slate-950 hover:bg-slate-950 hover:text-white bg-transparent focus:ring-slate-950',

    // Ghost: Clean
    ghost:
      'text-slate-700 hover:text-slate-950 hover:bg-white/40 focus:ring-slate-400',
  };

  const sizes = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`}
      {...props}
    >
      {Icon && iconPosition === 'left' && (
        <Icon className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
      )}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && (
        <Icon className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
      )}
    </button>
  );
}
