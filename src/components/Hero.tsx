import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon, CodeforcesIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolio';

const roles = [
  'Software Engineer',
  'Full-Stack Developer',
  'AI/GenAI Enthusiast',
  'DSA Problem Solver',
];

// Particle canvas
function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const particles: { x: number; y: number; vx: number; vy: number; r: number; alpha: number }[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < 55; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.5 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(129, 140, 248, ${p.alpha})`;
        ctx.fill();
      }

      // Draw subtle connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.12 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60" />;
}

// Typing text hook
function useTyping(words: string[], speed = 80, pause = 1800) {
  const [text, setText] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === '') {
      setDeleting(false);
      setWordIdx((i) => (i + 1) % words.length);
    } else {
      timeout = setTimeout(() => {
        setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
      }, deleting ? speed / 2 : speed);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIdx, words, speed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTyping(roles);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0">
        <ParticleCanvas />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="flex flex-col gap-6">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 w-fit"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-indigo-300 font-medium tracking-wide">Open to Internship Opportunities</span>
            </div>

            <div>
              <h1
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-2"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                Gautam
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
                  Singh
                </span>
              </h1>
              <div
                className="mt-3 text-lg sm:text-xl text-slate-400 font-medium h-8 flex items-center"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                <span className="text-indigo-400">&gt;</span>
                <span className="ml-2 text-slate-200">{typed}</span>
                <span className="cursor ml-0.5" />
              </div>
            </div>

            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl">
              {personalInfo.summary}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#projects"
                className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-indigo-600/25 hover:shadow-indigo-500/40"
              >
                View My Projects
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-600 hover:border-indigo-500/60 text-slate-300 hover:text-white font-semibold text-sm transition-all duration-200 hover:bg-indigo-500/10"
              >
                Contact Me
              </a>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-4 pt-1">
              {[
                { href: personalInfo.github, icon: <GithubIcon size={18} />, label: 'GitHub' },
                { href: personalInfo.linkedin, icon: <LinkedinIcon size={18} />, label: 'LinkedIn' },
                { href: personalInfo.leetcode, icon: <LeetcodeIcon size={18} />, label: 'LeetCode' },
                { href: personalInfo.codeforces, icon: <CodeforcesIcon size={18} />, label: 'Codeforces' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex items-center justify-center w-10 h-10 rounded-lg border border-slate-700 hover:border-indigo-500/60 text-slate-400 hover:text-indigo-400 transition-all duration-200 hover:bg-indigo-500/10"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right: IDE illustration */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-full max-w-md">
              {/* Glow */}
              <div className="absolute inset-0 bg-indigo-600/10 blur-3xl rounded-full scale-110" />

              {/* IDE mockup */}
              <div className="relative glass rounded-2xl overflow-hidden shadow-2xl shadow-indigo-900/30">
                {/* Title bar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-indigo-500/10 bg-[#0d0d1f]">
                  <span className="w-3 h-3 rounded-full bg-red-500/70" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <span className="w-3 h-3 rounded-full bg-green-500/70" />
                  <span
                    className="ml-4 text-xs text-slate-500"
                    style={{ fontFamily: 'JetBrains Mono, monospace' }}
                  >
                    ai-code-editor — main.py
                  </span>
                </div>

                {/* Code area */}
                <div
                  className="p-5 text-xs leading-relaxed"
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}
                >
                  <div className="flex gap-4">
                    {/* Line numbers */}
                    <div className="text-slate-600 text-right select-none">
                      {Array.from({ length: 12 }, (_, i) => (
                        <div key={i}>{i + 1}</div>
                      ))}
                    </div>
                    {/* Code */}
                    <div>
                      <div><span className="text-violet-400">from</span> <span className="text-blue-300">langchain</span> <span className="text-violet-400">import</span> <span className="text-yellow-300">ChatOpenAI</span></div>
                      <div><span className="text-violet-400">from</span> <span className="text-blue-300">langgraph</span> <span className="text-violet-400">import</span> <span className="text-yellow-300">StateGraph</span></div>
                      <div className="mt-2 text-slate-600"># Initialize AI agent</div>
                      <div><span className="text-blue-300">llm</span> <span className="text-slate-400">=</span> <span className="text-yellow-300">ChatOpenAI</span><span className="text-slate-300">(</span></div>
                      <div><span className="text-slate-400 ml-4">model</span><span className="text-slate-300">=</span><span className="text-green-300">"gpt-4o"</span><span className="text-slate-300">,</span></div>
                      <div><span className="text-slate-400 ml-4">temperature</span><span className="text-slate-300">=</span><span className="text-orange-300">0.2</span></div>
                      <div><span className="text-slate-300">)</span></div>
                      <div className="mt-2"><span className="text-blue-300">graph</span> <span className="text-slate-400">=</span> <span className="text-yellow-300">StateGraph</span><span className="text-slate-300">(AgentState)</span></div>
                      <div><span className="text-blue-300">graph</span><span className="text-slate-300">.</span><span className="text-yellow-300">add_node</span><span className="text-slate-300">(</span><span className="text-green-300">"coder"</span><span className="text-slate-300">, code_agent)</span></div>
                      <div><span className="text-blue-300">graph</span><span className="text-slate-300">.</span><span className="text-yellow-300">add_edge</span><span className="text-slate-300">(</span><span className="text-green-300">"start"</span><span className="text-slate-300">,</span> <span className="text-green-300">"coder"</span><span className="text-slate-300">)</span></div>
                      <div><span className="text-indigo-300">app</span> <span className="text-slate-400">=</span> <span className="text-blue-300">graph</span><span className="text-slate-300">.</span><span className="text-yellow-300">compile</span><span className="text-slate-300">()</span></div>
                    </div>
                  </div>

                  {/* AI suggestion bar */}
                  <div className="mt-4 p-3 rounded-lg bg-indigo-600/15 border border-indigo-500/25">
                    <div className="text-indigo-400 text-[11px] font-medium mb-1 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                      AI Suggestion
                    </div>
                    <div className="text-slate-300 text-[11px]">Add error handling for API rate limits</div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 glass px-3 py-2 rounded-xl text-xs font-medium text-emerald-400 border border-emerald-500/25" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                ✓ Build passing
              </div>
              <div className="absolute -bottom-4 -left-4 glass px-3 py-2 rounded-xl text-xs font-medium text-indigo-300 border border-indigo-500/25" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                🤖 LangGraph active
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="flex justify-center mt-20">
          <div className="flex flex-col items-center gap-2 text-slate-600">
            <span className="text-xs tracking-widest uppercase" style={{ fontFamily: 'JetBrains Mono, monospace' }}>scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
