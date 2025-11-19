import React from 'react';
import { Star } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'CTO',
    company: 'TechFlow Solutions',
    content: "The attention to detail and code quality was outstanding. Delivered the project two weeks ahead of schedule. The AI integration features completely transformed our user engagement.",
    avatarUrl: 'https://picsum.photos/100/100?random=4'
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Founder',
    company: 'StartUp Inc.',
    content: "I was hesitant about hiring a freelancer, but this was the best decision for our MVP. Communication was clear, professional, and the end product is world-class.",
    avatarUrl: 'https://picsum.photos/100/100?random=5'
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    role: 'Marketing Director',
    company: 'Creative Agency',
    content: "Finally, a developer who understands design! The animations are buttery smooth and the responsive layout works perfectly on all our client devices.",
    avatarUrl: 'https://picsum.photos/100/100?random=6'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-air-force-blue/5 rounded-full blur-[100px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal width="100%">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Client Success Stories</h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <ScrollReveal key={t.id} delay={index * 0.1} width="100%">
              <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl border border-slate-200 shadow-sm h-full flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={t.avatarUrl} 
                    alt={t.name} 
                    className="w-12 h-12 rounded-full object-cover border-2 border-air-force-blue/30"
                  />
                  <div>
                    <h4 className="text-slate-900 font-semibold">{t.name}</h4>
                    <p className="text-slate-500 text-xs">{t.role} at {t.company}</p>
                  </div>
                </div>
                <p className="text-slate-600 italic leading-relaxed flex-1">"{t.content}"</p>
                <div className="mt-6 flex text-sunlit-clay gap-1">
                  {[1,2,3,4,5].map(i => (
                     <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};



export default Testimonials;
