"use client";

import { useState, useCallback, useEffect, memo } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import { PROJECT_LIST, Project } from '@/data/projects';

// Helper to ensure path is correct for next/image
const getImagePath = (src: string) => src.startsWith('/') ? src : `/${src}`;

// Memoized Card for better performance during Fast Refresh
const WorkCard = memo(({ project, isSpotlight = false, onClick }: { project: Project; isSpotlight?: boolean; onClick: () => void }) => (
  <div 
    className={`bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 cursor-pointer group hover:-translate-y-1 ${
      isSpotlight ? 'lg:col-span-1' : ''
    }`}
    onClick={onClick}
  >
<div className="h-52 bg-gray-900 relative overflow-hidden rounded-t-2xl">
      <Image 
        src={getImagePath(project.photos[0])} 
        alt={project.name}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover group-hover:scale-105 transition-transform duration-300"
        priority={isSpotlight} 
      />
      <div className="absolute top-3 right-3">
        <span className="bg-white/90 text-gray-900 px-4 py-1 rounded-full text-xs font-semibold shadow-md">
          {project.type}
        </span>
      </div>
    </div>
    <div className="p-7">
      <h3 className="text-xl font-bold text-gray-900 mb-3">{project.name}</h3>
      <p className="text-gray-500 text-sm leading-loose mb-4 line-clamp-2">{project.summary}</p>
      <div className="flex flex-wrap gap-2">
        {project.techStack.slice(0, 3).map((tech, idx) => (
          <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider">
            {tech}
          </span>
        ))}
        {project.techStack.length > 3 && (
          <span className="text-gray-400 text-xs font-medium px-2 py-1">
            +{project.techStack.length - 3} more
          </span>
        )}
      </div>
    </div>
  </div>
));
WorkCard.displayName = 'WorkCard';

export default function PortfolioShowcase() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [imageIndex, setImageIndex] = useState(0);
  const [imageBgColor, setImageBgColor] = useState('rgb(31, 41, 55)');
  const [isMounted, setIsMounted] = useState(false);

  // Fix Hydration Error
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const extractDominantColor = useCallback((imgElement: HTMLImageElement) => {
    try {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d', { willReadFrequently: true });
      if (!ctx) return 'rgb(31, 41, 55)';
      canvas.width = 50; 
      canvas.height = 50;
      ctx.drawImage(imgElement, 0, 0, 50, 50);
      const data = ctx.getImageData(0, 0, 50, 50).data;
      const colorCounts: Record<string, number> = {};
      
      for (let i = 0; i < data.length; i += 16) {
        if (data[i + 3] > 128) {
          const color = `${Math.floor(data[i] / 20) * 20},${Math.floor(data[i + 1] / 20) * 20},${Math.floor(data[i + 2] / 20) * 20}`;
          colorCounts[color] = (colorCounts[color] || 0) + 1;
        }
      }
      
      let dominantColor = '31,41,55', maxCount = 0;
      for (const [color, count] of Object.entries(colorCounts)) {
        if (count > maxCount) { maxCount = count; dominantColor = color; }
      }
      const [r, g, b] = dominantColor.split(',').map(Number);
      return `rgb(${Math.max(0, Math.floor(r * 0.5))}, ${Math.max(0, Math.floor(g * 0.5))}, ${Math.max(0, Math.floor(b * 0.5))})`;
    } catch { return 'rgb(31, 41, 55)'; }
  }, []);

  useEffect(() => {
    if (activeProject && activeProject.photos.length > 0) {
      const img = new window.Image();
      img.crossOrigin = "anonymous";
      img.onload = () => setImageBgColor(extractDominantColor(img));
      img.src = getImagePath(activeProject.photos[imageIndex]);
    }
  }, [activeProject, imageIndex, extractDominantColor]);

  const showProject = (project: Project) => {
    setActiveProject(project);
    setImageIndex(0);
    setImageBgColor('rgb(31, 41, 55)');
  };

  const hideProject = () => setActiveProject(null);
  const goToNext = () => setImageIndex((prev) => (prev + 1) % (activeProject?.photos.length || 1));
  const goToPrev = () => setImageIndex((prev) => (prev === 0 ? (activeProject?.photos.length || 1) - 1 : prev - 1));

  if (!isMounted) return null;

  const highlightedWorks = PROJECT_LIST.filter(p => p.isHighlighted);
  const regularWorks = PROJECT_LIST.filter(p => !p.isHighlighted);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-20">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">Portfolio Showcase</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 font-light">Discover innovative solutions and creative digital experiences</p>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 border-l-4 border-blue-500 pl-4">Spotlight Works</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {highlightedWorks.map((work) => (
              <WorkCard key={work.id} project={work} isSpotlight onClick={() => showProject(work)} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 border-l-4 border-gray-300 pl-4">Additional Works</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {regularWorks.map((work) => (
              <WorkCard key={work.id} project={work} onClick={() => showProject(work)} />
            ))}
          </div>
        </div>

        {activeProject && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-6 animate-in fade-in duration-300">
            <div className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] shadow-2xl overflow-hidden relative">
              <button onClick={hideProject} className="absolute top-6 right-6 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full backdrop-blur-md transition-all">
                <X size={24} />
              </button>

              <div className="flex flex-col">
                <div className="relative h-80 transition-colors duration-700" style={{ background: `linear-gradient(135deg, ${imageBgColor}, ${imageBgColor}cc)` }}>
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="relative w-full h-full">
                      <Image
                        src={getImagePath(activeProject.photos[imageIndex])}
                        alt={activeProject.name}
                        fill
                        priority
                        className="object-contain transition-all duration-300"
                        style={{ filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.3))' }}
                      />
                    </div>
                  </div>
                  
                  {activeProject.photos.length > 1 && (
                    <>
                      <button onClick={goToPrev} className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-3 rounded-full transition-all"><ChevronLeft size={24} /></button>
                      <button onClick={goToNext} className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-3 rounded-full transition-all"><ChevronRight size={24} /></button>
                      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
                        {activeProject.photos.map((_, idx) => (
                          <button key={idx} onClick={() => setImageIndex(idx)} className={`w-3 h-3 rounded-full transition-all ${idx === imageIndex ? 'bg-white scale-125' : 'bg-white/40'}`} />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                <div className="overflow-y-auto p-10 max-h-80">
                  <div className="mb-8">
                    <span className="bg-gray-100 text-gray-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">{activeProject.type}</span>
                    <h2 className="text-4xl font-black text-gray-900 mt-4 mb-4">{activeProject.name}</h2>
                    <p className="text-gray-600 leading-relaxed text-lg">{activeProject.detailedInfo}</p>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {activeProject.techStack.map((tech, idx) => (
                        <span key={idx} className="bg-blue-50 text-blue-700 px-4 py-2 rounded-xl text-sm font-semibold">{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Core Features</h3>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {activeProject.capabilities.map((cap, idx) => (
                        <li key={idx} className="text-gray-600 flex items-center text-md">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 shrink-0"></div>
                          {cap}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-4 pb-4">
                    {activeProject.websiteUrl && (
                      <a href={activeProject.websiteUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gray-900 text-white px-8 py-3 rounded-2xl hover:bg-gray-800 transition-all font-bold">
                        <ExternalLink size={18} /> View Project
                      </a>
                    )}
                    {activeProject.codeUrl && (
                      <a href={activeProject.codeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gray-100 text-gray-900 px-8 py-3 rounded-2xl hover:bg-gray-200 transition-all font-bold">
                        <Github size={18} /> View Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}