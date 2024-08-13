import { ButtonHTMLAttributes, ImgHTMLAttributes, ReactNode } from "react";
import { PhosphorIcon } from "~utils";
import { ThemeBreakpointType } from "./theme";

export type FunctionType<T = void, R = void> = (params: T) => R;
export type PhosphorIconType = keyof typeof PhosphorIcon;
export type ImageType = ImgHTMLAttributes<HTMLImageElement>;
export type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>;
export type FilterType = "type" | "pokedex" | "generation" | null;
export type DeepPartial<T> = {
    [K in keyof T]?: DeepPartial<T[K]>;
};
export type BreakpointAsNumberType = {
    [key in ThemeBreakpointType]: number;
};

export interface IChildren {
    children: ReactNode;
}
export interface IPhosphorIcon {
    icon: PhosphorIconType;
}
export interface IValidationSearchSchema {
    search: string;
}
