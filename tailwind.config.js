/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColour: "#3A0CA3",
        color1: "#4361EE",
        textColor1: "#0B090A",
        textColor2: "#2B2B2B",
        textColor3: "#808080",
        textColor4: "#AAAAAA",
        textColor5: "#D4D4D4",
        transparentBg: "rgba(67, 97, 238, 0.1)",
        formBackground: "rgba(212, 212, 212, 0.2)",
        formText: "rgba(109, 106, 117, 0.5)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        19.4: "19.4px",
        39.8: "39.8px",
        27.6: "27.6px",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(180deg, rgba(76, 201, 240, 0), rgba(67, 97, 238, 0.3))",
        "ellipse-gradient":
          " linear-gradient(180deg, #4361EE 0%, rgba(67, 97, 238, 0) 100%)",
        "photo-gradient":
          "linear-gradient(0deg, #D9D9D9, #D9D9D9),linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%)",
        "custom-gradient-2": 
        "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%)",
      },
      boxShadow: {
        formShadow: "10px 30px 50px 0px rgba(0, 0, 0, 0.05)",
        imageShadow: "10px 10px 40px 0px rgba(0, 0, 0, 0.2)",
        section1Shadow: "4px 10px 30px 0px rgba(0, 0, 0, 0.06)",
        hotelShadow: "4px 10px 30px 0px rgba(0, 0, 0, 0.15)",
        blogShadow: "10px 10px 30px 0px rgba(0, 0, 0, 0.2)",
        calendarShadow: "4px 4px 15px 0px rgba(0, 0, 0, 0.25)",
        section3Shadow: "10px 10px 30px 0px rgba(0, 0, 0, 0.1)",
      },
      lineHeight: {
        26: "26px",
        29.1: "29.1px",
        41.4: "41.4px",
        47: "47px",
      },
    },
  },
  plugins: [],
};
