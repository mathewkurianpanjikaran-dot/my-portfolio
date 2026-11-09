import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { FileText, Terminal, Share2 } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenTerminal: () => void;
  onOpenShare: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenTerminal, onOpenShare }) => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-stone-950/85 border-b border-stone-800/80">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-6 py-4">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="text-base sm:text-lg font-bold tracking-tight text-stone-100 hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
        >
          {PERSONAL_INFO.name}
        </a>

        {/* Zone 2: 4–5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-300">
          <a href="#projects" className="hover:text-stone-100 transition-colors whitespace-nowrap shrink-0">
            Projects
          </a>
          <a href="#terminal-section" className="hover:text-stone-100 transition-colors whitespace-nowrap shrink-0">
            CLI Terminal
          </a>
          <a href="#interview-hub" className="hover:text-stone-100 transition-colors whitespace-nowrap shrink-0">
            Interview Q&A
          </a>
          <a href="#skills" className="hover:text-stone-100 transition-colors whitespace-nowrap shrink-0">
            Skills & Education
          </a>
          <a href="#contact" className="hover:text-stone-100 transition-colors whitespace-nowrap shrink-0">
            Contact
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={onOpenShare}
            className="inline-flex items-center gap-1.5 px-2.5 py-2 text-xs font-medium text-stone-300 hover:text-stone-100 bg-stone-900 hover:bg-stone-800 border border-stone-700/60 rounded-md transition-colors whitespace-nowrap"
            title="Share portfolio link"
          >
            <Share2 className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden sm:inline">Share</span>
          </button>

          <button
            onClick={onOpenTerminal}
            className="hidden sm:inline-flex items-center gap-2 px-3 py-2 text-xs font-mono text-stone-300 hover:text-stone-100 bg-stone-900 hover:bg-stone-800 border border-stone-700/60 rounded-md transition-colors whitespace-nowrap"
            title="Launch interactive resume terminal"
          >
            <Terminal className="w-3.5 h-3.5 text-amber-400" />
            <span>CMD Shell</span>
          </button>

          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors whitespace-nowrap shadow-xs"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>View Resume</span>
          </button>
        </div>
      </div>
    </header>
  );
};
