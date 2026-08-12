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
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <h1 className="mb-6 pt-6 pb-6 text-2xl font-medium text-[var(--color-heading)]">
          Shopping Cart
        </h1>

        {!cartItems.length ? (
          <EmptyCart />
        ) : (
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
    
            <div className="space-y-4 lg:col-span-2">
              {cartItems.map((item) => (
                <CartItem
                  key={`${item.id}-${item.size || "nosize"}-${item.color || "nocolor"}`}
                  item={item}
                />
              ))}
            </div>

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