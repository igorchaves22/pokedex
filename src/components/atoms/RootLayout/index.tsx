import { Outlet } from "react-router-dom";
import { IChildren } from "~types";

interface IRootLayoutProps extends Partial<IChildren> {}

export function RootLayout({ children }: IRootLayoutProps) {
    return children ?? <Outlet />;
}
