/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      color: {
        primary: "#f66f67",
      },
      gridTemplateColumns: {
        "grid-cards": "repeat(auto-fit, minmax(15rem, 1fr))",
      },
      fontSize: {
        "responsite-text": "clamp(1.2rem, 3vw, 3rem)",
        "responsite-text-title": "clamp(4rem, 5vw, 6rem)",
      },
      flex: {
        layout1: "1 1 30%",
        layout2: "1 1 70%",
      },
      height: {
        "calculated-height": "calc(100vh - 122.359375px)",
      },
    },
  },
  plugins: [],
  // plugins: [require("@tailwindcss/forms")],
};
