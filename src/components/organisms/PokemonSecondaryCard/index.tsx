import { useContext } from "react";
import { Container, Font, Icon, Link } from "~components/atoms";
import { Figure, IconButton } from "~components/molecules";
import { FavoritesContext } from "~contexts";
import { IPokemonSecondaryCard, IStyleProps } from "~types";
import { replaceHyphensWithSpaces } from "~utils";

interface IPokemonSecondaryCardProps extends Pick<IStyleProps, "$animation"> {
    pokemon: IPokemonSecondaryCard;
}

export function PokemonSecondaryCard({ pokemon, $animation }: IPokemonSecondaryCardProps) {
    const { icon, handleClick } = useContext(FavoritesContext);

    return (
        <Container
            tag="li"
            $width={8}
            $height="auto"
            $padding="sm"
            $border={{
                size: "primary",
                color: "primary"
            }}
            $borderRadius="primary"
            $listStyle="none"
            $animation={$animation}
        >
            <Container
                tag="section"
                $width="100%"
                $height="min-content"
                $display="grid"
                $gridColumn={["1fr", "max-content", "max-content"]}
                $gap={{ column: "xs" }}
            >
                <Font
                    tag="p"
                    $color="brand"
                    $font="sm"
                    $textAlign="left"
                >
                    #{pokemon.order}
                </Font>
                <Link to={`/catalog/${pokemon.name}`}>
                    <Icon
                        icon="Info"
                        $iconSize="tertiary"
                    />
                </Link>
                <IconButton
                    icon={icon(pokemon.id)}
                    button={{
                        onClick: () => handleClick(pokemon)
                    }}
                    iconStyles={{
                        $iconSize: "tertiary"
                    }}
                />
            </Container>
            <Figure
                src={pokemon.sprites.front}
                text={replaceHyphensWithSpaces(pokemon.name)}
                image={{
                    $width: 4,
                    $height: 4,
                    $objectFit: "contain",
                    $filterDropShadow: pokemon.color
                }}
                font={{
                    $font: "xs",
                    $textTransform: "capitalize"
                }}
            />
        </Container>
    );
}
