import { useState, useEffect } from "react";

export default function Search(props) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 300);
  }, []);
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
      <div
        className={`bg-white fixed w-full h-[337px] shadow-lg transform transition-all duration-300 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
        style={{
          transition: "transform 0.3s ease, opacity 0.3s ease",
          transform: isVisible
            ? "translateX(0)"
            : "translateX(10%) translateY(5%)",
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div className="grid fixed w-full pt-[12px] top-0 left-0 grid-cols-[20%_60%_20%]">
          <div
            className={`pl-[48px] justify-self-start transition-all duration-300 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            }`}
            style={{
              transition: "transform 0.3s ease, opacity 0.3s ease",
              transform: isVisible ? "translateX(0)" : "translateX(100%)",
              opacity: isVisible ? 1 : 0,
            }}
          >
            <p className="text-[30px]">👜</p>
          </div>

          <div
            className={`flex gap-x-[12px] justify-center items-center transition-all duration-300 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            }`}
            style={{
              transition: "transform 0.3s ease, opacity 0.3s ease",
              transform: isVisible ? "translateX(0)" : "translateX(100%)",
              opacity: isVisible ? 1 : 0,
            }}
          >
            <div>
              <button>
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>

            <input
              type="text"
              placeholder="Search..."
              className="w-full h-[36px] border border-gray-400 rounded-lg p-4 text-lg focus:outline-none pt-[7px] pr-0 pb-[9px] pl-[2px]"
            />
          </div>

          <div className="pr-[48px] z-[20]">
            <button
              onClick={props.toggleSearchModal}
              className="text-black absolute right-8 top-6"
            >
              Cancel
            </button>
          </div>

          <div className="pt-[48px] top-0 w-full min-h-[324px] z-[10] right-0 absolute">
            <section className="grid grid-cols-10 pt-[36px] pb-[60px]">
              <div className="grid pr-[48px] col-[3_/_9]">
                <p className="text-gray-600 text-xl">Popular Search Terms</p>
                <ul className="mt-4 space-y-4 text-[black] font-[500]">
                  {["item x", "item x", "item x", "item x"].map(
                    (item, index) => (
                      <li
                        key={index}
                        className={`transition-all duration-500 ease-out opacity-0 translate-y-10`}
                        style={{
                          transitionDelay: `${index * 0.2}s`,
                          opacity: isVisible ? 1 : 0,
                          transform: isVisible
                            ? "translateY(10px)"
                            : "translateY(0px)",
                        }}
                      >
                        {item}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
