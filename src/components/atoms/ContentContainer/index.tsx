import { IChildren, IStyleProps } from "~types";
import { SetStyledComponent } from "~utils";

interface IContentContainerProps extends IChildren, IStyleProps {
    tag: "header" | "main" | "section" | "ul" | "li" | "figure" | "nav";
}

export function ContentContainer({ tag, children, ...rest }: IContentContainerProps) {
    return (
        <SetStyledComponent
            as={tag}
            {...rest}
        >
            {children}
        </SetStyledComponent>
    );
}
