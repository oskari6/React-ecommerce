import ProductContainer from "../components/ProductContainer";
import { useState } from "react";

export default function Shop() {
  const [isUp, setIsUp] = useState(false);
  const [showFilters, setShowFilters] = useState(true);
  const handleClick = () => {
    setIsUp(!isUp);
  };
  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };
  return (
    <div>
      <div className="flex justify-center items-center">
        <h1>Shop</h1>
      </div>
      <div className="h-[50px] bg-[white] pb-4 min-h-200 border-b border-gray-300 w-2/3 mx-auto mb-20 my-4"></div>
      <div className="mt-10 relative min-h-[600px] w-full">
        <video
          playsInline
          id="home-hero"
          role="application"
          preload="auto"
          muted
          autoPlay
          loop
          src="shop-video.mp4"
          className="absolute top-0 left-0 w-full h-full object-cover"
        ></video>
        <div className="pl-12 absolute inset-0 flex flex-col justify-center items-start text-white">
          <h2 className="mb-20 text-[5rem] font-[600]">Welcome to our shop</h2>
          <div className="text-[30px]">
            <p>Up to 50% off</p>
            <p>Exclusive deals</p>
            <p>One time offers</p>
            <p>Free shipping over 100$</p>
          </div>
        </div>
      </div>
      <div className="relative z-[9] sticky top-[0px] h-[100px] bg-[#eeeeee] flex items-center justify-between">
        <h3 className="ml-5 text-[black] font-[500]">All Products(36)</h3>
        <nav className="relative inline-block">
          <button
            onClick={toggleFilters}
            className="flex pr-[25px] font-[500] text-[black]"
          >
            <span className="pr-2">
              {showFilters ? "Hide Filters" : "Show Filters"}
            </span>
            <svg
              aria-hidden="true"
              class="icon-filter-ds"
              focusable="false"
              viewBox="0 0 24 24"
              role="img"
              width="24px"
              height="24px"
              fill="none"
            >
              <path
                stroke="currentColor"
                stroke-width="1.5"
                d="M21 8.25H10m-5.25 0H3"
              ></path>
              <path
                stroke="currentColor"
                stroke-width="1.5"
                d="M7.5 6v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
                clip-rule="evenodd"
              ></path>
              <path
                stroke="currentColor"
                stroke-width="1.5"
                d="M3 15.75h10.75m5 0H21"
              ></path>
              <path
                stroke="currentColor"
                stroke-width="1.5"
                d="M16.5 13.5v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div id="sort-by">
            <button onClick={handleClick} className="flex items-center">
              <span className="font-[500] text-[black] mr-2">Sort By</span>
              <span
                className={` text-[black] text-[25px] transform transition-transform ${
                  isUp ? "rotate-180" : ""
                }`}
              >
                &#709;
              </span>
            </button>
            <div
              id="drop-down-sort"
              className={`absolute mt-2 right-0 w-[150px] bg-white shadow-lg rounded-lg transition-transform ${
                isUp ? "block" : "hidden"
              }`}
            >
              <button className="hover:bg-gray-200 w-full">Featured</button>
              <button className="hover:bg-gray-200 w-full">Newest</button>
              <button className="hover:bg-gray-200 w-full">
                Price: High-Low
              </button>
              <button className="hover:bg-gray-200 w-full">
                Price: Low-high
              </button>
            </div>
          </div>
        </nav>
      </div>
      <div className="h-[15px]"></div>
      <div className="flex">
        {showFilters && (
          <div
            id="filters"
            className="h-[375px] min-w-[260px] flex flex-col pl-[40px] overflow-y-auto top-[115px] sticky relative z-[1]"
          >
            <div
              id="categories"
              className="flex flex-col justify-start text-[black] font-[500] pb-[40px]"
            >
              <a className="pr-[17px] pb-[10px]">Basketball</a>
              <a className="pr-[17px] pb-[10px]">Running</a>
              <a className="pr-[17px] pb-[10px]">Casual</a>
              <a className="pr-[17px] pb-[10px]">School</a>
              <a className="pr-[17px] pb-[10px]">Hiking</a>
              <a className="pr-[17px] pb-[10px]">White</a>
              <a className="pr-[17px] pb-[10px]">Black</a>
              <a className="pr-[17px] pb-[10px]">Exclusive</a>
            </div>
            <div id="filters-2" className="text-[black] font-[500]">
              <div className="border-t border-gray-300 pt-[12px] pb-[12px]">
                <span>Gender</span>
              </div>

              <div className="border-t border-gray-300 pt-[12px] pb-[12px]">
                <span>Shop by price</span>
              </div>

              <div className="border-t border-gray-300 pt-[12px] pb-[12px]">
                <span>Color</span>
              </div>

              <div className="border-t border-gray-300 pt-[12px] pb-[12px]">
                <span>Sports</span>
              </div>

              <div className="border-t border-gray-300 pt-[12px] pb-[12px]">
                <span>Materials</span>
              </div>

              <div className="border-t border-gray-300 pt-[12px] pb-[12px]">
                <span>Special</span>
              </div>
            </div>
          </div>
        )}

        <div className="pt-20 flex-wrap justify-center flex gap-4">
          {Array.from({ length: 36 }).map((_, index) => (
            <ProductContainer key={index} />
          ))}
        </div>
      </div>
      <div className="mt-10 relative min-h-[600px] w-full">
        <video
          playsInline
          id="home-hero"
          role="application"
          preload="auto"
          muted
          autoPlay
          loop
          src="shop-video-2.mp4"
          className="absolute top-0 left-0 w-full h-full object-cover"
        ></video>
        <div className=" absolute inset-0 flex flex-col justify-center items-end text-white">
          <h2 className="mb-20 text-[5rem] font-[600] pr-5">
            Sign up for our newsletter
          </h2>
          <div className="text-[30px] text-center pr-40">
            <p>Get details on latest drops</p>
            <p>Limited time deals</p>
            <p>Latest and greatest news</p>
            <div className="justify-center flex items-center flex-col">
              <a>
                <div className="bg-[white] rounded-[20px] w-[50px] h-[50px] justify-center flex items-center mt-5">
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 17H21M18.5 14.5V19.5M12 19H6.2C5.0799 19 4.51984 19 4.09202 18.782C3.71569 18.5903 3.40973 18.2843 3.21799 17.908C3 17.4802 3 16.9201 3 15.8V8.2C3 7.0799 3 6.51984 3.21799 6.09202C3.40973 5.71569 3.71569 5.40973 4.09202 5.21799C4.51984 5 5.0799 5 6.2 5H17.8C18.9201 5 19.4802 5 19.908 5.21799C20.2843 5.40973 20.5903 5.71569 20.782 6.09202C21 6.51984 21 7.0799 21 8.2V11M20.6067 8.26229L15.5499 11.6335C14.2669 12.4888 13.6254 12.9165 12.932 13.0827C12.3192 13.2295 11.6804 13.2295 11.0677 13.0827C10.3743 12.9165 9.73279 12.4888 8.44975 11.6335L3.14746 8.09863"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </a>
              <p className="font-[600] text-[16px]">Sign up</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
