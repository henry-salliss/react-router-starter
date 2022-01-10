import { Route } from "react-router-dom";
import { Fragment } from "react";

import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <Fragment>
      <MainHeader />
      <div>
        <Route path={"/welcome"}>
          <Welcome />
        </Route>
        <Route path={"/products"}>
          <Products />
        </Route>
        <Route path={"/product-detail/:productID"}>
          <ProductDetail />
        </Route>
      </div>
    </Fragment>
  );
}

export default App;
