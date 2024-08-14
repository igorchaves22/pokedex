import { Outlet } from "react-router-dom";
import { Footer } from "~components/molecules";
import { Navbar } from "~components/organisms";
import { IChildren } from "~types";

interface IRootLayoutProps extends Partial<IChildren> {}

export function RootLayout({ children }: IRootLayoutProps) {
    return (
        <>
            <Navbar />
            {children ?? <Outlet />}
            <Footer />
        </>
    );
}
