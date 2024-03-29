/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                primary: "#09A8D6",
                secondary: {
                    0: "#CCCCCC",
                    10: "#BABABA",
                    15: "#4B545C",
                    20: "#333333",
                },
                tertiary: "#FB0",
                link: "#09A8D6",
                yellow: "#FFBC00"
            },
            lineHeight: {
                '10.5': "2.625rem",
                '12': "3rem",
            },
            fontSize: {
                'h1': [
                    '2.125rem',
                    {
                        lineHeight: '3rem',
                        fontWeight: '700',
                    }
                ],
                'h3': [
                    '1.5rem',
                    {
                        lineHeight: '2.25rem'
                    }
                ],
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
                s: "1320px 520px",
                m: "2131px 857px",
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
                128: "32rem",
            },
            backgroundPosition: {
                'center-85': "50% 85%",
                'center-top': "center top",
            },
            gridTemplateColumns: {
              300: "repeat(2, minmax(0, 300px))",
              364: "repeat(2, minmax(0, 364px))",
            },
            padding: {
                '2.25': ".5625rem"
            },
            margin: {
                '4.5': "1.125rem",
                '18': "4.5rem",
                '30': "7.5rem"
            }
        },
    },
    plugins: [],
}

