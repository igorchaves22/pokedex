import { useContext } from "react";
import { PageLayout, PokemonList } from "~components/molecules";
import { PokemonSecondaryCard } from "~components/organisms";
import { FavoritesContext } from "~contexts";

export function Favorites() {
    const { favorites } = useContext(FavoritesContext);

    return (
        <PageLayout $placeContent={{ align: "start" }}>
            <PokemonList
                loading={false}
                error={favorites.length <= 0}
                count={favorites.length}
            >
                {favorites.map((pokemon, index) => (
                    <PokemonSecondaryCard
                        key={pokemon.id}
                        pokemon={pokemon}
                        $animation={{
                            name: "renderFromTop",
                            duration: "primary",
                            iteration: "normal",
                            delay: index / favorites.length,
                            fillMode: "forwards"
                        }}
                    />
                ))}
            </PokemonList>
        </PageLayout>
    );
}
