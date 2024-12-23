import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";

export default function Hero() {
  return (
    <div className="relative px-[30px] w-full max-w-[1180px] mx-auto max-lg:w-full">
      <div className=" w-full lg:flex flex-row justify-between items-start">
        <div id="home" className="max-lg:items-center max-lg:justify-center">
          <div className="mt-10 lg:mt-[89px] ">
            <div className="text-color1 font-medium text-19.4 text-left leading-29.1 tracking-[0.15em] max-lg:w-full max-lg:text-base ">
              REAL ESTATE
            </div>
          </div>
          <div className="mt-2 lg:max-w-[580px] lg:mt-[30px]">
            <h1 className="text-textColor1 font-semibold text-39.8 leading-[47px] lg:leading-[65px] lg:text-[57.3px]">
              Find a perfect home you love..!
            </h1>
          </div>
          <div className="max-w-[580px] mt-4 leading-26  ">
            <p className="text-textColor3">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley
            </p>
          </div>
          <div className="mt-8 lg:max-w-[540px]">
            <div className="shadow-imageShadow rounded-[20px]">
              <div className="relative">
                <div className="bg-white swiper-prev z-10 shadow-imageShadow w-10 flex items-center justify-center h-10 rounded-full inset-y-1/2 -mt-5 cursor-pointer left-1 lg:-left-5 absolute">
                  <svg
                    className="w-[6px] h- text-textColor4"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 1L2.41421 5.58579C1.63317 6.36683 1.63316 7.63316 2.41421 8.41421L7 13"
                      stroke="#AAAAAA"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <Swiper
                  className="rounded-[20px] lg:h-[340px]"
                  init={false}
                  navigation={{
                    nextEl: ".swiper-next",
                    prevEl: ".swiper-prev",
                  }}
                  pagination={{
                    clickable: true,
                    el: ".pagination1",
                    bulletActiveClass: "swiper1-paginationActive",
                    bulletClass: "swiper1-pagination ",
                    renderBullet: (_index, className) => {
                      return (
                        '<span class="!w-full !rounded-[4px] !mx-5 ' +
                        className +
                        '"></span>'
                      );
                    },
                  }}
                  loop={true}
                  modules={[Navigation, Pagination]}
                  spaceBetween={50}
                  slidesPerView={1}
                >
                  <SwiperSlide className="">
                    <img
                      className="rounded-[20px]"
                      src="src\assets\images\hotel1.jfif"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      className="rounded-[20px]"
                      src="src\assets\images\hotel2.jpeg"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      className="rounded-[20px]"
                      src="src\assets\images\hotel1.jfif"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      className="rounded-[20px]"
                      src="src\assets\images\hotel2.jpeg"
                    />
                  </SwiperSlide>
                </Swiper>

                <div className="bg-white swiper-next shadow-imageShadow z-10 rotate-180 w-10 flex items-center justify-center h-10 rounded-full inset-y-1/2 -mt-5 cursor-pointer right-1 lg:-right-5 absolute">
                  <svg
                    className="w-[6px] h-3 text-textColor4"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 1L2.41421 5.58579C1.63317 6.36683 1.63316 7.63316 2.41421 8.41421L7 13"
                      stroke="#AAAAAA"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div className="bg-ellipse-gradient -top-[40px] -right-[30px] rounded-full w-[60px] h-[60px] max-lg:-top-6 max-lg:right-8 max-lg:w-8 max-lg:h-8 absolute rotate-[30deg]" />
              </div>
            </div>
            <div className="pagination1 mt-[11px] w-[515px] flex justify-between" />
          </div>
        </div>
        <div className=" flex flex-col w-full lg:max-w-[420px] mt-10 lg:mt-[174px]  rounded-[30px]">
          <div className="px-10 shadow-formShadow h-[80px] flex rounded-t-[20px] border-b-[1px] border-textColor4 bg-white ">
            <button className="flex-1 border-b-[3px] border-primaryColour">
              <h5 className="font-medium text-center text-primaryColour">
                For Sale
              </h5>
            </button>
            <button className="flex-1">
              <h5 className="font-medium text-center text-textColor3">
                For Rent
              </h5>
            </button>
          </div>
          <div className="shadow-formShadow p-10 lg:flex flex-col w-full lg:max-w-[420px] rounded-b-[30px] bg-white">
            <form className="">
              <input
                className="w-full h-[59px] text-formText bg-formBackground focus:outline-none rounded-[20px] placeholder:text-formText text-[16px] leading-[26px] pl-5"
                placeholder="New York, San Francisco, etc"
              />
              <div className="flex relative mt-[30px] w-full">
                <select
                  defaultValue={""}
                  className="appearance-none pl-5  h-[59px] text-formText w-full bg-formBackground rounded-[20px] focus:outline-none"
                >
                  <option className="" value="" disabled>
                    Select Property Type
                  </option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="land">Land</option>
                </select>
                <svg
                  className="absolute top-[25px] right-5 pointer-events-none"
                  width="14"
                  height="7"
                  viewBox="0 0 14 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.58521 6.57766C7.23581 6.82982 6.76419 6.82982 6.41479 6.57767L0.848983 2.56089C0.0621447 1.99304 0.46384 0.750001 1.43419 0.750001L12.5658 0.75C13.5362 0.75 13.9379 1.99303 13.151 2.56088L7.58521 6.57766Z"
                    fill="#AAAAAA"
                  />
                </svg>
              </div>
              <div className="flex relative mt-[30px] w-full">
                <select
                  defaultValue={""}
                  className="appearance-none pl-5  h-[59px] text-formText w-full bg-formBackground rounded-[20px] focus:outline-none"
                >
                  <option className="" value="" disabled>
                    Select Rooms
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="more">3+</option>
                </select>
                <svg
                  className="absolute top-[25px] right-5 pointer-events-none"
                  width="14"
                  height="7"
                  viewBox="0 0 14 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.58521 6.57766C7.23581 6.82982 6.76419 6.82982 6.41479 6.57767L0.848983 2.56089C0.0621447 1.99304 0.46384 0.750001 1.43419 0.750001L12.5658 0.75C13.5362 0.75 13.9379 1.99303 13.151 2.56088L7.58521 6.57766Z"
                    fill="#AAAAAA"
                  />
                </svg>
              </div>
              <div className="gap-[10px] items-center mt-5 flex text-primaryColour cursor-pointer">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.0256 14C11.7313 14 11.4872 13.7786 11.4872 13.5116V6.34883C11.4872 6.08185 11.7313 5.86046 12.0256 5.86046C12.32 5.86046 12.5641 6.08185 12.5641 6.34883V13.5116C12.5641 13.7786 12.32 14 12.0256 14Z"
                    fill="#3A0CA3"
                  />
                  <path
                    d="M12.0256 4.23256C11.7313 4.23256 11.4872 4.01116 11.4872 3.74419V0.488372C11.4872 0.221395 11.7313 0 12.0256 0C12.32 0 12.5641 0.221395 12.5641 0.488372V3.74419C12.5641 4.01116 12.32 4.23256 12.0256 4.23256Z"
                    fill="#3A0CA3"
                  />
                  <path
                    d="M7.00001 14C6.70565 14 6.46155 13.7786 6.46155 13.5116V10.2558C6.46155 9.98882 6.70565 9.76743 7.00001 9.76743C7.29437 9.76743 7.53847 9.98882 7.53847 10.2558V13.5116C7.53847 13.7786 7.29437 14 7.00001 14Z"
                    fill="#3A0CA3"
                  />
                  <path
                    d="M7.00001 8.13953C6.70565 8.13953 6.46155 7.91814 6.46155 7.65116V0.488372C6.46155 0.221395 6.70565 0 7.00001 0C7.29437 0 7.53847 0.221395 7.53847 0.488372V7.65116C7.53847 7.91814 7.29437 8.13953 7.00001 8.13953Z"
                    fill="#3A0CA3"
                  />
                  <path
                    d="M1.97434 14C1.67999 14 1.43588 13.7786 1.43588 13.5116V6.34883C1.43588 6.08185 1.67999 5.86046 1.97434 5.86046C2.2687 5.86046 2.51281 6.08185 2.51281 6.34883V13.5116C2.51281 13.7786 2.2687 14 1.97434 14Z"
                    fill="#3A0CA3"
                  />
                  <path
                    d="M1.97434 4.23256C1.67999 4.23256 1.43588 4.01116 1.43588 3.74419V0.488372C1.43588 0.221395 1.67999 0 1.97434 0C2.2687 0 2.51281 0.221395 2.51281 0.488372V3.74419C2.51281 4.01116 2.2687 4.23256 1.97434 4.23256Z"
                    fill="#3A0CA3"
                  />
                  <path
                    d="M3.41026 6.8372H0.538462C0.244103 6.8372 0 6.61581 0 6.34883C0 6.08185 0.244103 5.86046 0.538462 5.86046H3.41026C3.70462 5.86046 3.94872 6.08185 3.94872 6.34883C3.94872 6.61581 3.70462 6.8372 3.41026 6.8372Z"
                    fill="#3A0CA3"
                  />
                  <path
                    d="M13.4615 6.8372H10.5897C10.2954 6.8372 10.0513 6.61581 10.0513 6.34883C10.0513 6.08185 10.2954 5.86046 10.5897 5.86046H13.4615C13.7559 5.86046 14 6.08185 14 6.34883C14 6.61581 13.7559 6.8372 13.4615 6.8372Z"
                    fill="#3A0CA3"
                  />
                  <path
                    d="M8.43589 8.13952H5.5641C5.26974 8.13952 5.02563 7.91813 5.02563 7.65115C5.02563 7.38418 5.26974 7.16278 5.5641 7.16278H8.43589C8.73025 7.16278 8.97435 7.38418 8.97435 7.65115C8.97435 7.91813 8.73025 8.13952 8.43589 8.13952Z"
                    fill="#3A0CA3"
                  />
                </svg>
                <p className="text-[13.3px] leading-[22px]">Advance Search</p>
              </div>
              <button
                type="button"
                className="h-[59px] mt-8 lg:mt-12 gap-[10px] w-full bg-primaryColour items-center justify-center rounded-[50px] flex"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.53582 19.0716C4.27949 19.0716 0 14.7921 0 9.53582C0 4.27949 4.27949 0 9.53582 0C14.7921 0 19.0716 4.27949 19.0716 9.53582C19.0716 14.7921 14.7921 19.0716 9.53582 19.0716ZM9.53582 1.39549C5.04235 1.39549 1.39549 5.05166 1.39549 9.53582C1.39549 14.02 5.04235 17.6761 9.53582 17.6761C14.0293 17.6761 17.6761 14.02 17.6761 9.53582C17.6761 5.05166 14.0293 1.39549 9.53582 1.39549Z"
                    fill="white"
                  />
                  <path
                    d="M19.3046 20.0019C19.1278 20.0019 18.951 19.9367 18.8115 19.7972L16.9508 17.9365C16.6811 17.6667 16.6811 17.2202 16.9508 16.9504C17.2206 16.6806 17.6672 16.6806 17.937 16.9504L19.7976 18.811C20.0674 19.0808 20.0674 19.5274 19.7976 19.7972C19.6581 19.9367 19.4813 20.0019 19.3046 20.0019Z"
                    fill="white"
                  />
                </svg>

                <h5 className="font-medium ">Search</h5>
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-center mt-[30px] items-center gap-[30px]">
        <div className="w-full lg:w-[360px] flex justify-center  shadow-formShadow h-[100px] rounded-[50px] bg-white">
          <div className="w-[287px] flex items-center gap-[10px] justify-center">
            <div className="w-[155px] flex space-x-[-10px]">
              <div className="w-9 h-9">
                <img
                  className="rounded-full border-[2px] border-white w-9 h-9  object-cover"
                  src="src\assets\images\customer1.jpeg"
                />
              </div>
              <div className="w-9 h-9">
                <img
                  className="rounded-full border-[2px] border-white w-9 h-9 object-cover"
                  src="src\assets\images\customer2.jpeg"
                />
              </div>
              <div className="w-9 h-9">
                <img
                  className="rounded-full border-[2px] border-white w-9 h-9 object-cover"
                  src="src\assets\images\customer3.jpeg"
                />
              </div>
              <div className="w-9 h-9">
                <img
                  className="rounded-full border-[2px] border-white w-9 h-9 object-cover"
                  src="src\assets\images\customer4.jpeg"
                />
              </div>
              <div className="w-9 h-9">
                <img
                  className="rounded-full border-[2px] border-white w-9 h-9 object-cover"
                  src="src\assets\images\customer5.jpeg"
                />
              </div>
              <div className="w-9 h-9 relative flex items-center justify-center">
                <div className="absolute inset-0 bg-[#000000B2] border-[2px]  border-white rounded-full" />
                <img
                  className="rounded-full border-[2px]  border-white w-9 h-9 object-cover"
                  src="src\assets\images\customer5.jpeg"
                />

                <h4 className="text-white absolute text-center font-medium text-19.4 leading-29.1">
                  +
                </h4>
              </div>
            </div>
            <h4 className="text-textColor2 font-medium text-19.4 w-[122px] leading-29.1  ">
              72k+ Happy Customers
            </h4>
          </div>
        </div>
        <div className="w-full lg:w-[320px] flex shadow-formShadow h-[100px] justify-center rounded-[50px] bg-white">
          <div className="w-[274px] lg:w-[244px] max-lg:text-base flex items-center justify-center gap-5 lg:gap-[10px]">
            <div className="w-[60px] h-[60px]">
              <img
                className="rounded-full border-[2px] border-white h-[60px] w-[60px] object-cover"
                src="src\assets\images\homeIcon.jpeg"
              />
            </div>
            <div className="w-[174px] ">
              <h4 className="text-textColor2 font-medium text-19.4 leading-29.1">
                200+ New Listings Everyday!
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-ellipse-gradient top-[835px] -left-[100px] rounded-full w-[100px] h-[100px] absolute opacity-50 rotate-[-30deg]" />

      <div id="about" className="lg:flex flex-row">
        <div className="flex flex-col flex-1">
          <div className="text-color1 mt-[79px] font-medium text-19.4 text-left leading-29.1 tracking-[0.15em] max-lg:text-base ">
            WHO ARE WE
          </div>
          <h2 className="text-textColor2 mt-2 lg:mt-5 w-full lg:max-w-[500px] font-semibold text-39.8 text-left leading-47 max-lg:text-27.6 max-lg:leading-41.4">
            Assisting individuals in locating the appropriate real estate.
          </h2>
          <p className="text-textColor3 mt-5 leading-26 w-full lg:max-w-[500px]">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it
          </p>
          <div className="flex mt-10 max-lg:hidden">
            <div className="bg-white shadow-section1Shadow ml-[1px] flex justify-around items-center rounded-[30px] w-[400px] h-[131px]">
              <div>
                <svg
                  className="w-10 h-10 text-color1"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30.531 38.8724H19.1277C18.3736 38.8724 17.7483 38.2471 17.7483 37.493C17.7483 36.7389 18.3736 36.1136 19.1277 36.1136H30.531C32.499 36.1136 34.4301 34.4765 34.7612 32.5269L37.2074 17.8867C37.4281 16.5625 36.6926 14.6679 35.6626 13.8402L22.9165 3.651C21.4451 2.47389 18.999 2.47387 17.546 3.63259L4.8001 13.8402C3.75174 14.6863 3.03444 16.5625 3.25514 17.8867L3.77013 20.9949C3.89888 21.7489 3.38391 22.4662 2.62982 22.5766C1.87574 22.7237 1.17685 22.1904 1.0481 21.4363L0.533113 18.3465C0.146873 16.0659 1.25043 13.1415 3.07128 11.6885L15.8172 1.48061C18.2817 -0.505767 22.1624 -0.487356 24.6454 1.49902L37.3913 11.6885C39.1938 13.1415 40.2973 16.0659 39.9295 18.3465L37.4833 32.9867C36.9315 36.2421 33.8232 38.8724 30.531 38.8724Z"
                    fill="#4361EE"
                  />
                  <path
                    d="M7.35738 39.2221C6.60329 39.2221 5.99634 38.6151 5.97795 37.8794C5.92277 35.3964 4.28587 33.7595 1.80291 33.7043C1.04882 33.686 0.441854 33.0606 0.460246 32.2881C0.478638 31.5341 1.08559 30.9455 1.83967 30.9455H1.87644C5.8308 31.0375 8.66324 33.8515 8.7368 37.8058C8.7552 38.5599 8.14823 39.2037 7.39415 39.2221C7.37575 39.2221 7.37577 39.2221 7.35738 39.2221Z"
                    fill="#4361EE"
                  />
                  <path
                    d="M12.8751 39.222C12.121 39.222 11.4956 38.6151 11.4956 37.861C11.4772 36.6471 11.2749 35.4884 10.9071 34.4032C9.96906 31.7179 7.9643 29.7314 5.27901 28.775C4.19386 28.3887 3.03515 28.1866 1.82125 28.1866C1.06716 28.1866 0.441842 27.5612 0.460235 26.7888C0.460235 26.0347 1.08557 25.4277 1.83966 25.4277H1.85805C3.38462 25.4461 4.8376 25.7036 6.19863 26.1818C9.67479 27.4141 12.2681 30.0074 13.5004 33.4836C13.9786 34.8446 14.2361 36.316 14.2545 37.8242C14.2545 38.5967 13.6476 39.222 12.8751 39.222Z"
                    fill="#4361EE"
                  />
                  <path
                    d="M1.83924 39.6819C0.809264 39.6819 0 38.8542 0 37.8427C0 36.8311 0.827656 36.0034 1.83924 36.0034C2.85082 36.0034 3.67847 36.8311 3.67847 37.8427C3.67847 38.8542 2.86921 39.6819 1.83924 39.6819Z"
                    fill="#4361EE"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-color1 font-medium text-19.4 leading-29.1">
                  Lorem ipsum has been the
                </h4>
                <p className="text-textColor3 max-w-[274px] leading-26">
                  when an unknown printer took a galley
                </p>
              </div>
            </div>
          </div>
          <div className="flex mt-10 max-lg:hidden">
            <div className="bg-white shadow-section1Shadow ml-[1px] flex justify-around items-center rounded-[30px] w-[400px] h-[131px]">
              <div>
                <svg
                  className="w-10 h-11"
                  viewBox="0 0 44 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M42 16.4855V31.5433C42 34.0089 40.6791 36.2984 38.5437 37.5532L25.4672 45.1041C23.3318 46.3369 20.6901 46.3369 18.5327 45.1041L5.45625 37.5532C3.32086 36.3204 2 34.0309 2 31.5433V16.4855C2 14.0199 3.32086 11.7303 5.45625 10.4755L18.5327 2.9246C20.6681 1.6918 23.3098 1.6918 25.4672 2.9246L38.5437 10.4755C40.6791 11.7303 42 13.9979 42 16.4855Z"
                    stroke="#4361EE"
                    strokeWidth="3"
                  />
                  <path
                    d="M22.011 21.8132C24.844 21.8132 27.1403 19.5165 27.1403 16.6837C27.1403 13.8508 24.844 11.5544 22.011 11.5544C19.1782 11.5544 16.8817 13.8508 16.8817 16.6837C16.8817 19.5165 19.1782 21.8132 22.011 21.8132Z"
                    stroke="#4361EE"
                    strokeWidth="3"
                  />
                  <path
                    d="M30.8167 34.2734C30.8167 30.3108 26.8761 27.0967 22.0109 27.0967C17.1458 27.0967 13.2052 30.3108 13.2052 34.2734"
                    stroke="#4361EE"
                    strokeWidth="3"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-color1 font-medium text-19.4 leading-29.1">
                  Lorem ipsum has been the
                </h4>
                <p className="text-textColor3 max-w-[274px] leading-26">
                  when an unknown printer took a galley
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-1 max-lg:mt-10 max-h-[600px]">
          <div className="flex-1">
            <div className="flex lg:ml-5 bg-[#D9D9D9] shadow-hotelShadow rounded-[30px] h-full max-h-[500px] mt-[47px] lg:mt-[190px]">
              <img
                className="rounded-[30px] object-cover"
                src="src\assets\images\hotel2.jpeg"
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col">
            <div className="bg-[#D9D9D9] flex flex-1 shadow-hotelShadow rounded-[30px] ml-5 lg:mt-[143px]">
              <img
                className="rounded-[30px] object-cover"
                src="src\assets\images\hotel3.jpeg"
              />
            </div>
            <div className="bg-[#D9D9D9] flex flex-1 shadow-hotelShadow rounded-[30px] ml-5 mt-5 relative">
              <img
                className="rounded-[30px] flex-1 object-cover"
                src="src\assets\images\hotel4.jpeg"
              />
              <div className="bg-ellipse-gradient max-lg:-bottom-5 max-lg:left-[53px] -bottom-[40px] left-[70px] rounded-full w-[60px] h-[60px]  max-lg:w-10 max-lg:h-10 absolute opacity-50 rotate-[30deg]" />
            </div>
          </div>
        </div>
        <div className="lg:hidden bg-white h-[117px] rounded-[30px] w-full shadow-section1Shadow flex justify-center gap-[30px] mt-[77px]">
          <div className="flex items-center justify-between w-[275px] gap-5">
            <div>
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.9513 33.0415H16.2585C15.6175 33.0415 15.086 32.51 15.086 31.869C15.086 31.2281 15.6175 30.6965 16.2585 30.6965H25.9513C27.6241 30.6965 29.2656 29.305 29.547 27.6478L31.6262 15.2037C31.8138 14.0781 31.1887 12.4677 30.3132 11.7642L19.479 3.10335C18.2283 2.1028 16.1491 2.10279 14.914 3.0877L4.08004 11.7642C3.18893 12.4833 2.57923 14.0781 2.76683 15.2037L3.20457 17.8456C3.314 18.4866 2.87628 19.0963 2.2353 19.1901C1.59433 19.3152 1.00027 18.8618 0.890838 18.2208L0.4531 15.5946C0.124796 13.656 1.06282 11.1702 2.61054 9.93519L13.4445 1.25852C15.5394 -0.429902 18.838 -0.414253 20.9486 1.27417L31.7826 9.93519C33.3147 11.1702 34.2527 13.656 33.94 15.5946L31.8607 28.0387C31.3917 30.8058 28.7497 33.0415 25.9513 33.0415Z"
                  fill="#4361EE"
                />
                <path
                  d="M6.25378 33.3388C5.6128 33.3388 5.0969 32.8229 5.08127 32.1975C5.03437 30.087 3.643 28.6956 1.53248 28.6487C0.891503 28.6331 0.375582 28.1016 0.391215 27.445C0.406849 26.804 0.922755 26.3037 1.56373 26.3037H1.59498C4.95618 26.3819 7.36376 28.7738 7.42629 32.135C7.44192 32.776 6.926 33.3232 6.28503 33.3388C6.2694 33.3388 6.26941 33.3388 6.25378 33.3388Z"
                  fill="#4361EE"
                />
                <path
                  d="M10.9438 33.3387C10.3028 33.3387 9.77131 32.8227 9.77131 32.1818C9.75566 31.15 9.58369 30.165 9.27102 29.2427C8.47371 26.9602 6.76966 25.2716 4.48717 24.4587C3.56479 24.1304 2.57988 23.9586 1.54807 23.9586C0.907095 23.9586 0.375572 23.427 0.391205 22.7704C0.391205 22.1294 0.922745 21.6135 1.56372 21.6135H1.57935C2.87693 21.6292 4.11196 21.848 5.26884 22.2545C8.22357 23.3019 10.4279 25.5063 11.4753 28.461C11.8818 29.6179 12.1007 30.8686 12.1163 32.1505C12.1163 32.8071 11.6004 33.3387 10.9438 33.3387Z"
                  fill="#4361EE"
                />
                <path
                  d="M1.56335 33.7297C0.687874 33.7297 0 33.0262 0 32.1664C0 31.3065 0.703508 30.603 1.56335 30.603C2.42319 30.603 3.1267 31.3065 3.1267 32.1664C3.1267 33.0262 2.43883 33.7297 1.56335 33.7297Z"
                  fill="#4361EE"
                />
              </svg>
            </div>
            <div>
              <h4 className="text-color1 font-medium">Lorem ipsum has been</h4>
              <p className="text-textColor3  leading-26">
                when an unknown printer took a galley
              </p>
            </div>
          </div>
        </div>
        <div className="lg:hidden bg-white h-[117px] rounded-[30px] w-full shadow-section1Shadow flex justify-center gap-[30px] mt-[30px]">
          <div className="flex items-center justify-between w-[275px] gap-5">
            <div>
              <svg
                width="38"
                height="41"
                viewBox="0 0 38 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M36 14.3127V27.1118C36 29.2075 34.8773 31.1536 33.0622 32.2202L21.9471 38.6385C20.1321 39.6864 17.8866 39.6864 16.0528 38.6385L4.93781 32.2202C3.12273 31.1723 2 29.2262 2 27.1118V14.3127C2 12.2169 3.12273 10.2708 4.93781 9.20418L16.0528 2.78591C17.8679 1.73803 20.1133 1.73803 21.9471 2.78591L33.0622 9.20418C34.8773 10.2708 36 12.1982 36 14.3127Z"
                  stroke="#4361EE"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19.0093 18.8412C21.4174 18.8412 23.3693 16.8891 23.3693 14.4812C23.3693 12.0733 21.4174 10.1213 19.0093 10.1213C16.6015 10.1213 14.6495 12.0733 14.6495 14.4812C14.6495 16.8891 16.6015 18.8412 19.0093 18.8412Z"
                  stroke="#4361EE"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M26.4942 29.4325C26.4942 26.0643 23.1447 23.3323 19.0093 23.3323C14.8739 23.3323 11.5244 26.0643 11.5244 29.4325"
                  stroke="#4361EE"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <h4 className="text-color1 font-medium">Lorem ipsum has been</h4>
              <p className="text-textColor3  leading-26">
                when an unknown printer took a galley
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:flex justify-between flex-row">
        <div className="flex flex-col">
          <div className="text-color1 lg:mt-[200px] font-medium lg:text-19.4 text-left lg:leading-29.1 tracking-[0.15em] mt-[100px]">
            CHECKOUT OUR NEW
          </div>
          <h2 className="text-textColor2 mt-2 lg:mt-5 w-full lg:w-[466px] font-semibold text-39.8 text-left leading-47 max-lg:text-27.6 max-lg:leading-41.4">
            Latest Listed Properties
          </h2>
          <p className="text-textColor3 lg:mt-[30px] mt-2 leading-26 lg:w-[500px] max-lg:text-[13.3px] max-lg:leading-[22px]">
            Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
            dignissim purus.
          </p>
        </div>
        <div className="flex gap-5 lg:mt-[200px] mt-5 items-center max-lg:justify-center">
          <div className="border-primaryColour cursor-pointer border-[1px] flex items-center max-h-[49px] rounded-[30px] py-[19px] px-[30px] text-primaryColour">
            <h5 className="text-center font-medium">All</h5>
          </div>
          <div className="border-primaryColour cursor-pointer bg-primaryColour flex items-center max-h-[49px] border-[1px] rounded-[30px] py-[19px] px-[30px] ">
            <h5 className="text-center font-medium">Sell</h5>
          </div>
          <div className="border-primaryColour cursor-pointer max-h-[49px] flex items-center border-[1px] py-[19px] rounded-[30px] px-[30px] text-primaryColour">
            <h5 className="text-center font-medium">Rent</h5>
          </div>
        </div>
      </div>

      <div className="flex max-lg:flex-col max-lg:w-full lg:gap-[50px] lg:w-[1560px] lg:mt-[50px] mt-10 lg:mb-[95px] max-lg:items-center">
        <div className="lg:w-[340px] lg:h-[500px] w-[333px] h-[340px]">
          <div className="lg:max-h-[340px] max-h-[220px] relative rounded-[30px] w-[333px] lg:w-[340px]">
            <div className="bg-custom-gradient-2 absolute inset-0  rounded-[30px]" />
            <img
              className="rounded-[30px] lg:w-[340px] lg:h-[340px] w-[333px] h-[220px] object-cover"
              src="src\assets\images\house1.jpeg"
            />
            <div className="absolute flex gap-[10px]  items-center left-[30px] max-lg:left-[20px] bottom-[30px] max-lg:bottom-[20px] bg-[#FFE1E1] rounded-[20px] px-6 py-[10px]">
              <svg
                className="w-5 h-[22.5px] max-lg:w-[15px] max-lg:h-[15px]"
                viewBox="0 0 20 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.4076 12.2426C12.6672 11.8162 12.9355 11.3754 13.2006 10.9209C14.0877 9.40019 14.2505 7.86789 13.6846 6.36651C12.5427 3.33721 8.72575 1.4915 7.84209 1.19701L7.22073 0.989746L6.25093 2.92972L6.71893 3.31206C6.72417 3.31626 7.244 3.77048 7.27865 4.45905C7.30824 5.04685 6.986 5.68204 6.32112 6.34711C5.8594 6.80878 5.35264 7.25522 4.8161 7.7278C2.55865 9.71583 0 11.9697 0 16.2336C0 16.2922 0.000550676 16.3504 0.00165204 16.4083C0.0180119 17.3492 0.2201 18.2776 0.596308 19.1402C0.972516 20.0028 1.51543 20.7826 2.19387 21.4348C3.55621 22.7598 5.38285 23.4994 7.28332 23.4954H11.6306L11.0939 22.4064C8.91356 17.9812 10.4555 15.4487 12.4076 12.2426Z"
                  fill="#FF1111"
                />
                <path
                  d="M19.8229 16.1852C19.8103 16.1353 19.7972 16.0852 19.7835 16.0349C19.2385 14.0368 16.2218 11.4676 15.8797 11.1812L15.1925 10.6062L14.742 11.3807C13.7152 13.146 12.834 14.7561 12.4499 16.5828C12.0119 18.666 12.3067 20.7833 13.3515 23.0556L13.5535 23.4953H14.067C14.9713 23.498 15.8642 23.2929 16.6769 22.896C17.4895 22.4991 18.2001 21.9209 18.7541 21.2061C19.3046 20.5068 19.6873 19.6905 19.8726 18.82C20.0579 17.9495 20.0409 17.0481 19.8229 16.1852Z"
                  fill="#FF1111"
                />
              </svg>

              <button>
                <h5 className="text-[#FF1111] font-medium max-lg:text-[13.3px] max-lg:leading-[22px]">
                  Popular
                </h5>
              </button>
            </div>
          </div>
          <div className="lg:flex flex-col gap-2 lg:w-[280px] mt-8 max-lg:mt-5">
            <h3 className="text-textColor2 font-semibold text-27.6 leading-41.4 max-lg:text-19.4 max-lg:leading-29.1">
              $ 5,970
            </h3>
            <h4 className="text-textColor2 font-medium text-19.4 leading-29.1 max-lg:text-base">
              Tranquil Haven in the Woods
            </h4>
            <p className="text-textColor3 leading-26 max-lg:text-[13.3px] max-lg:leading-[22px]">
              103 Wright CourtBurien, WA 98168
            </p>
            <div className="flex gap-5">
              <div className="flex gap-[10px]">
                <svg
                  className="w-[30px] h-[21.5px] max-lg:hidden"
                  viewBox="0 0 30 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25 5.48975H12V13.0284H10.6154V10.4659C10.6138 9.01407 10.0363 7.62213 9.00971 6.5955C7.9831 5.56887 6.59117 4.99138 5.13931 4.98975H2V0.989746H0V22.4897H2V19.5058L28 19.7138V22.4897H30V10.4897C29.9985 9.16413 29.4712 7.89323 28.5339 6.95587C27.5965 6.01852 26.3256 5.49125 25 5.48975ZM2 6.98975H5.13931C6.0609 6.99079 6.94445 7.35735 7.59611 8.00901C8.24777 8.66067 8.61433 9.54422 8.61537 10.4658V13.0283H2V6.98975ZM28 17.7137L2 17.5057V15.0284H28V17.7137ZM28 13.0284H14V7.48975H25C25.7954 7.49066 26.5579 7.80702 27.1203 8.36943C27.6827 8.93184 27.9991 9.69438 28 10.4897V13.0284Z"
                    fill="#2B2B2B"
                  />
                </svg>
                <svg
                  className="lg:hidden"
                  width="22"
                  height="16"
                  viewBox="0 0 22 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.3333 3.3H8.8V8.82837H7.78461V6.9492C7.78343 5.88451 7.35997 4.86375 6.60712 4.11089C5.85427 3.35802 4.83353 2.93453 3.76883 2.93333H1.46667V0H0V15.7667H1.46667V13.5784L20.5333 13.731V15.7667H22V6.96667C21.9989 5.99454 21.6122 5.06255 20.9248 4.37516C20.2374 3.68777 19.3055 3.3011 18.3333 3.3ZM1.46667 4.4H3.76883C4.44466 4.40076 5.09259 4.66958 5.57048 5.14746C6.04837 5.62535 6.31718 6.27328 6.31794 6.94911V8.82828H1.46667V4.4ZM20.5333 12.2643L1.46667 12.1117V10.295H20.5333V12.2643ZM20.5333 8.82837H10.2667V4.76667H18.3333C18.9166 4.76733 19.4758 4.99933 19.8882 5.41177C20.3007 5.8242 20.5327 6.38339 20.5333 6.96667V8.82837Z"
                    fill="#2B2B2B"
                  />
                </svg>
                <p className="text-textColor2 leading-26 max-lg:text-[13.3px] max-lg:leading-[22px]">
                  4 Beds
                </p>
              </div>
              <div className="flex gap-[10px]">
                <svg
                  className="w-6 h-6 max-lg:hidden"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.4 14.2494H3.2V5.24938C3.19907 4.91045 3.26538 4.5747 3.39509 4.26156C3.5248 3.94843 3.71533 3.66413 3.95565 3.42513L3.97565 3.40513C4.35228 3.02905 4.83584 2.77842 5.36026 2.68748C5.88468 2.59654 6.42438 2.66972 6.90565 2.89703C6.45114 3.65273 6.26222 4.53865 6.36892 5.41402C6.47562 6.28939 6.87181 7.10399 7.49455 7.72838L8.0421 8.27593L7.03425 9.28383L8.16555 10.4151L9.1734 9.40728L14.7579 3.82293L15.7657 2.81508L14.6344 1.68373L13.6264 2.69158L13.0789 2.14403C12.4233 1.4903 11.5592 1.08731 10.637 1.0053C9.71481 0.923285 8.79309 1.16745 8.03245 1.69523C7.23036 1.18869 6.27983 0.97001 5.33702 1.07512C4.39422 1.18023 3.51519 1.60288 2.84435 2.27363L2.82435 2.29363C2.43497 2.68088 2.12627 3.14151 1.91611 3.64887C1.70595 4.15622 1.59851 4.70022 1.6 5.24938V14.2494H0V15.8494H1.6V17.3844C1.59997 17.5134 1.62077 17.6415 1.6616 17.7638L3.15 22.2288C3.22943 22.4679 3.38216 22.6758 3.5865 22.8231C3.79084 22.9704 4.0364 23.0496 4.2883 23.0494H4.9333L4.35 25.0494H6.01665L6.6 23.0494H17.005L17.605 25.0494H19.275L18.675 23.0494H19.7115C19.9634 23.0496 20.209 22.9705 20.4134 22.8232C20.6178 22.6759 20.7706 22.4679 20.85 22.2288L22.3383 17.7638C22.3791 17.6415 22.4 17.5134 22.4 17.3844V15.8494H24V14.2494H22.4ZM8.626 3.27538C9.0668 2.83554 9.66407 2.58852 10.2868 2.58852C10.9095 2.58852 11.5068 2.83554 11.9476 3.27538L12.495 3.82293L9.17355 7.14438L8.626 6.59693C8.18619 6.15612 7.93918 5.55885 7.93918 4.93616C7.93918 4.31346 8.18619 3.71619 8.626 3.27538ZM20.8 17.3194L19.4234 21.4494H4.5766L3.2 17.3194V15.8494H20.8V17.3194Z"
                    fill="#2B2B2B"
                  />
                </svg>
                <svg
                  className="lg:hidden"
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.8 9.94473H2.4V3.19473C2.3993 2.94053 2.44904 2.68871 2.54632 2.45386C2.6436 2.21901 2.7865 2.00579 2.96674 1.82654L2.98174 1.81154C3.26421 1.52948 3.62688 1.34151 4.02019 1.2733C4.41351 1.2051 4.81829 1.25998 5.17924 1.43046C4.83835 1.99724 4.69666 2.66168 4.77669 3.31821C4.85671 3.97473 5.15386 4.58569 5.62091 5.05398L6.03158 5.46464L5.27569 6.22056L6.12416 7.06904L6.88005 6.31315L11.0684 2.12489L11.8243 1.369L10.9758 0.520489L10.2198 1.27638L9.80918 0.865714C9.3175 0.375413 8.66938 0.0731732 7.97774 0.0116636C7.28611 -0.0498459 6.59482 0.133274 6.02434 0.529114C5.42277 0.149206 4.70988 -0.0148024 4.00277 0.06403C3.29566 0.142862 2.63639 0.459848 2.13326 0.962914L2.11826 0.977914C1.82623 1.26835 1.5947 1.61382 1.43708 1.99434C1.27946 2.37486 1.19888 2.78286 1.2 3.19473V9.94473H0V11.1447H1.2V12.296C1.19997 12.3927 1.21557 12.4888 1.2462 12.5806L2.3625 15.9293C2.42207 16.1086 2.53662 16.2646 2.68988 16.375C2.84313 16.4855 3.0273 16.5449 3.21623 16.5447H3.69998L3.2625 18.0447H4.51249L4.95 16.5447H12.7538L13.2038 18.0447H14.4563L14.0063 16.5447H14.7836C14.9726 16.5449 15.1568 16.4856 15.3101 16.3751C15.4633 16.2646 15.5779 16.1086 15.6375 15.9293L16.7537 12.5806C16.7844 12.4888 16.8 12.3927 16.8 12.296V11.1447H18V9.94473H16.8ZM6.4695 1.71423C6.8001 1.38435 7.24805 1.19908 7.71508 1.19908C8.18211 1.19908 8.63006 1.38435 8.96066 1.71423L9.37125 2.12489L6.88016 4.61598L6.4695 4.20539C6.13964 3.87478 5.95439 3.42683 5.95439 2.95981C5.95439 2.49279 6.13964 2.04483 6.4695 1.71423ZM15.6 12.2472L14.5675 15.3447H3.43245L2.4 12.2472V11.1447H15.6V12.2472Z"
                    fill="#2B2B2B"
                  />
                </svg>

                <p className="text-textColor2 leading-26 max-lg:text-[13.3px] max-lg:leading-[22px]">
                  3 Bath
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-[340px] lg:h-[500px] w-[333px] max-lg:mt-[30px] h-[340px]">
          <div className="lg:max-h-[340px] max-h-[220px] bg-custom-gradient-2 relative rounded-[30px] w-[333px] lg:w-[340px]">
            <div className="bg-custom-gradient-2 absolute inset-0  rounded-[30px]" />
            <img
              className="rounded-[30px] lg:w-[340px] lg:h-[340px] w-[333px] h-[220px] object-cover"
              src="src\assets\images\house2.jpeg"
            />
            <div className="absolute items-center flex gap-[10px] left-[30px] max-lg:left-[20px] bottom-[30px] max-lg:bottom-[20px] bg-[#D7EEFF] rounded-[20px] px-6 py-[10px]">
              <svg
                className="w-5 h-[21px] max-lg:w-[15px] max-lg:h-[15px]"
                viewBox="0 0 20 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.5387 9.54687L10.6731 1.39058C10.3849 1.12542 10.0054 0.981922 9.61384 0.990075C9.2223 0.998229 8.84906 1.1574 8.57214 1.43433L0.418438 9.58808L0 10.0065V22.0268H7.85714V14.5268H12.1429V22.0268H20V9.97133L19.5387 9.54687Z"
                  fill="#119BFF"
                />
              </svg>

              <button>
                <h5 className="text-[#119BFF] font-medium max-lg:text-[13.3px] max-lg:leading-[22px]">
                  New Listing
                </h5>
              </button>
            </div>
          </div>
          <div className="lg:flex flex-col gap-2 lg:w-[260px] mt-8 max-lg:mt-5">
            <h3 className="text-textColor2 font-semibold text-27.6 leading-41.4 max-lg:text-19.4 max-lg:leading-29.1">
              $ 1,970
            </h3>
            <h4 className="text-textColor2 font-medium text-19.4 leading-29.1 max-lg:text-base">
              Serene Retreat by the Lake
            </h4>
            <p className="text-textColor3 leading-26 max-lg:text-[13.3px] max-lg:leading-[22px]">
              1964 Jehovah Drive, VA 22408
            </p>
            <div className="flex gap-5">
              <div className="flex gap-[10px]">
                <svg
                  className="w-[30px] h-[21.5px] max-lg:hidden"
                  viewBox="0 0 30 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25 5.48975H12V13.0284H10.6154V10.4659C10.6138 9.01407 10.0363 7.62213 9.00971 6.5955C7.9831 5.56887 6.59117 4.99138 5.13931 4.98975H2V0.989746H0V22.4897H2V19.5058L28 19.7138V22.4897H30V10.4897C29.9985 9.16413 29.4712 7.89323 28.5339 6.95587C27.5965 6.01852 26.3256 5.49125 25 5.48975ZM2 6.98975H5.13931C6.0609 6.99079 6.94445 7.35735 7.59611 8.00901C8.24777 8.66067 8.61433 9.54422 8.61537 10.4658V13.0283H2V6.98975ZM28 17.7137L2 17.5057V15.0284H28V17.7137ZM28 13.0284H14V7.48975H25C25.7954 7.49066 26.5579 7.80702 27.1203 8.36943C27.6827 8.93184 27.9991 9.69438 28 10.4897V13.0284Z"
                    fill="#2B2B2B"
                  />
                </svg>
                <svg
                  className="lg:hidden"
                  width="22"
                  height="16"
                  viewBox="0 0 22 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.3333 3.3H8.8V8.82837H7.78461V6.9492C7.78343 5.88451 7.35997 4.86375 6.60712 4.11089C5.85427 3.35802 4.83353 2.93453 3.76883 2.93333H1.46667V0H0V15.7667H1.46667V13.5784L20.5333 13.731V15.7667H22V6.96667C21.9989 5.99454 21.6122 5.06255 20.9248 4.37516C20.2374 3.68777 19.3055 3.3011 18.3333 3.3ZM1.46667 4.4H3.76883C4.44466 4.40076 5.09259 4.66958 5.57048 5.14746C6.04837 5.62535 6.31718 6.27328 6.31794 6.94911V8.82828H1.46667V4.4ZM20.5333 12.2643L1.46667 12.1117V10.295H20.5333V12.2643ZM20.5333 8.82837H10.2667V4.76667H18.3333C18.9166 4.76733 19.4758 4.99933 19.8882 5.41177C20.3007 5.8242 20.5327 6.38339 20.5333 6.96667V8.82837Z"
                    fill="#2B2B2B"
                  />
                </svg>
                <p className="text-textColor2 leading-26 max-lg:text-[13.3px] max-lg:leading-[22px]">
                  3 Beds
                </p>
              </div>
              <div className="flex gap-[10px]">
                <svg
                  className="w-6 h-6 max-lg:hidden"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.4 14.2494H3.2V5.24938C3.19907 4.91045 3.26538 4.5747 3.39509 4.26156C3.5248 3.94843 3.71533 3.66413 3.95565 3.42513L3.97565 3.40513C4.35228 3.02905 4.83584 2.77842 5.36026 2.68748C5.88468 2.59654 6.42438 2.66972 6.90565 2.89703C6.45114 3.65273 6.26222 4.53865 6.36892 5.41402C6.47562 6.28939 6.87181 7.10399 7.49455 7.72838L8.0421 8.27593L7.03425 9.28383L8.16555 10.4151L9.1734 9.40728L14.7579 3.82293L15.7657 2.81508L14.6344 1.68373L13.6264 2.69158L13.0789 2.14403C12.4233 1.4903 11.5592 1.08731 10.637 1.0053C9.71481 0.923285 8.79309 1.16745 8.03245 1.69523C7.23036 1.18869 6.27983 0.97001 5.33702 1.07512C4.39422 1.18023 3.51519 1.60288 2.84435 2.27363L2.82435 2.29363C2.43497 2.68088 2.12627 3.14151 1.91611 3.64887C1.70595 4.15622 1.59851 4.70022 1.6 5.24938V14.2494H0V15.8494H1.6V17.3844C1.59997 17.5134 1.62077 17.6415 1.6616 17.7638L3.15 22.2288C3.22943 22.4679 3.38216 22.6758 3.5865 22.8231C3.79084 22.9704 4.0364 23.0496 4.2883 23.0494H4.9333L4.35 25.0494H6.01665L6.6 23.0494H17.005L17.605 25.0494H19.275L18.675 23.0494H19.7115C19.9634 23.0496 20.209 22.9705 20.4134 22.8232C20.6178 22.6759 20.7706 22.4679 20.85 22.2288L22.3383 17.7638C22.3791 17.6415 22.4 17.5134 22.4 17.3844V15.8494H24V14.2494H22.4ZM8.626 3.27538C9.0668 2.83554 9.66407 2.58852 10.2868 2.58852C10.9095 2.58852 11.5068 2.83554 11.9476 3.27538L12.495 3.82293L9.17355 7.14438L8.626 6.59693C8.18619 6.15612 7.93918 5.55885 7.93918 4.93616C7.93918 4.31346 8.18619 3.71619 8.626 3.27538ZM20.8 17.3194L19.4234 21.4494H4.5766L3.2 17.3194V15.8494H20.8V17.3194Z"
                    fill="#2B2B2B"
                  />
                </svg>
                <svg
                  className="lg:hidden"
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.8 9.94473H2.4V3.19473C2.3993 2.94053 2.44904 2.68871 2.54632 2.45386C2.6436 2.21901 2.7865 2.00579 2.96674 1.82654L2.98174 1.81154C3.26421 1.52948 3.62688 1.34151 4.02019 1.2733C4.41351 1.2051 4.81829 1.25998 5.17924 1.43046C4.83835 1.99724 4.69666 2.66168 4.77669 3.31821C4.85671 3.97473 5.15386 4.58569 5.62091 5.05398L6.03158 5.46464L5.27569 6.22056L6.12416 7.06904L6.88005 6.31315L11.0684 2.12489L11.8243 1.369L10.9758 0.520489L10.2198 1.27638L9.80918 0.865714C9.3175 0.375413 8.66938 0.0731732 7.97774 0.0116636C7.28611 -0.0498459 6.59482 0.133274 6.02434 0.529114C5.42277 0.149206 4.70988 -0.0148024 4.00277 0.06403C3.29566 0.142862 2.63639 0.459848 2.13326 0.962914L2.11826 0.977914C1.82623 1.26835 1.5947 1.61382 1.43708 1.99434C1.27946 2.37486 1.19888 2.78286 1.2 3.19473V9.94473H0V11.1447H1.2V12.296C1.19997 12.3927 1.21557 12.4888 1.2462 12.5806L2.3625 15.9293C2.42207 16.1086 2.53662 16.2646 2.68988 16.375C2.84313 16.4855 3.0273 16.5449 3.21623 16.5447H3.69998L3.2625 18.0447H4.51249L4.95 16.5447H12.7538L13.2038 18.0447H14.4563L14.0063 16.5447H14.7836C14.9726 16.5449 15.1568 16.4856 15.3101 16.3751C15.4633 16.2646 15.5779 16.1086 15.6375 15.9293L16.7537 12.5806C16.7844 12.4888 16.8 12.3927 16.8 12.296V11.1447H18V9.94473H16.8ZM6.4695 1.71423C6.8001 1.38435 7.24805 1.19908 7.71508 1.19908C8.18211 1.19908 8.63006 1.38435 8.96066 1.71423L9.37125 2.12489L6.88016 4.61598L6.4695 4.20539C6.13964 3.87478 5.95439 3.42683 5.95439 2.95981C5.95439 2.49279 6.13964 2.04483 6.4695 1.71423ZM15.6 12.2472L14.5675 15.3447H3.43245L2.4 12.2472V11.1447H15.6V12.2472Z"
                    fill="#2B2B2B"
                  />
                </svg>
                <p className="text-textColor2 leading-26 max-lg:text-[13.3px] max-lg:leading-[22px]">
                  2 Bath
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-[340px] lg:h-[500px] w-[333px] max-lg:mt-[30px] h-[340px]">
          <div className="lg:max-h-[340px] max-h-[220px] relative rounded-[30px] w-[333px] lg:w-[340px]">
            <div className="bg-custom-gradient-2 absolute inset-0  rounded-[30px]" />
            <img
              className="rounded-[30px] lg:w-[340px] lg:h-[340px] w-[333px] h-[220px] object-cover"
              src="src\assets\images\house3.jpeg"
            />
            <div className="absolute flex gap-[10px]  items-center max-lg:left-[20px] max-lg:bottom-[20px] left-[30px] bottom-[30px] bg-[#F1FFF1] rounded-[20px] px-6 py-[10px]">
              <svg
                className="w-3 h-5 max-lg:w-2 max-lg:h-[15px]"
                viewBox="0 0 14 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.03064 10.8281H9.03008H4.96992C4.48037 10.8281 4.01087 10.6336 3.6647 10.2875C3.31854 9.94131 3.12406 9.4718 3.12406 8.98225C3.12406 8.4927 3.31854 8.0232 3.6647 7.67703C4.01087 7.33087 4.48037 7.13639 4.96992 7.13639H11.4662H11.9662V6.63639V5.01233V4.51233H11.4662H8.51504V1.98975V1.48975H8.01504H6.39098H5.89098V1.98975V4.51233H4.96992C3.78442 4.51233 2.64748 4.98327 1.80921 5.82154C0.970936 6.65981 0.5 7.79676 0.5 8.98225C0.5 10.1677 0.970937 11.3047 1.80921 12.143C2.64748 12.9812 3.78442 13.4522 4.96992 13.4522H9.02952C9.51905 13.4527 9.98838 13.6474 10.3345 13.9936C10.6807 14.3397 10.8754 14.8091 10.8759 15.2986V15.4779C10.8754 15.9675 10.6807 16.4368 10.3345 16.783C9.98838 17.1291 9.51905 17.3238 9.02952 17.3244H2.15791H1.65791V17.8244V19.4484V19.9484H2.15791H5.89098V22.2905V22.7905H6.39098H8.01504H8.51504V22.2905V19.9484H9.03008H9.03064C10.2156 19.9471 11.3516 19.4758 12.1895 18.6379C13.0274 17.8 13.4987 16.664 13.5 15.4791V15.4785V15.298V15.2975C13.4987 14.1125 13.0274 12.9765 12.1895 12.1386C11.3516 11.3007 10.2156 10.8294 9.03064 10.8281Z"
                  fill="#00CE3A"
                  stroke="#00CE3A"
                />
              </svg>

              <button>
                <h5 className="text-[#00CE3A] font-medium max-lg:text-[13.3px] max-lg:leading-[22px]">
                  Discounted Price
                </h5>
              </button>
            </div>
          </div>
          <div className="lg:flex flex-col gap-2 lg:w-[333px] mt-8 max-lg:mt-5">
            <h3 className="text-textColor2 font-semibold text-27.6 leading-41.4 max-lg:text-19.4 max-lg:leading-29.1">
              $ 3,450
            </h3>
            <h4 className="text-textColor2 font-medium text-19.4 leading-29.1 max-lg:text-base">
              Charming Cottage in the Meadow
            </h4>
            <p className="text-textColor3 leading-26 max-lg:text-[13.3px] max-lg:leading-[22px]">
              1508 Centennial Farm RoadHarlan, 51537
            </p>
            <div className="flex gap-5">
              <div className="flex gap-[10px]">
                <svg
                  className="w-[30px] h-[21.5px] max-lg:hidden"
                  viewBox="0 0 30 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25 5.48975H12V13.0284H10.6154V10.4659C10.6138 9.01407 10.0363 7.62213 9.00971 6.5955C7.9831 5.56887 6.59117 4.99138 5.13931 4.98975H2V0.989746H0V22.4897H2V19.5058L28 19.7138V22.4897H30V10.4897C29.9985 9.16413 29.4712 7.89323 28.5339 6.95587C27.5965 6.01852 26.3256 5.49125 25 5.48975ZM2 6.98975H5.13931C6.0609 6.99079 6.94445 7.35735 7.59611 8.00901C8.24777 8.66067 8.61433 9.54422 8.61537 10.4658V13.0283H2V6.98975ZM28 17.7137L2 17.5057V15.0284H28V17.7137ZM28 13.0284H14V7.48975H25C25.7954 7.49066 26.5579 7.80702 27.1203 8.36943C27.6827 8.93184 27.9991 9.69438 28 10.4897V13.0284Z"
                    fill="#2B2B2B"
                  />
                </svg>
                <svg
                  className="lg:hidden"
                  width="22"
                  height="16"
                  viewBox="0 0 22 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.3333 3.3H8.8V8.82837H7.78461V6.9492C7.78343 5.88451 7.35997 4.86375 6.60712 4.11089C5.85427 3.35802 4.83353 2.93453 3.76883 2.93333H1.46667V0H0V15.7667H1.46667V13.5784L20.5333 13.731V15.7667H22V6.96667C21.9989 5.99454 21.6122 5.06255 20.9248 4.37516C20.2374 3.68777 19.3055 3.3011 18.3333 3.3ZM1.46667 4.4H3.76883C4.44466 4.40076 5.09259 4.66958 5.57048 5.14746C6.04837 5.62535 6.31718 6.27328 6.31794 6.94911V8.82828H1.46667V4.4ZM20.5333 12.2643L1.46667 12.1117V10.295H20.5333V12.2643ZM20.5333 8.82837H10.2667V4.76667H18.3333C18.9166 4.76733 19.4758 4.99933 19.8882 5.41177C20.3007 5.8242 20.5327 6.38339 20.5333 6.96667V8.82837Z"
                    fill="#2B2B2B"
                  />
                </svg>
                <p className="text-textColor2 leading-26 max-lg:text-[13.3px] max-lg:leading-[22px]">
                  4 Beds
                </p>
              </div>
              <div className="flex gap-[10px]">
                <svg
                  className="w-6 h-6 max-lg:hidden"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.4 14.2494H3.2V5.24938C3.19907 4.91045 3.26538 4.5747 3.39509 4.26156C3.5248 3.94843 3.71533 3.66413 3.95565 3.42513L3.97565 3.40513C4.35228 3.02905 4.83584 2.77842 5.36026 2.68748C5.88468 2.59654 6.42438 2.66972 6.90565 2.89703C6.45114 3.65273 6.26222 4.53865 6.36892 5.41402C6.47562 6.28939 6.87181 7.10399 7.49455 7.72838L8.0421 8.27593L7.03425 9.28383L8.16555 10.4151L9.1734 9.40728L14.7579 3.82293L15.7657 2.81508L14.6344 1.68373L13.6264 2.69158L13.0789 2.14403C12.4233 1.4903 11.5592 1.08731 10.637 1.0053C9.71481 0.923285 8.79309 1.16745 8.03245 1.69523C7.23036 1.18869 6.27983 0.97001 5.33702 1.07512C4.39422 1.18023 3.51519 1.60288 2.84435 2.27363L2.82435 2.29363C2.43497 2.68088 2.12627 3.14151 1.91611 3.64887C1.70595 4.15622 1.59851 4.70022 1.6 5.24938V14.2494H0V15.8494H1.6V17.3844C1.59997 17.5134 1.62077 17.6415 1.6616 17.7638L3.15 22.2288C3.22943 22.4679 3.38216 22.6758 3.5865 22.8231C3.79084 22.9704 4.0364 23.0496 4.2883 23.0494H4.9333L4.35 25.0494H6.01665L6.6 23.0494H17.005L17.605 25.0494H19.275L18.675 23.0494H19.7115C19.9634 23.0496 20.209 22.9705 20.4134 22.8232C20.6178 22.6759 20.7706 22.4679 20.85 22.2288L22.3383 17.7638C22.3791 17.6415 22.4 17.5134 22.4 17.3844V15.8494H24V14.2494H22.4ZM8.626 3.27538C9.0668 2.83554 9.66407 2.58852 10.2868 2.58852C10.9095 2.58852 11.5068 2.83554 11.9476 3.27538L12.495 3.82293L9.17355 7.14438L8.626 6.59693C8.18619 6.15612 7.93918 5.55885 7.93918 4.93616C7.93918 4.31346 8.18619 3.71619 8.626 3.27538ZM20.8 17.3194L19.4234 21.4494H4.5766L3.2 17.3194V15.8494H20.8V17.3194Z"
                    fill="#2B2B2B"
                  />
                </svg>
                <svg
                  className="lg:hidden"
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.8 9.94473H2.4V3.19473C2.3993 2.94053 2.44904 2.68871 2.54632 2.45386C2.6436 2.21901 2.7865 2.00579 2.96674 1.82654L2.98174 1.81154C3.26421 1.52948 3.62688 1.34151 4.02019 1.2733C4.41351 1.2051 4.81829 1.25998 5.17924 1.43046C4.83835 1.99724 4.69666 2.66168 4.77669 3.31821C4.85671 3.97473 5.15386 4.58569 5.62091 5.05398L6.03158 5.46464L5.27569 6.22056L6.12416 7.06904L6.88005 6.31315L11.0684 2.12489L11.8243 1.369L10.9758 0.520489L10.2198 1.27638L9.80918 0.865714C9.3175 0.375413 8.66938 0.0731732 7.97774 0.0116636C7.28611 -0.0498459 6.59482 0.133274 6.02434 0.529114C5.42277 0.149206 4.70988 -0.0148024 4.00277 0.06403C3.29566 0.142862 2.63639 0.459848 2.13326 0.962914L2.11826 0.977914C1.82623 1.26835 1.5947 1.61382 1.43708 1.99434C1.27946 2.37486 1.19888 2.78286 1.2 3.19473V9.94473H0V11.1447H1.2V12.296C1.19997 12.3927 1.21557 12.4888 1.2462 12.5806L2.3625 15.9293C2.42207 16.1086 2.53662 16.2646 2.68988 16.375C2.84313 16.4855 3.0273 16.5449 3.21623 16.5447H3.69998L3.2625 18.0447H4.51249L4.95 16.5447H12.7538L13.2038 18.0447H14.4563L14.0063 16.5447H14.7836C14.9726 16.5449 15.1568 16.4856 15.3101 16.3751C15.4633 16.2646 15.5779 16.1086 15.6375 15.9293L16.7537 12.5806C16.7844 12.4888 16.8 12.3927 16.8 12.296V11.1447H18V9.94473H16.8ZM6.4695 1.71423C6.8001 1.38435 7.24805 1.19908 7.71508 1.19908C8.18211 1.19908 8.63006 1.38435 8.96066 1.71423L9.37125 2.12489L6.88016 4.61598L6.4695 4.20539C6.13964 3.87478 5.95439 3.42683 5.95439 2.95981C5.95439 2.49279 6.13964 2.04483 6.4695 1.71423ZM15.6 12.2472L14.5675 15.3447H3.43245L2.4 12.2472V11.1447H15.6V12.2472Z"
                    fill="#2B2B2B"
                  />
                </svg>
                <p className="text-textColor2 leading-26 max-lg:text-[13.3px] max-lg:leading-[22px]">
                  4 Bath
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative lg:w-[340px] lg:h-[500px] w-[333px] h-[340px] max-lg:mt-[30px]">
          <div className="bg-ellipse-gradient max-lg:hidden -bottom-[180px] right-[466px] rounded-full w-[100px] h-[100px] absolute opacity-50 rotate-[-30deg]" />

          <div className="lg:max-h-[340px] max-h-[220px] relative rounded-[30px] w-[333px] lg:w-[340px]">
            <div className="bg-custom-gradient-2 absolute inset-0  rounded-[30px]" />
            <img
              className="rounded-[30px] lg:w-[340px] lg:h-[340px] w-[333px] h-[220px] object-cover"
              src="src\assets\images\house4.jpeg"
            />
            <div className="max-lg:hidden absolute flex gap-[10px] items-center left-[30px] max-lg:left-[20px] bottom-[30px] max-lg:bottom-[20px] bg-[#FFE1E1] rounded-[20px] px-6 py-[10px]">
              <svg
                className="w-5 h-[22.5px] max-lg:w-[15px] max-lg:h-[15px]"
                viewBox="0 0 20 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.4076 12.2426C12.6672 11.8162 12.9355 11.3754 13.2006 10.9209C14.0877 9.40019 14.2505 7.86789 13.6846 6.36651C12.5427 3.33721 8.72575 1.4915 7.84209 1.19701L7.22073 0.989746L6.25093 2.92972L6.71893 3.31206C6.72417 3.31626 7.244 3.77048 7.27865 4.45905C7.30824 5.04685 6.986 5.68204 6.32112 6.34711C5.8594 6.80878 5.35264 7.25522 4.8161 7.7278C2.55865 9.71583 0 11.9697 0 16.2336C0 16.2922 0.000550676 16.3504 0.00165204 16.4083C0.0180119 17.3492 0.2201 18.2776 0.596308 19.1402C0.972516 20.0028 1.51543 20.7826 2.19387 21.4348C3.55621 22.7598 5.38285 23.4994 7.28332 23.4954H11.6306L11.0939 22.4064C8.91356 17.9812 10.4555 15.4487 12.4076 12.2426Z"
                  fill="#FF1111"
                />
                <path
                  d="M19.8229 16.1852C19.8103 16.1353 19.7972 16.0852 19.7835 16.0349C19.2385 14.0368 16.2218 11.4676 15.8797 11.1812L15.1925 10.6062L14.742 11.3807C13.7152 13.146 12.834 14.7561 12.4499 16.5828C12.0119 18.666 12.3067 20.7833 13.3515 23.0556L13.5535 23.4953H14.067C14.9713 23.498 15.8642 23.2929 16.6769 22.896C17.4895 22.4991 18.2001 21.9209 18.7541 21.2061C19.3046 20.5068 19.6873 19.6905 19.8726 18.82C20.0579 17.9495 20.0409 17.0481 19.8229 16.1852Z"
                  fill="#FF1111"
                />
              </svg>

              <button>
                <h5 className="text-[#FF1111] font-medium max-lg:text-[13.3px] max-lg:leading-[22px]">
                  Popular
                </h5>
              </button>
            </div>
          </div>
          <div className="lg:flex flex-col gap-2 lg:w-[264px] mt-8 max-lg:mt-5">
            <h3 className="text-textColor2 font-semibold text-27.6 leading-41.4 max-lg:text-19.4 max-lg:leading-29.1">
              $ 2,389
            </h3>
            <h4 className="text-textColor2 font-medium text-19.4 leading-29.1 max-lg:text-base">
              Grand Estate on the Hilltop
            </h4>
            <p className="text-textColor3 leading-26 max-lg:text-[13.3px] max-lg:leading-[22px]">
              103 Wright CourtBurien, WA 98168
            </p>
            <div className="flex gap-5">
              <div className="flex gap-[10px]">
                <svg
                  className="w-[30px] h-[21.5px] max-lg:hidden"
                  viewBox="0 0 30 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25 5.48975H12V13.0284H10.6154V10.4659C10.6138 9.01407 10.0363 7.62213 9.00971 6.5955C7.9831 5.56887 6.59117 4.99138 5.13931 4.98975H2V0.989746H0V22.4897H2V19.5058L28 19.7138V22.4897H30V10.4897C29.9985 9.16413 29.4712 7.89323 28.5339 6.95587C27.5965 6.01852 26.3256 5.49125 25 5.48975ZM2 6.98975H5.13931C6.0609 6.99079 6.94445 7.35735 7.59611 8.00901C8.24777 8.66067 8.61433 9.54422 8.61537 10.4658V13.0283H2V6.98975ZM28 17.7137L2 17.5057V15.0284H28V17.7137ZM28 13.0284H14V7.48975H25C25.7954 7.49066 26.5579 7.80702 27.1203 8.36943C27.6827 8.93184 27.9991 9.69438 28 10.4897V13.0284Z"
                    fill="#2B2B2B"
                  />
                </svg>
                <svg
                  className="lg:hidden"
                  width="22"
                  height="16"
                  viewBox="0 0 22 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.3333 3.3H8.8V8.82837H7.78461V6.9492C7.78343 5.88451 7.35997 4.86375 6.60712 4.11089C5.85427 3.35802 4.83353 2.93453 3.76883 2.93333H1.46667V0H0V15.7667H1.46667V13.5784L20.5333 13.731V15.7667H22V6.96667C21.9989 5.99454 21.6122 5.06255 20.9248 4.37516C20.2374 3.68777 19.3055 3.3011 18.3333 3.3ZM1.46667 4.4H3.76883C4.44466 4.40076 5.09259 4.66958 5.57048 5.14746C6.04837 5.62535 6.31718 6.27328 6.31794 6.94911V8.82828H1.46667V4.4ZM20.5333 12.2643L1.46667 12.1117V10.295H20.5333V12.2643ZM20.5333 8.82837H10.2667V4.76667H18.3333C18.9166 4.76733 19.4758 4.99933 19.8882 5.41177C20.3007 5.8242 20.5327 6.38339 20.5333 6.96667V8.82837Z"
                    fill="#2B2B2B"
                  />
                </svg>
                <p className="text-textColor2 leading-26 max-lg:text-[13.3px] max-lg:leading-[22px]">
                  4 Beds
                </p>
              </div>
              <div className="flex gap-[10px]">
                <svg
                  className="w-6 h-6 max-lg:hidden"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.4 14.2494H3.2V5.24938C3.19907 4.91045 3.26538 4.5747 3.39509 4.26156C3.5248 3.94843 3.71533 3.66413 3.95565 3.42513L3.97565 3.40513C4.35228 3.02905 4.83584 2.77842 5.36026 2.68748C5.88468 2.59654 6.42438 2.66972 6.90565 2.89703C6.45114 3.65273 6.26222 4.53865 6.36892 5.41402C6.47562 6.28939 6.87181 7.10399 7.49455 7.72838L8.0421 8.27593L7.03425 9.28383L8.16555 10.4151L9.1734 9.40728L14.7579 3.82293L15.7657 2.81508L14.6344 1.68373L13.6264 2.69158L13.0789 2.14403C12.4233 1.4903 11.5592 1.08731 10.637 1.0053C9.71481 0.923285 8.79309 1.16745 8.03245 1.69523C7.23036 1.18869 6.27983 0.97001 5.33702 1.07512C4.39422 1.18023 3.51519 1.60288 2.84435 2.27363L2.82435 2.29363C2.43497 2.68088 2.12627 3.14151 1.91611 3.64887C1.70595 4.15622 1.59851 4.70022 1.6 5.24938V14.2494H0V15.8494H1.6V17.3844C1.59997 17.5134 1.62077 17.6415 1.6616 17.7638L3.15 22.2288C3.22943 22.4679 3.38216 22.6758 3.5865 22.8231C3.79084 22.9704 4.0364 23.0496 4.2883 23.0494H4.9333L4.35 25.0494H6.01665L6.6 23.0494H17.005L17.605 25.0494H19.275L18.675 23.0494H19.7115C19.9634 23.0496 20.209 22.9705 20.4134 22.8232C20.6178 22.6759 20.7706 22.4679 20.85 22.2288L22.3383 17.7638C22.3791 17.6415 22.4 17.5134 22.4 17.3844V15.8494H24V14.2494H22.4ZM8.626 3.27538C9.0668 2.83554 9.66407 2.58852 10.2868 2.58852C10.9095 2.58852 11.5068 2.83554 11.9476 3.27538L12.495 3.82293L9.17355 7.14438L8.626 6.59693C8.18619 6.15612 7.93918 5.55885 7.93918 4.93616C7.93918 4.31346 8.18619 3.71619 8.626 3.27538ZM20.8 17.3194L19.4234 21.4494H4.5766L3.2 17.3194V15.8494H20.8V17.3194Z"
                    fill="#2B2B2B"
                  />
                </svg>
                <svg
                  className="lg:hidden"
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.8 9.94473H2.4V3.19473C2.3993 2.94053 2.44904 2.68871 2.54632 2.45386C2.6436 2.21901 2.7865 2.00579 2.96674 1.82654L2.98174 1.81154C3.26421 1.52948 3.62688 1.34151 4.02019 1.2733C4.41351 1.2051 4.81829 1.25998 5.17924 1.43046C4.83835 1.99724 4.69666 2.66168 4.77669 3.31821C4.85671 3.97473 5.15386 4.58569 5.62091 5.05398L6.03158 5.46464L5.27569 6.22056L6.12416 7.06904L6.88005 6.31315L11.0684 2.12489L11.8243 1.369L10.9758 0.520489L10.2198 1.27638L9.80918 0.865714C9.3175 0.375413 8.66938 0.0731732 7.97774 0.0116636C7.28611 -0.0498459 6.59482 0.133274 6.02434 0.529114C5.42277 0.149206 4.70988 -0.0148024 4.00277 0.06403C3.29566 0.142862 2.63639 0.459848 2.13326 0.962914L2.11826 0.977914C1.82623 1.26835 1.5947 1.61382 1.43708 1.99434C1.27946 2.37486 1.19888 2.78286 1.2 3.19473V9.94473H0V11.1447H1.2V12.296C1.19997 12.3927 1.21557 12.4888 1.2462 12.5806L2.3625 15.9293C2.42207 16.1086 2.53662 16.2646 2.68988 16.375C2.84313 16.4855 3.0273 16.5449 3.21623 16.5447H3.69998L3.2625 18.0447H4.51249L4.95 16.5447H12.7538L13.2038 18.0447H14.4563L14.0063 16.5447H14.7836C14.9726 16.5449 15.1568 16.4856 15.3101 16.3751C15.4633 16.2646 15.5779 16.1086 15.6375 15.9293L16.7537 12.5806C16.7844 12.4888 16.8 12.3927 16.8 12.296V11.1447H18V9.94473H16.8ZM6.4695 1.71423C6.8001 1.38435 7.24805 1.19908 7.71508 1.19908C8.18211 1.19908 8.63006 1.38435 8.96066 1.71423L9.37125 2.12489L6.88016 4.61598L6.4695 4.20539C6.13964 3.87478 5.95439 3.42683 5.95439 2.95981C5.95439 2.49279 6.13964 2.04483 6.4695 1.71423ZM15.6 12.2472L14.5675 15.3447H3.43245L2.4 12.2472V11.1447H15.6V12.2472Z"
                    fill="#2B2B2B"
                  />
                </svg>
                <p className="text-textColor2 leading-26 max-lg:text-[13.3px] max-lg:leading-[22px]">
                  3 Bath
                </p>
              </div>
            </div>
          </div>
        </div>
        <button className="lg:hidden mt-[60px] mb-10 w-full max-w-[350px] px-[30px] py-[19px] border-[1px] rounded-[30px] text-primaryColour border-primaryColour">
          View more properties
        </button>
      </div>
    </div>
  );
}
