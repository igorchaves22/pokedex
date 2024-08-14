import { Container } from "~components/atoms";
import { Figure } from "~components/molecules";
import { IPokemonTertiaryCard } from "~types";

interface IPokemonTertiaryCardProps extends IPokemonTertiaryCard {}

export function PokemonTertiaryCard({ name, sprites }: IPokemonTertiaryCardProps) {
    return (
        <Container
            tag="li"
            $width="max-content"
            $height="min-content"
            $listStyle="none"
        >
            <Figure
                text={name}
                src={sprites.front}
                $display="grid"
                $gridColumn="100%"
                $gap={{ row: "xs" }}
                image={{
                    $width: 3,
                    $height: 3
                }}
                font={{
                    $font: "xs",
                    $textTransform: "capitalize"
                }}
            />
        </Container>
    );
}
