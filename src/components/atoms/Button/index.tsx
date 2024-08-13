import { ButtonType, IStyleProps } from "~types";
import { SetStyledComponent } from "~utils";

interface IButtonProps extends ButtonType, IStyleProps {}

export function Button({ children, ...rest }: IButtonProps) {
    return (
        <SetStyledComponent
            as="button"
            type="button"
            $width="max-content"
            $height="min-content"
            $border="none"
            $outline="none"
            $background={{
                color: "transparent"
            }}
            $color="primary"
            $font="md"
            $textAlign="center"
            $cursor="pointer"
            {...rest}
        >
            {children}
        </SetStyledComponent>
    );
}
