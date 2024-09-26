import { GitHub, Linkedin, Mail } from 'react-feather';
import imgRust from '/img/rust.webp';
import imgGo from '/img/go.webp';
import imgJava from '/img/java.webp';
import imgDotnet from '/img/dotnet.webp';
import imgPython from '/img/python.webp';
import imgJavascript from '/img/javascript.webp';
import imgTypescript from '/img/typescript.webp';
import imgReact from '/img/react.webp';
import imgHtmx from '/img/htmx.webp';
import imgPreact from '/img/preact.webp';
import imgAngular from '/img/angular.webp';
import imgNextjs from '/img/nextjs.webp';
import imgExpress from '/img/express.webp';
import imgElysia from '/img/elysia.webp';
import imgSpring from '/img/spring.webp';
import imgMongodb from '/img/mongodb.webp';
import imgMysql from '/img/mysql.webp';
import imgPostgreSQL from '/img/postgresql.webp';
import imgPrisma from '/img/prisma.webp';
import imgTurso from '/img/turso.webp';
import imgBootstrap from '/img/bootstrap.webp';
import imgTailwindcss from '/img/tailwindcss.webp';

const buttonContent = [
  {
    Icon: GitHub,
    label: 'GitHub',
    url: 'https://github.com/loxewyx',
  },
  {
    Icon: Linkedin,
    label: 'LinkedIn',
    url: 'https://es.linkedin.com/in/luis-ruiz-caracuel-9ab109232',
  },
  {
    Icon: Mail,
    label: 'Contact me',
    url: 'mailto:luisruizcaracuel@gmail.com',
  },
]

const languages = [
  { name: 'Rust', src: imgRust, url: 'https://www.rust-lang.org/' },
  { name: 'Golang', src: imgGo, url: 'https://go.dev/' },
  {
    name: 'Java',
    src: imgJava,
    url: 'https://www.java.com/en/download/help/whatis_java.html',
  },
  { name: 'C# (DotNET)', src: imgDotnet, url: 'https://dotnet.microsoft.com/' },
  { name: 'Python 3', src: imgPython, url: 'https://www.python.org/' },
  {
    name: 'Javascript',
    src: imgJavascript,
    url: 'https://nodejs.org/',
  },
  {
    name: 'Typescript',
    src: imgTypescript,
    url: 'https://www.typescriptlang.org/',
  },
];

const frameworks = [
  { name: 'React', src: imgReact, url: 'https://react.dev/' },
  { name: 'Preact', src: imgPreact, url: 'https://preactjs.com/' },
  { name: 'HTMX', src: imgHtmx, url: 'https://htmx.org/' },
  { name: 'Angular [12-18]', src: imgAngular, url: 'https://angular.dev/' },
  { name: 'NextJS', src: imgNextjs, url: 'https://nextjs.org/' },
  { name: 'Express', src: imgExpress, url: 'https://expressjs.com/' },
  { name: 'Elysia', src: imgElysia, url: 'https://elysiajs.com/' },
  { name: 'Spring', src: imgSpring, url: 'https://spring.io/' },
];

const databases = [
  { name: 'MongoDB', src: imgMongodb, url: 'https://www.mongodb.com/' },
  { name: 'MySQL/MariaDB', src: imgMysql, url: 'https://www.mysql.com/' },
  {
    name: 'PostgreSQL',
    src: imgPostgreSQL,
    url: 'https://www.postgresql.org/',
  },
  { name: 'Prisma', src: imgPrisma, url: 'https://www.prisma.io/' },
  { name: 'Turso', src: imgTurso, url: 'https://turso.tech/' },
];

const styling = [
  {
    name: 'Bootstrap',
    src: imgBootstrap,
    url: 'https://getbootstrap.com/docs/5.0/getting-started/introduction/',
  },
  {
    name: 'Tailwind',
    src: imgTailwindcss,
    url: 'https://tailwindcss.com/',
  },
];

const projects: {
  title: string;
  category:
    | 'Web Developement'
    | 'Desktop Developement'
    | 'Mobile Developement'
    | 'Data Science';
  description: string;
  url: string;
  color: string;
}[] = [
  {
    title: 'DAM Tools - Firefox Build Extension',
    category: 'Web Developement',
    description:
      'A tool for my high school that integrates with Google Drive through my API.',
    url: 'https://github.com/LoXewyX/dam-tools-firefox',
    color: 'bg-purple-500',
  },
  {
    title: 'DAM Tools - Chrome Build Extension',
    category: 'Web Developement',
    description:
      'A tool for my high school that integrates with Google Drive through my API.',
    url: 'https://github.com/LoXewyX/dam-tools-chrome',
    color: 'bg-purple-500',
  },
  {
    title: 'LoXewyX App',
    category: 'Desktop Developement',
    description: 'My personal application made out of Tauri.',
    url: 'https://github.com/LoXewyX/loxewyx-app',
    color: 'bg-green-500',
  },
];

const certifications = [
  {
    title: 'EDA: Exploratory Data Analysis with Python',
    issuer: 'OpenWebinars',
    year: 2022,
  },
  {
    title: 'Data Visualization Course with Python',
    issuer: 'OpenWebinars',
    year: 2022,
  },
  {
    title: 'Python 3 course from scratch',
    issuer: 'OpenWebinars',
    year: 2022,
  },
  {
    title: 'Microcomputer systems and networks (Middle cycle)',
    issuer: 'Ins Baix Camp',
    year: 2022,
  },
  {
    title: 'Fullstack Spring+Angular Bootcamp (250h)',
    issuer: 'Fundación Esplai',
    year: 2020,
  },
];

export { buttonContent, languages, frameworks, databases, styling, projects, certifications };
