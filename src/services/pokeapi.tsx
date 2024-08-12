import { IPokemon, IPokemonPrimaryCard } from "~types";
import { formatPokemonPrimaryCard, getRandomNumber } from "~utils";
import { api } from "./api";

const MAX_NUMBER_POKÉMON_IN_RANDOM_LIST = 12;

export async function getPokemonDataFromApi(id: string | number) {
    const endpoint = `pokemon/${id}`;
    const { data } = await api.get<IPokemon>(endpoint);

    return data;
}

export async function getRandomPokemonList() {
    const getRandomPokemon = async (id: number): Promise<IPokemonPrimaryCard> => {
        try {
            const data = await getPokemonDataFromApi(id);

            return formatPokemonPrimaryCard(data);
        } catch {
            const newId = getRandomNumber();
            const newPokemon = await getRandomPokemon(newId);

            return newPokemon;
        }
    };
    const promises = Array.from({ length: MAX_NUMBER_POKÉMON_IN_RANDOM_LIST }, () => {
        const id = getRandomNumber();

        return getRandomPokemon(id);
    });
    const resolvePromise = await Promise.all(promises);

    return resolvePromise;
}
