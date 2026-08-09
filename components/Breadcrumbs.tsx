interface BreadcrumbItem { label: string; href?: string }

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return <nav aria-label="Breadcrumb" className="mb-10 flex flex-wrap items-center gap-2 text-[11px] font-bold text-zinc-500"><a href="/" className="hover:text-cobalt">Academy</a>{items.map((item,index)=><span className="contents" key={item.label}><span className="text-zinc-300">/</span>{item.href && index < items.length-1 ? <a href={item.href} className="hover:text-cobalt">{item.label}</a> : <span className="text-ink">{item.label}</span>}</span>)}</nav>;
}
