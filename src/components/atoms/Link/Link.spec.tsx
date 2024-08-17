import { fireEvent, render, waitFor } from "@testing-library/react";
import { Route } from "react-router-dom";
import { MockRouterProvider, mockThemeValues } from "~tests";
import { Link } from ".";

describe("Component - Link", () => {
    it("Should render HTML tag as 'a'", () => {
        const { getByText } = render(
            <MockRouterProvider>
                <Route
                    path="/"
                    element={<Link to="/">link</Link>}
                />
            </MockRouterProvider>
        );

        const linkElement = getByText("link");
        expect(linkElement).toBeInTheDocument();
        expect(linkElement.tagName.toLocaleLowerCase()).toBe("a");
    });
    it("Should render component with your default props", () => {
        const { getByText, asFragment } = render(
            <MockRouterProvider>
                <Route
                    path="/"
                    element={<Link to="/">link</Link>}
                />
            </MockRouterProvider>
        );

        const linkElement = getByText("link");
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveAttribute("href", "/");
        expect(linkElement).toHaveStyleRule("width", "100%");
        expect(linkElement).toHaveStyleRule("height", "min-content");
        expect(linkElement).toHaveStyleRule("color", mockThemeValues.color.primary);
        expect(linkElement).toHaveStyleRule("font", mockThemeValues.font.md);
        expect(linkElement).toHaveStyleRule("text-align", "center");
        expect(linkElement).toHaveStyleRule("text-decoration", "none");
        expect(asFragment()).toMatchSnapshot();
    });
    it("Should navigate to the correct route on click", async () => {
        const { getByText } = render(
            <MockRouterProvider>
                <Route
                    path="/"
                    element={
                        <>
                            <h1>Home page</h1>
                            <Link to="/about">Click me to go to the about page</Link>
                        </>
                    }
                />
                <Route
                    path="/about"
                    element={<h1>About page</h1>}
                />
            </MockRouterProvider>
        );

        expect(getByText("Home page")).toBeInTheDocument();
        fireEvent.click(getByText("Click me to go to the about page"));
        await waitFor(() => {
            expect(getByText("About page")).toBeInTheDocument();
        });
    });
});
