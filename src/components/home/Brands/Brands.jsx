import BrandCard from "./BrandCard";
import brands from "../../../data/brands";

const Brands = () => {
  return (
    <section className="bg-white mt-10 pt-16 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-50 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
            Trusted Brands
          </p>

          <h2 className="mb-10 text-4xl lg:text-5xl font-bold text-[var(--color-heading)]">
            Shop Your Favourite Brands
          </h2>
        </div>

        {/* Brand List */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          {brands.map((brand) => (
            <BrandCard key={brand.id} name={brand.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
