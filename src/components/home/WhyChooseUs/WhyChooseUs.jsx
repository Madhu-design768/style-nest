import FeatureCard from "./FeatureCard";
import features from "../../../data/features";

const WhyChooseUs = () => {
  return (
    <section className="bg-[var(--color-section)] py-24">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="mb-20 text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
            Why Choose Us
          </p>

          <h2 className="mt-4 text-4xl lg:text-5xl xl:text-6xl font-bold text-[var(--color-heading)] leading-tight">
            Designed For Your Lifestyle
          </h2>

          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Fashion with quality, comfort and trusted service for every occasion.
          </p>

        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default WhyChooseUs;