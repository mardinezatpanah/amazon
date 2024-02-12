import { Outlet, ScrollRestoration } from "react-router-dom";
import SpecialCase from "../components/SpecialCase/SpecialCase";
import Header from "../components/home/Header/Header";
import HeaderBottom from "../components/home/Header/HeaderBottom";

const Layout = () => {
    return (
      <div>
        <Header />
        <HeaderBottom />
        <SpecialCase />
        <ScrollRestoration />
        <Outlet />
      </div>
    );
  };

  export default Layout