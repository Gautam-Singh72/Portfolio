import { ExternalLink, ChevronRight } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { useReveal } from '../hooks/useReveal';
import { projects } from '../data/portfolio';

function IDEVisual() {
  return (
    <div className="relative h-full min-h-52 rounded-xl overflow-hidden bg-[#060611] border border-indigo-500/15 flex flex-col">
      {/* Title bar */}
      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-indigo-500/10 bg-[#0a0a1a] shrink-0">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        <span className="ml-3 text-[10px] text-slate-600" style={{ fontFamily: 'JetBrains Mono' }}>editor.tsx</span>
      </div>

      {/* Layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-28 border-r border-indigo-500/10 p-2 flex flex-col gap-1 shrink-0">
          {['src', '├ components', '├ api', '├ editor', '└ agents'].map((f) => (
            <div key={f} className="text-[9px] text-slate-600 px-1" style={{ fontFamily: 'JetBrains Mono' }}>{f}</div>
          ))}
        </div>

        {/* Code pane */}
        <div className="flex-1 p-3 text-[9px] leading-4 overflow-hidden" style={{ fontFamily: 'JetBrains Mono' }}>
          <div><span className="text-violet-400">const</span> <span className="text-blue-300">agent</span> <span className="text-slate-400">=</span> <span className="text-yellow-300">new</span> <span className="text-green-300">CodeAgent</span><span className="text-slate-300">(llm);</span></div>
          <div><span className="text-blue-300">socket</span><span className="text-slate-300">.</span><span className="text-yellow-300">on</span><span className="text-slate-300">(</span><span className="text-orange-300">"generate"</span><span className="text-slate-300">, async (</span><span className="text-blue-300">prompt</span><span className="text-slate-300">) =&gt; {`{`}</span></div>
          <div className="ml-3"><span className="text-violet-400">const</span> <span className="text-blue-300">result</span> <span className="text-slate-400">=</span> <span className="text-slate-300">await</span></div>
          <div className="ml-5"><span className="text-blue-300">agent</span><span className="text-slate-300">.</span><span className="text-yellow-300">generate</span><span className="text-slate-300">(prompt);</span></div>
          <div className="ml-3"><span className="text-blue-300">socket</span><span className="text-slate-300">.</span><span className="text-yellow-300">emit</span><span className="text-slate-300">(</span><span className="text-orange-300">"result"</span><span className="text-slate-300">, result);</span></div>
          <div><span className="text-slate-300">{`});`}</span></div>
        </div>
      </div>

      {/* Status bar */}
      <div className="flex items-center gap-3 px-3 py-1.5 bg-indigo-600/20 border-t border-indigo-500/20 shrink-0">
        <span className="flex items-center gap-1 text-[9px] text-emerald-400" style={{ fontFamily: 'JetBrains Mono' }}>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> connected
        </span>
        <span className="text-[9px] text-indigo-300" style={{ fontFamily: 'JetBrains Mono' }}>Redis • MongoDB • Docker</span>
      </div>
    </div>
  );
}

function RAGVisual() {
  const steps = [
    { label: 'PDF Upload', color: 'bg-blue-500/20 border-blue-500/30 text-blue-300' },
    { label: 'Chunking', color: 'bg-violet-500/20 border-violet-500/30 text-violet-300' },
    { label: 'Embeddings', color: 'bg-purple-500/20 border-purple-500/30 text-purple-300' },
    { label: 'Vector DB', color: 'bg-indigo-500/20 border-indigo-500/30 text-indigo-300' },
    { label: 'RAG Retrieval', color: 'bg-fuchsia-500/20 border-fuchsia-500/30 text-fuchsia-300' },
    { label: 'LLM Response', color: 'bg-pink-500/20 border-pink-500/30 text-pink-300' },
  ];

  return (
    <div className="h-full min-h-52 rounded-xl overflow-hidden bg-[#060611] border border-indigo-500/15 p-5 flex flex-col justify-between">
      <div
        className="text-[10px] text-indigo-400 font-medium mb-3"
        style={{ fontFamily: 'JetBrains Mono' }}
      >
        RAG Pipeline
      </div>
      <div className="flex flex-col gap-2">
        {steps.map((s, i) => (
          <div key={s.label} className="flex items-center gap-3">
            <div
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-[10px] font-medium flex-1 ${s.color}`}
              style={{ fontFamily: 'JetBrains Mono' }}
            >
              <span className="text-[8px] opacity-60">{String(i + 1).padStart(2, '0')}</span>
              {s.label}
            </div>
            {i < steps.length - 1 && (
              <ChevronRight size={12} className="text-slate-600 shrink-0" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const ref = useReveal();

  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div ref={ref as React.RefObject<HTMLDivElement>} className="reveal">
          <div className="text-center mb-16">
            <div
              className="text-xs font-medium text-indigo-400 tracking-widest uppercase mb-4"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              // featured projects
            </div>
            <h2
              className="text-4xl sm:text-5xl font-bold text-white"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Things I've built
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((p) => (
              <div
                key={p.id}
                className="glass rounded-2xl overflow-hidden hover:border-indigo-500/40 transition-all duration-300 group flex flex-col"
              >
                {/* Visual */}
                <div className="p-5 pb-3">
                  {p.type === 'ide' ? <IDEVisual /> : <RAGVisual />}
                </div>

                {/* Content */}
                <div className="p-6 pt-3 flex flex-col gap-4 flex-1">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3
                        className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors"
                        style={{ fontFamily: 'Outfit, sans-serif' }}
                      >
                        {p.title}
                      </h3>
                      <span
                        className="text-xs text-slate-600 shrink-0 mt-1"
                        style={{ fontFamily: 'JetBrains Mono, monospace' }}
                      >
                        {p.period}
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">{p.description}</p>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-col gap-1.5">
                    {p.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-2 text-xs text-slate-400">
                        <span className="w-1 h-1 rounded-full bg-indigo-500 shrink-0" />
                        {h}
                      </div>
                    ))}
                  </div>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {p.stack.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-md bg-slate-800/70 border border-slate-700/50 text-xs text-slate-500"
                        style={{ fontFamily: 'JetBrains Mono, monospace' }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 pt-2 mt-auto">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 text-sm text-slate-300 hover:text-white transition-all duration-200"
                    >
                      <GithubIcon size={14} /> GitHub
                    </a>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg border border-indigo-500/30 hover:border-indigo-500/60 hover:bg-indigo-500/10 text-sm text-indigo-400 hover:text-indigo-300 transition-all duration-200"
                    >
                      <ExternalLink size={14} /> View Details
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
