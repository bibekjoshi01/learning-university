'use client';

import { useEffect, useState } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const stories = [
  { quote: <>“I stopped wondering what to learn next. The roadmap made every week feel connected to <em className="font-normal text-cobalt">the role I wanted.</em>”</>, initials:'AK', name:'Aakriti Karki', role:'AI Automation Specialist', result:'Career switch in 5 months' },
  { quote: <>“Instead of collecting tutorials, I built a portfolio that showed <em className="font-normal text-cobalt">what I could actually do.</em>”</>, initials:'SR', name:'Suman Rai', role:'AI Full Stack Engineer', result:'First product role' },
  { quote: <>“The clear sequence gave me confidence. I always knew why a skill mattered and <em className="font-normal text-cobalt">where it would lead.</em>”</>, initials:'NP', name:'Nisha Pandey', role:'AI Office Professional', result:'Promoted within 4 months' },
];

const companies = ['Fusemachines','Leapfrog','Deerhold','Cotiviti','Naamche','CloudFactory','Logpoint','Verisk','Cedar Gate','Khalti'];

export default function StudentOutcomes() {
  const [active,setActive]=useState(0);
  const [paused,setPaused]=useState(false);
  useEffect(()=>{if(paused)return;const timer=setInterval(()=>setActive(value=>(value+1)%stories.length),5000);return()=>clearInterval(timer)},[paused]);
  const story=stories[active];
  return <section className="section overflow-hidden bg-[#e9e5dc]" onMouseEnter={()=>setPaused(true)} onMouseLeave={()=>setPaused(false)}><div className="shell relative"><p className="eyebrow">Student outcome</p><div className="relative pr-0 sm:pr-24"><blockquote key={active} className="mt-12 max-w-6xl animate-[fadeIn_.25s_ease-out] font-display text-[42px] leading-[1.06] tracking-tight sm:text-7xl lg:text-[82px]">{story.quote}</blockquote><button onClick={()=>setActive(value=>(value+1)%stories.length)} aria-label="Show next student story" className="mt-8 grid size-12 place-items-center rounded-full border border-stone-400 bg-white/60 transition hover:bg-white sm:absolute sm:right-0 sm:top-1/2 sm:mt-0 sm:-translate-y-1/2"><ArrowRightIcon className="size-5"/></button></div><div className="mt-10 flex items-center gap-4 sm:mt-12"><span className="grid size-12 place-items-center rounded-full bg-stone-300 text-xs font-bold">{story.initials}</span><div><strong className="block text-sm">{story.name}</strong><span className="text-xs text-zinc-600">{story.role} · {story.result}</span></div></div><div className="mt-16 border-t border-stone-400/50 pt-8 sm:mt-20"><p className="eyebrow mb-7">Graduates are building at</p><div className="company-marquee" aria-label="Hiring companies"><div className="company-marquee-track">{[...companies,...companies].map((company,index)=><strong aria-hidden={index>=companies.length} className="whitespace-nowrap text-base text-zinc-600" key={`${company}-${index}`}>{company}</strong>)}</div></div></div></div></section>;
}
