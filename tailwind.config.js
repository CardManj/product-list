/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        Mobile: "375px",
        Desktop: "1440px",
      },
      colors: {
        MentorRed: "hsl(14, 86%, 42%)",
        MentorGreen: "hsl(159, 69%, 38%),",
        "MentorRose/50": "hsl(20, 50%, 98%)",
        "MentorRose/100": "hsl(13, 31%, 94%)",
        "MentorRose/300": "hsl(14, 25%, 72%)",
        "MentorRose/400": "hsl(7, 20%, 60%)",
        "MentorRose/500": "hsl(12, 20%, 44%)",
        "MentorRose/900": "hsl(14, 65%, 9%)",
      },
    },
  },
  plugins: [],
};
