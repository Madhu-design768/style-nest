/**
 * HeroImage Component
 * Displays hero banner image.
 */

const HeroImage = () => {
  return (
    <div className="flex-1">
      <img
        src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80"
        alt="Fashion Model"
        className="w-full h-[600px] object-cover rounded-2xl shadow-xl"
      />
    </div>
  );
};

export default HeroImage;