 import BrandCard from "./BrandCard";
import brands from "../../../data/brands";

const Brands = () => {
  return (
    <section className="bg-white mt-4 pt-6 pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center">
          <h2 className="mt-4 pt-6 pb-4 text-xl font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
            Trusted Brands
          </h2>

          <h1 className="mt-4 pt-1 pb-4 text-4xl font-bold text-[var(--color-heading)] lg:text-5xl">
            Shop Your Favourite Brands
          </h1>
        </div>

        {/* Brand List */}
        <div className=" mt-8 pt-2 flex flex-wrap items-center justify-center gap-8">
          {brands.map((brand) => (
            <BrandCard
              key={brand.id}
              name={brand.name}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Brands;
