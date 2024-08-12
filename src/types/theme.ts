import { themeValues } from "~styles";

export type ThemeStatusType = "light" | "dark";
export type ThemeValuesType = typeof themeValues;
export type ThemeBreakpointType = keyof ThemeValuesType["screen"]["breakpoint"];
export type ThemeSpacingType = keyof ThemeValuesType["spacing"];
export type ThemeColorType =
    | keyof Omit<ThemeValuesType["color"], "dark" | "light">
    | keyof ThemeValuesType["color"]["light"];
export type ThemeFontType = keyof ThemeValuesType["font"];
export type ThemeBorderSizeType = keyof ThemeValuesType["border"]["size"];
export type ThemeBorderRadiusType = keyof ThemeValuesType["border"]["radius"];
export type ThemeTimeType = keyof ThemeValuesType["time"];
export type ThemeAnimationType = keyof ThemeValuesType["animation"];

export interface ITheme extends Omit<ThemeValuesType, "color"> {
    color: {
        brand: ThemeValuesType["color"]["brand"];
    } & ThemeValuesType["color"]["light"];
}
