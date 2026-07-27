import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  Search,
  Heart,
  ShoppingCart,
  User,
  Menu,
  X,
} from "lucide-react";
import NavLinks from "./NavLinks";
import { navigation } from "../../../data/navigation";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isDrawerOpen]);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center px-4 sm:px-6 lg:px-8">

        {/* Mobile Menu */}
        <button
          className="lg:hidden"
          onClick={() => setIsDrawerOpen(true)}
        >
          <Menu size={24} className="mr-2" />
        </button>

        {/* Logo */}
        <div className="flex flex-1 items-center justify-center lg:justify-start">
          <h1 className="text-3xl font-bold tracking-wide text-[var(--color-primary)]">
            StyleNest
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden flex-1 justify-center lg:flex">
          <NavLinks />
        </div>

        {/* Mobile Drawer */}
        {isDrawerOpen && (
          <>
            {/* Overlay */}
            <div
              className="fixed inset-0 z-40 bg-black/40 lg:hidden"
              onClick={() => setIsDrawerOpen(false)}
            />

            {/* Drawer */}
            <div className="fixed left-0 top-0 z-50 h-screen w-72 -translate-x-full transform bg-white shadow-lg transition-transform duration-300 ease-in-out lg:hidden"
              style={{ transform: isDrawerOpen ? "translateX(0)" : "translateX(-100%)" }}
            >
              {/* Close Button */}
              <button
                className="absolute right-4 top-4"
                onClick={() => setIsDrawerOpen(false)}
              >
                <X size={24} />
              </button>

              {/* Navigation Links */}
              <nav className="mt-16 px-4">
                {navigation.map((item, index) => (
                  <div key={item.id}>
                    <NavLink
                      to={item.path}
                      onClick={() => setIsDrawerOpen(false)}
                      className={({ isActive }) =>
                        `block py-4 text-left text-lg font-semibold transition-colors ${
                          isActive
                            ? "text-[var(--color-accent)] bg-gray-50"
                            : "text-[var(--color-primary)] hover:bg-gray-50 hover:text-[var(--color-accent)]"
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                    {index === 1 && (
                      <div className="border-t border-gray-200" />
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </>
        )}

        {/* Right Icons */}
        <div className="flex flex-1 items-center justify-end gap-6">

          {/* Search */}
          <button>
            <Search
              size={22}
              className="cursor-pointer transition-colors hover:text-[var(--color-accent)]"
            />
          </button>

          {/* Wishlist */}
          <button>
            <Heart
              size={22}
              className="cursor-pointer transition-colors hover:text-[var(--color-accent)]"
            />
          </button>

          {/* Cart */}
          <button>
            <ShoppingCart
              size={22}
              className="cursor-pointer transition-colors hover:text-[var(--color-accent)]"
            />
          </button>

          {/* User */}
          <button>
            <User
              size={22}
              className="cursor-pointer transition-colors hover:text-[var(--color-accent)]"
            />
          </button>
        </div>

      </div>
    </header>
  );
};

export default Navbar;