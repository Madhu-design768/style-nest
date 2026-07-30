import { Link } from "react-router-dom";
import CartItem from "../components/cart/CartItem";
import CartSummary from "../components/cart/CartSummary";
import EmptyCart from "../components/cart/EmptyCart";

const cartItems = [
  {
    id: 1,
    name: "Classic Hoodie",
    category: "Men",
    size: "L",
    color: "Black",
    price: 59,
    quantity: 2,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Denim Jacket",
    category: "Women",
    size: "M",
    color: "Blue",
    price: 79,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
  },
];

const Cart = () => {
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
          <li className="text-[var(--color-text)]">Cart</li>
        </ol>
      </nav>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <h1 className="mb-8 text-3xl font-bold text-[var(--color-heading)]">
          Shopping Cart
        </h1>

        {!cartItems.length ? (
          <EmptyCart />
        ) : (
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            {/* Cart Items */}
            <div className="space-y-4 lg:col-span-2">
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>

            {/* Order Summary */}
            <div className="mt-8 lg:col-span-1 lg:mt-0">
              <CartSummary />
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Cart;