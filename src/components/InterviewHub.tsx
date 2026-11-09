import React, { useState } from 'react';
import { INTERVIEW_PREP_QA, InterviewQA } from '../data/portfolioData';
import { MessageSquare, Sparkles, Volume2, ChevronDown, ChevronUp, CheckCircle, BrainCircuit } from 'lucide-react';

export const InterviewHub: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [expandedId, setExpandedId] = useState<string>('tell-me-about-yourself');
  const [playingAudioId, setPlayingAudioId] = useState<string | null>(null);

  const categories = ['All', 'Background', 'Technical Deep Dive', 'System Architecture', 'Behavioral'];

  const filteredQAs =
    activeCategory === 'All'
      ? INTERVIEW_PREP_QA
      : INTERVIEW_PREP_QA.filter((item) => item.category === activeCategory);

  const handleSpeakAnswer = (id: string, text: string) => {
    if (!('speechSynthesis' in window)) return;

    if (playingAudioId === id) {
      window.speechSynthesis.cancel();
      setPlayingAudioId(null);
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1.0;
    utterance.pitch = 1.0;

    utterance.onend = () => setPlayingAudioId(null);
    utterance.onerror = () => setPlayingAudioId(null);

    setPlayingAudioId(id);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <section id="interview-hub" className="py-20 border-b border-stone-800/80 bg-stone-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-2">
              Candidate Preparation Hub
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-100 tracking-tight [text-wrap:balance]">
              Technical & behavioral interview answers directly from Mathew.
            </h2>
            <p className="text-sm text-stone-300 mt-2 max-w-2xl">
              Curated responses to critical technical architecture, real-time networking, and engineering mindset questions asked during software and AI engineering interviews.
            </p>
          </div>

          {/* Category Filter Controls */}
          <div className="flex items-center gap-1.5 p-1 bg-stone-900 border border-stone-800 rounded-lg overflow-x-auto scrollbar-thin">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-amber-400 text-stone-950 shadow-xs'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Q&A Accordion Stack */}
        <div className="space-y-4">
          {filteredQAs.map((qa, index) => {
            const isExpanded = expandedId === qa.id;
            const isPlaying = playingAudioId === qa.id;

            return (
              <div
                key={qa.id}
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  isExpanded
                    ? 'border-amber-400/50 bg-stone-900/80 shadow-lg'
                    : 'border-stone-800/80 bg-stone-900/40 hover:border-stone-700'
                }`}
              >
                {/* Accordion Header */}
                <div
                  onClick={() => setExpandedId(isExpanded ? '' : qa.id)}
                  className="flex items-center justify-between p-5 cursor-pointer select-none gap-4"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-xs font-mono text-amber-400 pt-1 shrink-0">
                      0{index + 1}.
                    </span>
                    <div>
                      {/* Unboxed Metadata */}
                      <span className="text-xs font-mono text-stone-400 block mb-1">
                        {qa.category}
                      </span>
                      <h3 className="text-base sm:text-lg font-semibold text-stone-100">
                        {qa.question}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSpeakAnswer(qa.id, qa.detailedAnswer);
                      }}
                      className={`p-2 rounded-lg text-xs font-mono transition-colors flex items-center gap-1.5 ${
                        isPlaying
                          ? 'bg-amber-400 text-stone-950 font-bold'
                          : 'text-stone-400 hover:text-stone-100 hover:bg-stone-800'
                      }`}
                      title={isPlaying ? 'Pause speech' : 'Listen to simulated spoken answer'}
                    >
                      <Volume2 className="w-4 h-4" />
                      <span className="hidden sm:inline">{isPlaying ? 'Stop' : 'Listen'}</span>
                    </button>

                    <div className="text-stone-400">
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </div>
                </div>

                {/* Accordion Body */}
                {isExpanded && (
                  <div className="px-5 pb-6 pt-2 border-t border-stone-800/80 space-y-4">
                    {/* Executive Summary */}
                    <div className="p-3.5 bg-stone-950/80 border border-stone-800/80 rounded-lg">
                      <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block mb-1">
                        Executive Summary
                      </span>
                      <p className="text-sm text-stone-200 font-medium leading-relaxed">
                        {qa.shortAnswer}
                      </p>
                    </div>

                    {/* Full Detailed Answer */}
                    <div>
                      <span className="text-xs font-mono text-stone-500 uppercase tracking-wider block mb-1">
                        Detailed Interview Response
                      </span>
                      <p className="text-sm text-stone-300 leading-relaxed">
                        {qa.detailedAnswer}
                      </p>
                    </div>

                    {/* Key Recruiter Takeaway */}
                    <div className="flex items-start gap-2.5 pt-2 text-xs text-stone-400 font-mono">
                      <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-stone-200 font-semibold">Interviewer Takeaway:</strong> {qa.keyTakeaway}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
