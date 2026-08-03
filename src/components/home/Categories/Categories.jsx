import CategoryCard from "./CategoryCard";
import categories from "../../../data/categories";

const Categories = () => {
  return (
    <section className=" mt-4 pt-6 pb-12 bg-[var(--color-section)] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mb-12 text-center">

          <span className="inline-block font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)] text-xl">
            Categories
          </span>

          <h2 className="mt-4 pt-1 pb-4  text-4xl lg:text-5xl xl:text-6xl font-bold text-[var(--color-heading)] leading-tight">
            Shop By Category
          </h2>

          <p className="mt-4 pt-1 pb-4  text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Explore our curated collections for every style and occasion.
          </p>

        </div>

        {/* Categories Grid */}
        <div className="mt-4 pt-1 pb-4  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10">

          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              title={category.title}
              image={category.image}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default Categories;