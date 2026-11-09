import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Copy, Check, Send, MapPin, Calendar, ExternalLink } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [subject, setSubject] = useState('Interview Invitation / Technical Opportunity');
  const [recruiterName, setRecruiterName] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [sentNotice, setSentNotice] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSendMail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(`${subject} - ${company || recruiterName || 'Recruiter'}`);
    const mailtoBody = encodeURIComponent(
      `Hi Mathew,\n\n${message || 'We would like to invite you for a technical interview regarding an engineering role at our company.'}\n\nBest regards,\n${recruiterName || 'Hiring Team'}\n${company ? `Company: ${company}` : ''}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setSentNotice(true);
    setTimeout(() => setSentNotice(false), 4000);
  };

  const presetTemplates = [
    {
      label: 'Technical Interview',
      sub: 'Invite for Software / AI Engineer Interview',
      msg: 'We came across your work on the Mark voice assistant and OrenWatches. We would love to schedule a 30-minute technical interview to discuss an opportunity on our team.'
    },
    {
      label: 'Internship Offer',
      sub: 'Summer/Fall 2026 AI Engineering Internship',
      msg: 'We are impressed with your B.Tech AI & Data Science background and real-time audio systems work. We would like to discuss an internship role starting in 2026.'
    },
    {
      label: 'Contract / Project',
      sub: 'Custom Voice AI / Web Engineering Project',
      msg: 'We are looking for an engineer with LiveKit WebRTC and React experience to help build a custom prototype. Are you available for freelance/contract collaboration?'
    }
  ];

  return (
    <section id="contact" className="py-20 border-b border-stone-800/80 bg-stone-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Outreach Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-2">
                Direct Contact & Interview Booking
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-stone-100 tracking-tight [text-wrap:balance]">
                Let&apos;s build intelligent systems together.
              </h2>
              <p className="text-sm text-stone-300 mt-3 leading-relaxed">
                Currently actively preparing for engineering interviews, internships, and full-time opportunities. Reach out directly for candidate inquiries, architecture discussions, or code review.
              </p>
            </div>

            {/* Direct Email Card */}
            <div className="p-5 bg-stone-900/60 border border-stone-800 rounded-xl space-y-3">
              <span className="text-xs font-mono text-stone-400 uppercase tracking-wider block">
                Direct Primary Inbox
              </span>
              <div className="flex items-center justify-between gap-3">
                <code className="text-sm font-mono text-amber-300 select-all truncate">
                  {PERSONAL_INFO.email}
                </code>
                <button
                  onClick={handleCopy}
                  className="p-2 text-stone-400 hover:text-stone-100 hover:bg-stone-800 rounded-lg transition-colors shrink-0"
                  title="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Availability & Location */}
            <div className="space-y-3 text-xs text-stone-400 font-mono">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-stone-300">{PERSONAL_INFO.availability}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-stone-500 shrink-0" />
                <span>{PERSONAL_INFO.location} · Open to Remote & Relocation</span>
              </div>
            </div>

            {/* Quick Template Fillers */}
            <div>
              <span className="text-xs font-mono text-stone-500 block mb-2">
                Quick Invitation Templates:
              </span>
              <div className="space-y-2">
                {presetTemplates.map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      setSubject(item.sub);
                      setMessage(item.msg);
                    }}
                    className="w-full text-left p-2.5 bg-stone-900/40 hover:bg-stone-900 border border-stone-800/80 rounded-lg transition-colors text-xs text-stone-300"
                  >
                    <span className="font-semibold text-amber-400 block mb-0.5">{item.label}</span>
                    <span className="text-[11px] text-stone-400 block truncate">{item.msg}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Pre-configured Composer Form (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 bg-stone-900/60 border border-stone-800 rounded-2xl shadow-xl">
            <h3 className="text-base font-bold text-stone-100 mb-4">Send an Interview Invitation</h3>

            <form onSubmit={handleSendMail} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-stone-400 mb-1">Your Name / Title</label>
                  <input
                    type="text"
                    value={recruiterName}
                    onChange={(e) => setRecruiterName(e.target.value)}
                    placeholder="e.g. Sarah Jenkins (Tech Recruiter)"
                    className="w-full px-3.5 py-2.5 bg-stone-950 border border-stone-800 rounded-lg text-xs text-stone-100 placeholder:text-stone-600 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-stone-400 mb-1">Company / Team</label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="e.g. AI Engineering Labs"
                    className="w-full px-3.5 py-2.5 bg-stone-950 border border-stone-800 rounded-lg text-xs text-stone-100 placeholder:text-stone-600 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-stone-400 mb-1">Subject</label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-stone-950 border border-stone-800 rounded-lg text-xs text-stone-100 focus:outline-none focus:border-amber-400 transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-stone-400 mb-1">Interview Details / Message</label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share details regarding your technical role, interview timeline, or engineering opportunity..."
                  className="w-full px-3.5 py-2.5 bg-stone-950 border border-stone-800 rounded-lg text-xs text-stone-100 placeholder:text-stone-600 focus:outline-none focus:border-amber-400 transition-colors resize-none"
                  required
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-[11px] text-stone-500 font-mono">
                  Opens default mail client directed to Mathew
                </span>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Dispatch Email</span>
                </button>
              </div>

              {sentNotice && (
                <div className="p-3 bg-amber-400/10 border border-amber-400/30 rounded-lg text-xs text-amber-300 font-mono animate-in fade-in">
                  Opening mail client to send to {PERSONAL_INFO.email}!
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
