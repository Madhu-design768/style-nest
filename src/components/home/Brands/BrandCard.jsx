const BrandCard = ({ name }) => {
  return (
    <div
      className="
        group
        flex
        min-w-[140px]
        items-center
        justify-center
        rounded-xl
        border
        border-gray-200
        bg-white
        px-10
        py-5
        shadow-sm
        cursor-pointer
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[var(--color-accent)]
        hover:shadow-lg
      "
    >
      <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover:text-[var(--color-accent)]">
        {name}
      </h3>
    </div>
  );
};

export default BrandCard;