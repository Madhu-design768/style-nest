import { useState } from "react";
import { Link } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import CheckoutForm from "../../components/checkout/CheckoutForm";
import OrderSummary from "../../components/checkout/OrderSummary";
import PaymentMethod from "../../components/checkout/PaymentMethod";
import { useCart } from "../../context/CartContext";
import { ShoppingBag } from "lucide-react";

const Checkout = () => {
  const { cartItems } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("cod");

  const handleSubmit = (orderData) => {
    console.log("Order placed:", orderData);
  };

  if (cartItems.length === 0) {
    return (
      <MainLayout>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
          <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-[var(--color-border)] bg-white py-16 px-4 text-center">
            <ShoppingBag className="h-16 w-16 text-gray-300" />
            <h2 className="mt-6 text-2xl font-bold text-[var(--color-heading)]">
              Your cart is empty.
            </h2>
            <p className="mt-2 text-base text-[var(--color-text)]">
              Add items to your cart before proceeding to checkout.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/cart"
                className="rounded-2xl border border-[var(--color-border)] px-6 py-3 text-base font-semibold text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                Back to Cart
              </Link>
              <Link
                to="/shop"
                className="rounded-2xl bg-[var(--color-accent)] px-6 py-3 text-base font-semibold text-white  transition-colors hover:bg-[var(--color-primary)]"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="mb-6 pt-6 pb-6">
          <h1 className="text-2xl font-medium text-[var(--color-heading)]">
            Checkout
          </h1>

          {/* <p className="mt-2 text-sm text-[var(--color-text)]">
            New User?{" "}
            <Link
              to="/login"
              className="font-medium text-[var(--color-accent)] hover:underline"
            >
              Login
            </Link>
          </p> */}
        </div>

        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="lg:col-span-2">
            <CheckoutForm
              onSubmit={handleSubmit}
              paymentMethod={paymentMethod}
            />
          </div>

          <div className="mt-8 space-y-6 lg:col-span-1 lg:mt-0">
            <OrderSummary />
            <PaymentMethod value={paymentMethod} onChange={setPaymentMethod} />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Checkout;

// <Link
//   to="/login"
//   className="text-[var(--color-accent)] font-medium hover:underline"
// >
//   New User? Login
// </Link>
