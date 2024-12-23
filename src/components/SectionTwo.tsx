import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";

export default function SectionTwo() {
  return (
    <div className="relative mx-auto bg-primaryColour">
      <div className="relative px-[30px] w-full max-w-[1180px] mx-auto">
        <div className="w-full flex flex-col max-lg:items-start">
          <div className=" text-19.4 w-full justify-center leading-29.1 text-center font-medium tracking-[0.15em] mt-[110px] max-lg:mt-[100px] max-lg:text-base">
            WHAT’S TRENDING
          </div>
          <div className="w-full justify-center text-39.8 leading-47 text-center font-semibold mt-[30px] max-lg:mt-5 max-lg:text-27.6 max-lg:leading-41.4">
            Latest Blogs & Posts
          </div>
          <div className="max-lg:hidden">
            <Swiper
              className="w-[1180px] flex "
              init={false}
              navigation={{
                nextEl: ".swiper2-next",
                prevEl: ".swiper2-prev",
              }}
              pagination={{
                clickable: true,
                el: ".pagination2",
                bulletActiveClass: "swiper2-paginationActive",
                bulletClass: "swiper2-pagination ",
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
              slidesPerView={3}
            >
              <div className="flex w-full justify-center gap-[50px]">
                <SwiperSlide>
                  <div>
                    <div className="rounded-[30px] mt-[80px] relative w-[340px] h-[240px]">
                      <div className="relative cursor-pointer">
                        <div className="bg-[#0000004D] absolute inset-0 rounded-[30px]" />
                        <img
                          className="rounded-[30px]"
                          src="src\assets\images\blog1.jpeg"
                        />
                      </div>
                      <div className="bg-white shadow-calendarShadow p-[10px] text-center left-[50px] absolute rounded-b-[10px] top-0">
                        <h4 className="text-textColor2 text-19.4 leading-[1rem] font-medium">
                          28
                        </h4>
                        <p className="text-textColor3 leading-[1rem] text-[16px]">
                          Tue
                        </p>
                      </div>
                    </div>
                    <div className="mt-[30px]">
                      <h3 className="w-[340px] cursor-pointer font-medium text-27.6 leading-41.4 ">
                        Top 10 Home Buying Mistakes to Avoid
                      </h3>
                      <p className="mt-4 w-[340px] cursor-pointer text-textColor5 leading-26">
                        Etiam eget elementum elit. Aenean dignissim dapibus
                        vestibulum
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <div className="rounded-[30px] mt-[80px] relative w-[340px] h-[240px]">
                      <div className="relative cursor-pointer">
                        <div className="bg-[#0000004D] absolute inset-0 rounded-[30px]" />
                        <img
                          className="rounded-[30px]"
                          src="src\assets\images\blog2.jpeg"
                        />
                      </div>
                      <div className="bg-white shadow-calendarShadow p-[10px] text-center left-[50px] absolute rounded-b-[10px] top-0">
                        <h4 className="text-textColor2 text-19.4 leading-[1rem] font-medium">
                          08
                        </h4>
                        <p className="text-textColor3 leading-[1rem] text-[16px]">
                          Mon
                        </p>
                      </div>
                    </div>
                    <div className="mt-[30px]">
                      <h3 className="w-[340px] cursor-pointer font-medium text-27.6 leading-41.4 ">
                        How to Stage Your Home for a Quick Sale
                      </h3>
                      <p className="mt-4 cursor-pointer w-[340px] text-textColor5 leading-26">
                        Nullam odio lacus, dictum quis pretium congue, vehicula
                        venenatis nunc.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <div className="rounded-[30px] mt-[80px] relative w-[340px] h-[240px]">
                      <div className="relative cursor-pointer">
                        <div className="bg-[#0000004D] absolute inset-0 rounded-[30px]" />
                        <img
                          className="rounded-[30px] shadow-blogShadow"
                          src="src\assets\images\blog3.jpeg"
                        />
                      </div>
                      <div className="bg-white shadow-calendarShadow text-center p-[10px]  left-[50px] absolute rounded-b-[10px] top-0">
                        <h4 className="text-textColor2 text-19.4 leading-[1rem] font-medium">
                          26
                        </h4>
                        <p className="text-textColor3 text-[16px] leading-[1rem]">
                          Wed
                        </p>
                      </div>
                    </div>
                    <div className="mt-[30px]">
                      <h3 className="w-[340px] font-medium cursor-pointer text-27.6 leading-41.4 ">
                        5 Tips for First-Time Home Sellers
                      </h3>
                      <p className="mt-4 w-[340px] cursor-pointer text-textColor5 leading-26">
                        In hac habitasse platea dictumst. Phasellus vel velit
                        vel augue maximus.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className=" ">
                    <div className="rounded-[30px] mt-[80px] relative w-[340px] h-[240px]">
                      <div className="relative cursor-pointer">
                        <div className="bg-[#0000004D] absolute inset-0 rounded-[30px]" />
                        <img
                          className="rounded-[30px]"
                          src="src\assets\images\blog2.jpeg"
                        />
                      </div>
                      <div className="bg-white shadow-calendarShadow p-[10px] text-center left-[50px] absolute rounded-b-[10px] top-0">
                        <h4 className="text-textColor2 text-19.4 leading-[1rem] font-medium">
                          08
                        </h4>
                        <p className="text-textColor3 leading-[1rem] text-[16px]">
                          Mon
                        </p>
                      </div>
                    </div>
                    <div className="mt-[30px] ">
                      <h3 className="w-[340px] cursor-pointer font-medium text-27.6 leading-41.4 ">
                        How to Stage Your Home for a Quick Sale
                      </h3>
                      <p className="mt-4 w-[340px] cursor-pointer text-textColor5 leading-26">
                        Nullam odio lacus, dictum quis pretium congue, vehicula
                        venenatis nunc.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
          <div className="lg:hidden mx-auto">
            <div>
              <div className="rounded-[30px] mt-10 relative w-[333px]">
                <div className="relative">
                  <div className="bg-[#0000004D] absolute inset-0 rounded-[30px]" />
                  <img
                    className="rounded-[30px] shadow-blogShadow"
                    src="src\assets\images\blog1.jpeg"
                  />
                </div>
                <div className="bg-white shadow-calendarShadow px-[10px] text-center left-[30px] absolute rounded-b-[10px] top-0">
                  <h4 className="text-textColor2 font-medium text-base">28</h4>
                  <p className="text-textColor3 text-[13.3px] leading-[22px]">
                    Tue
                  </p>
                </div>
              </div>
              <div className="mt-5">
                <h3 className="w-[333px] font-medium text-19.4 leading-29.1">
                  Top 10 Home Buying Mistakes to Avoid
                </h3>
                <p className="mt-5 w-[333px] text-textColor5 leading-26">
                  Etiam eget elementum elit. Aenean dignissim dapibus vestibulum
                </p>
              </div>
            </div>
            <div>
              <div className="rounded-[30px] mt-10 relative w-[333px] ">
                <div className="relative">
                  <div className="bg-[#0000004D] absolute inset-0 rounded-[30px]" />
                  <img
                    className="rounded-[30px] shadow-blogShadow"
                    src="src\assets\images\blog2.jpeg"
                  />
                </div>
                <div className="bg-white shadow-calendarShadow px-[10px] text-center left-[30px] absolute rounded-b-[10px] top-0">
                  <h4 className="text-textColor2 text-base font-medium">08</h4>
                  <p className="text-textColor3 text-[13.3px] leading-[22px]">
                    Mon
                  </p>
                </div>
              </div>
              <div className="mt-5">
                <h3 className="w-[333px] font-medium text-19.4 leading-29.1">
                  How to Stage Your Home for a Quick Sale
                </h3>
                <p className="mt-5 w-[333px] text-textColor5 leading-26">
                  Nullam odio lacus, dictum quis pretium congue, vehicula
                  venenatis nunc.
                </p>
              </div>
            </div>
            <div>
              <div className="rounded-[30px] mt-10 relative w-[333px]">
                <div className="relative">
                  <div className="bg-[#0000004D] absolute inset-0 rounded-[30px]" />
                  <img
                    className="rounded-[30px] shadow-blogShadow"
                    src="src\assets\images\blog3.jpeg"
                  />
                </div>
                <div className="bg-white shadow-calendarShadow text-center px-[10px] left-[30px] absolute rounded-b-[10px] top-0">
                  <h4 className="text-textColor2 text-base font-medium">26</h4>
                  <p className="text-textColor3 text-[13.3px] leading-[22px]">
                    Wed
                  </p>
                </div>
              </div>
              <div className="mt-5">
                <h3 className="w-[333px] font-medium text-19.4 leading-29.1">
                  5 Tips for First-Time Home Sellers
                </h3>
                <p className="mt-5 w-[333px] text-textColor5 leading-26">
                  In hac habitasse platea dictumst. Phasellus vel velit vel
                  augue maximus.
                </p>
              </div>
            </div>
          </div>

          <div className="max-lg:hidden flex w-full mt-[30px] justify-center">
            <div className="w-[440px] flex justify-between">
              <div className="w-[50px] swiper2-prev cursor-pointer bg-white rounded-full h-[50px] flex items-center justify-center">
                <svg
                  className="text-primaryColour"
                  width="22"
                  height="16"
                  viewBox="0 0 22 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 8.98975C21.5523 8.98975 22 8.54203 22 7.98975C22 7.43746 21.5523 6.98975 21 6.98975L21 8.98975ZM0.292893 7.28264C-0.0976314 7.67316 -0.0976315 8.30633 0.292892 8.69685L6.65685 15.0608C7.04738 15.4513 7.68054 15.4513 8.07107 15.0608C8.46159 14.6703 8.46159 14.0371 8.07107 13.6466L2.41421 7.98974L8.07107 2.33289C8.46159 1.94237 8.46159 1.3092 8.07107 0.918677C7.68054 0.528153 7.04738 0.528153 6.65686 0.918677L0.292893 7.28264ZM21 6.98975L1 6.98974L1 8.98974L21 8.98975L21 6.98975Z"
                    fill="#3A0CA3"
                  />
                </svg>
              </div>
              <div className="w-[50px] swiper2-next cursor-pointer bg-white rounded-full rotate-180 h-[50px] flex items-center justify-center">
                <svg
                  className="text-primaryColour"
                  width="22"
                  height="16"
                  viewBox="0 0 22 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 8.98975C21.5523 8.98975 22 8.54203 22 7.98975C22 7.43746 21.5523 6.98975 21 6.98975L21 8.98975ZM0.292893 7.28264C-0.0976314 7.67316 -0.0976315 8.30633 0.292892 8.69685L6.65685 15.0608C7.04738 15.4513 7.68054 15.4513 8.07107 15.0608C8.46159 14.6703 8.46159 14.0371 8.07107 13.6466L2.41421 7.98974L8.07107 2.33289C8.46159 1.94237 8.46159 1.3092 8.07107 0.918677C7.68054 0.528153 7.04738 0.528153 6.65686 0.918677L0.292893 7.28264ZM21 6.98975L1 6.98974L1 8.98974L21 8.98975L21 6.98975Z"
                    fill="#3A0CA3"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex max-lg:hidden w-full mb-[100px] justify-center mt-[70px]">
            <div className="flex justify-between items-center pagination2 !w-[516px] "></div>
          </div>
          <button className="mx-auto mb-[100px] mt-[60px] max-w-[200px] lg:hidden font-medium text-primaryColour bg-white rounded-[30px] px-[30px] py-[19px] border-primaryColour border-[1px]">
            View more blogs
          </button>
        </div>
      </div>
    </div>
  );
}
