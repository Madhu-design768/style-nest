/**
 * Promo Banner Section
 */

const PromoBanner = () => {
  return (
    <section className="bg-[var(--color-primary)] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">

          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
              Summer Collection 2026
            </p>

            <h2 className="mt-6 text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white">
              Up To 50% Off
            </h2>

            <p className="mt-6 max-w-xl text-lg text-gray-300 leading-relaxed">
              Discover premium fashion essentials designed for every season. 
              Refresh your wardrobe with timeless styles and exclusive offers.
            </p>

            <button className="mt-8 rounded-full bg-[var(--color-accent)] px-10 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl">
              Shop Collection
            </button>

          </div>

          {/* Right Image */}
          <div className="flex-1 w-full">
            <img
              src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80"
              alt="Fashion Collection"
              className="w-full h-auto max-h-[500px] lg:max-h-[600px] object-cover rounded-[2rem] shadow-2xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default PromoBanner;