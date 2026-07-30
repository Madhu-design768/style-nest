import { useState } from "react";
import { Link } from "react-router-dom";
import { Star, Heart, Minus, Plus, Truck, RefreshCcw, Shield } from "lucide-react";
import ProductCard from "../components/home/FeaturedProducts/ProductCard";
import products from "../data/products";

const ProductDetails = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const product = products[0];
  const relatedProducts = products.slice(1, 5);

  const images = [
    product.image,
    product.image,
    product.image,
    product.image,
  ];

  const sizes = ["XS", "S", "M", "L", "XL"];
  const colors = [
    { name: "Black", bg: "bg-black" },
    { name: "White", bg: "bg-white border border-gray-200" },
    { name: "Blue", bg: "bg-blue-600" },
    { name: "Red", bg: "bg-red-600" },
  ];

  const features = [
    { icon: Truck, text: "Free Shipping" },
    { icon: RefreshCcw, text: "Easy Returns" },
    { icon: Shield, text: "Secure Payment" },
  ];

  return (
    <div>
      {/* Breadcrumb */}
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <ol className="flex items-center gap-2 text-sm">
          <li>
            <Link to="/" className="text-[var(--color-accent)] hover:underline">
              Home
            </Link>
          </li>
          <li className="text-[var(--color-text)]">/</li>
          <li>
            <Link to="/shop" className="text-[var(--color-accent)] hover:underline">
              Shop
            </Link>
          </li>
          <li className="text-[var(--color-text)]">/</li>
          <li className="text-[var(--color-text)]">Product</li>
        </ol>
      </nav>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12">
          {/* Product Gallery */}
          <div>
            <div className="mb-4 overflow-hidden rounded-xl bg-gray-100">
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="h-[500px] w-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {images.map((img, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setSelectedImage(index)}
                  className={`overflow-hidden rounded-lg bg-gray-100 ${
                    selectedImage === index
                      ? "ring-2 ring-[var(--color-accent)]"
                      : ""
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} ${index + 1}`}
                    className="h-20 w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Information */}
          <div>
            <span className="text-xs uppercase tracking-wider text-[var(--color-text)]">
              {product.category}
            </span>
            <h1 className="mt-2 text-3xl font-bold text-[var(--color-heading)]">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="mt-3 flex items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-[var(--color-text)]">
                ({product.reviewCount || 0} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="mt-4 flex items-center gap-3">
              <span className="text-3xl font-bold text-[var(--color-accent)]">
                ${product.price}
              </span>
              {product.originalPrice && (
                <>
                  <span className="text-xl text-gray-400 line-through">
                    ${product.originalPrice}
                  </span>
                  <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-600">
                    -20%
                  </span>
                </>
              )}
            </div>

            {/* Description */}
            <p className="mt-4 text-base leading-relaxed text-[var(--color-text)]">
              Premium quality {product.name.toLowerCase()} designed for comfort and style. 
              Perfect for any occasion with its modern fit and high-quality materials.
            </p>

            {/* Size Selection */}
            <div className="mt-6">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[var(--color-heading)]">
                Size
              </h3>
              <div className="flex flex-wrap gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${
                      selectedSize === size
                        ? "border-[var(--color-accent)] bg-[var(--color-accent)] text-white"
                        : "border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="mt-6">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[var(--color-heading)]">
                Color
              </h3>
              <div className="flex flex-wrap gap-3">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    type="button"
                    onClick={() => setSelectedColor(color.name)}
                    className={`h-10 w-10 rounded-full ${color.bg} ${
                      selectedColor === color.name
                        ? "ring-2 ring-[var(--color-accent)] ring-offset-2"
                        : ""
                    }`}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="mt-6">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[var(--color-heading)]">
                Quantity
              </h3>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--color-border)] text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-12 text-center text-lg font-semibold text-[var(--color-heading)]">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--color-border)] text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                className="flex-1 rounded-lg bg-[var(--color-accent)] px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-[var(--color-primary)]"
              >
                Add to Cart
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-2 rounded-lg border border-[var(--color-border)] px-6 py-3 text-base font-semibold text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                <Heart className="h-5 w-5" />
                Wishlist
              </button>
            </div>

            {/* Features */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.text}
                  className="flex items-center gap-3 rounded-lg border border-[var(--color-border)] p-4"
                >
                  <feature.icon className="h-6 w-6 text-[var(--color-accent)]" />
                  <span className="text-sm font-medium text-[var(--color-heading)]">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Product Description Tabs */}
        <div className="mt-16">
          <div className="border-b border-[var(--color-border)]">
            <div className="flex gap-8">
              {["Description", "Specifications", "Reviews"].map((tab) => (
                <button
                  key={tab}
                  type="button"
                  className="border-b-2 border-[var(--color-accent)] px-1 py-3 text-sm font-semibold text-[var(--color-accent)]"
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          <div className="py-6">
            <p className="text-base leading-relaxed text-[var(--color-text)]">
              Experience premium quality with our {product.name.toLowerCase()}. 
              Crafted with attention to detail, this piece combines comfort, durability, 
              and style. Perfect for everyday wear or special occasions.
            </p>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="mb-8 text-3xl font-bold text-[var(--color-heading)]">
            Related Products
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetails;