import fondoSobreMI from '../assets/img/img/fondoSobreMI.png'
import SobreMiSection from './sobreMiComponents/SobreMiSection.jsx'
import '../style/styles.css'; 

export default function SobreMiPage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${fondoSobreMI})` }}
    >
        <SobreMiSection/>
    </div>
  );
}