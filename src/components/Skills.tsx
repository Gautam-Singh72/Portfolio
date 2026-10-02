import { Code2, Monitor, Server, Brain, Database, Wrench, Layers } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import { skills } from '../data/portfolio';

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 size={20} />,
  Monitor: <Monitor size={20} />,
  Server: <Server size={20} />,
  Brain: <Brain size={20} />,
  Database: <Database size={20} />,
  Wrench: <Wrench size={20} />,
  Layers: <Layers size={20} />,
};

export default function Skills() {
  const ref = useReveal();

  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div ref={ref as React.RefObject<HTMLDivElement>} className="reveal">
          <div className="text-center mb-16">
            <div
              className="text-xs font-medium text-indigo-400 tracking-widest uppercase mb-4"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              // technical skills
            </div>
            <h2
              className="text-4xl sm:text-5xl font-bold text-white"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              What I work with
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <div
                key={skill.category}
                className="glass rounded-2xl p-5 flex flex-col gap-4 hover:border-indigo-500/40 hover:bg-indigo-500/5 transition-all duration-300 group cursor-default"
              >
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-indigo-600/20 text-indigo-400 group-hover:bg-indigo-600/30 transition-colors">
                    {iconMap[skill.icon]}
                  </div>
                  <span
                    className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors"
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                  >
                    {skill.category}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 rounded-lg bg-slate-800/60 text-xs text-slate-400 group-hover:text-slate-300 border border-slate-700/50 transition-colors"
                      style={{ fontFamily: 'JetBrains Mono, monospace' }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
