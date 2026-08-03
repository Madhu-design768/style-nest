import { ChevronDown } from "lucide-react";

const SortDropdown = ({ value, onChange }) => {
  const options = [
    { label: "Featured", value: "featured" },
    { label: "Newest", value: "newest" },
    { label: "Price: Low to High", value: "price-low-high" },
    { label: "Price: High to Low", value: "price-high-low" },
    { label: "Customer Rating", value: "rating" },
    { label: "Name (A–Z)", value: "name-a-z" },
    { label: "Name (Z–A)", value: "name-z-a" },
  ];

  return (
    <div className="min-w-[160px]">
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          className="h-10 w-full appearance-none rounded-lg border border-[var(--color-border)] bg-white px-3 pr-10 text-sm text-[var(--color-heading)] transition-colors hover:border-[var(--color-accent)] focus:border-[var(--color-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[var(--color-text)]">
          <ChevronDown className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
};

export default SortDropdown;