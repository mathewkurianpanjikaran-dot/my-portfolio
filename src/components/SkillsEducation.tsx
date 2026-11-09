import React from 'react';
import { PERSONAL_INFO, TECHNICAL_SKILLS } from '../data/portfolioData';
import { GraduationCap, BookOpen, Code2, Database, Network, Cpu, CheckCircle2 } from 'lucide-react';

export const SkillsEducation: React.FC = () => {
  return (
    <section id="skills" className="py-20 border-b border-stone-800/80 bg-stone-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-2">
            Academics & Technical Toolkit
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-100 tracking-tight [text-wrap:balance]">
            Engineering foundations built on rigorous B.Tech coursework & applied systems.
          </h2>
        </div>

        {/* 2-Column Split: Education Details on Left, Technical Matrix on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: B.Tech Degree & Curriculum (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl border border-stone-800 bg-stone-900/60 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-amber-400/10 text-amber-400 rounded-lg border border-amber-400/20">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-amber-400">Undergraduate Degree</span>
                  <h3 className="text-lg font-bold text-stone-100">{PERSONAL_INFO.education.degree}</h3>
                </div>
              </div>

              <div className="space-y-3 text-sm text-stone-300 mb-6">
                <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-stone-800">
                  <span className="text-stone-400">Current Status</span>
                  <span className="text-amber-400">{PERSONAL_INFO.education.status}</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-stone-800">
                  <span className="text-stone-400">Location</span>
                  <span className="text-stone-200">{PERSONAL_INFO.location}</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-stone-800">
                  <span className="text-stone-400">Graduation Horizon</span>
                  <span className="text-stone-200">Class of 2026</span>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-stone-400 uppercase tracking-wider mb-3">
                  <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                  <span>Key Undergraduate Coursework</span>
                </div>
                <div className="space-y-2">
                  {PERSONAL_INFO.education.coursework.map((course, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-stone-300">
                      <span className="text-amber-400 text-xs mt-0.5">•</span>
                      <span>{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Pitch Card for Recruiters */}
            <div className="p-5 rounded-xl border border-stone-800 bg-stone-900/40 text-xs text-stone-300 space-y-2">
              <span className="font-mono text-amber-400 uppercase tracking-wider block">
                Engineering Philosophy
              </span>
              <p className="leading-relaxed">
                &ldquo;Data science and AI should never remain trapped inside Jupyter Notebooks. My focus is writing clean production code that connects models to real users via WebRTC audio streams, reactive frontends, and developer-friendly CLIs.&rdquo;
              </p>
            </div>
          </div>

          {/* Right Column: Technical Skill Matrix (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {TECHNICAL_SKILLS.map((group, gIdx) => (
              <div key={gIdx} className="p-6 rounded-2xl border border-stone-800 bg-stone-900/60 shadow-lg">
                <div className="mb-4">
                  <h3 className="text-base font-bold text-stone-100">{group.category}</h3>
                  <p className="text-xs text-stone-400 font-mono mt-0.5">{group.description}</p>
                </div>

                <div className="space-y-3">
                  {group.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3 bg-stone-950/80 border border-stone-800/80 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                    >
                      <div>
                        <p className="text-sm font-semibold text-stone-200">{skill.name}</p>
                        <p className="text-xs text-stone-400 font-mono mt-0.5">{skill.highlight}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="text-xs font-mono text-amber-400 font-medium">
                          {skill.level}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
