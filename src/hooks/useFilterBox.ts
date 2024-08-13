import { useCallback, useContext, useEffect } from "react";
import { CatalogContext, FilterContext } from "~contexts";
import { FilterType } from "~types";
import { useFetchFilter, useFetchPokemonListByFilter } from "./usePokeApi";
import { useToggle } from "./useToggle";

const TOGGLE_INITIAL_STATE = {
    initialState: false,
    alternativeState: true
};

export const useFilterBox = (filter: FilterType) => {
    const { catalog, handleCatalog } = useContext(CatalogContext);
    const { activeFilter, handleFilter } = useContext(FilterContext);
    const { data: options } = useFetchFilter(filter);
    const { state: visibility, handleValue: handleToggleVisibility } = useToggle(TOGGLE_INITIAL_STATE);
    const { isLoading, isError, data } = useFetchPokemonListByFilter(filter, catalog.filter, activeFilter);

    const optionColor = useCallback(
        (filter: string) => {
            const color = filter === catalog.filter ? "brand" : "primary";

            return color;
        },
        [catalog.filter]
    );
    const handleClickToggleVisibility = useCallback(() => {
        handleToggleVisibility();
    }, [handleToggleVisibility]);

    const handleClickFetchPokemonByFilter = useCallback(
        (option: string) => {
            handleCatalog({
                filter: option
            });
            handleFilter(filter);
        },
        [filter, handleCatalog, handleFilter]
    );

    useEffect(() => {
        handleCatalog({
            isLoading,
            isError,
            data: {
                count: data?.length ?? 0,
                list: data ?? []
            }
        });
    }, [data, handleCatalog, isError, isLoading]);

    return { visibility, handleClickToggleVisibility, handleClickFetchPokemonByFilter, options, optionColor };
};
