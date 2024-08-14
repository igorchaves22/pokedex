import { IChildren, IStyleProps } from "~types";
import { SetStyledComponent } from "~utils";

interface IContainerProps extends IChildren, IStyleProps {
    tag: "header" | "main" | "footer" | "section" | "nav" | "ul" | "li" | "figure";
}

export function Container({ tag, children, ...rest }: IContainerProps) {
    return (
        <SetStyledComponent
            as={tag}
            $width="100%"
            $height="min-content"
            {...rest}
        >
            {children}
        </SetStyledComponent>
    );
}
