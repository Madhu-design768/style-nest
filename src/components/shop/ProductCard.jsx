import { Star, Heart } from "lucide-react";

const ProductCard = ({ product, onQuickView }) => {
  const { id, name, category, image, price, originalPrice, rating, reviewCount, isSale } = product;

  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <div className="group flex flex-col rounded-2xl border border-[var(--color-border)] bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
      {/* Image Container */}
      <div className="relative overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={name}
          className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Badges */}
        <div className="absolute left-3 top-3 flex flex-col gap-2">
          {isSale && (
            <span className="rounded-lg bg-[var(--color-accent)] px-3 py-1.5 text-xs font-bold text-white">
              SALE {discount > 0 && `-${discount}%`}
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button className="absolute right-3 top-3 rounded-full bg-white p-2.5 shadow-lg transition-all duration-300 hover:bg-[var(--color-accent)] hover:scale-110 hover:shadow-xl">
          <Heart className="h-5 w-5 text-gray-600 transition-colors group-hover:fill-white group-hover:text-white" />
        </button>

        {/* Quick View Button */}
        <button
          onClick={onQuickView}
          className="absolute bottom-3 left-3 right-3 rounded-lg bg-white/90 backdrop-blur-sm px-4 py-2.5 text-sm font-semibold text-[var(--color-heading)] shadow-lg transition-all duration-300 hover:bg-[var(--color-accent)] hover:text-white md:opacity-0 md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0"
        >
          Quick View
        </button>
      </div>

      {/* Product Info */}
      <div className="flex flex-1 flex-col p-5">
        <span className="text-xs font-medium uppercase tracking-wider text-gray-500">
          {category}
        </span>
        <h3 className="mt-2 line-clamp-2 text-base font-bold text-[var(--color-heading)] transition-colors group-hover:text-[var(--color-accent)]">
          {name}
        </h3>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-2">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm font-medium text-[var(--color-text)]">
            ({rating.toFixed(1)})
          </span>
        </div>

        {/* Price */}
        <div className="mt-auto flex items-center gap-2 pt-3">
          <span className="text-xl font-bold text-[var(--color-accent)]">
            ₹{price.toFixed(0)}
          </span>
          {originalPrice && (
            <>
              <span className="text-sm text-gray-400 line-through">
                ₹{originalPrice.toFixed(0)}
              </span>
              <span className="text-xs font-semibold text-green-600">
                {discount}% OFF
              </span>
            </>
          )}
        </div>

        {/* Add to Cart Button */}
        <button className="mt-4 w-full rounded-xl bg-[var(--color-accent)] px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[var(--color-primary)] hover:shadow-lg hover:-translate-y-0.5">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;