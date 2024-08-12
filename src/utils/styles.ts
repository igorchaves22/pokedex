import styled, { css } from "styled-components";
import {
    BaseStylePropsType,
    DeepPartial,
    IStyleProps,
    ITheme,
    PlaceType,
    SpacingType,
    UniqueAlignPropsType,
    UniqueBackgroundPositionPropsType,
    UniqueColorPropsType,
    UniqueSpacingPropsType
} from "~types";

export const applyStyle = <T>(param: T, style: ReturnType<typeof css>) => param && style;

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
        if ("top" in spacing || "right" in spacing || "bottom" in spacing || "left" in spacing) {
            const top = getSpacingValue(spacing.top);
            const right = getSpacingValue(spacing.right);
            const bottom = getSpacingValue(spacing.bottom);
            const left = getSpacingValue(spacing.left);

            return `${top} ${right} ${bottom} ${left}`;
        } else if ("row" in spacing || "column" in spacing) {
            const row = getSpacingValue(spacing.row);
            const column = getSpacingValue(spacing.column);

            return `${row} ${column}`;
        }

        return 0;
    }

    return 0;
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

export const generateStyles = (theme: ITheme, styleProps: IStyleProps) => {
    const widthStyle = () => {
        const { $width } = styleProps;

        return applyStyle(
            $width,
            css`
                width: ${typeof $width === "number" ? `min(100%, ${$width}rem)` : $width};
            `
        );
    };
    const heightStyle = () => {
        const { $height } = styleProps;

        return applyStyle(
            $height,
            css`
                height: ${typeof $height === "number" ? `${$height}rem` : $height};
            `
        );
    };
    const minHeightStyle = () => {
        const { $minHeight } = styleProps;

        return applyStyle(
            $minHeight,
            css`
                min-height: ${typeof $minHeight === "number" ? `${$minHeight}rem` : $minHeight};
            `
        );
    };
    const paddingStyle = () => {
        const { $padding } = styleProps;

        return applyStyle(
            $padding,
            css`
                padding: ${setSpacing(theme, $padding)};
            `
        );
    };
    const borderTransparentStyle = () => {
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
    const borderStyle = () => {
        const { $border } = styleProps;

        return applyStyle(
            $border,
            css`
                border: ${$border === "none"
                    ? $border
                    : `${theme.border.size[$border?.size ?? "primary"]} solid ${theme.color[$border?.color ?? "primary"]}`};
            `
        );
    };
    const borderRadiusStyle = () => {
        const { $borderRadius } = styleProps;

        return applyStyle(
            $borderRadius,
            css`
                border-radius: ${$borderRadius === "100%" ? $borderRadius : theme.border.radius[$borderRadius!]};
            `
        );
    };
    const listStyle = () => {
        const { $listStyle } = styleProps;

        return applyStyle(
            $listStyle,
            css`
                list-style: ${$listStyle};
            `
        );
    };
    const objectFitStyle = () => {
        const { $objectFit } = styleProps;

        return applyStyle(
            $objectFit,
            css`
                object-fit: ${$objectFit};
            `
        );
    };
    const displayStyle = () => {
        const { $display } = styleProps;

        return applyStyle(
            $display,
            css`
                display: ${$display};
            `
        );
    };
    const gridColumnStyle = () => {
        const { $gridColumn } = styleProps;

        return applyStyle(
            $gridColumn,
            css`
                grid: min-content / ${setGridColumn(theme, $gridColumn)};
            `
        );
    };
    const flexDirectionStyle = () => {
        const { $flexDirection } = styleProps;

        return applyStyle(
            $flexDirection,
            css`
                flex-direction: ${$flexDirection};
            `
        );
    };
    const flexWrapStyle = () => {
        const { $flexWrap } = styleProps;

        return applyStyle(
            $flexWrap,
            css`
                flex-wrap: ${$flexWrap};
            `
        );
    };
    const gapStyle = () => {
        const { $gap } = styleProps;

        return applyStyle(
            $gap,
            css`
                gap: ${setSpacing(theme, $gap)};
            `
        );
    };
    const placeContentStyle = () => {
        const { $placeContent } = styleProps;

        return applyStyle(
            $placeContent,
            css`
                place-content: ${setPlace($placeContent)};
            `
        );
    };
    const placeItemsStyle = () => {
        const { $placeItems } = styleProps;

        return applyStyle(
            $placeItems,
            css`
                place-items: ${setPlace($placeItems)};
            `
        );
    };
    const backgroundStyle = () => {
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
                background-repeat: no-repeat;
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
            ${color};
            ${image};
            ${position};
            ${size};
        `;
    };
    const colorStyle = () => {
        const { $color } = styleProps;

        return applyStyle(
            $color,
            css`
                color: ${theme.color[$color!]};
            `
        );
    };
    const fontStyle = () => {
        const { $font } = styleProps;

        return applyStyle(
            $font,
            css`
                font: ${theme.font[$font!]};
            `
        );
    };
    const textAlignStyle = () => {
        const { $textAlign } = styleProps;

        return applyStyle(
            $textAlign,
            css`
                text-align: ${$textAlign};
            `
        );
    };
    const textDecorationStyle = () => {
        const { $textDecoration } = styleProps;

        return applyStyle(
            $textDecoration,
            css`
                text-decoration: ${$textDecoration};
            `
        );
    };
    const textTransformStyle = () => {
        const { $textTransform } = styleProps;

        return applyStyle(
            $textTransform,
            css`
                text-transform: ${$textTransform};
            `
        );
    };
    const animationStyle = () => {
        const { $animation } = styleProps;

        return applyStyle(
            $animation,
            css`
                animation: ${theme.animation[$animation?.name ?? "simpleRender"]}
                    ${theme.time[$animation?.duration ?? "primary"]} ease-in-out;
                animation-iteration-count: ${$animation?.iteration};
            `
        );
    };

    return css`
        ${widthStyle};
        ${heightStyle};
        ${minHeightStyle};
        ${paddingStyle};
        ${borderStyle};
        ${borderTransparentStyle};
        ${borderRadiusStyle};
        ${listStyle};
        ${objectFitStyle};
        ${displayStyle};
        ${gridColumnStyle};
        ${flexDirectionStyle};
        ${flexWrapStyle};
        ${gapStyle};
        ${placeContentStyle};
        ${placeItemsStyle};
        ${backgroundStyle};
        ${colorStyle};
        ${fontStyle};
        ${textAlignStyle};
        ${textDecorationStyle};
        ${textTransformStyle};
        ${animationStyle};
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
