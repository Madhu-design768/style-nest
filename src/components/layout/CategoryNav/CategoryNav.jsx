import { categoryNavigation } from "../../../data/navigation";
import CategoryItem from "./CategoryItem";

const CategoryNav = () => {
  return (
    <section className="hidden lg:block border-y border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-8 px-6">
        {categoryNavigation.map((item) => (
          <CategoryItem
            key={item.id}
            label={item.label}
          />
        ))}
      </div>
    </section>
  );
};

export default CategoryNav;