const HeroContent = () => {
  return (
    <div className="flex-1 pl-2 sm:pl-6 lg:pl-10 lg:pr-12">

      {/* Heading */}
      <h1 className="text-4xl font-bold leading-tight text-[var(--color-heading)] sm:text-5xl lg:text-6xl">
        Elevate Your
        <span className="block text-[var(--color-accent)]">
          Everyday Style
        </span>
      </h1>

      {/* Description */}
      <p className="mt-6 max-w-lg text-lg leading-8 text-[var(--color-text)]">
        Discover premium clothing designed for comfort, quality, and timeless
        fashion. Find your perfect look for every occasion.
      </p>

      {/* Features */}
      <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-[var(--color-text)]">
        <span>✓ Free Shipping</span>
        <span>✓ Easy Returns</span>
        <span>✓ Premium Quality</span>
      </div>

    </div>
  );
};

export default HeroContent;