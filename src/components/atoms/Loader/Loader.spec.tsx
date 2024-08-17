import { render } from "@testing-library/react";
import { MockThemeProvider, mockThemeValues } from "~tests";
import { Loader } from ".";

describe("Component - Link", () => {
    it("Should render HTML tag as 'div'", () => {
        const { getByTestId } = render(
            <MockThemeProvider>
                <Loader data-testid="loader" />
            </MockThemeProvider>
        );

        const loaderElement = getByTestId("loader");
        expect(loaderElement).toBeInTheDocument();
        expect(loaderElement.tagName.toLocaleLowerCase()).toBe("div");
    });
    it("Should render component with your default props", () => {
        const { getByTestId, asFragment } = render(
            <MockThemeProvider>
                <Loader data-testid="loader" />
            </MockThemeProvider>
        );

        const loaderElement = getByTestId("loader");
        expect(loaderElement).toBeInTheDocument();
        expect(loaderElement).toHaveStyleRule("width", "min(100%, 3.5rem)");
        expect(loaderElement).toHaveStyleRule("height", "3.5rem");
        expect(loaderElement).toHaveStyleRule(
            "border",
            `${mockThemeValues.border.size.primary} solid ${mockThemeValues.color.brand}`
        );
        expect(loaderElement).toHaveStyleRule("border-radius", "100%");
        expect(loaderElement).toHaveStyleRule("animation-iteration-count", "infinite");
        expect(asFragment()).toMatchSnapshot();
    });
});
