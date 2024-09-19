import { useEffect } from "react";

export default function HeroHome() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyB33WIPVng8Zx1LEVfxupa1m4YZjCBuBUg&callback=initMap";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    window.initMap = () => {
      const map = new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: 33.76440487088586, lng: -118.19443134286496 },
        zoom: 12,
      });

      new window.google.maps.Marker({
        position: { lat: 33.76440487088586, lng: -118.19443134286496 },
        map: map,
      });
    };
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div className="flex min-h-[200px]">
        <h1>[Shop name]</h1>
      </div>
      <div className="relative min-h-[700px] w-full">
        <video
          playsInline
          id="home-hero"
          role="application"
          preload="auto"
          muted
          autoPlay
          loop
          src="home-hero.mp4"
          className="absolute top-0 left-0 w-full h-full object-cover"
        ></video>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50">
          <h2 className="mb-20">Number 1. online shopping site</h2>
          <div className="text-lg text-center space-y-8">
            <p>Reliable</p>
            <p>Fast service</p>
            <p>Best selection of items</p>
          </div>
        </div>
      </div>
      <div id="home-grid-1" className="grid grid-cols-2 w-full h-full">
        <div className="h-full w-full">
          <img
            className="h-full w-full contain max-h-[750px]"
            lt="shoe-1"
            src="/images/shoe-1.jpg"
          />
        </div>
        <div className="flex justify-center items-center h-full w-full bg-white flex-col">
          <div>
            <h3 className="pb-10">[shoe-1]</h3>
            <div className="flex flex-col text-[20px] p-10 text-center gap-4">
              <p>Lightweight</p>
              <p>Durable</p>
              <p>Iconic</p>
            </div>
            <h3 className="text-center">Nike.</h3>
            <div className="flex justify-center items-center pt-5">
              <svg
                width="100px"
                height="100px"
                viewBox="0 0 192.756 192.756"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill-rule="evenodd" clip-rule="evenodd">
                  <path fill="#ffffff" d="M0 0h192.756v192.756H0V0z" />

                  <path d="M42.741 71.477c-9.881 11.604-19.355 25.994-19.45 36.75-.037 4.047 1.255 7.58 4.354 10.256 4.46 3.854 9.374 5.213 14.264 5.221 7.146.01 14.242-2.873 19.798-5.096 9.357-3.742 112.79-48.659 112.79-48.659.998-.5.811-1.123-.438-.812-.504.126-112.603 30.505-112.603 30.505a24.771 24.771 0 0 1-6.524.934c-8.615.051-16.281-4.731-16.219-14.808.024-3.943 1.231-8.698 4.028-14.291z" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div id="home-grid-2" className="grid grid-cols-2 w-full h-full">
        <div className="flex justify-center items-center h-full w-full bg-white flex-col">
          <div>
            <h3 className="pb-10">[shoe-2]</h3>
            <div className="flex flex-col text-[20px] p-10 text-center gap-4">
              <p>Fresh</p>
              <p>Elastic</p>
              <p>Unique</p>
            </div>
            <h3 className="text-center">Nike.</h3>
            <div className="flex justify-center items-center pt-5">
              <svg
                width="100px"
                height="100px"
                viewBox="0 0 192.756 192.756"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill-rule="evenodd" clip-rule="evenodd">
                  <path fill="#ffffff" d="M0 0h192.756v192.756H0V0z" />

                  <path d="M42.741 71.477c-9.881 11.604-19.355 25.994-19.45 36.75-.037 4.047 1.255 7.58 4.354 10.256 4.46 3.854 9.374 5.213 14.264 5.221 7.146.01 14.242-2.873 19.798-5.096 9.357-3.742 112.79-48.659 112.79-48.659.998-.5.811-1.123-.438-.812-.504.126-112.603 30.505-112.603 30.505a24.771 24.771 0 0 1-6.524.934c-8.615.051-16.281-4.731-16.219-14.808.024-3.943 1.231-8.698 4.028-14.291z" />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="h-full w-full">
          <img
            className="h-full w-full contain max-h-[750px]"
            alt="shoe-2"
            src="/images/shoe-2.jpg"
          />
        </div>
      </div>
      <div id="home-grid-3" className="grid grid-cols-2  w-full h-full">
        <div className="h-full w-full">
          <img
            className="h-full w-full contain max-h-[750px]"
            alt="shoe-3"
            src="/images/shoe-3.jpg"
          />
        </div>
        <div className="flex justify-center items-center h-full w-full bg-white flex-col">
          <div>
            <h3 className="pb-10">[shoe-2]</h3>
            <div className="flex flex-col text-[20px] p-10 text-center gap-4">
              <p>Firm</p>
              <p>Light</p>
              <p>Stylish</p>
            </div>
            <h3 className="text-center">Nike.</h3>
            <div className="flex justify-center items-center pt-5">
              <svg
                width="100px"
                height="100px"
                viewBox="0 0 192.756 192.756"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill-rule="evenodd" clip-rule="evenodd">
                  <path fill="#ffffff" d="M0 0h192.756v192.756H0V0z" />

                  <path d="M42.741 71.477c-9.881 11.604-19.355 25.994-19.45 36.75-.037 4.047 1.255 7.58 4.354 10.256 4.46 3.854 9.374 5.213 14.264 5.221 7.146.01 14.242-2.873 19.798-5.096 9.357-3.742 112.79-48.659 112.79-48.659.998-.5.811-1.123-.438-.812-.504.126-112.603 30.505-112.603 30.505a24.771 24.771 0 0 1-6.524.934c-8.615.051-16.281-4.731-16.219-14.808.024-3.943 1.231-8.698 4.028-14.291z" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[100px] bg-[white] pb-4 min-h-200 border-b border-gray-300 w-2/3 mx-auto my-4"></div>
      <div className="h-[300px] flex justify-center items-center pt-10">
        <h2>Based in Long Beach, Califronia</h2>
      </div>
      <div className="w-full h-full justify-center flex items-center">
        <div id="map" className="w-[750px] h-[500px]"></div>
      </div>
      <div className="h-[100px] bg-[white] pb-4 min-h-200 border-b border-gray-300 w-2/3 mx-auto my-4"></div>
      <div className="w-full h-full flex flex-col items-center justify-center pt-10">
        <h3>Business location</h3>
        <div className="p-5 text-center flex gap-2 flex-col">
          <div className="flex items-center justify-center">
            <p className="font-bold">address:&nbsp;</p>{" "}
            <p>71 Aquarium Way, Long Beach, CA, USA</p>
          </div>
          <div className="flex  items-center justify-center">
            <p className="font-bold">business hours:&nbsp;</p>
            <p>10am - 8pm</p>
          </div>
          <div className="flex  items-center justify-center">
            <p className="font-bold">contact phone:&nbsp;</p>
            <p>+123456789</p>
          </div>
          <div className="flex items-center justify-center">
            <p className="font-bold">contact email:&nbsp;</p>
            <p>shop@email.com</p>
          </div>
        </div>
      </div>
      <div className="h-[100px] bg-[white] pb-4 min-h-200 border-b border-gray-300 w-2/3 mx-auto my-4"></div>
      <div className="pt-10 flex justify-center items-center flex-col">
        <h3 className="pb-10">About us</h3>
        <p className="w-[500px] text-center leading-[1.8]">
          California Shoe Co. is a leading footwear company based in California,
          specializing in crafting stylish, high-quality shoes for men, women,
          and children. With a strong focus on comfort and durability, they use
          premium materials sourced from around the world to ensure every
          product is built to last. Their extensive collection includes
          everything from casual sneakers to elegant formal shoes, catering to
          diverse customer needs. Committed to sustainability, the company
          incorporates eco-friendly practices into their manufacturing process.
          California Shoe Co. prides itself on delivering exceptional customer
          service and setting trends in the footwear industry.
        </p>
      </div>
      <div className="h-[100px] bg-[white] pb-4 min-h-200 border-b border-gray-300 w-2/3 mx-auto my-4"></div>
    </>
  );
}
