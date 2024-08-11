import { themeValues } from "~styles";

export type ThemeStatusType = "light" | "dark";
export type ThemeValuesType = typeof themeValues;
export type ThemeBreakpointType = keyof ThemeValuesType["screen"]["breakpoint"];
export type ThemeSpacingType = keyof ThemeValuesType["spacing"];

export interface ITheme extends Omit<ThemeValuesType, "color"> {
    color: {
        brand: ThemeValuesType["color"]["brand"];
    } & ThemeValuesType["color"]["light"];
}
