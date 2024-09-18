import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Content from "./Content";

export default function Layout({ children }) {
  return (
    <>
      <div className="bg-white-300"></div>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
