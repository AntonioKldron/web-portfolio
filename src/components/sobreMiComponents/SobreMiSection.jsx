import rostro  from '../../assets/img/img/miFoto.png'

export default function SobreMiSection() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-16 text-white max-w-7xl mx-auto">
      {/* Imagen */}
      <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg flex-shrink-0 mb-8 md:mb-0 md:mr-16">
        <img
          src={rostro}
          alt="José Antonio Cornelio Calderón"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Texto */}
      <div className="max-w-xl text-center md:text-left">
        <h2 className="text-4xl font-bold mb-4 text-blue-400 tracking-wide">Sobre Mí</h2>
        <p className="text-white text-lg leading-relaxed font-semibold">
          Ingeniero en Sistemas con experiencia en desarrollo backend, APIs REST y bases de datos. 
          Especializado en integración ERP automotriz con Django y Docker. Conocimientos en React, Angular y DevOps. 
          Apasionado por aprender y crear soluciones eficientes.
        </p>
      </div>
    </section>
  );
}
