import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import TrackCard from '@/components/TrackCard';
import TrackPreparation from '@/components/TrackPreparation';
import { getTrack, getSchool, tracks, skillCatalog, trackGuidance } from '@/lib/academy';

interface RolePageProps { params: { slug: string } }

export function generateStaticParams(){return tracks.map(track=>({slug:track.slug}))}
export function generateMetadata({params}: RolePageProps){const track=getTrack(params.slug);return{title:track?`${track.name} — Tabflux`:'Role'}}

export default function RolePage({params}: RolePageProps) {
  const track=getTrack(params.slug);
  if(!track) notFound();
  const school=getSchool(track.schoolSlug);
  const guidance=trackGuidance[track.slug];
  if(!school || !guidance) notFound();
  const related=tracks.filter(item=>item.schoolSlug===track.schoolSlug&&item.slug!==track.slug).slice(0,2);

  return <main>
    <section className="bg-night text-white"><div className="shell py-20 sm:py-28">
      <div className="[&_span:last-child]:!text-white"><Breadcrumbs items={[{label:'Schools',href:'/schools'},{label:school.shortName,href:`/schools/${school.slug}`},{label:track.name}]}/></div>
      <p className="eyebrow !text-blue-300">Career Track</p>
      <h1 className="mt-7 max-w-5xl font-display text-6xl leading-[.9] tracking-[-.045em] sm:text-8xl lg:text-[105px]">{track.name}</h1>
      <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">{track.summary}</p>
      <div className="mt-9 flex flex-col gap-3 sm:flex-row"><button className="button-primary">Enroll in Career Track</button><a className="button-secondary" href="#roadmap">Download Roadmap</a></div>
      <div className="mt-12 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-xl bg-zinc-700 sm:grid-cols-4">{[['Duration',track.duration],['Difficulty',track.difficulty],['Projects',track.projectCount],['Outcome',track.outcomes[0]]].map(([key,value])=><div className="bg-night p-5" key={key}><span className="eyebrow !text-zinc-600">{key}</span><strong className="mt-2 block text-sm">{value}</strong></div>)}</div>
    </div></section>

    <section className="section shell" id="roadmap"><div className="grid gap-14 lg:grid-cols-[.65fr_1.35fr]">
      <TrackPreparation roles={track.outcomes} guidance={guidance}/>
      <div><p className="eyebrow">Learning roadmap</p><h2 className="mt-6 font-display text-5xl sm:text-6xl">Skills build in sequence.</h2><div className="mt-10">{track.courseSlugs.map((slug,index)=>{const skill=skillCatalog[slug];return <div key={slug} className="grid grid-cols-[45px_1fr] gap-4 border-t py-7 sm:grid-cols-[45px_1fr_auto]"><span className="font-display text-xl text-zinc-400">0{index+1}</span><div><p className="eyebrow">Skill course</p><h3 className="mt-2 font-display text-3xl">{skill.name}</h3><p className="mt-2 text-xs text-zinc-500">{skill.summary}</p></div><a href={`/skill-courses/${slug}`} className="button-secondary mt-4 min-h-10 px-4 text-xs sm:mt-0 sm:self-center">Enroll in Course</a></div>})}<div className="grid grid-cols-[45px_1fr] gap-4 border-b bg-blue-50 p-7"><span className="font-display text-xl text-cobalt">✓</span><div><p className="eyebrow text-cobalt">Projects + certification</p><h3 className="mt-2 font-display text-3xl">Prove you can do the work</h3><p className="mt-2 text-xs text-zinc-500">Complete {track.projectCount} reviewed projects and earn the {track.name} certification.</p></div></div></div></div>
    </div></section>

    <section className="section border-y bg-white"><div className="shell"><p className="eyebrow">Portfolio projects</p><div className="mt-8 grid gap-5 md:grid-cols-3">{['Guided build','Industry simulation','Career capstone'].map((name,index)=><article className="rounded-2xl border bg-paper p-7" key={name}><span className="text-[10px] font-bold text-cobalt">PROJECT 0{index+1}</span><h3 className="mt-12 font-display text-3xl">{name}</h3><p className="mt-4 text-xs leading-6 text-zinc-500">Apply the roadmap to a realistic problem and document decisions, tradeoffs, and outcomes.</p></article>)}</div></div></section>

    <section className="section shell"><div className="grid gap-16 lg:grid-cols-2"><div><p className="eyebrow">Frequently asked</p><h2 className="mt-7 font-display text-5xl">What do I earn?</h2><p className="mt-5 text-sm leading-7 text-zinc-600">Graduates earn a verifiable Career Track certification after completing the required Skill Courses and reviewed portfolio projects.</p></div><div><p className="eyebrow">Related career tracks</p><div className="mt-7 grid gap-5">{related.map(item=><TrackCard track={item} key={item.slug}/>)}</div></div></div></section>
  </main>;
}
