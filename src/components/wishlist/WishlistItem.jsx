import { Star, Trash2 } from "lucide-react";

const WishlistItem = ({ item }) => {
  const { id, name, category, image, price, originalPrice, rating, reviewCount, stockStatus } = item;

  const getStockBadge = () => {
    if (stockStatus === "In Stock") {
      return "bg-green-100 text-green-700";
    } else if (stockStatus === "Low Stock") {
      return "bg-yellow-100 text-yellow-700";
    } else {
      return "bg-red-100 text-red-700";
    }
  };

  return (
    <div className="rounded-xl border border-[var(--color-border)] bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        {/* Product Image */}
        <div className="h-32 w-full overflow-hidden rounded-lg bg-gray-100 sm:h-24 sm:w-24">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1">
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-wider text-[var(--color-text)]">
                {category}
              </span>
              <h3 className="mt-1 text-sm font-semibold text-[var(--color-heading)]">
                {name}
              </h3>
              <div className="mt-2 flex items-center gap-1">
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
                <span className="text-xs text-[var(--color-text)]">
                  ({reviewCount})
                </span>
              </div>
            </div>
            <button
              type="button"
              className="rounded-lg p-2 text-[var(--color-text)] transition-colors hover:bg-red-50 hover:text-red-600"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>

          {/* Price and Stock */}
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <span className="text-lg font-bold text-[var(--color-accent)]">
              ${price}
            </span>
            {originalPrice && (
              <span className="text-sm text-gray-400 line-through">
                ${originalPrice}
              </span>
            )}
            <span className={`rounded-full px-3 py-1 text-xs font-semibold ${getStockBadge()}`}>
              {stockStatus}
            </span>
          </div>

          {/* Add to Cart Button */}
          <button
            type="button"
            className="mt-3 w-full rounded-lg bg-[var(--color-accent)] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary)] sm:w-auto"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishlistItem;