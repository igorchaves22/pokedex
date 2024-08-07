import styled, { css } from "styled-components";
import { IStyleProps, ITheme, ThemeColorType } from "~types";

const setColor = (theme: ITheme, color?: ThemeColorType) => {
    if (!color) {
        return "transparent";
    } else if (color in theme.color) {
        return theme.color[color];
    }

    return "transparent";
};

export const applyStyle = <T>(param: T, style: ReturnType<typeof css>) => param && style;

export const generateStyles = (theme: ITheme, { $background }: IStyleProps) => {
    const setBackgroundStyle = applyStyle(
        $background?.color,
        css`
            background-color: ${setColor(theme, $background?.color)};
        `
    );

    return css`
        ${setBackgroundStyle};
    `;
};

export const SetStyledComponent = styled.div<IStyleProps>`
    ${({ theme, $media, ...rest }) => css`
        ${generateStyles(theme, rest)};
        ${$media &&
        css`
            @media (width >= ${theme.screen.breakpoint[$media.breakpoint]}) {
                ${generateStyles(theme, $media.styles)}
            }
        `};
    `}
`;
