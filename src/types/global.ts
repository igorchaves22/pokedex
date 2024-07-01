import * as Icon from "@phosphor-icons/react";
import { ReactNode } from "react";

export type FunctionType<T = void, R = void> = (arg: T) => R;
export type IconType = keyof typeof Icon;

export interface IChildren {
    children: ReactNode;
}
