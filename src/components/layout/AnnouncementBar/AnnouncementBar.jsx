import { Truck, RotateCcw, Headphones } from "lucide-react";

const AnnouncementBar = () => {
  return (
    <div className="hidden lg:block bg-[#1F4D3A] text-white">
      <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 text-sm">

        <div className="flex items-center gap-2">
          <Truck size={16} />
          <span>Free Shipping on Orders Above ₹999</span>
        </div>

        <div className="flex items-center gap-2">
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