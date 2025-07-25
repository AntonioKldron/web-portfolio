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
      <div className="max-xl text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-wide text-blue-400">
          Soy <span className="text-yellow-400 drop-shadow-md animate-pulse">José Antonio Cornelio Calderón</span>
        </h2>
        <p className="text-white text-lg leading-relaxed font-semibold text-justify">
          Ingeniero en Sistemas especializado en desarrollo de software, con experiencia en la integración de sistemas mediante APIs REST, 
          creación de ensamblados con DLLs en .NET, y administración de bases de datos con grandes volúmenes de información.
        </p>
      </div>
    </section>
  );
}
