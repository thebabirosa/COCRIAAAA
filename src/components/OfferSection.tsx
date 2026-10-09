import React, { useEffect, useRef } from 'react';
import { cocriaContent } from '../content/cocriaContent';
import { CtaButton } from './CtaButton';
import { trackViewContent } from '../utils/pixel';

export const OfferSection: React.FC = () => {
  const offerRef = useRef<HTMLElement>(null);
  const hasFiredViewContent = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasFiredViewContent.current) {
          hasFiredViewContent.current = true;
          trackViewContent();
        }
      },
      { threshold: 0.25 }
    );

    if (offerRef.current) {
      observer.observe(offerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const { oferta } = cocriaContent;

  return (
    <section
      ref={offerRef}
      id="oferta"
      className="relative py-16 sm:py-24 px-4 bg-[#FBF5EC] text-[#2A1A30] overflow-hidden"
    >
      {/* Golden Aura Glow behind card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 sm:w-[520px] sm:h-[520px] bg-[#E9D3A0]/45 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-xl mx-auto z-10">
        {/* Section Header */}
        <div className="text-center mb-8">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#B8862B] block mb-2 font-dmsans">
            OPORTUNIDADE EXCLUSIVA
          </span>
          <h2 className="font-fraunces text-2xl sm:text-3xl md:text-4xl font-semibold uppercase tracking-wide leading-tight text-[#2A1A30]">
            {oferta.tituloInicio}{' '}
            <span className="text-gold-gradient font-bold">{oferta.tituloDestaque}</span>{' '}
            {oferta.tituloFim}
          </h2>
        </div>

        {/* Urgency Bar (Only renders if prazoOferta is populated) */}
        {oferta.prazoOferta && (
          <div className="mb-6 p-3 rounded-xl bg-[#2A1A30] text-[#E9D3A0] text-center font-dmsans text-sm font-bold tracking-wide border border-[#C9A35A] shadow-md animate-pulse">
            ⏳ OFERTA VÁLIDA ATÉ {oferta.prazoOferta}
          </div>
        )}

        {/* Main Pricing Card */}
        <div className="rounded-3xl bg-white/95 border-2 border-[#C9A35A] p-6 sm:p-8 shadow-2xl backdrop-blur-md relative overflow-hidden">
          {/* Top highlight ribbon */}
          <div className="absolute top-0 right-0 bg-gradient-to-l from-[#C9A35A] to-[#B8862B] text-white text-xs font-bold uppercase px-4 py-1.5 rounded-bl-xl tracking-wider shadow-sm">
            Acesso Completo
          </div>

          {/* Product Bundle Image */}
          <div className="w-full rounded-2xl overflow-hidden mb-6 border border-[#C9A35A]/30 shadow-md">
            <img
              src={oferta.mockup}
              alt="COCRIA Método Completo"
              loading="lazy"
              referrerPolicy="no-referrer"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Checklist of Included Items with Anchored Values */}
          <div className="space-y-3 mb-8 border-b border-[#EFE4D3] pb-6">
            {oferta.itensInclusos.map((item, index) => (
              <div
                key={index}
                className="flex items-start justify-between gap-3 text-sm sm:text-base font-dmsans"
              >
                <div className="flex items-start gap-2.5">
                  <span className="text-[#1F9D5B] font-bold text-lg leading-none shrink-0">
                    ✅
                  </span>
                  <span className="font-medium text-[#2A1A30] leading-snug">
                    {item.nome}
                  </span>
                </div>
                <span className="line-through text-[#2A1A30]/45 font-medium shrink-0 text-sm">
                  {item.valor}
                </span>
              </div>
            ))}
          </div>

          {/* Pricing Box */}
          <div className="text-center mb-8">
            <p className="text-sm uppercase tracking-wider text-[#2A1A30]/60 font-semibold mb-1">
              DE <span className="line-through text-red-500/70">{oferta.deValor}</span>
            </p>
            <p className="text-xs uppercase tracking-widest text-[#B8862B] font-bold mb-2">
              POR APENAS
            </p>

            <div className="flex items-baseline justify-center gap-1.5 my-2">
              <span className="text-xl sm:text-2xl font-bold font-fraunces text-[#2A1A30]">
                {oferta.parcelasTexto}
              </span>
              <span className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-fraunces tracking-tight text-[#1F9D5B] tabular-nums">
                {oferta.parcelasValorConfirmar}
              </span>
            </div>

            <p className="text-base sm:text-lg font-bold text-[#2A1A30] mt-1 font-dmsans">
              ou <span className="text-[#B8862B]">{oferta.aVistaValor}</span>
            </p>

            {/* Coffee Cup Daily Comparison */}
            <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EFE4D3]/70 border border-[#C9A35A]/40 text-xs sm:text-sm font-medium text-[#2A1A30]">
              <span>☕</span>
              <span>{oferta.comparativoCafe}</span>
            </div>
          </div>

          {/* Primary Action Button */}
          <CtaButton texto={oferta.cta} showMicroCopy={true} />

          {/* 3 Step Onboarding Guidance */}
          <div className="mt-8 pt-6 border-t border-[#EFE4D3] grid grid-cols-1 sm:grid-cols-3 gap-3 text-center text-xs sm:text-sm text-[#2A1A30]/80 font-dmsans">
            {oferta.etapas.map((etapa, idx) => (
              <div key={idx} className="flex flex-col items-center p-2 rounded-lg bg-[#FBF5EC]">
                <span className="text-xl mb-1">{etapa.icone}</span>
                <span className="font-semibold">{etapa.texto}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
