import Link from 'next/link';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-12 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white/5 rounded-full blur-lg"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Yasmin Putri Sujono
            </h3>
            <p className="text-white/80 mb-6 leading-relaxed text-base">
              Fullstack Developer, UI/UX Designer & Data Analyst passionate about 
              creating digital solutions that make a difference.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://github.com/yyasminputri" 
                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all duration-300 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={22} className="group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://linkedin.com/in/yasmin-putri-sujono-4a529024a" 
                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all duration-300 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={22} className="group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://instagram.com/yyasminputri" 
                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all duration-300 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={22} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-white/70 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block text-base">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-white/70 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block text-base">
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-white transition-colors duration-300 group">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <Mail size={20} />
                </div>
                <a href="mailto:yasminputri3101@gmail.com" className="text-base">
                  yasminputri3101@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4 text-white transition-colors duration-300 group">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <Phone size={20} />
                </div>
                <a href="http://wa.me/6287831012005" className="text-base">
                  +62 878 3101 2005
                </a>
              </div>
              <div className="flex items-center gap-4 text-white group">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <span className="text-base">Jakarta, Indonesia</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-base mb-4 md:mb-0">
            © 2025 Yasmin Putri Sujono. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}