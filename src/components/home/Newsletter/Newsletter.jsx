import { Send } from "lucide-react";

/**
 * Newsletter Section
 */

const Newsletter = () => {
  return (
    <section className="bg-[var(--color-primary)] py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">

        <p className="font-semibold uppercase tracking-[4px] text-[var(--color-accent)]">
          Newsletter
        </p>

        <h2 className="mt-4 text-4xl font-bold text-white lg:text-5xl">
          Stay Updated With StyleNest
        </h2>

        <p className="mt-5 text-lg text-gray-300">
          Subscribe to receive exclusive offers, fashion trends, and new
          arrivals directly in your inbox.
        </p>

        {/* Newsletter Form */}
        <form className="mx-auto mt-10 flex max-w-2xl flex-col gap-4 sm:flex-row">

          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 rounded-xl border border-gray-700 bg-white px-6 py-4 text-gray-800 outline-none focus:border-[var(--color-accent)]"
          />

          <button
            type="submit"
            className="flex items-center justify-center gap-2 rounded-xl bg-[var(--color-accent)] px-8 py-4 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-[#a96d45]"
          >
            Subscribe
            <Send size={18} />
          </button>

        </form>

      </div>
    </section>
  );
};

export default Newsletter;