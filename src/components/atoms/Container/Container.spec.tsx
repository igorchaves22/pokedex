import { render } from "@testing-library/react";
import { MockThemeProvider } from "~tests";
import { Container } from ".";

describe("Component - Container", () => {
    it("Should render HTML tag as 'main'", () => {
        const { getByText } = render(
            <MockThemeProvider>
                <Container tag="main">container</Container>
            </MockThemeProvider>
        );

        const componentElement = getByText("container");
        expect(componentElement).toBeInTheDocument();
        expect(componentElement.tagName.toLocaleLowerCase()).toBe("main");
    });
    it("Should render HTML tag as 'section'", () => {
        const { getByText } = render(
            <MockThemeProvider>
                <Container tag="section">container</Container>
            </MockThemeProvider>
        );

        const componentElement = getByText("container");
        expect(componentElement).toBeInTheDocument();
        expect(componentElement.tagName.toLocaleLowerCase()).toBe("section");
    });
    it("Should render component with your default props", () => {
        const { getByText, asFragment } = render(
            <MockThemeProvider>
                <Container tag="section">container</Container>
            </MockThemeProvider>
        );
        const componentElement = getByText("container");

        expect(componentElement).toBeInTheDocument();
        expect(componentElement).toHaveStyleRule("width", "100%");
        expect(componentElement).toHaveStyleRule("height", "min-content");
        expect(asFragment()).toMatchSnapshot();
    });
});
