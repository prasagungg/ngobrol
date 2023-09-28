import type { Config } from "tailwindcss";

import tailwind from "tailwindcss/defaultTheme";

const colors = {
  ...tailwind.colors,
  ...{
    "aero-blue": "#CEF1E5",
    "forest-green": "#51AA77",
    "majorelle-blue": "#5C42E2",
    "earth-yellow": "#E8AB63",
    "mid-blue-purple": "#8A6DC8",
    "vampire-black": "#070807",
    "main-white": "#FFFFFF",
    "spanish-gray": "#989898",
    "gray-platinum": "#E7E7E7",
    "deep-carrot-orange": "#EC692C",
    yellow: "#F9EC82",
  },
};

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: colors,
    },
  },
  plugins: [],
};
export default config;
