import { Container, Image } from "~components/atoms";
import { IPokemonPrimaryCard } from "~types";

interface IPokemonPrimaryCardProps extends IPokemonPrimaryCard {}

export function PokemonPrimaryCard({ name, sprites }: IPokemonPrimaryCardProps) {
    return (
        <Container
            tag="li"
            $width={2.25}
            $height={2.25}
            $listStyle="none"
            $overflow="hidden"
            $media={{
                breakpoint: "md",
                styles: {
                    $width: 3.5,
                    $height: 3.5
                }
            }}
        >
            <Image
                src={sprites.front}
                alt={name}
                $width="100%"
                $height="100%"
                $objectFit="contain"
            />
        </Container>
    );
}
