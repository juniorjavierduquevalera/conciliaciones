import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background-login': "url('/background-login.jpg')",
        'background-login2': "url('/background-login (2).jpg')",
        'background-login3': "url('/background-login3.jpg')"
      }
    },
  },
  plugins: [],
} satisfies Config;
