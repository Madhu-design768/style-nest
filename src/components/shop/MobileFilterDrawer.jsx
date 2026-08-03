import { useState, useEffect } from "react";
import { X } from "lucide-react";
import FilterSidebar from "./FilterSidebar";

// const MobileFilterDrawer = ({ isOpen, onClose, filters, handlers }) => {
const MobileFilterDrawer = ({
  isOpen,
  onClose,
  filters,
  handlers,
  categories,
  brands,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed inset-y-0 left-0 z-50 h-screen w-[80%] max-w-[320px] transform bg-white shadow-xl transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[var(--color-border)] px-4 py-4">
          <h2 className="text-lg font-semibold text-[var(--color-heading)]">
            Filters
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-[var(--color-text)] transition-colors hover:bg-gray-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="h-[calc(100vh-64px)] overflow-y-auto p-4">
          {/* <FilterSidebar filters={filters} handlers={handlers} /> */}
          <FilterSidebar
            filters={filters}
            handlers={handlers}
            categories={categories}
            brands={brands}
          />
        </div>
      </div>
    </>
  );
};

export default MobileFilterDrawer;
