import { DeepPartial } from "./global";
import {
    ThemeAnimationType,
    ThemeBorderRadiusType,
    ThemeBorderSizeType,
    ThemeBreakpointType,
    ThemeColorType,
    ThemeFontType,
    ThemeIconType,
    ThemeSpacingType,
    ThemeTimeType
} from "./theme";

export type UniqueSizePropsType = number | "auto" | "100%" | "100vh" | "min-content" | "max-content" | "1fr" | "2fr";
export type UniqueColorPropsType = "transparent" | ThemeColorType;
export type UniqueSpacingPropsType = "auto" | "100%" | ThemeSpacingType;
export type UniqueBackgroundPositionPropsType = number | "center" | "top" | "right" | "bottom" | "left";
export type UniqueAlignPropsType = "center" | "start" | "end" | "space-between" | "space-evenly";
export type UniqueOverflowPropsType = "hidden" | "scroll";
export type SpacingType =
    | UniqueSpacingPropsType
    | {
          [key in "top" | "right" | "bottom" | "left"]: UniqueSpacingPropsType;
      }
    | {
          [key in "row" | "column"]: ThemeSpacingType;
      };
export type OverflowType =
    | UniqueOverflowPropsType
    | {
          [key in "x" | "y"]: UniqueOverflowPropsType;
      };
export type PlaceType =
    | UniqueAlignPropsType
    | {
          [key in "align" | "justify"]: UniqueAlignPropsType;
      };
export type BaseStylePropsType = {
    width: UniqueSizePropsType;
    height: UniqueSizePropsType;
    minHeight: UniqueSizePropsType;
    margin: SpacingType;
    padding: SpacingType;
    border:
        | "none"
        | {
              size: ThemeBorderSizeType;
              color: ThemeColorType;
          };
    borderTransparent: "top" | "right" | "bottom" | "left";
    borderRadius: "100%" | ThemeBorderRadiusType;
    listStyle: "none";
    objectFit: "contain";
    overflow: OverflowType;
    outline: "none";
    position: "relative" | "absolute" | "fixed";
    zIndex: number;
    inset: SpacingType;
    display: "grid" | "flex" | "block";
    gridColumn: "max_width" | UniqueSizePropsType | UniqueSizePropsType[];
    flexDirection: "row" | "column";
    flexWrap: "wrap" | "wrap";
    gap: SpacingType;
    placeContent: PlaceType;
    placeItems: PlaceType;
    background: {
        color: UniqueColorPropsType;
        image: string;
        position:
            | UniqueBackgroundPositionPropsType
            | {
                  [key in "y" | "x"]: UniqueBackgroundPositionPropsType;
              };
        size: string;
    };
    filterDropShadow: string;
    color: ThemeColorType;
    font: ThemeFontType;
    iconSize: ThemeIconType;
    textAlign: "center" | "justify" | "left";
    textDecoration: "none";
    textTransform: "capitalize";
    cursor: "pointer";
    scrollBar: {
        size: ThemeBorderSizeType;
        color: UniqueColorPropsType;
        bgColor: UniqueColorPropsType;
    };
    animation: {
        name: ThemeAnimationType;
        duration: ThemeTimeType;
        iteration: "infinite" | "normal";
        fillMode: "forwards";
        delay: number;
    };
};
export type StylePropsType<T> = {
    [K in keyof T as `$${K & string}`]?: DeepPartial<T[K]>;
};

export interface IStyleProps extends StylePropsType<BaseStylePropsType> {
    $media?: {
        breakpoint: ThemeBreakpointType;
        styles: Omit<IStyleProps, "$media">;
    };
}
