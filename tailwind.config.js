/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                primary: "#09A8D6",
                secondary: {
                    10: "#BABABA",
                    20: "#333333",
                },
                tertiary: "#FB0",
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
                'waves': "url('img/waves.svg')",
                'city': "url('img/bg-city.svg')",
            },
            backgroundSize: {
                350: "350%",
            },
            fontFamily: {
                amaranth: ['Amaranth', 'sans-serif'],
                raleway: ['Raleway', 'sans-serif'],
                inter: ['Inter', 'sans-serif'],
            },
            aspectRatio: {
                prop: "120 / 61",
            },
            minHeight: {
                106: "27rem",
            },
            backgroundPosition: {
                'center-70': "50% 70%",
                'center-top': "center top",
            }
        },
    },
    plugins: [],
}

