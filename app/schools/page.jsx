import PageHero from '@/components/PageHero';
import { schools } from '@/lib/academy';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export const metadata = { title: 'Schools — Tabflux' };

export default function SchoolsPage(){return <main>
  <PageHero eyebrow="Academy / Schools" title={<>Choose your field.<br/><em className="font-normal text-cobalt">Then choose your role.</em></>} copy="Three focused Schools organize every career path at Tabflux. Start with the kind of work you want to do."/>
  <section className="section shell"><div className="space-y-6">{schools.map(school=><a href={`/schools/${school.slug}`} key={school.slug} className="group grid gap-8 rounded-2xl border bg-white p-8 transition hover:shadow-card sm:p-10 lg:grid-cols-[100px_1fr_260px] lg:items-center"><span className="grid size-16 place-items-center rounded-2xl border text-2xl">{school.icon}</span><div><p className="eyebrow">School {school.index}</p><h2 className="mt-4 font-display text-4xl sm:text-5xl">{school.name}</h2><p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-600">{school.purpose}</p></div><div className="border-t pt-6 lg:border-l lg:border-t-0 lg:py-4 lg:pl-8"><strong className="font-display text-4xl font-normal">{school.tracks.length}</strong><span className="ml-2 text-xs text-zinc-500">featured roles</span><p className="mt-5 flex items-center gap-2 text-xs font-bold text-cobalt">Explore Tracks <ArrowRightIcon className="size-4"/></p></div></a>)}</div></section>
</main>}
