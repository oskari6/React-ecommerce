import AnimatedNumber from "../components/AnimatedNumber.js";

export default function Categories() {
  return (
    <div>
      <div className="flex min-h-[100px] justify-center items-center">
        <h1>Categories</h1>
      </div>
      <div className="h-[50px] bg-[white] pb-4 min-h-200 border-b border-gray-300 w-2/3 mx-auto my-4"></div>
      <section className="flex text-center justify-center">
        <div className="flex justify-center text-center flex-col w-[80%] mt-10">
          <div className="grid grid-cols-3">
            <div className="flex gap-[10px] flex justify-center text-center flex-col">
              <a href="#" class="category">
                <h4>Category 1</h4>{" "}
              </a>
              <p>Item 1</p>
              <p>Item 2</p>
              <p>Item 3</p>
              <p>Item 4</p>
            </div>
            <div className="flex gap-[10px] flex justify-center text-center flex-col">
              <a href="#" class="category">
                <h4>Category 2</h4>
              </a>
              <p>Item 1</p>
              <p>Item 2</p>
              <p>Item 3</p>
              <p>Item 4</p>
            </div>
            <div className="flex gap-[10px] flex justify-center text-center flex-col">
              <a href="#" class="category">
                <h4>Category 3</h4>{" "}
              </a>

              <p>Item 1</p>
              <p>Item 2</p>
              <p>Item 3</p>
              <p>Item 4</p>
            </div>
          </div>
          <div className="grid grid-cols-3 pt-10">
            <div className="flex gap-[10px] flex justify-center text-center flex-col">
              <a href="#" class="category">
                {" "}
              </a>

              <h4>Category 4</h4>
              <p>Item 1</p>
              <p>Item 2</p>
              <p>Item 3</p>
              <p>Item 4</p>
            </div>
            <div className="flex gap-[10px] flex justify-center text-center flex-col">
              <a href="#" class="category">
                <h4>Category 5</h4>{" "}
              </a>

              <p>Item 1</p>
              <p>Item 2</p>
              <p>Item 3</p>
              <p>Item 4</p>
            </div>
            <div className="flex gap-[10px] flex justify-center text-center flex-col">
              <a href="#" class="category">
                <h4>Category 6</h4>{" "}
              </a>

              <p>Item 1</p>
              <p>Item 2</p>
              <p>Item 3</p>
              <p>Item 4</p>
            </div>
          </div>
          <div className="grid grid-cols-3 pt-10">
            <div className="flex gap-[10px] flex justify-center text-center flex-col">
              <a href="#" class="category">
                <h4>Category 7</h4>{" "}
              </a>

              <p>Item 1</p>
              <p>Item 2</p>
              <p>Item 3</p>
              <p>Item 4</p>
            </div>
            <div className="flex gap-[10px] flex justify-center text-center flex-col">
              <a href="#" class="category">
                <h4>Category 8</h4>{" "}
              </a>
              <p>Item 1</p>
              <p>Item 2</p>
              <p>Item 3</p>
              <p>Item 4</p>
            </div>
            <div className="flex gap-[10px] flex justify-center text-center flex-col">
              <a href="#" class="category">
                <h4>Category 9</h4>{" "}
              </a>

              <p>Item 1</p>
              <p>Item 2</p>
              <p>Item 3</p>
              <p>Item 4</p>
            </div>
          </div>
        </div>
      </section>
      <div className="h-[50px] bg-[white] pb-4 min-h-200 border-b border-gray-300 w-2/3 mx-auto mb-20 my-4"></div>
      <div className="relative min-h-[700px] w-full">
        <video
          playsInline
          id="home-hero"
          role="application"
          preload="auto"
          muted
          autoPlay
          loop
          src="categories-video.mp4"
          className="absolute top-0 left-0 w-full h-full object-cover"
        ></video>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50">
          <h2 className="mb-20">You need it we got it</h2>
          <div className="text-lg text-center space-y-8">
            <p>Lots of variety</p>
            <p>Exclusive items</p>
            <p>Special prices</p>
          </div>
        </div>
      </div>
      <AnimatedNumber />
    </div>
  );
}
