import { useContext } from "react";
import { Button, Container } from "~components/atoms";
import { FilterBox, PageLayout, PokemonList } from "~components/molecules";
import { Pagination, PokemonSecondaryCard, SearchForm } from "~components/organisms";
import { CatalogContext } from "~contexts";
import { catalogFilters } from "~utils";

export function Catalog() {
    const { catalog, handleClickResetAll } = useContext(CatalogContext);

    return (
        <PageLayout $placeContent={{ align: "start" }}>
            <Container
                tag="section"
                $width={65}
                $height="min-content"
                $display="grid"
                $gridColumn="100%"
                $gap={{ row: "md" }}
                $placeItems={{ justify: "end" }}
            >
                <SearchForm />
                <Container
                    tag="section"
                    $width="100%"
                    $height="min-content"
                    $display="flex"
                    $flexWrap="wrap"
                    $gap={{ row: "xs", column: "xl" }}
                    $placeContent="center"
                >
                    {catalogFilters.map(({ name }) => (
                        <FilterBox
                            key={name}
                            name={name}
                        />
                    ))}
                </Container>
                <Button
                    type="reset"
                    onClick={() => handleClickResetAll()}
                    $font="sm"
                >
                    reset all
                </Button>
            </Container>
            <PokemonList
                loading={catalog.isLoading}
                error={catalog.isError}
                count={catalog.data.count}
            >
                {catalog.data.list.map((pokemon, index) => (
                    <PokemonSecondaryCard
                        key={pokemon.id}
                        pokemon={pokemon}
                        $animation={{
                            name: "renderFromTop",
                            duration: "primary",
                            iteration: "normal",
                            delay: index / catalog.data.list.length,
                            fillMode: "forwards"
                        }}
                    />
                ))}
            </PokemonList>
            <Pagination />
        </PageLayout>
    );
}
