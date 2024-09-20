import "./App.css";
import Layout from "./layout/Layout.js";
import Home from "./pages/Home.js";
import Categories from "./pages/Categories.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
