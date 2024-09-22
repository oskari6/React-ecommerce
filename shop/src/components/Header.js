import { NavLink } from "react-router-dom";
import { useState } from "react";
import Search from "./Search.js";
import ShoppingCart from "./ShoppingCart.js";

export default function Header() {
  const [isSearchModalOpen, setSearchModalOpen] = useState(false);
  const [isCartModalOpen, setCartModalOpen] = useState(false);
  const navigation = [
    { name: "Categories 📂", href: "/categories" },
    { name: "New 🔥", href: "/new" },
    { name: "Shop 🏷", href: "/shop" },
    { name: "Search 🔎", href: "/search" },
  ];

  const toggleSearchModal = () => {
    setSearchModalOpen(!isSearchModalOpen);
  };
  const toggleCartModal = () => {
    setCartModalOpen(!isCartModalOpen);
  };
  return (
    <>
      <header>
        <div className="pb-4 min-h-200 border-b border-gray-300 w-1/2 mx-auto my-4 text-[3rem] text-center">
          <a href="/">👜</a>
        </div>

        <div className=" min-h-[80px] bg-gray-100 flex justify-center items-center">
          <nav>
            <div>
              {navigation.map((item) =>
                item.name === "Search 🔎" ? (
                  <button
                    key={item.name}
                    onClick={toggleSearchModal}
                    className="rounded-md px-3 py-2 text-sm font-medium no-underline text-gray-500 hover:bg-gray-200 hover:text-white"
                  >
                    {item.name}
                  </button>
                ) : (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={({ isActive }) =>
                      "rounded-md px-3 py-2 text-sm font-medium no-underline " +
                      (!isActive
                        ? "text-gray-500 hover:bg-gray-200 hover:text-white"
                        : "bg-gray-200 text-white")
                    }
                  >
                    {item.name}
                  </NavLink>
                )
              )}
              <button
                onClick={toggleCartModal}
                className="rounded-md px-3 py-2 text-sm font-medium no-underline text-gray-500 hover:bg-gray-200 hover:text-white"
              >
                <div
                  className={({ isActive }) =>
                    "rounded-md px-3 py-2 text-sm font-medium no-underline " +
                    (!isActive
                      ? "text-gray-500 hover:bg-gray-200 hover:text-white"
                      : "bg-gray-200 text-white")
                  }
                >
                  Cart 🛒
                </div>
              </button>
            </div>
          </nav>
        </div>
      </header>
      {isSearchModalOpen && <Search toggleSearchModal={toggleSearchModal} />}
      {isCartModalOpen && <ShoppingCart toggleCartModal={toggleCartModal} />}
    </>
  );
}
