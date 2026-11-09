import React, { useState } from 'react';
import { PERSONAL_INFO, PROJECTS, TECHNICAL_SKILLS } from '../data/portfolioData';
import { X, Printer, Download, Copy, Check, FileText } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const markdownResume = `# ${PERSONAL_INFO.name}
${PERSONAL_INFO.role} | ${PERSONAL_INFO.education.degree}
Email: ${PERSONAL_INFO.email} | Location: ${PERSONAL_INFO.location}
Availability: ${PERSONAL_INFO.availability}

---

## PROFESSIONAL SUMMARY
${PERSONAL_INFO.summary}

---

## EDUCATION
**${PERSONAL_INFO.education.degree}**
Focus: Applied Machine Learning, Real-Time Audio Infrastructure & Full-Stack Systems
Key Coursework:
- Data Structures & Algorithms
- Machine Learning & Deep Neural Networks
- Natural Language Processing
- Database Management Systems (SQL)
- Probability & Statistical Inference

---

## FEATURED PROJECTS

### 1. Mark — LiveKit Real-Time Voice Assistant
- Architected an ultra-low latency (<380ms) speech-to-speech conversational assistant using LiveKit SFU WebRTC audio rooms.
- Integrated Silero VAD (Voice Activity Detection) with a 250ms threshold to enable natural human barge-in and conversational interruption.
- Chained streaming STT (Whisper/Deepgram) and LLM token outputs directly into neural TTS synthesis to eradicate perceptual latency.
- Tech Stack: LiveKit Agents, WebRTC, Python, FastAPI, Silero VAD, Whisper STT, TypeScript.

### 2. OrenWatches — Luxury Timepiece E-Commerce Platform
- Engineered a high-performance digital boutique storefront for curated horological timepieces achieving 98/100 Lighthouse performance.
- Built multi-facet client-side filtering across price, movement calibre (automatic, quartz, manual wind), and water resistance.
- Structured a decoupled cart reducer with persistent localStorage synchronization ensuring zero state loss on refresh.
- Tech Stack: React 19, TypeScript, Tailwind CSS, Vite, Local Storage State.

### 3. Resume Chatbot & Terminal CLI
- Developed an interactive terminal tool allowing recruiters and clients to query professional credentials directly in CMD.
- Built command parser supporting structured commands (bio, education, projects, skills, interview Q&A) and natural language queries.
- Tech Stack: Node.js CLI, TypeScript, Terminal Parsing Engine, REST API.

---

## TECHNICAL SKILLS
- Languages: Python, TypeScript, JavaScript (ESNext), SQL, HTML5/CSS3
- AI & Data Science: PyTorch, Scikit-Learn, Pandas, NumPy, Silero VAD, Whisper STT, NLP
- Systems & Web: LiveKit Agents, WebRTC, React 19, Tailwind CSS, Node.js, Express, Git
- Computer Science: Data Structures & Algorithms, Database Design, Operating Systems
`;

  const handleCopyMarkdown = () => {
    navigator.clipboard.writeText(markdownResume);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadText = () => {
    const blob = new Blob([markdownResume], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Mathew_Kurian_Panjikaran_Resume.md`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-stone-900 border border-stone-800 rounded-2xl shadow-2xl overflow-hidden text-stone-100">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-800 bg-stone-950/80">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-amber-400" />
            <h2 className="text-base sm:text-lg font-bold text-stone-100">
              Mathew Kurian Panjikaran — Official ATS Resume
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 text-stone-400 hover:text-stone-100 hover:bg-stone-800 rounded-lg transition-colors"
              title="Print resume"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={handleCopyMarkdown}
              className="p-2 text-stone-400 hover:text-stone-100 hover:bg-stone-800 rounded-lg transition-colors"
              title="Copy Markdown"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
            <button
              onClick={handleDownloadText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download (.md)</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-stone-400 hover:text-stone-100 hover:bg-stone-800 rounded-lg transition-colors ml-2"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Formatted Paper Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 bg-stone-950 font-sans">
          <div className="max-w-3xl mx-auto space-y-8 bg-stone-900/60 p-8 sm:p-12 rounded-xl border border-stone-800">
            {/* Header Lockup */}
            <div className="border-b border-stone-800 pb-6 text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-100 tracking-tight">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-sm font-medium text-amber-400 mt-1 font-mono">
                {PERSONAL_INFO.role} · {PERSONAL_INFO.education.degree}
              </p>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1 text-xs text-stone-400 font-mono mt-3">
                <a href={PERSONAL_INFO.links.email} className="hover:text-amber-300">
                  {PERSONAL_INFO.email}
                </a>
                <span>·</span>
                <span>{PERSONAL_INFO.location}</span>
                <span>·</span>
                <span className="text-amber-400">{PERSONAL_INFO.availability}</span>
              </div>
            </div>

            {/* Professional Summary */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-2">
                Professional Summary
              </h2>
              <p className="text-sm text-stone-300 leading-relaxed">
                {PERSONAL_INFO.summary}
              </p>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-3">
                Education
              </h2>
              <div className="space-y-1">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-sm font-bold text-stone-100">{PERSONAL_INFO.education.degree}</h3>
                  <span className="text-xs font-mono text-stone-400">Class of 2026</span>
                </div>
                <p className="text-xs text-stone-300 font-mono">Specialization in AI, ML & Applied Systems</p>
                <div className="text-xs text-stone-400 mt-2">
                  <span className="text-stone-300 font-semibold">Coursework:</span>{' '}
                  {PERSONAL_INFO.education.coursework.join(' · ')}
                </div>
              </div>
            </div>

            {/* Featured Projects */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-4">
                Flagship Engineering Projects
              </h2>
              <div className="space-y-6">
                {PROJECTS.map((proj) => (
                  <div key={proj.id} className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h3 className="text-sm font-bold text-stone-100">{proj.title}</h3>
                      <span className="text-xs font-mono text-stone-400">{proj.timeline}</span>
                    </div>
                    <p className="text-xs font-mono text-amber-400">{proj.category}</p>
                    <p className="text-xs text-stone-300 leading-relaxed">{proj.description}</p>
                    <div className="text-[11px] text-stone-400 font-mono">
                      <span className="text-stone-300 font-medium">Stack:</span> {proj.techStack.join(' · ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-3">
                Technical Skills
              </h2>
              <div className="space-y-2 text-xs">
                <div>
                  <span className="font-semibold text-stone-200">AI & Machine Learning:</span>{' '}
                  <span className="text-stone-400 font-mono">
                    PyTorch, Scikit-Learn, Pandas, NumPy, Whisper STT, Silero VAD, LiveKit Agents
                  </span>
                </div>
                <div>
                  <span className="font-semibold text-stone-200">Web & Real-Time:</span>{' '}
                  <span className="text-stone-400 font-mono">
                    TypeScript, JavaScript (ESNext), React 19, Tailwind CSS, WebRTC, Node.js, Express, REST APIs
                  </span>
                </div>
                <div>
                  <span className="font-semibold text-stone-200">Core Foundations:</span>{' '}
                  <span className="text-stone-400 font-mono">
                    Data Structures & Algorithms, SQL / Relational Databases, Git, CLI Tooling
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
