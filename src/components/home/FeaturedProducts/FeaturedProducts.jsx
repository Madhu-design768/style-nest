import ProductCard from "./ProductCard";
import products from "../../../data/products";

/**
 * Featured Products Section
 */

const FeaturedProducts = () => {
  return (
    <section className="bg-white py-24 mt-4 pt-6 pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mb-12 text-center">
          <span className="inline-block font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)] text-xl mt-4 pt-4 pb-2">
            Featured Products
          </span>
          <h2 className="mt-4 pt-1 pb-4 text-4xl lg:text-5xl xl:text-6xl font-bold text-[var(--color-heading)] leading-tight">
            Trending Collection
          </h2>
          <p className="mt-4 pt-1 pb-4 text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Discover our handpicked fashion essentials crafted for the modern individual.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedProducts;