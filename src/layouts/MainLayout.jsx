import AnnouncementBar from "../components/layout/AnnouncementBar";
import Navbar from "../components/layout/Navbar";
import CategoryNav from "../components/layout/CategoryNav";
import Footer from "../components/layout/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <AnnouncementBar />

      <Navbar />

      <CategoryNav />

      <main>{children}</main>

      <Footer />
    </>
  );
};

export default MainLayout;