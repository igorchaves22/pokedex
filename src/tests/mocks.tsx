import { MemoryRouter, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { themeValues } from "~styles";
import { IChildren } from "~types";

export const mockHandleClick = jest.fn();

export const mockThemeValues = {
    ...themeValues,
    color: {
        brand: themeValues.color.brand,
        ...themeValues.color.light
    }
};

export const MockThemeProvider = ({ children }: IChildren) => {
    return <ThemeProvider theme={mockThemeValues}>{children}</ThemeProvider>;
};

export const MockRouterProvider = ({ children }: IChildren) => {
    return (
        <MockThemeProvider>
            <MemoryRouter initialEntries={["/"]}>
                <Routes>{children}</Routes>
            </MemoryRouter>
        </MockThemeProvider>
    );
};
