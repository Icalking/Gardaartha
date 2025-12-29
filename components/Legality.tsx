
import React from 'react';

const Legality: React.FC = () => {
  return (
    <section id="legality" className="py-24 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-4">Keamanan Hukum</h2>
            <p className="font-serif text-4xl text-slate-900 mb-6 leading-tight">Legalitas & Kemitraan Resmi</p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Kami percaya bahwa transparansi dimulai dari kepatuhan terhadap hukum yang berlaku. PT Garda Artha Sejahtera beroperasi di bawah pengawasan ketat regulator di Indonesia untuk memastikan setiap dana nasabah memiliki payung hukum yang jelas.
            </p>
            
            <div className="p-6 bg-slate-50 border-l-4 border-amber-500 rounded-r-xl italic text-slate-700">
              "Investasi yang aman adalah investasi yang memiliki payung hukum jelas dan terukur risikonya."
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-lg border border-slate-100 shadow-sm">
                <div className="text-xs text-slate-400 uppercase font-bold mb-1">Izin Usaha</div>
                <div className="font-bold text-slate-900">AHU-001234.PT.2023</div>
              </div>
              <div className="p-4 bg-white rounded-lg border border-slate-100 shadow-sm">
                <div className="text-xs text-slate-400 uppercase font-bold mb-1">Status Bappebti</div>
                <div className="font-bold text-slate-900">Terdaftar Resmi</div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-2 gap-8 items-center">
            <div className="flex flex-col items-center group">
              <img 
                src="https://upload.wikimedia.org/wikipedia/id/thumb/a/ab/Logo_Bappebti.svg/1200px-Logo_Bappebti.svg.png" 
                alt="Bappebti" 
                className="h-24 object-contain mb-4 grayscale group-hover:grayscale-0 transition-all"
              />
              <span className="text-xs font-bold text-slate-400 tracking-widest uppercase">Regulator Utama</span>
            </div>
            <div className="flex flex-col items-center group">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Logo_Kementerian_Perdagangan_Republik_Indonesia.svg/1200px-Logo_Kementerian_Perdagangan_Republik_Indonesia.svg.png" 
                alt="Kemendag" 
                className="h-24 object-contain mb-4 grayscale group-hover:grayscale-0 transition-all"
              />
              <span className="text-xs font-bold text-slate-400 tracking-widest uppercase">Kementerian Terkait</span>
            </div>
            <div className="flex flex-col items-center col-span-2 mt-4 p-8 border-2 border-dashed border-slate-100 rounded-3xl">
              <span className="text-slate-400 text-sm font-medium mb-2">Anggota Dari:</span>
              <div className="flex gap-8 items-center">
                <div className="h-12 w-32 bg-slate-100 rounded animate-pulse"></div>
                <div className="h-12 w-32 bg-slate-100 rounded animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Legality;
