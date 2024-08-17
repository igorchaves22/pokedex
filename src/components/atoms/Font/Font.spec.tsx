import { render } from "@testing-library/react";
import { MockThemeProvider, mockThemeValues } from "~tests";
import { Font } from ".";

describe("Component - Font", () => {
    it("Should render HTML tag as 'h1'", () => {
        const { getByText } = render(
            <MockThemeProvider>
                <Font tag="h1">font</Font>
            </MockThemeProvider>
        );

        const fontElement = getByText("font");
        expect(fontElement).toBeInTheDocument();
        expect(fontElement.tagName.toLocaleLowerCase()).toBe("h1");
    });
    it("Should render HTML tag as 'p'", () => {
        const { getByText } = render(
            <MockThemeProvider>
                <Font tag="p">font</Font>
            </MockThemeProvider>
        );

        const fontElement = getByText("font");
        expect(fontElement).toBeInTheDocument();
        expect(fontElement.tagName.toLocaleLowerCase()).toBe("p");
    });
    it("Should render component with your default props", () => {
        const { getByText, asFragment } = render(
            <MockThemeProvider>
                <Font tag="p">font</Font>
            </MockThemeProvider>
        );

        const fontElement = getByText("font");
        expect(fontElement).toBeInTheDocument();
        expect(fontElement).toHaveStyleRule("width", "100%");
        expect(fontElement).toHaveStyleRule("height", "min-content");
        expect(fontElement).toHaveStyleRule("color", mockThemeValues.color.primary);
        expect(fontElement).toHaveStyleRule("font", mockThemeValues.font.md);
        expect(fontElement).toHaveStyleRule("text-align", "center");
        expect(asFragment()).toMatchSnapshot();
    });
});
