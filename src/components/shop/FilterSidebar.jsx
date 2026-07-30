import { useState } from "react";
import { ChevronDown, X } from "lucide-react";

const FilterSidebar = ({
  filters = {},
  handlers = {},
  categories = ["Men", "Women", "Kids", "Accessories"],
  brands = ["Nike", "Adidas", "Puma", "Zara", "H&M"],
  sizes = ["S", "M", "L", "XL", "XXL"],
  colors = [
    { name: "Black", bg: "bg-black" },
    { name: "White", bg: "bg-white border border-gray-200" },
    { name: "Blue", bg: "bg-blue-600" },
    { name: "Red", bg: "bg-red-600" },
    { name: "Green", bg: "bg-green-600" },
  ],
  maxPrice = 500,
}) => {
  const {
    selectedCategories = [],
    selectedBrands = [],
    selectedSizes = [],
    selectedColors = [],
    selectedRating = 0,
    maxPrice: currentMaxPrice = 500,
  } = filters;
  const {
    setSelectedCategories = () => {},
    setSelectedBrands = () => {},
    setSelectedSizes = () => {},
    setSelectedColors = () => {},
    setSelectedRating = () => {},
    setMaxPrice = () => {},
    clearAll = () => {},
    onApply = () => {},
  } = handlers;

  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  const toggleArrayItem = (array, setArray, item) => {
    if (array.includes(item)) {
      setArray(array.filter((i) => i !== item));
    } else {
      setArray([...array, item]);
    }
  };

  const hasActiveFilters =
    selectedCategories.length > 0 ||
    selectedBrands.length > 0 ||
    selectedSizes.length > 0 ||
    selectedColors.length > 0 ||
    selectedRating > 0 ||
    currentMaxPrice < maxPrice;

  const sections = [
    {
      key: "categories",
      title: "Categories",
      content: (
        <div className="space-y-3">
          {categories.map((category) => (
            <label
              key={category}
              className="flex items-center gap-3 text-sm text-[var(--color-text)] cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() =>
                  toggleArrayItem(selectedCategories, setSelectedCategories, category)
                }
                className="h-4 w-4 rounded border-gray-300 text-[var(--color-accent)] focus:ring-[var(--color-accent)]"
              />
              <span className="hover:text-[var(--color-accent)] transition-colors">
                {category}
              </span>
            </label>
          ))}
        </div>
      ),
    },
    {
      key: "price",
      title: "Price",
      content: (
        <div className="px-1">
          <input
            type="range"
            min="0"
            max={maxPrice}
            value={currentMaxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-gray-200 accent-[var(--color-accent)]"
          />
          <div className="mt-3 flex items-center justify-between text-sm font-medium text-[var(--color-text)]">
            <span>₹0</span>
            <span>₹{currentMaxPrice}</span>
          </div>
        </div>
      ),
    },
    {
      key: "brand",
      title: "Brand",
      content: (
        <div className="space-y-3">
          {brands.map((brand) => (
            <label
              key={brand}
              className="flex items-center gap-3 text-sm text-[var(--color-text)] cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={() =>
                  toggleArrayItem(selectedBrands, setSelectedBrands, brand)
                }
                className="h-4 w-4 rounded border-gray-300 text-[var(--color-accent)] focus:ring-[var(--color-accent)]"
              />
              <span className="hover:text-[var(--color-accent)] transition-colors">
                {brand}
              </span>
            </label>
          ))}
        </div>
      ),
    },
    {
      key: "size",
      title: "Size",
      content: (
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              type="button"
              onClick={() =>
                toggleArrayItem(selectedSizes, setSelectedSizes, size)
              }
              className={`rounded-full px-4 py-2 text-xs font-medium transition-all ${
                selectedSizes.includes(size)
                  ? "bg-[var(--color-accent)] text-white shadow-md"
                  : "border border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      ),
    },
    {
      key: "color",
      title: "Color",
      content: (
        <div className="flex flex-wrap gap-3">
          {colors.map((color) => (
            <button
              key={color.name}
              type="button"
              onClick={() =>
                toggleArrayItem(selectedColors, setSelectedColors, color.name)
              }
              className={`h-9 w-9 rounded-full ${color.bg} transition-transform hover:scale-110 ${
                selectedColors.includes(color.name)
                  ? "ring-2 ring-[var(--color-accent)] ring-offset-2"
                  : "ring-1 ring-gray-200"
              }`}
              title={color.name}
            />
          ))}
        </div>
      ),
    },
    {
      key: "rating",
      title: "Rating",
      content: (
        <div className="space-y-3">
          {[5, 4, 3].map((stars) => (
            <button
              key={stars}
              type="button"
              onClick={() =>
                setSelectedRating(selectedRating === stars ? 0 : stars)
              }
              className={`flex items-center gap-2 text-sm transition-colors ${
                selectedRating === stars
                  ? "text-[var(--color-accent)]"
                  : "text-[var(--color-text)] hover:text-[var(--color-accent)]"
              }`}
            >
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`h-4 w-4 ${
                      i < stars
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm">& Up</span>
            </button>
          ))}
        </div>
      ),
    },
  ];

  return (
    <div className="w-full rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-sm">
      {/* Horizontal Accordion Header */}
      <div className="flex items-center justify-between gap-2 border-b border-[var(--color-border)] pb-3">
        {sections.map((section) => (
          <button
            key={section.key}
            type="button"
            onClick={() => toggleSection(section.key)}
            className="flex flex-1 items-center justify-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold text-[var(--color-heading)] transition-colors hover:bg-gray-50"
          >
            {section.title}
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-200 ${
                openSection === section.key ? "rotate-180" : ""
              }`}
            />
          </button>
        ))}
      </div>

      {/* Active Section Content */}
      {openSection && (
        <div className="mt-4 animate-in fade-in slide-in-from-top-2 duration-200">
          {sections.find((s) => s.key === openSection)?.content}
        </div>
      )}

      {/* Bottom Actions */}
      <div className="mt-6 flex items-center justify-between border-t border-[var(--color-border)] pt-4">
        {hasActiveFilters && (
          <button
            type="button"
            onClick={clearAll}
            className="flex items-center gap-1 text-xs font-medium text-[var(--color-accent)] hover:underline"
          >
            <X className="h-3.5 w-3.5" />
            Clear All
          </button>
        )}
        <div className="ml-auto">
          <button
            type="button"
            onClick={onApply}
            className="rounded-xl bg-[var(--color-accent)] px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[var(--color-primary)] hover:shadow-lg hover:-translate-y-0.5"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;