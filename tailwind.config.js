/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B2440",
          50: "#EAF0F6",
          100: "#CBD9E6",
          200: "#9FB8CE",
          300: "#6E93B2",
          400: "#3F6E93",
          500: "#1C4B72",
          600: "#123A5C",
          700: "#0F2F4C",
          800: "#0B2440",
          900: "#081A30",
          950: "#050F1D",
        },
        brand: {
          orange: "#F2711C",
          orangeDark: "#D9600F",
          orangeLight: "#FF9142",
        },
      },
      fontFamily: {
        display: ["'Plus Jakarta Sans'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 30px -12px rgba(11,36,64,0.18)",
        cardHover: "0 20px 45px -15px rgba(11,36,64,0.28)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(180deg, rgba(5,15,29,0.35) 0%, rgba(5,15,29,0.65) 55%, rgba(5,15,29,0.92) 100%)",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        floaty: "floaty 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
