import { CodeBracketIcon, BoltIcon, SparklesIcon, BriefcaseIcon, AcademicCapIcon, CheckBadgeIcon, FolderOpenIcon } from '@heroicons/react/24/outline';

const icons = {
  engineering: CodeBracketIcon,
  automation: BoltIcon,
  productivity: SparklesIcon,
  career: BriefcaseIcon,
  learning: AcademicCapIcon,
  certification: CheckBadgeIcon,
  project: FolderOpenIcon,
};

export default function AcademyIcon({ name, className = '' }) {
  const Icon = icons[name] || SparklesIcon;
  return <Icon aria-hidden="true" className={className}/>;
}
