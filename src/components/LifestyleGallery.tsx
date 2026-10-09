import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cocriaContent } from '../content/cocriaContent';

export const LifestyleGallery: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.clientWidth * 0.8;
      const offset = direction === 'left' ? -cardWidth : cardWidth;
      scrollContainerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto my-8">
      {/* Scroll Controls (Visible on tablet/desktop, useful on mobile too) */}
      <div className="flex items-center justify-end gap-2 mb-4 px-4 sm:px-0">
        <button
          onClick={() => scroll('left')}
          aria-label="Cena anterior"
          className="w-10 h-10 rounded-full bg-[#2A1A30]/80 border border-[#C9A35A]/50 text-[#F6EFE6] flex items-center justify-center hover:bg-[#C9A35A] hover:text-[#120C17] transition-all cursor-pointer shadow-sm active:scale-95"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => scroll('right')}
          aria-label="Próxima cena"
          className="w-10 h-10 rounded-full bg-[#2A1A30]/80 border border-[#C9A35A]/50 text-[#F6EFE6] flex items-center justify-center hover:bg-[#C9A35A] hover:text-[#120C17] transition-all cursor-pointer shadow-sm active:scale-95"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Gallery Cards Container with Scroll-Snap */}
      <div
        ref={scrollContainerRef}
        className="flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory px-4 sm:px-2 pb-4"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {cocriaContent.novaVida.cards.map((card, idx) => (
          <div
            key={card.id}
            className="flex-shrink-0 w-[82vw] max-w-[290px] sm:max-w-[310px] snap-center rounded-2xl overflow-hidden bg-[#2A1A30] border border-[#C9A35A]/40 shadow-xl group transition-all duration-300 hover:border-[#E9D3A0] hover:-translate-y-1 relative"
          >
            {/* Aspect Ratio 3:4 portrait card */}
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#120C17]">
              <img
                src={card.foto}
                alt={card.alt}
                loading={idx === 0 ? 'eager' : 'lazy'}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />

              {/* Scrim overlay for text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#120C17] via-[#120C17]/40 to-transparent opacity-90" />

              {/* Top floating badge with icon */}
              <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-[#120C17]/80 backdrop-blur-md border border-[#C9A35A]/60 flex items-center justify-center text-2xl shadow-lg">
                {card.icone}
              </div>

              {/* Bottom text block */}
              <div className="absolute bottom-0 inset-x-0 p-5">
                <span className="block text-xs uppercase tracking-wider text-[#E9D3A0] font-dmsans font-semibold mb-1">
                  Cena 0{idx + 1}
                </span>
                <p className="font-fraunces text-xl sm:text-2xl font-bold text-[#FFF6E5] leading-tight">
                  {card.frase}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-xs text-[#2A1A30]/70 mt-2 font-dmsans italic">
        (Deslize para o lado para ver todas as cenas)
      </p>
    </div>
  );
};
