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
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 text-[#00ffcc] text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm border border-slate-800">
          <span className="w-1.5 h-1.5 rounded-full bg-[#05d9ff] animate-pulse" />
          {badge}
        </div>
      )}

      {title && (
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-950 leading-tight">
          {title}
        </h2>
      )}

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl font-medium">
          {subtitle}
        </p>
      )}
    </div>
  );
}
