import { Container } from "~components/atoms";
import { IChildren, IStyleProps } from "~types";

interface IPageContainer extends IChildren, IStyleProps {}

export function PageLayout({ children, ...rest }: IPageContainer) {
    return (
        <Container
            tag="main"
            $minHeight="100vh"
            $padding={{ top: "super", right: "md", bottom: "xxl", left: "md" }}
            $display="grid"
            $gridColumn="max_width"
            $gap={{ row: "mega" }}
            $placeContent="center"
            $placeItems="center"
            {...rest}
        >
            {children}
        </Container>
    );
}
