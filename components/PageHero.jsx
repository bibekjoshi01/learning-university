export default function PageHero({ eyebrow, title, copy, dark = false, children }) {
  return <section className={`border-b ${dark ? 'bg-night text-white' : ''}`}><div className="shell py-20 sm:py-28 lg:py-32"><p className={`eyebrow ${dark ? '!text-zinc-500' : ''}`}>{eyebrow}</p><h1 className="mt-8 max-w-5xl font-display text-6xl font-normal leading-[.92] tracking-[-.045em] sm:text-8xl lg:text-[106px]">{title}</h1>{copy && <p className={`mt-8 max-w-2xl text-lg leading-8 ${dark ? 'text-zinc-400' : 'text-zinc-600'}`}>{copy}</p>}{children}</div></section>;
}
