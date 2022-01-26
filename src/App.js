import { Route, Routes, Navigate } from "react-router-dom";
import { Fragment } from "react";

import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <Fragment>
      <MainHeader />
      <Routes>
        <Route path={"/"} element={<Navigate to={"/welcome"} />} />

        <Route path={"/welcome"} element={<Welcome />}>
          <Route path={"newuser"} element={<p>Welcome new user</p>} />
        </Route>
        <Route path={"/products"} element={<Products />} />
        <Route path={"/products/:productID"} element={<ProductDetail />} />
      </Routes>
    </Fragment>
  );
}

export default App;
