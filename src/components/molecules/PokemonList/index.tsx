import { Container, Font, Loader } from "~components/atoms";
import { IChildren, IStyleProps } from "~types";
import { renderElement } from "~utils";

interface IPokemonListProps extends IChildren {
    loading: boolean;
    error: boolean;
    count?: number;
    listStyle?: IStyleProps;
}

export function PokemonList({ loading, error, count, listStyle, children }: IPokemonListProps) {
    return (
        <Container
            tag="section"
            $display="flex"
            $flexDirection="column"
            $gap={{ row: "md" }}
            $placeItems="center"
        >
            {loading ? (
                <Loader />
            ) : error ? (
                <Font tag="p">No Pokémon found!</Font>
            ) : (
                <>
                    {renderElement(
                        typeof count === "number",
                        <Font
                            tag="p"
                            $font="xs"
                            $textAlign="left"
                        >
                            Total number of Pokémon: {count}
                        </Font>
                    )}
                    <Container
                        tag="ul"
                        $display="flex"
                        $flexWrap="wrap"
                        $gap={{ row: "sm", column: "lg" }}
                        $placeContent="center"
                        {...listStyle}
                    >
                        {children}
                    </Container>
                </>
            )}
        </Container>
    );
}
