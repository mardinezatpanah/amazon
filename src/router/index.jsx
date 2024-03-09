/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "../layout";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Journal from "../pages/Journal/Journal";
import SignUp from "../pages/Account/SignUp";
import SignIn from "../pages/Account/SignIn";
import { useSelector } from "react-redux";
import Offer from "../pages/Offer/Offer";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Cart from "../pages/Cart/Cart";

const ProtectedRoute = ({ children }) => {
  const { authUser } = useSelector((state) => state.user.user);
  if (!authUser) {
    return children;
  }
  return <Navigate to="/" />;
};

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/journal" element={<Journal />}></Route>
        <Route path="/offer" element={<Offer />}></Route>
        <Route path="/product/:_id" element={<ProductDetails />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Route>
      <Route
        path="/signup"
        element={
          <ProtectedRoute>
            <SignUp />
          </ProtectedRoute>
        }
      ></Route>
      <Route
        path="/signin"
        element={
          <ProtectedRoute>
            <SignIn />
          </ProtectedRoute>
        }
      ></Route>
    </Route>
  )
);
