import { IStyleProps } from "~types";
import { SetStyledComponent } from "~utils";

interface ILoaderProps extends IStyleProps {}

export function Loader({ ...rest }: ILoaderProps) {
    return (
        <SetStyledComponent
            $width={3.5}
            $height={3.5}
            $border={{
                size: "primary",
                color: "brand"
            }}
            $borderTransparent="top"
            $borderRadius="100%"
            $animation={{
                name: "rotate",
                duration: "primary",
                iteration: "infinite"
            }}
            {...rest}
        />
    );
}
