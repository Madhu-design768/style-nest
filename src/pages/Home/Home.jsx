import MainLayout from "../../layouts/MainLayout";
import Hero from "../../components/home/Hero";
import Brands from "../../components/home/Brands";
import Categories from "../../components/home/Categories";
import FeaturedProducts from "../../components/home/FeaturedProducts";
import PromoBanner from "../../components/home/PromoBanner";
import WhyChooseUs from "../../components/home/WhyChooseUs";
import Newsletter from "../../components/home/Newsletter";
const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <Brands />
       <Categories />
       <FeaturedProducts />
        <PromoBanner />
         <WhyChooseUs />
         <Newsletter />
    </MainLayout>
  );
};

export default Home;