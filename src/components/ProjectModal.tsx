import React, { useState } from 'react';
import { Project } from '../data/portfolioData';
import { X, ExternalLink, Check, ShoppingBag, Mic, Play, Pause, Volume2, Shield, Cpu, RefreshCw, Layers } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onLaunchTerminal?: () => void;
}

// Sample watches for OrenWatches Live Demo
const SAMPLE_WATCHES = [
  {
    id: 'w1',
    name: 'Oren Chrono Master 41',
    category: 'Chronograph',
    movement: 'Automatic Calibre 18',
    price: 3450,
    waterResistance: '100m',
    features: ['Sapphire Crystal', 'Tachymeter Scale', 'Exhibition Caseback']
  },
  {
    id: 'w2',
    name: 'Oren Heritage Minimalist',
    category: 'Dress',
    movement: 'Manual Wind Slim',
    price: 2850,
    waterResistance: '50m',
    features: ['Sunburst Blue Dial', 'Italian Calfskin', '72hr Power Reserve']
  },
  {
    id: 'w3',
    name: 'Oren Abyss Diver Pro',
    category: 'Diver',
    movement: 'Automatic High-Beat',
    price: 4100,
    waterResistance: '300m',
    features: ['Ceramic Bezel', 'Super-LumiNova', 'Helium Escape Valve']
  }
];

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onLaunchTerminal }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'interactive' | 'architecture' | 'interview'>('overview');

  // OrenWatches demo state
  const [cart, setCart] = useState<{ id: string; name: string; price: number; quantity: number }[]>([]);
  const [filterCategory, setFilterCategory] = useState<string>('All');
  const [checkoutStatus, setCheckoutStatus] = useState<string | null>(null);

  // Mark Voice Assistant demo state
  const [isVoiceSimulating, setIsVoiceSimulating] = useState(false);
  const [voiceStep, setVoiceStep] = useState<number>(0);
  const [simulatedPrompt, setSimulatedPrompt] = useState<string>("Hey Mark, what are Mathew's top engineering skills?");
  const [simulatedResponse, setSimulatedResponse] = useState<string>(
    "Mathew specializes in B.Tech AI & Data Science, real-time voice agents using LiveKit WebRTC, and full-stack React systems. He built this voice pipeline to achieve sub-400ms turnaround!"
  );

  if (!project) return null;

  const handleAddToCart = (watch: typeof SAMPLE_WATCHES[0]) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === watch.id);
      if (existing) {
        return prev.map((item) => (item.id === watch.id ? { ...item, quantity: item.quantity + 1 } : item));
      }
      return [...prev, { id: watch.id, name: watch.name, price: watch.price, quantity: 1 }];
    });
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const runVoiceSimulation = () => {
    if (isVoiceSimulating) return;
    setIsVoiceSimulating(true);
    setVoiceStep(1); // Mic capturing & VAD

    setTimeout(() => {
      setVoiceStep(2); // LiveKit WebRTC transmission
    }, 700);

    setTimeout(() => {
      setVoiceStep(3); // Whisper STT & LLM processing
    }, 1400);

    setTimeout(() => {
      setVoiceStep(4); // TTS synthesis & audio playback
    }, 2100);

    setTimeout(() => {
      setIsVoiceSimulating(false);
    }, 4500);
  };

  const filteredWatches =
    filterCategory === 'All'
      ? SAMPLE_WATCHES
      : SAMPLE_WATCHES.filter((w) => w.category === filterCategory);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] flex flex-col bg-stone-900 border border-stone-800 rounded-2xl shadow-2xl overflow-hidden text-stone-100">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-800 bg-stone-950/60">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-0.5">
              <span>{project.category}</span>
              <span aria-hidden="true" className="text-stone-600">·</span>
              <span className="text-stone-400">{project.status}</span>
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-stone-100">{project.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-stone-100 hover:bg-stone-800 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs (Functional Buttons) */}
        <div className="flex items-center gap-1 px-6 pt-3 border-b border-stone-800 bg-stone-900">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2.5 text-xs font-medium border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'overview'
                ? 'border-amber-400 text-amber-400'
                : 'border-transparent text-stone-400 hover:text-stone-200'
            }`}
          >
            Overview & Telemetry
          </button>

          <button
            onClick={() => setActiveTab('interactive')}
            className={`px-4 py-2.5 text-xs font-medium border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'interactive'
                ? 'border-amber-400 text-amber-400'
                : 'border-transparent text-stone-400 hover:text-stone-200'
            }`}
          >
            {project.id === 'mark-voice' ? 'Live Voice Simulator' : project.id === 'orenwatches' ? 'Interactive Storefront' : 'CLI Console'}
          </button>

          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-4 py-2.5 text-xs font-medium border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'architecture'
                ? 'border-amber-400 text-amber-400'
                : 'border-transparent text-stone-400 hover:text-stone-200'
            }`}
          >
            System Architecture
          </button>

          <button
            onClick={() => setActiveTab('interview')}
            className={`px-4 py-2.5 text-xs font-medium border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'interview'
                ? 'border-amber-400 text-amber-400'
                : 'border-transparent text-stone-400 hover:text-stone-200'
            }`}
          >
            Interview Talking Points
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Media Container */}
              <div className="w-full h-56 sm:h-72 rounded-xl overflow-hidden border border-stone-800 bg-stone-950">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div>
                <h3 className="text-base font-semibold text-stone-100 mb-2">Project Vision</h3>
                <p className="text-sm text-stone-300 leading-relaxed">{project.longDescription}</p>
              </div>

              {/* Quantitative Metrics */}
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-stone-400 mb-3">Key Technical Metrics</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {project.metrics.map((m, idx) => (
                    <div key={idx} className="p-3 bg-stone-950/70 border border-stone-800 rounded-lg">
                      <p className="text-xs text-stone-400">{m.label}</p>
                      <p className="text-lg font-bold font-mono text-amber-400 tabular-nums">{m.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack (Unboxed Text with Separators) */}
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-stone-400 mb-2">Technologies Used</h3>
                <div className="text-sm text-stone-300 font-mono">
                  {project.techStack.join(' · ')}
                </div>
              </div>

              {/* Key Features List */}
              <div>
                <h3 className="text-base font-semibold text-stone-100 mb-2">Core Features</h3>
                <ul className="space-y-2 text-sm text-stone-300">
                  {project.keyFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-amber-400 mt-1 shrink-0">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* TAB 2: INTERACTIVE DEMOS */}
          {activeTab === 'interactive' && (
            <div>
              {/* Demo 1: Mark Voice Assistant */}
              {project.id === 'mark-voice' && (
                <div className="space-y-6">
                  <div className="p-4 bg-stone-950 border border-stone-800 rounded-xl">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-stone-800">
                      <div>
                        <h4 className="text-sm font-semibold text-stone-100">LiveKit Audio Loop Simulator</h4>
                        <p className="text-xs text-stone-400">
                          Inspect the real-time audio pipeline: Microphone → WebRTC OPUS Track → VAD → Whisper → LLM → Audio Playback.
                        </p>
                      </div>
                      <button
                        onClick={runVoiceSimulation}
                        disabled={isVoiceSimulating}
                        className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-md transition-colors ${
                          isVoiceSimulating
                            ? 'bg-amber-400/20 text-amber-300 border border-amber-400/30'
                            : 'bg-amber-400 hover:bg-amber-300 text-stone-950'
                        }`}
                      >
                        <Mic className="w-4 h-4" />
                        <span>{isVoiceSimulating ? 'Processing Voice Stream...' : 'Simulate Voice Query'}</span>
                      </button>
                    </div>

                    {/* Step-by-Step Telemetry Pipeline */}
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 mb-6">
                      <div
                        className={`p-3 rounded-lg border transition-all ${
                          voiceStep === 1
                            ? 'border-amber-400 bg-amber-400/10'
                            : voiceStep > 1
                            ? 'border-stone-700 bg-stone-900/80 text-stone-400'
                            : 'border-stone-800/80 bg-stone-900/40 text-stone-500'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[11px] font-mono">01. WebRTC Track</span>
                          {voiceStep > 1 && <Check className="w-3.5 h-3.5 text-amber-400" />}
                        </div>
                        <p className="text-xs font-medium text-stone-200">Silero VAD Gate</p>
                        <p className="text-[11px] text-stone-400 mt-1 font-mono">Latency: ~45ms</p>
                      </div>

                      <div
                        className={`p-3 rounded-lg border transition-all ${
                          voiceStep === 2
                            ? 'border-amber-400 bg-amber-400/10'
                            : voiceStep > 2
                            ? 'border-stone-700 bg-stone-900/80 text-stone-400'
                            : 'border-stone-800/80 bg-stone-900/40 text-stone-500'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[11px] font-mono">02. Audio SFU</span>
                          {voiceStep > 2 && <Check className="w-3.5 h-3.5 text-amber-400" />}
                        </div>
                        <p className="text-xs font-medium text-stone-200">LiveKit Server</p>
                        <p className="text-[11px] text-stone-400 mt-1 font-mono">OPUS 48kHz UDP</p>
                      </div>

                      <div
                        className={`p-3 rounded-lg border transition-all ${
                          voiceStep === 3
                            ? 'border-amber-400 bg-amber-400/10'
                            : voiceStep > 3
                            ? 'border-stone-700 bg-stone-900/80 text-stone-400'
                            : 'border-stone-800/80 bg-stone-900/40 text-stone-500'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[11px] font-mono">03. Inference</span>
                          {voiceStep > 3 && <Check className="w-3.5 h-3.5 text-amber-400" />}
                        </div>
                        <p className="text-xs font-medium text-stone-200">Streaming Tokens</p>
                        <p className="text-[11px] text-stone-400 mt-1 font-mono">Prompt Context</p>
                      </div>

                      <div
                        className={`p-3 rounded-lg border transition-all ${
                          voiceStep === 4
                            ? 'border-amber-400 bg-amber-400/10'
                            : voiceStep > 4
                            ? 'border-stone-700 bg-stone-900/80 text-stone-400'
                            : 'border-stone-800/80 bg-stone-900/40 text-stone-500'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[11px] font-mono">04. Speech Synth</span>
                          {voiceStep === 4 && <Check className="w-3.5 h-3.5 text-amber-400" />}
                        </div>
                        <p className="text-xs font-medium text-stone-200">Audio Out Buffer</p>
                        <p className="text-[11px] text-stone-400 mt-1 font-mono">&lt; 380ms total</p>
                      </div>
                    </div>

                    {/* Simulated Dialogue Box */}
                    <div className="space-y-3 font-mono text-xs">
                      <div className="p-3 bg-stone-900 border border-stone-800 rounded-lg">
                        <span className="text-stone-400 uppercase font-sans text-[11px] block mb-1">User Vocal Input:</span>
                        <p className="text-stone-100">"{simulatedPrompt}"</p>
                      </div>

                      <div className="p-3 bg-stone-900/80 border border-stone-800 rounded-lg">
                        <span className="text-amber-400 uppercase font-sans text-[11px] block mb-1">Mark AI Vocal Response:</span>
                        <p className="text-stone-200 leading-relaxed">
                          {voiceStep >= 3 ? simulatedResponse : 'Waiting for voice trigger...'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Demo 2: OrenWatches Storefront */}
              {project.id === 'orenwatches' && (
                <div className="space-y-6">
                  {/* Category Filter Controls */}
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-1.5 p-1 bg-stone-950 border border-stone-800 rounded-lg">
                      {['All', 'Chronograph', 'Dress', 'Diver'].map((cat) => (
                        <button
                          key={cat}
                          onClick={() => setFilterCategory(cat)}
                          className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                            filterCategory === cat
                              ? 'bg-amber-400 text-stone-950'
                              : 'text-stone-400 hover:text-stone-200'
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>

                    <div className="text-xs font-mono text-stone-400">
                      Cart Items: <span className="text-amber-400 font-semibold">{cart.length}</span> · Total:{' '}
                      <span className="text-amber-400 font-semibold">${cartTotal.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Watch Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {filteredWatches.map((w) => (
                      <div
                        key={w.id}
                        className="p-4 bg-stone-950 border border-stone-800 rounded-xl flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between text-xs text-stone-400 mb-1 font-mono">
                            <span>{w.category}</span>
                            <span>{w.waterResistance}</span>
                          </div>
                          <h4 className="text-sm font-bold text-stone-100 mb-1">{w.name}</h4>
                          <p className="text-xs text-stone-400 mb-3">{w.movement}</p>
                          <p className="text-base font-bold font-mono text-amber-400 mb-3">${w.price.toLocaleString()}</p>
                          <ul className="text-[11px] text-stone-400 space-y-1 mb-4">
                            {w.features.map((f, i) => (
                              <li key={i}>• {f}</li>
                            ))}
                          </ul>
                        </div>
                        <button
                          onClick={() => handleAddToCart(w)}
                          className="w-full py-2 px-3 text-xs font-semibold text-stone-950 bg-stone-200 hover:bg-amber-400 rounded-md transition-colors flex items-center justify-center gap-1.5"
                        >
                          <ShoppingBag className="w-3.5 h-3.5" />
                          <span>Add to Bag</span>
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Cart Drawer & Checkout Preview */}
                  {cart.length > 0 && (
                    <div className="p-4 bg-stone-950 border border-stone-800 rounded-xl">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-stone-400">Active Bag</h4>
                        <button
                          onClick={() => setCart([])}
                          className="text-xs text-stone-500 hover:text-stone-300"
                        >
                          Clear
                        </button>
                      </div>
                      <div className="space-y-2 mb-4">
                        {cart.map((item) => (
                          <div key={item.id} className="flex justify-between items-center text-xs text-stone-300">
                            <span>
                              {item.name} × {item.quantity}
                            </span>
                            <span className="font-mono text-stone-100">
                              ${(item.price * item.quantity).toLocaleString()}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="pt-3 border-t border-stone-800 flex items-center justify-between">
                        <div>
                          <p className="text-xs text-stone-400">Total Order</p>
                          <p className="text-lg font-bold font-mono text-amber-400">${cartTotal.toLocaleString()}</p>
                        </div>
                        <button
                          onClick={() => {
                            setCheckoutStatus('Order simulation initiated! Reducer and storage state verified.');
                            setTimeout(() => setCheckoutStatus(null), 4000);
                          }}
                          className="px-4 py-2 text-xs font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors"
                        >
                          Test Checkout Flow
                        </button>
                      </div>
                      {checkoutStatus && (
                        <p className="mt-2 text-xs text-amber-400 font-mono animate-in fade-in">{checkoutStatus}</p>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* Demo 3: Resume Bot / Terminal */}
              {project.id === 'resume-cli-bot' && (
                <div className="space-y-4">
                  <div className="p-4 bg-stone-950 border border-stone-800 rounded-xl">
                    <p className="text-sm text-stone-300 mb-4">
                      This project is built to run directly in terminal consoles. You can launch the full interactive terminal right here on the portfolio page:
                    </p>
                    <button
                      onClick={() => {
                        onClose();
                        if (onLaunchTerminal) onLaunchTerminal();
                      }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors"
                    >
                      <Cpu className="w-4 h-4" />
                      <span>Launch Embedded Resume Terminal Now</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: ARCHITECTURE */}
          {activeTab === 'architecture' && (
            <div className="space-y-4">
              <h3 className="text-sm font-mono uppercase tracking-wider text-stone-400 mb-2">Architectural Breakdown</h3>
              <div className="space-y-3">
                {project.architecturePoints.map((pt, idx) => (
                  <div key={idx} className="p-3.5 bg-stone-950 border border-stone-800 rounded-lg">
                    <p className="text-xs font-mono text-amber-400 mb-1">0{idx + 1}.</p>
                    <p className="text-sm text-stone-200">{pt}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: INTERVIEW TALKING POINTS */}
          {activeTab === 'interview' && (
            <div className="space-y-4">
              <h3 className="text-sm font-mono uppercase tracking-wider text-stone-400 mb-2">
                Interview Talking Points (How Mathew Explains This Project)
              </h3>
              <div className="space-y-3">
                {project.interviewDiscussionPoints.map((pt, idx) => (
                  <div key={idx} className="p-3.5 bg-stone-950 border border-stone-800 rounded-lg">
                    <p className="text-sm text-stone-200 leading-relaxed">{pt}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 border-t border-stone-800 bg-stone-950/80 flex items-center justify-between text-xs text-stone-400">
          <span>Role: {project.role}</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs text-stone-300 hover:text-stone-100 bg-stone-800 hover:bg-stone-700 rounded-md transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
