import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider } from "react-router-dom";
import { ThemeContextProvider } from "~contexts";
import { router } from "~utils";

const queryClient = new QueryClient();

export function App() {
    return (
        <ThemeContextProvider>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
            </QueryClientProvider>
        </ThemeContextProvider>
    );
}
