import AnnouncementBar from "../components/layout/AnnouncementBar";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main>{children}</main>
      <Footer/>
    </>
  );
};

export default MainLayout;