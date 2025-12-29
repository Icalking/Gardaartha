
import { GoogleGenAI } from "@google/genai";

export const getInvestmentAdvice = async (userPrompt: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [{ role: 'user', parts: [{ text: userPrompt }] }],
      config: {
        systemInstruction: `Anda adalah asisten AI edukasi untuk PT Garda Artha Sejahtera. 
        Tugas Anda adalah memberikan informasi edukatif tentang investasi, trading, dan manajemen risiko. 
        Gunakan bahasa Indonesia yang profesional, ramah, dan mudah dimengerti. 
        Selalu ingatkan nasabah bahwa trading memiliki risiko tinggi. 
        PT Garda Artha Sejahtera memiliki program "Laboratorium Investasi" dengan skema perlindungan risiko 50/50. 
        Fokuslah pada edukasi dan literasi keuangan, jangan memberikan sinyal transaksi atau janji keuntungan pasti.`,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Maaf, saya sedang mengalami kendala teknis dalam memproses permintaan Anda. Silakan coba beberapa saat lagi atau hubungi admin kami.";
  }
};
