const columns = [
  ['Explore', ['Schools','How it works','Student stories']],
  ['Academy', ['About','Contact','FAQs']],
  ['Account', ['Sign in','Privacy','Terms']],
];

const hrefFor = label => ({ Schools:'/schools', About:'/about', Contact:'/contact' }[label] || '#');

export default function SiteFooter() {
  return <footer className="bg-ink py-20 text-white"><div className="shell">
    <div className="grid gap-16 lg:grid-cols-2">
      <div><a href="/" className="flex items-center gap-3 text-xl font-extrabold"><span className="grid size-10 place-items-center rounded-lg bg-white font-display text-2xl italic text-ink">T</span>Tabflux</a><p className="mt-8 font-display text-2xl leading-tight text-zinc-400">A modern career university<br/>for the age of AI.</p></div>
      <div className="grid grid-cols-3 gap-5 text-xs text-zinc-400">{columns.map(([title,links])=><div className="space-y-4" key={title}><strong className="eyebrow !text-zinc-600">{title}</strong>{links.map(link=><a className="block hover:text-white" href={hrefFor(link)} key={link}>{link}</a>)}</div>)}</div>
    </div>
    <div className="mt-20 flex flex-wrap justify-between gap-5 border-t border-zinc-800 pt-7 text-sm text-zinc-500"><span>© 2026 Tabflux Academy</span><span>Built in Kathmandu, for the world.</span><span>Privacy · Terms</span></div>
  </div></footer>;
}
