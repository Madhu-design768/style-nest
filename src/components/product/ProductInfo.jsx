import { Star } from "lucide-react";

const ProductInfo = ({ product }) => {
  const price =
    typeof product.price === "string"
      ? parseFloat(product.price.replace(/[^0-9.]/g, ""))
      : product.price || 0;
  const originalPrice =
    typeof product.originalPrice === "string"
      ? parseFloat(product.originalPrice.replace(/[^0-9.]/g, ""))
      : product.originalPrice || null;

  const discount = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  return (
    <div className="pt-10">
      <span className="text-xs font-medium uppercase tracking-wider text-[var(--color-text)]">
        {product.category}
      </span>
      <h1 className="pt-2 text-2xl font-bold text-[var(--color-heading)]">
        {product.name}
      </h1>



      <div className="mt-3 flex items-center gap-2">
        {/* <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${
                i < Math.floor(product.rating)
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300"
              }`}
            />
          ))}
        </div> */}
        {/* <span className="text-sm font-medium text-[var(--color-text)]">
          {product.rating?.toFixed(1)}
        </span>
        <span className="text-sm text-[var(--color-text)]">
          ({product.reviewCount || 0} reviews)
        </span> */}
      </div>

      <div className="mt-4 pt-3 flex items-center gap-3">
        <span className="text-3xl font-bold text-[var(--color-accent)]">
          ₹{price.toFixed(0)}
        </span>
        {originalPrice && (
          <>
            <span className="text-xl text-gray-400 line-through">
              ₹{originalPrice.toFixed(0)}
            </span>
            <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-600">
              -{discount}%
            </span>
          </>
        )}
      </div>
      <p className="mt-4 pt-3 text-base leading-relaxed text-[var(--color-text)]">
        Premium quality {product.name.toLowerCase()} designed for comfort and
        style. Perfect for any occasion with its modern fit and high-quality
        materials.
      </p>
    </div>
  );
};

export default ProductInfo;
