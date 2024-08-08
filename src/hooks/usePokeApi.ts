import { useQuery } from "react-query";
import { IPokemon } from "~types";
import { gerRandomPokemon, getRandomNumber } from "~utils";

const MAX_NUMBER_POKÉMON_IN_RANDOM_LIST = 12;

export const useFetchRandomPokemonList = () => {
    const { isLoading, isError, data } = useQuery<IPokemon[]>(
        ["random-pokemon-list"],
        async () => {
            const promises = Array.from({ length: MAX_NUMBER_POKÉMON_IN_RANDOM_LIST }, () => {
                const id = getRandomNumber();

                return gerRandomPokemon(id);
            });
            const resolvePromise = await Promise.all(promises);

            return resolvePromise;
        },
        {
            retry: false,
            refetchOnWindowFocus: false
        }
    );

    return { isLoading, isError, data };
};
