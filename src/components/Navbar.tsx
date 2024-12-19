export default function Navbar() {
  return (
    <div className="h-[80px] bg-white flex flex-row justify-center items-center">
      <div className="max-w-[1340px] w-full flex flex-row items-center justify-between">
        <div>
          <nav>
            <ul className="flex flex-row gap-2.5">
              <li className="text-navbarTextColor font-medium bg-[rgba(67,97,238,0.3)] h-[37px] px-4 rounded-[30px] flex items-center">
                <button>Home</button>
              </li>
              <li className="text-base text-navbarTextColor h-[37px] px-4 rounded-[30px] flex items-center">
                <button>About</button>
              </li>
              <li className="text-base text-navbarTextColor h-[37px] px-4 rounded-[30px] flex items-center">
                <button>Listings</button>
              </li>
              <li className="text-base text-navbarTextColor h-[37px] px-4 rounded-[30px] flex items-center">
                <button>Services</button>
              </li>
              <li className="text-base text-navbarTextColor h-[37px] px-4 rounded-[30px] flex items-center">
                <button>Blogs</button>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <div className=" w-[107px] h-[50px] flex ">
            <div className="w-[50px] h-[50px] rounded-full bg-[#3A0CA3] flex">
              <svg
                className="w-6 h-6 m-auto"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.715 9.16499L12.465 0.164989C12.332 0.0584866 12.1667 0.000457764 11.9963 0.000457764C11.8258 0.000457764 11.6605 0.0584866 11.5275 0.164989L0.2775 9.16499C0.156135 9.26236 0.0680565 9.39506 0.025468 9.54471C-0.0171205 9.69436 -0.0121105 9.85356 0.0398037 10.0002C0.091718 10.1469 0.187966 10.2738 0.315214 10.3634C0.442461 10.4529 0.594407 10.5006 0.75 10.5H2.25V23.25C2.25 23.4489 2.32902 23.6397 2.46967 23.7803C2.61032 23.921 2.80109 24 3 24H18V22.5H15V15.75C15 15.5511 14.921 15.3603 14.7803 15.2197C14.6397 15.079 14.4489 15 14.25 15H9.75C9.55109 15 9.36032 15.079 9.21967 15.2197C9.07902 15.3603 9 15.5511 9 15.75V22.5H3.75V10.5H16.5V8.99999H2.8875L12 1.70999L21.1125 8.99999H21C20.8011 8.99999 20.6103 9.07901 20.4697 9.21966C20.329 9.36031 20.25 9.55108 20.25 9.74999V14.25H21.75V10.5H23.25C23.405 10.4991 23.5558 10.4502 23.6819 10.3601C23.8079 10.27 23.903 10.143 23.9539 9.9967C24.0049 9.85037 24.0093 9.69184 23.9665 9.54291C23.9237 9.39398 23.8359 9.26195 23.715 9.16499ZM10.5 16.5H13.5V22.5H10.5V16.5Z"
                  fill="white"
                />
                <path
                  d="M18.75 19.9425L17.7825 18.975L16.725 20.0325L18.225 21.5325C18.3655 21.6722 18.5556 21.7506 18.7537 21.7506C18.9519 21.7506 19.142 21.6722 19.2825 21.5325L23.7825 17.0325L22.725 15.975L18.75 19.9425Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="text-[#1E1E1E] font-semibold w-[49px] h-[14px] text-xl items-center">
              Logo
            </div>
          </div>
        </div>
        <div className="flex">
          <div>
            <h5>
              <button className="text-[#2B2B2B] w-[117px] h-[11px] font-medium text-base mr-2">
                Login/Register
              </button>
            </h5>
          </div>
          <div>
            <button className="text-navbarTextColor">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}
