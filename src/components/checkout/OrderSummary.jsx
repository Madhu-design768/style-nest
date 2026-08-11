import { useCart } from "../../context/CartContext";

const OrderSummary = () => {
  const { cartItems, cartTotal } = useCart();

  const subtotal = cartTotal;
  const shipping = subtotal > 0 ? 0 : 0;
  const tax = subtotal * 0.08;
  const grandTotal = subtotal + shipping + tax;

  return (
    <div className="">
      <h2 className="mb-6 pb-4 text-xl font-bold text-[var(--color-heading)]">
        Order Summary
      </h2>

      <div className="space-y-4">
        {cartItems.map((item) => {
          const numericPrice =
            typeof item.price === "string"
              ? parseFloat(item.price.replace(/[^0-9.]/g, "")) || 0
              : item.price || 0;

          return (
            <div
              key={`${item.id}-${item.size || "nosize"}-${item.color || "nocolor"}`}
              className="flex items-center gap-4"
            >
              <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-[var(--color-heading)]">
                  {item.name}
                </h3>
                <div className="mt-1 flex flex-wrap gap-2 text-xs text-[var(--color-text)]">
                  {item.size && <span>Size: {item.size}</span>}
                  {item.color && <span>Color: {item.color}</span>}
                  <span>Qty: {item.quantity}</span>
                </div>
              </div>
              <span className="text-sm font-bold text-[var(--color-heading)]">
                ${(numericPrice * item.quantity).toFixed(2)}
              </span>
            </div>
          );
        })}
      </div>

      <div className="mt-6 space-y-4 border-t border-[var(--color-border)] pt-4">
        <div className="flex items-center justify-between text-sm">
          <span className=" pt-2 text-[var(--color-text)]">Subtotal</span>
          <span className="font-semibold text-[var(--color-heading)]">
            ${subtotal.toFixed(2)}
          </span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="pt-2 text-[var(--color-text)]">Shipping</span>
          <span className="font-semibold text-[var(--color-heading)]">
            {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
          </span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="pt-2 text-[var(--color-text)]">Estimated Tax</span>
          <span className="font-semibold text-[var(--color-heading)]">
            ${tax.toFixed(2)}
          </span>
        </div>

        <div className="border-t border-[var(--color-border)] pt-4">
          <div className="flex items-center justify-between">
            <span className="text-base font-semibold text-[var(--color-heading)]">
              Order Total
            </span>
            <span className="text-xl font-bold text-[var(--color-accent)]">
              ${grandTotal.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;