import { Link } from "react-router-dom";

const ShopBanner = () => {
  return (
    <section className="relative h-[260px] w-full md:h-[340px] lg:h-[360px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative flex h-full flex-col items-center justify-center px-4 text-center">
        <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
          Shop Collection
        </h1>
        <p className="mt-3 max-w-2xl text-base text-gray-300 md:text-lg">
          Discover premium clothing designed for every style and every season.
        </p>
        <nav className="mt-4 flex items-center gap-2 text-sm">
          <Link to="/" className="text-[var(--color-accent)] hover:underline">
            Home
          </Link>
          <span className="text-gray-300">/</span>
          <span className="text-gray-200">Shop</span>
        </nav>
      </div>
    </section>
  );
};

export default ShopBanner;
