import { ThemeBreakpointType, ThemeColorType } from "./theme";

export type DeepPartial<T> = {
    [K in keyof T]?: DeepPartial<T[K]>;
};
export type BaseStylePropsType = {
    background: {
        color: ThemeColorType;
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
