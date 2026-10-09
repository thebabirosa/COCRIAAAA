/**
 * Utilitário para rastreamento de eventos do Meta Pixel (Facebook Ads)
 * Pixel ID: 1075510062091118
 */

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export const trackInitiateCheckout = () => {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    try {
      window.fbq('track', 'InitiateCheckout', {
        content_name: 'COCRIA',
        value: 297,
        currency: 'BRL',
      });
    } catch (e) {
      console.warn('Erro ao disparar evento de checkout do Pixel:', e);
    }
  }
};

export const trackViewContent = () => {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    try {
      window.fbq('track', 'ViewContent', {
        content_name: 'COCRIA',
        value: 297,
        currency: 'BRL',
      });
    } catch (e) {
      console.warn('Erro ao disparar evento ViewContent do Pixel:', e);
    }
  }
};
