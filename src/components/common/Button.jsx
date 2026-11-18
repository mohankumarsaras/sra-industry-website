import React from 'react';

/**
 * High-clarity Buttons in Sky Blue with Black text / Black with Sky Blue shadows
 */
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
    'relative inline-flex items-center justify-center font-bold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer overflow-hidden group';

  const variants = {
    // Primary: Sky Blue button with high-contrast Black text & Sky Blue glow shadow
    primary:
      'bg-sky-400 hover:bg-sky-300 text-black border border-sky-300 shadow-[0_8px_20px_-2px_rgba(56,189,248,0.5)] hover:shadow-[0_12px_28px_-2px_rgba(14,165,233,0.7)] hover:-translate-y-0.5 focus:ring-sky-400 font-extrabold',

    // Secondary: Pure White button with crisp Sky Blue border and Sky Blue shadow
    secondary:
      'bg-white hover:bg-sky-50 text-black border-2 border-sky-300 hover:border-sky-500 shadow-[0_4px_14px_-2px_rgba(14,165,233,0.25)] hover:shadow-[0_8px_20px_-2px_rgba(14,165,233,0.4)] hover:-translate-y-0.5 focus:ring-sky-400',

    // Sky Accent: Deep sky blue button with black text
    accent:
      'bg-sky-500 hover:bg-sky-400 text-black border border-sky-400 shadow-[0_8px_22px_-2px_rgba(14,165,233,0.55)] hover:-translate-y-0.5 focus:ring-sky-400 font-extrabold',

    // Outline: High contrast Black outline with sky blue hover
    outline:
      'border-2 border-black text-black hover:bg-sky-400 hover:border-sky-400 hover:text-black shadow-[0_4px_12px_rgba(56,189,248,0.2)] focus:ring-sky-400',

    // Ghost: Subtle hover
    ghost:
      'text-black hover:bg-sky-100/80 focus:ring-sky-400',
  };

  const sizes = {
    sm: 'text-xs px-4 py-2 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`}
      {...props}
    >
      {Icon && iconPosition === 'left' && (
        <Icon className="w-4 h-4 transition-transform group-hover:-translate-x-0.5 text-black" />
      )}
      <span className="text-black font-extrabold">{children}</span>
      {Icon && iconPosition === 'right' && (
        <Icon className="w-4 h-4 transition-transform group-hover:translate-x-0.5 text-black" />
      )}
    </button>
  );
}
