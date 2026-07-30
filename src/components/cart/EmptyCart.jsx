import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";

const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-[var(--color-border)] bg-white py-16 px-4 text-center">
      <ShoppingBag className="h-16 w-16 text-gray-300" />
      <h2 className="mt-6 text-2xl font-bold text-[var(--color-heading)]">
        Your cart is empty.
      </h2>
      <p className="mt-2 text-base text-[var(--color-text)]">
        Looks like you haven't added anything to your cart yet.
      </p>
      <Link
        to="/shop"
        className="mt-6 rounded-lg bg-[var(--color-accent)] px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-[var(--color-primary)]"
      >
        Continue Shopping
      </Link>
    </div>
  );
};

export default EmptyCart;