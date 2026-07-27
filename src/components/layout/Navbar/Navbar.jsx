import { Search, Heart, ShoppingCart, User, Menu } from "lucide-react";
import NavLinks from "./NavLinks";


const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Mobile Menu Icon */}
        <button className="lg:hidden">
          <Menu size={24} />
        </button>

        {/* Logo */}
        <h1 className="text-3xl font-bold tracking-wide text-[var(--color-primary)]">
          StyleNest
        </h1>

        {/* Desktop Navigation */}
        <NavLinks />

        {/* Action Icons */}
        <div className="flex items-center gap-5">
          <Search
            size={22}
            className="cursor-pointer hover:text-[var(--color-accent)] transitio0n-colors"
          />

          <Heart
            size={22}
            className="cursor-pointer hover:text-[var(--color-accent)] transition-colors"
          />

          <ShoppingCart
            size={22}
            className="cursor-pointer hover:text-[var(--color-accent)] transition-colors"
          />

          <User
            size={22}
            className="cursor-pointer hover:text-[var(--color-accent)] transition-colors"
          />
        </div>

      </div>
    </header>
  );
};

export default Navbar;