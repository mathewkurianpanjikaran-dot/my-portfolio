import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { ProjectModal } from './components/ProjectModal';
import { TerminalResume } from './components/TerminalResume';
import { InterviewHub } from './components/InterviewHub';
import { SkillsEducation } from './components/SkillsEducation';
import { ResumeModal } from './components/ResumeModal';
import { ShareModal } from './components/ShareModal';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Project, PROJECTS } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);

  const handleOpenTerminal = () => {
    const el = document.getElementById('terminal-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      // Focus the terminal input
      const input = el.querySelector('input');
      if (input) {
        setTimeout(() => input.focus(), 400);
      }
    }
  };

  const handleExploreProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 font-sans selection:bg-amber-400 selection:text-stone-950 flex flex-col">
      {/* 3-Zone Top Navigation */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenTerminal={handleOpenTerminal}
        onOpenShare={() => setIsShareOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Split-Screen Hero */}
        <Hero
          onOpenTerminal={handleOpenTerminal}
          onExploreProjects={handleExploreProjects}
        />

        {/* Featured Projects with Interactive Case Studies */}
        <ProjectsSection
          onSelectProject={(project) => setSelectedProject(project)}
          onLaunchTerminal={handleOpenTerminal}
        />

        {/* Interactive In-Browser Resume CLI Terminal */}
        <TerminalResume
          onOpenResumeModal={() => setIsResumeOpen(true)}
        />

        {/* Technical & Behavioral Interview Hub */}
        <InterviewHub />

        {/* B.Tech Academics & Technical Skills Matrix */}
        <SkillsEducation />

        {/* Interview Outreach & Contact */}
        <ContactSection />
      </main>

      {/* Clean Footer */}
      <Footer
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenTerminal={handleOpenTerminal}
      />

      {/* Project Deep Dive / Live Simulator Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onLaunchTerminal={handleOpenTerminal}
      />

      {/* ATS Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Share Portfolio Modal */}
      <ShareModal
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
        shareUrl={
          typeof window !== 'undefined' && window.location.origin
            ? window.location.origin
            : 'https://ais-pre-djzvso4b3a4jiplfitk7vo-1072731558920.asia-southeast1.run.app'
        }
      />
    </div>
  );
}
