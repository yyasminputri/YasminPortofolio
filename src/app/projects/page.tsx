"use client";

import { useState, useCallback, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';
import Footer from '../components/Footer'; // Import the Footer component
import Navbar from '../components/Navbar';

interface Project {
  id: number;
  name: string;
  summary: string;
  type: string;
  isHighlighted: boolean;
  photos: string[];
  detailedInfo: string;
  techStack: string[];
  capabilities: string[];
  codeUrl?: string;
  websiteUrl?: string;
}

export default function PortfolioShowcase() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [imageIndex, setImageIndex] = useState(0);
  const [imageBgColor, setImageBgColor] = useState('rgb(31, 41, 55)');

  const projectList: Project[] = [
    {
      id: 1,
      name: "Powerpuff Recipe",
      summary: "Full-stack recipe web application built with Next.js featuring server-side rendering and dynamic routing for optimal performance and user experience",
      type: "Full Stack Development",
      isHighlighted: true,
      photos: ["2.png", "3.png", "4.png", "5.png"],
      detailedInfo: "Powerpuff Recipe is a full-stack web application designed to revolutionize how people discover, share, and manage cooking recipes. Built with Next.js for optimal performance and SEO, it features server-side rendering for faster load times and dynamic routing for seamless navigation between recipe categories and individual recipes.",
      techStack: ["Next.js", "React", "JavaScript", "Tailwind CSS", "Vercel"],
      capabilities: ["CRUD Operations", "Database Integration", "Frontend-Backend Integration", "Recipe Management", "Search & Filter", "Bookmarking/Save to Favorites"],
      codeUrl: "https://github.com/yyasminputri/NextJS-React-Application"
    },
      {
      id: 3,
      name: "HSBC Data Analysis",
      summary: "Data pipeline and dashboard automation project at HSBC, transforming raw datasets into business-ready insights using BigQuery, Python, JupyterHub, and Qlik Sense",
      type: "Data Analyst",
      isHighlighted: true,
      photos: ["t.png", "u.png", "v.png"],
      detailedInfo: "Streamlined data processing by integrating datasets collected from online/offline forms in Excel into the Data Science Workbench. Data was extracted and processed with BigQuery, analyzed using Python in JupyterHub, and transformed into interactive dashboards with Qlik Sense to support business insights and decision-making.",
      techStack: ["Excel", "BigQuery", "Python", "JupyterHub", "Qlik Sense"],
      capabilities: ["Data Pipeline Automation", "ETL Process", "Interactive Dashboards"],
    },
    {
      id: 3,
      name: "Cinema Express",
      summary: "Full-stack cinema web application with Express.js backend and Vue.js frontend, featuring complete CRUD operations for movie management and seat booking systems",
      type: "Web Application",
      isHighlighted: true,
      photos: ["a.png", "b.png", "c.png", "d.png"],
      detailedInfo: "Cinema Express is a full-stack web application designed to streamline cinema operations and enhance customer booking experiences. The application demonstrates advanced CRUD operations through a sophisticated Express.js backend API paired with a responsive Vue.js frontend, creating a seamless platform for managing movie schedules, seat reservations, and customer interactions.",
      techStack: ["Express.js", "Vue.js", "MySQL", "Bootstrap", "Node.js"],
      capabilities: ["Movie Management", "Seat Booking System", "User Authentication", "Admin Dashboard", "Real-time Updates"],
      codeUrl: "https://github.com/yyasminputri/Express-Vue-Web"
    },
    {
      id: 4,
      name: "Indonesia Poverty Classification ML Model",
      summary: "Machine learning research project analyzing poverty levels in Indonesia using Random Forest, SVM, KNN, and Neural Networks for socioeconomic data classification",
      type: "Machine Learning",
      isHighlighted: true,
      photos: ["e.png", "f.png", "g.png"],
      detailedInfo: "This comprehensive machine learning project addresses one of Indonesia's most pressing socioeconomic challenges through data-driven analysis and predictive modeling. By implementing and comparing four distinct algorithms - Random Forest, Support Vector Machine, K-Nearest Neighbors, and Artificial Neural Networks - the project provides robust classification of poverty levels based on comprehensive socioeconomic datasets from across Indonesian provinces and districts.",
      techStack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Google Colab", "Machine Learning"],
      capabilities: ["Multi-Algorithm Comparison", "Data Preprocessing", "Statistical Analysis", "Model Evaluation", "Data Visualization"],
      codeUrl: "https://colab.research.google.com/drive/1ohMWi8uA_1bCaxNOGSFeSCyBAGTuHynv?usp=sharing#scrollTo=jlqMIDWBEaZw"
    },
    {
      id: 5,
      name: "ILBI Innovation Center Website",
      summary: "Official institutional website for ITS Innovation and Business Incubator featuring startup programs, entrepreneurship resources, and business development services",
      type: "Web Development",
      isHighlighted: true,
      photos: ["h.png", "i.png", "j.png", "k.png"],
      detailedInfo: "The ILBI Innovation Center Website serves as the digital gateway to Institut Teknologi Sepuluh Nopember's premier startup ecosystem and entrepreneurship hub. This professionally crafted institutional website provides comprehensive information about incubation programs, mentorship opportunities, funding resources, and success stories that inspire and guide the next generation of Indonesian entrepreneurs and innovators.",
      techStack: ["WordPress", "Figma", "UI/UX Design"],
      capabilities: ["Content Management", "Program Information", "Application Forms", "News & Events", "Responsive UI"],
      websiteUrl: "https://www.its.ac.id/stp/inkubator/",
    },
    {
      id: 6,
      name: "Starbucks Mobile App Redesign",
      summary: "A thoughtful redesign of the Starbucks mobile application experience",
      type: "UI/UX Design",
      isHighlighted: false,
      photos: ["s.png", "o.png", "p.png", "r.png"],
      detailedInfo: "A complete redesign of the Starbucks mobile application focusing on improved user experience, modern design principles, and enhanced functionality. Features intuitive navigation, updated visual design, and optimized user flows for ordering and rewards.",
      techStack: ["Kotlin", "Jetpack Compose", "Android SDK", "Android Studio"],
      capabilities: ["Modern UI Design", "Improved UX Flow", "Membership", "Mobile Optimization", "Interactive Prototyping"],
      codeUrl: "https://github.com/yyasminputri/Redesign-Starbucks"
    },
    {
      id: 7,
      name: "Glowin Beauty App",
      summary: "A comprehensive beauty and wellness mobile application for skincare enthusiasts",
      type: "Mobile Application",
      isHighlighted: false,
      photos: ["z.png", "w.png", "x.png", "y.png"],
      detailedInfo: "Glowin is a beauty and wellness application designed to help users track their skincare routines, discover new products, and maintain healthy beauty habits with personalized recommendations and progress tracking.",
      techStack: ["Kotlin", "Jetpack Compose", "Android SDK", "Android Studio"],
      capabilities: ["Skincare Tracking", "Product Discovery", "Personal Recommendations", "Membership", "Bookmarking/Save to Favorites"],
      codeUrl: "https://github.com/yyasminputri/GlowinApplication"
    },
    {
      id: 8,
      name: "Animal Crossing 3D Interactive Scene",
      summary: "An immersive 3D web experience inspired by the beloved Animal Crossing universe",
      type: "Game Development",
      isHighlighted: false,
      photos: ["l.png", "m.png", "n.png"],
      detailedInfo: "An immersive 3D scene inspired by the popular Animal Crossing game series. Built using Three.js to create interactive graphics and environment design directly in the browser, featuring detailed 3D models and atmospheric lighting.",
      techStack: ["Three.js", "JavaScript", "WebGL", "HTML5 Canvas", "GLSL Shaders"],
      capabilities: ["3D Environment Rendering", "Interactive Graphics", "Real-time Lighting", "Browser-based Gaming", "Responsive Controls"],
      codeUrl: "https://github.com/yyasminputri/Animal-Crossing-ThreeJS"
    },
   {
      id: 9,
      name: "Tastory",
      summary: "Modern Android recipe app built with Jetpack Compose, designed for exploring visual cooking guides with native performance and beautiful Material Design 3 interface",
      type: "Mobile Application",
      isHighlighted: false,
      photos: ["9.png", "6.png", "7.png", "8.png"],
      detailedInfo: "A recipe application built with Android Jetpack Compose that allows users to browse, save, and read visual cooking guides. Designed for mobile-first experience with intuitive navigation.",
      techStack: ["Kotlin", "Jetpack Compose", "Android SDK", "Android Studio"],
      capabilities: ["Visual Recipe Guides", "Interactive Cooking Guides", "Search & Filter"],
      codeUrl: "https://github.com/yyasminputri/Recipe-Application"
    },
  ];

  // Function to extract dominant color from image
  const extractDominantColor = useCallback((imgElement: HTMLImageElement) => {
    try {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return 'rgb(31, 41, 55)';
      
      canvas.width = 100;
      canvas.height = 100;
      
      ctx.drawImage(imgElement, 0, 0, 100, 100);
      
      const imageData = ctx.getImageData(0, 0, 100, 100);
      const data = imageData.data;
      
      const colorCounts: Record<string, number> = {};
      
      for (let i = 0; i < data.length; i += 16) { // Sample every 4th pixel for performance
        const r = Math.floor(data[i] / 20) * 20;
        const g = Math.floor(data[i + 1] / 20) * 20;
        const b = Math.floor(data[i + 2] / 20) * 20;
        const alpha = data[i + 3];
        
        if (alpha > 128) { // Only consider non-transparent pixels
          const color = `${r},${g},${b}`;
          colorCounts[color] = (colorCounts[color] || 0) + 1;
        }
      }
      
      // Find the most common color
      let dominantColor = '31,41,55'; // fallback
      let maxCount = 0;
      
      for (const [color, count] of Object.entries(colorCounts)) {
        if (typeof count === 'number' && count > maxCount) {
          maxCount = count;
          dominantColor = color;
        }
      }
      
      // Apply some color adjustments for better background appearance
      const [r, g, b] = dominantColor.split(',').map(Number);
      
      // Darken the color for better contrast
      const adjustedR = Math.max(0, Math.floor(r * 0.6));
      const adjustedG = Math.max(0, Math.floor(g * 0.6));
      const adjustedB = Math.max(0, Math.floor(b * 0.6));
      
      return `rgb(${adjustedR}, ${adjustedG}, ${adjustedB})`;
    } catch (error) {
      console.error('Error extracting color:', error);
      return 'rgb(31, 41, 55)'; // fallback color
    }
  }, []);

  // Extract color when image changes
  useEffect(() => {
    if (activeProject && activeProject.photos.length > 0) {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => {
        const dominantColor = extractDominantColor(img);
        setImageBgColor(dominantColor);
      };
      img.onerror = () => {
        setImageBgColor('rgb(31, 41, 55)'); // fallback on error
      };
      img.src = activeProject.photos[imageIndex];
    }
  }, [activeProject, imageIndex, extractDominantColor]);

  const highlightedWorks = projectList.filter(p => p.isHighlighted);
  const regularWorks = projectList.filter(p => !p.isHighlighted);

  const showProject = (project: Project) => {
    setActiveProject(project);
    setImageIndex(0);
    setImageBgColor('rgb(31, 41, 55)'); // Reset to default while loading
  };

  const hideProject = () => {
    setActiveProject(null);
    setImageIndex(0);
    setImageBgColor('rgb(31, 41, 55)');
  };

  const goToNext = () => {
    if (activeProject && activeProject.photos.length > 0) {
      setImageIndex((current) => 
        (current + 1) % activeProject.photos.length
      );
    }
  };

  const goToPrev = () => {
    if (activeProject && activeProject.photos.length > 0) {
      setImageIndex((current) => 
        current === 0 ? activeProject.photos.length - 1 : current - 1
      );
    }
  };

  const WorkCard = ({ project, isSpotlight = false }: { project: Project; isSpotlight?: boolean }) => (
    <div 
      className={`bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 cursor-pointer group hover:-translate-y-1 ${
        isSpotlight ? 'lg:col-span-1' : ''
      }`}
      onClick={() => showProject(project)}
    >
      <div className="h-52 bg-gray-900 relative overflow-hidden rounded-t-2xl">
        <img 
          src={project.photos[0]} 
          alt={project.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3">
          <span className="bg-white/90 text-gray-900 px-4 py-1 rounded-full text-xs font-semibold shadow-md">
            {project.type}
          </span>
        </div>
      </div>
      <div className="p-7">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{project.name}</h3>
        <p className="text-gray-500 text-sm leading-loose mb-4">{project.summary}</p>
        <div className="flex flex-wrap gap-2">
          {project.techStack.slice(0, 3).map((tech: string, idx: number) => (
            <span
              key={idx}
              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
            >
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
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-20">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Portfolio Showcase
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">
              Discover innovative solutions and creative digital experiences
            </p>
        </div>

        {/* Spotlight Projects */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Spotlight Works</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {highlightedWorks.map((work) => (
              <WorkCard key={work.id} project={work} isSpotlight={true} />
            ))}
          </div>
        </div>

        {/* Additional Projects */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Additional Works</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {regularWorks.map((work) => (
              <WorkCard key={work.id} project={work} />
            ))}
          </div>
        </div>

        {/* Project Details Modal */}
        {activeProject && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-6">
            <div className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] shadow-2xl overflow-hidden">
              <button
                onClick={hideProject}
                className="absolute top-6 right-6 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full backdrop-blur-md transition-all"
              >
                <X size={24} />
              </button>

              <div className="flex flex-col">
                {/* Image Gallery with Dynamic Background */}
                <div 
                  className="relative h-80 transition-all duration-700 ease-out"
                  style={{ 
                    background: `linear-gradient(135deg, ${imageBgColor}, ${imageBgColor}cc)`
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={activeProject.photos[imageIndex]}
                      alt={activeProject.name}
                      className="max-h-full max-w-full object-contain shadow-2xl rounded-lg transition-all duration-300"
                      style={{ filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.3))' }}
                    />
                  </div>
                  
                  {activeProject.photos.length > 1 && (
                    <>
                      <button
                        onClick={goToPrev}
                        className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full backdrop-blur-md transition-all"
                      >
                        <ChevronLeft size={24} />
                      </button>
                      
                      <button
                        onClick={goToNext}
                        className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full backdrop-blur-md transition-all"
                      >
                        <ChevronRight size={24} />
                      </button>
                      
                      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
                        {activeProject.photos.map((_: string, idx: number) => (
                          <button
                            key={idx}
                            onClick={() => setImageIndex(idx)}
                            className={`w-4 h-4 rounded-full transition-all ${
                              idx === imageIndex ? 'bg-white scale-110 shadow-lg' : 'bg-white/60'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Project Information */}
                <div className="overflow-y-auto p-10 max-h-80">
                  <div className="mb-8">
                    <span className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full text-sm font-semibold">
                      {activeProject.type}
                    </span>
                    <h2 className="text-4xl font-bold text-gray-900 mt-6 mb-6">
                      {activeProject.name}
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {activeProject.detailedInfo}
                    </p>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Tech Stack</h3>
                    <div className="flex flex-wrap gap-3">
                      {activeProject.techStack.map((technology: string, idx: number) => (
                        <span
                          key={idx}
                          className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full text-sm font-medium"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Core Features</h3>
                    <ul className="space-y-3">
                      {activeProject.capabilities.map((capability: string, idx: number) => (
                        <li key={idx} className="text-gray-600 flex items-center text-lg">
                          <div className="w-3 h-3 bg-gray-500 rounded-full mr-4"></div>
                          {capability}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex space-x-6 pb-4">
                    {activeProject.websiteUrl && (
                      <a
                        href={activeProject.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 bg-gray-900 text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-all font-medium"
                      >
                        <ExternalLink size={18} />
                        <span>View Project</span>
                      </a>
                    )}
                    {activeProject.codeUrl && (
                      <a
                        href={activeProject.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 bg-gray-700 text-white px-6 py-3 rounded-xl hover:bg-gray-600 transition-all font-medium"
                      >
                        <Github size={18} />
                        <span>View Code</span>
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