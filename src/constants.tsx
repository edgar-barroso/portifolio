import { CiInstagram } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

export const socialMedia = [
  { href: "https://www.instagram.com/edgar_barrosoneto/", icon: <CiInstagram size={25} /> },
  { href: "https://github.com/edgar-barroso", icon: <FaGithub size={25} /> },
];

export const expertises = [
  {
    title: "Desenvolvimento Front-End",
    description:
      "Especialista em React e Next.js, com experiência na criação de interfaces de usuário otimizadas, responsivas e acessíveis. Uso avançado de TailwindCSS para estilização eficiente.",
    icon: <CiInstagram size={35} />,
  },
  {
    title: "Desenvolvimento Back-End",
    description:
      "Proficiente em Node.js com integração de bancos de dados como PostgreSQL, utilizando Prisma ORM para modelagem e manipulação eficiente de dados.",
    icon: <CiInstagram size={35} />,
  },
  {
    title: "Arquitetura de Software",
    description:
      "Experiência em projetar arquiteturas escaláveis e de alta performance, garantindo a qualidade de código com boas práticas, testes automatizados e uso de TypeScript.",
    icon: <CiInstagram size={35} />,
  },
];

export const educations = [
  {
    interval: "set 2022 - Presente",
    title: "Universidade Estadual Vale do Acaraú - UVA",
    description: "Bacharelado, Ciênvias da Computação",
    location: "Sobral - CE",
  },
  {
    interval: "mar 2023",
    title: "Curso de Clean Code e Clean Architecture com Rodrigo Branas",
    description:
      "Aprenda tudo sobre Clean Code, Refactoring, OO, Test-Driven Development, Hexagonal, Clean Architecture, Domain-Driven Design, SOLID e Design Patterns, do frontend ao backend ",
    location: "Online",
  },
  {
    interval: "jan 2023",
    title: "Formação em React",
    description:
      "Aprenda uma das tecnologias mais utilizadas no mercado na prática, do zero ao avançado, construindo interfaces reativas e evolua sua carreira front-end.",
    location: "Online",
  },
  {
    interval: "jan 2023",
    title: "Formação em Node.js",
    description:
      "Domine uma linguagem flexível e popular e amplamente utilizada na prática, construindo arquiteturas modernas, eficientes e escaláveis.",
    location: "Online",
  },
];

export const experiences = [
  {
    interval: "jan de 2023 - set de 2023 10 meses",
    title: "Desenvolvedor",
    description: "ENG. ALAN ARAÚJO",
    location: "Sobral, Ceará, Brazil",
  },
  {
    interval: "ago de 2020 - jun de 2022 · 1 ano 11 meses",
    title: "Analista de Projetos FTTx",
    description: "Online Telecom · Tempo integral",
    location: "Varjota, Ceará, Brazil",
  },
];

export const projectsFront = [
  {
    img: "/netflix.png",
    title: "Netflix clone",
    description:
      "Um clone responsivo da Landing Page da Netflix, recriado com React. Inclui design inspirado na interface original, animações fluidas, e organização das seções como banners, categorias e rodapé.",
    link: "https://netflix-nine-plum.vercel.app/",
  },
  {
    img: "/clock-to.png",
    title: "ClockTo",
    description:
      "Landing Page responsiva para ClockTo, uma empresa fictícia especializada em soluções de checkout de pagamentos rápidas e seguras.",
    link: "https://clock-to.vercel.app/",
  },
  {
    img: "/my-followers.png",
    title: "Myfollowers",
    description:
      "Landing Page fictícia para MyFollowers, um serviço de venda de seguidores e engajamento para redes sociais.",
    link: "https://thisfollow-gto5zrg9z-edgarbarrosos-projects.vercel.app/",
  },
  {
    img: "/nutri-lorenna.png",
    title: "Nutricionista Lorenna",
    description:
      "Uma Landing Page de vendas de um curso de emagrecimento, da nutricionista Lorenna Lizot.",
    link: "https://www.nutrilorennalizot.com/",
  },
  {
    img: "/fluxograma-fttx.png",
    title: "Fluxograma FTTX",
    description:
      "Um site para criação de fluxogramas personalizados voltados para projetos FTTx. Com uma interface intuitiva e ferramentas interativas, permite diagramar redes de fibra óptica de forma prática e organizada.",
    link: "https://fluxograma-fttx.vercel.app/",
  },
  {
    img: "/portifolio.png",
    title: "Portifólio",
    description:
      "Meu portfólio profissional, apresentando projetos desenvolvidos, habilidades técnicas e experiências em desenvolvimento web. Explore exemplos práticos de aplicações, interfaces modernas e soluções criativas que demonstram minha paixão por tecnologia e design.",
    link: "/",
  },


];

export const projectsBack = [
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/nestjs/nestjs-original.svg",
    title: "starter-backend",
    description:
      "back-end para iniciar projetos com nest",
    link: "https://github.com/edgar-barroso/starter-backend",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
    title: "Instagram Profile Picture API",
    description:
      "Esta API Python permite que os usuários recuperem o URL de uma imagem de perfil do Instagram fornecendo um nome de usuário.",
    link: "https://github.com/edgar-barroso/instagram-profile-api",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-plain.svg",
    title: "Encurtador de URL",
    description:
      "API para servico encurtador de URL",
    link: "https://github.com/edgar-barroso/url-shortener-api",
  },
  {
    img: "/picpay.png",
    title: "Desafio Back-end PicPay",
    description:
      "Desafio Back-end lançado pelo PicPay para recrutar colaboradores",
    link: "https://github.com/edgar-barroso/picpay-desafio-backend",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-plain.svg",
    title: "E-commerce API",
    description:
      "Back-end para um e-commerce desenvolvido no curso do Rodrigo Branas utilizando Clen Architecture, DDD, TDD, SOLID.",
    link: "https://github.com/edgar-barroso/e-commerce-api",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-plain.svg",
    title: "Web Chat API",
    description:
      "Back-end para chat web, utilizando websocket, TDD, DDD, SOLID",
    link: "https://github.com/edgar-barroso/web-chat-api",
  },

];

export const routes = [
  { href: "/", name: "home" },
  // { href: "/about", name: "about" },
  { href: "https://wa.me/5588998029216", name: "contact" },
];

export const languages = [
  // { id: "en", name: "eng" },
  { id: "pt-br", name: "port" },
];

export const techStacks = [
  {
    name: "Javascript",
    imageUrl:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg",
  },
  {
    name: "Typescript",
    imageUrl:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg",
  },
  {
    name: "Nodejs",
    imageUrl:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-plain.svg",
  },
  {
    name: "HTML",
    imageUrl:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    imageUrl:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
  },
  {
    name: "Python",
    imageUrl:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
  },
  {
    name: "React",
    imageUrl:
      "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/react/react-original.svg",
  },
  {
    name: "Nextjs",
    imageUrl:
      "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Nestjs",
    imageUrl:
      "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/nestjs/nestjs-original.svg",
  },
  {
    name: "PrismaORM",
    imageUrl:
      "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/prisma/prisma-original.svg",
  },
  {
    name: "Postgresql",
    imageUrl:
      "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Tailwindcss",
    imageUrl:
      "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/tailwindcss/tailwindcss-original.svg",
  },
];
