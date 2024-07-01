import { themeValues } from "~styles";

type ThemeValuesType = typeof themeValues;

export interface ITheme extends Omit<ThemeValuesType, "color"> {
    color: {
        brand: ThemeValuesType["color"]["brand"];
    } & ThemeValuesType["color"]["light"];
}
