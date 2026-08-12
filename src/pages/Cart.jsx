import { Link } from "react-router-dom";
import CartItem from "../components/cart/CartItem";
import CartSummary from "../components/cart/CartSummary";
import EmptyCart from "../components/cart/EmptyCart";
import { useCart } from "../context/CartContext";
import MainLayout from "../layouts/MainLayout";

const Cart = () => {
  const { cartItems } = useCart();

  return (
    <MainLayout>
      <div>
        {/* Breadcrumb */}
        <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <ol className="flex items-center gap-2 text-sm">
            <li>
              <Link
                to="/"
                className="text-[var(--color-accent)] hover:underline"
              >
                Home
              </Link>
            </li>

            <li className="text-[var(--color-text)]">/</li>

            <li>
              <Link
                to="/shop"
                className="text-[var(--color-accent)] hover:underline"
              >
                Shop
              </Link>
            </li>

            <li className="text-[var(--color-text)]">/</li>

            <li className="text-[var(--color-text)]">Cart</li>
          </ol>
        </nav>

        <main className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <h1 className="mb-6 pt-6 pb-6 text-2xl font-medium text-[var(--color-heading)]">
            Shopping Cart
          </h1>

          {!cartItems.length ? (
            <EmptyCart />
          ) : (
            <div className="lg:grid lg:grid-cols-3 lg:gap-8">
              {/* Cart Items */}
              <div className="space-y-4 lg:col-span-2">
                {cartItems.map((item) => (
                  <CartItem
                    key={`${item.id}-${item.size || "nosize"}-${item.color || "nocolor"}`}
                    item={item}
                  />
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
    </MainLayout>
  );
};

export default Cart;