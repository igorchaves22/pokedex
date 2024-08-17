import { render } from "@testing-library/react";
import { MockThemeProvider, mockThemeValues } from "~tests";
import { Icon } from ".";

describe("Component - Icon", () => {
    it("Should render HTML tag as 'svg'", () => {
        const { container } = render(
            <MockThemeProvider>
                <Icon icon="Airplay" />
            </MockThemeProvider>
        );

        const iconElement = container.querySelector("svg");
        expect(iconElement).toBeInTheDocument();
        expect(iconElement?.tagName.toLocaleLowerCase()).toBe("svg");
    });
    it("Should render component with your default props", () => {
        const { container, asFragment } = render(
            <MockThemeProvider>
                <Icon icon="Airplay" />
            </MockThemeProvider>
        );

        const iconElement = container.querySelector("svg");
        expect(iconElement).toBeInTheDocument();
        expect(iconElement).toHaveStyleRule("display", "block");
        expect(iconElement).toHaveStyleRule("font-size", mockThemeValues.icon.primary);
        expect(asFragment()).toMatchSnapshot();
    });
});
