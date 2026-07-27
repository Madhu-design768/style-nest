import AnnouncementBar from "../components/layout/AnnouncementBar";
import Navbar from "../components/layout/Navbar";
import MobileBottomNav from "../components/layout/MobileBottomNav";
// import CategoryNav from "../components/layout/CategoryNav";
// import Footer from "../components/layout/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <AnnouncementBar />

      <Navbar />

      <main className="pb-16 lg:pb-0">{children}</main>

      <MobileBottomNav />

      {/* <Footer /> */}
    </>
  );
};

export default MainLayout;