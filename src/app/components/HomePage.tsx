'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion } from "framer-motion";
import Globe from '../components/Globe';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

interface ExpertiseItem {
  title: string;
  description: string;
  skills: string[];
}

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxSpeed = 0.5;
  const parallaxY = scrollY * parallaxSpeed;

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      <Navbar />
      {/* Hero Section with Parallax Background */}
      <section className="h-screen relative flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            transform: `translateY(${parallaxY}px)`,
            willChange: 'transform'
          }}
        >
          <div 
            className="w-full h-[120%] bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(/1.png)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        </div>

        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 text-white leading-tight drop-shadow-2xl"
          >
            Hi everyone, 
            I&apos;m Yasmin!
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="text-2xl md:text-3xl text-white/90 leading-relaxed font-light mb-8 drop-shadow-lg"
          >
            Fullstack Developer | UI/UX Designer | Data Analyst
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Link 
              href="/projects" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold flex items-center gap-2 group justify-center"
            >
              View My Work
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <Link 
              href="http://wa.me/6287831012005" 
              className="border-2 border-white/50 text-white px-8 py-4 rounded-full hover:bg-white/10 backdrop-blur-sm transition-all duration-300 font-semibold hover:scale-105 text-center"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce"
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-16 items-center">
            
            {/* Photo Section - Made Larger */}
            <div className="lg:col-span-2 flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-96 h-96 rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-100 to-purple-100 ring-4 ring-white/50">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src="/pp.jpeg" 
                    alt="Yasmin Putri Sujono"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-2xl"></div>
                
                {/* Decorative Elements */}
                <div className="absolute top-4 -left-4 w-8 h-8 bg-blue-500/20 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 right-8 w-6 h-6 bg-purple-500/20 rounded-full animate-pulse delay-1000"></div>
              </div>
            </div>

            {/* Content Section - Better Spacing */}
            <div className="lg:col-span-3 space-y-6">
              <div>
                <h2 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text">
                  About Me
                </h2>
                <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-8"></div>
              </div>
              
              <div className="space-y-6 text-lg leading-relaxed">
                <p className="text-black">
                  I&apos;m <span className="text-black font-semibold">Yasmin Putri Sujono</span>, an Informatics Engineering student at Sepuluh Nopember Institute of Technology (ITS) with a passion for building user-friendly digital products, 
                  combining creativity with technical expertise in software development, UI/UX design, and data science.
                </p>
                
                <p className="text-black">
                 Over the past few years, I have hands-on experience in frontend, backend, and data science. 
                 Beyond academics, I&apos;ve strengthened my communication, collaboration, and leadership skills through active roles in student organizations.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 py-4">
                {["React", "Next.js", "TypeScript", "Tailwind CSS", "Figma", "Python"].map((skill) => (
                  <span 
                    key={skill}
                    className="px-5 py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-full text-sm font-semibold border border-blue-200/50 hover:from-blue-100 hover:to-purple-100 hover:scale-105 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="pt-4">
                <button 
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/MyResume.pdf';
                    link.download = 'Yasmin_Putri_Sujono_Resume.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-900 to-gray-800 text-white px-8 py-4 rounded-full hover:from-gray-800 hover:to-gray-700 transition-all duration-300 font-semibold hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Download Resume
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise + Globe Combined Section */}
      <section className="py-20 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Expertise Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
              My Experience
            </h2>
            <div className="w-20 h-1 bg-blue-600 mb-6"></div>

            <div className="flex flex-col gap-4">
             {[
              {
                title: "Data Analysis Office Intern at Bank HSBC",
                description: "Built and maintained data pipelines, transforming complex datasets into interactive dashboards with BigQuery, Python, and Qlik Sense to support business insights and decision-making.",
                skills: ["BigQuery", "Python", "JupyterHub", "Qlik Sense", "Excel"]
              },
              {
                title: "Project Manager Intern at Retrux Studio", 
                description: "Led cross-functional collaboration to define scope, streamline workflows, and deliver prototypes that secured client trust and drove the project into its next phases.",
                skills: ["Project Planning", "Stakeholder Management", "Click Up", "Slack", "Figma"]
              },
              {
                title: "UI/UX Designer Intern at Retrux Studio",
                description: "Designed and prototyped the ILBI ITS website through user research and Figma, achieving measurable growth in engagement and client satisfaction.",
                skills: ["Figma", "Wireframing", "Prototyping", "User Research", "Wordpress"]
              }
            ].map((expertise: ExpertiseItem, index: number) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{expertise.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{expertise.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {expertise.skills.map((skill: string, i: number) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 bg-gray-50 text-gray-700 rounded-full text-xs font-medium hover:bg-gray-100 transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Globe */}
          <div className="flex justify-center">
            <div className="w-[300px] h-[300px]">
              <Globe />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 relative z-10">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let&apos;s Work Together
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Have a project in mind? I&apos;d love to help bring your ideas to life 
            with clean design and robust development.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="http://wa.me/6287831012005" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full transition-all duration-300 font-semibold hover:scale-105 shadow-lg"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-20 bg-white relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">
              A showcase of my recent work and creative solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Dashboard Personal Data Privacy",
                description: "Built and maintained data pipelines, support business insights and decision-making",
                tech: "Python, JupyterHub, Qlik Sense",
                image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQIW2P8z/C/HwAGgwJ/lcbg+wAAAABJRU5ErkJggg=="
              },
              {
                title: "ILBI Innovation Center Website", 
                description: "Official institutional website for ITS Innovation and Business Incubator",
                tech: "Figma, Wordpress, Slack",
                image: "h.png"
              },
              {
                title: "Cinema Express",
                description: "Web application designed to streamline cinema operations and enhance customer booking experiences.",
                tech: "Express.js, Vue.js, Node.js",
                image: "a.png"
              }
            ].map((project, index) => (
              <div 
                key={index}
                className="group bg-white rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer border border-blue-100/50 overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-600 relative overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                      const target = e.target as HTMLImageElement;
                      const nextElement = target.nextElementSibling as HTMLElement;
                      target.style.display = 'none';
                      if (nextElement) {
                        nextElement.style.display = 'flex';
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 items-center justify-center text-white text-2xl font-bold hidden">
                    {project.title.split(' ').map(word => word[0]).join('')}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                  <p className="text-blue-600 text-xs font-medium">{project.tech}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              href="/projects"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-semibold hover:scale-105 shadow-lg"
            >
              View All Projects
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    <Footer />
    </div>
  );
}