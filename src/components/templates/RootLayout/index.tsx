import { Outlet } from "react-router-dom";
import { Navbar } from "~components/organisms";
import { IChildren } from "~types";

interface IRootLayoutProps extends Partial<IChildren> {}

export function RootLayout({ children }: IRootLayoutProps) {
    return (
        <>
            <Navbar />
            {children ?? <Outlet />}
        </>
    );
}
