import React, { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-blue-700">
          Antonio Cornelio
        </a>

        {/* Navegación desktop */}
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <a
            href="#about"
            className="hover:text-blue-700 transition-colors duration-300"
          >
            Sobre mí
          </a>
          <a
            href="#experience"
            className="hover:text-blue-700 transition-colors duration-300"
          >
            Experiencia
          </a>
          <a
            href="#projects"
            className="hover:text-blue-700 transition-colors duration-300"
          >
            Proyectos
          </a>
          <a
            href="#contact"
            className="hover:text-blue-700 transition-colors duration-300"
          >
            Contacto
          </a>
        </nav>

        {/* Botón menú móvil */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <nav className="md:hidden bg-white shadow-inner">
          <a
            href="#about"
            className="block px-6 py-3 border-t border-gray-200 hover:bg-blue-50"
            onClick={() => setIsOpen(false)}
          >
            Sobre mí
          </a>
          <a
            href="#experience"
            className="block px-6 py-3 border-t border-gray-200 hover:bg-blue-50"
            onClick={() => setIsOpen(false)}
          >
            Experiencia
          </a>
          <a
            href="#projects"
            className="block px-6 py-3 border-t border-gray-200 hover:bg-blue-50"
            onClick={() => setIsOpen(false)}
          >
            Proyectos
          </a>
          <a
            href="#contact"
            className="block px-6 py-3 border-t border-gray-200 hover:bg-blue-50"
            onClick={() => setIsOpen(false)}
          >
            Contacto
          </a>
        </nav>
      )}
    </header>
  );
}