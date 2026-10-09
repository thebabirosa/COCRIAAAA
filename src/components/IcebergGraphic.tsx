import React from 'react';

export const IcebergGraphic: React.FC = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto my-8 p-4 sm:p-6 rounded-2xl bg-[#2A1A30]/60 border border-[#C9A35A]/25 backdrop-blur-sm overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-[#E9D3A0]/5 blur-3xl pointer-events-none" />

      {/* SVG Diagram */}
      <div className="relative w-full flex flex-col items-center">
        {/* Top Part: O que você vê */}
        <div className="w-full flex items-center gap-3 p-3.5 sm:p-4 rounded-xl bg-[#C9A35A]/15 border border-[#C9A35A]/40 mb-3 transition-all hover:bg-[#C9A35A]/20">
          <div className="w-12 h-12 rounded-full bg-[#C9A35A]/20 border border-[#C9A35A]/50 flex items-center justify-center text-2xl shrink-0">
            💸
          </div>
          <div>
            <span className="block font-fraunces text-xs sm:text-sm font-semibold tracking-wider text-[#E9D3A0] uppercase">
              O QUE VOCÊ VÊ (A SUPERFÍCIE)
            </span>
            <p className="font-dmsans text-sm sm:text-base text-[#F6EFE6] font-medium mt-0.5">
              O dinheiro que entra e logo some.
            </p>
          </div>
        </div>

        {/* Ocean Surface Line / Separator */}
        <div className="w-full relative py-3 flex items-center justify-center">
          <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#C9A35A]/80 to-transparent" />
          <span className="absolute px-3 py-0.5 text-[11px] font-dmsans font-semibold text-[#E9D3A0] bg-[#120C17] border border-[#C9A35A]/40 rounded-full tracking-wider uppercase">
            Nível da Consciência
          </span>
        </div>

        {/* Submerged Part: O que você não vê */}
        <div className="w-full flex items-center gap-3 p-3.5 sm:p-4 rounded-xl bg-[#120C17]/90 border border-[#D9776B]/40 mt-1 shadow-inner">
          <div className="w-12 h-12 rounded-full bg-[#D9776B]/20 border border-[#D9776B]/50 flex items-center justify-center text-2xl shrink-0">
            🔒
          </div>
          <div>
            <span className="block font-fraunces text-xs sm:text-sm font-semibold tracking-wider text-[#D9776B] uppercase">
              O QUE VOCÊ NÃO VÊ (O FUNDO)
            </span>
            <p className="font-dmsans text-sm sm:text-base text-[#F6EFE6]/90 font-medium mt-0.5">
              As travas que você aprendeu e repete sem perceber.
            </p>
          </div>
        </div>

        {/* Visual Iceberg geometry in SVG */}
        <div className="w-full mt-4 pt-2 flex justify-center">
          <svg
            viewBox="0 0 320 180"
            className="w-full max-w-[280px] h-auto drop-shadow-md"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Waterline */}
            <path
              d="M10 60 Q 80 55, 160 60 T 310 60"
              stroke="#C9A35A"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
            {/* Iceberg Tip (Visible) */}
            <polygon
              points="160,18 200,60 120,60"
              fill="url(#tipGradient)"
              stroke="#E9D3A0"
              strokeWidth="1.5"
            />
            {/* Submerged Mass (Deep) */}
            <polygon
              points="120,60 200,60 240,140 180,170 140,170 80,140"
              fill="url(#deepGradient)"
              stroke="#D9776B"
              strokeWidth="1.5"
              strokeOpacity="0.7"
            />
            {/* Labels in SVG */}
            <text x="160" y="44" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontFamily="DM Sans" fontWeight="700">
              10% VISÍVEL
            </text>
            <text x="160" y="115" textAnchor="middle" fill="#F6EFE6" fontSize="13" fontFamily="DM Sans" fontWeight="700">
              90% INVISÍVEL
            </text>
            <text x="160" y="135" textAnchor="middle" fill="#F2C4A0" fontSize="10" fontFamily="DM Sans">
              (Crenças & Travas)
            </text>

            <defs>
              <linearGradient id="tipGradient" x1="160" y1="18" x2="160" y2="60" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F2C4A0" stopOpacity="0.7" />
                <stop stopColor="#C9A35A" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="deepGradient" x1="160" y1="60" x2="160" y2="170" gradientUnits="userSpaceOnUse">
                <stop stopColor="#2A1A30" stopOpacity="0.95" />
                <stop stopColor="#120C17" stopOpacity="0.98" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};
