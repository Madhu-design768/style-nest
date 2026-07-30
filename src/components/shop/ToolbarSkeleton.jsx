const ToolbarSkeleton = () => {
  return (
    <div className="mb-6 flex items-center justify-between gap-3 rounded-xl border border-[var(--color-border)] bg-white px-4 py-3 shadow-sm">
      {/* Filters Button */}
      <div className="hidden lg:block h-10 w-24 animate-pulse rounded-lg bg-gray-200" />

      {/* Product Count */}
      <div className="h-4 w-32 animate-pulse rounded bg-gray-200" />

      {/* Sort Dropdown */}
      <div className="hidden sm:block h-10 w-40 animate-pulse rounded-lg bg-gray-200" />
    </div>
  );
};

export default ToolbarSkeleton;