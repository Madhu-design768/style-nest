import { Send } from "lucide-react";

/**
 * Newsletter Section
 */

const Newsletter = () => {
  return (
    <section className="bg-[var(--color-primary)] py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">

        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
          Newsletter
        </p>

        <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-white leading-tight">
          Stay Updated With StyleNest
        </h2>

        <p className="mt-5 text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Subscribe to receive exclusive offers, fashion trends, and new
          arrivals directly in your inbox.
        </p>

        {/* Newsletter Form */}
        <form className="mx-auto mt-10 max-w-2xl">

          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 rounded-full bg-white/10 border border-white/20 px-6 py-4 text-white placeholder-gray-400 outline-none focus:border-[var(--color-accent)] transition-colors duration-300"
            />

            <button
              type="submit"
              className="flex items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Subscribe
              <Send size={18} />
            </button>
          </div>

        </form>

      </div>
    </section>
  );
};

export default Newsletter;