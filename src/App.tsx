import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="h-screen w-full text-white">
        <Header />
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-screen -z-10">
            <div className="mx-auto max-w-[1440px] w-full h-[902px] rounded-b-full overflow-hidden bg-custom-gradient"></div>
          </div>
          <Navbar />
        </div>
      </div>
    </>
  );
}

export default App;
