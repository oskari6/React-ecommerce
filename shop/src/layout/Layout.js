import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <div className="bg-white-300"></div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
