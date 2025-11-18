import { FaGithub } from "react-icons/fa";
import { BiBriefcaseAlt } from "react-icons/bi";
import { CiInstagram } from "react-icons/ci";

export const socialMedia = [
  {
    href: "https://www.instagram.com/edgar_barrosoneto/",
    icon: <CiInstagram size={25} />,
  },
  { href: "https://github.com/edgar-barroso", icon: <FaGithub size={25} /> },
];

export const expertises = [
  {
    title: "Desenvolvimento Front-End",
    description:
      "Especialista em React e Next.js, com experiência na criação de interfaces de usuário otimizadas, responsivas e acessíveis. Uso avançado de TailwindCSS para estilização eficiente.",
    icon: <BiBriefcaseAlt size={35} />,
  },
  {
    title: "Desenvolvimento Back-End",
    description:
      "Proficiente em Node.js com integração de bancos de dados como PostgreSQL, utilizando Prisma ORM para modelagem e manipulação eficiente de dados.",
    icon: <BiBriefcaseAlt size={35} />,
  },
  {
    title: "Arquitetura de Software",
    description:
      "Experiência em projetar arquiteturas escaláveis e de alta performance, garantindo a qualidade de código com boas práticas, testes automatizados e uso de TypeScript.",
    icon: <BiBriefcaseAlt size={35} />,
  },
];

export const educations = [
  {
    interval: "set 2022 - Presente",
    title: "Universidade Estadual Vale do Acaraú - UVA",
    description: "Bacharelado, Ciências da Computação",
    location: "Sobral - CE",
  },
  {
    interval: "mar 2023",
    title: "Curso de Clean Code e Clean Architecture com Rodrigo Branas",
    description:
      "Conteúdo sobre Clean Code, Refactoring, OO, TDD, Hexagonal, Clean Architecture, DDD, SOLID e Design Patterns, do frontend ao backend.",
    location: "Online",
  },
  {
    interval: "jan 2023",
    title: "Formação em React",
    description:
      "Curso prático de React, do básico ao avançado, com foco em construção de interfaces reativas.",
    location: "Online",
  },
  {
    interval: "jan 2023",
    title: "Formação em Node.js",
    description:
      "Curso prático de Node.js, com foco em arquiteturas modernas, eficientes e escaláveis.",
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
    img: "/digital-catalog.png",
    title: "Catalogo Digital",
    description:
      "Site para catalogo digital de produtos, com interface amigável e navegação intuitiva.",
    link: "https://github.com/edgar-barroso/digital-catalog",
  },
  {
    img: "/pdfante.png",
    title: "PDFante",
    description:
      "Site para conversão de PDF para PNG e de imagens para PDF, com interface simples e intuitiva.",
    link: "https://pdfante.com/pdf-to-png",
  },
  {
    img: "/shop-co.png",
    title: "Shop.co",
    description:
      "Landing page fictícia para e-commerce de moda, desenvolvida com foco em responsividade, performance e design moderno. Projeto inspirado em templates profissionais do mercado.",
    link: "https://shop-co-puce.vercel.app/",
  },

  {
    img: "/modern-lp.png",
    title: "Modern Landing Nike (Em Desenvolvimento)",
    description:
      "Landing page conceitual para a Nike, utilizando Three.js para animações 3D e React para uma experiência de usuário dinâmica e envolvente.",
    link: "https://modern-lp-sigma.vercel.app/",
  },
  {
    img: "/tatoo-salon.png",
    title: "Tatoo Salon",
    description:
      "Landing page para estúdio de tatuagem, com layout moderno, navegação intuitiva e foco em conversão de clientes. Projeto baseado em UI de referência do segmento.",
    link: "https://tatoo-salon.vercel.app/",
  },
  {
    img: "/netflix.png",
    title: "Netflix Clone",
    description:
      "Clone responsivo da landing page da Netflix, recriado em React, com animações suaves, organização de seções e atenção à experiência do usuário.",
    link: "https://netflix-seven-rose.vercel.app/",
  },
  {
    img: "/clock-to.png",
    title: "ClockTo",
    description:
      "Landing page institucional para empresa fictícia de soluções de pagamento, com design limpo, responsivo e foco em apresentação de serviços.",
    link: "https://clock-to.vercel.app/",
  },
  {
    img: "/nextcent.png",
    title: "NextCent",
    description:
      "Landing page para agência digital, desenvolvida com práticas modernas de UI/UX, responsividade e performance, baseada em design de referência internacional.",
    link: "https://nextcent-fawn.vercel.app/",
  },
  {
    img: "/nutri-lorenna.png",
    title: "Nutricionista Lorenna",
    description:
      "Landing page de vendas para curso de emagrecimento, com copy persuasiva, layout otimizado para conversão e integração de formulários.",
    link: "https://www.nutrilorennalizot.com/",
  },
  {
    img: "/fluxograma-fttx.png",
    title: "Fluxograma FTTX",
    description:
      "Aplicação web para criação de fluxogramas personalizados de projetos FTTx, com interface intuitiva, ferramentas interativas e foco em produtividade para profissionais de redes ópticas.",
    link: "https://fluxograma-fttx.vercel.app/",
  },
  {
    img: "/portifolio.png",
    title: "Portfólio",
    description:
      "Portfólio profissional apresentando projetos, habilidades técnicas e experiências em desenvolvimento web. Demonstração de interfaces modernas, aplicações práticas e soluções inovadoras.",
    link: "/",
  },
];

