import AcademyIcon from './AcademyIcon';

const steps = [
  ['01','Choose a School','learning'],
  ['02','Select your role','career'],
  ['03','Build real skills','engineering'],
  ['04','Graduate with proof','certification'],
];

export default function CareerPathVisual() {
  return <div aria-label="Your Tabflux career path" className="relative rounded-[28px] border bg-white p-5 shadow-lift sm:p-7">
    <div className="absolute -right-6 -top-6 -z-10 size-40 rounded-full bg-lilac blur-3xl"/>
    <div className="mb-5 flex items-center justify-between border-b pb-4"><div><p className="text-[10px] font-extrabold uppercase tracking-[.18em] text-zinc-400">Your career map</p><p className="mt-1 text-sm font-bold">AI Full Stack Engineer</p></div><span className="rounded-full bg-sage px-3 py-1.5 text-[10px] font-bold text-success">Clear path</span></div>
    <div className="space-y-2">{steps.map(([number,label,icon],index)=><div className={`group flex items-center gap-4 rounded-xl border p-3.5 ${index===1?'border-cobalt bg-blue-50':'bg-paper'}`} key={label}><span className={`grid size-10 place-items-center rounded-lg ${index===1?'bg-cobalt text-white':'bg-white text-zinc-500'}`}><AcademyIcon name={icon} className="size-5"/></span><div className="min-w-0 flex-1"><span className="text-[9px] font-extrabold tracking-widest text-zinc-400">STEP {number}</span><p className="truncate text-sm font-bold">{label}</p></div>{index===1&&<span className="size-2 rounded-full bg-cobalt shadow-[0_0_0_5px_rgba(49,91,234,.12)]"/>}</div>)}</div>
    <div className="mt-5 grid grid-cols-3 gap-2"><div className="rounded-xl bg-sand p-3"><strong className="block font-display text-2xl font-normal">28</strong><span className="text-[9px] font-bold text-zinc-500">WEEKS</span></div><div className="rounded-xl bg-sage p-3"><strong className="block font-display text-2xl font-normal">7</strong><span className="text-[9px] font-bold text-zinc-500">PROJECTS</span></div><div className="rounded-xl bg-lilac p-3"><strong className="block font-display text-2xl font-normal">1</strong><span className="text-[9px] font-bold text-zinc-500">OUTCOME</span></div></div>
  </div>;
}
