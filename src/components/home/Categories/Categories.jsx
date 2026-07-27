import CategoryCard from "./CategoryCard";
import categories from "../../../data/categories";

/**
 * Categories Section
 * Displays all shopping categories.
 */

const Categories = () => {
  return (
    <section className="bg-[var(--color-section)] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mb-16 text-center">

          <p className="font-semibold uppercase tracking-[4px] text-[var(--color-accent)]">
            Categories
          </p>

          <h2 className="mt-4 text-4xl font-bold text-[var(--color-heading)] lg:text-5xl">
            Shop By Category
          </h2>

          <p className="mt-4 text-lg text-gray-500">
            Explore our curated collections for every style.
          </p>

        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">

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