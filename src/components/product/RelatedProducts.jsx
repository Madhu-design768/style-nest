import { Link } from "react-router-dom";
import ProductCard from "../shop/ProductCard";

const RelatedProducts = ({ products }) => {
  if (!products || products.length === 0) {
    return null;
  }

  return (
    <div className="mt-16">
      <h2 className="mb-8 text-2xl font-bold text-[var(--color-heading)]">
        Related Products
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => {
          
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
