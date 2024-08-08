import styled, { css } from "styled-components";
import {
    BaseStylePropsType,
    DeepPartial,
    IStyleProps,
    ITheme,
    OverflowType,
    PlaceType,
    SpacingType,
    ThemeSpacingType,
    UniqueAlignPropsType,
    UniqueBackgroundPositionPropsType,
    UniqueColorPropsType,
    UniqueSpacingPropsType
} from "~types";

const setSpacing = (theme: ITheme, spacing?: DeepPartial<SpacingType>) => {
    const getSpacingValue = (value?: UniqueSpacingPropsType) => {
        if (value === "auto" || value === "100%") {
            return value;
        } else if (value) {
            return theme.spacing[value];
        } else {
            return 0;
        }
    };

    if (typeof spacing === "string") {
        return getSpacingValue(spacing);
    } else if (typeof spacing === "object") {
        const top = getSpacingValue(spacing.top);
        const right = getSpacingValue(spacing.right);
        const bottom = getSpacingValue(spacing.bottom);
        const left = getSpacingValue(spacing.left);

        return `${top} ${right} ${bottom} ${left}`;
    }

    return 0;
};

const setOverflow = (value?: DeepPartial<OverflowType>) => {
    if (typeof value === "string") {
        return value;
    } else if (typeof value === "object") {
        const { y, x } = value;

        return `${y ?? "visible"} ${x ?? "visible"}`;
    }

    return "center";
};

const setGridColumn = (theme: ITheme, column?: DeepPartial<BaseStylePropsType["gridColumn"]>) => {
    if (typeof column === "string") {
        if (column === "max_width") {
            return `min(100%, ${theme.screen.max_width})`;
        }

        return column;
    } else if (Array.isArray(column)) {
        return column.join(" ");
    }

    return "100%";
};

const setGap = (theme: ITheme, gap?: DeepPartial<BaseStylePropsType["gap"]>) => {
    const getGapValue = (value?: ThemeSpacingType) => {
        if (value) {
            return theme.spacing[value];
        }

        return 0;
    };

    if (typeof gap === "string") {
        return getGapValue(gap);
    } else if (typeof gap === "object") {
        const row = getGapValue(gap.row);
        const column = getGapValue(gap.column);

        return `${row} ${column}`;
    }

    return 0;
};

const setPlace = (place?: DeepPartial<PlaceType>) => {
    const getPlaceValue = (value?: UniqueAlignPropsType) => {
        return value ?? "center";
    };

    if (typeof place === "string") {
        return getPlaceValue(place);
    } else if (typeof place === "object") {
        const align = getPlaceValue(place.align);
        const justify = getPlaceValue(place.justify);

        return `${align} ${justify}`;
    }

    return "center";
};

const setBackgroundPosition = (position?: DeepPartial<BaseStylePropsType["background"]["position"]>) => {
    const getPosition = (value?: UniqueBackgroundPositionPropsType) => {
        if (typeof value === "string") {
            return value;
        } else if (typeof value === "number") {
            return `${value}%`;
        }

        return "center";
    };

    if (typeof position === "string") {
        return getPosition(position);
    } else if (typeof position === "object") {
        const x = getPosition(position.x);
        const y = getPosition(position.y);

        return `${x} ${y}`;
    }

    return "center";
};

const setColor = (theme: ITheme, color?: UniqueColorPropsType) => {
    if (!color || color === "transparent") {
        return "transparent";
    }

    return theme.color[color];
};

export const applyStyle = <T>(param: T, style: ReturnType<typeof css>) => param && style;

