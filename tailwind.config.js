/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#fffef9",
          "200": "#8d8d8d",
          "300": "#808080",
          "400": "#141b34",
        },
        white: "#fff",
        khaki: {
          "100": "#d9ed82",
          "200": "#bfd469",
          "300": "rgba(191, 212, 105, 0.49)",
          "400": "rgba(216, 236, 129, 0.49)",
        },
        darkgray: {
          "100": "#adadad",
          "200": "#ababab",
        },
        maroon: "#611502",
        black: "#000",
        dodgerblue: "#4285f4",
        yellowgreen: "#aec742",
        darkblue: "#000088",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
      },
      borderRadius: {
        "21xl": "40px",
        "4xs": "9px",
        "3xs": "10px",
      },
    },
    fontSize: {
      base: "16px",
      sm: "14px",
      xl: "20px",
      inherit: "inherit",
    },
    screens: {
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};