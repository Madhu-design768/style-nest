import { useState, useEffect } from "react";
import { NavLink, useLocation, useSearchParams } from "react-router-dom";
import { Search, Heart, ShoppingCart, User, Menu, X } from "lucide-react";
import NavLinks from "./NavLinks";
import { navigation } from "../../../data/navigation";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();
  const isShopPage = location.pathname === "/shop";
  const [searchParams, setSearchParams] = useSearchParams();

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
        <button
          className="lg:hidden mr-2 flex flex-col justify-center gap-1.5"
          onClick={() => setIsDrawerOpen(true)}
        >
          <span className="h-[2px] w-8 rounded-full bg-[var(--color-primary)]"></span>
          <span className="h-[2px] w-6 rounded-full bg-[var(--color-primary)]"></span>
          <span className="h-[2px] w-4 rounded-full bg-[var(--color-primary)]"></span>
        </button>

        {/* Logo */}
        <div className="ml-3.5 flex flex-1 items-center justify-center lg:justify-start">
          <h1 className="text-3xl font-bold tracking-wide text-[var(--color-primary)]">
            StyleNest
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden flex-1 justify-center lg:flex">
          {isShopPage ? (
            <nav className="flex items-center gap-6">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    !isActive && "text-[var(--color-primary)] hover:text-[var(--color-accent)]"
                  }`
                }
              >
                Home
              </NavLink>
              <span className="text-gray-300">|</span>
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive
                      ? "text-[var(--color-accent)] font-semibold"
                      : "text-[var(--color-primary)] hover:text-[var(--color-accent)]"
                  }`
                }
              >
                Shop
              </NavLink>
            </nav>
          ) : (
            <NavLinks />
          )}
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
          {/* <div
            className={`relative overflow-hidden transition-all duration-300 ease-in-out ${
              showSearch ? "w-56 opacity-100 pl-3" : "w-0 opacity-0"
            }`}
          >
            <input
              autoFocus
              type="text"
              placeholder="Search products..."
              className="w-full rounded-full border  py-1 pl-8 pr-4 text-sm outline-none focus:border-[var(--color-accent)]"
            />
          </div> */}

          {/* Search Icon */}
          {!isShopPage && (
            <button onClick={() => setShowSearch(!showSearch)}>
              <Search
                size={22}
                className="cursor-pointer transition-colors hover:text-[var(--color-accent)]"
              />
            </button>
          )}

          {/* Shop Search Input */}
          {isShopPage && (
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchParams.get("search") || ""}
                onChange={(e) => {
                  const value = e.target.value;
                  if (value) {
                    setSearchParams({ search: value });
                  } else {
                    setSearchParams({});
                  }
                }}
                placeholder="Search..."
                className="h-10 w-64 rounded-lg border border-[var(--color-border)] bg-white pl-9 pr-4 text-sm text-[var(--color-heading)] placeholder:text-gray-400 transition-colors hover:border-[var(--color-accent)] focus:border-[var(--color-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]"
              />
            </div>
          )}

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
        {!isShopPage && (
          <div className="flex flex-1 justify-end lg:hidden">
            <button onClick={() => setShowSearch(!showSearch)}>
              <Search
                size={22}
                className="cursor-pointer transition-colors hover:text-[var(--color-accent)]"
              />
            </button>
          </div>
        )}
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

      {/* Desktop Search Bar */}
      <div
        className={`hidden lg:block overflow-hidden transition-all duration-500 ${
          showSearch ? "max-h-24 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-gray-200 bg-white shadow-md">
          <div className="mx-auto flex max-w-4xl justify-end items-center gap-4  py-4">
            <input
              autoFocus
              type="text"
              placeholder="Search products..."
              className="flex-1 rounded-full border border-gray-300 px-5 py-3 outline-none focus:border-[var(--color-accent)]"
            />

            <button className="rounded-md bg-[var(--color-accent)] px-6 py-3 font-medium text-white">
              Search
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;