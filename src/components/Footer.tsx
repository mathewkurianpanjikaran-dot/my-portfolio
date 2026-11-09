import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Terminal, FileText } from 'lucide-react';

interface FooterProps {
  onOpenResume: () => void;
  onOpenTerminal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume, onOpenTerminal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-stone-950 text-stone-400 border-t border-stone-800/80">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Identity */}
          <div className="text-center md:text-left">
            <p className="text-sm font-bold text-stone-100">{PERSONAL_INFO.name}</p>
            <p className="text-xs text-stone-400 font-mono mt-0.5">
              {PERSONAL_INFO.education.degree} · Class of 2026
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-6 text-xs font-mono text-stone-400">
            <button onClick={onOpenTerminal} className="hover:text-amber-400 transition-colors">
              CLI Shell
            </button>
            <button onClick={onOpenResume} className="hover:text-amber-400 transition-colors">
              ATS Resume
            </button>
            <a href="#interview-hub" className="hover:text-amber-400 transition-colors">
              Interview Q&A
            </a>
            <a href={PERSONAL_INFO.links.email} className="hover:text-amber-400 transition-colors">
              Direct Email
            </a>
          </div>

          {/* Back to top */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-stone-600 font-mono">Kerala, India</span>
            <button
              onClick={scrollToTop}
              className="p-2 text-stone-400 hover:text-stone-100 hover:bg-stone-900 rounded-lg border border-stone-800 transition-colors"
              title="Return to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quiet Copyright */}
        <div className="mt-8 pt-6 border-t border-stone-900 text-center text-xs text-stone-600 font-mono">
          © {new Date().getFullYear()} {PERSONAL_INFO.name}. Designed for technical interview evaluation.
        </div>
      </div>
    </footer>
  );
};
