const SidebarSkeleton = () => {
  return (
    <aside className="w-full rounded-3xl border border-[var(--color-border)] bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="mb-4 h-6 w-24 animate-pulse rounded bg-gray-200" />

      {/* Categories */}
      <div className="mb-6 border-b border-[var(--color-border)] pb-5">
        <div className="mb-3 h-4 w-20 animate-pulse rounded bg-gray-200" />
        <div className="space-y-3">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="h-4 w-4 animate-pulse rounded bg-gray-200" />
              <div className="h-4 w-20 animate-pulse rounded bg-gray-200" />
            </div>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-6 border-b border-[var(--color-border)] pb-5">
        <div className="mb-3 h-4 w-20 animate-pulse rounded bg-gray-200" />
        <div className="h-2 w-full animate-pulse rounded-full bg-gray-200" />
        <div className="mt-3 flex items-center justify-between">
          <div className="h-3 w-8 animate-pulse rounded bg-gray-200" />
          <div className="h-3 w-12 animate-pulse rounded bg-gray-200" />
        </div>
      </div>

      {/* Brand */}
      <div className="mb-6 border-b border-[var(--color-border)] pb-5">
        <div className="mb-3 h-4 w-16 animate-pulse rounded bg-gray-200" />
        <div className="space-y-3">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="h-4 w-4 animate-pulse rounded bg-gray-200" />
              <div className="h-4 w-16 animate-pulse rounded bg-gray-200" />
            </div>
          ))}
        </div>
      </div>

      {/* Size */}
      <div className="mb-6 border-b border-[var(--color-border)] pb-5">
        <div className="mb-3 h-4 w-12 animate-pulse rounded bg-gray-200" />
        <div className="flex flex-wrap gap-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-10 w-12 animate-pulse rounded-full bg-gray-200" />
          ))}
        </div>
      </div>

      {/* Color */}
      <div className="mb-6 border-b border-[var(--color-border)] pb-5">
        <div className="mb-3 h-4 w-12 animate-pulse rounded bg-gray-200" />
        <div className="flex flex-wrap gap-3">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-9 w-9 animate-pulse rounded-full bg-gray-200" />
          ))}
        </div>
      </div>

      {/* Rating */}
      <div className="border-b border-[var(--color-border)] pb-5">
        <div className="mb-3 h-4 w-14 animate-pulse rounded bg-gray-200" />
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-4 w-24 animate-pulse rounded bg-gray-200" />
          ))}
        </div>
      </div>
    </aside>
  );
};

export default SidebarSkeleton;