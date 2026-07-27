import MainLayout from "../../layouts/MainLayout";
import Hero from "../../components/home/Hero";
import Brands from "../../components/home/Brands";
import Categories from "../../components/home/Categories";
import FeaturedProducts from "../../components/home/FeaturedProducts";
import PromoBanner from "../../components/home/PromoBanner";
const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <Brands />
       <Categories />
       <FeaturedProducts />
        <PromoBanner />
    </MainLayout>
  );
};

export default Home;