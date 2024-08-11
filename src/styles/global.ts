import { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    ${({ theme }) => css`
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font: ${theme.font.md};
        }

        html {
            background-color: ${theme.color.main};
        }
    `}

`;
