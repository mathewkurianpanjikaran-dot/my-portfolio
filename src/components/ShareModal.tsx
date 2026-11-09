import React, { useState } from 'react';
import { X, Copy, Check, Share2, Linkedin, Mail, ExternalLink, QrCode } from 'lucide-react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  shareUrl: string;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose, shareUrl }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareText = `Explore Mathew Kurian Panjikaran's portfolio (B.Tech AI & Data Science): Features Mark (LiveKit Voice Assistant), OrenWatches e-commerce, and an interactive Resume CLI!`;

  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(`${shareText} ${shareUrl}`)}`;
  const mailtoUrl = `mailto:?subject=${encodeURIComponent("Mathew Kurian Panjikaran - AI & Data Science Portfolio")}&body=${encodeURIComponent(`${shareText}\n\nView here: ${shareUrl}`)}`;

  // QR Code generator using reliable API
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(shareUrl)}&bgcolor=1c1917&color=fbbf24`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg flex flex-col bg-stone-900 border border-stone-800 rounded-2xl shadow-2xl overflow-hidden text-stone-100">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-800 bg-stone-950/80">
          <div className="flex items-center gap-2.5">
            <Share2 className="w-5 h-5 text-amber-400" />
            <h2 className="text-base sm:text-lg font-bold text-stone-100">Share Portfolio</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-100 hover:bg-stone-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Direct Link Copy Box */}
          <div>
            <label className="block text-xs font-mono text-stone-400 uppercase tracking-wider mb-2">
              Public Live Link
            </label>
            <div className="flex items-center gap-2 p-2 bg-stone-950 border border-stone-800 rounded-lg">
              <input
                type="text"
                readOnly
                value={shareUrl}
                className="w-full bg-transparent text-xs font-mono text-amber-300 outline-none select-all px-2"
              />
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors shrink-0"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-950" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied!' : 'Copy Link'}</span>
              </button>
            </div>
            <p className="text-[11px] text-stone-500 font-mono mt-1.5">
              Anyone with this link can view the portfolio and interact with the CLI & projects.
            </p>
          </div>

          {/* Social / Direct Share Buttons */}
          <div>
            <span className="block text-xs font-mono text-stone-400 uppercase tracking-wider mb-3">
              One-Click Send
            </span>
            <div className="grid grid-cols-3 gap-3">
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3 bg-stone-950 hover:bg-stone-800 border border-stone-800 rounded-xl text-xs text-stone-200 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-sky-400" />
                <span className="font-medium">LinkedIn</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3 bg-stone-950 hover:bg-stone-800 border border-stone-800 rounded-xl text-xs text-stone-200 transition-colors"
              >
                <Share2 className="w-4 h-4 text-emerald-400" />
                <span className="font-medium">WhatsApp</span>
              </a>

              <a
                href={mailtoUrl}
                className="flex items-center justify-center gap-2 p-3 bg-stone-950 hover:bg-stone-800 border border-stone-800 rounded-xl text-xs text-stone-200 transition-colors"
              >
                <Mail className="w-4 h-4 text-amber-400" />
                <span className="font-medium">Email</span>
              </a>
            </div>
          </div>

          {/* QR Code for Mobile Scanning */}
          <div className="p-4 bg-stone-950 border border-stone-800 rounded-xl flex items-center gap-4">
            <div className="w-20 h-20 rounded-lg overflow-hidden bg-stone-900 border border-stone-800 shrink-0 flex items-center justify-center">
              <img
                src={qrCodeUrl}
                alt="Scan QR code to view portfolio on phone"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-stone-200 mb-1">
                <QrCode className="w-3.5 h-3.5 text-amber-400" />
                <span>Instant Mobile QR Code</span>
              </div>
              <p className="text-xs text-stone-400 leading-relaxed">
                Scan with your phone camera or during an interview to test the mobile-optimized experience directly on any device.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-stone-800 bg-stone-950/60 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-medium text-stone-300 hover:text-stone-100 bg-stone-800 hover:bg-stone-700 rounded-md transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
