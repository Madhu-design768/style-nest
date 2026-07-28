import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Search, Heart, ShoppingCart, User, Menu, X } from "lucide-react";
import NavLinks from "./NavLinks";
import { navigation } from "../../../data/navigation";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

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
    <header className="sticky top-0 z-50 bg-white shadow-sm relative">
      <div className="mx-auto flex h-20 max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        {/* Mobile Menu */}
        <button className="lg:hidden" onClick={() => setIsDrawerOpen(true)}>
          <Menu size={24} className="mr-2" />
        </button>

        {/* Logo */}
        <div className="ml-3.5 flex flex-1 items-center justify-center lg:justify-start">
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
              onClick={() => setIsDrawerOpen(false)}
              className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 lg:hidden ${
                isDrawerOpen ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            />

            {/* Drawer */}
            <div
              className={`fixed left-0 top-0 z-50 h-screen w-72 bg-white shadow-lg
                 transform transition-transform duration-500 ease-in-out lg:hidden
                ${isDrawerOpen ? "translate-x-0" : "-translate-x-full"}`}
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

        {/* Desktop Right Icons */}
        <div className="hidden lg:flex flex-1 items-center justify-end gap-2">
          {/* Search Box */}
          <div
            className={`relative overflow-hidden transition-all duration-300 ease-in-out ${
              showSearch ? "w-56 opacity-100 pl-3" : "w-0 opacity-0"
            }`}
          >
            
            <input
              autoFocus
              type="text"
              placeholder="Search products..."
              className="w-full rounded-full border border-gray-300 py-1 pl-8 pr-4 text-sm outline-none focus:border-[var(--color-accent)]"
            />
          </div>

          {/* Search Icon */}
          <button onClick={() => setShowSearch(!showSearch)}>
            <Search
              size={22}
              className="cursor-pointer transition-colors hover:text-[var(--color-accent)]"
            />
          </button>

          <button>
            <Heart size={22} />
          </button>

          <button>
            <ShoppingCart size={22} />
          </button>

          <button>
            <User size={22} />
          </button>
        </div>

        {/* Mobile Search Icon */}
        <div className="flex flex-1 justify-end lg:hidden">
          <button onClick={() => setShowSearch(!showSearch)}>
            <Search
              size={22}
              className="cursor-pointer transition-colors hover:text-[var(--color-accent)]"
            />
          </button>
        </div>
        {showSearch && (
          <div className="absolute left-0 top-full w-full border-t border-gray-200 bg-white p-4 shadow-md lg:hidden">
            <input
              autoFocus
              type="text"
              placeholder="Search products..."
              className="w-full rounded-full border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[var(--color-accent)]"
            />
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
