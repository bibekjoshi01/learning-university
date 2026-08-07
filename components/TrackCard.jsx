import { schools } from '@/lib/academy';

export default function TrackCard({ track }) {
  const school = schools.find(item => item.slug === track.school);
  return <a href={`/roles/${track.slug}`} className="card group flex min-h-[350px] flex-col p-7 transition hover:-translate-y-1 hover:shadow-card">
    <p className="eyebrow text-cobalt">{school.shortName}</p>
    <h3 className="mt-7 font-display text-4xl leading-none tracking-tight">{track.name}</h3>
    <p className="mt-5 text-sm leading-6 text-zinc-600">{track.summary}</p>
    <div className="mt-auto border-t pt-5"><div className="flex flex-wrap gap-4 text-[10px] font-bold text-zinc-500"><span>{track.duration}</span><span>·</span><span>{track.difficulty}</span><span>·</span><span>{track.projects} projects</span></div><span className="mt-5 flex items-center justify-between text-xs font-bold text-cobalt">Enroll in Track <span>→</span></span></div>
  </a>;
}
