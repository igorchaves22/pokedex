import { RouterProvider } from "react-router-dom";
import { ThemeContextProvider } from "~contexts";
import { router } from "~utils";

export function App() {
    return (
        <ThemeContextProvider>
            <RouterProvider router={router} />
        </ThemeContextProvider>
    );
}
