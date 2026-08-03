const FeatureCard = ({ feature }) => {
  const Icon = feature.icon;

  return (
    <div className="mt-4 pt-6 pb-12 group rounded-3xl bg-white p-8 lg:p-10 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl h-full">
      {/* Icon Container */}

      <div className="mb-6 flex justify-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--color-accent)]/10 transition-all duration-300 group-hover:bg-[var(--color-accent)]">
          <Icon
            size={32}
            className="text-[var(--color-accent)] transition-colors duration-300 group-hover:text-white"
          />
        </div>
      </div>

      {/* Title */}
      <h3 className="mb-3 text-xl lg:text-2xl font-bold text-[var(--color-heading)] group-hover:text-[var(--color-accent)] transition-colors duration-300">
        {feature.title}
      </h3>

      {/* Description */}
      <p className="text-gray-500 leading-relaxed">{feature.description}</p>
    </div>
  );
};

export default FeatureCard;
