import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Dashboard',
    category: 'Full Stack App',
    description: 'A comprehensive admin dashboard for managing products, orders, and analytics. Built with real-time data sync.',
    imageUrl: 'https://picsum.photos/600/400?random=1',
    technologies: ['React', 'TypeScript', 'Node.js', 'Chart.js'],
    demoUrl: '#'
  },
  {
    id: '2',
    title: 'AI Content Generator',
    category: 'AI Integration',
    description: 'A SaaS platform helping writers generate blog posts using Gemini API. Features include tone adjustment and SEO checking.',
    imageUrl: 'https://picsum.photos/600/400?random=2',
    technologies: ['Next.js', 'Gemini API', 'Tailwind', 'Stripe'],
    demoUrl: '#'
  },
  {
    id: '3',
    title: 'Finance Tracker',
    category: 'Mobile Web App',
    description: 'Personal finance management tool with categorization, budget setting, and visual spending reports.',
    imageUrl: 'https://picsum.photos/600/400?random=3',
    technologies: ['React', 'Firebase', 'PWA', 'D3.js'],
    demoUrl: '#'
  }
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal width="100%">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
              <p className="text-slate-600 max-w-xl">
                A selection of my recent work, showcasing complex problem solving and design precision.
              </p>
            </div>
            <a href="#" className="hidden md:inline-block text-air-force-blue font-medium hover:text-dusty-mauve transition-colors">
              View All Projects →
            </a>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.1} width="100%">
              <div className="group rounded-2xl overflow-hidden bg-white border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all h-full flex flex-col">
                <div className="relative overflow-hidden aspect-video">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <a href={project.demoUrl} className="p-3 bg-white rounded-full text-slate-900 hover:bg-slate-100 transition-colors shadow-lg">
                      <ExternalLink className="h-5 w-5" />
                    </a>
                    <a href="#" className="p-3 bg-slate-900 rounded-full text-white hover:bg-slate-800 transition-colors shadow-lg">
                      <Github className="h-5 w-5" />
                    </a>
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <span className="text-xs font-semibold text-air-force-blue uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-2 mb-3">{project.title}</h3>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 text-xs font-medium border border-slate-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const ArrowRightSmall = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

export default Portfolio;
