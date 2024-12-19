export default function Hero() {
  return (
    <div className="flex flex-col">
      <div className="flex">
        <div>
          <div className="max-w-[1240px] ml-[161px] max-h-[14px] mt-[89px]">
            <text className=" text-[#4361EE] font-medium text-[19.4px] text-left leading-[29.1px] tracking-[0.15em]">
              REAL ESTATE
            </text>
          </div>
          <div className="max-w-[580px] ml-[160px] h-[105px] mt-[30px] ">
            <h1 className="text-[#0B090A] font-semibold leading-[65px] text-[57.3px]">
              Find a perfect home you love..!
            </h1>
          </div>
          <div className="max-w-[580px] ml-[160px] mt-10 leading-[26px] h-[37px]  ">
            <p className="text-[#808080]">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley
            </p>
          </div>
          <div className="h-[580px] w-[351px]">
            <div className="w-[540px] items-center jus h-[340px] mt-10 ml-[160px]">
              <img
                className=" object-none rounded-[20px] shadow-imageShadow"
                src="../public/images/hotel1.png"
              ></img>
            </div>
          </div>
        </div>

        <div className="shadow-formShadow w-[420px] h-[582px] mt-[124px] ml-[120px] rounded-[30px] bg-white ">
          <form></form>
        </div>
      </div>
      <div className="flex flex-row mt-[60px] justify-center items-center gap-[30px]">
        <div className="w-[360px] shadow-formShadow h-[100px] rounded-[50px] bg-white">
          <div className="w-[287px] flex justify-center items-center">
            <p className="text-black  justify-center ">asd</p>
          </div>
        </div>
        <div className="w-[360px] shadow-formShadow h-[100px] rounded-[50px] bg-white">
          <div className="w-[287px] flex justify-center items-center">
            <p className="text-black  justify-center ">asd</p>
          </div>
        </div>
      </div>
    </div>
  );
}
