import { keyframes } from "styled-components";

export const themeValues = {
    color: {
        brand: "#d71313",
        light: {
            main: "#c7d9db",
            primary: "#101011",
            secondary: "#fbfbfb"
        },
        dark: {
            main: "#081123",
            primary: "#efeded",
            secondary: "#101011"
        }
    },
    screen: {
        max_width: "90rem",
        breakpoint: {
            tny: "20rem",
            xs: "30rem",
            sm: "36rem",
            md: "48rem",
            lg: "62rem",
            xl: "75rem",
            xxl: "90rem",
            mega: "120rem"
        }
    },
    spacing: {
        xs: "0.25rem",
        sm: "0.5rem",
        md: "1rem",
        lg: "1.5rem",
        xl: "2rem",
        xxl: "3rem",
        mega: "4rem",
        super: "7rem",
        ultra: "10rem"
    },
    font: {
        xs: "normal 500 0.75rem / normal 'Montserrat', 'sans-serif'",
        sm: "normal 500 0.875rem / normal 'Montserrat', 'sans-serif'",
        md: "normal 400 1rem / normal 'Montserrat', 'sans-serif'",
        lg: "normal 500 1.25rem / normal 'Montserrat', 'sans-serif'",
        xl: "normal 500 1.5rem / normal 'Montserrat', 'sans-serif'",
        xxl: "normal 700 1.875rem / normal 'Montserrat', 'sans-serif'",
        mega: "normal 700 2.25rem / normal 'Montserrat', 'sans-serif'"
    },
    border: {
        size: {
            primary: "0.125rem",
            secondary: "0.75rem"
        },
        radius: {
            primary: "0.5rem",
            secondary: "3rem"
        }
    },
    icon: {
        primary: "2.25rem",
        secondary: "1.85rem",
        tertiary: "1.25rem"
    },
    time: {
        primary: "0.25s"
    },
    animation: {
        rotate: keyframes`
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        `,
        simpleRender: keyframes`
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        `,
        renderFromTop: keyframes`
            from {
                transform: translateY(-100%);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        `,
        renderFromRight: keyframes`
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        `
    }
};
