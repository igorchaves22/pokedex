import bgImage from "~assets/image/pokeballs.png";
import { ContentContainer, Font } from "~components/atoms";
import { PageLayout, PokemonList } from "~components/molecules";
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
            <ContentContainer
                tag="section"
                $width={32}
                $height="min-content"
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
                    Dive into the pokémon universe and{" "}
                    <Font
                        tag="span"
                        $color="brand"
                    >
                        don't miss
                    </Font>{" "}
                    the chance to{" "}
                    <Font
                        tag="span"
                        $color="brand"
                    >
                        Pokémon master
                    </Font>
                </Font>
            </ContentContainer>
            <PokemonList
                loading={isLoading}
                error={isError}
                list={{
                    $width: 40
                }}
            >
                {data?.map((pokemon) => (
                    <PokemonSecondaryCard
                        key={pokemon.id}
                        {...pokemon}
                    />
                ))}
            </PokemonList>
        </PageLayout>
    );
}
