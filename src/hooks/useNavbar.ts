import { useCallback, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ScreenContext, ThemeContext } from "~contexts";
import { PhosphorIconType } from "~types";
import { useToggle } from "./useToggle";

const INITIAL_STATE = {
    initialState: false,
    alternativeState: true
};

export const useNavbar = () => {
    const { screenWidth, breakpoint } = useContext(ScreenContext);
    const { themeStatusIcon, handleClickToggleTheme } = useContext(ThemeContext);
    const { state: visibility, handleValue: handleVisibility } = useToggle(INITIAL_STATE);
    const { pathname } = useLocation();

    const screenBreakpoint = breakpoint.md;
    const itsOnSmallScreen = screenWidth < screenBreakpoint;
    const itsOnLargeScreen = screenWidth >= screenBreakpoint;

    const menuIcon: PhosphorIconType = visibility ? "X" : "List";
    const renderNavigation = visibility || itsOnLargeScreen;
    const color = useCallback(
        (path: string) => {
            const color = path === pathname ? "brand" : "primary";

            return color;
        },
        [pathname]
    );
    const handleClickToggleVisibility = useCallback(() => {
        handleVisibility();
    }, [handleVisibility]);
    const navigablePages = [
        {
            path: "/",
            title: "Home"
        },
        {
            path: "/catalog",
            title: "Catalog"
        },
        {
            path: "/favorites",
            title: "Favorites"
        }
    ];

    useEffect(() => {
        handleVisibility(false);
    }, [itsOnLargeScreen]);

    return {
        itsOnSmallScreen,
        menuIcon,
        renderNavigation,
        handleClickToggleVisibility,
        navigablePages,
        color,
        themeStatusIcon,
        handleClickToggleTheme
    };
};
