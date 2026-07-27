/**
 * Promo Banner Section
 */

const PromoBanner = () => {
  return (
    <section className="bg-[var(--color-primary)] py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-4 sm:px-6 lg:flex-row lg:px-8">

        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">

          <p className="font-semibold uppercase tracking-[4px] text-[var(--color-accent)]">
            Summer Collection 2026
          </p>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-white lg:text-6xl">
            Up To 50% Off
          </h2>

          <p className="mt-6 max-w-xl text-lg text-gray-300">
            Discover premium fashion essentials designed for every season.
            Refresh your wardrobe with timeless styles and exclusive offers.
          </p>

          <button className="mt-8 rounded-xl bg-[var(--color-accent)] px-8 py-4 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-[#a96d45]">
            Shop Collection
          </button>

        </div>

        {/* Right Image */}
        <div className="flex-1">

          <img
            src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80"
            alt="Fashion Collection"
            className="h-[550px] w-full rounded-3xl object-cover shadow-2xl"
          />

        </div>

      </div>
    </section>
  );
};

export default PromoBanner;