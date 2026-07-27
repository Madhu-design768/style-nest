/**
 * HeroContent Component
 * Displays heading, description and CTA buttons.
 */

const HeroContent = () => {
  return (
    <div className="flex-1 space-y-6">
      <span className="inline-block bg-amber-100 text-amber-700 px-4 py-1 rounded-full text-sm font-semibold">
        NEW ARRIVALS
      </span>

      <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-[var(--color-primary)]">
        Elevate Your <br />
        Style With{" "}
        <span className="text-[var(--color-accent)]">Premium Fashion</span>
      </h1>

      <p className="text-gray-600 text-lg max-w-xl">
        Discover timeless fashion curated for modern lifestyles. Shop the latest
        trends with confidence.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <button className="bg-[#111827] text-white px-7 py-4 rounded-xl font-semibold hover:bg-black transition duration-300">
          Shop Now
        </button>

        <button className="border border-gray-300 px-7 py-4 rounded-xl font-semibold hover:bg-gray-100 transition duration-300">
          Explore Collection
        </button>
      </div>
    </div>
  );
};

export default HeroContent;
