import React from 'react';

interface ImpactPhraseProps {
  prefix?: string;
  highlight: string;
  suffix?: string;
  className?: string;
  tone?: 'night' | 'light';
}

export const ImpactPhrase: React.FC<ImpactPhraseProps> = ({
  prefix,
  highlight,
  suffix,
  className = '',
  tone = 'night',
}) => {
  return (
    <div className={`my-8 sm:my-10 px-4 text-center max-w-2xl mx-auto ${className}`}>
      {prefix && (
        <p className={`font-dmsans text-sm sm:text-base mb-2 font-medium ${tone === 'night' ? 'text-[#F6EFE6]/80' : 'text-[#2A1A30]/80'}`}>
          {prefix}
        </p>
      )}
      <p
        className={`font-fraunces italic text-[22px] sm:text-[26px] md:text-[28px] leading-snug ${
          tone === 'night' ? 'text-[#FFF6E5]' : 'text-[#2A1A30]'
        }`}
      >
        <span className={tone === 'night' ? 'text-gold-light-gradient font-semibold' : 'text-[#B8862B] font-semibold'}>
          {highlight}
        </span>
      </p>
      {suffix && (
        <p className={`font-dmsans text-sm sm:text-base mt-2 font-medium ${tone === 'night' ? 'text-[#F6EFE6]/80' : 'text-[#2A1A30]/80'}`}>
          {suffix}
        </p>
      )}
    </div>
  );
};
