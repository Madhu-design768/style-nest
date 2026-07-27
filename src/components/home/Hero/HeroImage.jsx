
const HeroImage = () => {
  return (
    <div className="flex-1 relative flex items-center">
      {/* Main Image Container */}
      <div className="relative max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto lg:mx-0 w-full">
        <img
          src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80"
          alt="Fashion Model"
          className="w-full h-auto max-h-[550px] lg:max-h-[650px] xl:max-h-[700px] object-cover rounded-[2.5rem] shadow-2xl animate-fade-in"
        />
        <div className="hidden lg:block absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%]">
          <div className="w-3 h-3 bg-[var(--color-accent)]/20 rounded-full absolute top-0 left-1/4 animate-pulse"></div>
          <div className="w-2 h-2 bg-[var(--color-primary)]/20 rounded-full absolute bottom-0 right-1/4 animate-pulse animation-delay-100"></div>
          <div className="w-2.5 h-2.5 bg-[var(--color-accent)]/20 rounded-full absolute top-1/3 right-0 animate-pulse animation-delay-200"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;