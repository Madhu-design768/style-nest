/**
 * Feature Card Component
 */

const FeatureCard = ({ feature }) => {
  const Icon = feature.icon;

  return (
    <div className="rounded-3xl bg-white p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-accent)]/10">

        <Icon
          size={32}
          className="text-[var(--color-accent)]"
        />

      </div>

      <h3 className="mb-3 text-2xl font-semibold text-[var(--color-heading)]">
        {feature.title}
      </h3>

      <p className="text-gray-500">
        {feature.description}
      </p>

    </div>
  );
};

export default FeatureCard;