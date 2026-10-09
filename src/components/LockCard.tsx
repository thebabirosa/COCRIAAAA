import React, { useState, useEffect, useRef } from 'react';

interface LockCardProps {
  numero: string;
  nome: string;
  pensamento: string;
  efeito: string;
  index: number;
}

export const LockCard: React.FC<LockCardProps> = ({
  numero,
  nome,
  pensamento,
  efeito,
  index,
}) => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Staggered unlock animation
          const timer = setTimeout(() => {
            setIsUnlocked(true);
          }, 200 + index * 180);
          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.35 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={cardRef}
      onClick={() => setIsUnlocked(!isUnlocked)}
      className="relative group p-5 sm:p-6 rounded-2xl bg-[#2A1A30]/90 border transition-all duration-500 hover:border-[#C9A35A]/60 cursor-pointer shadow-lg overflow-hidden"
      style={{
        borderColor: isUnlocked ? 'rgba(201, 163, 90, 0.45)' : 'rgba(217, 119, 107, 0.3)',
      }}
    >
      {/* Background glow when unlocked */}
      <div
        className={`absolute -right-12 -top-12 w-40 h-40 rounded-full blur-3xl pointer-events-none transition-opacity duration-700 ${
          isUnlocked ? 'bg-[#C9A35A]/15 opacity-100' : 'bg-[#D9776B]/10 opacity-40'
        }`}
      />

      <div className="relative z-10 flex items-start justify-between gap-4">
        {/* Giant Number & Title */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className="font-fraunces text-3xl sm:text-4xl font-bold tracking-tight text-gold-gradient">
              {numero}
            </span>
            <span
              className={`text-xs font-semibold px-2 py-0.5 rounded uppercase tracking-wider transition-colors duration-500 ${
                isUnlocked
                  ? 'bg-[#C9A35A]/20 text-[#E9D3A0] border border-[#C9A35A]/40'
                  : 'bg-[#D9776B]/20 text-[#D9776B] border border-[#D9776B]/40'
              }`}
            >
              {isUnlocked ? '🔓 DESTRAVANDO' : '🔒 BLOQUEADO'}
            </span>
          </div>

          <h3 className="font-fraunces text-lg sm:text-xl font-bold uppercase tracking-wide text-[#F6EFE6] mb-2">
            {nome}
          </h3>

          <p className="font-fraunces italic text-base sm:text-lg text-[#F2C4A0] mb-2">
            {pensamento}
          </p>

          <p className="font-dmsans text-sm sm:text-base text-[#F6EFE6]/80 leading-relaxed font-normal">
            {efeito}
          </p>
        </div>

        {/* Lock Animation Indicator */}
        <div
          className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shrink-0 border transition-all duration-500 shadow-md ${
            isUnlocked
              ? 'bg-[#C9A35A]/20 border-[#C9A35A] text-2xl scale-105 shadow-[0_0_15px_rgba(201,163,90,0.35)]'
              : 'bg-[#D9776B]/20 border-[#D9776B] text-2xl'
          }`}
          title="Clique para alternar o cadeado"
        >
          <span className="transition-transform duration-300 transform group-hover:scale-110">
            {isUnlocked ? '🔓' : '🔒'}
          </span>
        </div>
      </div>
    </div>
  );
};
