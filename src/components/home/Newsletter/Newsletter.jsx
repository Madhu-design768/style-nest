import { Send } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="mt-4 pt-6 pb-12 bg-[var(--color-primary)]">
      <div className="mx-auto max-w-6xl px-6">

        {/* Heading */}
        <div className="flex flex-col items-center text-center">

          <p className="mt-4 pt-4 pb-2  text-xl font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)]">
            Newsletter
          </p>

          <h2 className="mt-4 pt-4 pb-4 max-w-3xl text-4xl font-bold leading-tight text-white lg:text-5xl">
            Stay Updated With StyleNest
          </h2>

          <p className="mt-4 pt-1 pb-4  max-w-2xl text-lg leading-relaxed text-gray-300">
            Subscribe to receive exclusive offers, fashion trends, and new
            arrivals directly in your inbox.
          </p>

        </div>

        {/* Newsletter Form */}
        <form className="mt-12 flex justify-center">
          <div className="flex w-full max-w-3xl flex-col items-center gap-5 sm:flex-row sm:justify-center">

            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full rounded-full border border-white/20 bg-white/10 px-6 py-4 text-white placeholder-gray-400 outline-none transition-colors duration-300 focus:border-[var(--color-accent)] sm:w-[420px]"
            />

            <button
              type="submit"
              className="flex items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] px-10 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
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