const CategoryItem = ({ label }) => {
  return (
    <button
      className="
      relative
      py-4
      px-5
      text-sm
      font-semibold
      tracking-wide
      uppercase
      transition
      duration-300
      hover:text-[var(--color-accent)]
      after:absolute
      after:left-0
      after:-bottom-1
      after:h-[2px]
      after:w-0
      after:bg-[var(--color-accent)]
      after:transition-all
      after:duration-300
      hover:after:w-full
    "
    >
      {label}
    </button>
  );
};

export default CategoryItem;