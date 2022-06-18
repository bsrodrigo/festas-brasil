export type musicType = {
  index?: number;
  src: string;
  title: string;
  artist: string;
  imageSrc: string;
};

export type partyType = {
  name: string;
  imageSrc: string;
  music: musicType;
};

export const partiesListMock: partyType[] = [
  {
    name: "Oktoberfest",
    imageSrc: "/images/banner1.jpg",
    music: {
      title: "Ukulele",
      artist: "Bensound",
      src: "https://www.bensound.com/bensound-music/bensound-ukulele.mp3",
      imageSrc: "/images/banner1.jpg",
    },
  },
  {
    name: "Lavagem da Escadaria do Bonfim: uma festa de tradição e fé",
    imageSrc: "/images/banner2.jpg",
    music: {
      title: "Summer",
      artist: "Bensound",
      src: "https://www.bensound.com/bensound-music/bensound-summer.mp3",
      imageSrc: "/images/banner2.jpg",
    },
  },
  {
    name: "Carnaval: o destaque das festas populares brasileiras",
    imageSrc: "/images/banner3.jpg",
    music: {
      title: "Happy Rock",
      artist: "Bensound",
      src: "https://www.bensound.com/bensound-music/bensound-happyrock.mp3",
      imageSrc: "/images/banner3.jpg",
    },
  },
  {
    name: "Festa de São João ou Festa Junina",
    imageSrc: "/images/banner2.jpg",
    music: {
      title: "Jazzy Frenchy",
      artist: "Bensound",
      src: "https://www.bensound.com/bensound-music/bensound-jazzyfrenchy.mp3",
      imageSrc: "/images/banner2.jpg",
    },
  },
  {
    name: "Folia de Reis",
    imageSrc: "/images/banner1.jpg",
    music: {
      title: "Acoustic Breeze",
      artist: "Bensound",
      src: "https://www.bensound.com/bensound-music/bensound-acousticbreeze.mp3",
      imageSrc: "/images/banner1.jpg",
    },
  },
  {
    name: "Parada do Orgulho LGBT",
    imageSrc: "/images/banner3.jpg",
    music: {
      title: "Punky",
      artist: "Bensound",
      src: "https://www.bensound.com/bensound-music/bensound-punky.mp3",
      imageSrc: "/images/banner3.jpg",
    },
  },
  {
    name: "Festa do Divino",
    imageSrc: "/images/banner4.jpg",
    music: {
      title: "Badass",
      artist: "Bensound",
      src: "https://www.bensound.com/bensound-music/bensound-badass.mp3",
      imageSrc: "/images/banner4.jpg",
    },
  },
  {
    name: "Flip: Literatura e arte em sintonia em Paraty",
    imageSrc: "/images/banner1.jpg",
    music: {
      title: "Brazil Samba",
      artist: "Bensound",
      src: "https://www.bensound.com/bensound-music/bensound-brazilsamba.mp3",
      imageSrc: "/images/banner1.jpg",
    },
  },
  {
    name: "Virada Cultural",
    imageSrc: "/images/banner2.jpg",
    music: {
      title: "Creepy",
      artist: "Bensound",
      src: "https://www.bensound.com/bensound-music/bensound-creepy.mp3",
      imageSrc: "/images/banner2.jpg",
    },
  },
  {
    name: "Festival Folclórico de Parintins",
    imageSrc: "/images/banner4.jpg",
    music: {
      title: "High Octane",
      artist: "Bensound",
      src: "https://www.bensound.com/bensound-music/bensound-highoctane.mp3",
      imageSrc: "/images/banner4.jpg",
    },
  },
  {
    name: "Congada: história e crença nas festas populares brasileiras",
    imageSrc: "/images/banner4.jpg",
    music: {
      title: "Ukulele",
      artist: "Bensound",
      src: "https://www.bensound.com/bensound-music/bensound-ukulele.mp3",
      imageSrc: "/images/banner4.jpg",
    },
  },
  {
    name: "Festa de Iemanjá",
    imageSrc: "/images/banner3.jpg",
    music: {
      title: "Summer",
      artist: "Bensound",
      src: "https://www.bensound.com/bensound-music/bensound-summer.mp3",
      imageSrc: "/images/banner3.jpg",
    },
  },
  {
    name: "Cavalhadas",
    imageSrc: "/images/banner2.jpg",
    music: {
      title: "Ukulele",
      artist: "Bensound",
      src: "https://www.bensound.com/bensound-music/bensound-ukulele.mp3",
      imageSrc: "/images/banner2.jpg",
    },
  },
  {
    name: "A Festa Nacional do Marreco",
    imageSrc: "/images/banner4.jpg",
    music: {
      title: "Summer",
      artist: "Bensound",
      src: "https://www.bensound.com/bensound-music/bensound-summer.mp3",
      imageSrc: "/images/banner4.jpg",
    },
  },
  {
    name: "Festa do Peão de Barretos: o legado sertanejo",
    imageSrc: "/images/banner2.jpg",
    music: {
      title: "Happy Rock",
      artist: "Bensound",
      src: "https://www.bensound.com/bensound-music/bensound-happyrock.mp3",
      imageSrc: "/images/banner2.jpg",
    },
  },
  {
    name: "Farroupilha",
    imageSrc: "/images/banner3.jpg",
    music: {
      title: "Jazzy Frenchy",
      artist: "Bensound",
      src: "https://www.bensound.com/bensound-music/bensound-jazzyfrenchy.mp3",
      imageSrc: "/images/banner3.jpg",
    },
  },
  {
    name: "A Festa Nacional do Milho",
    imageSrc: "/images/banner2.jpg",
    music: {
      title: "Acoustic Breeze",
      artist: "Bensound",
      src: "https://www.bensound.com/bensound-music/bensound-acousticbreeze.mp3",
      imageSrc: "/images/banner2.jpg",
    },
  },
  {
    name: "Fogaréu",
    imageSrc: "/images/banner1.jpg",
    music: {
      title: "Punky",
      artist: "Bensound",
      src: "https://www.bensound.com/bensound-music/bensound-punky.mp3",
      imageSrc: "/images/banner1.jpg",
    },
  },
  {
    name: "Oktoberfest",
    imageSrc: "/images/banner2.jpg",
    music: {
      title: "Badass",
      artist: "Bensound",
      src: "https://www.bensound.com/bensound-music/bensound-badass.mp3",
      imageSrc: "/images/banner2.jpg",
    },
  },
];
