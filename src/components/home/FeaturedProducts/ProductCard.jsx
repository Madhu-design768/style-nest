import { Heart, ShoppingBag, Star, Eye } from "lucide-react";

/**
 * Product Card Component
 */

const ProductCard = ({ product }) => {
  return (
    <div className="group relative bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
      
      {/* Image Container */}
      <div className="relative overflow-hidden aspect-[3/4]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />

        {/* Badge Overlay */}
        {product.badge && (
          <div className="absolute top-4 left-4 z-10">
            <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${
              product.badge === 'Sale' 
                ? 'bg-[var(--color-accent)] text-white' 
                : 'bg-[var(--color-primary)] text-white'
            }`}>
              {product.badge}
            </span>
          </div>
        )}

        {/* Quick View */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
          <button className="flex items-center gap-2 bg-white/95 backdrop-blur-sm text-[var(--color-primary)] px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-[0.05em] translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-[var(--color-accent)] hover:text-white">
            <Eye size={18} />
            Quick View
          </button>
        </div>

        {/* Wishlist Button */}
        <button className="absolute right-4 top-4 rounded-full bg-white/95 backdrop-blur-sm p-2.5 shadow-lg transition-all duration-300 hover:bg-[var(--color-accent)] hover:text-white hover:scale-110 z-10">
          <Heart size={18} />
        </button>
      </div>

      {/* Content */}
      <div className="p-6 space-y-3">
        
        {/* Category */}
        <p className="text-sm font-medium uppercase tracking-[0.15em] text-gray-500">
          {product.category}
        </p>

        {/* Product Name */}
        <h3 className="text-xl font-bold text-[var(--color-heading)] leading-tight group-hover:text-[var(--color-accent)] transition-colors duration-300">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 text-[var(--color-accent)]">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={16} 
                fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                className={i < Math.floor(product.rating) ? "text-[var(--color-accent)]" : "text-gray-300"}
              />
            ))}
          </div>
          <span className="text-sm font-semibold text-[var(--color-primary)]">
            {product.rating}
          </span>
        </div>

        {/* Price & Action */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-baseline gap-3">
            <span className="text-2xl font-bold text-[var(--color-primary)]">
              {product.price}
            </span>
            {product.originalPrice && (
              <span className="text-lg text-gray-400 line-through">
                {product.originalPrice}
              </span>
            )}
          </div>

          <button className="rounded-full bg-[var(--color-primary)] p-3 text-white transition-all duration-300 hover:bg-[var(--color-accent)] hover:scale-110 shadow-lg hover:shadow-xl">
            <ShoppingBag size={18} />
          </button>
        </div>

      </div>

    </div>
  );
};

export default ProductCard;