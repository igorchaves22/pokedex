import { ImageType, IStyleProps } from "~types";
import { SetStyledComponent } from "~utils";

interface IImageProps extends ImageType, IStyleProps {}

export function Image({ ...rest }: IImageProps) {
    return (
        <SetStyledComponent
            as="img"
            $width={8}
            $height={8}
            {...rest}
        />
    );
}
