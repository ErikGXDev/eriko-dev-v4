/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        "brand-style":
          '"Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
      },
      colors: {
        brand: {
          orange: {
            50: "#fffcea",
            100: "#fff5c4",
            200: "#ffea84",
            300: "#ffd844",
            400: "#ffc419",
            500: "#ffa100",
            600: "#e47800",
            700: "#c75600",
            800: "#993e07",
            900: "#7e3309",
            950: "#481900",
          },
          red: {
            50: "#fef4f2",
            100: "#fee7e2",
            200: "#fed3ca",
            300: "#fdb3a4",
            400: "#f98670",
            500: "#ef5132",
            600: "#dd4325",
            700: "#ba351b",
            800: "#9a2f1a",
            900: "#802c1c",
            950: "#45140a",
          },
          fuchsia: {
            50: "#fff0f9",
            100: "#ffe3f6",
            200: "#ffc6ec",
            300: "#ff98db",
            400: "#ff58c0",
            500: "#ff27a5",
            600: "#ff0582",
            700: "#df0063",
            800: "#b80052",
            900: "#980347",
            950: "#5f0026",
          },
          dark: {
            50: "#f6f7f7",
            100: "#e3e4e4",
            200: "#c6c9c8",
            300: "#a2a6a6",
            400: "#7e8383",
            500: "#636968",
            600: "#4e5352",
            700: "#414444",
            800: "#363939",
            900: "#303131",
            950: "#111212",
          },
        },
      },
    },
  },
  plugins: [],
};
