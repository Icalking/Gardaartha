
import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-slate-900">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url('https://picsum.photos/id/180/1920/1080')` }}
      ></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-500 mb-6 animate-pulse">
            <ShieldCheck className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-widest">Terdaftar & Diawasi Bappebti</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl text-white mb-6 leading-tight">
            Keamanan Modal, <br />
            <span className="text-amber-500">Pertumbuhan</span> Maksimal.
          </h1>
          <p className="text-slate-300 text-lg md:text-xl mb-10 leading-relaxed">
            PT Garda Artha Sejahtera menyediakan solusi pengelolaan aset trading profesional. 
            Kami fokus pada manajemen risiko yang ketat melalui program Laboratorium Investasi kami.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#packages"
              className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
            >
              Lihat Paket Lab <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#about"
              className="bg-transparent hover:bg-white/10 text-white border border-white/30 px-8 py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center"
            >
              Tentang Kami
            </a>
          </div>
          
          <div className="mt-16 flex items-center gap-8 grayscale opacity-60">
             <div className="flex flex-col">
               <span className="text-white font-bold text-2xl">100+</span>
               <span className="text-slate-400 text-xs uppercase tracking-widest">Nasabah Aktif</span>
             </div>
             <div className="w-px h-10 bg-slate-700"></div>
             <div className="flex flex-col">
               <span className="text-white font-bold text-2xl">Rp10M+</span>
               <span className="text-slate-400 text-xs uppercase tracking-widest">Aset Dikelola</span>
             </div>
             <div className="w-px h-10 bg-slate-700"></div>
             <div className="flex flex-col">
               <span className="text-white font-bold text-2xl">50/50</span>
               <span className="text-slate-400 text-xs uppercase tracking-widest">Risk Protection</span>
             </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Element */}
      <div className="absolute bottom-0 right-0 w-1/3 h-2/3 bg-gradient-to-t from-amber-500/10 to-transparent blur-3xl rounded-tl-full"></div>
    </section>
  );
};

export default Hero;
