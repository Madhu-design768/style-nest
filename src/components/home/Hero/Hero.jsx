import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

/**
 * Hero Component
 * Landing page hero section.
 */

const Hero = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col lg:flex-row items-center gap-12">

          <HeroContent />

          <HeroImage />

        </div>

      </div>
    </section>
  );
};

export default Hero;