const ProductDescription = ({ product }) => {
  return (
    <div>
       <h2 className="mb-4 text-xl font-bold text-[var(--color-heading)]">
  Product Description
</h2>

<p className="text-base pt-2 leading-relaxed text-[var(--color-text)]">
  Upgrade your everyday wardrobe with the {product.name}. Designed with a
  modern silhouette and a comfortable fit, this piece brings together
  effortless style and everyday versatility.
</p>

<p className="mt-4 text-base leading-relaxed text-[var(--color-text)]">
  Perfect for casual outings, weekend plans, and everyday wear, the{" "}
  {product.name.toLowerCase()} pairs easily with your favorite outfits.
  Its timeless design makes it a reliable addition to any modern wardrobe.
</p>
      </div>
  );
};

export default ProductDescription;
