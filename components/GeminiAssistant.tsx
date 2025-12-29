
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles } from 'lucide-react';
import { getInvestmentAdvice } from '../services/geminiService';
import { ChatMessage, MessageType } from '../types';

const GeminiAssistant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { type: MessageType.BOT, text: "Halo! Saya Asisten AI PT Garda Artha Sejahtera. Ada yang bisa saya bantu terkait edukasi investasi atau program Laboratorium kami?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = { type: MessageType.USER, text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    const advice = await getInvestmentAdvice(input);
    setMessages(prev => [...prev, { type: MessageType.BOT, text: advice || "Maaf, silakan coba lagi." }]);
    setIsLoading(false);
  };

  return (
    <section id="ai-assistant" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-500 mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-widest">Garda AI Edukasi</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">Konsultasi Edukasi Tanpa Henti</h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Teknologi Gemini AI kami siap menjawab pertanyaan seputar terminologi trading, manajemen risiko, dan cara kerja Laboratorium Investasi kami selama 24/7.
            </p>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                <span>Penjelasan istilah teknis pasar modal</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                <span>Edukasi strategi manajemen risiko</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                <span>Panduan awal bagi investor pemula</span>
              </li>
            </ul>
          </div>

          <div className="lg:w-1/2 w-full max-w-xl">
            <div className="bg-slate-800 rounded-3xl overflow-hidden shadow-2xl border border-slate-700 flex flex-col h-[500px]">
              {/* Header */}
              <div className="p-4 bg-slate-700 border-b border-slate-600 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center">
                  <Bot className="text-slate-900" />
                </div>
                <div>
                  <div className="font-bold">Garda Assistant</div>
                  <div className="text-[10px] text-amber-500 uppercase font-black tracking-widest flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span> Online
                  </div>
                </div>
              </div>

              {/* Chat Body */}
              <div 
                ref={scrollRef}
                className="flex-grow p-4 space-y-4 overflow-y-auto scrollbar-hide bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-95"
              >
                {messages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.type === MessageType.USER ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] p-3 rounded-2xl flex gap-3 ${msg.type === MessageType.USER ? 'bg-amber-500 text-slate-900 rounded-tr-none' : 'bg-slate-700 text-slate-100 rounded-tl-none border border-slate-600'}`}>
                      {msg.type === MessageType.BOT && <Bot className="w-5 h-5 flex-shrink-0 mt-1 opacity-60" />}
                      <div className="text-sm whitespace-pre-wrap leading-relaxed">{msg.text}</div>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-slate-700 p-3 rounded-2xl rounded-tl-none flex gap-2">
                      <div className="w-2 h-2 rounded-full bg-slate-400 animate-bounce"></div>
                      <div className="w-2 h-2 rounded-full bg-slate-400 animate-bounce delay-100"></div>
                      <div className="w-2 h-2 rounded-full bg-slate-400 animate-bounce delay-200"></div>
                    </div>
                  </div>
                )}
              </div>

              {/* Input */}
              <div className="p-4 bg-slate-700 border-t border-slate-600 flex gap-2">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Tanyakan sesuatu..."
                  className="flex-grow bg-slate-900 border-none rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-amber-500 text-white outline-none"
                />
                <button 
                  onClick={handleSend}
                  className="bg-amber-500 text-slate-900 p-2 rounded-xl hover:bg-amber-600 transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500 rounded-full blur-[150px]"></div>
      </div>
    </section>
  );
};

export default GeminiAssistant;
