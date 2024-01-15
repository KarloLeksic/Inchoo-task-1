/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                black1: {
                    333: "#333333"
                },
                gray: "#4B545C",
                link: "#09A8D6",
                yellow: "#FFBC00"
            },
            lineHeight: {
                12: "3rem"
            },
            fontSize: {
                7: "1.75rem"
            },
            borderWidth: {
                1: "1px"
            },
            backgroundImage: {
                'hero-gradient': "url('img/header-bg.svg')",
            },
            backgroundSize: {
                400: "400%"
            },
            fontFamily: {
                amaranth: ['Amaranth', 'sans-serif'],
                raleway: ['Raleway', 'sans-serif'],
                inter: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}

