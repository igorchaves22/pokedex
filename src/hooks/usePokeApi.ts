import { useQuery } from "react-query";
import { getRandomPokemonList } from "~services";
import { IPokemonPrimaryCard } from "~types";

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
