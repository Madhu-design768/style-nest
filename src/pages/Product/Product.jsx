import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Truck, RefreshCcw, Shield } from "lucide-react";
import products from "../../data/products";
import ProductGallery from "../../components/product/ProductGallery";
import ProductInfo from "../../components/product/ProductInfo";
import ProductActions from "../../components/product/ProductActions";
import ProductDescription from "../../components/product/ProductDescription";
import ProductSpecifications from "../../components/product/ProductSpecifications";
import RelatedProducts from "../../components/product/RelatedProducts";
import MainLayout from "../../layouts/MainLayout";

const Product = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("description");
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="mx-auto flex min-h-[60vh] max-w-7xl flex-col items-center justify-center px-4 py-16 text-center">
        <h1 className="text-4xl font-bold text-[var(--color-heading)]">
          Product Not Found
        </h1>
        <p className="mt-4 text-lg text-[var(--color-text)]">
          The product you are looking for does not exist or has been removed.
        </p>
        <Link
          to="/shop"
          className="mt-8 rounded-xl bg-[var(--color-accent)] px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-[var(--color-primary)] hover:shadow-lg hover:-translate-y-0.5"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  const features = [
    { icon: Truck, text: "Free Shipping" },
    { icon: RefreshCcw, text: "Easy Returns" },
    { icon: Shield, text: "Secure Payment" },
  ];

  return (
    <MainLayout>
      <div>
        <main className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12">
            <ProductGallery product={product} />

            <div>
              <ProductInfo product={product} />
              <ProductActions product={product} />
            </div>
          </div>
          <div className="mt-16 border-[var(--color-border)] pt-8">
            <div className="flex w-full border-b border-[var(--color-border)]">
              <button
                type="button"
                onClick={() => setActiveTab("description")}
                className={`pr-8 pb-4 text-sm font-semibold transition-colors ${
                  activeTab === "description"
                    ? "border-b-2 border-[var(--color-accent)] text-[var(--color-heading)]"
                    : "text-[var(--color-text)] hover:text-[var(--color-heading)]"
                }`}
              >
                Description
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("specifications")}
                className={`pr-8 pb-4 text-sm font-semibold transition-colors ${
                  activeTab === "specifications"
                    ? "border-b-2 border-[var(--color-accent)] text-[var(--color-heading)]"
                    : "text-[var(--color-text)] hover:text-[var(--color-heading)]"
                }`}
              >
                Specifications
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("reviews")}
                className={`pb-4 text-sm font-semibold transition-colors ${
                  activeTab === "reviews"
                    ? "border-b-2 border-[var(--color-accent)] text-[var(--color-heading)]"
                    : "text-[var(--color-text)] hover:text-[var(--color-heading)]"
                }`}
              >
                Reviews
              </button>
            </div>

            <div className="py-8">
              {activeTab === "description" && (
                <ProductDescription product={product} />
              )}

              {activeTab === "specifications" && (
                <ProductSpecifications product={product} />
              )}

              {activeTab === "reviews" && (
                <div>
                  <h2 className="mb-4 text-xl font-bold text-[var(--color-heading)]">
                    Customer Reviews
                  </h2>

                  <p className="text-[var(--color-text)]"></p>
                </div>
              )}
            </div>
          </div>

          <RelatedProducts products={relatedProducts} />
        </main>
      </div>
    </MainLayout>
  );
};

export default Product;
