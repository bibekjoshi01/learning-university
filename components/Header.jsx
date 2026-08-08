'use client';

import { useState } from 'react';
import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/outline';

const links = [
  ['Schools', '/schools'],
  ['About', '/about'],
  ['Contact', '/contact'],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="bg-ink px-4 py-2.5 text-center text-[10px] font-semibold leading-5 text-zinc-300 sm:text-[11px]">
        Admissions are open for the October cohort. <a className="ml-1 whitespace-nowrap text-white sm:ml-2" href="/schools">Explore Tracks →</a>
      </div>
      <header className="sticky top-0 z-50 border-b bg-paper/90 backdrop-blur-xl">
        <div className="shell flex h-[76px] items-center">
            <a href="/" className="flex items-center gap-2.5 text-lg font-extrabold tracking-tight">
            <span className="grid size-9 place-items-center rounded-lg bg-cobalt font-display text-2xl italic text-white">T</span>
            Tabflux
          </a>
          <nav className="ml-14 hidden items-center gap-9 text-[13px] font-semibold text-zinc-600 lg:flex">
            {links.map(([label, href]) => <a className="transition hover:text-cobalt" href={href} key={label}>{label}</a>)}
          </nav>
          <div className="ml-auto hidden items-center gap-7 text-[13px] font-semibold lg:flex">
            <a href="#">Sign in</a><a href="/schools" className="button-primary min-h-10 px-5">Explore Tracks</a>
          </div>
          <button onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation" className="ml-auto grid size-11 place-items-center lg:hidden">
            {open ? <XMarkIcon className="size-6" /> : <Bars2Icon className="size-6" />}
          </button>
        </div>
        {open && <nav className="shell flex flex-col gap-1 border-t py-4 text-sm font-bold lg:hidden">{links.map(([label, href]) => <a className="rounded-lg px-3 py-3" onClick={() => setOpen(false)} href={href} key={label}>{label}</a>)}<a className="button-primary mt-2 w-full" onClick={() => setOpen(false)} href="/schools">Explore Tracks</a><a className="py-3 text-center text-zinc-500" href="#">Sign in</a></nav>}
      </header>
    </>
  );
}
