import { Heart, ShoppingBag, Star } from "lucide-react";

/**
 * Product Card Component
 */

const ProductCard = ({ product }) => {
  return (
    <div className="group overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      <div className="relative overflow-hidden">

        <img
          src={product.image}
          alt={product.name}
          className="h-80 w-full object-cover transition duration-500 group-hover:scale-110"
        />

        <button className="absolute right-4 top-4 rounded-full bg-white p-2 shadow-md transition hover:bg-[var(--color-accent)] hover:text-white">
          <Heart size={18} />
        </button>

      </div>

      <div className="space-y-3 p-5">

        <p className="text-sm text-gray-500">
          {product.category}
        </p>

        <h3 className="text-xl font-semibold text-[var(--color-heading)]">
          {product.name}
        </h3>

        <div className="flex items-center gap-1 text-amber-500">
          <Star size={18} fill="currentColor" />
          <span className="text-sm text-gray-700">
            {product.rating}
          </span>
        </div>

        <div className="flex items-center justify-between">

          <span className="text-2xl font-bold text-[var(--color-primary)]">
            {product.price}
          </span>

          <button className="rounded-full bg-[var(--color-primary)] p-3 text-white transition hover:bg-[var(--color-accent)]">
            <ShoppingBag size={18} />
          </button>

        </div>

      </div>

    </div>
  );
};

export default ProductCard;