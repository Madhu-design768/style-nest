import ProductCard from "./ProductCard";
import products from "../../../data/products";

/**
 * Featured Products Section
 */

const FeaturedProducts = () => {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="mb-16 text-center">

          <p className="font-semibold uppercase tracking-[4px] text-[var(--color-accent)]">
            Featured Products
          </p>

          <h2 className="mt-4 text-4xl font-bold text-[var(--color-heading)] lg:text-5xl">
            Trending Collection
          </h2>

          <p className="mt-4 text-lg text-gray-500">
            Discover our handpicked fashion essentials.
          </p>

        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">

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