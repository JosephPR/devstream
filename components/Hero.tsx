import React from 'react';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-air-force-blue/20 rounded-full blur-[120px]" 
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
          className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-dusty-mauve/20 rounded-full blur-[120px]" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-6 px-4 py-1.5 rounded-full border border-slate-200 bg-white/50 backdrop-blur-sm"
        >
          <span className="text-sm font-medium text-air-force-blue">Available for new projects</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-8"
        >
          Building the Future of <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-air-force-blue to-dusty-mauve">
            Digital Experiences
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 mb-10 leading-relaxed"
        >
          I'm a Senior Full-Stack Engineer specializing in scalable React applications, 
          interactive UI/UX, and high-performance backend systems. Let's turn your vision into code.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a 
            href="#portfolio" 
            className="px-8 py-4 rounded-lg bg-slate-900 text-white font-bold text-lg hover:bg-slate-800 transition-colors w-full sm:w-auto flex items-center justify-center gap-2"
          >
            View Portfolio <ArrowRight className="h-5 w-5" />
          </a>
          <a 
            href="#contact" 
            className="px-8 py-4 rounded-lg bg-white text-slate-900 font-bold text-lg border border-slate-200 hover:bg-slate-50 transition-colors w-full sm:w-auto"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center justify-center gap-8 text-slate-500"
        >
          <a href="#" className="hover:text-slate-900 transition-colors"><Github className="h-6 w-6" /></a>
          <a href="#" className="hover:text-slate-900 transition-colors"><Linkedin className="h-6 w-6" /></a>
          <a href="#" className="hover:text-slate-900 transition-colors"><Twitter className="h-6 w-6" /></a>
        </motion.div>

        {/* Tech Stack Marquee Lookalike */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-20 pt-10 border-t border-slate-200"
        >
            <p className="text-sm text-slate-500 mb-6 uppercase tracking-wider font-semibold">Trusted Tech Stack</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                <span className="text-xl font-bold text-slate-600">React 18</span>
                <span className="text-xl font-bold text-slate-600">TypeScript</span>
                <span className="text-xl font-bold text-slate-600">Tailwind CSS</span>
                <span className="text-xl font-bold text-slate-600">Node.js</span>
                <span className="text-xl font-bold text-slate-600">Next.js</span>
                <span className="text-xl font-bold text-slate-600">Gemini API</span>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
