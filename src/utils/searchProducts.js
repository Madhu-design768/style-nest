const searchProducts = (products, searchQuery) => {
  if (!searchQuery.trim()) {
    return products;
  }

  const query = searchQuery.toLowerCase().trim();

  return products.filter((product) => {
    const name = product.name || "";
    const category = product.category || "";
    const brand = product.brand || "";
    const colors = Array.isArray(product.colors) ? product.colors : [];

    return (
      name.toLowerCase().includes(query) ||
      category.toLowerCase().includes(query) ||
      brand.toLowerCase().includes(query) ||
      colors.some((color) => color.toLowerCase().includes(query))
    );
  });
};

export default searchProducts;