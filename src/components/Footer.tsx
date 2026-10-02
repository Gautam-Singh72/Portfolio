import { Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-indigo-500/10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div
          className="text-sm text-slate-600 flex items-center gap-1.5"
          style={{ fontFamily: 'JetBrains Mono, monospace' }}
        >
          Built by{' '}
          <span className="text-slate-400">Gautam Singh</span>
          <span className="flex items-center gap-1 text-slate-600">
            — made with <Heart size={12} className="text-indigo-500 inline" /> and lots of algorithms
          </span>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-slate-600 hover:text-slate-300 transition-colors"
          >
            <GithubIcon size={16} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-slate-600 hover:text-slate-300 transition-colors"
          >
            <LinkedinIcon size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
