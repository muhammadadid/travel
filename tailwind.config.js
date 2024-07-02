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
          "100": "#fcfcfc",
          "200": "rgba(0, 0, 0, 0.1)",
        },
        royalblue: {
          "100": "#5c82fa",
          "200": "#4169e1",
        },
        black: "#000",
        white: "#fff",
        dimgray: "#5b5b5b",
        silver: "#b5b5b5",
        whitesmoke: "#eaeaea",
      },
      spacing: {},
      fontFamily: {
        urbanist: "Urbanist",
      },
      borderRadius: {
        "26xl": "45px",
        "3xs": "10px",
      },
    },
    fontSize: {
      "5xl": "24px",
      lgi: "19px",
      xl: "20px",
      base: "16px",
      "29xl": "48px",
      "19xl": "38px",
      "10xl": "29px",
      inherit: "inherit",
    },
    screens: {
      mq1425: {
        raw: "screen and (max-width: 1425px)",
      },
      lg: {
        max: "1200px",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
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
