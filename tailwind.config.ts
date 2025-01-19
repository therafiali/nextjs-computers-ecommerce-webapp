import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FFB800',
          dark: '#E6A600',
          light: '#FFC933',
        },
        secondary: {
          DEFAULT: '#1E242C',
          dark: '#151A20',
          light: '#2A3441',
        },
      },
      backgroundColor: {
        light: '#FFFFFF',
        dark: '#1E242C',
      },
      textColor: {
        light: '#1E242C',
        dark: '#FFFFFF',
        muted: '#6B7280',
      },
      borderColor: {
        light: '#E5E7EB',
        dark: '#374151',
      },
    },
  },
  plugins: [],
};

export default config;
