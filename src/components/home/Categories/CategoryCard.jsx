/**
 * Category Card Component
 */

const CategoryCard = ({ title, image }) => {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        shadow-md
        hover:shadow-2xl
        transition-all
        duration-500
        cursor-pointer
      "
    >
      {/* Category Image */}
      <img
        src={image}
        alt={title}
        className="
          h-[420px]
          w-full
          object-cover
          transition-transform
          duration-500
          group-hover:scale-110
        "
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45 transition-all duration-300 group-hover:bg-black/55"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">

        {/* Category Title */}
        <h3 className="text-4xl font-bold text-white drop-shadow-lg">
          {title}
        </h3>

        {/* Shop Button */}
        <button
          className="
            mt-6
            rounded-xl
            bg-white
            px-6
            py-3
            font-semibold
            text-[var(--color-primary)]
            opacity-0
            translate-y-5
            transition-all
            duration-300
            group-hover:opacity-100
            group-hover:translate-y-0
            hover:bg-[var(--color-accent)]
            hover:text-white
          "
        >
          Shop Now
        </button>

      </div>
    </div>
  );
};

export default CategoryCard;