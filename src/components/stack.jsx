import Slider from "react-slick";
import TechCard from "./stackComponents/StackSection.jsx";


import { FaReact, FaGitAlt, FaDocker, FaAngular, FaDatabase } from "react-icons/fa";
import { SiJavascript, SiPython, SiDotnet, SiPostgresql, SiDjango, SiVisualstudiocode, SiGithub, SiWamp, SiSupabase } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { MdOutlineDataUsage } from "react-icons/md";

export default function StackSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
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
        { icon: <TbSql />, name: "SQL" },
        { icon: <SiDotnet />, name: "C# / .NET" },
      ],
    },
    {
      title: "Frameworks y Librerías",
      items: [
        { icon: <FaReact />, name: "React" },
        { icon: <FaAngular />, name: "Angular" },
        { icon: <SiDjango />, name: "Django" },
        { icon: <MdOutlineDataUsage />, name: "Django REST Framework" },
        { icon: <SiDotnet />, name: ".NET DLLs" },
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
        { icon: <SiWamp />, name: "WAMP" },
        { icon: <SiSupabase />, name: "Supabase (BaaS)" },
      ],
    },
    {
      title: "Herramientas",
      items: [
        { icon: <FaGitAlt />, name: "Git" },
        { icon: <SiGithub />, name: "GitHub" },
        { icon: <SiVisualstudiocode />, name: "VS Code" },
        { icon: <FaDatabase />, name: "SSMS" },
      ],
    },
  ];

  return (
    <section className="px-6 py-20 text-white max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-blue-400 mb-12">
        Stack Tecnológico
      </h2>

      {categorias.map((categoria, idx) => (
        <div key={idx} className="mb-16">
          <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
            {categoria.title}
          </h3>
          <Slider {...settings}>
            {categoria.items.map((tech, i) => (
              <TechCard key={i} icon={tech.icon} name={tech.name} />
            ))}
          </Slider>
        </div>
      ))}
    </section>
  );
}
