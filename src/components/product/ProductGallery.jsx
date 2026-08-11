import { useState, useEffect } from "react";

const ProductGallery = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(0);

//   const images = [product.image, product.image, product.image, product.image, product.image];

const images = product.images?.length
  ? product.images
  : [product.image];

//     useEffect(() => {
//     const interval = setInterval(() => {
//       setSelectedImage((prev) => (prev + 1) % images.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

  return (
    <div className="pt-10 pb-10">
<div className="flex flex-col gap-4 sm:flex-row">
  
  <div className="order-2 flex gap-6 sm:order-1 sm:w-20 sm:flex-col">
    {images.map((img, index) => (
      <button
        key={index}
        type="button"
        onClick={() => setSelectedImage(index)}
        className={`overflow-hidden rounded-xl bg-gray-100  transition-all ${
          selectedImage === index
            ? "ring-2 ring-[var(--color-accent)] ring-offset-2"
            : "opacity-70 hover:opacity-100"
        }`}
      >
        <img
          src={img}
          alt={`${product.name} ${index + 1}`}
          className="h-20 w-20 object-cover"
        />
      </button>
    ))}
  </div>

  <div className="order-1 min-w-0 flex-1 sm:order-2">
    <div className="overflow-hidden rounded-2xl bg-gray-100">
      <img
        src={images[selectedImage]}
        alt={product.name}
        className="h-[400px] w-full object-cover sm:h-[500px]"
      />
    </div>
  </div>

</div>
    </div>
  );
};

export default ProductGallery;
