import { Outlet, ScrollRestoration } from "react-router-dom";
import SpecialCase from "../components/SpecialCase/SpecialCase";
import Header from "../components/home/Header/Header";
import HeaderBottom from "../components/home/Header/HeaderBottom";
import Footer from "../components/home/Footer/Footer";
import FooterBottom from "../components/home/Footer/FooterBottom";

const Layout = () => {
    return (
      <div>
        <Header />
        <HeaderBottom />
        <SpecialCase />
        <ScrollRestoration />
        <Outlet />
        <Footer />
        <FooterBottom />
      </div>
    );
  };

  export default Layout