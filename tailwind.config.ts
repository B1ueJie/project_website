import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
				"nier":
					"linear-gradient(to right, #ccc8b1 1px, rgba(204,200,177,0) 1px), linear-gradient(to bottom, #ccc8b1 1px, rgba(204,200,177,0) 1px)"
			},
			fontFamily: {
				nier: ["Helvetica", "ui-sans-serif"]
			},
			colors: {
				tan: {
					DEFAULT: '#B3C4D6'
				},
				brown: {
					DEFAULT: '#243042'
				},
				yellowgray:{
					DEFAULT: '#96AAC5'
				}
			}
		}
	},
	plugins: [],
};
export default config;
