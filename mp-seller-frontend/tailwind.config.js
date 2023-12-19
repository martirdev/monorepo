/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "**/*.{ts,tsx,html}"],
    theme: {
        extend: {},
    },
    plugins: [require("@tailwindcss/typography")],
    corePlugins: { preflight: false },
};
