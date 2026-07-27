import AnnouncementBar from "../components/layout/AnnouncementBar";
import Navbar from "../components/layout/Navbar";

const MainLayout = ({ children }) => {
  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main>{children}</main>
    </>
  );
};

export default MainLayout;