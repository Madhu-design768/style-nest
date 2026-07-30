import { ShoppingBag } from "lucide-react";

const EmptyState = ({ onClearFilters, onContinueShopping }) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl border border-[var(--color-border)] bg-white px-4 py-16 text-center shadow-sm">
      {/* Illustration */}
      <div className="relative">
        <div className="absolute inset-0 -z-10 rounded-full bg-[var(--color-accent)]/10 blur-2xl" />
        <ShoppingBag className="h-20 w-20 text-[var(--color-accent)]" />
      </div>

      {/* Heading */}
      <h3 className="mt-6 text-2xl font-bold text-[var(--color-heading)]">
        No Products Found
      </h3>

      {/* Description */}
      <p className="mt-3 max-w-md text-base text-[var(--color-text)]">
        We couldn't find any products matching your search. Try adjusting your filters or search keywords.
      </p>

      {/* Buttons */}
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={onClearFilters}
          className="rounded-xl bg-[var(--color-accent)] px-8 py-3 text-base font-semibold text-white transition-all hover:bg-[var(--color-primary)] hover:shadow-lg hover:-translate-y-0.5"
        >
          Clear Filters
        </button>
        <button
          type="button"
          onClick={onContinueShopping}
          className="rounded-xl border border-[var(--color-border)] px-8 py-3 text-base font-semibold text-[var(--color-text)] transition-all hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default EmptyState;