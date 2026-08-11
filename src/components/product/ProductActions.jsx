import { useState } from "react";
import {
  Heart,
  Minus,
  Plus,
  ShoppingCart,
  Zap,
//   ArrowUpRight,
} from "lucide-react";

const ProductActions = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const sizes = ["XS", "S", "M", "L", "XL"];
  const colors = [
    { name: "Black", bg: "bg-black" },
    { name: "White", bg: "bg-white border border-gray-200" },
    { name: "green", bg: "bg-green-300" },
    { name: "pink", bg: "bg-pink-300" },
  ];

  return (
    <div>
      <div className="mt-6">
        <h3 className="mb-3 pt-4 text-sm font-semibold uppercase tracking-wider text-[var(--color-heading)]">
          Color
        </h3>
        <div className="flex flex-wrap gap-3 pt-3">
          {colors.map((color) => (
            <button
              key={color.name}
              type="button"
              onClick={() => setSelectedColor(color.name)}
              className={`h-8 w-8 rounded-full ${color.bg} transition-transform hover:scale-110 ${
                selectedColor === color.name
                  ? "ring-2 ring-[var(--color-accent)] ring-offset-2"
                  : ""
              }`}
              title={color.name}
            />
          ))}
        </div>
      </div>

      <div className="mt-6">
        <h3 className="mb-3 pt-6 text-sm font-semibold uppercase tracking-wider text-[var(--color-heading)]">
          Size
        </h3>
        <div className="flex flex-wrap gap-2 pt-3">
          {sizes.map((size) => (
            <button
              key={size}
              type="button"
              onClick={() => setSelectedSize(size)}
              className={`rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${
                selectedSize === size
                  ? "border-[var(--color-accent)] bg-[var(--color-accent)] text-white"
                  : "border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <h3 className="mb-3 pt-6 text-sm font-semibold uppercase tracking-wider text-[var(--color-heading)]">
          Quantity
        </h3>
        <div className="flex items-center gap-2 pt-3">
          <button
            type="button"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--color-border)] text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="w-12 text-center text-lg font-semibold text-[var(--color-heading)]">
            {quantity}
          </span>
          <button
            type="button"
            onClick={() => setQuantity(quantity + 1)}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--color-border)] text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-2 pt-6">
        <button
          type="button"
          className="flex h-11 flex-1 items-center justify-center rounded-2xl bg-[var(--color-accent)] px-5 text-sm font-semibold text-white transition-all hover:bg-[var(--color-primary)]"
        >
             <Zap className="h-5 w-5"/>
          Buy it Now
        </button>

        {/* <button
          type="button"
          aria-label="Buy now"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-white transition-all hover:bg-[var(--color-accent)]"
        >
          <ArrowUpRight className="h-4 w-4" />
        </button> */}

        <button
          type="button"
          className="flex h-11 flex-1 items-center justify-center rounded-2xl border border-[var(--color-accent)] bg-white px-5 text-sm font-semibold text-[var(--color-primary)] transition-all hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
        >
       <ShoppingCart className="h-5 w-5"/>
          Add to Cart
        </button>
      </div>
      {/* <div className="pt-2 flex justify-center ">
        <button
          type="button"
          className="mt-3 flex h-11 w-full items-center justify-center rounded-full border border-[var(--color-border)] bg-white px-5 text-sm font-semibold text-[var(--color-heading)] transition-all hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
        >
          <Heart className="h-5 w-5" />
          Add to Wishlist
        </button>
      </div> */}


    </div>
  );
};

export default ProductActions;
