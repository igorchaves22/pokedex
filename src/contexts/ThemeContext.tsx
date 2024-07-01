import { createContext, useCallback } from "react";
import { ThemeProvider } from "styled-components";
import { useLocalStorage, useToggle } from "~hooks";
import { GlobalStyles, themeValues } from "~styles";
import { FunctionType, IChildren, ITheme, IconType } from "~types";

type ThemeStatusType = "light" | "dark";

interface IThemeContext {
    themeStatus: ThemeStatusType;
    handleClickToggleThemeStatus: FunctionType;
    iconStatus: IconType;
}

export const ThemeContext = createContext({} as IThemeContext);

export function ThemeContextProvider({ children }: IChildren) {
    const { storedValue: themeStoredValue, handleStoredValue: handleThemeStoredValue } =
        useLocalStorage<ThemeStatusType>({
            key: "theme",
            initialValue: "light"
        });
    const { stateValue: themeStatus, handleStateValue: handleThemeStatus } = useToggle<ThemeStatusType>({
        initialState: themeStoredValue,
        alternativeState: themeStoredValue === "light" ? "dark" : "light",
        callback: handleThemeStoredValue
    });

    const value: IThemeContext = {
        themeStatus,
        handleClickToggleThemeStatus: useCallback(() => {
            handleThemeStatus();
        }, [handleThemeStatus]),
        iconStatus: themeStatus === "light" ? "SunDim" : "MoonStars"
    };
    const theme: ITheme = {
        ...themeValues,
        color: {
            brand: themeValues.color.brand,
            ...(themeStatus === "dark" ? themeValues.color.dark : themeValues.color.light)
        }
    };

    return (
        <ThemeContext.Provider value={value}>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}
