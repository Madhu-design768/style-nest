 import { Truck, RotateCcw, Headphones } from "lucide-react";

const AnnouncementBar = () => {
  return (
    <div className="bg-[var(--color-primary)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-10 flex items-center justify-center md:justify-between text-sm">

        <div className="hidden md:flex items-center gap-2">
          <Truck size={16} />
          <span>Free Shipping on Orders Above ₹999</span>
        </div>

        <div className="hidden md:flex items-center gap-2">
          <RotateCcw size={16} />
          <span>30 Days Easy Returns</span>
        </div>

        <div className="flex items-center gap-2">
          <Headphones size={16} />
          <span>24/7 Customer Support</span>
        </div>

      </div>
    </div>
  );
};

export default AnnouncementBar;