
import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { INVESTMENT_PACKAGES } from '../constants';

const Packages: React.FC = () => {
  return (
    <section id="packages" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-4">Laboratorium Investasi</h2>
          <p className="font-serif text-4xl md:text-5xl text-slate-900 mb-6">Pilih Paket Pertumbuhan Anda</p>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Setiap paket dirancang dengan target realistis dan perlindungan modal maksimal. Pilih yang sesuai dengan profil risiko dan tujuan finansial Anda.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {INVESTMENT_PACKAGES.map((pkg) => (
            <div 
              key={pkg.id} 
              className={`relative bg-white rounded-3xl p-8 border-2 transition-all hover:scale-[1.02] flex flex-col ${pkg.isPopular ? 'border-amber-500 shadow-2xl shadow-amber-500/10' : 'border-slate-100 shadow-lg'}`}
            >
              {pkg.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-slate-900 px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">
                  Paling Populer
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{pkg.name}</h3>
                <p className="text-slate-500 text-sm">{pkg.description}</p>
              </div>

              <div className="mb-8">
                <div className="text-slate-400 text-xs uppercase font-bold tracking-wider mb-1">Initial Capital</div>
                <div className="text-3xl font-black text-slate-900">{pkg.initial}</div>
              </div>

              <div className="bg-amber-50 rounded-2xl p-4 mb-8">
                <div className="text-amber-700 text-xs uppercase font-bold tracking-wider mb-1">Target Pertumbuhan</div>
                <div className="text-2xl font-bold text-amber-600">{pkg.target}</div>
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                <div className="flex items-start gap-3 text-sm text-slate-600">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Risk Management 50/50</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-600">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Real-time Reporting</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-600">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Analisis Data Harian</span>
                </div>
              </div>

              <a 
                href={`https://wa.me/62882016909806?text=Halo PT Garda Artha Sejahtera, saya tertarik dengan paket ${pkg.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 rounded-xl font-bold text-center transition-all ${pkg.isPopular ? 'bg-amber-500 text-slate-900 hover:bg-amber-600' : 'bg-slate-900 text-white hover:bg-slate-800'}`}
              >
                Pilih Paket Ini
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-slate-900 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4">Butuh Konsultasi Khusus?</h3>
            <p className="text-slate-400 max-w-xl mx-auto mb-8">
              Tim ahli kami siap membantu Anda menyusun portofolio yang disesuaikan dengan kebutuhan spesifik Anda.
            </p>
            <a 
              href="#contact"
              className="inline-block bg-white text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-slate-100 transition-colors"
            >
              Hubungi Wealth Advisor Kami
            </a>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -ml-32 -mb-32"></div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
