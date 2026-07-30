import { useState, useMemo, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Filter } from "lucide-react";
import MainLayout from "../../layouts/MainLayout";

import ShopBanner from "../../components/shop/ShopBanner";
import FilterSidebar from "../../components/shop/FilterSidebar";
import ProductGrid from "../../components/shop/ProductGrid";
import Pagination from "../../components/shop/Pagination";
import MobileFilterDrawer from "../../components/shop/MobileFilterDrawer";

import products from "../../data/products";
import filterProducts from "../../utils/filterProducts";
import sortProducts from "../../utils/sortProducts";
import paginateProducts from "../../utils/paginateProducts";
import searchProducts from "../../utils/searchProducts";

const PRODUCTS_PER_PAGE = 12;

const Shop = () => {
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);
  const [isFilterPanelOpen, setIsFilterPanelOpen] = useState(false);
  const [sortOption, setSortOption] = useState("featured");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  const navigate = useNavigate();

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedRating, setSelectedRating] = useState(0);
  const [maxPrice, setMaxPrice] = useState(500);

  const filters = {
    selectedCategories,
    selectedBrands,
    selectedSizes,
    selectedColors,
    selectedRating,
    maxPrice,
  };

  const handlers = {
    setSelectedCategories,
    setSelectedBrands,
    setSelectedSizes,
    setSelectedColors,
    setSelectedRating,
    setMaxPrice,
    clearAll: () => {
      setSelectedCategories([]);
      setSelectedBrands([]);
      setSelectedSizes([]);
      setSelectedColors([]);
      setSelectedRating(0);
      setMaxPrice(500);
    },
  };

  const normalizedProducts = useMemo(
    () =>
      products.map((p) => ({
        ...p,
        price:
          typeof p.price === "string"
            ? parseFloat(p.price.replace(/[^0-9.]/g, ""))
            : p.price || 0,
        originalPrice: p.originalPrice || null,
        reviewCount: p.reviewCount || 0,
        isSale: !!p.isSale,
        rating: typeof p.rating === "number" ? p.rating : 0,
      })),
    []
  );

  const searchedProducts = useMemo(
    () => searchProducts(normalizedProducts, searchQuery),
    [normalizedProducts, searchQuery]
  );

  const filteredProducts = useMemo(
    () => filterProducts(searchedProducts, filters),
    [searchedProducts, filters]
  );

  const sortedProducts = useMemo(
    () => sortProducts(filteredProducts, sortOption),
    [filteredProducts, sortOption]
  );

  const totalPages = Math.max(
    1,
    Math.ceil(sortedProducts.length / PRODUCTS_PER_PAGE)
  );

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, [
    selectedCategories,
    selectedBrands,
    selectedSizes,
    selectedColors,
    selectedRating,
    maxPrice,
    sortOption,
    searchQuery,
  ]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setIsFilterPanelOpen(false);
        setIsFilterDrawerOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const paginatedProducts = useMemo(
    () =>
      paginateProducts(
        sortedProducts,
        currentPage,
        PRODUCTS_PER_PAGE
      ),
    [sortedProducts, currentPage]
  );

  return (
    <MainLayout>
      <ShopBanner />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-8">
          <section className="lg:col-span-3">
            <div className="mb-6 flex items-center justify-between lg:hidden">
              <button
                onClick={() => setIsFilterDrawerOpen(true)}
                className="flex items-center gap-2 rounded-lg border border-[var(--color-border)] px-4 py-2 text-sm font-medium text-[var(--color-text)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                <Filter className="h-4 w-4" />
                Filters
              </button>
            </div>

            <ProductGrid
              products={paginatedProducts}
              totalProducts={sortedProducts.length}
              currentPage={currentPage}
              productsPerPage={PRODUCTS_PER_PAGE}
              sortOption={sortOption}
              setSortOption={setSortOption}
              onOpenFilters={() => setIsFilterDrawerOpen(true)}
              onToggleFilterPanel={() => setIsFilterPanelOpen((prev) => !prev)}
              isFilterPanelOpen={isFilterPanelOpen}
              onClearFilters={() => {
                handlers.clearAll();
                setSortOption("featured");
                setSearchParams({});
                setCurrentPage(1);
              }}
              onContinueShopping={() => {
                setSearchParams({});
              }}
              loading={loading}
            />

            <div className="mt-8">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={(page) => {
                  setCurrentPage(page);
                  document
                    .getElementById("product-grid")
                    ?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                }}
              />
            </div>
          </section>
        </div>
      </main>

      <MobileFilterDrawer
        isOpen={isFilterDrawerOpen}
        onClose={() => setIsFilterDrawerOpen(false)}
        filters={filters}
        handlers={handlers}
      />
    </MainLayout>
  );
};

export default Shop;