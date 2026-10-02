import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { useReveal } from '../hooks/useReveal';
import { personalInfo } from '../data/portfolio';

export default function Contact() {
  const ref = useReveal();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const response = await fetch('https://formspree.io/f/mvkgqqpe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });

      if (!response.ok) throw new Error('Unable to send message');

      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 4000);
    } catch {
      setError('Something went wrong. Please try again or email me directly.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div ref={ref as React.RefObject<HTMLDivElement>} className="reveal">
          <div className="text-center mb-16">
            <div
              className="text-xs font-medium text-indigo-400 tracking-widest uppercase mb-4"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              // contact
            </div>
            <h2
              className="text-4xl sm:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Let's Build Something
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400"> Together</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              I'm always interested in software engineering, AI/GenAI, and challenging technical problems. Feel free to reach out for opportunities, collaborations, or technical discussions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Info */}
            <div className="flex flex-col gap-6">
              {[
                { icon: <Mail size={18} />, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                { icon: <Phone size={18} />, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
                { icon: <MapPin size={18} />, label: 'Location', value: personalInfo.location, href: null },
              ].map((item) => (
                <div key={item.label} className="glass rounded-2xl p-5 flex items-center gap-4 hover:border-indigo-500/35 transition-all duration-300 group">
                  <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-indigo-600/20 text-indigo-400 group-hover:bg-indigo-600/30 transition-colors shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div
                      className="text-xs text-slate-600 mb-0.5"
                      style={{ fontFamily: 'JetBrains Mono, monospace' }}
                    >
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-slate-300 hover:text-indigo-300 transition-colors font-medium text-sm"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-slate-300 font-medium text-sm">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}

              {/* Socials */}
              <div className="glass rounded-2xl p-5">
                <div
                  className="text-xs text-slate-600 mb-3"
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}
                >
                  Find me online
                </div>
                <div className="flex gap-3">
                  {[
                    { href: personalInfo.github, icon: <GithubIcon size={18} />, label: 'GitHub' },
                    { href: personalInfo.linkedin, icon: <LinkedinIcon size={18} />, label: 'LinkedIn' },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-700 hover:border-indigo-500/50 text-slate-400 hover:text-indigo-300 text-sm transition-all duration-200 hover:bg-indigo-500/10"
                    >
                      {s.icon} {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="glass rounded-2xl p-8">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center gap-4 text-center py-8">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-2xl">
                    ✓
                  </div>
                  <div>
                    <div className="text-white font-semibold text-lg mb-1" style={{ fontFamily: 'Outfit, sans-serif' }}>Message sent!</div>
                    <div className="text-slate-400 text-sm">I'll get back to you soon.</div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <label
                      className="block text-xs text-slate-500 mb-2"
                      style={{ fontFamily: 'JetBrains Mono, monospace' }}
                    >
                      name
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700/60 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/40 transition-all"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs text-slate-500 mb-2"
                      style={{ fontFamily: 'JetBrains Mono, monospace' }}
                    >
                      email
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700/60 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/40 transition-all"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs text-slate-500 mb-2"
                      style={{ fontFamily: 'JetBrains Mono, monospace' }}
                    >
                      message
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="What's on your mind?"
                      className="w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700/60 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/40 transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="group flex items-center justify-center gap-2 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-indigo-600/25 hover:shadow-indigo-500/40"
                  >
                    {submitting ? 'Sending...' : 'Send Message'}
                    <Send size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                  {error && <p className="text-xs text-red-400 text-center">{error}</p>}
                  <p
                    className="text-xs text-slate-600 text-center"
                    style={{ fontFamily: 'JetBrains Mono, monospace' }}
                  >
                    </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
