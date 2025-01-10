import { Outlet } from "react-router-dom";
import Navbar from "../components/minicomponent/Navbar";
import Footer from "../components/minicomponent/Footer";
const RootLayout = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default RootLayout;
