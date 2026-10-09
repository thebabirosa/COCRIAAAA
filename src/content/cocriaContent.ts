/**
 * COCRIA — O Código da Cocriação
 * Conteúdo oficial da landing page de vendas.
 * 
 * Todos os textos e variáveis editáveis estão centralizados neste arquivo.
 * Trechos marcados com [CONFIRMAR] devem ser atualizados quando houver dados reais.
 */

import heroImg from '../assets/images/foto_hero_mariana_1791554688777.jpg';
import autoridadeImg from '../assets/images/foto_autoridade_mariana_1791554699756.jpg';
import fechamentoImg from '../assets/images/foto_fechamento_mariana_1791554719489.jpg';
import mockupImg from '../assets/images/mockup_cocria_bundle_1791554730293.jpg';

import lifestyleExtrato from '../assets/images/lifestyle_extrato_1791554753255.jpg';
import lifestyleJantar from '../assets/images/lifestyle_jantar_1791554764106.jpg';
import lifestyleMae from '../assets/images/lifestyle_presente_mae_1791554776453.jpg';
import lifestyleViagem from '../assets/images/lifestyle_viagem_1791554801045.jpg';
import lifestyleLoja from '../assets/images/lifestyle_loja_1791554810560.jpg';
import lifestyleConfiante from '../assets/images/lifestyle_confiante_1791554819434.jpg';

export interface Testimonial {
  id: string;
  author: string;
  printUrl?: string;
  quote?: string;
  role?: string;
}

export interface MetricStat {
  icon: string;
  value: string;
  label: string;
}

