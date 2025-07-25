export default function TechCard({ icon, name }) {
  return (
    <div className="bg-[#1f2937] p-6 rounded-2xl shadow-md mx-3 h-40 w-60 flex flex-col items-center justify-center hover:scale-105 transform transition duration-300 ease-in-out">
      <div className="text-4xl text-yellow-400 mb-3">{icon}</div>
      <h3 className="text-white text-lg font-semibold text-center">{name}</h3>
    </div>
  );
}
