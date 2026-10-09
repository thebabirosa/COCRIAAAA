import React, { useState } from 'react';
import { ChevronDown, Check, X } from 'lucide-react';
import { cocriaContent } from './content/cocriaContent';
import { CtaButton } from './components/CtaButton';
import { HorizonDivider } from './components/HorizonDivider';
import { ImpactPhrase } from './components/ImpactPhrase';
import { IcebergGraphic } from './components/IcebergGraphic';
import { LockCard } from './components/LockCard';
import { LifestyleGallery } from './components/LifestyleGallery';
import { OfferSection } from './components/OfferSection';
import { FaqAccordion } from './components/FaqAccordion';
import { StickyMobileFooter } from './components/StickyMobileFooter';

export default function App() {
  const [selectedChecks, setSelectedChecks] = useState<number[]>([]);
  const [modulesOpen, setModulesOpen] = useState(false);

  const toggleCheck = (idx: number) => {
    setSelectedChecks((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const {
    hero,
    depoimentos,
    identifica,
    segredo,
    travas,
    sobreCocria,
    novaVida,
    entregaveis,
    garantia,
    escolha,
    autoridade,
    ultimoChamado,
    rodape,
  } = cocriaContent;

  return (
    <div className="min-w-full overflow-x-hidden font-dmsans bg-[#120C17] text-[#F6EFE6] selection:bg-[#C9A35A]/30 selection:text-white">
      {/* ======================================================== */}
      {/* BLOCO 1 — HERO (Fundo: Imagem de Luxo e Celebração)      */}
      {/* ======================================================== */}
      <header className="relative min-h-[92vh] sm:min-h-[88vh] flex items-center justify-center overflow-hidden bg-[#120C17]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center md:bg-right-top transition-all duration-700 pointer-events-none scale-100"
          style={{
            backgroundImage: `url('${hero.bgImage}')`,
          }}
        />

        {/* Cinematic Scrim & Vignette Overlays for maximum legibility */}
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#120C17] via-[#120C17]/85 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[#120C17]/40 md:bg-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-[#120C17] to-transparent pointer-events-none" />

        {/* Content Container (similar to reference image with prominent left-aligned copy) */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-24 flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:max-w-xl lg:max-w-2xl text-left">
            {/* Small Brand / Pre-tag badge */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="font-fraunces text-sm font-bold tracking-widest text-[#E9D3A0] uppercase">
                COCRIA
              </span>
              <span className="w-8 h-[1px] bg-[#C9A35A]/60" />
              <span className="text-xs uppercase tracking-wider text-[#F2C4A0]/80 font-medium">
                O Código da Cocriação
              </span>
            </div>

            {/* Título Principal */}
            <h1 className="font-fraunces text-2xl sm:text-4xl lg:text-5xl font-semibold uppercase tracking-wide leading-[1.15] text-[#FFF6E5] mb-5">
              <span>{hero.tituloLinha1}</span>{' '}
              <span className="text-gold-light-gradient font-bold italic drop-shadow-sm block sm:inline">
                {hero.tituloLinha2}
              </span>
            </h1>

            {/* Subtítulo */}
            <p className="text-base sm:text-lg text-[#F6EFE6]/90 mb-8 max-w-xl leading-relaxed font-normal">
              Em 21 dias, você vai descobrir e destravar as{' '}
              <strong className="text-[#E9D3A0] font-bold">5 travas invisíveis</strong> que fazem o
              dinheiro entrar e sumir, e ativar a sua{' '}
              <strong className="text-[#E9D3A0] font-bold">mente próspera</strong>, mesmo que hoje você
              trabalhe muito e nunca sobre nada.
            </p>

            {/* Botão de Compra com brilho e micro-garantias */}
            <div className="w-full max-w-md">
              <CtaButton
                texto={hero.cta}
                showMicroCopy={true}
                align="left"
              />
            </div>
          </div>

          {/* Right side spacer for desktop layout so celebration background shines through */}
          <div className="hidden md:block md:w-1/3 lg:w-2/5" aria-hidden="true" />
        </div>
      </header>

      <HorizonDivider tone="night" />

      {/* ======================================================== */}
      {/* BLOCO 2 — DEPOIMENTOS (Aparece SOMENTE se houver dados)   */}
      {/* ======================================================== */}
      {depoimentos && depoimentos.length > 0 && (
        <section className="py-12 px-4 max-w-4xl mx-auto text-center">
          <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold uppercase tracking-wide text-gold-light-gradient mb-8">
            VEJA O QUE ESTÃO FALANDO DO COCRIA
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {depoimentos.map((dep) => (
              <div
                key={dep.id}
                className="p-5 rounded-2xl bg-[#2A1A30] border border-[#C9A35A]/30 text-left"
              >
                {dep.printUrl && (
                  <img
                    src={dep.printUrl}
                    alt={dep.author}
                    className="w-full rounded-lg mb-3"
                  />
                )}
                {dep.quote && (
                  <p className="text-sm italic text-[#F6EFE6]">“{dep.quote}”</p>
                )}
                <span className="block mt-2 font-bold text-xs text-[#E9D3A0]">
                  — {dep.author}
                </span>
              </div>
            ))}
          </div>
          <HorizonDivider tone="night" />
        </section>
      )}

      {/* ======================================================== */}
      {/* BLOCO 3 — VOCÊ SE IDENTIFICA? (Fundo: Ameixa #2A1A30)    */}
      {/* ======================================================== */}
      <section className="py-16 sm:py-20 px-4 bg-gradient-to-b from-[#120C17] via-[#2A1A30] to-[#120C17]">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-fraunces text-2xl sm:text-3xl md:text-4xl font-semibold uppercase tracking-wide leading-tight text-[#FFF6E5]">
              VOCÊ SE IDENTIFICA COM{' '}
              <span className="text-gold-gradient font-bold">ALGUMA DESSAS?</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#E9D3A0]/70 mt-2">
              (Toque nos itens que você já sentiu na pele)
            </p>
          </div>

          {/* Checklist interativo */}
          <div className="space-y-3.5 mb-8">
            {identifica.items.map((item, idx) => {
              const isChecked = selectedChecks.includes(idx);
              return (
                <div
                  key={idx}
                  onClick={() => toggleCheck(idx)}
                  className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 cursor-pointer select-none ${
                    isChecked
                      ? 'bg-[#C9A35A]/20 border-[#C9A35A] shadow-[0_0_15px_rgba(201,163,90,0.2)]'
                      : 'bg-[#120C17]/80 border-[#C9A35A]/20 hover:border-[#C9A35A]/50'
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 border transition-all ${
                      isChecked
                        ? 'bg-[#1F9D5B] border-[#1F9D5B] text-white'
                        : 'bg-[#2A1A30] border-[#C9A35A]/40 text-[#E9D3A0]'
                    }`}
                  >
                    {isChecked ? <Check className="w-5 h-5" /> : <span className="text-base">{item.icone}</span>}
                  </div>
                  <p className="font-dmsans text-base sm:text-lg text-[#F6EFE6] font-medium leading-snug">
                    {item.texto}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Frase de Impacto */}
          <ImpactPhrase
            prefix={identifica.fraseImpactoParte1}
            highlight={identifica.fraseImpactoDestaque}
            tone="night"
          />
        </div>
      </section>

      <HorizonDivider tone="night" />

      {/* ======================================================== */}
      {/* BLOCO 4 — O SEGREDO (Fundo: Noite + Iceberg SVG)         */}
      {/* ======================================================== */}
      <section className="py-16 sm:py-20 px-4 max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="font-fraunces text-2xl sm:text-3xl md:text-4xl font-semibold uppercase tracking-wide leading-tight text-[#FFF6E5]">
            {segredo.tituloInicio}{' '}
            <span className="text-gold-light-gradient font-bold italic">
              {segredo.tituloDestaque}
            </span>
          </h2>
        </div>

        {/* Iceberg Ilustrado */}
        <IcebergGraphic />

        {/* Frases da infância */}
        <div className="my-8 p-5 sm:p-6 rounded-2xl bg-[#2A1A30]/60 border border-[#C9A35A]/30 text-center max-w-xl mx-auto">
          <p className="text-xs sm:text-sm uppercase tracking-wider text-[#E9D3A0] font-semibold mb-3">
            Desde criança, você ouviu frases como:
          </p>
          <div className="space-y-2">
            {segredo.frasesOrigem.map((frase, i) => (
              <p
                key={i}
                className="font-fraunces italic text-lg sm:text-xl text-[#F2C4A0]"
              >
                {frase}
              </p>
            ))}
          </div>
        </div>

        {/* Explicação curta */}
        <div className="max-w-lg mx-auto text-center space-y-2 text-base sm:text-lg text-[#F6EFE6]/90 font-medium">
          {segredo.explicacao.map((linha, idx) => (
            <p key={idx}>{linha}</p>
          ))}
        </div>

        {/* Frase de Impacto */}
        <ImpactPhrase
          prefix={segredo.fraseImpacto1}
          highlight={segredo.fraseImpacto2}
          tone="night"
        />

        {/* 📌 Em resumo */}
        <div className="max-w-md mx-auto my-6 p-4 rounded-xl bg-[#2A1A30] border-l-2 border-[#C9A35A] text-center shadow-md">
          <p className="text-xs uppercase tracking-widest text-[#E9D3A0] font-bold mb-1">
            📌 EM RESUMO
          </p>
          <p className="font-dmsans text-sm sm:text-base text-[#F6EFE6] font-medium">
            {segredo.resumo}
          </p>
        </div>

        {/* Botão de Compra */}
        <CtaButton texto={segredo.cta} showMicroCopy={true} />
      </section>

      <HorizonDivider tone="night" />

      {/* ======================================================== */}
      {/* BLOCO 5 — AS 5 TRAVAS INVISÍVEIS DO DINHEIRO             */}
      {/* ======================================================== */}
      <section className="py-16 sm:py-20 px-4 bg-gradient-to-b from-[#120C17] via-[#2A1A30]/90 to-[#2A1A30]">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-fraunces text-2xl sm:text-3xl md:text-4xl font-semibold uppercase tracking-wide leading-tight text-[#FFF6E5]">
              {travas.tituloInicio}{' '}
              <span className="text-[#D9776B] font-bold italic">
                {travas.tituloDestaque}
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-[#E9D3A0]/70 mt-2">
              (Os cadeados se abrem conforme você avança)
            </p>
          </div>

          {/* 5 Cards Numerados com Animação de Cadeado */}
          <div className="space-y-4 mb-10">
            {travas.lista.map((trava, idx) => (
              <LockCard
                key={idx}
                index={idx}
                numero={trava.numero}
                nome={trava.nome}
                pensamento={trava.pensamento}
                efeito={trava.efeito}
              />
            ))}
          </div>

          {/* Frase de Impacto */}
          <ImpactPhrase
            highlight={travas.fraseImpacto}
            tone="night"
          />

          {/* Botão de Compra */}
          <CtaButton texto={travas.cta} showMicroCopy={true} />
        </div>
      </section>

      {/* ======================================================== */}
      {/* BLOCO 6 — O QUE É O COCRIA (Ameixa → Crepúsculo #7A4A63) */}
      {/* ======================================================== */}
      <section className="py-16 sm:py-24 px-4 bg-gradient-to-b from-[#2A1A30] via-[#5C344E] to-[#7A4A63] text-[#F6EFE6]">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="font-fraunces text-2xl sm:text-3xl md:text-4xl font-semibold uppercase tracking-wide leading-tight text-[#FFF6E5]">
              {sobreCocria.tituloInicio}{' '}
              <span className="text-gold-light-gradient font-bold italic">
                {sobreCocria.tituloDestaque}
              </span>
            </h2>
          </div>

          {/* Product Mockup Image */}
          <div className="w-full max-w-xl mx-auto rounded-2xl overflow-hidden border-2 border-[#C9A35A]/50 shadow-2xl mb-8 group bg-[#120C17]/50">
            <img
              src={sobreCocria.mockup}
              alt={sobreCocria.mockupAlt}
              referrerPolicy="no-referrer"
              className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
            />
          </div>

          {/* 2 frases de apresentação */}
          <p className="text-center text-lg sm:text-xl max-w-xl mx-auto mb-10 leading-relaxed font-medium text-[#FFF6E5]">
            {sobreCocria.descricao}
          </p>

          {/* 4 Chaves em Grid 2x2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {sobreCocria.chaves.map((chave, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#2A1A30]/80 border border-[#C9A35A]/40 shadow-md flex items-start gap-3.5"
              >
                <div className="w-10 h-10 rounded-full bg-[#C9A35A]/20 border border-[#C9A35A]/50 flex items-center justify-center text-xl shrink-0">
                  🔑
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-[#E9D3A0] font-semibold">
                    CHAVE {chave.numero}
                  </span>
                  <h3 className="font-fraunces text-lg font-bold text-[#FFF6E5] uppercase mt-0.5 mb-1">
                    {chave.nome}
                  </h3>
                  <p className="text-sm text-[#F6EFE6]/85 font-normal">
                    {chave.descricao}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Checklist "No COCRIA, você vai:" */}
          <div className="p-6 rounded-2xl bg-[#120C17]/60 border border-[#C9A35A]/30 max-w-xl mx-auto mb-8 shadow-inner">
            <h3 className="font-fraunces text-lg sm:text-xl font-bold uppercase text-[#E9D3A0] mb-4 text-center">
              No COCRIA, você vai:
            </h3>
            <div className="space-y-2.5">
              {sobreCocria.beneficios.map((beneficio, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-base text-[#1F9D5B] font-bold">✅</span>
                  <span className="text-sm sm:text-base font-medium text-[#F6EFE6]">
                    {beneficio}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Frases de Impacto */}
          <ImpactPhrase
            prefix={sobreCocria.fraseImpacto1}
            highlight={sobreCocria.fraseImpacto2}
            tone="night"
          />

          {/* Acordeão dos 10 Módulos (Fechado por padrão) */}
          <div className="max-w-xl mx-auto my-8 border border-[#C9A35A]/40 rounded-2xl overflow-hidden bg-[#2A1A30]/80">
            <button
              onClick={() => setModulesOpen(!modulesOpen)}
              className="w-full p-4 sm:p-5 flex items-center justify-between gap-3 text-left font-fraunces font-bold text-sm sm:text-base uppercase tracking-wider text-[#E9D3A0] hover:bg-[#C9A35A]/10 transition-colors cursor-pointer"
            >
              <span>📚 VER OS 10 MÓDULOS DO TREINAMENTO</span>
              <ChevronDown
                className={`w-5 h-5 text-[#E9D3A0] transition-transform duration-300 ${
                  modulesOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {modulesOpen && (
              <div className="p-5 pt-2 border-t border-[#C9A35A]/30 grid grid-cols-1 sm:grid-cols-2 gap-3 bg-[#120C17]/50 text-sm">
                {sobreCocria.modulos.map((mod, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-[#F6EFE6]">
                    <span className="text-xs font-bold text-[#C9A35A] tabular-nums">
                      {mod.numero}
                    </span>
                    <span>{mod.titulo}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Botão de Compra */}
          <CtaButton texto={sobreCocria.cta} showMicroCopy={true} />
        </div>
      </section>

      {/* ======================================================== */}
      {/* BLOCO 7 — IMAGINE A SUA NOVA VIDA (Pêssego Dourado)      */}
      {/* ======================================================== */}
      <section className="py-16 sm:py-24 px-4 bg-gradient-to-b from-[#7A4A63] via-[#B57C89] to-[#F2C4A0] text-[#120C17] overflow-hidden">
        <div className="max-w-5xl mx-auto text-center">
          {/* Título Dourado */}
          <div className="mb-6">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#2A1A30]/80 font-dmsans block mb-2">
              SEU NOVO PADRÃO
            </span>
            <h2 className="font-fraunces text-2xl sm:text-3xl md:text-5xl font-semibold uppercase tracking-wide leading-tight text-[#120C17]">
              {novaVida.tituloInicio}{' '}
              <span className="text-[#874E1A] font-extrabold italic">
                {novaVida.tituloDestaque}
              </span>
            </h2>
          </div>

          {/* Galeria de Fotos de Estilo de Vida */}
          <LifestyleGallery />

          {/* Frase de Impacto */}
          <div className="my-8 max-w-xl mx-auto">
            <p className="font-dmsans text-base sm:text-lg text-[#2A1A30]/90 mb-2 font-medium">
              {novaVida.fraseImpacto1}
            </p>
            <p className="font-fraunces italic text-2xl sm:text-3xl text-[#120C17] font-bold">
              {novaVida.fraseImpacto2}
            </p>
          </div>

          {/* Botão de Compra */}
          <CtaButton texto={novaVida.cta} showMicroCopy={true} />
        </div>
      </section>

      {/* ======================================================== */}
      {/* BLOCO 8 — TUDO O QUE VOCÊ VAI RECEBER (Amanhecer #FBF5EC) */}
      {/* ======================================================== */}
      <section className="py-16 sm:py-20 px-4 bg-[#FBF5EC] text-[#2A1A30]">
        <div className="max-w-3xl mx-auto">
          {/* Título */}
          <div className="text-center mb-10">
            <h2 className="font-fraunces text-2xl sm:text-3xl md:text-4xl font-semibold uppercase tracking-wide leading-tight text-[#2A1A30]">
              {entregaveis.tituloInicio}{' '}
              <span className="text-gold-gradient font-bold">{entregaveis.tituloDestaque}</span>
            </h2>
          </div>

          {/* 4 Entregáveis Principais em Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {entregaveis.itensPrincipais.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-[#C9A35A]/35 shadow-md flex items-start gap-3.5 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-[#EFE4D3] border border-[#C9A35A]/40 flex items-center justify-center text-2xl shrink-0">
                  {item.icone}
                </div>
                <div>
                  <h3 className="font-fraunces text-base sm:text-lg font-bold text-[#2A1A30] uppercase mb-1">
                    {item.titulo}
                  </h3>
                  <p className="text-sm text-[#2A1A30]/80 font-normal">
                    {item.detalhes}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Seção 4 Bônus Exclusivos */}
          <div className="mt-8 pt-8 border-t border-[#EFE4D3]">
            <div className="text-center mb-6">
              <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-[#C9A35A]/20 border border-[#C9A35A] text-[#B8862B] text-xs font-bold uppercase tracking-wider mb-2">
                🎁 PRESENTES ESPECIAIS
              </span>
              <h3 className="font-fraunces text-xl sm:text-2xl font-bold uppercase text-[#2A1A30]">
                {entregaveis.tituloBonus}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {entregaveis.bonus.map((b, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#EFE4D3]/60 border border-[#C9A35A]/40 shadow-sm relative overflow-hidden"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl">{b.icone}</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#B8862B] text-white text-[11px] font-bold uppercase tracking-wider">
                      BÔNUS {b.numero}
                    </span>
                  </div>
                  <h4 className="font-fraunces text-base font-bold text-[#2A1A30] uppercase mb-1">
                    {b.nome}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#2A1A30]/80 mb-3">
                    {b.descricao}
                  </p>
                  <div className="flex items-baseline gap-2 pt-2 border-t border-[#C9A35A]/20 text-xs font-semibold">
                    <span className="line-through text-[#2A1A30]/50">
                      {b.valorOriginal}
                    </span>
                    <span className="text-[#1F9D5B] font-bold text-sm">
                      por R$0
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* BLOCO 9 — A OFERTA (Fundo: Amanhecer com brilho)          */}
      {/* ======================================================== */}
      <OfferSection />

      {/* ======================================================== */}
      {/* BLOCO 10 — GARANTIA (Fundo: Areia #EFE4D3)               */}
      {/* ======================================================== */}
      <section className="py-16 sm:py-20 px-4 bg-[#EFE4D3] text-[#2A1A30]">
        <div className="max-w-xl mx-auto text-center">
          {/* Selo 7 Dias Dourado Grande */}
          <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full bg-white border-4 border-[#C9A35A] shadow-xl flex flex-col items-center justify-center mb-6">
            <span className="text-2xl sm:text-3xl">🛡</span>
            <span className="font-fraunces font-bold text-xl sm:text-2xl text-[#B8862B] leading-none mt-0.5">
              7 DIAS
            </span>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#2A1A30]/70">
              Garantia
            </span>
          </div>

          <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold uppercase tracking-wide text-[#2A1A30] mb-6">
            {garantia.tituloInicio}{' '}
            <span className="text-[#B8862B] font-bold">{garantia.tituloDestaque}</span>
          </h2>

          <div className="space-y-2 text-base sm:text-lg text-[#2A1A30]/85 font-medium mb-6">
            {garantia.passos.map((passo, idx) => (
              <p key={idx}>{passo}</p>
            ))}
          </div>

          {/* Frase de Impacto */}
          <div className="my-6 p-4 rounded-xl bg-white/70 border border-[#C9A35A]/40 inline-block">
            <p className="font-fraunces italic text-lg sm:text-xl text-[#2A1A30]">
              {garantia.fraseImpacto1}{' '}
              <strong className="text-[#B8862B] font-bold not-italic">
                {garantia.fraseImpacto2}
              </strong>
            </p>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* BLOCO 11 — A ESCOLHA (Fundo: Amanhecer #FBF5EC)          */}
      {/* ======================================================== */}
      <section className="py-16 sm:py-24 px-4 bg-[#FBF5EC] text-[#2A1A30]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-fraunces text-2xl sm:text-3xl md:text-4xl font-semibold uppercase tracking-wide leading-tight text-[#2A1A30]">
              {escolha.tituloInicio}{' '}
              <span className="text-gold-gradient font-bold">{escolha.tituloDestaque}</span>
            </h2>
          </div>

          {/* 2 Cards de Escolha */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 items-stretch">
            {/* Card Negativo (Cinza) */}
            <div className="p-6 rounded-2xl bg-neutral-200/80 border border-neutral-300 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-fraunces text-lg font-bold uppercase text-neutral-700 mb-4 flex items-center gap-2">
                  <X className="w-5 h-5 text-red-500" />
                  <span>{escolha.opcaoNegativa.titulo}</span>
                </h3>
                <div className="space-y-3">
                  {escolha.opcaoNegativa.itens.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm sm:text-base text-neutral-700 font-medium">
                      <span className="text-red-500 font-bold shrink-0">❌</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-300 text-xs text-neutral-500 italic">
                A mesma rotina, os mesmos apertos.
              </div>
            </div>

            {/* Card Positivo (Dourado com Botão) */}
            <div className="p-6 rounded-2xl bg-white border-2 border-[#C9A35A] shadow-xl flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#C9A35A] text-white text-[11px] font-bold uppercase px-3 py-1 rounded-bl-lg">
                Decisão Próspera
              </div>
              <div>
                <h3 className="font-fraunces text-lg font-bold uppercase text-[#2A1A30] mb-4 flex items-center gap-2">
                  <Check className="w-5 h-5 text-[#1F9D5B]" />
                  <span>{escolha.opcaoPositiva.titulo}</span>
                </h3>
                <div className="space-y-3">
                  {escolha.opcaoPositiva.itens.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm sm:text-base text-[#2A1A30] font-medium">
                      <span className="text-[#1F9D5B] font-bold shrink-0">✅</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#EFE4D3]">
                <CtaButton texto={escolha.cta} showMicroCopy={false} variant="compact" />
              </div>
            </div>
          </div>

          {/* Frase de Impacto */}
          <ImpactPhrase
            prefix={escolha.fraseImpacto1}
            highlight={escolha.fraseImpacto2}
            tone="light"
          />
        </div>
      </section>

      {/* ======================================================== */}
      {/* BLOCO 12 — QUEM É MARIANA MOREIRA? (Fundo: Amanhecer)     */}
      {/* ======================================================== */}
      <section className="py-16 sm:py-20 px-4 bg-[#FBF5EC] border-t border-[#EFE4D3] text-[#2A1A30]">
        <div className="max-w-2xl mx-auto text-center flex flex-col items-center">
          <h2 className="font-fraunces text-2xl sm:text-3xl md:text-4xl font-semibold uppercase tracking-wide leading-tight text-[#2A1A30] mb-6">
            {autoridade.tituloInicio}{' '}
            <span className="text-gold-gradient font-bold">{autoridade.tituloDestaque}</span>
          </h2>

          {/* Foto da Mariana em Arco Grande */}
          <div className="w-48 sm:w-56 aspect-[3/4] rounded-t-full rounded-b-2xl overflow-hidden border-2 border-[#C9A35A] shadow-xl mb-6 bg-white">
            <img
              src={autoridade.foto}
              alt={autoridade.fotoAlt}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* História Curta */}
          <div className="max-w-xl mx-auto space-y-2.5 text-base sm:text-lg text-[#2A1A30]/90 font-medium leading-relaxed mb-6">
            {autoridade.historia.map((linha, idx) => (
              <p key={idx}>{linha}</p>
            ))}
          </div>

          {/* 3 Números (Aparecem SOMENTE se houver dados reais) */}
          {autoridade.metricasReais && autoridade.metricasReais.length > 0 && (
            <div className="grid grid-cols-3 gap-3 my-6 w-full max-w-md">
              {autoridade.metricasReais.map((m, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-white border border-[#C9A35A]/30 text-center">
                  <span className="text-xl mb-1 block">{m.icon}</span>
                  <span className="font-fraunces font-bold text-lg text-[#B8862B] block">{m.value}</span>
                  <span className="text-xs text-[#2A1A30]/70 font-dmsans">{m.label}</span>
                </div>
              ))}
            </div>
          )}

          {/* Frase Assinada */}
          <div className="mt-4 pt-4 border-t border-[#EFE4D3]">
            <p className="font-fraunces italic text-xl sm:text-2xl text-[#B8862B] font-semibold">
              {autoridade.fraseAssinada}
            </p>
            <span className="block text-xs uppercase tracking-wider text-[#2A1A30]/60 mt-1 font-bold">
              — {autoridade.assinatura}
            </span>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* BLOCO 13 — PERGUNTAS FREQUENTES (FAQ)                    */}
      {/* ======================================================== */}
      <section className="py-16 sm:py-20 px-4 bg-[#FBF5EC] border-t border-[#EFE4D3] text-[#2A1A30]">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-fraunces text-2xl sm:text-3xl md:text-4xl font-semibold uppercase tracking-wide leading-tight text-[#2A1A30]">
              {cocriaContent.faq.tituloInicio}{' '}
              <span className="text-gold-gradient font-bold">{cocriaContent.faq.tituloDestaque}</span>
            </h2>
          </div>

          <FaqAccordion />
        </div>
      </section>

      {/* ======================================================== */}
      {/* BLOCO 14 — ÚLTIMO CHAMADO (Amanhecer Dourado Luminoso)   */}
      {/* ======================================================== */}
      <section className="py-16 sm:py-24 px-4 bg-gradient-to-b from-[#FBF5EC] via-[#FFF3DC] to-[#E9D3A0] text-[#120C17]">
        <div className="max-w-xl mx-auto text-center flex flex-col items-center">
          <h2 className="font-fraunces text-2xl sm:text-3xl md:text-4xl font-semibold uppercase tracking-wide leading-tight text-[#120C17] mb-6">
            {ultimoChamado.tituloInicio}{' '}
            <span className="text-[#874E1A] font-extrabold italic">
              {ultimoChamado.tituloDestaque}
            </span>
          </h2>

          {/* Foto em Arco */}
          <div className="w-44 sm:w-52 aspect-[3/4] rounded-t-full rounded-b-2xl overflow-hidden border-2 border-[#B8862B] shadow-2xl mb-6 bg-white">
            <img
              src={ultimoChamado.foto}
              alt={ultimoChamado.fotoAlt}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-1.5 text-base sm:text-lg text-[#120C17]/90 font-medium mb-8">
            {ultimoChamado.frases.map((frase, idx) => (
              <p key={idx}>{frase}</p>
            ))}
          </div>

          {/* Botão Final */}
          <CtaButton texto={ultimoChamado.cta} showMicroCopy={true} />
        </div>
      </section>

      {/* ======================================================== */}
      {/* RODAPÉ (Fundo: Noite #120C17)                            */}
      {/* ======================================================== */}
      <footer className="py-12 px-4 bg-[#120C17] border-t border-[#C9A35A]/30 text-[#F6EFE6]/70 text-center text-xs sm:text-sm">
        <div className="max-w-2xl mx-auto space-y-4">
          <p className="font-fraunces font-bold text-sm sm:text-base text-[#FFF6E5]">
            {rodape.textoPrincipal}
          </p>
          <p className="text-xs text-[#E9D3A0]/60">
            {rodape.cnpjTexto}
          </p>

          <div className="flex items-center justify-center gap-4 text-xs">
            {rodape.links.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                className="hover:text-[#E9D3A0] underline transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <p className="text-[11px] leading-relaxed text-[#F6EFE6]/50 max-w-lg mx-auto pt-4 border-t border-white/10">
            {rodape.avisoLegal}
          </p>
        </div>
      </footer>

      {/* CTA Fixo no Rodapé do Celular (< 15% Mobile Viewport) */}
      <StickyMobileFooter />
    </div>
  );
}
