import { Filter } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";
import QuickViewModal from "./QuickViewModal";
import SortDropdown from "./SortDropdown";
import EmptyState from "./EmptyState";
import FilterSidebar from "./FilterSidebar";

const ProductGrid = ({
  products,
  totalProducts,
  currentPage,
  productsPerPage,
  sortOption,
  setSortOption,
  onOpenFilters,
  onToggleFilterPanel,
  isFilterPanelOpen,
  onClearFilters,
  onContinueShopping,
  loading,
  filters,
  handlers,
}) => {
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const panelRef = useRef(null);
  const toolbarRef = useRef(null);

  const startItem = (currentPage - 1) * productsPerPage + 1;
  const endItem = startItem + products.length - 1;

  const activeFilters = filters || {};
  const activeHandlers = handlers || {};

  useEffect(() => {
    const handleClickOutside = (event) => {
      if ((panelRef.current && !panelRef.current.contains(event.target)) && 
          (toolbarRef.current && !toolbarRef.current.contains(event.target))) {
        onToggleFilterPanel?.();
      }
    };

    if (isFilterPanelOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isFilterPanelOpen, onToggleFilterPanel]);

  if (loading) {
    return (
      <div id="product-grid" className="w-full">
        {/* Toolbar Skeleton */}
        <div className="mb-6 flex items-center justify-between gap-3 rounded-xl border border-[var(--color-border)] bg-white px-4 py-3 shadow-sm">
          <div className="hidden lg:block h-10 w-24 animate-pulse rounded-lg bg-gray-200" />
          <div className="h-4 w-32 animate-pulse rounded bg-gray-200" />
          <div className="hidden sm:block h-10 w-40 animate-pulse rounded-lg bg-gray-200" />
        </div>

        {/* Product Grid Skeleton */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
        </div>
      </div>
    );
  }

  if (!totalProducts) {
    return (
      <div id="product-grid" className="w-full">
        <div className="mb-6 flex items-center justify-between gap-3 rounded-xl border border-[var(--color-border)] bg-white px-4 py-3 shadow-sm">
          <button
            type="button"
            onClick={onOpenFilters}
            className="hidden lg:inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] px-3 py-2 text-sm font-medium text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            <Filter className="h-4 w-4" />
            Filters
          </button>
          <p className="text-sm font-medium text-[var(--color-text)]">
            Showing 0 Products
          </p>
          <SortDropdown value={sortOption} onChange={setSortOption} />
        </div>
        <EmptyState onClearFilters={onClearFilters} onContinueShopping={onContinueShopping} />
      </div>
    );
  }

  return (
    <div id="product-grid" className="w-full">
      {/* Toolbar */}
      <div 
        ref={toolbarRef}
        className="mb-6 flex items-center justify-between gap-3 rounded-xl border border-[var(--color-border)] bg-white px-4 py-3 shadow-sm"
      >
        <button
          type="button"
          onClick={onToggleFilterPanel}
          className="hidden lg:inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] px-3 py-2 text-sm font-medium text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
        >
          <Filter className="h-4 w-4" />
          Filters
        </button>
        <p className="text-sm font-medium text-[var(--color-text)]">
          Showing {startItem}-{endItem} of {totalProducts} Products
        </p>
        <SortDropdown value={sortOption} onChange={setSortOption} />
      </div>

      {/* Floating Filter Panel Overlay */}
      {isFilterPanelOpen && (
        <div className="relative mb-6">
          <div
            ref={panelRef}
            className="absolute left-0 top-0 z-40 w-[45%] rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300"
          >
            <FilterSidebar filters={activeFilters} handlers={{ ...activeHandlers, clearAll: onClearFilters, onApply: onToggleFilterPanel }} />
          </div>
        </div>
      )}

      {/* Product Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onQuickView={() => setQuickViewProduct(product)} />
        ))}
      </div>

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
    </div>
  );
};

export default ProductGrid;