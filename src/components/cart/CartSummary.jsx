import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const CartSummary = () => {
  const { cartTotal } = useCart();
  const navigate = useNavigate();

  const subtotal = cartTotal;
  const shipping = subtotal > 0 ? 0 : 0;
  const tax = subtotal * 0.08;
  const grandTotal = subtotal + shipping + tax;

  return (
    <div className="rounded-xl border border-[var(--color-border)] bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-bold text-[var(--color-heading)]">
        Order Summary
      </h2>

      <div className="space-y-4">
        <div className=" pt-2 flex items-center justify-between text-sm">
          <span className="text-[var(--color-text)]">Subtotal</span>
          <span className="font-semibold text-[var(--color-heading)]">
            ${subtotal.toFixed(2)}
          </span>
        </div>
        <div className="pt-2 flex items-center justify-between text-sm">
          <span className="text-[var(--color-text)]">Shipping</span>
          <span className="font-semibold text-[var(--color-heading)]">
            {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
          </span>
        </div>
        <div className=" pt-2 flex items-center justify-between text-sm">
          <span className="text-[var(--color-text)]">Estimated Tax</span>
          <span className="font-semibold text-[var(--color-heading)]">
            ${tax.toFixed(2)}
          </span>
        </div>
        <div className=" pt-2 flex items-center justify-between text-sm">
          <span className="text-[var(--color-text)]">Discount</span>
          <span className="font-semibold text-green-600">-$0.00</span>
        </div>

        <div className="border-t border-[var(--color-border)] pt-4">
          <div className="flex items-center justify-between">
            <span className="text-base font-semibold text-[var(--color-heading)]">Grand Total</span>
            <span className="text-xl font-bold text-[var(--color-accent)]">
              ${grandTotal.toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <label className="mb-2 pt-2 pb-2 block text-sm font-medium text-[var(--color-heading)]">
          Coupon Code
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter promo code"
            className="flex-1 rounded-lg border border-[var(--color-border)] px-3 py-2 text-sm text-[var(--color-heading)] placeholder:text-gray-400 focus:border-[var(--color-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]"
          />
          <button
            type="button"
            className="rounded-lg border border-[var(--color-border)] px-4 py-2 text-sm font-semibold text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            Apply
          </button>
        </div>
      </div>

      <button
        type="button"
        onClick={() => navigate("/checkout")}
        className="mt-6 w-full rounded-lg bg-[var(--color-accent)] px-4 py-3 text-base font-semibold text-white transition-colors hover:bg-[var(--color-primary)]"
      >
        Checkout
      </button>

      <button
        type="button"
        onClick={() => navigate("/shop")}
        className="mt-3 w-full rounded-lg border border-[var(--color-border)] px-4 py-3 text-base font-semibold text-[var(--color-text)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
      >
        Continue Shopping
      </button>
    </div>
  );
};

export default CartSummary;