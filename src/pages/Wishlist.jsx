import { Link } from "react-router-dom";
import WishlistItem from "../components/wishlist/WishlistItem";
import EmptyWishlist from "../components/wishlist/EmptyWishlist";
import ProductCard from "../components/home/FeaturedProducts/ProductCard";
import products from "../data/products";

const wishlistItems = [
  {
    id: 1,
    name: "Classic Hoodie",
    category: "Men",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
    price: 59,
    originalPrice: 79,
    rating: 4.8,
    reviewCount: 120,
    stockStatus: "In Stock",
  },
  {
    id: 2,
    name: "Denim Jacket",
    category: "Women",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
    price: 89,
    originalPrice: 120,
    rating: 4.9,
    reviewCount: 85,
    stockStatus: "Low Stock",
  },
  {
    id: 3,
    name: "Casual Shirt",
    category: "Men",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
    price: 45,
    originalPrice: 60,
    rating: 4.7,
    reviewCount: 95,
    stockStatus: "In Stock",
  },
];

const Wishlist = () => {
  const recommendedProducts = products.slice(0, 4);

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
          <li className="text-[var(--color-text)]">Wishlist</li>
        </ol>
      </nav>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <h1 className="mb-2 text-3xl font-bold text-[var(--color-heading)]">
          My Wishlist
        </h1>
        <p className="mb-8 text-sm text-[var(--color-text)]">
          {wishlistItems.length} Items
        </p>

        {!wishlistItems.length ? (
          <EmptyWishlist />
        ) : (
          <>
            <div className="space-y-4">
              {wishlistItems.map((item) => (
                <WishlistItem key={item.id} item={item} />
              ))}
            </div>

            {/* Recommended Products */}
            <div className="mt-16">
              <h2 className="mb-8 text-3xl font-bold text-[var(--color-heading)]">
                You May Also Like
              </h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {recommendedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default Wishlist;