import styled, { css } from "styled-components";
import {
    BaseStylePropsType,
    DeepPartial,
    IStyleProps,
    ITheme,
    PlaceType,
    SpacingType,
    UniqueAlignPropsType,
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

    return css`
        ${widthStyle};
        ${heightStyle};
        ${minHeightStyle};
        ${paddingStyle};
        ${displayStyle};
        ${gridColumnStyle};
        ${gapStyle};
        ${placeContentStyle};
        ${placeItemsStyle};
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
