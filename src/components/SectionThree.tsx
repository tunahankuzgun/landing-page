import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";

export default function SectionThree() {
  return (
    <div className="relative mx-auto bg-white">
      <div className="relative w-full max-w-[1160px] mx-auto">
        <div className="flex flex-row justify-between">
          <div>
            <div className="text-color1 mt-[160px] h-[14px] text-19.4 leading-29.1 font-medium tracking-[0.15em]">
              TESTIMONIALS
            </div>
            <h2 className="text-textColor2 mt-[30px] w-[415px] text-39.8 leading-47 font-semibold ">
              Look What Our Customers Say!
            </h2>
            <p className="mt-[30px] w-[415px] text-textColor2 leading-26">
              Fusce venenatis tellus a felis scelerisque, non pulvinar est
              pellentesque.
            </p>
            <div className="flex gap-[50px] mt-[60px]">
              <div className="w-[50px] bg-white rounded-full h-[50px] swiper3-prev flex items-center justify-center border-[1px] border-color1">
                <svg
                  width="22"
                  height="16"
                  viewBox="0 0 22 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 8.98975C21.5523 8.98975 22 8.54203 22 7.98975C22 7.43746 21.5523 6.98975 21 6.98975L21 8.98975ZM0.292892 7.28264C-0.0976315 7.67317 -0.0976314 8.30633 0.292893 8.69685L6.65686 15.0608C7.04738 15.4513 7.68054 15.4513 8.07107 15.0608C8.46159 14.6703 8.46159 14.0371 8.07107 13.6466L2.41421 7.98975L8.07107 2.33289C8.46159 1.94237 8.46159 1.3092 8.07107 0.918679C7.68054 0.528155 7.04738 0.528155 6.65685 0.91868L0.292892 7.28264ZM21 6.98975L1 6.98975L1 8.98975L21 8.98975L21 6.98975Z"
                    fill="#4361EE"
                  />
                </svg>
              </div>
              <div className="rotate-180 w-[50px] bg-white rounded-full swiper3-next h-[50px] flex items-center justify-center border-[1px] border-color1">
                <svg
                  width="22"
                  height="16"
                  viewBox="0 0 22 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 8.98975C21.5523 8.98975 22 8.54203 22 7.98975C22 7.43746 21.5523 6.98975 21 6.98975L21 8.98975ZM0.292892 7.28264C-0.0976315 7.67317 -0.0976314 8.30633 0.292893 8.69685L6.65686 15.0608C7.04738 15.4513 7.68054 15.4513 8.07107 15.0608C8.46159 14.6703 8.46159 14.0371 8.07107 13.6466L2.41421 7.98975L8.07107 2.33289C8.46159 1.94237 8.46159 1.3092 8.07107 0.918679C7.68054 0.528155 7.04738 0.528155 6.65685 0.91868L0.292892 7.28264ZM21 6.98975L1 6.98975L1 8.98975L21 8.98975L21 6.98975Z"
                    fill="#4361EE"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className=" mt-[160px]">
            <div className="w-[500px] flex h-[358px] mb-[104px] z-10 relative">
              <div className="bg-ellipse-gradient -top-[30px] -left-[30px] rounded-full w-[60px] h-[60px] absolute opacity-50 rotate-[-30deg] z-[-1]" />
              <div className="flex shadow-section3Shadow rounded-[30px] bg-white">
                <Swiper
                  className="w-full flex justify-center items-center"
                  init={false}
                  direction={"vertical"}
                  navigation={{
                    nextEl: ".swiper3-next",
                    prevEl: ".swiper3-prev",
                  }}
                  pagination={{
                    clickable: true,
                    el: ".pagination3",
                    bulletActiveClass: "swiper3-paginationActive",
                    bulletClass: "swiper3-pagination ",
                    renderBullet: (_index, className) => {
                      return (
                        '<span class="!w-full !rounded-[4px] !mx-5 ' +
                        className +
                        '"></span>'
                      );
                    },
                  }}
                  loop={false}
                  modules={[Navigation, Pagination]}
                  slidesPerView={1}
                >
                  <SwiperSlide>
                    <div className=" flex w-[500px] h-[358px] items-center flex-col">
                      <div className="w-[380px] mt-[34px] h-[200px]">
                        <svg
                          width="60"
                          height="39"
                          viewBox="0 0 60 39"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.9606 0.989746L0 38.2529H21.7241L30.1478 0.989746H15.9606ZM45.8128 0.989746L29.8522 38.2529H51.5764L60 0.989746H45.8128Z"
                            fill="#FFC700"
                            fillOpacity="0.4"
                          />
                        </svg>
                        <h4 className="mt-[18.4px] text-textColor2 text-19.4 h-[130px] leading-29.1 font-medium">
                          Lorem Ipsum has been the industry's standard dummy
                          text ever since the 1500s, when an unknown printer
                          took a galley of type and scrambled it to make
                        </h4>
                      </div>
                      <div className=" w-[400px] mt-10 h-0 border-[0.5px] border-[#D4D4D4]"></div>
                      <div className=" w-[400px] mt-4 flex h-[50px] items-center">
                        <div className="rounded-full">
                          <img
                            className="rounded-full w-[50px] h-[50px]  object-cover"
                            src="src\assets\images\customer6.jpeg"
                          />
                        </div>
                        <h4 className="text-textColor2 w-[168px] font-semibold text-19.4 leading-29.1 ml-[15px]">
                          Barbara D. Smith
                        </h4>
                        <div className="w-[86px] ml-[83px] flex justify-between">
                          <svg
                            width="14"
                            height="15"
                            viewBox="0 0 14 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.9412 6.03299C13.8743 5.82533 13.7512 5.64023 13.5856 5.49819C13.42 5.35615 13.2183 5.26272 13.0028 5.22823L9.62216 4.67882L8.05497 1.63341C7.95515 1.43953 7.80385 1.2769 7.61767 1.16336C7.4315 1.04981 7.21765 0.989746 6.99958 0.989746C6.78151 0.989746 6.56766 1.04981 6.38148 1.16336C6.19531 1.2769 6.04401 1.43953 5.94418 1.63341L4.377 4.67882L0.996381 5.22823C0.781151 5.26326 0.579729 5.3569 0.414215 5.49887C0.248701 5.64084 0.125491 5.82566 0.0581037 6.03305C-0.00928335 6.24044 -0.0182434 6.46239 0.0322066 6.67453C0.0826566 6.88668 0.190567 7.08083 0.344098 7.23568L2.75618 9.66725L2.2341 13.0522C2.2006 13.2678 2.2272 13.4884 2.31099 13.6899C2.39478 13.8913 2.53251 14.0658 2.70902 14.194C2.88554 14.3223 3.094 14.3994 3.31149 14.4168C3.52897 14.4342 3.74705 14.3914 3.94175 14.2929L6.99958 12.7503L10.0575 14.2929C10.2522 14.3912 10.4702 14.4339 10.6876 14.4164C10.905 14.3988 11.1134 14.3217 11.2899 14.1935C11.4663 14.0653 11.604 13.891 11.6879 13.6896C11.7717 13.4883 11.7985 13.2677 11.7651 13.0522L11.2431 9.66725L13.6551 7.23568C13.8092 7.08113 13.9174 6.88697 13.9679 6.67471C14.0184 6.46244 14.0092 6.24034 13.9412 6.03299Z"
                              fill="#FFC700"
                            />
                          </svg>
                          <svg
                            width="14"
                            height="15"
                            viewBox="0 0 14 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.9412 6.03299C13.8743 5.82533 13.7512 5.64023 13.5856 5.49819C13.42 5.35615 13.2183 5.26272 13.0028 5.22823L9.62216 4.67882L8.05497 1.63341C7.95515 1.43953 7.80385 1.2769 7.61767 1.16336C7.4315 1.04981 7.21765 0.989746 6.99958 0.989746C6.78151 0.989746 6.56766 1.04981 6.38148 1.16336C6.19531 1.2769 6.04401 1.43953 5.94418 1.63341L4.377 4.67882L0.996381 5.22823C0.781151 5.26326 0.579729 5.3569 0.414215 5.49887C0.248701 5.64084 0.125491 5.82566 0.0581037 6.03305C-0.00928335 6.24044 -0.0182434 6.46239 0.0322066 6.67453C0.0826566 6.88668 0.190567 7.08083 0.344098 7.23568L2.75618 9.66725L2.2341 13.0522C2.2006 13.2678 2.2272 13.4884 2.31099 13.6899C2.39478 13.8913 2.53251 14.0658 2.70902 14.194C2.88554 14.3223 3.094 14.3994 3.31149 14.4168C3.52897 14.4342 3.74705 14.3914 3.94175 14.2929L6.99958 12.7503L10.0575 14.2929C10.2522 14.3912 10.4702 14.4339 10.6876 14.4164C10.905 14.3988 11.1134 14.3217 11.2899 14.1935C11.4663 14.0653 11.604 13.891 11.6879 13.6896C11.7717 13.4883 11.7985 13.2677 11.7651 13.0522L11.2431 9.66725L13.6551 7.23568C13.8092 7.08113 13.9174 6.88697 13.9679 6.67471C14.0184 6.46244 14.0092 6.24034 13.9412 6.03299Z"
                              fill="#FFC700"
                            />
                          </svg>
                          <svg
                            width="14"
                            height="15"
                            viewBox="0 0 14 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.9412 6.03299C13.8743 5.82533 13.7512 5.64023 13.5856 5.49819C13.42 5.35615 13.2183 5.26272 13.0028 5.22823L9.62216 4.67882L8.05497 1.63341C7.95515 1.43953 7.80385 1.2769 7.61767 1.16336C7.4315 1.04981 7.21765 0.989746 6.99958 0.989746C6.78151 0.989746 6.56766 1.04981 6.38148 1.16336C6.19531 1.2769 6.04401 1.43953 5.94418 1.63341L4.377 4.67882L0.996381 5.22823C0.781151 5.26326 0.579729 5.3569 0.414215 5.49887C0.248701 5.64084 0.125491 5.82566 0.0581037 6.03305C-0.00928335 6.24044 -0.0182434 6.46239 0.0322066 6.67453C0.0826566 6.88668 0.190567 7.08083 0.344098 7.23568L2.75618 9.66725L2.2341 13.0522C2.2006 13.2678 2.2272 13.4884 2.31099 13.6899C2.39478 13.8913 2.53251 14.0658 2.70902 14.194C2.88554 14.3223 3.094 14.3994 3.31149 14.4168C3.52897 14.4342 3.74705 14.3914 3.94175 14.2929L6.99958 12.7503L10.0575 14.2929C10.2522 14.3912 10.4702 14.4339 10.6876 14.4164C10.905 14.3988 11.1134 14.3217 11.2899 14.1935C11.4663 14.0653 11.604 13.891 11.6879 13.6896C11.7717 13.4883 11.7985 13.2677 11.7651 13.0522L11.2431 9.66725L13.6551 7.23568C13.8092 7.08113 13.9174 6.88697 13.9679 6.67471C14.0184 6.46244 14.0092 6.24034 13.9412 6.03299Z"
                              fill="#FFC700"
                            />
                          </svg>
                          <svg
                            width="14"
                            height="15"
                            viewBox="0 0 14 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.9412 6.03299C13.8743 5.82533 13.7512 5.64023 13.5856 5.49819C13.42 5.35615 13.2183 5.26272 13.0028 5.22823L9.62216 4.67882L8.05497 1.63341C7.95515 1.43953 7.80385 1.2769 7.61767 1.16336C7.4315 1.04981 7.21765 0.989746 6.99958 0.989746C6.78151 0.989746 6.56766 1.04981 6.38148 1.16336C6.19531 1.2769 6.04401 1.43953 5.94418 1.63341L4.377 4.67882L0.996381 5.22823C0.781151 5.26326 0.579729 5.3569 0.414215 5.49887C0.248701 5.64084 0.125491 5.82566 0.0581037 6.03305C-0.00928335 6.24044 -0.0182434 6.46239 0.0322066 6.67453C0.0826566 6.88668 0.190567 7.08083 0.344098 7.23568L2.75618 9.66725L2.2341 13.0522C2.2006 13.2678 2.2272 13.4884 2.31099 13.6899C2.39478 13.8913 2.53251 14.0658 2.70902 14.194C2.88554 14.3223 3.094 14.3994 3.31149 14.4168C3.52897 14.4342 3.74705 14.3914 3.94175 14.2929L6.99958 12.7503L10.0575 14.2929C10.2522 14.3912 10.4702 14.4339 10.6876 14.4164C10.905 14.3988 11.1134 14.3217 11.2899 14.1935C11.4663 14.0653 11.604 13.891 11.6879 13.6896C11.7717 13.4883 11.7985 13.2677 11.7651 13.0522L11.2431 9.66725L13.6551 7.23568C13.8092 7.08113 13.9174 6.88697 13.9679 6.67471C14.0184 6.46244 14.0092 6.24034 13.9412 6.03299Z"
                              fill="#FFC700"
                            />
                          </svg>
                          <svg
                            width="14"
                            height="15"
                            viewBox="0 0 14 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.9412 6.03299C13.8743 5.82533 13.7512 5.64023 13.5856 5.49819C13.42 5.35615 13.2183 5.26272 13.0028 5.22823L9.62216 4.67882L8.05497 1.63341C7.95515 1.43953 7.80385 1.2769 7.61767 1.16336C7.4315 1.04981 7.21765 0.989746 6.99958 0.989746C6.78151 0.989746 6.56766 1.04981 6.38148 1.16336C6.19531 1.2769 6.04401 1.43953 5.94418 1.63341L4.377 4.67882L0.996381 5.22823C0.781151 5.26326 0.579729 5.3569 0.414215 5.49887C0.248701 5.64084 0.125491 5.82566 0.0581037 6.03305C-0.00928335 6.24044 -0.0182434 6.46239 0.0322066 6.67453C0.0826566 6.88668 0.190567 7.08083 0.344098 7.23568L2.75618 9.66725L2.2341 13.0522C2.2006 13.2678 2.2272 13.4884 2.31099 13.6899C2.39478 13.8913 2.53251 14.0658 2.70902 14.194C2.88554 14.3223 3.094 14.3994 3.31149 14.4168C3.52897 14.4342 3.74705 14.3914 3.94175 14.2929L6.99958 12.7503L10.0575 14.2929C10.2522 14.3912 10.4702 14.4339 10.6876 14.4164C10.905 14.3988 11.1134 14.3217 11.2899 14.1935C11.4663 14.0653 11.604 13.891 11.6879 13.6896C11.7717 13.4883 11.7985 13.2677 11.7651 13.0522L11.2431 9.66725L13.6551 7.23568C13.8092 7.08113 13.9174 6.88697 13.9679 6.67471C14.0184 6.46244 14.0092 6.24034 13.9412 6.03299Z"
                              fill="#D4D4D4"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className=" flex w-[500px] h-[358px] items-center flex-col">
                      <div className="w-[380px] mt-[34px] h-[200px]">
                        <svg
                          width="60"
                          height="39"
                          viewBox="0 0 60 39"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.9606 0.989746L0 38.2529H21.7241L30.1478 0.989746H15.9606ZM45.8128 0.989746L29.8522 38.2529H51.5764L60 0.989746H45.8128Z"
                            fill="#FFC700"
                            fillOpacity="0.4"
                          />
                        </svg>
                        <h4 className="mt-[18.4px] text-textColor2 text-19.4 h-[130px] leading-29.1 font-medium">
                          Lorem Ipsum has been the industry's standard dummy
                          text ever since the 1500s, when an unknown printer
                          took a galley of type and scrambled it to make
                        </h4>
                      </div>
                      <div className=" w-[400px] mt-10 h-0 border-[0.5px] border-[#D4D4D4]"></div>
                      <div className=" w-[400px] mt-4 flex h-[50px] items-center">
                        <div className="rounded-full">
                          <img
                            className="rounded-full w-[50px] h-[50px]  object-cover"
                            src="src\assets\images\customer6.jpeg"
                          />
                        </div>
                        <h4 className="text-textColor2 w-[168px] font-semibold text-19.4 leading-29.1 ml-[15px]">
                          Barbara D. Smith
                        </h4>
                        <div className="w-[86px] ml-[83px] flex justify-between">
                          <svg
                            width="14"
                            height="15"
                            viewBox="0 0 14 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.9412 6.03299C13.8743 5.82533 13.7512 5.64023 13.5856 5.49819C13.42 5.35615 13.2183 5.26272 13.0028 5.22823L9.62216 4.67882L8.05497 1.63341C7.95515 1.43953 7.80385 1.2769 7.61767 1.16336C7.4315 1.04981 7.21765 0.989746 6.99958 0.989746C6.78151 0.989746 6.56766 1.04981 6.38148 1.16336C6.19531 1.2769 6.04401 1.43953 5.94418 1.63341L4.377 4.67882L0.996381 5.22823C0.781151 5.26326 0.579729 5.3569 0.414215 5.49887C0.248701 5.64084 0.125491 5.82566 0.0581037 6.03305C-0.00928335 6.24044 -0.0182434 6.46239 0.0322066 6.67453C0.0826566 6.88668 0.190567 7.08083 0.344098 7.23568L2.75618 9.66725L2.2341 13.0522C2.2006 13.2678 2.2272 13.4884 2.31099 13.6899C2.39478 13.8913 2.53251 14.0658 2.70902 14.194C2.88554 14.3223 3.094 14.3994 3.31149 14.4168C3.52897 14.4342 3.74705 14.3914 3.94175 14.2929L6.99958 12.7503L10.0575 14.2929C10.2522 14.3912 10.4702 14.4339 10.6876 14.4164C10.905 14.3988 11.1134 14.3217 11.2899 14.1935C11.4663 14.0653 11.604 13.891 11.6879 13.6896C11.7717 13.4883 11.7985 13.2677 11.7651 13.0522L11.2431 9.66725L13.6551 7.23568C13.8092 7.08113 13.9174 6.88697 13.9679 6.67471C14.0184 6.46244 14.0092 6.24034 13.9412 6.03299Z"
                              fill="#FFC700"
                            />
                          </svg>
                          <svg
                            width="14"
                            height="15"
                            viewBox="0 0 14 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.9412 6.03299C13.8743 5.82533 13.7512 5.64023 13.5856 5.49819C13.42 5.35615 13.2183 5.26272 13.0028 5.22823L9.62216 4.67882L8.05497 1.63341C7.95515 1.43953 7.80385 1.2769 7.61767 1.16336C7.4315 1.04981 7.21765 0.989746 6.99958 0.989746C6.78151 0.989746 6.56766 1.04981 6.38148 1.16336C6.19531 1.2769 6.04401 1.43953 5.94418 1.63341L4.377 4.67882L0.996381 5.22823C0.781151 5.26326 0.579729 5.3569 0.414215 5.49887C0.248701 5.64084 0.125491 5.82566 0.0581037 6.03305C-0.00928335 6.24044 -0.0182434 6.46239 0.0322066 6.67453C0.0826566 6.88668 0.190567 7.08083 0.344098 7.23568L2.75618 9.66725L2.2341 13.0522C2.2006 13.2678 2.2272 13.4884 2.31099 13.6899C2.39478 13.8913 2.53251 14.0658 2.70902 14.194C2.88554 14.3223 3.094 14.3994 3.31149 14.4168C3.52897 14.4342 3.74705 14.3914 3.94175 14.2929L6.99958 12.7503L10.0575 14.2929C10.2522 14.3912 10.4702 14.4339 10.6876 14.4164C10.905 14.3988 11.1134 14.3217 11.2899 14.1935C11.4663 14.0653 11.604 13.891 11.6879 13.6896C11.7717 13.4883 11.7985 13.2677 11.7651 13.0522L11.2431 9.66725L13.6551 7.23568C13.8092 7.08113 13.9174 6.88697 13.9679 6.67471C14.0184 6.46244 14.0092 6.24034 13.9412 6.03299Z"
                              fill="#FFC700"
                            />
                          </svg>
                          <svg
                            width="14"
                            height="15"
                            viewBox="0 0 14 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.9412 6.03299C13.8743 5.82533 13.7512 5.64023 13.5856 5.49819C13.42 5.35615 13.2183 5.26272 13.0028 5.22823L9.62216 4.67882L8.05497 1.63341C7.95515 1.43953 7.80385 1.2769 7.61767 1.16336C7.4315 1.04981 7.21765 0.989746 6.99958 0.989746C6.78151 0.989746 6.56766 1.04981 6.38148 1.16336C6.19531 1.2769 6.04401 1.43953 5.94418 1.63341L4.377 4.67882L0.996381 5.22823C0.781151 5.26326 0.579729 5.3569 0.414215 5.49887C0.248701 5.64084 0.125491 5.82566 0.0581037 6.03305C-0.00928335 6.24044 -0.0182434 6.46239 0.0322066 6.67453C0.0826566 6.88668 0.190567 7.08083 0.344098 7.23568L2.75618 9.66725L2.2341 13.0522C2.2006 13.2678 2.2272 13.4884 2.31099 13.6899C2.39478 13.8913 2.53251 14.0658 2.70902 14.194C2.88554 14.3223 3.094 14.3994 3.31149 14.4168C3.52897 14.4342 3.74705 14.3914 3.94175 14.2929L6.99958 12.7503L10.0575 14.2929C10.2522 14.3912 10.4702 14.4339 10.6876 14.4164C10.905 14.3988 11.1134 14.3217 11.2899 14.1935C11.4663 14.0653 11.604 13.891 11.6879 13.6896C11.7717 13.4883 11.7985 13.2677 11.7651 13.0522L11.2431 9.66725L13.6551 7.23568C13.8092 7.08113 13.9174 6.88697 13.9679 6.67471C14.0184 6.46244 14.0092 6.24034 13.9412 6.03299Z"
                              fill="#FFC700"
                            />
                          </svg>
                          <svg
                            width="14"
                            height="15"
                            viewBox="0 0 14 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.9412 6.03299C13.8743 5.82533 13.7512 5.64023 13.5856 5.49819C13.42 5.35615 13.2183 5.26272 13.0028 5.22823L9.62216 4.67882L8.05497 1.63341C7.95515 1.43953 7.80385 1.2769 7.61767 1.16336C7.4315 1.04981 7.21765 0.989746 6.99958 0.989746C6.78151 0.989746 6.56766 1.04981 6.38148 1.16336C6.19531 1.2769 6.04401 1.43953 5.94418 1.63341L4.377 4.67882L0.996381 5.22823C0.781151 5.26326 0.579729 5.3569 0.414215 5.49887C0.248701 5.64084 0.125491 5.82566 0.0581037 6.03305C-0.00928335 6.24044 -0.0182434 6.46239 0.0322066 6.67453C0.0826566 6.88668 0.190567 7.08083 0.344098 7.23568L2.75618 9.66725L2.2341 13.0522C2.2006 13.2678 2.2272 13.4884 2.31099 13.6899C2.39478 13.8913 2.53251 14.0658 2.70902 14.194C2.88554 14.3223 3.094 14.3994 3.31149 14.4168C3.52897 14.4342 3.74705 14.3914 3.94175 14.2929L6.99958 12.7503L10.0575 14.2929C10.2522 14.3912 10.4702 14.4339 10.6876 14.4164C10.905 14.3988 11.1134 14.3217 11.2899 14.1935C11.4663 14.0653 11.604 13.891 11.6879 13.6896C11.7717 13.4883 11.7985 13.2677 11.7651 13.0522L11.2431 9.66725L13.6551 7.23568C13.8092 7.08113 13.9174 6.88697 13.9679 6.67471C14.0184 6.46244 14.0092 6.24034 13.9412 6.03299Z"
                              fill="#FFC700"
                            />
                          </svg>
                          <svg
                            width="14"
                            height="15"
                            viewBox="0 0 14 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.9412 6.03299C13.8743 5.82533 13.7512 5.64023 13.5856 5.49819C13.42 5.35615 13.2183 5.26272 13.0028 5.22823L9.62216 4.67882L8.05497 1.63341C7.95515 1.43953 7.80385 1.2769 7.61767 1.16336C7.4315 1.04981 7.21765 0.989746 6.99958 0.989746C6.78151 0.989746 6.56766 1.04981 6.38148 1.16336C6.19531 1.2769 6.04401 1.43953 5.94418 1.63341L4.377 4.67882L0.996381 5.22823C0.781151 5.26326 0.579729 5.3569 0.414215 5.49887C0.248701 5.64084 0.125491 5.82566 0.0581037 6.03305C-0.00928335 6.24044 -0.0182434 6.46239 0.0322066 6.67453C0.0826566 6.88668 0.190567 7.08083 0.344098 7.23568L2.75618 9.66725L2.2341 13.0522C2.2006 13.2678 2.2272 13.4884 2.31099 13.6899C2.39478 13.8913 2.53251 14.0658 2.70902 14.194C2.88554 14.3223 3.094 14.3994 3.31149 14.4168C3.52897 14.4342 3.74705 14.3914 3.94175 14.2929L6.99958 12.7503L10.0575 14.2929C10.2522 14.3912 10.4702 14.4339 10.6876 14.4164C10.905 14.3988 11.1134 14.3217 11.2899 14.1935C11.4663 14.0653 11.604 13.891 11.6879 13.6896C11.7717 13.4883 11.7985 13.2677 11.7651 13.0522L11.2431 9.66725L13.6551 7.23568C13.8092 7.08113 13.9174 6.88697 13.9679 6.67471C14.0184 6.46244 14.0092 6.24034 13.9412 6.03299Z"
                              fill="#D4D4D4"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className=" flex w-[500px] h-[358px] items-center flex-col">
                      <div className="w-[380px] mt-[34px] h-[200px]">
                        <svg
                          width="60"
                          height="39"
                          viewBox="0 0 60 39"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.9606 0.989746L0 38.2529H21.7241L30.1478 0.989746H15.9606ZM45.8128 0.989746L29.8522 38.2529H51.5764L60 0.989746H45.8128Z"
                            fill="#FFC700"
                            fillOpacity="0.4"
                          />
                        </svg>
                        <h4 className="mt-[18.4px] text-textColor2 text-19.4 h-[130px] leading-29.1 font-medium">
                          Lorem Ipsum has been the industry's standard dummy
                          text ever since the 1500s, when an unknown printer
                          took a galley of type and scrambled it to make
                        </h4>
                      </div>
                      <div className=" w-[400px] mt-10 h-0 border-[0.5px] border-[#D4D4D4]"></div>
                      <div className=" w-[400px] mt-4 flex h-[50px] items-center">
                        <div className="rounded-full">
                          <img
                            className="rounded-full w-[50px] h-[50px]  object-cover"
                            src="src\assets\images\customer6.jpeg"
                          />
                        </div>
                        <h4 className="text-textColor2 w-[168px] font-semibold text-19.4 leading-29.1 ml-[15px]">
                          Barbara D. Smith
                        </h4>
                        <div className="w-[86px] ml-[83px] flex justify-between">
                          <svg
                            width="14"
                            height="15"
                            viewBox="0 0 14 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.9412 6.03299C13.8743 5.82533 13.7512 5.64023 13.5856 5.49819C13.42 5.35615 13.2183 5.26272 13.0028 5.22823L9.62216 4.67882L8.05497 1.63341C7.95515 1.43953 7.80385 1.2769 7.61767 1.16336C7.4315 1.04981 7.21765 0.989746 6.99958 0.989746C6.78151 0.989746 6.56766 1.04981 6.38148 1.16336C6.19531 1.2769 6.04401 1.43953 5.94418 1.63341L4.377 4.67882L0.996381 5.22823C0.781151 5.26326 0.579729 5.3569 0.414215 5.49887C0.248701 5.64084 0.125491 5.82566 0.0581037 6.03305C-0.00928335 6.24044 -0.0182434 6.46239 0.0322066 6.67453C0.0826566 6.88668 0.190567 7.08083 0.344098 7.23568L2.75618 9.66725L2.2341 13.0522C2.2006 13.2678 2.2272 13.4884 2.31099 13.6899C2.39478 13.8913 2.53251 14.0658 2.70902 14.194C2.88554 14.3223 3.094 14.3994 3.31149 14.4168C3.52897 14.4342 3.74705 14.3914 3.94175 14.2929L6.99958 12.7503L10.0575 14.2929C10.2522 14.3912 10.4702 14.4339 10.6876 14.4164C10.905 14.3988 11.1134 14.3217 11.2899 14.1935C11.4663 14.0653 11.604 13.891 11.6879 13.6896C11.7717 13.4883 11.7985 13.2677 11.7651 13.0522L11.2431 9.66725L13.6551 7.23568C13.8092 7.08113 13.9174 6.88697 13.9679 6.67471C14.0184 6.46244 14.0092 6.24034 13.9412 6.03299Z"
                              fill="#FFC700"
                            />
                          </svg>
                          <svg
                            width="14"
                            height="15"
                            viewBox="0 0 14 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.9412 6.03299C13.8743 5.82533 13.7512 5.64023 13.5856 5.49819C13.42 5.35615 13.2183 5.26272 13.0028 5.22823L9.62216 4.67882L8.05497 1.63341C7.95515 1.43953 7.80385 1.2769 7.61767 1.16336C7.4315 1.04981 7.21765 0.989746 6.99958 0.989746C6.78151 0.989746 6.56766 1.04981 6.38148 1.16336C6.19531 1.2769 6.04401 1.43953 5.94418 1.63341L4.377 4.67882L0.996381 5.22823C0.781151 5.26326 0.579729 5.3569 0.414215 5.49887C0.248701 5.64084 0.125491 5.82566 0.0581037 6.03305C-0.00928335 6.24044 -0.0182434 6.46239 0.0322066 6.67453C0.0826566 6.88668 0.190567 7.08083 0.344098 7.23568L2.75618 9.66725L2.2341 13.0522C2.2006 13.2678 2.2272 13.4884 2.31099 13.6899C2.39478 13.8913 2.53251 14.0658 2.70902 14.194C2.88554 14.3223 3.094 14.3994 3.31149 14.4168C3.52897 14.4342 3.74705 14.3914 3.94175 14.2929L6.99958 12.7503L10.0575 14.2929C10.2522 14.3912 10.4702 14.4339 10.6876 14.4164C10.905 14.3988 11.1134 14.3217 11.2899 14.1935C11.4663 14.0653 11.604 13.891 11.6879 13.6896C11.7717 13.4883 11.7985 13.2677 11.7651 13.0522L11.2431 9.66725L13.6551 7.23568C13.8092 7.08113 13.9174 6.88697 13.9679 6.67471C14.0184 6.46244 14.0092 6.24034 13.9412 6.03299Z"
                              fill="#FFC700"
                            />
                          </svg>
                          <svg
                            width="14"
                            height="15"
                            viewBox="0 0 14 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.9412 6.03299C13.8743 5.82533 13.7512 5.64023 13.5856 5.49819C13.42 5.35615 13.2183 5.26272 13.0028 5.22823L9.62216 4.67882L8.05497 1.63341C7.95515 1.43953 7.80385 1.2769 7.61767 1.16336C7.4315 1.04981 7.21765 0.989746 6.99958 0.989746C6.78151 0.989746 6.56766 1.04981 6.38148 1.16336C6.19531 1.2769 6.04401 1.43953 5.94418 1.63341L4.377 4.67882L0.996381 5.22823C0.781151 5.26326 0.579729 5.3569 0.414215 5.49887C0.248701 5.64084 0.125491 5.82566 0.0581037 6.03305C-0.00928335 6.24044 -0.0182434 6.46239 0.0322066 6.67453C0.0826566 6.88668 0.190567 7.08083 0.344098 7.23568L2.75618 9.66725L2.2341 13.0522C2.2006 13.2678 2.2272 13.4884 2.31099 13.6899C2.39478 13.8913 2.53251 14.0658 2.70902 14.194C2.88554 14.3223 3.094 14.3994 3.31149 14.4168C3.52897 14.4342 3.74705 14.3914 3.94175 14.2929L6.99958 12.7503L10.0575 14.2929C10.2522 14.3912 10.4702 14.4339 10.6876 14.4164C10.905 14.3988 11.1134 14.3217 11.2899 14.1935C11.4663 14.0653 11.604 13.891 11.6879 13.6896C11.7717 13.4883 11.7985 13.2677 11.7651 13.0522L11.2431 9.66725L13.6551 7.23568C13.8092 7.08113 13.9174 6.88697 13.9679 6.67471C14.0184 6.46244 14.0092 6.24034 13.9412 6.03299Z"
                              fill="#FFC700"
                            />
                          </svg>
                          <svg
                            width="14"
                            height="15"
                            viewBox="0 0 14 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.9412 6.03299C13.8743 5.82533 13.7512 5.64023 13.5856 5.49819C13.42 5.35615 13.2183 5.26272 13.0028 5.22823L9.62216 4.67882L8.05497 1.63341C7.95515 1.43953 7.80385 1.2769 7.61767 1.16336C7.4315 1.04981 7.21765 0.989746 6.99958 0.989746C6.78151 0.989746 6.56766 1.04981 6.38148 1.16336C6.19531 1.2769 6.04401 1.43953 5.94418 1.63341L4.377 4.67882L0.996381 5.22823C0.781151 5.26326 0.579729 5.3569 0.414215 5.49887C0.248701 5.64084 0.125491 5.82566 0.0581037 6.03305C-0.00928335 6.24044 -0.0182434 6.46239 0.0322066 6.67453C0.0826566 6.88668 0.190567 7.08083 0.344098 7.23568L2.75618 9.66725L2.2341 13.0522C2.2006 13.2678 2.2272 13.4884 2.31099 13.6899C2.39478 13.8913 2.53251 14.0658 2.70902 14.194C2.88554 14.3223 3.094 14.3994 3.31149 14.4168C3.52897 14.4342 3.74705 14.3914 3.94175 14.2929L6.99958 12.7503L10.0575 14.2929C10.2522 14.3912 10.4702 14.4339 10.6876 14.4164C10.905 14.3988 11.1134 14.3217 11.2899 14.1935C11.4663 14.0653 11.604 13.891 11.6879 13.6896C11.7717 13.4883 11.7985 13.2677 11.7651 13.0522L11.2431 9.66725L13.6551 7.23568C13.8092 7.08113 13.9174 6.88697 13.9679 6.67471C14.0184 6.46244 14.0092 6.24034 13.9412 6.03299Z"
                              fill="#FFC700"
                            />
                          </svg>
                          <svg
                            width="14"
                            height="15"
                            viewBox="0 0 14 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.9412 6.03299C13.8743 5.82533 13.7512 5.64023 13.5856 5.49819C13.42 5.35615 13.2183 5.26272 13.0028 5.22823L9.62216 4.67882L8.05497 1.63341C7.95515 1.43953 7.80385 1.2769 7.61767 1.16336C7.4315 1.04981 7.21765 0.989746 6.99958 0.989746C6.78151 0.989746 6.56766 1.04981 6.38148 1.16336C6.19531 1.2769 6.04401 1.43953 5.94418 1.63341L4.377 4.67882L0.996381 5.22823C0.781151 5.26326 0.579729 5.3569 0.414215 5.49887C0.248701 5.64084 0.125491 5.82566 0.0581037 6.03305C-0.00928335 6.24044 -0.0182434 6.46239 0.0322066 6.67453C0.0826566 6.88668 0.190567 7.08083 0.344098 7.23568L2.75618 9.66725L2.2341 13.0522C2.2006 13.2678 2.2272 13.4884 2.31099 13.6899C2.39478 13.8913 2.53251 14.0658 2.70902 14.194C2.88554 14.3223 3.094 14.3994 3.31149 14.4168C3.52897 14.4342 3.74705 14.3914 3.94175 14.2929L6.99958 12.7503L10.0575 14.2929C10.2522 14.3912 10.4702 14.4339 10.6876 14.4164C10.905 14.3988 11.1134 14.3217 11.2899 14.1935C11.4663 14.0653 11.604 13.891 11.6879 13.6896C11.7717 13.4883 11.7985 13.2677 11.7651 13.0522L11.2431 9.66725L13.6551 7.23568C13.8092 7.08113 13.9174 6.88697 13.9679 6.67471C14.0184 6.46244 14.0092 6.24034 13.9412 6.03299Z"
                              fill="#D4D4D4"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="flex items-end pagination3 ml-[100px] flex-row !rotate-90 "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
