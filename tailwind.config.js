const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: "#0095f6",
					4: "#47afff",
					5: "#0095f6",
					6: "#0074cc",
					7: "#0057a3",
					9: "#002952",
				},
				link: "#00376b",
				dark: {
					default: "#262626",
					he: "#262626",
					me: "#8e8e8e",
					le: "#c7c7c7",
				},
				button: {
					secondary: "rgb(38,38,38)",
				},
				stroke: "#dbdbdb",
			},
			fontFamily: {
				sans: [
					"-apple-system",
					"BlinkMacSystemFont",
					"Segoe UI",
					"Roboto",
					"Helvetica",
					"Arial",
					"sans-serif",
				],
			},
		},
	},
	plugins: [],
};
