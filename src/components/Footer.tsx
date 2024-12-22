export default function Footer() {
  return (
    <footer className="bg-black w-full px-6">
      <div className="max-w-[1160px] w-full h-10 mx-auto flex flex-row justify-between items-center  text-textColor4 max-lg:justify-center">
        <p className="text-[16px] leading-26">
          © Company – All rights reserved
        </p>
        <div className="flex gap-8 max-lg:hidden">
          <p className="text-right">Terms and Conditions</p>
          <p className="text-right">Privacy Policy</p>
          <p className="text-right">Disclaimer</p>
        </div>
      </div>
    </footer>
  );
}
