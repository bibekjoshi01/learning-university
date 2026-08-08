import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import TrackCard from '@/components/TrackCard';
import { getSchool, schoolTracks, schools } from '@/lib/academy';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export function generateStaticParams(){return schools.map(s=>({slug:s.slug}))}
export function generateMetadata({params}){const school=getSchool(params.slug);return {title:school?`${school.name} — Tabflux`:'School'}}

export default function SchoolPage({params}) {
  const school=getSchool(params.slug);
  if(!school) notFound();
  const trackList=schoolTracks(school.slug);
  return <main>
    <section className="border-b bg-white"><div className="shell py-20 sm:py-28"><Breadcrumbs items={[{label:'Schools',href:'/schools'},{label:school.name}]}/><p className="eyebrow">School {school.index}</p><h1 className="mt-7 max-w-5xl font-display text-6xl leading-[.92] tracking-[-.04em] sm:text-8xl lg:text-[100px]">{school.name}</h1><p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-600">{school.purpose}</p><div className="mt-12 flex flex-wrap gap-8 border-t pt-8 text-sm"><div><span className="eyebrow">For</span><p className="mt-2 max-w-sm">{school.audience}</p></div><div><span className="eyebrow">Opportunities</span><p className="mt-2 max-w-sm">{school.opportunities}</p></div></div></div></section>
    <section className="section shell"><div className="grid gap-10 lg:grid-cols-[.6fr_1.4fr]"><div><p className="eyebrow">Career roles</p><h2 className="mt-6 font-display text-5xl">Choose the role.<br/>See the path.</h2><p className="mt-6 text-sm leading-7 text-zinc-600">Every role connects the skills, projects, certification, and career outcomes into one clear path.</p></div><div className="grid gap-5 md:grid-cols-2">{trackList.map(track=><TrackCard key={track.slug} track={track}/>)}</div></div></section>
    <section className="section bg-night text-white"><div className="shell grid gap-12 lg:grid-cols-2"><div><p className="eyebrow !text-zinc-500">Learning philosophy</p><h2 className="display mt-7 text-5xl sm:text-7xl">Practice before proof.<br/>Proof before promise.</h2></div><p className="self-end text-lg leading-8 text-zinc-400">{school.philosophy} Each milestone is visible, reviewed, and connected to the next.</p></div></section>
    <section className="section shell"><div className="grid gap-5 md:grid-cols-2"><article className="card p-9"><p className="eyebrow">Student story</p><blockquote className="mt-8 font-display text-4xl leading-tight">“The roadmap helped me stop browsing and start building with purpose.”</blockquote><p className="mt-8 text-xs font-bold">Samir B. · Tabflux graduate</p></article><article className="card p-9"><p className="eyebrow">Frequently asked</p><h3 className="mt-8 font-display text-4xl">Do I need prior experience?</h3><p className="mt-5 text-sm leading-7 text-zinc-600">Some roles are beginner-friendly while others expect foundations. Every path clearly states its difficulty and prerequisites before enrollment.</p><a className="mt-8 inline-flex items-center gap-2 text-xs font-bold text-cobalt" href="/contact">Ask an advisor <ArrowRightIcon className="size-4"/></a></article></div></section>
  </main>;
}
