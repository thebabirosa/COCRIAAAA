import React, { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { cocriaContent } from '../content/cocriaContent';

export const FaqAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default for immediate clarity
  const { faq } = cocriaContent;

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="w-full max-w-2xl mx-auto my-8 space-y-3">
      {faq.perguntas.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="rounded-2xl border transition-all duration-200 overflow-hidden bg-white/90 border-[#C9A35A]/30 shadow-sm"
          >
            <button
              onClick={() => toggle(idx)}
              aria-expanded={isOpen}
              className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FBF5EC]/60 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">❓</span>
                <span className="font-fraunces font-bold text-base sm:text-lg text-[#2A1A30]">
                  {item.pergunta}
                </span>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-[#B8862B] shrink-0 transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {isOpen && (
              <div className="px-5 pb-5 pt-1 text-sm sm:text-base text-[#2A1A30]/85 font-dmsans leading-relaxed border-t border-[#EFE4D3]/60">
                {item.resposta}
              </div>
            )}
          </div>
        );
      })}

      {/* Optional WhatsApp Support Button */}
      {faq.whatsappSuporte && (
        <div className="pt-6 text-center">
          <a
            href={`https://wa.me/${faq.whatsappSuporte}?text=Ol%C3%A1%2C%20tenho%20uma%20d%C3%BAvida%20sobre%20o%20COCRIA`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1F9D5B]/15 border border-[#1F9D5B]/40 text-[#17844B] font-bold text-sm hover:bg-[#1F9D5B]/25 transition-all shadow-sm"
          >
            <MessageCircle className="w-5 h-5" />
            <span>FALAR COM A EQUIPE NO WHATSAPP</span>
          </a>
        </div>
      )}
    </div>
  );
};
