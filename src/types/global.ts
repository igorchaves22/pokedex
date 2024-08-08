import { ImgHTMLAttributes, ReactNode } from "react";
import { PhosphorIcon } from "~utils";

export type FunctionType<T = void, R = void> = (params: T) => R;
export type PhosphorIconType = keyof typeof PhosphorIcon;
export type ImageType = ImgHTMLAttributes<HTMLImageElement>;
export type DeepPartial<T> = {
    [K in keyof T]?: DeepPartial<T[K]>;
};

export interface IChildren {
    children: ReactNode;
}
