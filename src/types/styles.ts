import { DeepPartial } from "./global";
import { ThemeBreakpointType, ThemeSpacingType } from "./theme";

export type UniqueSizePropsType = number | "auto" | "100%" | "100vh" | "min-content" | "max-content";
export type UniqueSpacingPropsType = "auto" | "100%" | ThemeSpacingType;
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
    display: "grid" | "flex" | "block";
    gridColumn: "max_width" | UniqueSizePropsType | UniqueSizePropsType[];
    gap: SpacingType;
    placeContent: PlaceType;
    placeItems: PlaceType;
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
