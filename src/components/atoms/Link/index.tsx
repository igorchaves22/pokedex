import { Link as ReactLink, LinkProps } from "react-router-dom";
import { IStyleProps } from "~types";
import { SetStyledComponent } from "~utils";

interface ILinkProps extends LinkProps, IStyleProps {}

export function Link({ children, ...rest }: ILinkProps) {
    return (
        <SetStyledComponent
            as={ReactLink}
            $width="100%"
            $height="min-content"
            $color="primary"
            $font="md"
            $textAlign="center"
            $textDecoration="none"
            {...rest}
        >
            {children}
        </SetStyledComponent>
    );
}
