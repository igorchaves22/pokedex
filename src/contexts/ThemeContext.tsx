import { createContext, useCallback } from "react";
import { ThemeProvider } from "styled-components";
import { ThemeStatusType } from "types/theme";
import { useLocalStorage, useToggle } from "~hooks";
import { GlobalStyles, themeValues } from "~styles";
import { FunctionType, IChildren, PhosphorIconType } from "~types";

interface IThemeContext {
    themeStatusIcon: PhosphorIconType;
    handleClickToggleTheme: FunctionType;
}

export const ThemeContext = createContext({} as IThemeContext);
const LOCAL_STORAGE_INITIAL_STATE: {
    key: "theme";
    initialValue: "light";
} = {
    key: "theme",
    initialValue: "light"
};
const TOGGLE_INITIAL_STATE = <T,>(initialState: T, alternativeState: T, callback: FunctionType<T, void>) => {
    return {
        initialState,
        alternativeState,
        callback
    };
};

export function ThemeContextProvider({ children }: IChildren) {
    const { storedValue: themeStoredValue, handleStoredValue: handleThemeStoredValue } =
        useLocalStorage<ThemeStatusType>(LOCAL_STORAGE_INITIAL_STATE);
    const setAlternativeTheme = themeStoredValue === "light" ? "dark" : "light";
    const { state: themeStatus, handleValue: handleThemeStatus } = useToggle<ThemeStatusType>(
        TOGGLE_INITIAL_STATE(themeStoredValue, setAlternativeTheme, handleThemeStoredValue)
    );

    const themeStatusIcon = themeStatus === "light" ? "SunDim" : "MoonStars";
    const handleClickToggleTheme = useCallback(() => {
        handleThemeStatus();
    }, [handleThemeStatus]);
    const setThemeConfig = {
        ...themeValues,
        color: {
            brand: themeValues.color.brand,
            ...themeValues.color[themeStatus]
        }
    };

    return (
        <ThemeContext.Provider
            value={{
                themeStatusIcon,
                handleClickToggleTheme
            }}
        >
            <ThemeProvider theme={setThemeConfig}>
                <GlobalStyles />
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}
