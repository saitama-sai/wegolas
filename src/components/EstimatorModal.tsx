import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Check, ArrowRight, Calculator, Send } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sounds } from './SoundEffects';

interface EstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EstimatorModal: React.FC<EstimatorModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<number>(1);
  const [serviceType, setServiceType] = useState<string>('WebGL Sıvı Web Sitesi');
  const [budget, setBudget] = useState<string>('₺150K - ₺350K');
  const [timeline, setTimeline] = useState<string>('1 - 2 Ay');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', note: '' });
  const [submitted, setSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const services = [
    { name: 'WebGL Sıvı Web Sitesi', desc: 'Cuberto standartlarında GSAP + Three.js + Lenis animasyonlu özel web deneyimi' },
    { name: 'Mobil Uygulama (iOS & Android)', desc: 'React Native & Node.js tabanlı yüksek performanslı mobil ekosistem' },
    { name: 'Yapay Zeka & Ajan Entegrasyonu', desc: 'Sürecinize özel LLM asistanlar ve otonom iş akışları' },
    { name: '3D E-Ticaret Mağazası', desc: 'Shopify Plus / Özel altyapı 3 boyutlu ürün sergilemeli mağaza' },
  ];

  const budgets = [
    '₺75.000 - ₺150.000',
    '₺150.000 - ₺350.000',
    '₺350.000 - ₺750.000',
    '₺750.000+',
  ];

  const timelines = [
    '2 - 4 Hafta (Hızlı Sprint)',
    '1 - 2 Ay (Standart Kampanya)',
    '3 - 6 Ay (Kapsamlı Ekosistem)',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sounds.playSuccess();
    setSubmitted(true);

    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#00F0FF', '#7000FF', '#FF0055', '#FFFFFF']
    });
  };

  const resetForm = () => {
    setStep(1);
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 md:p-8 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl bg-[#0A0A0E] border border-white/15 rounded-3xl p-6 md:p-10 shadow-2xl my-auto"
        >
          {/* Close Button */}
          <button
            onClick={() => {
              sounds.playClick();
              onClose();
            }}
            aria-label="Kapat"
            className="absolute top-6 right-6 p-3 rounded-full bg-white/5 hover:bg-[#FF0055] text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div className="space-y-8">
              {/* Modal Header */}
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00F0FF]/10 text-[#00F0FF] text-xs font-mono font-bold uppercase">
                  <Calculator className="w-3.5 h-3.5" />
                  <span>İnteraktif Proje Hesaplayıcı</span>
                </div>
                <h2 className="font-syne text-3xl md:text-4xl font-extrabold text-white">
                  Proje Fiyat & Süre Tahmini Alın
                </h2>
                <p className="text-gray-400 text-sm">
                  Adım adım seçim yapın, wegolas ekibi projenizin kapsam haritasını çıkarsın.
                </p>
              </div>

              {/* Step Progress Bar */}
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4].map((s) => (
                  <div
                    key={s}
                    className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${
                      s <= step ? 'bg-gradient-to-r from-[#00F0FF] to-[#7000FF]' : 'bg-white/10'
                    }`}
                  />
                ))}
              </div>

              {/* Step 1: Service Type */}
              {step === 1 && (
                <div className="space-y-4">
                  <h3 className="text-sm font-mono text-gray-300 uppercase">
                    Adım 1: Hangi hizmete ihtiyacınız var?
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {services.map((s) => (
                      <button
                        key={s.name}
                        onClick={() => {
                          sounds.playClick();
                          setServiceType(s.name);
                        }}
                        className={`p-5 rounded-2xl border text-left transition-all ${
                          serviceType === s.name
                            ? 'bg-[#00F0FF]/15 border-[#00F0FF] text-white shadow-[0_0_20px_rgba(0,240,255,0.2)]'
                            : 'bg-white/[0.03] border-white/10 text-gray-300 hover:border-white/30'
                        }`}
                      >
                        <div className="font-syne font-bold text-base text-white flex items-center justify-between mb-1">
                          <span>{s.name}</span>
                          {serviceType === s.name && <Check className="w-4 h-4 text-[#00F0FF]" />}
                        </div>
                        <p className="text-xs text-gray-400 leading-normal">{s.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Budget */}
              {step === 2 && (
                <div className="space-y-4">
                  <h3 className="text-sm font-mono text-gray-300 uppercase">
                    Adım 2: Tahmini bütçe aralığınız nedir?
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {budgets.map((b) => (
                      <button
                        key={b}
                        onClick={() => {
                          sounds.playClick();
                          setBudget(b);
                        }}
                        className={`p-5 rounded-2xl border font-syne font-bold text-base text-left transition-all ${
                          budget === b
                            ? 'bg-[#7000FF]/20 border-[#7000FF] text-white shadow-[0_0_20px_rgba(112,0,255,0.2)]'
                            : 'bg-white/[0.03] border-white/10 text-gray-300 hover:border-white/30'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{b}</span>
                          {budget === b && <Check className="w-4 h-4 text-[#7000FF]" />}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Timeline */}
              {step === 3 && (
                <div className="space-y-4">
                  <h3 className="text-sm font-mono text-gray-300 uppercase">
                    Adım 3: İdeal teslim süreniz nedir?
                  </h3>
                  <div className="space-y-3">
                    {timelines.map((t) => (
                      <button
                        key={t}
                        onClick={() => {
                          sounds.playClick();
                          setTimeline(t);
                        }}
                        className={`w-full p-5 rounded-2xl border font-syne font-bold text-base text-left transition-all ${
                          timeline === t
                            ? 'bg-[#FF0055]/20 border-[#FF0055] text-white'
                            : 'bg-white/[0.03] border-white/10 text-gray-300 hover:border-white/30'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{t}</span>
                          {timeline === t && <Check className="w-4 h-4 text-[#FF0055]" />}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 4: Contact Brief Form */}
              {step === 4 && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-sm font-mono text-gray-300 uppercase">
                    Adım 4: İletişim bilgilerinizi girin
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-gray-400 mb-1">Ad Soyad *</label>
                      <input
                        required
                        type="text"
                        placeholder="Ahmet Yılmaz"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#00F0FF] text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-gray-400 mb-1">E-Posta Adresi *</label>
                      <input
                        required
                        type="email"
                        placeholder="ahmet@sirket.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#00F0FF] text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-400 mb-1">Telefon / WhatsApp</label>
                    <input
                      type="tel"
                      placeholder="+90 555 000 0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#00F0FF] text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-400 mb-1">Proje Notları (Opsiyonel)</label>
                    <textarea
                      rows={3}
                      placeholder="Projeniz hakkında eklemek istediğiniz detaylar..."
                      value={formData.note}
                      onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#00F0FF] text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#00F0FF] via-[#7000FF] to-[#FF0055] font-syne font-extrabold text-black text-base uppercase tracking-wider hover:opacity-95 transition-opacity flex items-center justify-center gap-2 shadow-lg"
                  >
                    <Send className="w-4 h-4" />
                    <span>Özel Teklifi Gönder</span>
                  </button>
                </form>
              )}

              {/* Step Navigation Controls */}
              {step < 4 && (
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  {step > 1 ? (
                    <button
                      onClick={() => {
                        sounds.playClick();
                        setStep(step - 1);
                      }}
                      className="px-5 py-2.5 rounded-full bg-white/5 text-gray-300 font-syne font-bold text-xs uppercase hover:bg-white/10"
                    >
                      Geri
                    </button>
                  ) : <div />}

                  <button
                    onClick={() => {
                      sounds.playClick();
                      setStep(step + 1);
                    }}
                    className="px-6 py-3 rounded-full bg-[#00F0FF] text-black font-syne font-extrabold text-xs uppercase tracking-wider hover:bg-white transition-colors flex items-center gap-2"
                  >
                    <span>İleri</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* Success View */
            <div className="py-12 text-center space-y-6">
              <div className="w-20 h-20 mx-auto rounded-full bg-[#00F0FF]/20 border border-[#00F0FF] flex items-center justify-center text-[#00F0FF]">
                <Sparkles className="w-10 h-10 animate-bounce" />
              </div>

              <div className="space-y-2 max-w-md mx-auto">
                <h3 className="font-syne text-3xl font-extrabold text-white">
                  Talebiniz Alındı!
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Teşekkürler Sayın <span className="text-[#00F0FF] font-bold">{formData.name}</span>. Seçimleriniz doğrultusunda hazırlanan detaylı proje yol haritası ve teklifimiz <span className="text-[#00F0FF]">{formData.email}</span> adresinize 24 saat içinde iletilecektir.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs font-mono text-gray-400 max-w-md mx-auto space-y-1">
                <div>Seçilen Hizmet: {serviceType}</div>
                <div>Bütçe Aralığı: {budget}</div>
                <div>Tahmini Süre: {timeline}</div>
              </div>

              <button
                onClick={resetForm}
                className="px-8 py-3 rounded-full bg-white/10 text-white font-syne font-bold text-xs uppercase hover:bg-white hover:text-black transition-all"
              >
                Pencereyi Kapat
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
