import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function Layout({ children }) {
  return (
    <>
      <div className="bg-white-300">
        <Header />
        <main>
          <Outlet />
        </main>
        <div className="mx-auto bg-white-300 min-h-screen p-3">{children}</div>
      </div>
    </>
  );
}
