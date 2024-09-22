export default function New() {
  return (
    <div>
      <div className="flex min-h-[100px] justify-center items-center">
        <h1>New releases</h1>
      </div>
      <div className="mt-10 relative min-h-[500px] w-full">
        <video
          playsInline
          id="home-hero"
          role="application"
          preload="auto"
          muted
          autoPlay
          loop
          src="new-video.mp4"
          className="absolute top-0 left-0 w-full h-full object-cover"
        ></video>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50">
          <h2 className="mb-20">From the biggest brands in the world</h2>
          <div className="text-lg text-center space-y-8">
            <p>Nike</p>
            <p>Adidas</p>
            <p>New Balance</p>
            <p>and so many more..</p>
          </div>
        </div>
      </div>
      <div className="h-[50px] bg-[white] pb-4 min-h-200 border-b border-gray-300 w-2/3 mx-auto mb-20 my-4"></div>
      <figure className="relative w-full h-[430px]">
        <div className="overflow-hidden w-full h-full">
          <img
            alt="shoe-banner-1"
            className="w-full h-full object-cover object-bottom"
            src="/images/shoe-banner-1.jpg"
          />
        </div>
        <figcaption className=" text-[white] absolute left-12 w-[calc(100% - 48px)] bottom-12 flex flex-col justify-end text-left h-1/3">
          <div>
            <h3 className="uppercase text-[4.75rem] font-extrabold  leading-none">
              Make the move<br></br> to the new
            </h3>
            <p className="p-2 text-[16px] font-bold">Old but cold</p>
            <p className="p-2 text-[16px] font-bold">Now in stock</p>
          </div>
          <div className="mt-5">
            <a className="shop-button" href="/shop">
              Shop
            </a>
          </div>
        </figcaption>
      </figure>
      <section className="mt-10 bg-[#F5F5F5]">
        <div className="pl-[48px] pr-[48px] py-[5px] items-center flex justify-between">
          <div>
            <h4 className="font-[500] text-[2rem]">Explore the newest</h4>
          </div>
          <div className="flex gap-4">
            <button>
              <div className="flex justify-center items-center  bg-[#b3b3b3] rounded-[24px]  h-[48px] w-[48px]">
                <svg
                  aria-hidden="true"
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
                    d="M15.525 18.966L8.558 12l6.967-6.967"
                  ></path>
                </svg>
              </div>
            </button>
            <button>
              <div className="flex justify-center items-center bg-[#b3b3b3] h-[48px] w-[48px] rounded-[24px]">
                <svg
                  aria-hidden="true"
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
                    d="M8.474 18.966L15.44 12 8.474 5.033"
                  ></path>
                </svg>
              </div>
            </button>
          </div>
        </div>
        <ul className="overflow-x-auto flex pb-[30px]  pl-[48px]">
          <li className="ml-[0] mr-[12px] my-[0] min-w-[auto] flex-[0_0_calc((100%_-_48px_-_12px*_2)_/_3)]">
            <figure className="relative w-full h-[300px] overflow-hidden">
              <img
                className="w-full h-full object-cover"
                alt="shoe-4"
                src="/images/shoe-4.jpg"
              />
              <div className="justify-end flex flex-col w-full top-[63%] h-1/3 left-[50%] text-left w-3/4 absolute">
                <a
                  className="p-2 text-[white] ml-0 mr-[6px] mt-[6px] w-[120px] justify-center items-center font-bold bg-[#c9c9c9] rounded-[30px] text-center"
                  href="/shop"
                >
                  [shoe name]
                </a>
              </div>
            </figure>
          </li>
          <li className="ml-[0] mr-[12px] my-[0] min-w-[auto] flex-[0_0_calc((100%_-_48px_-_12px*_2)_/_3)]">
            <figure className="relative w-full h-[300px] overflow-hidden">
              <img
                className="w-full h-full object-cover"
                alt="shoe-5"
                src="/images/shoe-5.jpg"
              />
              <div className="justify-end flex flex-col w-full top-[63%] h-1/3 left-[50%] text-left w-3/4 absolute">
                <a
                  className="p-2 text-[white] ml-0 mr-[6px] mt-[6px] w-[120px] justify-center items-center font-bold bg-[#c9c9c9] rounded-[30px] text-center"
                  href="/shop"
                >
                  [shoe name]
                </a>
              </div>
            </figure>
          </li>
          <li className="ml-[0] mr-[12px] my-[0] min-w-[auto] flex-[0_0_calc((100%_-_48px_-_12px*_2)_/_3)]">
            <figure className="relative w-full h-[300px] overflow-hidden">
              <img
                className="w-full h-full object-cover"
                alt="shoe-6"
                src="/images/shoe-6.jpg"
              />
              <div className="justify-end flex flex-col w-full top-[63%] h-1/3 left-[50%] text-left w-3/4 absolute">
                <a
                  className="p-2 text-[white] ml-0 mr-[6px] mt-[6px] w-[120px] justify-center items-center font-bold bg-[#c9c9c9] rounded-[30px] text-center"
                  href="/shop"
                >
                  [shoe name]
                </a>
              </div>
            </figure>
          </li>
          <li className="ml-[0] mr-[12px] my-[0] min-w-[auto] flex-[0_0_calc((100%_-_48px_-_12px*_2)_/_3)]">
            <figure className="relative w-full h-[300px] overflow-hidden">
              <img
                className="w-full h-full object-cover"
                alt="shoe-7"
                src="/images/shoe-7.jpg"
              />
              <div className="justify-end flex flex-col w-full top-[63%] h-1/3 left-[50%] text-left w-3/4 absolute">
                <a
                  className="p-2 text-[white] ml-0 mr-[6px] mt-[6px] w-[120px] justify-center items-center font-bold bg-[#c9c9c9] rounded-[30px] text-center"
                  href="/shop"
                >
                  [shoe name]
                </a>
              </div>
            </figure>
          </li>
          <li className="ml-[0] mr-[12px] my-[0] min-w-[auto] flex-[0_0_calc((100%_-_48px_-_12px*_2)_/_3)]">
            <figure className="relative w-full h-[300px] overflow-hidden">
              <img
                className="w-full h-full object-cover"
                alt="shoe-8"
                src="/images/shoe-8.jpg"
              />
              <div className="justify-end flex flex-col w-full top-[63%] h-1/3 left-[50%] text-left w-3/4 absolute">
                <a
                  className="p-2 text-[white] ml-0 mr-[6px] mt-[6px] w-[120px] justify-center items-center font-bold bg-[#c9c9c9] rounded-[30px] text-center"
                  href="/shop"
                >
                  [shoe name]
                </a>
              </div>
            </figure>
          </li>
          <li className="ml-[0] mr-[12px] my-[0] min-w-[auto] flex-[0_0_calc((100%_-_48px_-_12px*_2)_/_3)]">
            <figure className="relative w-full h-[300px] overflow-hidden">
              <img
                className="w-full h-full object-cover"
                alt="shoe-9"
                src="/images/shoe-9.jpg"
              />
              <div className="justify-end flex flex-col w-full top-[63%] h-1/3 left-[50%] text-left w-3/4 absolute">
                <a
                  className="p-2 text-[white] ml-0 mr-[6px] mt-[6px] w-[120px] justify-center items-center font-bold bg-[#c9c9c9] rounded-[30px] text-center"
                  href="/shop"
                >
                  [shoe name]
                </a>
              </div>
            </figure>
          </li>
        </ul>
      </section>
      <div className=" flex justify-center items-center h-[200px]">
        <h3>Released this month</h3>
      </div>
      <section className="mt-10 bg-[#F5F5F5]">
        <div className="pl-[48px] pr-[48px] py-[5px] items-center flex justify-between">
          <div>
            <h4 className="font-[500] text-[2rem]">
              Freetime, hobbies, school
            </h4>
          </div>
          <div className="flex gap-4">
            <button>
              <div className="flex justify-center items-center  bg-[#b3b3b3] rounded-[24px]  h-[48px] w-[48px]">
                <svg
                  aria-hidden="true"
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
                    d="M15.525 18.966L8.558 12l6.967-6.967"
                  ></path>
                </svg>
              </div>
            </button>
            <button>
              <div className="flex justify-center items-center bg-[#b3b3b3] h-[48px] w-[48px] rounded-[24px]">
                <svg
                  aria-hidden="true"
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
                    d="M8.474 18.966L15.44 12 8.474 5.033"
                  ></path>
                </svg>
              </div>
            </button>
          </div>
        </div>
        <ul className="overflow-x-auto flex pb-[30px] pl-[48px]">
          <li className="ml-[0] mr-[12px] my-[0] min-w-[auto] flex-[0_0_calc((100%_-_48px_-_12px*_2)_/_3)]">
            <figure className="flex flex-col justify-start h-[470px] w-[380px]">
              <img
                className="min-h-[380px] max-h-[380px] w-full h-full object-cover"
                alt="shoe-4"
                src="/images/shoe-10.jpg"
              />
              <div className="flex flex-col justify-start h-full mt-[12px] ">
                <div>
                  <h4 className="text-[black] text-[19px] font-[500]">
                    [shoe brand]
                  </h4>
                  <h4 className=" text-[19px] font-[500]">[shoe model]</h4>
                </div>
                <div>
                  <h4 className="text-[black] pt-[8px]  text-[19px] font-[500]">
                    [shoe price $]
                  </h4>
                </div>
              </div>
            </figure>
          </li>
          <li className="ml-[0] mr-[12px] my-[0] min-w-[auto] flex-[0_0_calc((100%_-_48px_-_12px*_2)_/_3)]">
            <figure className="flex flex-col justify-start h-[470px] w-[380px]">
              <img
                className="min-h-[380px] w-full h-full object-cover"
                alt="shoe-5"
                src="/images/shoe-11.jpg"
              />
              <div className="flex flex-col justify-start h-full mt-[12px] ">
                <div>
                  <h4 className="text-[black] text-[19px] font-[500]">
                    [shoe brand]
                  </h4>
                  <h4 className=" text-[19px] font-[500]">[shoe model]</h4>
                </div>
                <div>
                  <h4 className="text-[black] pt-[8px]  text-[19px] font-[500]">
                    [shoe price $]
                  </h4>
                </div>
              </div>
            </figure>
          </li>
          <li className="ml-[0] mr-[12px] my-[0] min-w-[auto] flex-[0_0_calc((100%_-_48px_-_12px*_2)_/_3)]">
            <figure className="flex flex-col justify-start h-[470px] w-[380px]">
              <img
                className="min-h-[380px] w-full h-full object-cover"
                alt="shoe-6"
                src="/images/shoe-12.jpg"
              />
              <div className="flex flex-col justify-start h-full mt-[12px] ">
                <div>
                  <h4 className="text-[black] text-[19px] font-[500]">
                    [shoe brand]
                  </h4>
                  <h4 className=" text-[19px] font-[500]">[shoe model]</h4>
                </div>
                <div>
                  <h4 className="text-[black] pt-[8px]  text-[19px] font-[500]">
                    [shoe price $]
                  </h4>
                </div>
              </div>
            </figure>
          </li>
          <li className="ml-[0] mr-[12px] my-[0] min-w-[auto] flex-[0_0_calc((100%_-_48px_-_12px*_2)_/_3)]">
            <figure className="flex flex-col justify-start h-[470px] w-[380px]">
              <img
                className="min-h-[380px] w-full h-full object-cover"
                alt="shoe-7"
                src="/images/shoe-13.jpg"
              />
              <div className="flex flex-col justify-start h-full mt-[12px] ">
                <div>
                  <h4 className="text-[black] text-[19px] font-[500]">
                    [shoe brand]
                  </h4>
                  <h4 className=" text-[19px] font-[500]">[shoe model]</h4>
                </div>
                <div>
                  <h4 className="text-[black] pt-[8px]  text-[19px] font-[500]">
                    [shoe price $]
                  </h4>
                </div>
              </div>
            </figure>
          </li>
          <li className="ml-[0] mr-[12px] my-[0] min-w-[auto] flex-[0_0_calc((100%_-_48px_-_12px*_2)_/_3)]">
            <figure className="flex flex-col justify-start h-[470px] w-[380px]">
              <img
                className="min-h-[380px] w-full h-full object-cover"
                alt="shoe-8"
                src="/images/shoe-14.jpg"
              />
              <div className="flex flex-col justify-start h-full mt-[12px] ">
                <div>
                  <h4 className="text-[black] text-[19px] font-[500]">
                    [shoe brand]
                  </h4>
                  <h4 className=" text-[19px] font-[500]">[shoe model]</h4>
                </div>
                <div>
                  <h4 className="text-[black] pt-[8px]  text-[19px] font-[500]">
                    [shoe price $]
                  </h4>
                </div>
              </div>
            </figure>
          </li>
          <li className="ml-[0] mr-[12px] my-[0] min-w-[auto] flex-[0_0_calc((100%_-_48px_-_12px*_2)_/_3)]">
            <figure className="flex flex-col justify-start h-[470px] w-[380px]">
              <img
                className="min-h-[380px] w-full h-full object-cover"
                alt="shoe-9"
                src="/images/shoe-15.jpg"
              />
              <div className="flex flex-col justify-start h-full mt-[12px] ">
                <div>
                  <h4 className="text-[black] text-[19px] font-[500]">
                    [shoe brand]
                  </h4>
                  <h4 className=" text-[19px] font-[500]">[shoe model]</h4>
                </div>
                <div>
                  <h4 className="text-[black] pt-[8px]  text-[19px] font-[500]">
                    [shoe price $]
                  </h4>
                </div>
              </div>
            </figure>
          </li>
        </ul>
      </section>
      <section className="mt-10">
        <div className="flex justify-center items-center">
          <h2>Top-3 Newest items</h2>
        </div>
        <div className="justify-center items-center flex">
          <ul className="flex pb-30  gap-[12px]">
            <li className="flex-[0_0_calc((100%_-_48px_-_12px*_2)_/_3)] ml-[0] mr-[12px] my-[0]">
              <figure className="relative min-h-[300px]">
                <div className="overflow-hidden h-[auto] w-full min-h-[300px] min-w-[380px] relative">
                  <img
                    alt="top3-1"
                    className=" object-cover max-h-[475px] w-full  min-w-[380px]"
                    src="/images/top3-1.jpg"
                  />
                </div>
                <div className="mt-5">
                  <h4 className=" font-[500] text-[black]">[content desc]</h4>
                </div>
              </figure>
            </li>
            <li className="flex-[0_0_calc((100%_-_48px_-_12px*_2)_/_3)] ml-[0] mr-[12px] my-[0]">
              <figure className="relative min-h-[300px]">
                <div className="object-cover overflow-hidden h-[auto] w-full min-h-[300px]  min-w-[380px] relative">
                  <img
                    alt="top3-2"
                    className=" object-cover max-h-[475px] w-full  min-w-[380px]"
                    src="/images/top3-2.jpg"
                  />
                </div>
                <div className="mt-5">
                  <h4 className=" font-[500] text-[black]">[content desc]</h4>
                </div>
              </figure>
            </li>
            <li className="flex-[0_0_calc((100%_-_48px_-_12px*_2)_/_3)] ml-[0] mr-[12px] my-[0]">
              <figure className="relative min-h-[300px]">
                <div className="overflow-hidden h-[auto] w-full min-h-[300px]  min-w-[380px] relative">
                  <img
                    alt="top3-3"
                    className=" object-cover max-h-[475px] w-full  min-w-[380px]"
                    src="/images/top3-3.jpg"
                  />
                </div>
                <div className="mt-5">
                  <h4 className=" font-[500] text-[black]">[content desc]</h4>
                </div>
              </figure>
            </li>
          </ul>
        </div>
      </section>
      <div className="w-full h-[600px] mt-20 relative justify-center items-center flex">
        <img
          alt="new-hero-1"
          className="w-full h-full object-cover"
          src="/images/new-hero-1.jpg"
        ></img>
        <div className="text-[30px] gap-5 flex justify-center items-center  flex-col absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] text-white text-center">
          <p>Easy returns</p>
          <p>Fast shipping</p>
          <p>Checkout out our partner program</p>
          <div className="mt-5 bg-[white] rounded-[20px] w-[80px] h-[50px] flex justify-center items-center">
            <a href="/shop">
              <svg
                width="24x"
                height="24px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 11V6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6V10.9673M10.4 21H13.6C15.8402 21 16.9603 21 17.816 20.564C18.5686 20.1805 19.1805 19.5686 19.564 18.816C20 17.9603 20 16.8402 20 14.6V12.2C20 11.0799 20 10.5198 19.782 10.092C19.5903 9.71569 19.2843 9.40973 18.908 9.21799C18.4802 9 17.9201 9 16.8 9H7.2C6.0799 9 5.51984 9 5.09202 9.21799C4.71569 9.40973 4.40973 9.71569 4.21799 10.092C4 10.5198 4 11.0799 4 12.2V14.6C4 16.8402 4 17.9603 4.43597 18.816C4.81947 19.5686 5.43139 20.1805 6.18404 20.564C7.03968 21 8.15979 21 10.4 21Z"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>
          <div className="text-[20px]">
            <p>Shop now</p>
          </div>
        </div>
      </div>
    </div>
  );
}
