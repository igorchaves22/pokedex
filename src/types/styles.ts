import { DeepPartial } from "./global";
import {
    ThemeAnimationType,
    ThemeBorderRadiusType,
    ThemeBorderSizeType,
    ThemeBreakpointType,
    ThemeColorType,
    ThemeFontType,
    ThemeSpacingType,
    ThemeTimeType
} from "./theme";

export type UniqueColorPropsType = "transparent" | ThemeColorType;
export type UniqueSizePropsType = number | "100%" | "100vh" | "auto" | "min-content" | "max-content" | "1fr";
export type UniqueAlignPropsType = "center" | "start" | "end" | "space-between" | "space-evenly";
export type UniqueSpacingPropsType = "auto" | "100%" | ThemeSpacingType;
export type UniqueBackgroundPositionPropsType = number | "center" | "top" | "right" | "bottom" | "left";
export type UniqueOverflowPropsType = "hidden" | "scroll";
export type SpacingType =
    | UniqueSpacingPropsType
    | {
          [key in "top" | "right" | "bottom" | "left"]: UniqueSpacingPropsType;
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
              color: UniqueColorPropsType;
          };
    borderTransparent: "top" | "right" | "bottom" | "left";
    borderRadius: "100%" | ThemeBorderRadiusType;
    listStyle: "none";
    objectFit: "contain";
    overflow: OverflowType;
    display: "grid" | "flex";
    gridColumn: "max_width" | UniqueSizePropsType | UniqueSizePropsType[];
    flexDirection: "row" | "column";
    flexWrap: "wrap" | "wrap";
    gap:
        | ThemeSpacingType
        | {
              [key in "row" | "column"]: ThemeSpacingType;
          };
    placeContent: PlaceType;
    placeItems: PlaceType;
    background: {
        color: ThemeColorType;
        image: string;
        position:
            | UniqueBackgroundPositionPropsType
            | {
                  [key in "y" | "x"]: UniqueBackgroundPositionPropsType;
              };
        size: string;
    };
    color: ThemeColorType;
    font: ThemeFontType;
    textAlign: "center" | "justify";
    textDecoration: "none";
    textTransform: "capitalize";
    animation: {
        name: ThemeAnimationType;
        duration: ThemeTimeType;
        iteration: "infinite" | "normal";
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
