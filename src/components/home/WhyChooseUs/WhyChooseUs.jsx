import FeatureCard from "./FeatureCard";
import features from "../../../data/features";

/**
 * Why Choose Us Section
 */

const WhyChooseUs = () => {
  return (
    <section className="bg-[var(--color-section)] py-24">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="mb-16 text-center">

          <p className="font-semibold uppercase tracking-[4px] text-[var(--color-accent)]">
            Why Choose Us
          </p>

          <h2 className="mt-4 text-4xl font-bold text-[var(--color-heading)] lg:text-5xl">
            Designed For Your Lifestyle
          </h2>

          <p className="mt-4 text-lg text-gray-500">
            Premium fashion with quality, comfort and trusted service.
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