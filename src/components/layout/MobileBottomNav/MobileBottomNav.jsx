import { NavLink } from "react-router-dom";
import { Home, Heart, ShoppingCart, User } from "lucide-react";

const MobileBottomNav = () => {
  const navItems = [
    { label: "Home", path: "/", icon: Home },
    { label: "Wishlist", path: "/wishlist", icon: Heart },
    { label: "Cart", path: "/cart", icon: ShoppingCart },
    { label: "Account", path: "/account", icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white shadow-lg lg:hidden">
      <div className="flex h-10 items-center justify-around">
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) =>
              `flex flex-1 flex-col items-center justify-center gap-1 py-2 transition-colors ${
                isActive
                  ? "text-[var(--color-accent)]"
                  : "text-gray-500"
              }`
            }
          >
            <item.icon size={22} />
            <span className="text-xs">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default MobileBottomNav;