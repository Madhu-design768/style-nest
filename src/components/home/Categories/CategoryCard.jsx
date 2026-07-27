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
        rounded-[2rem]
        shadow-lg
        hover:shadow-2xl
        transition-all
        duration-500
        cursor-pointer
        hover:-translate-y-2
        h-[480px]
      "
    >
      {/* Category Image */}
      <img
        src={image}
        alt={title}
        className="
          h-full
          w-full
          object-cover
          transition-transform
          duration-700
          ease-out
          group-hover:scale-110
        "
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70 transition-all duration-300 group-hover:from-black/50 group-hover:via-black/60 group-hover:to-black/80"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">

        {/* Category Title */}
        <h3 className="text-3xl lg:text-4xl font-bold text-white mb-3 tracking-wide">
          {title}
        </h3>

        {/* Divider Line */}
        <div className="w-16 h-0.5 bg-[var(--color-accent)] mb-6 transition-all duration-300 group-hover:w-24"></div>

        {/* Shop Button */}
        <button
          className="
            rounded-full
            bg-white/10 backdrop-blur-md
            border border-white/30
            px-8 py-3.5
            font-semibold
            text-white
            text-sm uppercase tracking-[0.1em]
            opacity-0
            translate-y-4
            transition-all
            duration-300
            group-hover:opacity-100
            group-hover:translate-y-0
            hover:bg-[var(--color-accent)]
            hover:border-[var(--color-accent)]
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