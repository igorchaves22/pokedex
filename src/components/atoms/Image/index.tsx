import { ImageType, IStyleProps } from "~types";
import { SetStyledComponent } from "~utils";

interface IImageProps extends ImageType, IStyleProps {}

export function Image({ ...rest }: IImageProps) {
    return (
        <SetStyledComponent
            as="img"
            $width={10}
            $height={10}
            {...rest}
        />
    );
}
