import MainLayout from "../../layouts/MainLayout";
import Hero from "../../components/home/Hero";
import Brands from "../../components/home/Brands";
import Categories from "../../components/home/Categories";
import FeaturedProducts from "../../components/home/FeaturedProducts";

const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <Brands />
       <Categories />
       <FeaturedProducts />
    </MainLayout>
  );
};

export default Home;