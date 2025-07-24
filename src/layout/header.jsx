import { useState } from "react";

export default function HeaderMain() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [experienciaOpen, setExperienciaOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const toggleExperiencia = () => setExperienciaOpen((prev) => !prev);

  const handleSelect = (option) => {
    console.log("Seleccionaste:", option);
    setExperienciaOpen(false);
    setMenuOpen(false); // opcional cerrar todo al seleccionar
  };

  return (
    <header className="bg-gray-900 text-white shadow-lg font-sans sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Nombre */}
        <div className="text-xl font-bold tracking-wide">José Antonio Cornelio Calderón</div>

        {/* Botón hamburguesa móvil */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
        >
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {menuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" /> // X para cerrar
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" /> // barras hamburguesa
            )}
          </svg>
        </button>

        {/* Menú desktop */}
        <nav className="hidden md:flex items-center gap-8 text-lg font-medium">
          <h1 className="hover:text-gray-300 cursor-pointer transition-colors">Sobre Mí</h1>
          <h1 className="hover:text-gray-300 cursor-pointer transition-colors">Perfil Profesional</h1>
          <h1 className="hover:text-gray-300 cursor-pointer transition-colors">Tecnologías</h1>

          {/* Dropdown experiencia desktop */}
          <div className="relative">
            <button
              onClick={toggleExperiencia}
              className="flex items-center hover:text-gray-300 cursor-pointer transition-colors focus:outline-none"
              aria-haspopup="true"
              aria-expanded={experienciaOpen}
            >
              Experiencia
              <svg
                className={`ml-2 h-4 w-4 transform transition-transform duration-200 ${
                  experienciaOpen ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {experienciaOpen && (
              <ul className="absolute right-0 mt-2 bg-gray-800 text-white rounded-md shadow-lg z-10 w-48">
                <li
                  className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                  onClick={() => handleSelect("FAS")}
                >
                  FAS
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                  onClick={() => handleSelect("Intelisis DMS")}
                >
                  Intelisis DMS
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                  onClick={() => handleSelect("Freelancer")}
                >
                  Freelancer
                </li>
              </ul>
            )}
          </div>
        </nav>
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <nav className="md:hidden bg-gray-800 px-6 py-4 space-y-4 text-lg font-medium">
          <h1 className="hover:text-gray-300 cursor-pointer transition-colors" onClick={() => setMenuOpen(false)}>
            Sobre Mí
          </h1>
          <h1 className="hover:text-gray-300 cursor-pointer transition-colors" onClick={() => setMenuOpen(false)}>
            Perfil Profesional
          </h1>
          <h1 className="hover:text-gray-300 cursor-pointer transition-colors" onClick={() => setMenuOpen(false)}>
            Tecnologías
          </h1>

          {/* Dropdown experiencia móvil */}
          <div>
            <button
              onClick={toggleExperiencia}
              className="flex items-center hover:text-gray-300 cursor-pointer transition-colors focus:outline-none w-full"
              aria-haspopup="true"
              aria-expanded={experienciaOpen}
            >
              Experiencia
              <svg
                className={`ml-2 h-4 w-4 transform transition-transform duration-200 ${
                  experienciaOpen ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {experienciaOpen && (
              <ul className="mt-2 bg-gray-700 rounded-md shadow-inner">
                <li
                  className="px-4 py-2 hover:bg-gray-600 cursor-pointer"
                  onClick={() => handleSelect("FAS")}
                >
                  FAS
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-600 cursor-pointer"
                  onClick={() => handleSelect("Intelisis DMS")}
                >
                  Intelisis DMS
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-600 cursor-pointer"
                  onClick={() => handleSelect("Freelancer")}
                >
                  Freelancer
                </li>
              </ul>
            )}
          </div>
        </nav>
      )}
    </header>
  );
}
