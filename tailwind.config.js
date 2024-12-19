/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColour: "#3A0CA3",
        navbarTextColor: "#2B2B2B",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(180deg, rgba(76, 201, 240, 0), rgba(67, 97, 238, 0.3))",
      },
      boxShadow: {
        formShadow: "10px 30px 50px 0px rgba(0, 0, 0, 0.05)", // #0000000D in hex equals rgba(0, 0, 0, 0.05)
      },
      boxShadow: {
        imageShadow: "10px 10px 40px 0px rgba(0, 0, 0, 0.2)", // Custom shadow
      },
    },
  },
  plugins: [],
};
