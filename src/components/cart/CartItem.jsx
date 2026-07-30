import { Trash2, Minus, Plus } from "lucide-react";

const CartItem = ({ item }) => {
  const { id, name, category, size, color, price, quantity, image } = item;

  return (
    <div className="flex flex-col gap-4 rounded-xl border border-[var(--color-border)] bg-white p-4 sm:flex-row sm:items-center">
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
            <h3 className="text-sm font-semibold text-[var(--color-heading)]">
              {name}
            </h3>
            <p className="mt-1 text-xs text-[var(--color-text)]">
              {category}
            </p>
            <div className="mt-2 flex flex-wrap gap-2 text-xs text-[var(--color-text)]">
              {size && <span>Size: {size}</span>}
              {color && <span>Color: {color}</span>}
            </div>
          </div>
          <button
            type="button"
            className="rounded-lg p-2 text-[var(--color-text)] transition-colors hover:bg-red-50 hover:text-red-600"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>

        {/* Quantity and Price */}
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--color-border)] text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              <Minus className="h-3 w-3" />
            </button>
            <span className="w-8 text-center text-sm font-semibold text-[var(--color-heading)]">
              {quantity}
            </span>
            <button
              type="button"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--color-border)] text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              <Plus className="h-3 w-3" />
            </button>
          </div>
          <span className="text-sm font-bold text-[var(--color-accent)]">
            ${(price * quantity).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;