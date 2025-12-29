
import React from 'react';
import { Mail, Phone, MapPin, Instagram, Linkedin, Send } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-950 text-slate-400 py-20 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-amber-500 p-1 rounded">
                <div className="w-5 h-5 border border-slate-900 flex items-center justify-center font-bold text-slate-900 text-[10px]">GA</div>
              </div>
              <span className="font-serif text-xl font-bold text-white">
                Garda Artha <span className="text-amber-500">Sejahtera</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Platform manajemen aset terpercaya yang menggabungkan analisis data mendalam dengan kepatuhan hukum yang ketat untuk kenyamanan finansial Anda.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-amber-500 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-amber-500 transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="hover:text-amber-500 transition-colors"><Send className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Navigasi Cepat</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#home" className="hover:text-amber-500">Beranda</a></li>
              <li><a href="#features" className="hover:text-amber-500">Keunggulan Kami</a></li>
              <li><a href="#packages" className="hover:text-amber-500">Paket Investasi</a></li>
              <li><a href="#legality" className="hover:text-amber-500">Legalitas Perusahaan</a></li>
              <li><a href="#ai-assistant" className="hover:text-amber-500">Edukasi Garda AI</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Kontak Kami</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-500 mt-1" />
                <span>Gedung Artha Lt. 42, SCBD, Jakarta Selatan, 12190</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-500" />
                <span>+62 882-0169-09806</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-500" />
                <span>info@gardaartha.co.id</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-6">Market Insight</h4>
            <p className="text-xs mb-4">Dapatkan update analisis pasar mingguan gratis.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email Anda" 
                className="bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-sm w-full outline-none focus:border-amber-500"
              />
              <button className="bg-amber-500 text-slate-900 p-2 rounded-lg hover:bg-amber-600 transition-colors">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Disclaimer Area */}
        <div className="pt-8 border-t border-slate-900">
          <div className="p-6 bg-slate-900/50 rounded-2xl border border-slate-800 mb-8">
            <h5 className="text-amber-500 text-xs font-black uppercase tracking-widest mb-3 flex items-center gap-2">
               Disclaimer Risiko
            </h5>
            <p className="text-[10px] uppercase leading-relaxed text-slate-500">
              Perdagangan berjangka komoditi memiliki tingkat risiko yang sangat tinggi dan mungkin tidak cocok untuk semua investor. Kinerja masa lalu tidak menjamin hasil di masa depan. Anda harus menyadari semua risiko yang terkait dengan perdagangan ini dan mencari saran dari penasihat keuangan independen jika Anda ragu. PT Garda Artha Sejahtera berkomitmen pada manajemen risiko namun tidak bertanggung jawab atas kerugian finansial di luar skema perlindungan 50/50 yang telah disepakati. Seluruh dana nasabah dikelola secara transparan dan sesuai regulasi Bappebti.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
            <p>© 2024 PT Garda Artha Sejahtera. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-amber-500">Kebijakan Privasi</a>
              <a href="#" className="hover:text-amber-500">Syarat & Ketentuan</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
