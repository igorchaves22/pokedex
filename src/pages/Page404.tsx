import page404Image from "~assets/image/page404.png";
import { Figure, PageLayout } from "~components/molecules";

export function Page404() {
    return (
        <PageLayout>
            <Figure
                text="Page not found!"
                src={page404Image}
            />
        </PageLayout>
    );
}
