import type { ReactNode } from 'react';

interface SectionHeadingProps {
  number: string;
  label: string;
  title: ReactNode;
  copy: string;
  light?: boolean;
}

export default function SectionHeading({ number, label, title, copy, light = false }: SectionHeadingProps) {
  return (
    <div className="grid gap-10 lg:grid-cols-[1.35fr_.65fr] lg:items-end lg:gap-20">
      <div>
        <p className={`eyebrow ${light ? '!text-zinc-500' : ''}`}>{number} / {label}</p>
        <h2 className="display mt-7">{title}</h2>
      </div>
      <p className={`max-w-lg text-base leading-8 ${light ? 'text-zinc-400' : 'text-zinc-600'}`}>{copy}</p>
    </div>
  );
}
