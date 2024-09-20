import { NavLink } from "react-router-dom";

export default function Header() {
  const navigation = [
    { name: "Categories 📂", href: "/categories" },
    { name: "New 🔥", href: "/new" },
    { name: "Shop 🏷", href: "/shop" },
    { name: "Search 🔎", href: "/search" },
    { name: "Cart 🛒", href: "/cart" },
  ];

  return (
    <header>
      <div className="pb-4 min-h-200 border-b border-gray-300 w-1/2 mx-auto my-4 text-[3rem] text-center">
        <a href="/">👜</a>
      </div>

      <div className=" min-h-[80px] bg-gray-100 flex justify-center items-center">
        <nav>
          <div>
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href} //with navlink update this to to
                className={({ isActive }) => {
                  return (
                    "rounded-md px-3 py-2 text-sm font-medium no-underline " +
                    (!isActive
                      ? "text-gray-500 hover:bg-gray-200 hover:text-white"
                      : "bg-gray-200 text-white")
                  );
                }}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
