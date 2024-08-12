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

export type UniqueSizePropsType = number | "auto" | "100%" | "100vh" | "min-content" | "max-content";
export type UniqueColorPropsType = "transparent" | ThemeColorType;
export type UniqueSpacingPropsType = "auto" | "100%" | ThemeSpacingType;
export type UniqueBackgroundPositionPropsType = number | "center" | "top" | "right" | "bottom" | "left";
export type UniqueAlignPropsType = "center" | "start" | "end" | "space-between" | "space-evenly";
export type SpacingType =
    | UniqueSpacingPropsType
    | {
          [key in "top" | "right" | "bottom" | "left"]: UniqueSpacingPropsType;
      }
    | {
          [key in "row" | "column"]: ThemeSpacingType;
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
    color: ThemeColorType;
    font: ThemeFontType;
    textAlign: "center" | "justify" | "left";
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
