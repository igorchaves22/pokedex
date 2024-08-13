import { createContext, useCallback } from "react";
import { useLocalStorage } from "~hooks";
import { FunctionType, IChildren, IPokemonSecondaryCard, PhosphorIconType } from "~types";

interface IFavoritesContext {
    favorites: IPokemonSecondaryCard[];
    handleClick: FunctionType<IPokemonSecondaryCard, void>;
    icon: FunctionType<number, PhosphorIconType>;
}

export const FavoritesContext = createContext({} as IFavoritesContext);
const INITIAL_STATE: {
    key: "favorites";
    initialValue: [];
} = {
    key: "favorites",
    initialValue: []
};

export function FavoritesContextProvider({ children }: IChildren) {
    const { storedValue: favorites, handleStoredValue: handleFavorites } =
        useLocalStorage<IPokemonSecondaryCard[]>(INITIAL_STATE);

    const isFavorite = useCallback(
        (id: number) => {
            const isInFavorites = favorites.some((pokemon) => pokemon.id === id);

            return isInFavorites;
        },
        [favorites]
    );
    const addToFavorites = useCallback(
        (pokemon: IPokemonSecondaryCard) => {
            const newFavorites = [...favorites, pokemon];

            handleFavorites(newFavorites);
        },
        [favorites, handleFavorites]
    );
    const removeFromFavorites = useCallback(
        (id: number) => {
            const newFavorites = favorites.filter((pokemon) => pokemon.id !== id);

            handleFavorites(newFavorites);
        },
        [favorites, handleFavorites]
    );
    const handleClick = useCallback(
        (pokemon: IPokemonSecondaryCard) => {
            if (isFavorite(pokemon.id)) {
                removeFromFavorites(pokemon.id);
            } else {
                addToFavorites(pokemon);
            }
        },
        [addToFavorites, isFavorite, removeFromFavorites]
    );
    const icon = useCallback(
        (id: number) => {
            const setIcon = isFavorite(id) ? "Bookmarks" : "BookmarkSimple";

            return setIcon;
        },
        [isFavorite]
    );

    return (
        <FavoritesContext.Provider
            value={{
                favorites,
                handleClick,
                icon
            }}
        >
            {children}
        </FavoritesContext.Provider>
    );
}
