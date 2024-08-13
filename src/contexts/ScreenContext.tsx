import { createContext, useCallback, useEffect, useState } from "react";
import { themeValues } from "~styles";
import { BreakpointAsNumberType, FunctionType, IChildren } from "~types";

interface IScreenContext {
    screenWidth: number;
    breakpoint: BreakpointAsNumberType;
    scroll: number;
    renderScrollToTopButton: boolean;
    handleClickScrollToTop: FunctionType;
}

export const ScreenContext = createContext({} as IScreenContext);
const SCREEN_WIDTH_INITIAL_STATE = window.innerWidth;
const SCROLL_INITIAL_STATE = window.scrollY;

export function ScreenContextProvider({ children }: IChildren) {
    const [screenWidth, setScreenWidth] = useState(SCREEN_WIDTH_INITIAL_STATE);
    const [scroll, setScroll] = useState(SCROLL_INITIAL_STATE);

    const handleScreenWidth = () => setScreenWidth(window.innerWidth);
    const handleScroll = () => setScroll(window.scrollY);
    const renderScrollToTopButton = scroll >= 20;

    const breakpoint = Object.entries(themeValues.screen.breakpoint).reduce((acc, [key, value]) => {
        acc[key as keyof BreakpointAsNumberType] = parseInt(value) * 16;
        return acc;
    }, {} as BreakpointAsNumberType);
    const handleClickScrollToTop = useCallback(
        () =>
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            }),
        []
    );

    useEffect(() => {
        window.addEventListener("resize", handleScreenWidth);

        return () => window.removeEventListener("resize", handleScreenWidth);
    }, [screenWidth]);
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <ScreenContext.Provider
            value={{
                screenWidth,
                breakpoint,
                scroll,
                renderScrollToTopButton,
                handleClickScrollToTop
            }}
        >
            {children}
        </ScreenContext.Provider>
    );
}
