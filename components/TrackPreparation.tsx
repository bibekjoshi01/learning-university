import { CheckIcon, BookOpenIcon } from '@heroicons/react/24/outline';
import type { RoleGuidance } from '@/data/types';

export default function TrackPreparation({ roles, guidance }: { roles: string[]; guidance: RoleGuidance }) {
  return <aside>
    <p className="eyebrow">Who this is for</p>
    <p className="mt-5 text-base leading-8 text-zinc-600">People who want a structured path into this work and prefer building practical evidence over collecting disconnected course certificates.</p>

    <p className="eyebrow mt-10">Expected roles</p>
    <ul className="mt-5 space-y-3 text-sm">{roles.map(role=><li className="flex items-center gap-2" key={role}><CheckIcon className="size-4 shrink-0 text-cobalt"/>{role}</li>)}</ul>

    <div className="mt-10 border-t pt-8">
      <p className="eyebrow">Prerequisites</p>
      <p className="mt-3 text-xs leading-5 text-zinc-500">What you need to participate successfully.</p>
      <ul className="mt-5 space-y-3 text-sm text-zinc-700">{guidance.prerequisites.map(item=><li className="flex gap-3" key={item}><CheckIcon className="mt-0.5 size-4 shrink-0 text-cobalt"/><span>{item}</span></li>)}</ul>
    </div>

    <div className="mt-10 rounded-2xl border bg-white p-6">
      <span className="grid size-10 place-items-center rounded-xl bg-blue-50 text-cobalt"><BookOpenIcon className="size-5"/></span>
      <p className="eyebrow mt-6">Academic foundations</p>
      <h3 className="mt-3 font-display text-3xl">Subjects that help</h3>
      <p className="mt-3 text-xs leading-5 text-zinc-500">These subjects are not admission requirements. Studying their theory alongside the Track will strengthen your understanding.</p>
      <ul className="mt-5 flex flex-wrap gap-2">{guidance.academics.map(subject=><li className="rounded-full border bg-paper px-3 py-2 text-[10px] font-bold text-zinc-600" key={subject}>{subject}</li>)}</ul>
    </div>
  </aside>;
}
