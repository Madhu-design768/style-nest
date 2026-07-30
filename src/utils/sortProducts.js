const sortProducts = (products, sortOption) => {
  const sorted = [...products];

  switch (sortOption) {
    case "featured":
      return sorted;
    case "newest":
      return sorted.sort((a, b) => b.id - a.id);
    case "price-low-high":
      return sorted.sort((a, b) => {
        const priceA = typeof a.price === "string" ? parseFloat(a.price.replace(/[^0-9.]/g, "")) : a.price;
        const priceB = typeof b.price === "string" ? parseFloat(b.price.replace(/[^0-9.]/g, "")) : b.price;
        return priceA - priceB;
      });
    case "price-high-low":
      return sorted.sort((a, b) => {
        const priceA = typeof a.price === "string" ? parseFloat(a.price.replace(/[^0-9.]/g, "")) : a.price;
        const priceB = typeof b.price === "string" ? parseFloat(b.price.replace(/[^0-9.]/g, "")) : b.price;
        return priceB - priceA;
      });
    case "rating":
      return sorted.sort((a, b) => b.rating - a.rating);
    case "name-a-z":
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    case "name-z-a":
      return sorted.sort((a, b) => b.name.localeCompare(a.name));
    default:
      return sorted;
  }
};

export default sortProducts;