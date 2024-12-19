export default function Footer() {
  return (
    <footer className="bg-black w-full px-6 max-sm:hidden">
      <div className="max-w-[1240px] w-full h-10 mx-auto flex flex-row justify-between items-center  text-[#AAAAAA]">
        <p className="text-[16px] leading-[26px]">
          © Company – All rights reserved
        </p>
        <div className="flex gap-8">
          <p className="text-right">Terms and Conditions</p>
          <p className="text-right">Privacy Policy</p>
          <p className="text-right">Disclaimer</p>
        </div>
      </div>
    </footer>
  );
}
