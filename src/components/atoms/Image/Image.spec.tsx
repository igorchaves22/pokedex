import { render } from "@testing-library/react";
import { MockThemeProvider } from "~tests";
import { Image } from ".";

describe("Component - Image", () => {
    it("Should render HTML tag as 'img'", () => {
        const { container } = render(
            <MockThemeProvider>
                <Image />
            </MockThemeProvider>
        );

        const imgElement = container.querySelector("img");
        expect(imgElement).toBeInTheDocument();
        expect(imgElement?.tagName.toLocaleLowerCase()).toBe("img");
    });
    it("Should render component with your default props", () => {
        const { container, asFragment } = render(
            <MockThemeProvider>
                <Image />
            </MockThemeProvider>
        );

        const imgElement = container.querySelector("img");
        expect(imgElement).toBeInTheDocument();
        expect(imgElement).toHaveStyleRule("width", "min(100%, 8rem)");
        expect(imgElement).toHaveStyleRule("height", "8rem");
        expect(asFragment()).toMatchSnapshot();
    });
});
