import React from 'react';
import { cocriaContent } from '../content/cocriaContent';
import { trackInitiateCheckout } from '../utils/pixel';

interface CtaButtonProps {
  texto?: string;
  showMicroCopy?: boolean;
  className?: string;
  variant?: 'primary' | 'compact';
  align?: 'center' | 'left';
  onClickExtra?: () => void;
}

export const CtaButton: React.FC<CtaButtonProps> = ({
  texto = 'QUERO DESTRAVAR MEU DINHEIRO',
  showMicroCopy = true,
  className = '',
  variant = 'primary',
  align = 'center',
  onClickExtra,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    trackInitiateCheckout();
    if (onClickExtra) onClickExtra();
  };

  const isCompact = variant === 'compact';
  const isLeft = align === 'left';

  return (
    <div className={`flex flex-col ${isLeft ? 'items-start md:mx-0' : 'items-center mx-auto'} w-full max-w-md ${className}`}>
      <a
        href={cocriaContent.checkoutUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className={`relative w-full flex items-center justify-center font-dmsans font-bold text-white uppercase tracking-wider text-center transition-all duration-300 transform active:scale-[0.98] cursor-pointer shadow-lg hover:shadow-xl overflow-hidden rounded-[10px] bg-[#1F9D5B] hover:bg-[#17844B] ${
          isCompact ? 'min-h-[46px] py-2.5 px-5 text-sm sm:text-base' : 'min-h-[56px] py-4 px-6 text-base sm:text-lg'
        }`}
        style={{
          boxShadow: '0 8px 24px -4px rgba(31, 157, 91, 0.45)',
        }}
      >
        {/* Shimmer sweep animation across the button */}
        <span
          className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none animate-shimmer-sweep"
          aria-hidden="true"
        />

        <span className="relative z-10 flex items-center justify-center gap-2">
          {texto}
        </span>
      </a>

      {showMicroCopy && (
        <p className={`mt-2.5 text-[12px] sm:text-[13px] text-[#E9D3A0]/80 tracking-normal font-dmsans flex items-center gap-1.5 flex-wrap ${isLeft ? 'justify-start' : 'justify-center text-center'}`}>
          <span>🔒 Compra segura</span>
          <span className="text-[#C9A35A]/50">·</span>
          <span>⚡ Acesso imediato</span>
          <span className="text-[#C9A35A]/50">·</span>
          <span>🛡 7 dias de garantia</span>
        </p>
      )}
    </div>
  );
};
