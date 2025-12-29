
import React from 'react';
import { Target, Eye, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" 
                alt="Gedung PT Garda Artha Sejahtera" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-slate-900 p-8 rounded-3xl shadow-xl hidden md:block border-b-4 border-amber-500">
              <div className="text-4xl font-black text-amber-500 mb-1">10+</div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Tahun Pengalaman</div>
            </div>
            {/* Decorative dot grid */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px] opacity-20 -z-10"></div>
          </div>
          
          <div className="animate-fadeIn">
            <h2 className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-4">Tentang Kami</h2>
            <h3 className="font-serif text-4xl md:text-5xl text-slate-900 mb-6 leading-tight">Membangun Masa Depan Keuangan yang <span className="text-amber-500">Transparan</span></h3>
            <p className="text-slate-600 mb-8 leading-relaxed text-lg">
              PT Garda Artha Sejahtera lahir dari visi untuk mendemokrasi akses ke pengelolaan aset profesional. Kami memahami bahwa dunia trading penuh dengan ketidakpastian, itulah sebabnya kami mengutamakan manajemen risiko yang terukur dan transparansi total bagi setiap nasabah kami.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-5 group">
                <div className="bg-amber-100 p-4 rounded-2xl h-fit group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
                  <Target className="w-6 h-6 text-amber-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2 text-xl">Visi Kami</h4>
                  <p className="text-slate-600 leading-relaxed">Menjadi perusahaan manajemen aset terdepan di Indonesia yang dikenal karena integritas, akuntabilitas, dan inovasi dalam manajemen risiko.</p>
                </div>
              </div>
              
              <div className="flex gap-5 group">
                <div className="bg-amber-100 p-4 rounded-2xl h-fit group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
                  <Eye className="w-6 h-6 text-amber-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2 text-xl">Misi Kami</h4>
                  <p className="text-slate-600 leading-relaxed">Memberikan edukasi berkelanjutan dan solusi investasi yang aman bagi masyarakat luas melalui pemanfaatan teknologi mutakhir dan riset pasar mendalam.</p>
                </div>
              </div>

              <div className="flex gap-5 group">
                <div className="bg-amber-100 p-4 rounded-2xl h-fit group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
                  <Award className="w-6 h-6 text-amber-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2 text-xl">Nilai Utama</h4>
                  <p className="text-slate-600 leading-relaxed">Integritas, Transparansi, dan Keamanan Modal adalah tiga pilar utama yang mendasari setiap keputusan strategis yang kami ambil untuk nasabah.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
