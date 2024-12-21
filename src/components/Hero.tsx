export default function Hero() {
  return (
    <div className="relative w-full max-w-[1160px] mx-auto">
      <div className=" w-full flex flex-row justify-between items-start">
        <div className="">
          <div className=" max-h-[14px] mt-[89px]">
            <div className="text-color1 font-medium text-19.4 text-left leading-29.1 tracking-[0.15em]">
              REAL ESTATE
            </div>
          </div>
          <div className="max-w-[580px] h-[105px] mt-[30px]">
            <h1 className="text-textColor1 font-semibold leading-[65px] text-[57.3px]">
              Find a perfect home you love..!
            </h1>
          </div>
          <div className="max-w-[580px] mt-10 leading-26 h-[37px]  ">
            <p className="text-textColor3">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley
            </p>
          </div>
          <div className="mt-10  max-w-[540px]">
            <div className="bg-ellipse-gradient left-0 rounded-full w-[60px] h-[60px] absolute opacity-50 rotate-[30deg]" />
            <div className="shadow-imageShadow rounded-[20px]">
              <div className="">
                <img
                  className="rounded-[20px]"
                  src="../public/images/hotel1.jfif"
                />
              </div>
            </div>
            <div className="text-black flex justify-center">sa</div>
          </div>
        </div>
        <div className="shadow-formShadow flex flex-col w-full max-w-[420px] h-[582px] mt-[124px] rounded-[30px] bg-white ">
          <form></form>
          <div className="px-10 shadow-formShadow  h-[80px] flex  rounded-t-[20px] border-b-[1px] border-[#AAAAAA] bg-white ">
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
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-center mt-[30px] items-center gap-[30px]">
        <div className="w-[360px] flex shadow-formShadow h-[100px] rounded-[50px] bg-white">
          <div className="w-[287px] flex items-center justify-center">
            <div className="w-[151px] text-black">image image image</div>
            <h4 className="text-textColor2 font-medium text-19.4 w-[122px] leading-29.1 ">
              72k+ Happy Customers
            </h4>
          </div>
        </div>
        <div className="w-[320px] flex shadow-formShadow h-[100px] rounded-[50px] bg-white">
          <div className="w-[287px] flex items-center justify-center">
            <div className="w-[60px] h-[60px] text-[#D9D9D9]">image</div>
            <h4 className="text-textColor2 font-medium  text-19.4 w-[174px] leading-29.1 ">
              200+ New Listings Everyday!
            </h4>
          </div>
        </div>
      </div>
      <div className="bg-ellipse-gradient top-[835px] -left-[100px] rounded-full w-[100px] h-[100px] absolute opacity-50 rotate-[-30deg]" />

      <div className=" flex justify-between flex-row">
        <div className="flex flex-col">
          <div className="text-color1 max-h-[14px] mt-[79px] font-medium text-19.4 text-left leading-29.1 tracking-[0.15em]">
            WHO ARE WE
          </div>
          <h2 className="text-textColor2 mt-10 w-[500px] max-h-[122px] font-semibold text-39.8 text-left leading-[47px]">
            Assisting individuals in locating the appropriate real estate.
          </h2>
          <p className="text-textColor3 mt-[30px] leading-26 w-[500px] h-[63px]">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it
          </p>
          <div className="flex mt-10">
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
          <div className="flex mt-10">
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
        <div className="flex bg-[#D9D9D9] shadow-hotelShadow rounded-[30px] mt-[180px] w-[280px] h-[500px]">
          <img
            className="rounded-[30px] object-cover"
            src="../public/images/hotel2.jpeg"
          />
        </div>
        <div>
          <div className="bg-[#D9D9D9] flex shadow-hotelShadow rounded-[30px] ml-5 mt-[133px] h-[280px] w-[277px]">
            <img
              className="rounded-[30px] object-cover"
              src="../public/images/hotel3.jpeg"
            />
          </div>
          <div className="bg-[#D9D9D9] flex shadow-hotelShadow rounded-[30px] ml-5 mt-5 h-[180px] w-[277px]">
            <img
              className="rounded-[30px] flex-1 object-cover"
              src="../public/images/hotel4.jpeg"
            />
          </div>
        </div>
      </div>

      <div className=" flex justify-between flex-row">
        <div className="flex flex-col">
          <div className="text-color1 mt-[200px] max-h-[14px] font-medium text-19.4 text-left leading-29.1 tracking-[0.15em]">
            CHECKOUT OUR NEW
          </div>
          <h2 className="text-textColor2 mt-10 w-[466px] max-h-[28px] font-semibold text-39.8 text-left leading-[47px]">
            Latest Listed Properties
          </h2>
          <p className="text-textColor3 mt-[30px] leading-26 w-[500px] h-[37px]">
            Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
            dignissim purus.
          </p>
        </div>
        <div className="flex gap-5 mt-[200px] items-center">
          <div className="border-primaryColour border-[1px] flex items-center max-h-[49px] rounded-[30px] py-[19px] px-[30px] text-primaryColour">
            <h5 className="text-center font-medium">All</h5>
          </div>
          <div className="border-primaryColour bg-primaryColour flex items-center max-h-[49px] border-[1px] rounded-[30px] py-[19px] px-[30px] ">
            <h5 className="text-center font-medium">Sell</h5>
          </div>
          <div className="border-primaryColour max-h-[49px] flex items-center border-[1px] py-[19px] rounded-[30px] px-[30px] text-primaryColour">
            <h5 className="text-center font-medium">Rent</h5>
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-[50px] w-[1560px] mt-[50px] mb-[95px]">
        <div className="w-[340px] h-[500px]">
          <div className="bg-[#FFE1E1] rounded-[20px] px-6 py-[10px]">
            <button>
              <h5 className="text-[#FF1111] font-medium">Popular</h5>
            </button>
          </div>
          <div className="max-h-[340px] rounded-[30px] w-[340px]">
            <img
              className="rounded-[30px] h-[340px] w-[340px] object-cover"
              src="../public/images/house1.jpeg"
            />
          </div>
          <div className="flex flex-col gap-5 w-[280px] mt-8">
            <h3 className="text-textColor2 h-[19px] font-semibold text-27.6 leading-41.4">
              $ 5,970
            </h3>
            <h4 className="text-textColor2 h-[14px] font-medium text-19.4 leading-29.1">
              Tranquil Haven in the Woods
            </h4>
            <p className="text-textColor3 h-[11px] leading-26">
              103 Wright CourtBurien, WA 98168
            </p>
            <div className="flex gap-5">
              <div className="flex gap-[10px]">
                <svg
                  className="w-[30px] h-[21.5px]"
                  viewBox="0 0 30 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25 5.48975H12V13.0284H10.6154V10.4659C10.6138 9.01407 10.0363 7.62213 9.00971 6.5955C7.9831 5.56887 6.59117 4.99138 5.13931 4.98975H2V0.989746H0V22.4897H2V19.5058L28 19.7138V22.4897H30V10.4897C29.9985 9.16413 29.4712 7.89323 28.5339 6.95587C27.5965 6.01852 26.3256 5.49125 25 5.48975ZM2 6.98975H5.13931C6.0609 6.99079 6.94445 7.35735 7.59611 8.00901C8.24777 8.66067 8.61433 9.54422 8.61537 10.4658V13.0283H2V6.98975ZM28 17.7137L2 17.5057V15.0284H28V17.7137ZM28 13.0284H14V7.48975H25C25.7954 7.49066 26.5579 7.80702 27.1203 8.36943C27.6827 8.93184 27.9991 9.69438 28 10.4897V13.0284Z"
                    fill="#2B2B2B"
                  />
                </svg>
                <p className="text-textColor2 leading-26">4 Beds</p>
              </div>
              <div className="flex gap-[10px] h-[21.5px]">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.4 14.2494H3.2V5.24938C3.19907 4.91045 3.26538 4.5747 3.39509 4.26156C3.5248 3.94843 3.71533 3.66413 3.95565 3.42513L3.97565 3.40513C4.35228 3.02905 4.83584 2.77842 5.36026 2.68748C5.88468 2.59654 6.42438 2.66972 6.90565 2.89703C6.45114 3.65273 6.26222 4.53865 6.36892 5.41402C6.47562 6.28939 6.87181 7.10399 7.49455 7.72838L8.0421 8.27593L7.03425 9.28383L8.16555 10.4151L9.1734 9.40728L14.7579 3.82293L15.7657 2.81508L14.6344 1.68373L13.6264 2.69158L13.0789 2.14403C12.4233 1.4903 11.5592 1.08731 10.637 1.0053C9.71481 0.923285 8.79309 1.16745 8.03245 1.69523C7.23036 1.18869 6.27983 0.97001 5.33702 1.07512C4.39422 1.18023 3.51519 1.60288 2.84435 2.27363L2.82435 2.29363C2.43497 2.68088 2.12627 3.14151 1.91611 3.64887C1.70595 4.15622 1.59851 4.70022 1.6 5.24938V14.2494H0V15.8494H1.6V17.3844C1.59997 17.5134 1.62077 17.6415 1.6616 17.7638L3.15 22.2288C3.22943 22.4679 3.38216 22.6758 3.5865 22.8231C3.79084 22.9704 4.0364 23.0496 4.2883 23.0494H4.9333L4.35 25.0494H6.01665L6.6 23.0494H17.005L17.605 25.0494H19.275L18.675 23.0494H19.7115C19.9634 23.0496 20.209 22.9705 20.4134 22.8232C20.6178 22.6759 20.7706 22.4679 20.85 22.2288L22.3383 17.7638C22.3791 17.6415 22.4 17.5134 22.4 17.3844V15.8494H24V14.2494H22.4ZM8.626 3.27538C9.0668 2.83554 9.66407 2.58852 10.2868 2.58852C10.9095 2.58852 11.5068 2.83554 11.9476 3.27538L12.495 3.82293L9.17355 7.14438L8.626 6.59693C8.18619 6.15612 7.93918 5.55885 7.93918 4.93616C7.93918 4.31346 8.18619 3.71619 8.626 3.27538ZM20.8 17.3194L19.4234 21.4494H4.5766L3.2 17.3194V15.8494H20.8V17.3194Z"
                    fill="#2B2B2B"
                  />
                </svg>
                <p className="text-textColor2 leading-26">3 Bath</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[340px] h-[500px]">
          <div className="max-h-[340px] rounded-[30px] w-[340px]">
            <img
              className="rounded-[30px] h-[340px] w-[340px] object-cover"
              src="../public/images/house2.jpeg"
            />
          </div>
          <div className="flex flex-col gap-5 w-[260px] mt-8">
            <h3 className="text-textColor2 h-[19px] font-semibold text-27.6 leading-41.4">
              $ 1,970
            </h3>
            <h4 className="text-textColor2 h-[14px] font-medium text-19.4 leading-29.1">
              Serene Retreat by the Lake
            </h4>
            <p className="text-textColor3 h-[11px] leading-26">
              1964 Jehovah Drive, VA 22408
            </p>
            <div className="flex gap-5">
              <div className="flex gap-[10px]">
                <svg
                  className="w-[30px] h-[21.5px]"
                  viewBox="0 0 30 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25 5.48975H12V13.0284H10.6154V10.4659C10.6138 9.01407 10.0363 7.62213 9.00971 6.5955C7.9831 5.56887 6.59117 4.99138 5.13931 4.98975H2V0.989746H0V22.4897H2V19.5058L28 19.7138V22.4897H30V10.4897C29.9985 9.16413 29.4712 7.89323 28.5339 6.95587C27.5965 6.01852 26.3256 5.49125 25 5.48975ZM2 6.98975H5.13931C6.0609 6.99079 6.94445 7.35735 7.59611 8.00901C8.24777 8.66067 8.61433 9.54422 8.61537 10.4658V13.0283H2V6.98975ZM28 17.7137L2 17.5057V15.0284H28V17.7137ZM28 13.0284H14V7.48975H25C25.7954 7.49066 26.5579 7.80702 27.1203 8.36943C27.6827 8.93184 27.9991 9.69438 28 10.4897V13.0284Z"
                    fill="#2B2B2B"
                  />
                </svg>
                <p className="text-textColor2 leading-26">3 Beds</p>
              </div>
              <div className="flex gap-[10px] h-[21.5px]">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.4 14.2494H3.2V5.24938C3.19907 4.91045 3.26538 4.5747 3.39509 4.26156C3.5248 3.94843 3.71533 3.66413 3.95565 3.42513L3.97565 3.40513C4.35228 3.02905 4.83584 2.77842 5.36026 2.68748C5.88468 2.59654 6.42438 2.66972 6.90565 2.89703C6.45114 3.65273 6.26222 4.53865 6.36892 5.41402C6.47562 6.28939 6.87181 7.10399 7.49455 7.72838L8.0421 8.27593L7.03425 9.28383L8.16555 10.4151L9.1734 9.40728L14.7579 3.82293L15.7657 2.81508L14.6344 1.68373L13.6264 2.69158L13.0789 2.14403C12.4233 1.4903 11.5592 1.08731 10.637 1.0053C9.71481 0.923285 8.79309 1.16745 8.03245 1.69523C7.23036 1.18869 6.27983 0.97001 5.33702 1.07512C4.39422 1.18023 3.51519 1.60288 2.84435 2.27363L2.82435 2.29363C2.43497 2.68088 2.12627 3.14151 1.91611 3.64887C1.70595 4.15622 1.59851 4.70022 1.6 5.24938V14.2494H0V15.8494H1.6V17.3844C1.59997 17.5134 1.62077 17.6415 1.6616 17.7638L3.15 22.2288C3.22943 22.4679 3.38216 22.6758 3.5865 22.8231C3.79084 22.9704 4.0364 23.0496 4.2883 23.0494H4.9333L4.35 25.0494H6.01665L6.6 23.0494H17.005L17.605 25.0494H19.275L18.675 23.0494H19.7115C19.9634 23.0496 20.209 22.9705 20.4134 22.8232C20.6178 22.6759 20.7706 22.4679 20.85 22.2288L22.3383 17.7638C22.3791 17.6415 22.4 17.5134 22.4 17.3844V15.8494H24V14.2494H22.4ZM8.626 3.27538C9.0668 2.83554 9.66407 2.58852 10.2868 2.58852C10.9095 2.58852 11.5068 2.83554 11.9476 3.27538L12.495 3.82293L9.17355 7.14438L8.626 6.59693C8.18619 6.15612 7.93918 5.55885 7.93918 4.93616C7.93918 4.31346 8.18619 3.71619 8.626 3.27538ZM20.8 17.3194L19.4234 21.4494H4.5766L3.2 17.3194V15.8494H20.8V17.3194Z"
                    fill="#2B2B2B"
                  />
                </svg>
                <p className="text-textColor2 leading-26">2 Bath</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[340px] h-[500px]">
          <div className="max-h-[340px] rounded-[30px] w-[340px]">
            <img
              className="rounded-[30px] h-[340px] w-[340px] object-cover"
              src="../public/images/house3.jpeg"
            />
          </div>
          <div className="flex flex-col gap-5 w-[333px] mt-8">
            <h3 className="text-textColor2 h-[19px] font-semibold text-27.6 leading-41.4">
              $ 3,450
            </h3>
            <h4 className="text-textColor2 h-[14px] font-medium text-19.4 leading-29.1">
              Charming Cottage in the Meadow
            </h4>
            <p className="text-textColor3 h-[11px] leading-26">
              1508 Centennial Farm RoadHarlan, 51537
            </p>
            <div className="flex gap-5">
              <div className="flex gap-[10px]">
                <svg
                  className="w-[30px] h-[21.5px]"
                  viewBox="0 0 30 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25 5.48975H12V13.0284H10.6154V10.4659C10.6138 9.01407 10.0363 7.62213 9.00971 6.5955C7.9831 5.56887 6.59117 4.99138 5.13931 4.98975H2V0.989746H0V22.4897H2V19.5058L28 19.7138V22.4897H30V10.4897C29.9985 9.16413 29.4712 7.89323 28.5339 6.95587C27.5965 6.01852 26.3256 5.49125 25 5.48975ZM2 6.98975H5.13931C6.0609 6.99079 6.94445 7.35735 7.59611 8.00901C8.24777 8.66067 8.61433 9.54422 8.61537 10.4658V13.0283H2V6.98975ZM28 17.7137L2 17.5057V15.0284H28V17.7137ZM28 13.0284H14V7.48975H25C25.7954 7.49066 26.5579 7.80702 27.1203 8.36943C27.6827 8.93184 27.9991 9.69438 28 10.4897V13.0284Z"
                    fill="#2B2B2B"
                  />
                </svg>
                <p className="text-textColor2 leading-26">4 Beds</p>
              </div>
              <div className="flex gap-[10px] h-[21.5px]">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.4 14.2494H3.2V5.24938C3.19907 4.91045 3.26538 4.5747 3.39509 4.26156C3.5248 3.94843 3.71533 3.66413 3.95565 3.42513L3.97565 3.40513C4.35228 3.02905 4.83584 2.77842 5.36026 2.68748C5.88468 2.59654 6.42438 2.66972 6.90565 2.89703C6.45114 3.65273 6.26222 4.53865 6.36892 5.41402C6.47562 6.28939 6.87181 7.10399 7.49455 7.72838L8.0421 8.27593L7.03425 9.28383L8.16555 10.4151L9.1734 9.40728L14.7579 3.82293L15.7657 2.81508L14.6344 1.68373L13.6264 2.69158L13.0789 2.14403C12.4233 1.4903 11.5592 1.08731 10.637 1.0053C9.71481 0.923285 8.79309 1.16745 8.03245 1.69523C7.23036 1.18869 6.27983 0.97001 5.33702 1.07512C4.39422 1.18023 3.51519 1.60288 2.84435 2.27363L2.82435 2.29363C2.43497 2.68088 2.12627 3.14151 1.91611 3.64887C1.70595 4.15622 1.59851 4.70022 1.6 5.24938V14.2494H0V15.8494H1.6V17.3844C1.59997 17.5134 1.62077 17.6415 1.6616 17.7638L3.15 22.2288C3.22943 22.4679 3.38216 22.6758 3.5865 22.8231C3.79084 22.9704 4.0364 23.0496 4.2883 23.0494H4.9333L4.35 25.0494H6.01665L6.6 23.0494H17.005L17.605 25.0494H19.275L18.675 23.0494H19.7115C19.9634 23.0496 20.209 22.9705 20.4134 22.8232C20.6178 22.6759 20.7706 22.4679 20.85 22.2288L22.3383 17.7638C22.3791 17.6415 22.4 17.5134 22.4 17.3844V15.8494H24V14.2494H22.4ZM8.626 3.27538C9.0668 2.83554 9.66407 2.58852 10.2868 2.58852C10.9095 2.58852 11.5068 2.83554 11.9476 3.27538L12.495 3.82293L9.17355 7.14438L8.626 6.59693C8.18619 6.15612 7.93918 5.55885 7.93918 4.93616C7.93918 4.31346 8.18619 3.71619 8.626 3.27538ZM20.8 17.3194L19.4234 21.4494H4.5766L3.2 17.3194V15.8494H20.8V17.3194Z"
                    fill="#2B2B2B"
                  />
                </svg>
                <p className="text-textColor2 leading-26">4 Bath</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[340px] h-[500px]">
          <div className="max-h-[340px] rounded-[30px] w-[340px]">
            <img
              className="rounded-[30px] h-[340px] w-[340px] object-cover"
              src="../public/images/house4.jpeg"
            />
          </div>
          <div className="flex flex-col gap-5 w-[264px] mt-8">
            <h3 className="text-textColor2 h-[19px] font-semibold text-27.6 leading-41.4">
              $ 2,389
            </h3>
            <h4 className="text-textColor2 h-[14px] font-medium text-19.4 leading-29.1">
              Grand Estate on the Hilltop
            </h4>
            <p className="text-textColor3 h-[11px] leading-26">
              103 Wright CourtBurien, WA 98168
            </p>
            <div className="flex gap-5">
              <div className="flex gap-[10px]">
                <svg
                  className="w-[30px] h-[21.5px]"
                  viewBox="0 0 30 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25 5.48975H12V13.0284H10.6154V10.4659C10.6138 9.01407 10.0363 7.62213 9.00971 6.5955C7.9831 5.56887 6.59117 4.99138 5.13931 4.98975H2V0.989746H0V22.4897H2V19.5058L28 19.7138V22.4897H30V10.4897C29.9985 9.16413 29.4712 7.89323 28.5339 6.95587C27.5965 6.01852 26.3256 5.49125 25 5.48975ZM2 6.98975H5.13931C6.0609 6.99079 6.94445 7.35735 7.59611 8.00901C8.24777 8.66067 8.61433 9.54422 8.61537 10.4658V13.0283H2V6.98975ZM28 17.7137L2 17.5057V15.0284H28V17.7137ZM28 13.0284H14V7.48975H25C25.7954 7.49066 26.5579 7.80702 27.1203 8.36943C27.6827 8.93184 27.9991 9.69438 28 10.4897V13.0284Z"
                    fill="#2B2B2B"
                  />
                </svg>
                <p className="text-textColor2 leading-26">4 Beds</p>
              </div>
              <div className="flex gap-[10px] h-[21.5px]">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.4 14.2494H3.2V5.24938C3.19907 4.91045 3.26538 4.5747 3.39509 4.26156C3.5248 3.94843 3.71533 3.66413 3.95565 3.42513L3.97565 3.40513C4.35228 3.02905 4.83584 2.77842 5.36026 2.68748C5.88468 2.59654 6.42438 2.66972 6.90565 2.89703C6.45114 3.65273 6.26222 4.53865 6.36892 5.41402C6.47562 6.28939 6.87181 7.10399 7.49455 7.72838L8.0421 8.27593L7.03425 9.28383L8.16555 10.4151L9.1734 9.40728L14.7579 3.82293L15.7657 2.81508L14.6344 1.68373L13.6264 2.69158L13.0789 2.14403C12.4233 1.4903 11.5592 1.08731 10.637 1.0053C9.71481 0.923285 8.79309 1.16745 8.03245 1.69523C7.23036 1.18869 6.27983 0.97001 5.33702 1.07512C4.39422 1.18023 3.51519 1.60288 2.84435 2.27363L2.82435 2.29363C2.43497 2.68088 2.12627 3.14151 1.91611 3.64887C1.70595 4.15622 1.59851 4.70022 1.6 5.24938V14.2494H0V15.8494H1.6V17.3844C1.59997 17.5134 1.62077 17.6415 1.6616 17.7638L3.15 22.2288C3.22943 22.4679 3.38216 22.6758 3.5865 22.8231C3.79084 22.9704 4.0364 23.0496 4.2883 23.0494H4.9333L4.35 25.0494H6.01665L6.6 23.0494H17.005L17.605 25.0494H19.275L18.675 23.0494H19.7115C19.9634 23.0496 20.209 22.9705 20.4134 22.8232C20.6178 22.6759 20.7706 22.4679 20.85 22.2288L22.3383 17.7638C22.3791 17.6415 22.4 17.5134 22.4 17.3844V15.8494H24V14.2494H22.4ZM8.626 3.27538C9.0668 2.83554 9.66407 2.58852 10.2868 2.58852C10.9095 2.58852 11.5068 2.83554 11.9476 3.27538L12.495 3.82293L9.17355 7.14438L8.626 6.59693C8.18619 6.15612 7.93918 5.55885 7.93918 4.93616C7.93918 4.31346 8.18619 3.71619 8.626 3.27538ZM20.8 17.3194L19.4234 21.4494H4.5766L3.2 17.3194V15.8494H20.8V17.3194Z"
                    fill="#2B2B2B"
                  />
                </svg>
                <p className="text-textColor2 leading-26">3 Bath</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
