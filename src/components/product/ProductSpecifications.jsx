const ProductSpecifications = ({ product }) => {
  const specifications = [
    { label: "Category", value: product.category },
    { label: "Material", value: "Premium Quality Fabric" },
    { label: "Fit", value: "Regular Fit" },
    { label: "Country of Origin", value: "India" },
  ];

  return (
    <div className="">
      <h2 className="mb-4 pb-4 text-xl font-bold text-[var(--color-heading)]">
        Product Details
      </h2>
      <div className="overflow-hidden rounded-xl  border-[var(--color-border)]">
        <table className="w-full text-sm">
          <tbody>
            {specifications.map((spec, index) => (
              <tr
                key={spec.label}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="px-4 py-3 font-semibold text-[var(--color-heading)]">
                  {spec.label}
                </td>
                <td className="px-4 py-3 text-[var(--color-text)]">
                  {spec.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductSpecifications;