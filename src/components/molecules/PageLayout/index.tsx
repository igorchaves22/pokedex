import { ContentContainer } from "~components/atoms";
import { IChildren, IStyleProps } from "~types";

interface IPageContainer extends IChildren, IStyleProps {}

export function PageLayout({ children, ...rest }: IPageContainer) {
    return (
        <ContentContainer
            tag="main"
            {...rest}
        >
            {children}
        </ContentContainer>
    );
}
