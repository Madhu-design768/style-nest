import { useEffect, useState } from "react";

const HeroImage = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-[92vh] w-full overflow-hidden">
      {/* Background Image */}
      <img
        src={slides[current].image}
        alt={slides[current].title}
        className="absolute inset-0 h-full w-full object-cover transition-all duration-700"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/35"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-xl text-white">
            <p className="mb-4 uppercase tracking-[0.3em] text-sm text-[var(--color-accent)]">
              StyleNest Collection
            </p>

            <h1 className="text-5xl font-bold leading-tight lg:text-7xl">
              {slides[current].title}
            </h1>

            <p className="mt-6 text-lg text-gray-200">
              {slides[current].subtitle}
            </p>

            <button className="mt-10 rounded-full bg-[var(--color-accent)] px-8 py-4 font-semibold text-white transition hover:scale-105">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`transition-all duration-300 ${
              current === index
                ? "h-3 w-8 rounded-full bg-[var(--color-accent)]"
                : "h-3 w-3 rounded-full bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroImage;