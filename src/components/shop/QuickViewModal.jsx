import { useState, useEffect, useRef } from "react";
import { X, Minus, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const QuickViewModal = ({ product, isOpen, onClose }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const modalRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      modalRef.current?.focus();
    }

    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen || !product) return null;

  const { name, category, image, price, originalPrice, rating, description, sizes, colors } = product;
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        ref={modalRef}
        tabIndex={-1}
        className="relative z-10 max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-3xl bg-white shadow-2xl animate-in fade-in zoom-in duration-300"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 rounded-full bg-white p-2 shadow-lg transition-all hover:scale-110 hover:bg-gray-100"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Product Image */}
          <div className="relative bg-gray-100">
            <img
              src={image}
              alt={name}
              className="h-96 w-full object-cover md:h-full"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col p-6 md:p-8">
            <span className="text-xs font-medium uppercase tracking-wider text-gray-500">
              {category}
            </span>
            <h2 className="mt-2 text-2xl font-bold text-[var(--color-heading)] md:text-3xl">
              {name}
            </h2>

            {/* Rating */}
            <div className="mt-3 flex items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm font-medium text-[var(--color-text)]">
                ({rating.toFixed(1)})
              </span>
            </div>

            {/* Price */}
            <div className="mt-3 flex items-center gap-3">
              <span className="text-3xl font-bold text-[var(--color-accent)]">
                ₹{price.toFixed(0)}
              </span>
              {originalPrice && (
                <>
                  <span className="text-lg text-gray-400 line-through">
                    ₹{originalPrice.toFixed(0)}
                  </span>
                  <span className="text-sm font-semibold text-green-600">
                    {discount}% OFF
                  </span>
                </>
              )}
            </div>

            {/* Description */}
            {description && (
              <p className="mt-4 text-sm text-[var(--color-text)] leading-relaxed">
                {description}
              </p>
            )}

            {/* Size Selector */}
            {sizes && sizes.length > 0 && (
              <div className="mt-6">
                <h3 className="text-sm font-semibold text-[var(--color-heading)]">
                  Size
                </h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                        selectedSize === size
                          ? "bg-[var(--color-accent)] text-white"
                          : "border border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--color-accent)]"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Color Selector */}
            {colors && colors.length > 0 && (
              <div className="mt-6">
                <h3 className="text-sm font-semibold text-[var(--color-heading)]">
                  Color
                </h3>
                <div className="mt-2 flex flex-wrap gap-3">
                  {colors.map((color) => (
                    <button
                      key={color.name}
                      type="button"
                      onClick={() => setSelectedColor(color.name)}
                      className={`h-9 w-9 rounded-full ${color.bg} transition-transform hover:scale-110 ${
                        selectedColor === color.name
                          ? "ring-2 ring-[var(--color-accent)] ring-offset-2"
                          : "ring-1 ring-gray-200"
                      }`}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-[var(--color-heading)]">
                Quantity
              </h3>
              <div className="mt-2 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="rounded-lg border border-[var(--color-border)] p-2 transition-colors hover:border-[var(--color-accent)]"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-12 text-center text-lg font-semibold text-[var(--color-heading)]">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="rounded-lg border border-[var(--color-border)] p-2 transition-colors hover:border-[var(--color-accent)]"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-col gap-3">
              <button
                type="button"
                className="w-full rounded-xl bg-[var(--color-accent)] px-6 py-3.5 text-base font-semibold text-white transition-all hover:bg-[var(--color-primary)] hover:shadow-lg hover:-translate-y-0.5"
              >
                Add to Cart
              </button>
              <button
                type="button"
                onClick={() => navigate(`/product/${id}`)}
                className="w-full rounded-xl border border-[var(--color-border)] px-6 py-3.5 text-base font-semibold text-[var(--color-text)] transition-all hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                View Full Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;