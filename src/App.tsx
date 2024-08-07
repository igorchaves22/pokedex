import { PageLayout } from "~components/molecules";
import { ThemeContextProvider } from "~contexts";

export function App() {
    return (
        <ThemeContextProvider>
            <PageLayout>Pokedex</PageLayout>
        </ThemeContextProvider>
    );
}
