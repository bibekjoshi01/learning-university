'use client';

import { useState } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const tracks = [
  { school: 'AI Engineering', role: 'AI Product Engineer', copy: 'Build intelligent, production-ready products from idea to launch.', duration: '24 weeks', level: 'Beginner friendly', projects: '6 projects', category: 'AI', color: 'bg-blue-950 text-blue-200' },
  { school: 'Automation', role: 'AI Automation Specialist', copy: 'Design agentic workflows that transform how modern teams operate.', duration: '16 weeks', level: 'No-code friendly', projects: '5 projects', category: 'Automation', color: 'bg-emerald-950 text-emerald-200' },
  { school: 'Business & Automation with AI', role: 'AI Growth Strategist', copy: 'Turn AI capabilities into customer growth and measurable business value.', duration: '14 weeks', level: 'Beginner friendly', projects: '4 projects', category: 'Business', color: 'bg-amber-950 text-amber-200' },
  { school: 'Software Engineering', role: 'Full-Stack Product Engineer', copy: 'Ship polished digital products across the complete modern stack.', duration: '28 weeks', level: 'Foundation included', projects: '7 projects', category: 'Software', color: 'bg-violet-950 text-violet-200' },
];

const filters = ['All', 'Software', 'AI', 'Automation', 'Business'];

export default function TrackExplorer() {
  const [active, setActive] = useState('All');
  const visible = tracks.filter((track) => active === 'All' || track.category === active);
  return (
    <>
      <div className="mt-14 flex gap-2 overflow-x-auto pb-3">
        {filters.map((filter) => <button key={filter} onClick={() => setActive(filter)} className={`whitespace-nowrap rounded-full border px-5 py-2.5 text-xs font-bold transition ${active === filter ? 'border-white bg-white text-ink' : 'border-zinc-700 text-zinc-400 hover:text-white'}`}>{filter === 'AI' ? 'AI Engineering' : filter}</button>)}
      </div>
      <div className="mt-5 border-t border-zinc-700">
        {visible.map((track, index) => (
          <article key={track.role} className="group grid gap-6 border-b border-zinc-700 py-9 transition hover:bg-white/[0.03] sm:grid-cols-[44px_1fr] lg:grid-cols-[44px_1fr_280px] lg:items-center">
            <span className="font-display text-xl text-zinc-600">{String(tracks.indexOf(track) + 1).padStart(2, '0')}</span>
            <div>
              <span className={`inline-flex rounded px-2.5 py-1.5 text-[9px] font-extrabold uppercase tracking-[.15em] ${track.color}`}>{track.school}</span>
              <h3 className="mt-4 font-display text-4xl tracking-tight sm:text-5xl">{track.role}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-400">{track.copy}</p>
              <div className="mt-6 flex flex-wrap gap-5 text-[11px] font-semibold text-zinc-500"><span>◷ {track.duration}</span><span>◇ {track.level}</span><span>▣ {track.projects}</span></div>
            </div>
            <a href="#roadmap" className="ml-0 border-zinc-700 pt-5 lg:ml-6 lg:border-l lg:py-5 lg:pl-8"><span className="eyebrow !text-zinc-600">Career outcome</span><strong className="mt-2 block font-display text-2xl font-normal">{track.role}</strong><span className="mt-5 flex items-center gap-2 text-xs font-bold text-blue-300">Explore track <ArrowRightIcon className="size-4"/></span></a>
          </article>
        ))}
      </div>
    </>
  );
}
