const paginateProducts = (products, currentPage, productsPerPage) => {
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  return products.slice(startIndex, endIndex);
};

export default paginateProducts;