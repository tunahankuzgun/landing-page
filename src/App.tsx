function App() {
  return (
    <>
      <div className="h-screen w-full text-white">
        <header className="bg-primaryColour w-full px-6">
          <div className="max-w-[1240px] w-full h-10 mx-auto flex flex-row justify-between items-center">
            <div className="flex justify-between">
              <svg
                className=""
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  d="M13 7.4C13 10.9346 7 17 7 17C7 17 1 10.9346 1 7.4C1 3.86538 3.68629 1 7 1C10.3137 1 13 3.86538 13 7.4Z"
                  stroke="white"
                  stroke-width="1.2"
                />
                <path
                  d="M7 8.19998C7.41422 8.19998 7.75 7.84182 7.75 7.39998C7.75 6.95815 7.41422 6.59998 7 6.59998C6.58578 6.59998 6.25 6.95815 6.25 7.39998C6.25 7.84182 6.58578 8.19998 7 8.19998Z"
                  fill="#2B2B2B"
                  stroke="white"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div className="font-normal text-[13.3px] text-left decoration-skip-ink-0">
                Lorem Ipsum has been the industry's standard dummy
              </div>
            </div>
            <div className="flex flex-row">
              <div className="mr-8">info 1</div>
              <div>info 2</div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}

export default App;
