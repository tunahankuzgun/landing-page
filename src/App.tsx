import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SectionFour from "./components/SectionFour";
import SectionThree from "./components/SectionThree";
import SectionTwo from "./components/SectionTwo";

function App() {
  return (
    <>
      <div
        style={{ overflowX: "hidden" }}
        className="h-screen w-full text-white"
      >
        <Header />
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-screen -z-10">
            <div className="mx-auto max-w-[1440px] w-full h-[902px] rounded-b-full overflow-hidden bg-custom-gradient"></div>
          </div>
        </div>
        <Navbar />
        <Hero />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <Footer />
      </div>
    </>
  );
}

export default App;
