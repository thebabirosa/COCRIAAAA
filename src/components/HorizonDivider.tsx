import React from 'react';

export const HorizonDivider: React.FC<{ className?: string; tone?: 'night' | 'light' }> = ({
  className = '',
  tone = 'night',
}) => {
  return (
    <div className={`relative w-full py-8 flex items-center justify-center ${className}`}>
      <div
        className={`w-full max-w-3xl h-[1px] relative ${
          tone === 'night'
            ? 'bg-gradient-to-r from-transparent via-[#C9A35A]/35 to-transparent'
            : 'bg-gradient-to-r from-transparent via-[#C9A35A]/50 to-transparent'
        }`}
      >
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full ${
            tone === 'night' ? 'bg-[#E9D3A0] shadow-[0_0_10px_2px_rgba(233,211,160,0.6)]' : 'bg-[#B8862B] shadow-[0_0_8px_1px_rgba(184,134,43,0.5)]'
          }`}
        />
      </div>
    </div>
  );
};
