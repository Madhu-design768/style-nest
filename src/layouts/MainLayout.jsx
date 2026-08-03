import AnnouncementBar from "../components/layout/AnnouncementBar";
import Navbar from "../components/layout/Navbar";
import MobileBottomNav from "../components/layout/MobileBottomNav";
import Footer from "../components/layout/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main className="pb-16 lg:pb-0">
        {children}
      </main>

      <Footer />

      <MobileBottomNav />
    </>
  );
};

export default MainLayout;