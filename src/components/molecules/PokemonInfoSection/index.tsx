import { Container, Font } from "~components/atoms";
import { IChildren, IStyleProps } from "~types";

interface IPokemonListProps extends IChildren {
    title: string;
    font?: IStyleProps;
}

export function PokemonInfoSection({ title, font, children }: IPokemonListProps) {
    return (
        <Container
            tag="section"
            $width="100%"
            $height="min-content"
            $display="flex"
            $flexDirection="column"
            $gap={{ row: "md" }}
            $placeItems="center"
        >
            <Font
                tag="h2"
                $font="lg"
                $textAlign="left"
                {...font}
            >
                {title}
            </Font>
            <Container
                tag="section"
                $width="100%"
                $height="min-content"
                $display="flex"
                $flexDirection="column"
                $gap={{ row: "xs" }}
            >
                {children}
            </Container>
        </Container>
    );
}
