import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 border-t border-slate-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
           <span className="font-bold text-xl tracking-tight text-slate-900">Dev<span className="text-air-force-blue">Stream</span></span>
           <p className="text-slate-500 text-sm mt-2">© {new Date().getFullYear()} DevStream. All rights reserved.</p>
        </div>
        
        <div className="flex gap-6 text-sm text-slate-400">
          <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-slate-900 transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
