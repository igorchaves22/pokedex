import { themeValues } from "~styles";

export type ThemeStatusType = "light" | "dark";
export type ThemeValuesType = typeof themeValues;
export type ThemeColorType =
    | keyof Omit<ThemeValuesType["color"], "dark" | "light">
    | keyof ThemeValuesType["color"]["light"];
export type ThemeBreakpointType = keyof ThemeValuesType["screen"]["breakpoint"];

export interface ITheme extends Omit<ThemeValuesType, "color"> {
    color: {
        brand: ThemeValuesType["color"]["brand"];
    } & ThemeValuesType["color"]["light"];
}
