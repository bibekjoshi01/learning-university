import { ArrowUpRightIcon, ClockIcon, FolderOpenIcon } from '@heroicons/react/24/outline';
import { schools } from '@/lib/academy';

const schoolStyles = {
  'software-engineering-ai': 'bg-lilac text-violet-700',
  'business-ai-automation': 'bg-sage text-success',
  productivity: 'bg-sand text-warning',
};

export default function TrackCard({ track }) {
  const school = schools.find(item => item.slug === track.school);
  return <a href={`/roles/${track.slug}`} className="card group flex min-h-[340px] flex-col overflow-hidden p-7 transition duration-200 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-lift">
    <div className="flex items-start justify-between"><span className={`rounded-full px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-wider ${schoolStyles[track.school]}`}>{school.shortName}</span><span className="grid size-9 place-items-center rounded-full border bg-paper transition group-hover:border-cobalt group-hover:bg-cobalt group-hover:text-white"><ArrowUpRightIcon className="size-4"/></span></div>
    <h3 className="mt-8 font-display text-[42px] leading-[.96] tracking-tight">{track.name}</h3>
    <p className="mt-5 text-sm leading-6 text-zinc-600">{track.summary}</p>
    <div className="mt-auto flex flex-wrap gap-4 border-t pt-5 text-[10px] font-bold text-zinc-500"><span className="flex items-center gap-1.5"><ClockIcon className="size-4"/>{track.duration}</span><span className="flex items-center gap-1.5"><FolderOpenIcon className="size-4"/>{track.projects} projects</span><span className="rounded-full bg-paper px-2.5 py-1">{track.difficulty}</span></div>
  </a>;
}
