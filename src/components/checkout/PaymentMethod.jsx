import { Banknote, CreditCard } from "lucide-react";

const PaymentMethod = ({ value, onChange }) => {
  const sectionClass =
    "rounded-xl border border-[var(--color-border)] bg-white p-6 shadow-sm";

  const sectionTitleClass =
    "mb-6 pb-4 text-xl font-bold text-[var(--color-heading)]";

  return (
    <div>
      <div className={sectionClass}>
        <h2 className={sectionTitleClass}>Payment Method</h2>

        <div className="space-y-3">
          <label
            className={`flex cursor-pointer items-center gap-3 rounded-lg border p-4 transition-colors ${
              value === "cod"
                ? "border-[var(--color-accent)] bg-[var(--color-accent)]/5"
                : "border-[var(--color-border)] hover:border-[var(--color-accent)]"
            }`}
          >
            <input
              type="radio"
              name="paymentMethod"
              value="cod"
              checked={value === "cod"}
              onChange={(e) => onChange(e.target.value)}
              className="h-4 w-4 text-[var(--color-accent)] focus:ring-[var(--color-accent)]"
            />
            <Banknote className="h-5 w-5 text-[var(--color-accent)]" />
            <div>
              <p className="text-sm font-semibold text-[var(--color-heading)]">
                Cash on Delivery
              </p>
              <p className="text-xs text-[var(--color-text)]">
                Pay when you receive your order
              </p>
            </div>
          </label>

          <label
            className={`flex cursor-pointer items-center gap-3 rounded-lg border p-4 transition-colors ${
              value === "online"
                ? "border-[var(--color-accent)] bg-[var(--color-accent)]/5"
                : "border-[var(--color-border)] hover:border-[var(--color-accent)]"
            }`}
          >
            <input
              type="radio"
              name="paymentMethod"
              value="online"
              checked={value === "online"}
              onChange={(e) => onChange(e.target.value)}
              className="h-4 w-4 text-[var(--color-accent)] focus:ring-[var(--color-accent)]"
            />
            <CreditCard className="h-5 w-5 text-[var(--color-accent)]" />
            <div>
              <p className="text-sm font-semibold text-[var(--color-heading)]">
                Online Payment
              </p>
              <p className="text-xs text-[var(--color-text)]">
                Card / UPI / Net Banking (coming soon)
              </p>
            </div>
          </label>
        </div>
      </div>
      <button
        type="submit"
        className="w-full rounded-xl bg-[var(--color-accent)] px-6 py-3.5 text-base font-semibold text-white transition-all hover:bg-[var(--color-primary)] hover:shadow-lg hover:-translate-y-0.5"
      >
        Place Order
      </button>
    </div>
  );
};

export default PaymentMethod;