export const cocriaContent = {
  // Configurações Gerais
  checkoutUrl: 'https://pay.kiwify.com.br/TMInMxQ',
  metaPixelId: '1075510062091118',
  precoAVista: 297,
  moeda: 'BRL',
  nomeProduto: 'COCRIA',

  // Bloco 1 — Hero
  hero: {
    bgImage: 'https://github.com/thebabirosa/cocria/blob/main/Luxo%20e%20Celebrac%CC%A7a%CC%83o%20ao%20Entardecer.png?raw=true',
    tituloLinha1: 'PARE DE SE PREOCUPAR COM DINHEIRO',
    tituloLinha2: 'E COMECE A VIVER A VIDA DOS SEUS SONHOS',
    subtituloTexto: 'Em 21 dias, você vai descobrir e destravar as 5 travas invisíveis que fazem o dinheiro entrar e sumir, e ativar a sua mente próspera, mesmo que hoje você trabalhe muito e nunca sobre nada.',
    cta: 'QUERO DESTRAVAR MEU DINHEIRO',
    garantias: '🔒 Compra segura · ⚡ Acesso imediato · 🛡 7 dias de garantia',
  },

  // Bloco 2 — Depoimentos
  // REGRA: Se a lista estiver vazia, o bloco não aparece. Nunca crie depoimentos de exemplo visíveis.
  depoimentos: [] as Testimonial[],

  // Bloco 3 — Você se identifica?
  identifica: {
    titulo: 'VOCÊ SE IDENTIFICA COM ALGUMA DESSAS?',
    items: [
      { icone: '💸', texto: 'Trabalho muito e no fim do mês não sobra nada.' },
      { icone: '🔁', texto: 'Quando o dinheiro entra, logo aparece um gasto.' },
      { icone: '😣', texto: 'Sinto culpa quando gasto comigo.' },
      { icone: '👀', texto: 'Vejo os outros prosperando e penso: "e eu?"' },
      { icone: '👨‍👩‍👧', texto: 'Na minha família, sempre faltou dinheiro.' },
      { icone: '🤐', texto: 'No fundo, acho que não mereço mais.' },
    ],
    fraseImpactoParte1: 'Se você marcou pelo menos uma, preste atenção.',
    fraseImpactoDestaque: 'O problema não é você. São as suas travas.',
  },

  // Bloco 4 — O Segredo (Iceberg)
  segredo: {
    tituloInicio: 'NÃO É FALTA DE ESFORÇO. É O QUE ESTÁ',
    tituloDestaque: 'ESCONDIDO.',
    topoIceberg: {
      emoji: '💸',
      titulo: 'O QUE VOCÊ VÊ',
      descricao: 'o dinheiro que entra e some.',
    },
    fundoIceberg: {
      emoji: '🔒',
      titulo: 'O QUE VOCÊ NÃO VÊ',
      descricao: 'as travas que você aprendeu sem perceber.',
    },
    frasesOrigem: [
      '“Dinheiro não dá em árvore.”',
      '“Rico não presta.”',
      '“Isso não é pra gente.”',
    ],
    explicacao: [
      'Essas frases ficaram gravadas na sua mente.',
      'E viraram travas.',
      'Hoje, elas decidem o que acontece com o seu dinheiro.',
      'Sem você perceber.',
    ],
    fraseImpacto1: 'Você não precisa trabalhar mais.',
    fraseImpacto2: 'Você precisa destravar.',
    resumo: 'Enquanto as travas estiverem aí, o dinheiro vai continuar indo embora.',
    cta: 'QUERO DESCOBRIR MINHAS TRAVAS',
  },

  // Bloco 5 — As 5 Travas Invisíveis do Dinheiro
  travas: {
    tituloInicio: 'AS 5 TRAVAS QUE FAZEM O SEU DINHEIRO',
    tituloDestaque: 'SUMIR',
    lista: [
      {
        numero: '01',
        nome: 'A TRAVA DA FAMÍLIA',
        pensamento: '“Na minha família sempre foi assim.”',
        efeito: 'Você repete a história de dinheiro que viu em casa.',
      },
      {
        numero: '02',
        nome: 'A TRAVA DO MERECIMENTO',
        pensamento: '“Será que eu mereço ter mais?”',
        efeito: 'Quando o dinheiro chega, algo dentro de você empurra ele pra longe.',
      },
      {
        numero: '03',
        nome: 'A TRAVA DA CULPA',
        pensamento: '“Gastar comigo é egoísmo.”',
        efeito: 'Você trabalha, mas não se permite aproveitar.',
      },
      {
        numero: '04',
        nome: 'A TRAVA DO MEDO',
        pensamento: '“E se faltar?”',
        efeito: 'Você vive no modo sobrevivência, e não consegue crescer.',
      },
      {
        numero: '05',
        nome: 'A TRAVA DA AUTOSSABOTAGEM',
        pensamento: '“Eu começo e sempre paro.”',
        efeito: 'Quando a vida melhora, você mesma volta pro mesmo lugar.',
      },
    ],
    fraseImpacto: 'No COCRIA, você vai abrir uma por uma.',
    cta: 'QUERO ABRIR MINHAS 5 TRAVAS',
  },

  // Bloco 6 — O que é o COCRIA
  sobreCocria: {
    tituloInicio: 'O QUE É O',
    tituloDestaque: 'COCRIA?',
    descricao: 'O COCRIA — O Código da Cocriação é um passo a passo de 21 dias para você destravar o seu dinheiro de dentro pra fora. São 4 chaves. Uma de cada vez.',
    mockup: mockupImg,
    mockupAlt: 'Treinamento COCRIA em tablet e caderno de prática',
    chaves: [
      {
        numero: '1',
        nome: 'DESPERTAR',
        descricao: 'Descubra o que trava o seu dinheiro.',
      },
      {
        numero: '2',
        nome: 'REPROGRAMAR',
        descricao: 'Troque as frases antigas por novas.',
      },
      {
        numero: '3',
        nome: 'ALINHAR',
        descricao: 'Coloque mente e coração no mesmo lugar.',
      },
      {
        numero: '4',
        nome: 'MATERIALIZAR',
        descricao: 'Transforme tudo em atitude, todo dia.',
      },
    ],
    beneficios: [
      'Descobrir de onde vêm as suas travas',
      'Parar de se sabotar sem perceber',
      'Gastar com você sem culpa',
      'Sentir que merece prosperar',
      'Fazer o dinheiro ficar, e não fugir',
      'Ativar a sua mente próspera',
    ],
    fraseImpacto1: 'Você não precisa de mais informação.',
    fraseImpacto2: 'Você precisa de um caminho.',
    modulos: [
      { numero: '01', titulo: 'O Ponto Zero' },
      { numero: '02', titulo: 'A Vida que Você Decide Criar' },
      { numero: '03', titulo: 'Os Padrões da Realidade Atual' },
      { numero: '04', titulo: 'Reprogramação Mental' },
      { numero: '05', titulo: 'Sua Nova Versão' },
      { numero: '06', titulo: 'O Código da Cocriação' },
      { numero: '07', titulo: 'Prosperidade e Dinheiro' },
      { numero: '08', titulo: 'Relacionamentos' },
      { numero: '09', titulo: 'Corpo, Energia e Bem-estar' },
      { numero: '10', titulo: 'Materialização' },
    ],
    cta: 'QUERO ENTRAR NO COCRIA',
  },

  // Bloco 7 — Imagine a sua Nova Vida (Galeria Luxuosa)
  novaVida: {
    tituloInicio: 'IMAGINE ACORDAR E VER O DINHEIRO',
    tituloDestaque: 'SOBRANDO',
    cards: [
      {
        id: '1',
        icone: '📱',
        frase: 'Abrir o extrato e sorrir.',
        foto: lifestyleExtrato,
        alt: 'Mulher sorrindo olhando o extrato bancário no celular',
      },
      {
        id: '2',
        icone: '🥂',
        frase: '“Deixa que hoje eu pago.”',
        foto: lifestyleJantar,
        alt: 'Jantar em família com ela pedindo a conta tranquilamente',
      },
      {
        id: '3',
        icone: '🎁',
        frase: 'Dar pra sua mãe o que ela nunca teve.',
        foto: lifestyleMae,
        alt: 'Entregando um presente especial e abraçando a mãe',
      },
      {
        id: '4',
        icone: '✈️',
        frase: 'Viajar sem olhar o preço.',
        foto: lifestyleViagem,
        alt: 'Relaxando na varanda de hotel com vista paradisíaca para o mar',
      },
      {
        id: '5',
        icone: '👗',
        frase: 'Comprar porque você quer.',
        foto: lifestyleLoja,
        alt: 'Experimentando um vestido maravilhoso numa loja bonita',
      },
      {
        id: '6',
        icone: '👑',
        frase: 'Ser a mulher que venceu.',
        foto: lifestyleConfiante,
        alt: 'Mulher elegante e confiante entrando num lugar sofisticado',
      },
    ],
    fraseImpacto1: 'Aquela pessoa que você olha e pensa “como ela consegue?”…',
    fraseImpacto2: 'Agora pode ser você.',
    cta: 'QUERO VIVER ESSA NOVA REALIDADE',
  },

  // Bloco 8 — Tudo o que Você vai Receber
  entregaveis: {
    tituloInicio: 'VEJA TUDO O QUE VOCÊ VAI',
    tituloDestaque: 'RECEBER',
    itensPrincipais: [
      {
        icone: '🎥',
        titulo: 'Treinamento COCRIA',
        detalhes: '4 chaves e 10 módulos em vídeo.',
      },
      {
        icone: '🧩',
        titulo: 'Exercícios práticos',
        detalhes: 'pra aplicar, não só assistir.',
      },
      {
        icone: '🎧',
        titulo: 'Áudios guiados',
        detalhes: 'pra ouvir ao acordar e antes de dormir.',
      },
      {
        icone: '📒',
        titulo: 'Workbook COCRIA',
        detalhes: 'pra anotar a sua transformação.',
      },
    ],
    tituloBonus: 'E MAIS 4 BÔNUS EXCLUSIVOS',
    bonus: [
      {
        numero: '1',
        icone: '🗺',
        nome: 'Mapa da Sua Nova Realidade',
        descricao: 'desenhe a vida que você quer.',
        valorOriginal: 'R$97',
      },
      {
        numero: '2',
        icone: '🎧',
        nome: 'Áudio Eu do Futuro',
        descricao: 'encontre a mulher próspera que você vai ser.',
        valorOriginal: 'R$97',
      },
      {
        numero: '3',
        icone: '📅',
        nome: 'Desafio 21 Dias de Cocriação',
        descricao: 'uma prática por dia, até o fim.',
        valorOriginal: 'R$297',
      },
      {
        numero: '4',
        icone: '📖',
        nome: 'Diário da Cocriadora',
        descricao: 'registre cada conquista.',
        valorOriginal: 'R$67',
      },
    ],
  },

  // Bloco 9 — A Oferta
  oferta: {
    tituloInicio: 'TUDO O QUE VOCÊ PRECISA PARA',
    tituloDestaque: 'DESTRAVAR',
    tituloFim: 'O SEU DINHEIRO',
    mockup: mockupImg,
    itensInclusos: [
      { nome: 'Treinamento COCRIA completo', valor: 'R$997' },
      { nome: 'Exercícios práticos + áudios guiados', valor: 'R$197' },
      { nome: 'Workbook COCRIA', valor: 'R$97' },
      { nome: 'Bônus 1 — Mapa da Sua Nova Realidade', valor: 'R$97' },
      { nome: 'Bônus 2 — Áudio Eu do Futuro', valor: 'R$97' },
      { nome: 'Bônus 3 — Desafio 21 Dias de Cocriação', valor: 'R$297' },
      { nome: 'Bônus 4 — Diário da Cocriadora', valor: 'R$67' },
    ],
    deValor: 'R$1.849',
    parcelasTexto: '12x de R$',
    parcelasValorConfirmar: '29,64', // [CONFIRMAR: taxa de parcelamento Kiwify estimada para 297 à vista]
    aVistaValor: 'R$297 à vista',
    comparativoCafe: 'Menos de R$1 por dia pra destravar o seu dinheiro.',
    
    // REGRA: A faixa de urgência aparece SOMENTE se houver prazo real preenchido.
    // Deixar vazio '' se não houver prazo confirmado.
    prazoOferta: '', 

    cta: 'QUERO ATIVAR MINHA MENTE PRÓSPERA',
    etapas: [
      { icone: '💳', texto: 'Você compra' },
      { icone: '📩', texto: 'Recebe o acesso no e-mail' },
      { icone: '▶️', texto: 'Começa hoje' },
    ],
  },

  // Bloco 10 — Garantia
  garantia: {
    dias: '7',
    tituloInicio: 'GARANTIA INCONDICIONAL DE',
    tituloDestaque: '7 DIAS',
    passos: [
      'Entre. Assista. Faça os exercícios.',
      'Se não for pra você, devolvemos 100% do seu dinheiro.',
      'Sem perguntas. Sem burocracia.',
    ],
    fraseImpacto1: 'O risco é todo nosso.',
    fraseImpacto2: 'A nova vida é sua.',
  },

  // Bloco 11 — A Escolha
  escolha: {
    tituloInicio: 'AGORA VOCÊ TEM',
    tituloDestaque: 'DUAS ESCOLHAS',
    opcaoNegativa: {
      titulo: 'Se você fechar esta página:',
      itens: [
        'O dinheiro continua indo embora',
        'As travas continuam no comando',
        'Daqui a um ano, tudo igual',
      ],
    },
    opcaoPositiva: {
      titulo: 'Se você entrar no COCRIA hoje:',
      itens: [
        'Você descobre as suas 5 travas',
        'Começa a destravar em 21 dias',
        'Ativa a sua mente próspera',
      ],
    },
    fraseImpacto1: 'A porta está aberta.',
    fraseImpacto2: 'A escolha é sua. E é agora.',
    cta: 'EU ESCOLHO DESTRAVAR MEU DINHEIRO',
  },

  // Bloco 12 — Quem é Mariana Moreira?
  autoridade: {
    tituloInicio: 'QUEM É',
    tituloDestaque: 'MARIANA MOREIRA?',
    foto: autoridadeImg,
    fotoAlt: 'Mariana Moreira — Mentora e criadora do COCRIA',
    historia: [
      'Eu também já vi o dinheiro entrar e sumir.',
      'Eu também já senti que não merecia.',
      'Até que descobri as minhas travas.',
      'E a minha vida mudou.',
      'Hoje, eu ensino mulheres a fazer o mesmo.',
      'O COCRIA é o caminho que eu gostaria de ter recebido.',
    ],
    // REGRA: Se não houver números reais cadastrados, esta linha não aparece!
    metricasReais: [] as MetricStat[], // ex: [{ icon: '📚', value: '10+', label: 'anos de estudo' }]
    fraseAssinada: '“A riqueza começa por dentro.”',
    assinatura: 'Mariana Moreira',
  },

  // Bloco 13 — Perguntas Frequentes
  faq: {
    tituloInicio: 'FICOU ALGUMA',
    tituloDestaque: 'DÚVIDA?',
    perguntas: [
      {
        pergunta: 'Preciso saber alguma coisa antes?',
        resposta: 'Não. O COCRIA começa do zero, com uma linguagem simples.',
      },
      {
        pergunta: 'Quanto tempo por dia?',
        resposta: '15 a 20 minutos por dia já são suficientes para acompanhar as aulas e aplicar a prática.',
      },
      {
        pergunta: 'Já tentei de tudo. Vai funcionar pra mim?',
        resposta: 'Trabalhar mais e cortar gastos não mexem nas travas. O COCRIA mexe direto nelas.',
      },
      {
        pergunta: 'O curso garante que vou ganhar mais dinheiro?',
        resposta: 'Não. Nenhum curso sério garante isso. O COCRIA te dá o método. O resultado depende de você aplicar.',
      },
      {
        pergunta: 'Como recebo o acesso?',
        resposta: 'Na hora, no seu e-mail cadastrado na compra.',
      },
      {
        pergunta: 'Como posso pagar?',
        resposta: 'Pix ou cartão em até 12x, com segurança, pela Kiwify.',
      },
      {
        pergunta: 'E se eu não gostar?',
        resposta: 'Você tem 7 dias pra pedir 100% do seu dinheiro de volta sem burocracia.',
      },
    ],
    // WhatsApp opcional: colocar número com DDI se for ativado
    whatsappSuporte: '', // ex: '5511999999999'
  },

  // Bloco 14 — Último Chamado & Rodapé
  ultimoChamado: {
    tituloInicio: 'DAQUI A 21 DIAS, VOCÊ PODE SER',
    tituloDestaque: 'OUTRA MULHER',
    foto: fechamentoImg,
    fotoAlt: 'Mariana Moreira',
    frases: [
      'Ou pode estar no mesmo lugar.',
      'Vendo o dinheiro ir embora.',
      'Você decide.',
    ],
    cta: 'QUERO DESTRAVAR MEU DINHEIRO AGORA',
  },

  rodape: {
    textoPrincipal: 'COCRIA — O Código da Cocriação · Mariana Moreira',
    cnpjTexto: 'CNPJ [CONFIRMAR]',
    links: [
      { label: 'Política de Privacidade', url: '#' },
      { label: 'Termos de Uso', url: '#' },
    ],
    avisoLegal: 'Imagens meramente ilustrativas. Os resultados variam de pessoa para pessoa e dependem da aplicação das técnicas. Este site não faz parte do Facebook ou da Meta Inc.',
  },
};
