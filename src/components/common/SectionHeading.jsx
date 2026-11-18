import React from 'react';

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'center',
  className = '',
}) {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  return (
    <div className={`flex flex-col max-w-3xl mb-12 sm:mb-16 ${alignmentClasses[align]} ${className}`}>
      {badge && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-black text-xs font-extrabold uppercase tracking-wider mb-4 border border-sky-300 shadow-[0_4px_12px_rgba(56,189,248,0.25)]">
          <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
          {badge}
        </div>
      )}

      {title && (
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-black leading-tight">
          {title}
        </h2>
      )}

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-black/85 leading-relaxed max-w-2xl font-medium">
          {subtitle}
        </p>
      )}
    </div>
  );
}
