import { useQuery } from "react-query";
import {
    getDetails,
    getFilterDataFromApi,
    getPokemonDataFromApi,
    getPokemonList,
    getPokemonListByGeneration,
    getPokemonListByPokedex,
    getPokemonListByType,
    getRandomPokemonList,
    getSpeciesDataFromApi
} from "~services";
import { FilterType, ICatalog, IDetails, IPokemonPrimaryCard, IPokemonSecondaryCard } from "~types";
import { formatPokemonSecondaryCard, getIdFromUrl } from "~utils";

export const useFetchFilter = (url: string | null) => {
    const { data } = useQuery<{ name: string }[]>(
        ["filter", url],
        async () => {
            const data = await getFilterDataFromApi(url!);

            return data;
        },
        {
            retry: false,
            enabled: !!url
        }
    );

    return { data };
};

export const useFetchRandomPokemonList = () => {
    const { isLoading, isError, data } = useQuery<IPokemonPrimaryCard[]>(
        ["random-pokemon-list"],
        async () => {
            const data = await getRandomPokemonList();

            return data;
        },
        {
            retry: false,
            refetchOnWindowFocus: false
        }
    );

    return { isLoading, isError, data };
};

export const useFetchPokemonListByFilter = (
    filterType: FilterType,
    selected: string | null,
    activeFilter: FilterType
) => {
    const { isLoading, isError, data } = useQuery<IPokemonSecondaryCard[]>(
        ["pokemon-list-by-filter", filterType, selected],
        async () => {
            if (filterType !== activeFilter) {
                return [];
            }

            switch (filterType) {
                case "type": {
                    const data = await getPokemonListByType(selected!);

                    return data;
                }
                case "pokedex": {
                    const data = await getPokemonListByPokedex(selected!);

                    return data;
                }
                case "generation": {
                    const data = await getPokemonListByGeneration(selected!);

                    return data;
                }
                default: {
                    return [];
                }
            }
        },
        {
            retry: false,
            enabled: filterType === activeFilter && !!selected && selected.trim() !== ""
        }
    );

    return { isLoading, isError, data };
};

export const useFetchPokemon = (name: string | null) => {
    const { isLoading, isError, data } = useQuery<IPokemonSecondaryCard>(
        ["pokemon", name],
        async () => {
            const pokemon = await getPokemonDataFromApi(name!);
            const speciesId = getIdFromUrl(pokemon.species.url);
            const species = await getSpeciesDataFromApi(speciesId);
            const data = formatPokemonSecondaryCard({
                ...pokemon,
                ...species
            });

            return data;
        },
        {
            retry: false,
            enabled: !!name && !!name.trim()
        }
    );

    return { isLoading, isError, data };
};

export const useFetchPokemonList = (offset: number, limit: number) => {
    const { isLoading, isError, data } = useQuery<Pick<ICatalog["data"], "count" | "list">>(
        ["pokemon-list", offset, limit],
        async () => {
            const data = await getPokemonList(offset, limit);

            return data;
        },
        {
            retry: false
        }
    );

    return { isLoading, isError, data };
};

export const useFetchDetails = (name: string) => {
    const { isLoading, isError, data } = useQuery<IDetails>(
        ["details", name],
        async () => {
            const data = await getDetails(name);

            return data;
        },
        {
            retry: false,
            enabled: !!name
        }
    );

    return { isLoading, isError, data };
};