export const projectsBack = [
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/nestjs/nestjs-original.svg",
    title: "quick-test",
    description:
      "API robusta para sistema de provas online, desenvolvida com Clean Architecture, DDD, TDD e SOLID. Foco em escalabilidade, segurança e manutenibilidade.",
    link: "https://github.com/edgar-barroso/quicktest-api",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-plain.svg",
    title: "Thisfollow API",
    description:
      "Back-end para plataforma de venda de seguidores e engajamento em redes sociais, utilizando Node.js, Fastify e PostgreSQL. Estruturado para alta performance e segurança.",
    link: "https://github.com/edgar-barroso/thisfollow-api",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-plain.svg",
    title: "Encurtador de URL",
    description:
      "API para encurtamento de URLs, com endpoints RESTful, validação de dados e arquitetura limpa.",
    link: "https://github.com/edgar-barroso/url-shortener-api",
  },
  {
    img: "/picpay.png",
    title: "Desafio Back-end PicPay",
    description:
      "API desenvolvida para desafio técnico do PicPay, com foco em boas práticas de arquitetura, testes automatizados e integração de serviços financeiros.",
    link: "https://github.com/edgar-barroso/picpay-desafio-backend",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-plain.svg",
    title: "Web Chat API",
    description:
      "Back-end para chat em tempo real, utilizando WebSocket, TDD, DDD e SOLID. Estruturado para escalabilidade e comunicação eficiente.",
    link: "https://github.com/edgar-barroso/web-chat-api",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-plain.svg",
    title: "E-commerce API",
    description:
      "API para e-commerce, desenvolvida com Clean Architecture, DDD, TDD e SOLID. Implementa funcionalidades de catálogo, carrinho e pedidos.",
    link: "https://github.com/edgar-barroso/e-commerce-api",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/nestjs/nestjs-original.svg",
    title: "starter-backend",
    description:
      "Template de back-end com NestJS, configurado para iniciar projetos rapidamente com boas práticas de arquitetura e testes.",
    link: "https://github.com/edgar-barroso/starter-backend",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
    title: "Instagram Profile Picture API",
    description:
      "API em Python para obtenção do URL da imagem de perfil do Instagram a partir do nome de usuário, com integração e tratamento de dados.",
    link: "https://github.com/edgar-barroso/instagram-profile-api",
  },
];

export const routes = [
  { href: "/", name: "Home" },
  { href: "https://wa.me/5588998029216", name: "Contato" },
];

export const languages = [{ id: "pt-br", name: "Português" }];

export const techStacks = [
  {
    name: "Javascript",
    imageUrl:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg",
    link: "https://developer.mozilla.org/docs/Web/JavaScript",
  },
  {
    name: "Typescript",
    imageUrl:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg",
    link: "https://www.typescriptlang.org/docs/",
  },
  {
    name: "Nodejs",
    imageUrl:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-plain.svg",
    link: "https://nodejs.org/en/docs",
  },
  {
    name: "HTML",
    imageUrl:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
    link: "https://developer.mozilla.org/docs/Web/HTML",
  },
  {
    name: "CSS",
    imageUrl:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
    link: "https://developer.mozilla.org/docs/Web/CSS",
  },
  {
    name: "Python",
    imageUrl:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
    link: "https://docs.python.org/3/",
  },
  {
    name: "React",
    imageUrl:
      "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/react/react-original.svg",
    link: "https://react.dev/",
  },
  {
    name: "Nextjs",
    imageUrl:
      "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/nextjs/nextjs-original.svg",
    link: "https://nextjs.org/docs",
  },
  {
    name: "Nestjs",
    imageUrl:
      "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/nestjs/nestjs-original.svg",
    link: "https://docs.nestjs.com/",
  },
  {
    name: "PrismaORM",
    imageUrl:
      "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/prisma/prisma-original.svg",
    link: "https://www.prisma.io/docs",
  },
  {
    name: "Postgresql",
    imageUrl:
      "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/postgresql/postgresql-original.svg",
    link: "https://www.postgresql.org/docs/",
  },
  {
    name: "Tailwindcss",
    imageUrl:
      "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/tailwindcss/tailwindcss-original.svg",
    link: "https://tailwindcss.com/docs",
  },
];
