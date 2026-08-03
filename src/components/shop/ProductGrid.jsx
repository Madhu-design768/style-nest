import { Filter } from "lucide-react";
import { useState } from "react";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";
import QuickViewModal from "./QuickViewModal";
import SortDropdown from "./SortDropdown";
import EmptyState from "./EmptyState";

const ProductGrid = ({ products, totalProducts, currentPage, productsPerPage, sortOption, setSortOption, onOpenFilters, onClearFilters, onContinueShopping, loading }) => {
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const startItem = (currentPage - 1) * productsPerPage + 1;
  const endItem = startItem + products.length - 1;

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
      <div className="mb-6 flex items-center justify-between gap-3 rounded-xl border border-[var(--color-border)] bg-white px-4 py-3 shadow-sm">
        <p className="text-sm font-medium text-[var(--color-text)]">
          Showing {startItem}-{endItem} of {totalProducts} Products
        </p>
        <SortDropdown value={sortOption} onChange={setSortOption} />
      </div>

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