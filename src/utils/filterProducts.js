const filterProducts = (products, filters) => {
  const {
    selectedCategories,
    selectedBrands,
    selectedSizes,
    selectedColors,
    selectedRating,
    maxPrice,
  } = filters;

  return products.filter((product) => {
    // Category filter
    if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
      return false;
    }

 
    // Brand filter
    if (selectedBrands.length > 0 && product.brand && !selectedBrands.includes(product.brand)) {
      return false;
    }

    // Size filter
    if (selectedSizes.length > 0 && product.sizes && !selectedSizes.some((size) => product.sizes.includes(size))) {
      return false;
    }

    // Color filter
    if (selectedColors.length > 0 && product.colors && !selectedColors.some((color) => product.colors.includes(color))) {
      return false;
    }

    // Rating filter
    if (selectedRating > 0 && product.rating < selectedRating) {
      return false;
    }

    // Price filter
    const numericPrice = typeof product.price === "string" ? parseFloat(product.price.replace(/[^0-9.]/g, "")) : product.price;
    if (maxPrice > 0 && numericPrice > maxPrice) {
      return false;
    }

    return true;
  });
};

export default filterProducts;