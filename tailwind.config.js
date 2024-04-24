/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "nohemiBlack" : "nohemiBlack, san-serif",
        "nohemiExtraBold" : "nohemiExtraBold, san-serif",
        "nohemiBold" : "nohemiBold, san-serif",
        "nohemiSemiBold" : "nohemiSemiBold, san-serif",
        "nohemiMedium" : "nohemiMedium, san-serif",
        "nohemiRegular" : "nohemiRegular, san-serif",
        "nohemiLight" : "nohemiLight, san-serif",
        "nohemiExtraLight" : "nohemiExtraLight, san-serif",
        "nohemiThin" : "nohemiThin, san-serif",
      }
    },
  },
  plugins: [],
}

