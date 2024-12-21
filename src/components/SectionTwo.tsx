export default function SectionTwo() {
  return (
    <div className="relative mx-auto bg-primaryColour">
      <div className="relative w-full max-w-[1160px] mx-auto">
        <div className=" w-full flex flex-col">
          <div className="h-[14px] text-19.4 w-full justify-center leading-29.1 text-center font-medium tracking-[0.15em] mt-[110px]">
            WHAT’S TRENDING
          </div>
          <div className="w-full justify-center h-[28px] text-39.8 leading-[47px] text-center font-semibold mt-[30px]">
            Latest Blogs & Posts
          </div>
          <div className="flex mt-[80px] w-full justify-center gap-[50px]">
            <div>
              <div className="rounded-[30px] relative w-[340px] h-[240px]">
                <img
                  className="rounded-[30px]"
                  src="../public/images/blog1.jpeg"
                />
                <div className="bg-white shadow-calendarShadow flex flex-col gap-[5px] p-[10px] text-center left-[50px] absolute rounded-b-[10px] top-0">
                  <h4 className="text-textColor2 max-h-[14px] text-19.4 leading-29.1 font-medium">
                    28
                  </h4>
                  <p className="text-textColor3 h-[11px] text-[16px] leading-26">
                    Tue
                  </p>
                </div>
              </div>
              <div className="mt-[30px]">
                <h3 className="w-[340px] font-medium text-27.6 leading-41.4 ">
                  Top 10 Home Buying Mistakes to Avoid
                </h3>
                <p className="mt-4 w-[340px] text-textColor5 leading-26">
                  Etiam eget elementum elit. Aenean dignissim dapibus vestibulum
                </p>
              </div>
            </div>
            <div>
              <div className="rounded-[30px] relative w-[340px] h-[240px]">
                <img
                  className="rounded-[30px]"
                  src="../public/images/blog2.jpeg"
                />
                <div className="bg-white shadow-calendarShadow text-center w-[55px] max-h-[50px] left-[50px] absolute rounded-b-[10px] top-0">
                  <h4 className="text-textColor2 text-19.4 leading-29.1 font-medium">
                    08
                  </h4>
                  <p className="text-textColor3 text-[16px] leading-26">Mon</p>
                </div>
              </div>
              <div className="mt-[30px]">
                <h3 className="w-[340px] font-medium text-27.6 leading-41.4 ">
                  How to Stage Your Home for a Quick Sale
                </h3>
                <p className="mt-4 w-[340px] text-textColor5 leading-26">
                  Nullam odio lacus, dictum quis pretium congue, vehicula
                  venenatis nunc.
                </p>
              </div>
            </div>
            <div>
              <div className="rounded-[30px] relative w-[340px] h-[240px]">
                <img
                  className="rounded-[30px] bg-layered-gradient shadow-blogShadow"
                  src="../public/images/blog3.jpeg"
                />
                {/* @TODO */}
                <div className="bg-white shadow-calendarShadow text-center w-[57px] max-h-[50px] left-[50px] absolute rounded-b-[10px] top-0">
                  <h4 className="text-textColor2 text-19.4 leading-29.1 font-medium">
                    26
                  </h4>
                  <p className="text-textColor3 text-[16px] leading-26">Wed</p>
                </div>
              </div>
              <div className="mt-[30px]">
                <h3 className="w-[340px] font-medium text-27.6 leading-41.4 ">
                  5 Tips for First-Time Home Sellers
                </h3>
                <p className="mt-4 w-[340px] text-textColor5 leading-26">
                  In hac habitasse platea dictumst. Phasellus vel velit vel
                  augue maximus.
                </p>
              </div>
            </div>
          </div>
          <div className="flex w-full mt-[30px] justify-center">
            <div className="w-[440px] flex justify-between">
              <div className="w-[50px] bg-white rounded-full h-[50px] flex items-center justify-center">
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
              <div className="w-[50px] bg-white rounded-full rotate-180 h-[50px] flex items-center justify-center">
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
          <div className="flex justify-center mb-[100px] w-full mt-[70px]">
            lines
          </div>
        </div>
      </div>
    </div>
  );
}
