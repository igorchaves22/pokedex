import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "~components/atoms";
import { Catalog, Details, Favorites, Home, Page404 } from "~pages";

type routerType = ReturnType<typeof createBrowserRouter>;

export const navigablePages = [
    {
        path: "/",
        title: "Home"
    },
    {
        path: "/catalog",
        title: "Catalog"
    },
    {
        path: "/favorites",
        title: "Favorites"
    }
];

export const router: routerType = createBrowserRouter([
    {
        path: "",
        element: <RootLayout />,
        errorElement: (
            <RootLayout>
                <Page404 />
            </RootLayout>
        ),
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "catalog",
                children: [
                    {
                        path: "",
                        element: <Catalog />
                    },
                    {
                        path: ":id",
                        element: <Details />
                    }
                ]
            },
            {
                path: "favorites",
                element: <Favorites />
            }
        ]
    }
]);
