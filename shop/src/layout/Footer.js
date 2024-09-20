export default function Footer({ children }) {
  return (
    <footer>
      <div className="h-[50px] bg-[white] pb-4 min-h-200 border-b border-gray-300 w-2/3 mx-auto my-4"></div>

      <div className="flex justify-center  mt-10">
        <div className="flex font-bold text-[#707072] whitespace-nowrap">
          <div className="flex gap-[12px] flex-col flex-[1_0_0] items-start">
            <a>
              <h4 className="text-[19px] pb-12 text-[#111111]">Resources</h4>
            </a>
            <a>
              <p>Feedback</p>
            </a>
            <a>
              <p>Contact</p>
            </a>
            <a>
              <p>News</p>
            </a>
          </div>
          <div className="flex gap-[12px] flex-col  flex-[1_0_0] items-start  pl-10">
            <a>
              <h4 className="text-[19px] pb-12 text-[#111111]">Help</h4>
            </a>
            <a>
              <p>Returns</p>
            </a>
            <a>
              <p>Shipping and delivery</p>
            </a>
            <a>
              <p>Reviews</p>
            </a>
          </div>
        </div>
      </div>
      <div className="h-[100px] bg-[white] pb-4 min-h-200 border-b border-gray-300 w-2/3 mx-auto my-4"></div>
      <div className="h-[100px] flex justify-center items-center">
        <p>© 2024 Shop, Inc. All rights reserved</p>
      </div>
    </footer>
  );
}
