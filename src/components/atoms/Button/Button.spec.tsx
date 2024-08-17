import { fireEvent, render } from "@testing-library/react";
import { mockHandleClick, MockThemeProvider, mockThemeValues } from "~tests";
import { Button } from ".";

describe("Component - Button", () => {
    it("Should render HTML tag as 'button'", () => {
        const { getByText } = render(
            <MockThemeProvider>
                <Button>button</Button>
            </MockThemeProvider>
        );

        const buttonElement = getByText("button");
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement.tagName.toLocaleLowerCase()).toBe("button");
    });
    it("Should render component with your default props", () => {
        const { getByText, asFragment } = render(
            <MockThemeProvider>
                <Button>button</Button>
            </MockThemeProvider>
        );

        const buttonElement = getByText("button");
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveAttribute("type", "button");
        expect(buttonElement).toHaveStyleRule("width", "max-content");
        expect(buttonElement).toHaveStyleRule("height", "min-content");
        expect(buttonElement).toHaveStyleRule("border", "none");
        expect(buttonElement).toHaveStyleRule("outline", "none");
        expect(buttonElement).toHaveStyleRule("background-color", "transparent");
        expect(buttonElement).toHaveStyleRule("color", mockThemeValues.color.primary);
        expect(buttonElement).toHaveStyleRule("font", mockThemeValues.font.md);
        expect(buttonElement).toHaveStyleRule("text-align", "center");
        expect(buttonElement).toHaveStyleRule("cursor", "pointer");
        expect(asFragment()).toMatchSnapshot();
    });
    it("Should render component with type='submit'", () => {
        const { getByText } = render(
            <MockThemeProvider>
                <Button type="submit">button</Button>
            </MockThemeProvider>
        );

        const buttonElement = getByText("button");
        expect(buttonElement).toHaveAttribute("type", "submit");
    });
    it("Should render component with type='reset'", () => {
        const { getByText } = render(
            <MockThemeProvider>
                <Button type="reset">button</Button>
            </MockThemeProvider>
        );

        const buttonElement = getByText("button");
        expect(buttonElement).toHaveAttribute("type", "reset");
    });
    it("Should call onClick handler when component is clicked", () => {
        const { getByText } = render(
            <MockThemeProvider>
                <Button onClick={mockHandleClick}>Click me</Button>
            </MockThemeProvider>
        );

        const buttonElement = getByText("Click me");
        fireEvent.click(buttonElement);
        expect(mockHandleClick).toHaveBeenCalledTimes(1);
    });
    it("Should render a disabled component and not call onClick handler", () => {
        const { getByText } = render(
            <MockThemeProvider>
                <Button
                    onClick={mockHandleClick}
                    disabled
                >
                    Click me
                </Button>
            </MockThemeProvider>
        );

        const buttonElement = getByText("Click me");
        expect(buttonElement).toBeDisabled();
        fireEvent.click(buttonElement);
        expect(mockHandleClick).not.toHaveBeenCalled();
    });
});
