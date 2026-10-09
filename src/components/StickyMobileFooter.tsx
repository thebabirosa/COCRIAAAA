import React, { useState, useEffect } from 'react';
import { cocriaContent } from '../content/cocriaContent';
import { trackInitiateCheckout } from '../utils/pixel';

export const StickyMobileFooter: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show only after scrolling past hero section (approx 450px)
      if (window.scrollY > 450) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Acesso rápido ao treinamento"
      className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-[#120C17]/95 border-t border-[#C9A35A]/40 backdrop-blur-md px-4 py-2.5 shadow-2xl transition-all duration-300 transform translate-y-0"
      style={{
        maxHeight: '12vh', // strictly well below 15% mobile viewport cap
      }}
    >
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="flex flex-col">
          <span className="font-fraunces font-bold text-sm tracking-wide text-[#FFF6E5]">
            COCRIA
          </span>
          <span className="font-dmsans text-[11px] text-[#E9D3A0] flex items-center gap-1 font-medium">
            <span>🛡 7 dias garantia</span>
          </span>
        </div>

        <a
          href={cocriaContent.checkoutUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackInitiateCheckout()}
          className="relative px-5 py-2.5 rounded-[10px] bg-[#1F9D5B] hover:bg-[#17844B] text-white font-dmsans font-bold text-sm uppercase tracking-wider shadow-md overflow-hidden shrink-0 flex items-center justify-center active:scale-95 transition-all"
        >
          <span
            className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none animate-shimmer-sweep"
            aria-hidden="true"
          />
          <span className="relative z-10">QUERO ENTRAR</span>
        </a>
      </div>
    </aside>
  );
};
