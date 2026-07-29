// import HeroContent from "./HeroContent";
// import HeroImage from "./HeroImage";
 
// const Hero = () => {
//   return (
//     <section className="min-h-screen flex items-center bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0 relative z-10 w-full">
//         <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8 xl:gap-20">
//           <HeroContent />
//           <HeroImage />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


// import { useState, useEffect } from "react";
// import HeroImage from "./HeroImage";

// const heroImages = [
//   "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80",
//   "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80",
//   "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
//   "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",
//   "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80",
//   "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
// ];

// const Hero = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % heroImages.length);
//     }, 4000); // every 4 seconds

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white">
//       <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center gap-12 px-4 py-20 sm:px-6 lg:flex-row lg:gap-8 lg:py-0 xl:gap-20 lg:px-8">
//         {/* <HeroContent /> */}

//         <HeroImage
//           image={heroImages[currentSlide]}
//           currentSlide={currentSlide}
//           totalSlides={heroImages.length}
//         />
//       </div>
//     </section>
//   );
// };

// export default Hero;


import HeroImage from "./HeroImage";

const heroSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1600&q=80",
    title: "Elevate Your Style",
    subtitle: "Premium Fashion Collection",
  },
  {
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1600&q=80",
    title: "Summer Collection",
    subtitle: "Discover Fresh Trends",
  },
  {
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1600&q=80",
    title: "Women's Fashion",
    subtitle: "Timeless Elegance",
  },
  {
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1600&q=80",
    title: "Men's Collection",
    subtitle: "Modern Essentials",
  },
  {
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1600&q=80",
    title: "Luxury Looks",
    subtitle: "Designed For You",
  },
  {
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=80",
    title: "New Arrivals",
    subtitle: "Shop The Latest Fashion",
  },
];

const Hero = () => {
  return <HeroImage slides={heroSlides} />;
};

export default Hero;