export const generateStyles = (theme: ITheme, styleProps: IStyleProps) => {
    const setWidthStyle = () => {
        const { $width } = styleProps;

        return applyStyle(
            $width,
            css`
                width: ${typeof $width === "number" ? `min(100%, ${$width}rem)` : $width};
            `
        );
    };
    const setHeightStyle = () => {
        const { $height } = styleProps;

        return applyStyle(
            $height,
            css`
                height: ${typeof $height === "number" ? `${$height}rem` : $height};
            `
        );
    };
    const setMinHeightStyle = () => {
        const { $minHeight } = styleProps;

        return applyStyle(
            $minHeight,
            css`
                min-height: ${typeof $minHeight === "number" ? `${$minHeight}rem` : $minHeight};
            `
        );
    };
    const setMarginStyle = () => {
        const { $margin } = styleProps;

        return applyStyle(
            $margin,
            css`
                margin: ${setSpacing(theme, $margin)};
            `
        );
    };
    const setPaddingStyle = () => {
        const { $padding } = styleProps;

        return applyStyle(
            $padding,
            css`
                padding: ${setSpacing(theme, $padding)};
            `
        );
    };
    const setBorderStyle = () => {
        const { $border } = styleProps;

        return applyStyle(
            $border,
            css`
                border: ${$border === "none"
                    ? $border
                    : `${theme.border.size[$border?.size ?? "primary"]} solid ${setColor(theme, $border?.color)}`};
            `
        );
    };
    const setBorderRadiusStyle = () => {
        const { $borderRadius } = styleProps;

        return applyStyle(
            $borderRadius,
            css`
                border-radius: ${$borderRadius};
            `
        );
    };
    const setBorderTransparentStyle = () => {
        const { $borderTransparent } = styleProps;

        return applyStyle(
            $borderTransparent,
            css`
                ${$borderTransparent === "top" &&
                css`
                    border-top-color: transparent;
                `}
                ${$borderTransparent === "right" &&
                css`
                    border-right-color: transparent;
                `}
                ${$borderTransparent === "bottom" &&
                css`
                    border-bottom-color: transparent;
                `}
                ${$borderTransparent === "left" &&
                css`
                    border-left-color: transparent;
                `}
            `
        );
    };
    const setListStyle = () => {
        const { $listStyle } = styleProps;

        return applyStyle(
            $listStyle,
            css`
                list-style: ${$listStyle};
            `
        );
    };
    const setObjectFitStyle = () => {
        const { $objectFit } = styleProps;

        return applyStyle(
            $objectFit,
            css`
                object-fit: ${$objectFit};
            `
        );
    };
    const setOverflowStyle = () => {
        const { $overflow } = styleProps;

        return applyStyle(
            $overflow,
            css`
                overflow: ${setOverflow($overflow)};
            `
        );
    };
    const setDisplayStyle = () => {
        const { $display } = styleProps;

        return applyStyle(
            $display,
            css`
                display: ${$display};
            `
        );
    };
    const setGridColumnStyle = () => {
        const { $gridColumn } = styleProps;

        return applyStyle(
            $gridColumn,
            css`
                grid: min-content / ${setGridColumn(theme, $gridColumn)};
            `
        );
    };
    const setFlexDirectionStyle = () => {
        const { $flexDirection } = styleProps;

        return applyStyle(
            $flexDirection,
            css`
                flex-direction: ${$flexDirection};
            `
        );
    };
    const setFlexWrapStyle = () => {
        const { $flexWrap } = styleProps;

        return applyStyle(
            $flexWrap,
            css`
                flex-wrap: ${$flexWrap};
            `
        );
    };
    const setGapStyle = () => {
        const { $gap } = styleProps;

        return applyStyle(
            $gap,
            css`
                gap: ${setGap(theme, $gap)};
            `
        );
    };
    const setPlaceContentStyle = () => {
        const { $placeContent } = styleProps;

        return applyStyle(
            $placeContent,
            css`
                place-content: ${setPlace($placeContent)};
            `
        );
    };
    const setPlaceItemsStyle = () => {
        const { $placeItems } = styleProps;

        return applyStyle(
            $placeItems,
            css`
                place-items: ${setPlace($placeItems)};
            `
        );
    };
    const setBackgroundStyle = () => {
        const { $background } = styleProps;
        const color = applyStyle(
            $background?.color,
            css`
                background-color: ${setColor(theme, $background?.color)};
            `
        );
        const image = applyStyle(
            $background?.image,
            css`
                background-image: ${`url(${$background?.image})`};
            `
        );
        const position = applyStyle(
            $background?.position,
            css`
                background-position: ${setBackgroundPosition($background?.position)};
            `
        );
        const size = applyStyle(
            $background?.size,
            css`
                background-size: ${$background?.size};
            `
        );

        return css`
            background-repeat: no-repeat;

            ${color};
            ${image};
            ${position};
            ${size};
        `;
    };
    const setColorStyle = () => {
        const { $color } = styleProps;

        return applyStyle(
            $color,
            css`
                color: ${setColor(theme, $color)};
            `
        );
    };
    const setFontStyle = () => {
        const { $font } = styleProps;

        return applyStyle(
            $font,
            css`
                font: ${theme.font[$font!]};
            `
        );
    };
    const setTextAlignStyle = () => {
        const { $textAlign } = styleProps;

        return applyStyle(
            $textAlign,
            css`
                text-align: ${$textAlign};
            `
        );
    };
    const setTextDecorationStyle = () => {
        const { $textDecoration } = styleProps;

        return applyStyle(
            $textDecoration,
            css`
                text-decoration: ${$textDecoration};
            `
        );
    };
    const setTextTransformStyle = () => {
        const { $textTransform } = styleProps;

        return applyStyle(
            $textTransform,
            css`
                text-transform: ${$textTransform};
            `
        );
    };
    const setAnimationStyle = () => {
        const { $animation } = styleProps;

        return applyStyle(
            $animation,
            css`
                animation: ${$animation?.name && theme.animation[$animation?.name]}
                    ${$animation?.duration && theme.time[$animation?.duration]} ${$animation?.iteration} ease-in-out;
            `
        );
    };

    return css`
        ${setWidthStyle};
        ${setHeightStyle};
        ${setMinHeightStyle};
        ${setMarginStyle};
        ${setPaddingStyle};
        ${setBorderStyle};
        ${setBorderTransparentStyle};
        ${setBorderRadiusStyle};
        ${setListStyle};
        ${setObjectFitStyle};
        ${setOverflowStyle};
        ${setDisplayStyle};
        ${setGridColumnStyle};
        ${setFlexDirectionStyle};
        ${setFlexWrapStyle};
        ${setGapStyle};
        ${setPlaceContentStyle};
        ${setPlaceItemsStyle};
        ${setBackgroundStyle};
        ${setColorStyle};
        ${setFontStyle};
        ${setTextAlignStyle};
        ${setTextDecorationStyle};
        ${setTextTransformStyle};
        ${setAnimationStyle};
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
