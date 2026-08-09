import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sounds } from './SoundEffects';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sounds.playSuccess();
    setSent(true);

    confetti({
      particleCount: 100,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#00F0FF', '#FFFFFF', '#7000FF']
    });

    setTimeout(() => {
      setSent(false);
      setFormData({ name: '', email: '', message: '' });
    }, 6000);
  };

  return (
    <section id="contact" className="relative py-32 px-6 lg:px-16 z-10 bg-[#0B0B0D]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left Side Info */}
        <div className="lg:col-span-6 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#00F0FF] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>İLETİŞİM</span>
          </div>

          <h2 className="font-syne text-5xl sm:text-7xl font-extrabold text-white tracking-tighter leading-none">
            BİRLİKTE <br />
            <span className="text-[#00F0FF]">ÜRETELİM.</span>
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed max-w-lg font-light">
            Sitenizin veya mobil uygulamanızın Cuberto standartlarında sade, şık ve pürüzsüz olmasını istiyorsanız hemen iletişime geçin.
          </p>

          <div className="space-y-6 pt-4">
            <a
              href="mailto:hello@wegolas.agency"
              onMouseEnter={() => sounds.playHover()}
              className="flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00F0FF] group-hover:bg-[#00F0FF] group-hover:text-black transition-all duration-300">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-gray-500 uppercase">E-Posta</span>
                <p className="font-syne font-bold text-white text-lg group-hover:text-[#00F0FF] transition-colors">
                  hello@wegolas.agency
                </p>
              </div>
            </a>

            <a
              href="tel:+902128904050"
              onMouseEnter={() => sounds.playHover()}
              className="flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 group-hover:bg-white group-hover:text-black transition-all duration-300">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-gray-500 uppercase">Telefon</span>
                <p className="font-syne font-bold text-white text-lg group-hover:text-[#00F0FF] transition-colors">
                  +90 (212) 890 40 50
                </p>
              </div>
            </a>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-gray-500 uppercase">Stüdyo</span>
                <p className="font-syne font-bold text-white text-lg">
                  İstanbul & Global Remote
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Form Card */}
        <div className="lg:col-span-6 bg-[#121216] p-8 md:p-12 rounded-[2rem] border border-white/10 shadow-2xl relative overflow-hidden">
          {!sent ? (
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <h3 className="font-syne text-2xl font-bold text-white">
                Hızlı Mesaj Gönderin
              </h3>

              <div>
                <label className="block text-xs font-mono text-gray-400 mb-2 uppercase">Adınız ve Soyadınız *</label>
                <input
                  required
                  type="text"
                  placeholder="Caner Yılmaz"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#00F0FF] transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-gray-400 mb-2 uppercase">E-Posta Adresiniz *</label>
                <input
                  required
                  type="email"
                  placeholder="caner@sirketiniz.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#00F0FF] transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-gray-400 mb-2 uppercase">Projeniz Hakkında *</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Aklınızdaki proje, hedef kitle ve beklentileriniz..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#00F0FF] transition-colors text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                onMouseEnter={() => sounds.playHover()}
                data-cursor="GÖNDER"
                data-cursor-variant="hover"
                className="w-full py-5 rounded-2xl bg-white hover:bg-[#00F0FF] font-syne font-extrabold text-black text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                <Send className="w-4 h-4" />
                <span>Mesajı Gönderin</span>
              </button>
            </form>
          ) : (
            <div className="py-16 text-center space-y-4 relative z-10">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#00F0FF]/20 border border-[#00F0FF] flex items-center justify-center text-[#00F0FF]">
                <Sparkles className="w-8 h-8" />
              </div>
              <h3 className="font-syne text-3xl font-extrabold text-white">
                Mesajınız Alındı!
              </h3>
              <p className="text-gray-300 text-sm max-w-sm mx-auto font-light">
                wegolas ekibimiz 2 saat içinde tarafınıza dönüş yapacaktır.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
