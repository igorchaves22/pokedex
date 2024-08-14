import { Container, Font, Image, Loader } from "~components/atoms";
import { Figure, PageLayout, PokemonInfoSection, PokemonList } from "~components/molecules";
import { PokemonSecondaryCard, PokemonTertiaryCard } from "~components/organisms";
import { useDetails } from "~hooks";
import { pokemonIconsType, replaceHyphensWithSpaces } from "~utils";

export function Details() {
    const { isLoading, isError, data } = useDetails();

    return (
        <PageLayout $placeContent={{ align: "start" }}>
            {isLoading ? (
                <Loader />
            ) : isError ? (
                <Font tag="p">No Pokémon found!</Font>
            ) : (
                <>
                    <Container
                        tag="section"
                        $width="100%"
                        $height="min-content"
                        $display="grid"
                        $gridColumn="100%"
                        $gap={{ row: "md", column: "xxl" }}
                        $media={{
                            breakpoint: "md",
                            styles: {
                                $gridColumn: ["1fr", "max-content", "1fr"]
                            }
                        }}
                    >
                        <Container
                            tag="section"
                            $width="100%"
                            $height="min-content"
                            $display="grid"
                            $gridColumn="100%"
                            $placeItems="center"
                        >
                            <Font
                                tag="p"
                                $color="brand"
                                $font="sm"
                                $textAlign="left"
                            >
                                #{data?.order}
                            </Font>
                            <Font
                                tag="h1"
                                $font="mega"
                                $textAlign="left"
                                $textTransform="capitalize"
                            >
                                {replaceHyphensWithSpaces(data?.name ?? "")}
                            </Font>
                            <Font
                                tag="p"
                                $textAlign="left"
                            >
                                {data?.nameJa}
                            </Font>
                            <Image
                                src={data?.sprites.front}
                                alt={data?.name}
                                $width={20}
                                $height="min-content"
                                $objectFit="contain"
                            />
                        </Container>
                        <Container
                            tag="ul"
                            $width="100%"
                            $height="min-content"
                            $padding={{ top: "sm", right: "xxl", bottom: "sm", left: "xxl" }}
                            $border={{
                                size: "primary",
                                color: "brand"
                            }}
                            $borderRadius="secondary"
                            $display="flex"
                            $flexWrap="wrap"
                            $gap={{ row: "md", column: "lg" }}
                            $placeContent="center"
                            $media={{
                                breakpoint: "md",
                                styles: {
                                    $width: "min-content",
                                    $height: "100%",
                                    $padding: { top: "xxl", right: "sm", bottom: "xxl", left: "sm" }
                                }
                            }}
                        >
                            {data?.types.map(({ name }) => (
                                <Container
                                    tag="li"
                                    key={name}
                                    $width="max-content"
                                    $height="min-content"
                                    $listStyle="none"
                                >
                                    <Figure
                                        src={pokemonIconsType[name]}
                                        text={name}
                                        $gap={{ row: "xs" }}
                                        image={{
                                            $width: 2,
                                            $height: 2
                                        }}
                                        font={{
                                            $font: "sm",
                                            $textTransform: "capitalize"
                                        }}
                                    />
                                </Container>
                            ))}
                        </Container>
                        <Container
                            tag="section"
                            $width="100%"
                            $height="min-content"
                            $display="grid"
                            $gridColumn="100%"
                            $gap={{ row: "lg" }}
                            $placeContent={{ align: "space-between" }}
                            $media={{
                                breakpoint: "md",
                                styles: {
                                    $height: "100%"
                                }
                            }}
                        >
                            <Font
                                tag="p"
                                $media={{
                                    breakpoint: "md",
                                    styles: {
                                        $textAlign: "justify"
                                    }
                                }}
                            >
                                {data?.description}
                            </Font>
                            <PokemonInfoSection title="Abilities">
                                <Font
                                    tag="p"
                                    $font="xs"
                                    $textAlign="left"
                                    $textTransform="capitalize"
                                >
                                    {data?.abilities}
                                </Font>
                            </PokemonInfoSection>
                            <PokemonInfoSection title="Evolutions">
                                <PokemonList
                                    loading={false}
                                    error={false}
                                >
                                    {data?.evolutionChain.map((pokemon) => (
                                        <PokemonSecondaryCard
                                            key={pokemon.id}
                                            pokemon={pokemon}
                                        />
                                    ))}
                                </PokemonList>
                            </PokemonInfoSection>
                        </Container>
                    </Container>
                    <PokemonInfoSection title="Varieties">
                        <PokemonList
                            loading={false}
                            error={false}
                        >
                            {data?.allVarieties.map((pokemon) => (
                                <PokemonSecondaryCard
                                    key={pokemon.id}
                                    pokemon={pokemon}
                                />
                            ))}
                        </PokemonList>
                    </PokemonInfoSection>
                    <PokemonInfoSection title="All Versions">
                        {data?.allVersions.map(({ generation, versions }) => (
                            <PokemonInfoSection
                                key={generation}
                                title={replaceHyphensWithSpaces(generation)}
                                font={{
                                    $font: "md"
                                }}
                            >
                                <PokemonList
                                    loading={false}
                                    error={false}
                                >
                                    {versions.map(({ name, pokemon }) => (
                                        <PokemonTertiaryCard
                                            key={name}
                                            name={replaceHyphensWithSpaces(name)}
                                            sprites={pokemon.sprites}
                                        />
                                    ))}
                                </PokemonList>
                            </PokemonInfoSection>
                        ))}
                    </PokemonInfoSection>
                </>
            )}
        </PageLayout>
    );
}
