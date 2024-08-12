import bgImage from "~assets/image/pokeballs.png";
import { Container, Font } from "~components/atoms";
import { PageLayout, PokemonList, PokemonPrimaryCard } from "~components/molecules";
import { useFetchRandomPokemonList } from "~hooks";

export function Home() {
    const { isLoading, isError, data } = useFetchRandomPokemonList();

    return (
        <PageLayout
            $background={{
                image: bgImage,
                position: "center",
                size: "20rem"
            }}
            $media={{
                breakpoint: "md",
                styles: {
                    $placeItems: { justify: "start" },
                    $background: {
                        position: { x: 75 },
                        size: "28rem"
                    }
                }
            }}
        >
            <Container
                tag="section"
                $width={32}
                $display="grid"
                $gridColumn="100%"
                $gap={{
                    row: "sm"
                }}
            >
                <Font
                    tag="h1"
                    $font="xxl"
                    $media={{
                        breakpoint: "md",
                        styles: {
                            $textAlign: "justify"
                        }
                    }}
                >
                    Discover the Pokémon world with our{" "}
                    <Font
                        tag="span"
                        $color="brand"
                        $font="xxl"
                    >
                        Pokedex
                    </Font>
                </Font>
                <Font
                    tag="p"
                    $media={{
                        breakpoint: "md",
                        styles: {
                            $textAlign: "justify"
                        }
                    }}
                >
                    Dive into the pokémon universe and <Font tag="span">don't miss</Font> the chance to{" "}
                    <Font tag="span">Pokémon master</Font>
                </Font>
            </Container>
            <PokemonList
                loading={isLoading}
                error={isError}
                listStyle={{
                    $width: 35
                }}
            >
                {data?.map((pokemonData) => (
                    <PokemonPrimaryCard
                        key={pokemonData.id}
                        {...pokemonData}
                    />
                ))}
            </PokemonList>
        </PageLayout>
    );
}
