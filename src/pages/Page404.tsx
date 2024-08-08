import bgImage from "~assets/image/page404.png";
import { Figure, PageLayout } from "~components/molecules";

export function Page404() {
    return (
        <PageLayout>
            <Figure
                src={bgImage}
                text="Page not found!"
                $gap={{ row: "lg" }}
                image={{
                    $width: 12,
                    $height: 15
                }}
                font={{
                    $font: "lg"
                }}
            />
        </PageLayout>
    );
}
