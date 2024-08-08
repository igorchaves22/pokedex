import { IStyleProps } from "~types";
import { SetStyledComponent } from "~utils";

interface ILoaderProps extends IStyleProps {}

export function Loader({ ...rest }: ILoaderProps) {
    return (
        <SetStyledComponent
            as="div"
            $width={5}
            $height={5}
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
