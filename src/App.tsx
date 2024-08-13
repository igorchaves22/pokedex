import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider } from "react-router-dom";
import { FavoritesContextProvider, ScreenContextProvider, ThemeContextProvider } from "~contexts";
import { router } from "~utils";

const queryClient = new QueryClient();

export function App() {
    return (
        <ThemeContextProvider>
            <ScreenContextProvider>
                <QueryClientProvider client={queryClient}>
                    <FavoritesContextProvider>
                        <RouterProvider router={router} />
                    </FavoritesContextProvider>
                </QueryClientProvider>
            </ScreenContextProvider>
        </ThemeContextProvider>
    );
}
