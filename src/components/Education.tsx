import { GraduationCap, MapPin, Calendar, BookOpen } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import { education } from '../data/portfolio';

export default function Education() {
  const ref = useReveal();

  return (
    <section id="education" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div ref={ref as React.RefObject<HTMLDivElement>} className="reveal">
          <div className="text-center mb-16">
            <div
              className="text-xs font-medium text-indigo-400 tracking-widest uppercase mb-4"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              // education
            </div>
            <h2
              className="text-4xl sm:text-5xl font-bold text-white"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Academic Background
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* Timeline line */}
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/60 via-indigo-500/20 to-transparent" />

              <div className="relative pl-20">
                {/* Node */}
                <div className="absolute left-5 top-6 w-7 h-7 rounded-full bg-indigo-600/30 border-2 border-indigo-500 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-indigo-400" />
                </div>

                {/* Card */}
                <div className="glass rounded-2xl p-8 hover:border-indigo-500/40 transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <GraduationCap size={18} className="text-indigo-400" />
                        <h3
                          className="text-xl font-bold text-white"
                          style={{ fontFamily: 'Outfit, sans-serif' }}
                        >
                          {education.institution}
                        </h3>
                      </div>
                      <p className="text-indigo-300 font-medium">{education.degree}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2 shrink-0">
                      <div
                        className="px-4 py-2 rounded-xl bg-indigo-600/20 border border-indigo-500/30 text-2xl font-bold text-indigo-300"
                        style={{ fontFamily: 'Outfit, sans-serif' }}
                      >
                        {education.cgpa}
                      </div>
                      <span className="text-xs text-slate-600" style={{ fontFamily: 'JetBrains Mono' }}>CGPA</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-5 mb-6 text-sm text-slate-400">
                    <span className="flex items-center gap-2">
                      <Calendar size={14} className="text-indigo-500" />
                      {education.duration}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin size={14} className="text-indigo-500" />
                      {education.location}
                    </span>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <BookOpen size={14} className="text-indigo-400" />
                      <span
                        className="text-xs text-slate-500 tracking-wide uppercase"
                        style={{ fontFamily: 'JetBrains Mono, monospace' }}
                      >
                        Relevant Coursework
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {education.coursework.map((c) => (
                        <span
                          key={c}
                          className="px-3 py-1.5 rounded-lg bg-slate-800/60 border border-slate-700/50 text-sm text-slate-300"
                          style={{ fontFamily: 'JetBrains Mono, monospace' }}
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Future node */}
                <div className="relative pl-0 mt-8">
                  <div className="absolute -left-[52px] top-3 w-5 h-5 rounded-full border-2 border-dashed border-indigo-500/40 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500/40" />
                  </div>
                  <div
                    className="text-slate-600 text-sm"
                    style={{ fontFamily: 'JetBrains Mono, monospace' }}
                  >
                    2027 — Graduation
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
