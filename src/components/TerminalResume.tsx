import React, { useState, useRef, useEffect } from 'react';
import { TERMINAL_COMMANDS, PERSONAL_INFO, PROJECTS } from '../data/portfolioData';
import { Terminal, Copy, Check, CornerDownLeft, Sparkles, Trash2, Maximize2, Minimize2 } from 'lucide-react';

interface TerminalResumeProps {
  onOpenResumeModal: () => void;
}

interface HistoryItem {
  id: string;
  command: string;
  output: string[];
  timestamp: string;
  isError?: boolean;
}

export const TerminalResume: React.FC<TerminalResumeProps> = ({ onOpenResumeModal }) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      id: 'init-1',
      command: 'welcome',
      timestamp: '09:00:00',
      output: [
        '╔══════════════════════════════════════════════════════════════════════════════════╗',
        '║       MATHEW KURIAN PANJIKARAN — RESUME CHATBOT & INTERVIEW CLI (v1.0.4)        ║',
        '║            B.Tech in Artificial Intelligence & Data Science Engineering          ║',
        '╚══════════════════════════════════════════════════════════════════════════════════╝',
        '',
        'Interactive developer terminal for recruiters, hiring managers, and clients.',
        'Type "help" to view system commands, or ask any natural question about my experience.',
        ''
      ]
    }
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [copiedCmd, setCopiedCmd] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom on output change
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCopyCliCommand = () => {
    navigator.clipboard.writeText('npx mathew-resume');
    setCopiedCmd(true);
    setTimeout(() => setCopiedCmd(false), 2000);
  };

  // Natural language query handler about Mathew's background
  const processNaturalLanguage = (query: string): string[] => {
    const q = query.toLowerCase().trim();

    if (q.includes('why hire') || q.includes('hire you') || q.includes('strengths')) {
      return [
        '[INTERVIEW INSIGHT: Why Hire Mathew?]',
        '1. Strong Applied ML Foundations: B.Tech curriculum in AI & Data Science with hands-on PyTorch & data modeling.',
        '2. Specialized Real-Time Voice Expertise: Built Mark using LiveKit & WebRTC to overcome the sub-400ms latency barrier.',
        '3. Full-Stack Product Delivery: Built OrenWatches e-commerce and this interactive CLI bot from design to code.',
        '4. High Execution Velocity: Proactively transforms complex engineering concepts into working products.'
      ];
    }

    if (q.includes('livekit') || q.includes('voice') || q.includes('mark')) {
      return [
        '[PROJECT DEEP DIVE: MARK VOICE ASSISTANT]',
        'Mark is a real-time conversational agent Mathew built using LiveKit WebRTC.',
        '• Protocol: WebRTC OPUS audio streaming over UDP for minimal jitter and packet loss.',
        '• Turn Detection: Silero VAD detects user interruptions (<250ms latency) enabling natural barge-in.',
        '• Speech Processing: Streaming speech-to-text combined with token streaming TTS for sub-380ms response.'
      ];
    }

    if (q.includes('oren') || q.includes('watch') || q.includes('store') || q.includes('ecommerce')) {
      return [
        '[PROJECT DEEP DIVE: ORENWATCHES]',
        'OrenWatches is a responsive luxury timepiece e-commerce platform built by Mathew.',
        '• Frontend: Modern React, TypeScript, and Tailwind CSS with 98/100 Lighthouse performance.',
        '• Features: Multi-facet client filtering, reactive cart state management, and dark horology aesthetic.'
      ];
    }

    if (q.includes('education') || q.includes('college') || q.includes('degree') || q.includes('university') || q.includes('btech')) {
      return [
        '[ACADEMIC CREDENTIALS]',
        'Degree: B.Tech in Artificial Intelligence & Data Science',
        'Specialization: Machine Learning, Statistical Modeling, and Real-Time Systems',
        'Key Coursework: DSA, Deep Learning, Natural Language Processing, DBMS, Operating Systems',
        'Location: Kerala, India'
      ];
    }

    if (q.includes('contact') || q.includes('email') || q.includes('reach') || q.includes('phone')) {
      return [
        '[CONTACT INFORMATION]',
        `Email: ${PERSONAL_INFO.email}`,
        `Location: ${PERSONAL_INFO.location}`,
        'Feel free to send an interview invitation or project inquiry directly.'
      ];
    }

    if (q.includes('python') || q.includes('typescript') || q.includes('react') || q.includes('skill')) {
      return [
        '[TECHNICAL SKILL SET]',
        'Languages: Python, TypeScript, JavaScript (ESNext), SQL, HTML/CSS',
        'AI/ML: PyTorch, Scikit-Learn, Pandas, NumPy, Silero VAD, Whisper STT, LiveKit Agents',
        'Web/Systems: React 19, Tailwind CSS, Node.js, Express, WebRTC, Git'
      ];
    }

    return [
      `AI Persona Response: Thank you for asking "${query}".`,
      `Mathew is an AI & Data Science B.Tech student with practical expertise in LiveKit WebRTC voice systems (Mark), high-performance web products (OrenWatches), and interactive CLI tools.`,
      `For specific sections, you can run commands: 'mark', 'orenwatches', 'skills', 'education', or 'download'.`
    ];
  };

  const handleRunCommand = (cmdStr: string) => {
    const raw = cmdStr.trim();
    if (!raw) return;

    // Add to command history
    setCommandHistory((prev) => [...prev, raw]);
    setHistoryIndex(-1);

    const parts = raw.split(' ');
    const primary = parts[0].toLowerCase();
    const now = new Date().toLocaleTimeString();

    if (primary === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    if (primary === 'download' || primary === 'resume') {
      onOpenResumeModal();
      setHistory((prev) => [
        ...prev,
        {
          id: String(Date.now()),
          command: raw,
          timestamp: now,
          output: ['Opening Mathew Kurian Panjikaran ATS Resume Viewer & Download Options...']
        }
      ]);
      setInputVal('');
      return;
    }

    if (TERMINAL_COMMANDS[primary]) {
      const cmdData = TERMINAL_COMMANDS[primary];
      const outputLines = Array.isArray(cmdData.output) ? cmdData.output : [cmdData.output];
      setHistory((prev) => [
        ...prev,
        {
          id: String(Date.now()),
          command: raw,
          timestamp: now,
          output: outputLines
        }
      ]);
      setInputVal('');
      return;
    }

    // Process natural language question or query
    const conversationalOutput = processNaturalLanguage(raw);
    setHistory((prev) => [
      ...prev,
      {
        id: String(Date.now()),
        command: raw,
        timestamp: now,
        output: conversationalOutput
      }
    ]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleRunCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const nextIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setInputVal(commandHistory[nextIndex]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex === -1) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= commandHistory.length) {
        setHistoryIndex(-1);
        setInputVal('');
      } else {
        setHistoryIndex(nextIndex);
        setInputVal(commandHistory[nextIndex]);
      }
    }
  };

  const quickCommands = ['help', 'bio', 'education', 'skills', 'projects', 'mark', 'orenwatches', 'contact', 'download'];

  return (
    <section id="terminal-section" className="py-20 border-b border-stone-800/80 bg-stone-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-2">
              Interactive Resume Chatbot & CLI
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-100 tracking-tight [text-wrap:balance]">
              Test Mathew&apos;s personal resume chatbot directly in your browser.
            </h2>
            <p className="text-sm text-stone-300 mt-2 max-w-2xl">
              As described in Mathew&apos;s project brief, clients and interviewers can type commands or ask questions to inspect his credentials, systems knowledge, and project architecture in real time.
            </p>
          </div>

          {/* Real CLI Shell Badge & Copy Command */}
          <div className="flex items-center gap-2 p-2 bg-stone-900 border border-stone-800 rounded-lg">
            <span className="text-xs font-mono text-stone-400 pl-2">Run in your local CMD:</span>
            <code className="text-xs font-mono text-amber-300 bg-stone-950 px-2 py-1 rounded border border-stone-800">
              npx mathew-resume
            </code>
            <button
              onClick={handleCopyCliCommand}
              className="p-1.5 text-stone-400 hover:text-stone-100 hover:bg-stone-800 rounded transition-colors"
              title="Copy CLI command to clipboard"
            >
              {copiedCmd ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Quick Suggestion Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-4 scrollbar-thin">
          <span className="text-xs text-stone-500 font-mono whitespace-nowrap shrink-0">Quick Commands:</span>
          {quickCommands.map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleRunCommand(cmd)}
              className="px-2.5 py-1 text-xs font-mono text-stone-300 hover:text-amber-300 bg-stone-900 hover:bg-stone-800 border border-stone-800 rounded transition-colors whitespace-nowrap shrink-0"
            >
              ${cmd}
            </button>
          ))}
          <button
            onClick={() => handleRunCommand('why should we hire you?')}
            className="px-2.5 py-1 text-xs font-mono text-amber-400/90 hover:text-amber-300 bg-stone-900 hover:bg-stone-800 border border-amber-400/30 rounded transition-colors whitespace-nowrap shrink-0"
          >
            ask: &ldquo;why hire you?&rdquo;
          </button>
        </div>

        {/* Terminal Window Box */}
        <div
          className={`rounded-2xl border border-stone-800 bg-stone-950 shadow-2xl overflow-hidden transition-all duration-300 ${
            isExpanded ? 'fixed inset-4 z-50 max-w-none' : 'relative w-full'
          }`}
        >
          {/* Terminal Title Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-stone-900 border-b border-stone-800">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="text-xs font-mono text-stone-400 ml-2">
                mathew@resume-cli:~ (bash) — v1.0.4
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setHistory([])}
                className="p-1 text-stone-400 hover:text-stone-200 transition-colors"
                title="Clear screen"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-1 text-stone-400 hover:text-stone-200 transition-colors"
                title={isExpanded ? 'Minimize terminal' : 'Expand full screen'}
              >
                {isExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Terminal Content Buffer */}
          <div
            onClick={() => inputRef.current?.focus()}
            className={`p-5 font-mono text-xs overflow-y-auto space-y-4 bg-stone-950/95 cursor-text ${
              isExpanded ? 'h-[calc(100vh-120px)]' : 'h-96'
            }`}
          >
            {history.map((item) => (
              <div key={item.id} className="space-y-1">
                {/* Command Line */}
                <div className="flex items-center gap-2 text-stone-300">
                  <span className="text-amber-400 font-semibold">visitor@mkp-bot:~$</span>
                  <span className="text-stone-100 font-medium">{item.command}</span>
                  <span className="text-[10px] text-stone-600 ml-auto">{item.timestamp}</span>
                </div>

                {/* Output Lines */}
                <div className="text-stone-300 space-y-0.5 pl-3 border-l border-stone-800">
                  {item.output.map((line, lIdx) => (
                    <div
                      key={lIdx}
                      className={
                        line.startsWith('╔') || line.startsWith('║') || line.startsWith('╚')
                          ? 'text-amber-400/90'
                          : line.startsWith('[')
                          ? 'text-amber-300 font-semibold mt-2'
                          : line.startsWith('•') || line.startsWith('  •')
                          ? 'text-stone-300'
                          : 'text-stone-300'
                      }
                    >
                      {line || '\u00A0'}
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Active Prompt Line */}
            <div className="flex items-center gap-2 text-stone-100 pt-2">
              <span className="text-amber-400 font-semibold shrink-0">visitor@mkp-bot:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type 'help' or ask a question (e.g., 'tell me about your LiveKit voice bot')..."
                className="w-full bg-transparent outline-none text-stone-100 font-mono text-xs placeholder:text-stone-600 caret-amber-400"
                autoFocus
              />
              <button
                onClick={() => handleRunCommand(inputVal)}
                className="p-1 text-stone-400 hover:text-amber-300 shrink-0"
                title="Send command"
              >
                <CornerDownLeft className="w-3.5 h-3.5" />
              </button>
            </div>

            <div ref={bottomRef} />
          </div>

          {/* Terminal Footer Bar */}
          <div className="px-4 py-2 bg-stone-900/80 border-t border-stone-800 text-[11px] font-mono text-stone-500 flex items-center justify-between">
            <span>Press Enter ↵ to execute · ↑/↓ for history</span>
            <span>Status: Ready</span>
          </div>
        </div>
      </div>
    </section>
  );
};
