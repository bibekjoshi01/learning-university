import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import TrackCard from '@/components/TrackCard';
import { skillCatalog, tracks } from '@/lib/academy';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

interface SkillPageProps { params: { slug: string } }

export function generateStaticParams() {
  return Object.keys(skillCatalog).map(slug => ({ slug }));
}

export function generateMetadata({ params }: SkillPageProps) {
  const skill = skillCatalog[params.slug];
  return { title: skill ? `${skill.name} — Tabflux` : 'Skill Course' };
}

export default function SkillPage({ params }: SkillPageProps) {
  const skill = skillCatalog[params.slug];
  if (!skill) notFound();
  const related = tracks.filter(track => track.courseSlugs.includes(params.slug));
  const nextSlug = related[0]?.courseSlugs[related[0].courseSlugs.indexOf(params.slug) + 1];
  const next = nextSlug && skillCatalog[nextSlug];

  return <main>
    <section className="border-b bg-white"><div className="shell py-20 sm:py-28">
      <Breadcrumbs items={[{ label: 'Schools', href: '/schools' }, { label: 'Skill Courses' }, { label: skill.name }]}/>
      <p className="eyebrow text-cobalt">Skill Course</p>
      <h1 className="mt-7 max-w-5xl font-display text-6xl leading-[.92] tracking-[-.04em] sm:text-8xl lg:text-[100px]">{skill.name}</h1>
      <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-600">{skill.summary}</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row"><button className="button-primary">Enroll in Course <ArrowRightIcon className="size-4"/></button><a href="#objectives" className="button-secondary">View objectives</a></div>
    </div></section>
    <section className="section shell" id="objectives"><div className="grid gap-16 lg:grid-cols-[.75fr_1.25fr]">
      <aside><p className="eyebrow">Why this skill matters</p><p className="mt-5 text-sm leading-7 text-zinc-600">This capability is a required building block inside one or more role roadmaps. You learn it in the context of the work it enables—not as an isolated technology.</p><p className="eyebrow mt-10">Prerequisites</p><p className="mt-5 text-sm text-zinc-600">Follow the sequence shown in your role roadmap. Beginner paths include the required foundations.</p></aside>
      <div><p className="eyebrow">Learning objectives</p><div className="mt-7 divide-y border-y">{['Understand the core concepts and professional context','Apply the skill through guided, realistic practice','Evaluate quality, risk, and tradeoffs','Connect this skill to the next roadmap milestone'].map((item,index)=><div className="flex gap-5 py-6" key={item}><span className="font-display text-xl text-cobalt">0{index+1}</span><p className="font-display text-2xl">{item}</p></div>)}</div>{next&&<a href={`/skill-courses/${nextSlug}`} className="mt-10 block rounded-2xl bg-night p-8 text-white"><p className="eyebrow !text-blue-300">Next recommended Skill Course</p><h2 className="mt-5 flex items-center gap-3 font-display text-4xl">{next.name} <ArrowRightIcon className="size-6"/></h2><p className="mt-3 text-sm text-zinc-400">{next.summary}</p></a>}</div>
    </div></section>
    <section className="section border-t bg-white"><div className="shell"><p className="eyebrow">Related roles</p><div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{related.map(track=><TrackCard track={track} key={track.slug}/>)}</div></div></section>
  </main>;
}
