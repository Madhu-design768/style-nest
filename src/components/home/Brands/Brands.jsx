import BrandCard from "./BrandCard";
import brands from "../../../data/brands";

const Brands = () => {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">

        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-accent)]">
            Trusted Brands
          </p>

          <h2 className="mt-3 text-4xl font-bold text-[var(--color-heading)]">
            Shop Your Favorite Brands
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {brands.map((brand) => (
            <BrandCard key={brand.id} name={brand.name} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Brands;