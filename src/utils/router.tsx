import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "~components/templates";
import { Pokemon, Details, Favorites, Home, NotFound } from "~pages";

const pagesConfig = [
    {
        path: "/",
        title: "Home",
        element: <Home />
    },
    {
        path: "pokemon",
        title: "Pokemon",
        element: <Pokemon />,
        children: [
            {
                path: ":name",
                element: <Details />
            }
        ]
    },
    {
        path: "favorites",
        title: "Favorites",
        element: <Favorites />
    },

    {
        path: "*",
        element: <NotFound />
    }
];

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: pagesConfig
    }
]);
