import React, { useState } from 'react';
import { PROJECTS, Project } from '../data/portfolioData';
import { ArrowUpRight, Cpu, Layers, Terminal, Volume2 } from 'lucide-react';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
  onLaunchTerminal: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject, onLaunchTerminal }) => {
  const [filter, setFilter] = useState<'all' | 'voice' | 'web' | 'cli'>('all');

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === 'voice') return p.id === 'mark-voice';
    if (filter === 'web') return p.id === 'orenwatches';
    if (filter === 'cli') return p.id === 'resume-cli-bot';
    return true;
  });

  return (
    <section id="projects" className="py-20 border-b border-stone-800/80 bg-stone-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-2">
              Featured Engineering Works
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-100 tracking-tight [text-wrap:balance]">
              Core projects built with modern AI, real-time audio & web architectures.
            </h2>
          </div>

          {/* Interactive Filter Tabs (Buttons with click handlers) */}
          <div className="flex items-center gap-1 p-1 bg-stone-900 border border-stone-800 rounded-lg shrink-0">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-amber-400 text-stone-950 shadow-xs'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              All Works (3)
            </button>
            <button
              onClick={() => setFilter('voice')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                filter === 'voice'
                  ? 'bg-amber-400 text-stone-950 shadow-xs'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              LiveKit Voice AI
            </button>
            <button
              onClick={() => setFilter('web')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                filter === 'web'
                  ? 'bg-amber-400 text-stone-950 shadow-xs'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              Web E-Commerce
            </button>
            <button
              onClick={() => setFilter('cli')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                filter === 'cli'
                  ? 'bg-amber-400 text-stone-950 shadow-xs'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              Resume CLI
            </button>
          </div>
        </div>

        {/* Dynamic Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {filteredProjects.map((project, index) => {
            const isWide = index === 0 && filter === 'all';
            return (
              <div
                key={project.id}
                className={`group relative rounded-2xl border border-stone-800 bg-stone-900/60 overflow-hidden flex flex-col justify-between hover:border-stone-700 transition-all duration-300 shadow-md ${
                  isWide ? 'lg:col-span-12 xl:col-span-12' : 'lg:col-span-6'
                }`}
              >
                {/* Content Layout */}
                <div className={`grid grid-cols-1 ${isWide ? 'lg:grid-cols-12' : ''} gap-6 p-6 sm:p-8`}>
                  {/* Media Column */}
                  <div className={`${isWide ? 'lg:col-span-6' : ''} overflow-hidden rounded-xl bg-stone-950 border border-stone-800/80 aspect-video relative`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                    />

                    {/* Quick Badge */}
                    <div className="absolute top-3 left-3 bg-stone-950/80 backdrop-blur-md border border-stone-800 text-[11px] font-mono text-amber-300 px-2.5 py-1 rounded">
                      {project.status}
                    </div>
                  </div>

                  {/* Information Column */}
                  <div className={`${isWide ? 'lg:col-span-6' : ''} flex flex-col justify-between`}>
                    <div>
                      {/* Unboxed Metadata (NO PILLS) */}
                      <div className="flex items-center gap-2 text-xs font-mono text-stone-400 mb-2">
                        <span className="text-amber-400">{project.category}</span>
                        <span aria-hidden="true" className="text-stone-700">·</span>
                        <span>{project.timeline}</span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-stone-100 group-hover:text-amber-400 transition-colors mb-2">
                        {project.title}
                      </h3>

                      <p className="text-xs font-mono text-stone-400 mb-4">{project.tagline}</p>

                      <p className="text-sm text-stone-300 leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Tech Stack Unboxed */}
                      <div className="text-xs font-mono text-stone-400 mb-6">
                        <span className="text-stone-500 block mb-1">Tech Stack:</span>
                        <span className="text-stone-300">{project.techStack.slice(0, 5).join(' · ')}</span>
                      </div>
                    </div>

                    {/* Metrics Strip */}
                    <div className="grid grid-cols-2 gap-3 pt-4 border-t border-stone-800/80 mb-6">
                      {project.metrics.slice(0, 2).map((m, mIdx) => (
                        <div key={mIdx}>
                          <p className="text-[11px] text-stone-500 font-mono">{m.label}</p>
                          <p className="text-sm font-bold font-mono text-amber-400 tabular-nums">{m.value}</p>
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => onSelectProject(project)}
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors"
                      >
                        <span>Interactive Case Study</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>

                      {project.id === 'resume-cli-bot' ? (
                        <button
                          onClick={onLaunchTerminal}
                          className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-medium font-mono text-stone-300 hover:text-stone-100 bg-stone-800 hover:bg-stone-700 rounded-md transition-colors"
                        >
                          <Terminal className="w-3.5 h-3.5 text-amber-400" />
                          <span>Run in Terminal</span>
                        </button>
                      ) : (
                        <button
                          onClick={() => onSelectProject(project)}
                          className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-medium text-stone-300 hover:text-stone-100 bg-stone-800 hover:bg-stone-700 rounded-md transition-colors"
                        >
                          <Layers className="w-3.5 h-3.5" />
                          <span>Architecture</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
