export type musicType = {
  index?: number;
  src: string;
  title: string;
  artist: string;
  imageSrc: string;
};

export type partyDataType = {
  title: string;
  description: string;
};

export type partyType = {
  name: string;
  linkMore: string;
  data: partyDataType[];
  imageSrc: string;
  music: musicType;
};

export const partiesListMock: partyType[] = [
  {
    name: "Carnaval: o destaque das festas populares brasileiras",
    linkMore:
      "https://alandeoferreiradesign.notion.site/Carnaval-o-destaque-das-festas-populares-brasileiras-6630f63733504888a6655ef57df253f7",
    data: [
      {
        title: "Origem",
        description:
          "Trazido pelos colonizadores portugueses. Surgiu como um período para as pessoas extravasarem seus desejos antes de iniciarem a Quaresma (40 dias de contrição e pelo jejum imposto pela Igreja Católica)",
      },
      { title: "Data de Origem", description: "Entre os séculos XVI e XVII" },
      {
        title: "Como chegou ao Brasil",
        description: "Pelos colonizadores portugueses",
      },
      {
        title: "Onde acontece",
        description:
          " As maiores festas ocorrem em São Paulo, Rio de Janeiro, Recife e Salvador",
      },
      {
        title: "Tamanho do público",
        description:
          "Milhões de pessoas de diversas cidades do Brasil e do mundo",
      },
      {
        title: "Tipo de público",
        description: "Todo tipo de público",
      },
      {
        title: "O que feito",
        description: "Pessoas extravasam seus desejos / dançam / se divertem",
      },
      { title: "valor de entrada", description: " Grátis" },
    ],
    imageSrc: "/images/carnaval.png",
    music: {
      title: "Happy Rock",
      artist: "Bensound",
      src: "https://www.bensound.com/bensound-music/bensound-happyrock.mp3",
      imageSrc: "/images/carnaval.png",
    },
  },
  {
    name: "Festa do Divino",
    linkMore:
      "https://alandeoferreiradesign.notion.site/Festa-do-Divino-e0c29a4f5d4f4b31bb34b89e909928a4",
    data: [
      { title: "Origem", description: "Católica" },
      {
        title: "Data de Origem",
        description:
          " 1285-1325 (Em Portugal), no Brasil durante o período de colonização portuguesa",
      },
      {
        title: "Como chegou ao Brasil",
        description:
          " Trazido pelos colonizadores portugueses durante o período de colonização",
      },
      {
        title: "Onde acontece",
        description:
          " Goiás, Mogi das Cruzes (SP), Paraty (RJ) e no estado de Rondônia",
      },
      {
        title: "Tamanho do público",
        description:
          " Há registros em 2019 em Mogi das Cruzes - SP que a festa reuniu mais de 350mil pessoas",
      },
      { title: "Tipo de público", description: " Público católico" },
      {
        title: "O que feito",
        description:
          " comemoram a descida do Espírito Santo sobre os doze apóstolos com cavalhadas, representação teatral, novenas, missas e procissões",
      },
      { title: "Valor da entrada", description: " Grátis " },
    ],
    imageSrc: "/images/festa-divino.png",
    music: {
      title: "Badass",
      artist: "Bensound",
      src: "https://www.bensound.com/bensound-music/bensound-badass.mp3",
      imageSrc: "/images/festa-divino.png",
    },
  },
  {
    name: "Festa de São João ou Festa Junina",
    linkMore:
      "https://alandeoferreiradesign.notion.site/Festa-de-S-o-Jo-o-ou-Festa-Junina-6863e355b9b4450ea29b03a753f234d0",
    data: [
      {
        title: "Origem",
        description: "Península Ibérica (Portugal e Espanha)",
      },
      { title: "Data de Origem", description: " século XVI" },
      {
        title: "Como chegou ao Brasil",
        description: " Pelos colonizadores portugueses",
      },
      {
        title: "Onde acontece",
        description:
          " Em todo Brasil, mas uma das maiores festas acontece em Campina Grande, Paraíba",
      },
      {
        title: "Tamanho do público",
        description:
          " Em Campina Grande mais de 2,5 milhões. A quantidade mudada conforme a região",
      },
      {
        title: "Tipo de público",
        description: " Principalmente o público católico",
      },
      {
        title: "O que feito",
        description:
          " Danças típicas, produção de inúmeras comidas à base de milho e amendoim e pessoas se vestem caraterizadas de caipira. / comemoram o Santo Antônio, São Pedro e São João",
      },
      { title: "valor de entrada", description: " Geralmente grátis" },
    ],
    imageSrc: "/images/sao-joao.png",
    music: {
      title: "Jazzy Frenchy",
      artist: "Bensound",
      src: "https://www.bensound.com/bensound-music/bensound-jazzyfrenchy.mp3",
      imageSrc: "/images/sao-joao.png",
    },
  },
  {
    name: "Oktoberfest",
    linkMore:
      "https://alandeoferreiradesign.notion.site/Oktoberfest-f0ababc64e6345a1a878ecb258e52e3a",
    data: [
      {
        title: "Origem",
        description: "Inspirada na festa homônima alemã, em Munique",
      },
      { title: "Data de Origem", description: " 1984" },
      {
        title: "Como chegou ao Brasil",
        description:
          " Surgiu na grande enchente em 1984. Para ajudar a recuperar a economia, animar os moradores e trazer de volta vida na cidade.",
      },
      { title: "Onde acontece", description: " Blumenau" },
      { title: "Tamanho do público", description: " Mais de 500 mil" },
      { title: "Tipo de público", description: " Brasileiros e estrangeiros" },
      { title: "O que feito", description: " Celebram a cultura alemã " },
    ],
    imageSrc: "/images/oktoberfest.png",
    music: {
      title: "Badass",
      artist: "Bensound",
      src: "https://www.bensound.com/bensound-music/bensound-badass.mp3",
      imageSrc: "/images/oktoberfest.png",
    },
  },
  {
    name: "Virada Cultural",
    linkMore:
      "https://alandeoferreiradesign.notion.site/Virada-Cultural-7ba10822d8ad4cff815b80a71da55e8d",
    data: [
      {
        title: "Origem",
        description:
          "Promovida pela prefeitura de São Paulo, porém, foi Inspirada no festival francês Noite Branca",
      },
      { title: "Data de Origem", description: " 2005" },
      { title: "Como chegou ao Brasil", description: " Origem brasileira " },
      { title: "Onde acontece", description: " São Paulo " },
      {
        title: "Tamanho do público",
        description: " Em 2019 cerca de 5 milhões de pessoas",
      },
      {
        title: "Tipo de público",
        description:
          " Aberto para todo tipo de público, porém, é mais frequentado pelo público jovem ",
      },
      {
        title: "O que feito",
        description:
          " Participam de manifestações culturais por toda a cidade, shows (todos os gêneros musicais), peças teatrais e danças",
      },
      { title: "valor de entrada", description: "  Grátis" },
    ],

    imageSrc: "/images/virada-cultural.png",
    music: {
      title: "Creepy",
      artist: "Bensound",
      src: "https://www.bensound.com/bensound-music/bensound-creepy.mp3",
      imageSrc: "/images/virada-cultural.png",
    },
  },
  {
    name: "Congada: história e crença nas festas populares brasileiras",
    linkMore:
      "https://alandeoferreiradesign.notion.site/Congada-hist-ria-e-cren-a-nas-festas-populares-brasileiras-cc54de7b2521479a91fdf1dee4734448",
    data: [
      {
        title: "Origem",
        description:
          "Originou no Brasil, mas carrega elementos religiosos da cultura africana e da cultura católica portuguesa",
      },
      { title: "Data de Origem", description: " Metade do século XVII" },
      { title: "Como chegou ao Brasil", description: " Origem brasileira" },
      {
        title: "Onde acontece",
        description:
          " Goiás, Minas Gerais, Paraíba, Pernambuco, Paraná e São Paulo",
      },
      { title: "Tamanho do público", description: " Sem relatos" },
      {
        title: "Tipo de público",
        description: " Católicos e candomblecistas ",
      },
      {
        title: "O que feito",
        description:
          " Procissão ou desfile, marcado por cantos, danças, teatros e outras apresentações, No evento são louvados São Benedito, Santa Efigênia e Nossa Senhora do Rosário e outras figuras religiosas originadas das culturas africanas e portuguesas",
      },
      { title: "valor de entrada", description: " Grátis" },
    ],
    imageSrc: "/images/congada.png",
    music: {
      title: "Ukulele",
      artist: "Bensound",
      src: "https://www.bensound.com/bensound-music/bensound-ukulele.mp3",
      imageSrc: "/images/congada.png",
    },
  },
  {
    name: "Festival Folclórico de Parintins",
    linkMore:
      "https://alandeoferreiradesign.notion.site/Festival-Folcl-rico-de-Parintins-3812fe0ee089469ea401f871fe65f263",
    data: [
      {
        title: "Origem",
        description:
          "Criado por um grupo de amigos ligados à JAC (Juventude Alegre Católica), mas originou pela rivalidade iniciada há quase cem anos, quando dois grandes grupos – os “bois” começaram a representar nas ruas de Parintins o folclore do boi-bumbá, uma variação do bumba-meu-boi nordestino",
      },
      { title: "Data de Origem", description: " 1965" },
      { title: "Como chegou ao Brasil", description: " Origem brasileira" },
      {
        title: "Onde acontece",
        description: " Centro Cultural de Parintins / Parintins -Amazonas ",
      },
      {
        title: "Tamanho do público",
        description:
          " Durante o festival a cidade recebe cerca de 80mil turistas, além 115 mil habitantes",
      },
      { title: "Tipo de público", description: " Todo tipo de público" },
      {
        title: "O que feito",
        description:
          " Assistem os bois encenarem a lenda da Mãe Catirina com fantasias, músicas e alegorias",
      },
      {
        title: "valor de entrada",
        description: " Entre R$ 200,00 a R$ 490,00 a noite",
      },
    ],
    imageSrc: "/images/festival-folclorico.png",
    music: {
      title: "High Octane",
      artist: "Bensound",
      src: "https://www.bensound.com/bensound-music/bensound-highoctane.mp3",
      imageSrc: "/images/festival-folclorico.png",
    },
  },
  {
    name: "Folia de Reis",
    linkMore:
      "https://alandeoferreiradesign.notion.site/Folia-de-Reis-726c0a2b58144295a725681d1605ca59",
    data: [
      {
        title: "Origem",
        description: "Tradição cristã portuguesa e espanhola",
      },
      { title: "Data de Origem", description: " Século XVIII" },
      {
        title: "Como chegou ao Brasil",
        description: " Pelos colonizadores portugueses",
      },
      {
        title: "Onde acontece",
        description:
          " Todo Brasil, mas em Muqui, no Espírito Santo acontece o maior encontro nacional",
      },
      { title: "Tipo de público", description: " Cristãos" },
      {
        title: "O que feito",
        description:
          " Celebram a visita dos três reis magos ao menino Jesus. Cantores e instrumentistas usam roupas coloridas e andam pelas ruas da cidade fazendo referência ao percurso dos Magos, tocando de porta em porta proferindo louvações e dançando",
      },
      { title: "valor de entrada", description: " Grátis" },
    ],
    imageSrc: "/images/folia-reis.png",
    music: {
      title: "Acoustic Breeze",
      artist: "Bensound",
      src: "https://www.bensound.com/bensound-music/bensound-acousticbreeze.mp3",
      imageSrc: "/images/folia-reis.png",
    },
  },
  {
    name: "Festa de Iemanjá",
    linkMore:
      "https://alandeoferreiradesign.notion.site/Festa-de-Iemanj-e713da785cb94faf9d3dac38b5dd60e0",
    data: [
      { title: "Origem", description: "Descrição aqui " },
      { title: "Data de Origem", description: " Descrição aqui " },
      { title: "Como chegou ao Brasil", description: " Descrição aqui " },
      { title: "Onde acontece", description: " Descrição aqui " },
      { title: "Tamanho do público", description: " Descrição aqui " },
      { title: "Tipo de público", description: " Descrição aqui " },
      { title: "O que feito", description: " Descrição aqui " },
      { title: "valor de entrada", description: " Descrição aqui " },
    ],
    imageSrc: "/images/iemanja.png",
    music: {
      title: "Summer",
      artist: "Bensound",
      src: "https://www.bensound.com/bensound-music/bensound-summer.mp3",
      imageSrc: "/images/iemanja.png",
    },
  },
  {
    name: "A Festa Nacional do Marreco",
    linkMore:
      "https://alandeoferreiradesign.notion.site/A-Festa-Nacional-do-Marreco-9430377b56fa4b6f8fc33b45a29d5d09",
    data: [
      { title: "Origem", description: "Descrição aqui " },
      { title: "Data de Origem", description: " Descrição aqui " },
      { title: "Como chegou ao Brasil", description: " Descrição aqui " },
      { title: "Onde acontece", description: " Descrição aqui " },
      { title: "Tamanho do público", description: " Descrição aqui " },
      { title: "Tipo de público", description: " Descrição aqui " },
      { title: "O que feito", description: " Descrição aqui " },
      { title: "valor de entrada", description: " Descrição aqui " },
    ],
    imageSrc: "/images/marreco.png",
    music: {
      title: "Summer",
      artist: "Bensound",
      src: "https://www.bensound.com/bensound-music/bensound-summer.mp3",
      imageSrc: "/images/marreco.png",
    },
  },
  {
    name: "FLIP (Festa Literária Internacional de Paraty)",
    linkMore:
      "https://alandeoferreiradesign.notion.site/Flip-Literatura-e-arte-em-sintonia-em-Paraty-314be8dd21784c86ac419d4c9125da06",
    data: [
      {
        title: "Origem",
        description:
          "surgiu a partir do desejo de promover em Paraty uma experiência artística",
      },
      { title: "Data de Origem", description: " 2003" },
      { title: "Como chegou ao Brasil", description: " Origem brasileira" },
      { title: "Onde acontece", description: " Paraty - RJ" },
      { title: "Tamanho do público", description: " 20 mil pessoas em 2018" },
      {
        title: "Tipo de público",
        description:
          " Público de todas as idades que se interessam por arte e diversidade ",
      },
      {
        title: "O que feito",
        description:
          " Participam de tendas e rodas de debate de ideias, palestras, laçamentos de obras, slams e atividades que estimulam a criatividade",
      },
      { title: "valor de entrada", description: " Grátis " },
    ],
    imageSrc: "/images/flip.png",
    music: {
      title: "Brazil Samba",
      artist: "Bensound",
      src: "https://www.bensound.com/bensound-music/bensound-brazilsamba.mp3",
      imageSrc: "/images/flip.png",
    },
  },
  {
    name: "Parada do Orgulho LGBTQI+",
    linkMore:
      "https://alandeoferreiradesign.notion.site/Parada-do-Orgulho-LGBT-de-S-o-Paulo-fd9ab6ca84504eb08fc6d938dfc094bf",
    data: [
      {
        title: "Origem",
        description:
          "Por uma pequena marcha na praia de Copacabana após a 17ª conferência do ILGA (Associação Internacional de Lésbicas, Gays, Bissexuais, Trans e Intersex)",
      },
      { title: "Data de Origem", description: " 1997" },
      {
        title: "Como chegou ao Brasil",
        description: " A 17ª conferência do ILGA causou o movimento",
      },
      { title: "Onde acontece", description: " Avenida Paulista, São Paulo" },
      { title: "Tamanho do público", description: " Média de 4 milhões" },
      {
        title: "Tipo de público",
        description: " LGBTQIA+ e apoiadores a causa",
      },
      {
        title: "O que feito",
        description:
          " Comemoram / festejam o orgulho LGBT e reivindicam seus direitos",
      },
      { title: "valor de entrada", description: " Grátis" },
    ],
    imageSrc: "/images/parada-lgbt.png",
    music: {
      title: "Punky",
      artist: "Bensound",
      src: "https://www.bensound.com/bensound-music/bensound-punky.mp3",
      imageSrc: "/images/parada-lgbt.png",
    },
  },
  {
    name: "A Lavagem da Escadaria do Bonfim",
    linkMore:
      "https://alandeoferreiradesign.notion.site/Lavagem-da-Escadaria-do-Bonfim-uma-festa-de-tradi-o-e-f-681b923d7d6843429e6777393b7203eb",
    data: [
      {
        title: "Origem",
        description:
          "Iniciada por um português que sobreviveu à Guerra do Paraguai / iniciada por um devoto de Oxalá, orixá do candomblé / começou por conta da dança de São Gonçalo",
      },
      { title: "Data de Origem", description: " Século XIX (hipótese)" },
      {
        title: "Como chegou ao Brasil",
        description:
          " Iniciada por um português que sobreviveu à Guerra do Paraguai",
      },
      { title: "Onde acontece", description: " Salvador" },
      { title: "Tamanho do público", description: " Mais de 800 mil pessoas" },
      { title: "Tipo de público", description: " Católicos e candomblecistas" },
      { title: "O que feito", description: " homenageiam Oxalá" },
      { title: "valor de entrada", description: " Grátis" },
    ],
    imageSrc: "/images/escadaria-bonfim.png",
    music: {
      title: "Summer",
      artist: "Bensound",
      src: "https://www.bensound.com/bensound-music/bensound-summer.mp3",
      imageSrc: "/images/escadaria-bonfim.png",
    },
  },
];
