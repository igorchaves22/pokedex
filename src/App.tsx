import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider } from "react-router-dom";
import { ScreenContextProvider, ThemeContextProvider } from "~contexts";
import { router } from "~utils";

const queryClient = new QueryClient();

export function App() {
    return (
        <ThemeContextProvider>
            <ScreenContextProvider>
                <QueryClientProvider client={queryClient}>
                    <RouterProvider router={router} />
                </QueryClientProvider>
            </ScreenContextProvider>
        </ThemeContextProvider>
    );
}
