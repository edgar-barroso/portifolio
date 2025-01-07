import { CiInstagram, CiFacebook, CiTwitter } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

export const socialMedia = [
  { href: "1", icon: <CiInstagram size={25} /> },
  { href: "2", icon: <CiFacebook size={25} /> },
  { href: "3", icon: <CiTwitter size={25} /> },
  { href: "4", icon: <FaGithub size={25} /> },
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

export const projects = [
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
    img: "/tools-fttx.png",
    title: "FTTX tools",
    description:
      "Um site especializado em ferramentas para manipular projetos FTTx, oferecendo suporte para arquivos KML e KMZ. Ideal para profissionais que trabalham com redes de fibra óptica.",
    link: "https://netflix-nine-plum.vercel.app/",
  },
  {
    img: "/fluxograma-fttx.png",
    title: "Fluxograma FTTX",
    description:
      "Um site para criação de fluxogramas personalizados voltados para projetos FTTx. Com uma interface intuitiva e ferramentas interativas, permite diagramar redes de fibra óptica de forma prática e organizada.",
    link: "https://netflix-nine-plum.vercel.app/",
  },
  {
    img: "/portifolio.png",
    title: "Portifólio",
    description:
      "Meu portfólio profissional, apresentando projetos desenvolvidos, habilidades técnicas e experiências em desenvolvimento web. Explore exemplos práticos de aplicações, interfaces modernas e soluções criativas que demonstram minha paixão por tecnologia e design.",
    link: "/",
  },
  {
    img: "/forca.png",
    title: "Jogo da forca",
    description:
      "Jogo da forca simples desenvolvido com React e Three.js, trazendo uma experiência interativa e visualmente atraente. Utiliza gráficos 3D para tornar o jogo mais dinâmico e divertido, permitindo ao usuário adivinhar palavras enquanto interage com uma interface envolvente e responsiva.",
    link: "https://jogo-da-forca-vert-nine.vercel.app/",
  },
  {
    img: "/magazine-luiza.png",
    title: "Magazine luiza clone",
    description:
      "Clone da página de vendas do Magazine Luiza, recriado com foco em design responsivo e funcionalidade. O projeto imita a interface de compra online, com seções de produtos, descrições detalhadas, avaliações de clientes e layout otimizado para uma experiência de compra fluída e intuitiva.",
    link: "https://product-page-magalu-clone.vercel.app",
  },
];

export const routes = [
  { href: "/", name: "home" },
  // { href: "/about", name: "about" },
  { href: "/contact", name: "contact" },
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
