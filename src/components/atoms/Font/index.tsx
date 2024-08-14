import { IChildren, IStyleProps } from "~types";
import { SetStyledComponent } from "~utils";

interface IFontProps extends IChildren, IStyleProps {
    tag: "h1" | "h2" | "h4" | "p" | "span" | "figcaption";
}

export function Font({ tag, children, ...rest }: IFontProps) {
    return (
        <SetStyledComponent
            as={tag}
            $width="100%"
            $height="min-content"
            $color="primary"
            $font="md"
            $textAlign="center"
            {...rest}
        >
            {children}
        </SetStyledComponent>
    );
}
