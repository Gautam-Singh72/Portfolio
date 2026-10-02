import { useReveal } from '../hooks/useReveal';
import { stats } from '../data/portfolio';

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <section ref={ref as React.RefObject<HTMLElement>} className="reveal">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <div
                className="text-xs font-medium text-indigo-400 tracking-widest uppercase mb-4"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                // about me
              </div>
              <h2
                className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                Building at the intersection of
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400"> code & AI</span>
              </h2>
              <div className="space-y-4 text-slate-400 text-base leading-relaxed">
                <p>
                  I'm a <span className="text-slate-200 font-medium">Computer Science (AI & ML) student</span> at GL Bajaj Institute of Technology and Management, with a strong foundation in Data Structures & Algorithms and Object-Oriented Programming.
                </p>
                <p>
                  I'm proficient in <span className="text-slate-200 font-medium">C++</span> and deeply interested in full-stack development, AI/GenAI, and RAG-based LLM applications. I enjoy building systems that are both technically solid and meaningfully useful.
                </p>
                <p>
                  I believe in continuous learning — picking up emerging technologies, contributing to projects, and sharpening my problem-solving abilities through competitive programming.
                </p>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="glass rounded-2xl p-6 flex flex-col gap-2 hover:border-indigo-500/35 transition-all duration-300 group"
                >
                  <span
                    className="text-3xl font-bold text-white group-hover:text-indigo-300 transition-colors"
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                  >
                    {s.value}
                  </span>
                  <span className="text-sm text-slate-500">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
