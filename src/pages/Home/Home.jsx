import MainLayout from "../../layouts/MainLayout";
import Hero from "../../components/home/Hero";
import Brands from "../../components/home/Brands";
import Categories from "../../components/home/Categories";

const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <Brands />
       <Categories />
    </MainLayout>
  );
};

export default Home;