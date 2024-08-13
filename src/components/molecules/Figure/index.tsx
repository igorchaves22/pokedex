import { Container, Font, Image } from "~components/atoms";
import { ImageType, IStyleProps } from "~types";

interface IFigureProps extends IStyleProps, Pick<ImageType, "src"> {
    text: string;
    image?: IStyleProps;
    font?: IStyleProps;
}

export function Figure({ text, src, image, font, ...rest }: IFigureProps) {
    return (
        <Container
            tag="figure"
            $width="100%"
            $height="min-content"
            $display="grid"
            $gridColumn="100%"
            $placeItems="center"
            {...rest}
        >
            <Image
                alt={text}
                $width={8}
                $height={12}
                {...{ src, ...image }}
            />
            <Font
                tag="figcaption"
                {...font}
            >
                {text}
            </Font>
        </Container>
    );
}
