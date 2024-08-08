import { ContentContainer } from "~components/atoms";
import { Image } from "~components/atoms/Image";
import { IPokemonSecondaryCard } from "~types";

interface IPokemonSecondaryCardProps extends IPokemonSecondaryCard {}

export function PokemonSecondaryCard({ sprites, name }: IPokemonSecondaryCardProps) {
    return (
        <ContentContainer
            tag="li"
            $width={1.75}
            $height={1.75}
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
                src={sprites.other.showdown.front_default}
                alt={name}
                $width="100%"
                $height="100%"
                $objectFit="contain"
            />
        </ContentContainer>
    );
}
