import { createGlobalStyle, css } from "styled-components";
import { generateStyles } from "~utils";

export const GlobalStyles = createGlobalStyle`
    ${({ theme }) => css`
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font: ${theme.font.md};
        }

        html {
            ${generateStyles(theme, {
                $background: {
                    color: "main"
                },
                $scrollBar: {
                    size: "secondary",
                    color: "brand"
                }
            })}
        }
    `}

`;
