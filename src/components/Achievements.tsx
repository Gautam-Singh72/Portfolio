import { useReveal } from '../hooks/useReveal';
import { personalInfo, dsaTopics } from '../data/portfolio';
import { LeetcodeIcon, CodeforcesIcon } from './SocialIcons';

function AlgoBackground() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.04]"
      viewBox="0 0 800 400"
      fill="none"
      aria-hidden="true"
    >
      {/* Binary tree */}
      <circle cx="400" cy="40" r="14" stroke="#818cf8" strokeWidth="1.5" />
      <circle cx="280" cy="100" r="14" stroke="#818cf8" strokeWidth="1.5" />
      <circle cx="520" cy="100" r="14" stroke="#818cf8" strokeWidth="1.5" />
      <circle cx="220" cy="160" r="12" stroke="#818cf8" strokeWidth="1.5" />
      <circle cx="340" cy="160" r="12" stroke="#818cf8" strokeWidth="1.5" />
      <circle cx="460" cy="160" r="12" stroke="#818cf8" strokeWidth="1.5" />
      <circle cx="580" cy="160" r="12" stroke="#818cf8" strokeWidth="1.5" />
      <line x1="400" y1="54" x2="280" y2="86" stroke="#818cf8" strokeWidth="1" />
      <line x1="400" y1="54" x2="520" y2="86" stroke="#818cf8" strokeWidth="1" />
      <line x1="280" y1="114" x2="220" y2="148" stroke="#818cf8" strokeWidth="1" />
      <line x1="280" y1="114" x2="340" y2="148" stroke="#818cf8" strokeWidth="1" />
      <line x1="520" y1="114" x2="460" y2="148" stroke="#818cf8" strokeWidth="1" />
      <line x1="520" y1="114" x2="580" y2="148" stroke="#818cf8" strokeWidth="1" />
      {/* DP grid */}
      {Array.from({ length: 5 }, (_, row) =>
        Array.from({ length: 8 }, (_, col) => (
          <rect
            key={`${row}-${col}`}
            x={50 + col * 28}
            y={220 + row * 24}
            width="24"
            height="20"
            stroke="#818cf8"
            strokeWidth="0.8"
            rx="1"
          />
        ))
      )}
      {/* Graph nodes */}
      {[
        [620, 240], [680, 280], [700, 330], [640, 360], [580, 320], [600, 270],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="10" stroke="#818cf8" strokeWidth="1.2" />
      ))}
      <line x1="620" y1="240" x2="680" y2="280" stroke="#818cf8" strokeWidth="0.8" />
      <line x1="680" y1="280" x2="700" y2="330" stroke="#818cf8" strokeWidth="0.8" />
      <line x1="700" y1="330" x2="640" y2="360" stroke="#818cf8" strokeWidth="0.8" />
      <line x1="640" y1="360" x2="580" y2="320" stroke="#818cf8" strokeWidth="0.8" />
      <line x1="580" y1="320" x2="600" y2="270" stroke="#818cf8" strokeWidth="0.8" />
      <line x1="600" y1="270" x2="620" y2="240" stroke="#818cf8" strokeWidth="0.8" />
      <line x1="620" y1="240" x2="640" y2="360" stroke="#818cf8" strokeWidth="0.8" />
    </svg>
  );
}

export default function Achievements() {
  const ref = useReveal();

  return (
    <section id="achievements" className="py-28 px-6 relative overflow-hidden">
      {/* Distinct background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/20 to-transparent" />
      <div className="absolute inset-0 border-y border-indigo-500/10" />

      <div className="max-w-7xl mx-auto relative">
        <div ref={ref as React.RefObject<HTMLDivElement>} className="reveal">
          <div className="text-center mb-16">
            <div
              className="text-xs font-medium text-indigo-400 tracking-widest uppercase mb-4"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              // problem solving & dsa
            </div>
            <h2
              className="text-4xl sm:text-5xl font-bold text-white"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Algorithms & Problem Solving
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left: stat + platforms */}
            <div className="flex flex-col gap-6">
              {/* Big number */}
              <div className="glass rounded-2xl p-8 relative overflow-hidden">
                <AlgoBackground />
                <div className="relative">
                  <div
                    className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400 leading-none"
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                  >
                    500+
                  </div>
                  <div className="text-slate-400 text-lg mt-2">Problems Solved</div>
                  <div
                    className="text-xs text-slate-600 mt-1"
                    style={{ fontFamily: 'JetBrains Mono, monospace' }}
                  >
                    across LeetCode & Codeforces
                  </div>
                </div>
              </div>

              {/* Platform buttons */}
              <div className="flex gap-4">
                <a
                  href={personalInfo.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-orange-500/30 hover:border-orange-500/60 bg-orange-500/5 hover:bg-orange-500/10 text-orange-400 hover:text-orange-300 font-semibold text-sm transition-all duration-200"
                >
                  <LeetcodeIcon size={16} /> LeetCode
                </a>
                <a
                  href={personalInfo.codeforces}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-blue-500/30 hover:border-blue-500/60 bg-blue-500/5 hover:bg-blue-500/10 text-blue-400 hover:text-blue-300 font-semibold text-sm transition-all duration-200"
                >
                  <CodeforcesIcon size={16} /> Codeforces
                </a>
              </div>
            </div>

            {/* Right: topics */}
            <div className="flex flex-col gap-4">
              <div
                className="text-sm text-slate-500 font-medium mb-2"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                Topics mastered
              </div>
              {dsaTopics.map((topic, i) => (
                <div key={topic} className="flex items-center gap-4">
                  <span
                    className="text-xs text-indigo-600 w-6 text-right shrink-0"
                    style={{ fontFamily: 'JetBrains Mono, monospace' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1 glass rounded-xl px-5 py-3.5 flex items-center justify-between hover:border-indigo-500/35 transition-colors group">
                    <span
                      className="text-slate-300 font-medium text-sm group-hover:text-white transition-colors"
                      style={{ fontFamily: 'Outfit, sans-serif' }}
                    >
                      {topic}
                    </span>
                    <div className="w-24 h-1.5 rounded-full bg-slate-800 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
                        style={{ width: `${[85, 80, 75, 70, 78][i]}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}

              <div className="glass rounded-xl p-4 mt-2 border-l-2 border-l-indigo-500">
                <p className="text-slate-400 text-sm leading-relaxed">
                  Actively participates in programming contests on LeetCode and Codeforces, consistently expanding problem-solving depth across algorithmic domains.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
