import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "../layout";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
        </Route>
      </Route>
    )
  );