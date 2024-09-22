export default function Cart(props) {
  return (
    <div>
      <div className="relative min-h-[400px] w-full">
        <video
          playsInline
          id="home-hero"
          role="application"
          preload="auto"
          muted
          autoPlay
          loop
          src="cart-video.mp4"
          className="absolute top-0 left-0 w-full h-full object-cover"
        ></video>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50">
          <h2 className="font-[500] mb-20">All done? Here are your items</h2>
          <div>
            <svg
              width="70px"
              height="70px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2 1C1.44772 1 1 1.44772 1 2C1 2.55228 1.44772 3 2 3H3.21922L6.78345 17.2569C5.73276 17.7236 5 18.7762 5 20C5 21.6569 6.34315 23 8 23C9.65685 23 11 21.6569 11 20C11 19.6494 10.9398 19.3128 10.8293 19H15.1707C15.0602 19.3128 15 19.6494 15 20C15 21.6569 16.3431 23 18 23C19.6569 23 21 21.6569 21 20C21 18.3431 19.6569 17 18 17H8.78078L8.28078 15H18C20.0642 15 21.3019 13.6959 21.9887 12.2559C22.6599 10.8487 22.8935 9.16692 22.975 7.94368C23.0884 6.24014 21.6803 5 20.1211 5H5.78078L5.15951 2.51493C4.93692 1.62459 4.13696 1 3.21922 1H2ZM18 13H7.78078L6.28078 7H20.1211C20.6742 7 21.0063 7.40675 20.9794 7.81078C20.9034 8.9522 20.6906 10.3318 20.1836 11.3949C19.6922 12.4251 19.0201 13 18 13ZM18 20.9938C17.4511 20.9938 17.0062 20.5489 17.0062 20C17.0062 19.4511 17.4511 19.0062 18 19.0062C18.5489 19.0062 18.9938 19.4511 18.9938 20C18.9938 20.5489 18.5489 20.9938 18 20.9938ZM7.00617 20C7.00617 20.5489 7.45112 20.9938 8 20.9938C8.54888 20.9938 8.99383 20.5489 8.99383 20C8.99383 19.4511 8.54888 19.0062 8 19.0062C7.45112 19.0062 7.00617 19.4511 7.00617 20Z"
                fill="#FFFFFF"
              />
            </svg>
          </div>
        </div>
      </div>
      <main>
        <div>
          <h2>Bag</h2>
          {/*props.items > 0 ? <div></div> : <h4>There are no items in your cart</h4>*/}
        </div>
        <div className="flex flex-row">
          <div className="max-w-[66%] [flex-basis:66.6667%]"></div>
          <div className="max-w-[33%]">
            <div>
              <h4>Summary</h4>
            </div>
            <div>
              <div>
                <p>Promo code</p>
                <button></button>
              </div>
              <div>
                <p>Subtotal</p>
                <button id="info"></button>
              </div>
              <div>
                <p>Total</p>
              </div>
            </div>
            <div className="flex flex-col">
              <button>Checkout</button>
              <button>
                <img className="h-auto w-[50px]" src="images/paypal.png" />
              </button>
            </div>
          </div>
        </div>
      </main>

      <section className="mt-10 bg-[#F5F5F5]">
        <div>
          <h3>You Might Also Like</h3>
        </div>
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
    </div>
  );
}
