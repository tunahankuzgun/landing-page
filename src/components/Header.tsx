export default function Header() {
  return (
    <header className="bg-primaryColour w-full px-[30px] max-lg:hidden">
      <div className="max-w-[1240px] w-full h-10 mx-auto flex flex-row justify-between items-center">
        <div className="flex h-4 gap-2 items-center">
          <svg
            className="w-3 top-3"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            viewBox="0 0 14 18"
          >
            <path d="M13 7.4C13 10.9346 7 17 7 17C7 17 1 10.9346 1 7.4C1 3.86538 3.68629 1 7 1C10.3137 1 13 3.86538 13 7.4Z" />
            <path d="M7 8.19998C7.41422 8.19998 7.75 7.84182 7.75 7.39998C7.75 6.95815 7.41422 6.59998 7 6.59998C6.58578 6.59998 6.25 6.95815 6.25 7.39998C6.25 7.84182 6.58578 8.19998 7 8.19998Z" />
          </svg>
          <p className="font-normal text-[13.3px] leading-[22px] text-left">
            Lorem Ipsum has been the industry's standard dummy
          </p>
        </div>
        <div className="flex h-4 flex-row items-center">
          <div className="mr-[57px] gap-1.5 h-4 flex justify-between">
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 16 16"
              strokeWidth="1.2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.5425 1.66261L15.5161 1.64609L12.1749 0L8.56855 4.8084L10.2277 7.02078C10.1781 7.85512 9.82426 8.6423 9.23324 9.23331C8.64223 9.82432 7.85504 10.1781 7.0207 10.2278L4.80836 8.56859L0 12.1748L1.6324 15.4881L1.64613 15.5161L1.66269 15.5425C1.7498 15.6829 1.87139 15.7986 2.01588 15.8787C2.16036 15.9587 2.32295 16.0005 2.48814 16H3.3503C5.01148 16 6.6564 15.6728 8.19114 15.0371C9.72587 14.4014 11.1204 13.4696 12.295 12.295C13.4696 11.1203 14.4014 9.72584 15.0371 8.1911C15.6728 6.65636 16 5.01144 16 3.35026V2.48807C16.0005 2.32287 15.9588 2.16029 15.8787 2.0158C15.7986 1.87131 15.6829 1.74972 15.5425 1.66261ZM14.7653 3.35026C14.7653 9.64451 9.64451 14.7653 3.3503 14.7653H2.65267L1.56047 12.548L4.8086 10.1119L6.61698 11.4682H6.82276C8.05445 11.4668 9.23529 10.9769 10.1062 10.106C10.9772 9.23502 11.4671 8.05418 11.4684 6.82249V6.61671L10.1122 4.80836L12.548 1.56043L14.7653 2.65283V3.35026Z"
                fill="white"
              />
            </svg>
            <p className="text-[13.3px] leading-[22px] text-right">
              +90123 45 67
            </p>
          </div>
          <div className="gap-[7px] mr-8 flex items-center">
            <svg
              className="w-4 h-[11.2px]"
              viewBox="0 0 18 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 4.20001L9 7.00001L13 4.20001"
                stroke="white"
                strokeWidth="1.2"
              />
              <path
                d="M1 10.6V2.6C1 1.71634 1.71634 1 2.6 1H15.4C16.2837 1 17 1.71634 17 2.6V10.6C17 11.4837 16.2837 12.2 15.4 12.2H2.6C1.71634 12.2 1 11.4837 1 10.6Z"
                stroke="white"
                strokeWidth="1.2"
              />
            </svg>
            <p className=" leading-[22px] decoration-skip-none text-[13.3px] text-right">
              mail@mail.com
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
