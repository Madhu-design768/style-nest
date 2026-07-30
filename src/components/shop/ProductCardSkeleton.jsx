const ProductCardSkeleton = () => {
  return (
    <div className="flex flex-col rounded-2xl border border-[var(--color-border)] bg-white shadow-sm overflow-hidden">
      {/* Image Skeleton */}
      <div className="h-72 w-full animate-pulse bg-gray-200" />

      {/* Content Skeleton */}
      <div className="flex flex-1 flex-col p-5">
        {/* Category */}
        <div className="h-3 w-20 animate-pulse rounded bg-gray-200" />

        {/* Title */}
        <div className="mt-2 h-5 w-full animate-pulse rounded bg-gray-200" />
        <div className="mt-1 h-5 w-3/4 animate-pulse rounded bg-gray-200" />

        {/* Rating */}
        <div className="mt-2 h-4 w-24 animate-pulse rounded bg-gray-200" />

        {/* Price */}
        <div className="mt-auto flex items-center gap-2 pt-3">
          <div className="h-6 w-16 animate-pulse rounded bg-gray-200" />
          <div className="h-4 w-12 animate-pulse rounded bg-gray-200" />
        </div>

        {/* Button */}
        <div className="mt-4 h-12 w-full animate-pulse rounded-xl bg-gray-200" />
      </div>
    </div>
  );
};

export default ProductCardSkeleton;