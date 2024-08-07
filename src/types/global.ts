import { ReactNode } from "react";
import { PhosphorIcon } from "~utils";

export type FunctionType<T = void, R = void> = (params: T) => R;
export type PhosphorIconType = keyof typeof PhosphorIcon;

export interface IChildren {
    children: ReactNode;
}
