import imgImage from '../../../imports/Home/9c567a9f64e611f4bdf98e484bcf4c7b9d2ebf5c.png';
import imgRodina from '../../../imports/Home/c9ae4b6460946b23df1f30bee29ae9ffb6775c62.png';

export default function SpecialOffer() {
  return (
    <section className="w-full bg-[#fbf2eb] overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center">
        {/* Left: Image */}
        <div className="w-full md:w-1/2 lg:w-[60%] h-[300px] md:h-[600px] lg:h-[815px] overflow-hidden">
          <img
            src={imgRodina}
            alt="Spa treatment special offer"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Right: Content */}
        <div className="w-full md:w-1/2 lg:w-[40%] h-auto md:h-[600px] lg:h-[815px] overflow-hidden">
          <img
            src={imgImage}
            alt="Special offer details"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
