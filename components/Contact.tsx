import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/b96b3502a90a5ccff7e33ce394575ae6", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
          _subject: `New Portfolio Contact from ${formState.name}`
        })
      });

      if (response.ok) {
        setSuccess(true);
        setFormState({ name: '', email: '', message: '' });
      } else {
        console.error("Form submission failed");
        alert("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <ScrollReveal variant="slideRight">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Let's Discuss Your Project</h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Ready to take your digital presence to the next level? Whether you have a specific project in mind or just need advice, I'm here to help.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-air-force-blue/10 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-air-force-blue" />
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-medium mb-1">Email Me</h4>
                    <a href="mailto:reilly4181@gmail.com" className="text-slate-600 hover:text-air-force-blue transition-colors">reilly4181@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-air-force-blue/10 flex items-center justify-center">
                    <Phone className="h-6 w-6 text-air-force-blue" />
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-medium mb-1">Call Me</h4>
                    <a href="tel:3472495856" className="text-slate-600 hover:text-air-force-blue transition-colors">347 249 5856</a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-air-force-blue/10 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-air-force-blue" />
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-medium mb-1">Location</h4>
                    <a href="https://www.google.com/maps/place/Denver,+CO" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-air-force-blue transition-colors">Denver, Colorado</a>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="slideLeft" delay={0.2} width="100%">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm">
              {success ? (
                <div className="text-center py-12 space-y-6">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <Send className="h-10 w-10 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                    <p className="text-slate-600">Thanks for reaching out. I'll get back to you shortly.</p>
                  </div>
                  <button 
                    onClick={() => setSuccess(false)}
                    className="px-8 py-3 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-lg font-medium transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-air-force-blue focus:border-transparent text-slate-900 placeholder-slate-400 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-air-force-blue focus:border-transparent text-slate-900 placeholder-slate-400 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-air-force-blue focus:border-transparent text-slate-900 placeholder-slate-400 transition-all resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-air-force-blue hover:bg-air-force-blue/90 text-white rounded-lg font-bold text-lg transition-all shadow-lg shadow-air-force-blue/20 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'} <Send className="h-5 w-5" />
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
