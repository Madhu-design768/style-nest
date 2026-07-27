import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
 
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8 xl:gap-20">
          <HeroContent />
          <HeroImage />
        </div>
      </div>
    </section>
  );
};

export default Hero;