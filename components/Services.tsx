
import React from 'react';
import { Code, Layout, Server, Database, Smartphone, Globe } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { Service } from '../types';

const services: Service[] = [
  {
    id: '1',
    title: 'Frontend Architecture',
    description: 'Building scalable, responsive SPAs using React, TypeScript, and Tailwind. Focusing on performance and accessibility.',
    icon: Layout
  },
  {
    id: '2',
    title: 'Backend Development',
    description: 'Robust API development with Node.js, Express, and PostgreSQL. Secure authentication and data management.',
    icon: Server
  },
  {
    id: '3',
    title: 'Database Management',
    description: 'Designing and optimizing relational and NoSQL databases for high performance and scalability.',
    icon: Database
  },
  {
    id: '4',
    title: 'Mobile First Design',
    description: 'Ensuring your application looks and feels amazing on every device, from large desktops to smartphones.',
    icon: Smartphone
  },
  {
    id: '5',
    title: 'Performance Optimization',
    description: 'Auditing and optimizing web vitals. Fast load times, code splitting, and efficient asset delivery.',
    icon: Code
  },
  {
    id: '6',
    title: 'Global Deployment',
    description: 'Deploying applications to cloud platforms like AWS, Azure, or Google Cloud for global reach and reliability.',
    icon: Globe
  }
];

// IconMap is no longer needed as icons are directly stored in the services array
// const IconMap: Record<string, React.FC<any>> = {
//   layout: Layout,
//   server: Server,
//   smartphone: Smartphone,
//   rocket: Rocket,
//   search: Search,
//   bot: Bot
// };

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal width="100%">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">My Expertise</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Comprehensive web development solutions tailored to your business needs.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <ScrollReveal key={service.id} delay={index * 0.1} width="100%">
                <div 
                  className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-air-force-blue/50 hover:shadow-lg transition-all group h-full"
                >
                  <div className="w-14 h-14 rounded-xl bg-air-force-blue/10 flex items-center justify-center mb-6 group-hover:bg-air-force-blue/20 transition-colors">
                    <Icon className="h-7 w-7 text-air-force-blue group-hover:text-air-force-blue/80" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
