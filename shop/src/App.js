import "./App.css";
import Layout from "./layout/Layout.js";
import Home from "./pages/Home.js";
import New from "./pages/New.js";
import Shop from "./pages/Shop.js";
import Cart from "./pages/Cart.js";
import Categories from "./pages/Categories.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/new" element={<New />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
