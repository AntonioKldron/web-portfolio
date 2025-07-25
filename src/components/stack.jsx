import Slider from "react-slick";
import TechCard from "./stackComponents/StackSection.jsx"; 

import { FaReact, FaGitAlt, FaDocker, FaAngular, FaDatabase } from "react-icons/fa";
import {
  SiJavascript,
  SiPython,
  SiDotnet,
  SiPostgresql,
  SiDjango,
  SiGithub,
  SiSupabase,
} from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { MdOutlineDataUsage } from "react-icons/md";

export default function StackSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // <-- Asegúrate de que esto esté en 'true'
    autoplaySpeed: 4000, // <-- Velocidad de cambio del carrusel (1 segundo)
    arrows: false, // <-- Botones de navegación ocultos
    pauseOnHover: true, // <-- Pausa el carrusel al pasar el ratón por encima
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const categorias = [
    {
      title: "Lenguajes de Programación",
      items: [
        { icon: <SiJavascript />, name: "JavaScript" },
        { icon: <SiPython />, name: "Python" },
        { icon: <SiDotnet />, name: "C#" },
      ],
    },
    {
      title: "Frameworks y Librerías",
      items: [
        { icon: <FaReact />, name: "React" },
        { icon: <FaAngular />, name: "Angular" },
        { icon: <SiDjango />, name: "Django" },
        { icon: <MdOutlineDataUsage />, name: "Django REST Framework" },
        { icon: <SiDotnet />, name: ".NET" },
      ],
    },
    {
      title: "Bases de Datos",
      items: [
        { icon: <FaDatabase />, name: "SQL Server" },
        { icon: <SiPostgresql />, name: "PostgreSQL" },
        { icon: <SiSupabase />, name: "Supabase" },
      ],
    },
    {
      title: "Cloud e Infraestructura",
      items: [
        { icon: <FaDocker />, name: "Docker" },
        { icon: <SiSupabase />, name: "Supabase (BaaS)" },
      ],
    },
    {
      title: "Herramientas",
      items: [
        { icon: <FaGitAlt />, name: "Git" },
        { icon: <SiGithub />, name: "GitHub" },
        { icon: <FaDatabase />, name: "SSMS" },
      ],
    },
  ];

  return (
    <section className="px-6 py-20 text-white mx-auto min-h-screen bg-slate-900">
      <h2 className="text-4xl font-bold text-center text-slate-400 mb-12">
        Stack Tecnológico
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-25">
        {categorias.slice(0, 3).map((categoria, idx) => (
          <div key={idx} className="mb-4 md:mb-0">
            <h3 className="text-2xl font-semibold text-stone-100 mb-4 text-center">
              {categoria.title}
            </h3>
            <Slider {...settings}>
              {categoria.items.map((tech, i) => (
                <div key={i} className="flex justify-center items-center h-full">
                  <TechCard icon={tech.icon} name={tech.name} />
                </div>
              ))}
            </Slider>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
        {categorias.slice(3, 5).map((categoria, idx) => (
          <div key={idx} className="mb-4 md:mb-0">
            <h3 className="text-2xl font-semibold text-stone-100 mb-4 text-center">
              {categoria.title}
            </h3>
            <Slider {...settings}>
              {categoria.items.map((tech, i) => (
                <div key={i} className="flex justify-center items-center h-full">
                  <TechCard icon={tech.icon} name={tech.name} />
                </div>
              ))}
            </Slider>
          </div>
        ))}
      </div>
    </section>
  );
}