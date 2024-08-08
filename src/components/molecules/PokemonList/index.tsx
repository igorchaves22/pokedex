import { ContentContainer, Font, Loader } from "~components/atoms";
import { IChildren, IStyleProps } from "~types";

interface IPokemonListProps extends IChildren {
    loading: boolean;
    error: boolean;
    list?: Pick<IStyleProps, "$width">;
}

export function PokemonList({ loading, error, list, children }: IPokemonListProps) {
    return (
        <ContentContainer
            tag="section"
            $width="100%"
            $height="min-content"
            $display="grid"
            $gridColumn="100%"
            $placeItems="center"
        >
            {loading ? (
                <Loader
                    $width={3}
                    $height={3}
                />
            ) : error ? (
                <Font
                    tag="p"
                    $color="brand"
                    $font="lg"
                >
                    No Pokémon found!
                </Font>
            ) : (
                <ContentContainer
                    tag="ul"
                    $width="100%"
                    $height="min-content"
                    $display="flex"
                    $flexWrap="wrap"
                    $gap={{ row: "sm", column: "lg" }}
                    $placeContent="center"
                    $media={{
                        breakpoint: "md",
                        styles: {
                            $gap: { row: "md", column: "xl" }
                        }
                    }}
                    {...list}
                >
                    {children}
                </ContentContainer>
            )}
        </ContentContainer>
    );
}
