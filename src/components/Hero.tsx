import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowRight, Terminal, Mail, Sparkles, MapPin } from 'lucide-react';

interface HeroProps {
  onOpenTerminal: () => void;
  onExploreProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTerminal, onExploreProjects }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-stone-800/80">
      <div className="max-w-7xl mx-auto px-6">
        {/* Split-Screen Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Typographic Hierarchy & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Unboxed Kicker */}
            <div className="flex items-center gap-2 text-xs font-medium text-amber-400 mb-4 tracking-wider uppercase">
              <span>{PERSONAL_INFO.education.degree}</span>
              <span aria-hidden="true" className="text-stone-600">·</span>
              <span className="text-stone-400">Engineering Portfolio</span>
            </div>

            {/* Headline with text-wrap: balance */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-stone-100 tracking-tight leading-[1.12] mb-6 [text-wrap:balance]">
              Engineering intelligent systems, low-latency audio pipelines & resilient web products.
            </h1>

            {/* Lead Narrative */}
            <p className="text-base sm:text-lg text-stone-300 font-normal leading-relaxed mb-8 max-w-2xl">
              Hello, I am <strong className="font-semibold text-stone-100">{PERSONAL_INFO.name}</strong>. I bridge applied machine learning, real-time voice infrastructure with LiveKit, and production-grade full-stack engineering. Currently preparing for technical interviews and building developer tooling like interactive resume bots.
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <button
                onClick={onExploreProjects}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors shadow-sm"
              >
                <span>Explore Featured Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenTerminal}
                className="inline-flex items-center gap-2.5 px-5 py-3 text-sm font-medium font-mono text-stone-200 bg-stone-900 hover:bg-stone-800 border border-stone-700/80 rounded-md transition-colors"
              >
                <Terminal className="w-4 h-4 text-amber-400" />
                <span>Launch Resume CLI</span>
              </button>
            </div>

            {/* Unboxed Metadata (NO PILL BOXES) with typographic separators */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-stone-400 font-mono">
              <div className="flex items-center gap-1.5 text-stone-300">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href={PERSONAL_INFO.links.email} className="hover:underline">
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <span aria-hidden="true" className="text-stone-700">·</span>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-stone-500 shrink-0" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <span aria-hidden="true" className="text-stone-700">·</span>
              <span className="text-stone-300 font-sans">{PERSONAL_INFO.availability}</span>
            </div>
          </div>

          {/* Right Column: Monogram & Identity Card (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden border border-stone-800 bg-stone-900/90 shadow-2xl p-7 sm:p-8 flex flex-col justify-between">
              {/* Top Row: Monogram Icon & Academic Seal */}
              <div className="flex items-start justify-between">
                {/* Stylized M Monogram Emblem */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-stone-950 border border-amber-400/40 flex items-center justify-center shadow-inner relative group">
                  <span className="font-extrabold text-3xl sm:text-4xl text-amber-400 font-mono tracking-tighter select-none">
                    M
                  </span>
                  <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-amber-400/20 border border-amber-400 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs font-mono text-amber-400 block font-semibold">B.Tech 2026</span>
                  <span className="text-[11px] text-stone-400 font-mono block">AI & Data Science</span>
                </div>
              </div>

              {/* Middle: Prominent Name & Professional Focus */}
              <div className="my-auto py-4">
                <span className="text-[11px] font-mono uppercase tracking-widest text-stone-500 block mb-1">
                  Candidate Profile
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-100 tracking-tight">
                  {PERSONAL_INFO.name}
                </h2>
                <p className="text-xs font-mono text-amber-300 mt-1">
                  {PERSONAL_INFO.role}
                </p>
                <p className="text-xs text-stone-400 mt-2 leading-relaxed">
                  Focusing on real-time speech AI (LiveKit), responsive e-commerce web applications, and developer CLI tools.
                </p>
              </div>

              {/* Bottom: Fast Quick-Launchers */}
              <div className="pt-4 border-t border-stone-800/80 grid grid-cols-2 gap-2 text-xs font-mono">
                <div className="p-2.5 bg-stone-950/80 border border-stone-800/80 rounded-lg">
                  <span className="text-[10px] text-stone-500 block uppercase">Real-Time AI</span>
                  <span className="text-stone-200 font-semibold text-xs">Mark (LiveKit)</span>
                </div>
                <div className="p-2.5 bg-stone-950/80 border border-stone-800/80 rounded-lg">
                  <span className="text-[10px] text-stone-500 block uppercase">Web Platform</span>
                  <span className="text-stone-200 font-semibold text-xs">OrenWatches</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Metric & Discipline Strip Below the Split */}
        <div className="mt-14 pt-8 border-t border-stone-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-stone-500 mb-1">Academic Core</p>
            <p className="text-base font-semibold text-stone-100">B.Tech AI & Data Science</p>
            <p className="text-xs text-stone-400 mt-0.5">Applied ML, DSA & Statistical Modeling</p>
          </div>
          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-stone-500 mb-1">Voice AI Focus</p>
            <p className="text-base font-semibold text-stone-100">LiveKit & WebRTC</p>
            <p className="text-xs text-stone-400 mt-0.5">Sub-400ms speech-to-speech agents</p>
          </div>
          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-stone-500 mb-1">Web Systems</p>
            <p className="text-base font-semibold text-stone-100">Full-Stack React & Node</p>
            <p className="text-xs text-stone-400 mt-0.5">OrenWatches e-commerce architecture</p>
          </div>
          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-stone-500 mb-1">Developer UX</p>
            <p className="text-base font-semibold text-stone-100">Interactive CLI Chatbot</p>
            <p className="text-xs text-stone-400 mt-0.5">Console-based candidate screening tool</p>
          </div>
        </div>
      </div>
    </section>
  );
};
