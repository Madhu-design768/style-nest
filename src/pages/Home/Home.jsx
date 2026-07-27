import MainLayout from "../../layouts/MainLayout";
import Hero from "../../components/home/Hero";
import Brands from "../../components/home/Brands";

const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <Brands />
    </MainLayout>
  );
};

export default Home;